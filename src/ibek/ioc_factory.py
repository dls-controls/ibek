"""
functions for making Entity models
"""

from __future__ import annotations

import builtins
from pathlib import Path
from typing import Annotated, Any, Dict, List, Literal, Sequence, Tuple, Type, Union

from pydantic import Field, create_model, field_validator
from pydantic.fields import FieldInfo
from pydantic_core import PydanticUndefined
from ruamel.yaml.main import YAML

from ibek.utils import UTILS

from .args import EnumArg, IdArg, ObjectArg
from .ioc import IOC, Entity, EnumVal, clear_entity_model_ids, get_entity_by_id
from .support import Definition, Support


class IocFactory:
    """
    A Class for creating Generic IOC classes and instances
    """

    def __init__(self) -> None:
        self._entity_classes: Dict[str, Type[Entity]] = {}

    def ioc_deserialize(
        self, ioc_instance_yaml: Path, definition_yaml: List[Path]
    ) -> IOC:
        """
        Takes an ioc instance entities file, list of generic ioc definitions files.

        Returns a model of the resulting ioc instance
        """
        ioc_model = self.ioc_create_model(definition_yaml)

        # extract the ioc instance yaml into a dict
        ioc_instance_dict = YAML(typ="safe").load(ioc_instance_yaml)

        if ioc_instance_dict is None or "ioc_name" not in ioc_instance_dict:
            raise RuntimeError(
                f"Failed to load a valid ioc config from {ioc_instance_yaml}"
            )

        # extract the ioc name into UTILS for use in jinja renders
        name = UTILS.render({}, ioc_instance_dict["ioc_name"])
        UTILS.set_ioc_name(name)
        ioc_instance_dict["ioc_name"] = name

        # Create an IOC instance from the instance dict and the model
        ioc_instance = ioc_model(**ioc_instance_dict)
        # post processing to insert SubEntity instances
        self._process_collections(ioc_instance)

        return ioc_instance

    def ioc_create_model(self, definitions: List[Path]) -> Type[IOC]:
        """
        Take a list of definitions YAML and create an IOC model from it
        """
        entity_models = []

        clear_entity_model_ids()
        for definition in definitions:
            support_dict = YAML(typ="safe").load(definition)

            Support.model_validate(support_dict)

            # deserialize the support module definition file
            support = Support(**support_dict)
            # make Entity classes described in the support module definition file
            entity_models += self._make_entity_models(support)

        # Save the schema for IOC
        model = self._make_ioc_model(entity_models)

        return model

    def _process_collections(self, ioc_instance: IOC):
        """
        Process all the sub entity collections in the IOC instance
        """
        all_entities: List[Entity] = []

        def scan_sub_entities(entity: Entity):
            # recursive function to scan for SubEntities in an entity
            definition = entity.__definition__

            # add the parent standard entity
            all_entities.append(entity)

            # add in SubEntities if any
            for sub_entity in definition.sub_entities:
                # find the Entity Class that the SubEntity represents
                entity_cls = self._entity_classes[sub_entity.type]
                # get the SubEntity arguments
                sub_args_dict = sub_entity.model_dump()
                # jinja render any references to parent Args in the SubEntity Args
                for key, arg in sub_args_dict.items():
                    sub_args_dict[key] = UTILS.render(entity, arg)
                # cast the SubEntity to its concrete Entity subclass
                cast_entity = entity_cls(**sub_args_dict)
                # recursively scan the SubEntity for more SubEntities
                scan_sub_entities(cast_entity)

        for entity in ioc_instance.entities:
            scan_sub_entities(entity)

        ioc_instance.entities = all_entities

    def _make_entity_model(
        self, definition: Definition, support: Support
    ) -> Type[Entity]:
        """
        Create an Entity Model from a Definition instance and a Support instance.
        """

        def add_arg(name, typ, description, default):
            if default is None:
                default = PydanticUndefined
            args[name] = (
                typ,
                FieldInfo(description=description, default=default),
            )

        args: Dict[str, Tuple[type, Any]] = {}
        validators: Dict[str, Any] = {}

        # fully qualified name of the Entity class including support module
        full_name = f"{support.module}.{definition.name}"

        # add in each of the arguments as a Field in the Entity
        for arg in definition.args:
            full_arg_name = f"{full_name}.{arg.name}"
            arg_type: Any

            if isinstance(arg, ObjectArg):

                @field_validator(arg.name, mode="after")
                def lookup_instance(cls, id):
                    return get_entity_by_id(id)

                validators[full_arg_name] = lookup_instance
                arg_type = object

            elif isinstance(arg, IdArg):
                arg_type = str

            elif isinstance(arg, EnumArg):
                # Pydantic uses the values of the Enum as the options in the schema.
                # Here we arrange for the keys to be in the schema (what a user supplies)
                # but the values to be what is rendered when jinja refers to the enum
                enum_swapped = {}
                for k, v in arg.values.items():
                    enum_swapped[str(v) if v else str(k)] = k
                val_enum = EnumVal(arg.name, enum_swapped)  # type: ignore
                arg_type = val_enum

            else:
                # arg.type is str, int, float, etc.
                arg_type = getattr(builtins, arg.type)
            default = getattr(arg, "default", None)
            add_arg(arg.name, arg_type, arg.description, default)

        # add in the calculated values Jinja Templates as Fields in the Entity
        for value in definition.values:
            add_arg(value.name, str, value.description, value.value)

        # add the type literal which discriminates between the different Entity classes
        typ = Literal[full_name]  # type: ignore
        add_arg("type", typ, definition.description, full_name)

        entity_cls = create_model(
            full_name.replace(".", "_"),
            **args,
            __validators__=validators,
            __base__=Entity,
        )  # type: ignore

        # add a link back to the Definition Instance that generated this Entity Class
        entity_cls.__definition__ = definition

        # store this Entity class in the factory
        self._entity_classes[full_name] = entity_cls

        return entity_cls

    def _make_entity_models(self, support: Support):
        """
        Create Entity subclasses for all Definition instances in the given
        Support instance. Returns a list of the Entity subclasses Models.
        """

        entity_models = []
        entity_names = []

        for definition in support.defs:
            entity_models.append(self._make_entity_model(definition, support))

            if definition.name in entity_names:
                # not tested because schema validation will always catch this first
                raise ValueError(f"Duplicate entity name {definition.name}")
            entity_names.append(definition.name)

        return entity_models

    def _make_ioc_model(self, entity_models: Sequence[Type[Entity]]) -> Type[IOC]:
        """
        Create an IOC derived model, by setting its entities attribute to
        be of type 'list of Entity derived classes'.
        """

        entity_union = Union[tuple(entity_models)]  # type: ignore
        discriminated = Annotated[entity_union, Field(discriminator="type")]  # type: ignore

        class NewIOC(IOC):
            entities: Sequence[discriminated] = Field(
                description="List of entities this IOC instantiates"
            )

        return NewIOC