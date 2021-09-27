"""
Functions for building the helm chart
"""

import json
import logging
import re
import shutil
import urllib.request
from pathlib import Path
from typing import Dict, Match, cast

from jinja2 import Template
from jsonschema import validate
from ruamel.yaml.main import YAML

from .ioc import IOC, make_entity_classes
from .render import render_database_elements, render_script_elements
from .support import Support

log = logging.getLogger(__name__)

HELM_TEMPLATE = Path(__file__).parent.parent / "helm-template"
TEMPLATES = Path(__file__).parent / "templates"

schema_modeline = re.compile(r"# *yaml-language-server *: *\$schema=([^ ]*)")
url_f = r"file://"


def load_ioc_yaml(ioc_instance_yaml: Path, no_schema: bool = False) -> Dict:
    """
    Read in an ioc instance entity YAML and convert to dictionary
    and validate against its declared schema
    """
    entity_dict = YAML().load(ioc_instance_yaml)

    if not no_schema:
        try:
            comment1 = entity_dict.ca.comment[1][0].value
            matches = schema_modeline.match(comment1)
            schema_url = cast(Match, matches).group(1)

            # allow relative file paths so that tests can use this
            parts = schema_url.split(url_f)
            if len(parts) > 1:
                schema_url = url_f + str(Path(parts[1]).absolute()).strip()

            with urllib.request.urlopen(schema_url) as url:
                entity_schema = json.loads(url.read().decode())

        except Exception:
            log.error(
                f"Error getting schema for {ioc_instance_yaml}. "
                "make sure it has '# yaml-language-server:'"
            )
            raise

        validate(entity_dict, entity_schema)

    return entity_dict


def create_boot_script(ioc_instance_yaml: Path, definition_yaml: Path) -> str:
    """
    Create the boot script for an IOC
    """
    # Read and load the support module definitions
    support = Support.deserialize(YAML().load(definition_yaml))
    make_entity_classes(support)

    # Create an IOC instance from it
    ioc_instance = IOC.deserialize(YAML().load(ioc_instance_yaml))

    # Open jinja template for startup script and fill it in with script
    # elements and database elements described by IOC Entity objects
    with open(TEMPLATES / "ioc.boot.jinja", "r") as f:
        template = Template(f.read())

    return template.render(
        script_elements=render_script_elements(ioc_instance),
        database_elements=render_database_elements(ioc_instance),
    )


def render_file(file_template: Path, **kwargs):
    """
    replace a jinja templated file with its rendered equivalent by passing
    kwargs parameters to jinja
    """
    template = file_template.read_text()
    text = Template(template).render(kwargs)

    file = Path(str(file_template).replace(".jinja", ""))
    file.write_text(text)
    file_template.unlink()


def create_helm(ioc_dict: Dict, entity_yaml: str, path: Path):
    """
    create a boilerplate helm chart with name str in folder path

    update the values.yml and Chart.yml by rendering their jinja templates
    and insert the boot script whose text is supplied in script_txt
    """
    helm_folder = path / ioc_dict["ioc_name"]

    if path.exists():
        if helm_folder.exists():
            shutil.rmtree(helm_folder)
    else:
        # fail if parent does not exist (usually the iocs folder)
        path.mkdir()

    shutil.copytree(HELM_TEMPLATE, helm_folder)

    render_file(
        helm_folder / "Chart.yaml.jinja",
        ioc_name=ioc_dict["ioc_name"],
        description=ioc_dict["description"],
    )
    render_file(
        helm_folder / "values.yaml.jinja", base_image=ioc_dict["generic_image"],
    )

    boot_script_path = helm_folder / "config" / "ioc.boot.yaml"

    # Saves rendered boot script
    with open(boot_script_path, "w") as f:
        f.write(entity_yaml)
