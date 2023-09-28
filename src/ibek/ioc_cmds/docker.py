import os
import shutil
import subprocess
from pathlib import Path
from typing import List

from ibek.globals import PROJECT_ROOT_FOLDER


def expand_env_vars(tokens: List[str]):
    for i in range(len(tokens)):
        tokens[i] = os.path.expandvars(tokens[i])
    return tokens


def handle_command(tokens: List[str], step, start):
    msg = f'step {step} {" ".join(tokens)}'
    docker_action = tokens[0]
    tokens = expand_env_vars(tokens)

    if step < start and docker_action != "WORKDIR":
        print("SKIPPING: " + msg)
        return
    else:
        print(msg)

    if docker_action == "RUN":
        result = subprocess.call(["bash", "-c", " ".join(tokens[1:])])
        if result > 0:
            raise RuntimeError("RUN command failed")
    elif docker_action == "WORKDIR":
        folder = Path(tokens[1])
        if not folder.exists():
            folder.mkdir(parents=True, exist_ok=True)
        os.chdir(tokens[1])
    elif docker_action == "COPY":
        src = (PROJECT_ROOT_FOLDER / Path(tokens[1])).absolute()
        dest = (Path.cwd() / Path(tokens[2])).absolute()
        if src == dest:
            print("SKIPPING copy of same path")
        else:
            print(f"copying {src} to {dest}")
            if src.is_file():
                shutil.copy(src, dest)
            else:
                shutil.copytree(src, dest, dirs_exist_ok=True)
    elif docker_action == "FROM":
        if "runtime_prep" in tokens:
            print("\n== Aborting before destructive runtime prep stage. ==\n")
            exit(0)


def build_dockerfile(dockerfile: Path, start: int, stop: int):
    index = 0
    step = 1
    dockerfile_lines: List[str] = dockerfile.read_text().split("\n")

    stop = min(stop, len(dockerfile_lines))
    while index < len(dockerfile_lines):
        command = dockerfile_lines[index]
        while command.endswith("\\"):
            index += 1
            command = command[:-1] + dockerfile_lines[index]
        index += 1

        if command == "" or command.startswith("#"):
            continue

        handle_command(command.split(), step, start)
        step = step + 1
        if step > stop:
            break