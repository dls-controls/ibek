Search.setIndex({"docnames": ["developer/explanations/decisions", "developer/explanations/decisions/0001-record-architecture-decisions", "developer/explanations/decisions/0002-switched-to-pip-skeleton", "developer/explanations/entities", "developer/how-to/build-docs", "developer/how-to/contribute", "developer/how-to/lint", "developer/how-to/make-release", "developer/how-to/pin-requirements", "developer/how-to/run-tests", "developer/how-to/static-analysis", "developer/how-to/test-container", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "developer/tutorials/dev-install", "genindex", "index", "user/explanations/docs-structure", "user/how-to/edit-yaml", "user/how-to/run-container", "user/index", "user/reference/api", "user/reference/naming", "user/tutorials/installation"], "filenames": ["developer/explanations/decisions.rst", "developer/explanations/decisions/0001-record-architecture-decisions.rst", "developer/explanations/decisions/0002-switched-to-pip-skeleton.rst", "developer/explanations/entities.rst", "developer/how-to/build-docs.rst", "developer/how-to/contribute.rst", "developer/how-to/lint.rst", "developer/how-to/make-release.rst", "developer/how-to/pin-requirements.rst", "developer/how-to/run-tests.rst", "developer/how-to/static-analysis.rst", "developer/how-to/test-container.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "developer/tutorials/dev-install.rst", "genindex.rst", "index.rst", "user/explanations/docs-structure.rst", "user/how-to/edit-yaml.rst", "user/how-to/run-container.rst", "user/index.rst", "user/reference/api.rst", "user/reference/naming.rst", "user/tutorials/installation.rst"], "titles": ["Architectural Decision Records", "1. Record architecture decisions", "2. Adopt python3-pip-skeleton for project structure", "Modules, Definitions and Entities", "Build the docs using sphinx", "Contributing to the project", "Run linting using pre-commit", "Make a release", "Pinning Requirements", "Run the tests using pytest", "Run static analysis using mypy", "Container Local Build and Test", "Update the tools", "Developer Guide", "Standards", "Developer install", "API Index", "ibek", "About the documentation", "YAML schema", "Run in a container", "User Guide", "API", "Support YAML Conventions", "Installation"], "terms": {"we": [0, 1, 2, 3, 5, 8, 22], "major": [0, 3], "adr": [0, 1], "describ": [0, 1, 3, 17, 22], "michael": [0, 1], "nygard": [0, 1], "below": [0, 3], "i": [0, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 18, 19, 21, 22, 23, 24], "list": [0, 3, 8, 17, 22], "our": [0, 22], "current": [0, 3, 12, 22, 24], "1": [0, 3, 14, 22], "2": [0, 3, 14, 17], "adopt": 0, "python3": [0, 8, 12, 15, 17, 24], "pip": [0, 8, 12, 15, 17, 24], "skeleton": [0, 8, 12, 17], "project": [0, 1, 3, 4, 8, 9, 11, 12, 13, 17], "structur": [0, 3, 12], "date": [1, 2], "2022": [1, 2], "02": [1, 2, 3], "18": [1, 2], "accept": [1, 2], "need": [1, 3, 8, 18, 24], "made": [1, 8, 22], "thi": [1, 2, 3, 4, 6, 7, 8, 11, 12, 14, 15, 17, 18, 19, 22, 23, 24], "us": [1, 2, 3, 8, 13, 14, 15, 17, 19, 20, 22, 23, 24], "see": [1, 3, 4, 7, 17, 22], "": [1, 3, 22], "articl": 1, "link": [1, 3, 13, 21, 23], "abov": [1, 3, 6], "To": [1, 7, 8, 11, 12, 15, 20, 24], "creat": [1, 3, 7, 8, 17, 19, 22, 23], "new": [1, 3, 5, 7, 15, 21, 22], "copi": [1, 8], "past": 1, "from": [1, 2, 3, 4, 6, 13, 14, 20, 21, 22, 24], "exist": [1, 5, 22, 24], "ones": 1, "should": [2, 3, 5, 8, 17, 22, 23, 24], "follow": [2, 3, 5, 7, 11, 14, 15, 17, 23], "The": [2, 3, 4, 5, 6, 8, 11, 14, 17, 18, 22, 23, 24], "ensur": 2, "consist": 2, "develop": [2, 3, 11, 17], "environ": [2, 3, 5, 8, 15, 22], "packag": [2, 8, 15], "manag": 2, "have": [2, 3, 5, 6, 8, 11, 15, 22, 23], "switch": 2, "modul": [2, 12, 13, 17], "fix": [2, 8, 11], "set": [2, 3, 5, 6, 8, 14, 22], "tool": [2, 13, 14], "can": [2, 3, 4, 5, 6, 8, 9, 10, 11, 15, 17, 22, 23, 24], "pull": [2, 4, 5, 12, 20, 24], "updat": [2, 8, 13, 17], "latest": [2, 8, 12], "techniqu": [2, 12], "As": [2, 14], "mai": [2, 3, 8, 22], "chang": [2, 4, 5, 6, 8, 12, 17], "could": 2, "differ": [2, 3, 8, 18], "lint": [2, 13, 14, 15], "format": [2, 14], "venv": [2, 15, 24], "setup": [2, 3, 12, 15], "ci": [2, 11], "cd": [2, 3, 11, 15], "page": [3, 4, 7, 8, 14], "top": 3, "down": 3, "explan": [3, 18], "kei": [3, 22], "term": 3, "referenc": 3, "exampl": [3, 8, 11, 14], "ioc": [3, 17, 23], "instanc": [3, 17, 22, 23], "bl45p": 3, "mo": 3, "system": 3, "test": [3, 5, 8, 13], "reli": 3, "an": [3, 4, 6, 8, 12, 17, 22], "understand": [3, 18], "between": [3, 12, 22], "gener": [3, 7, 12, 17, 22], "everi": [3, 6, 8, 23], "imag": [3, 17, 22], "includ": [3, 4, 19, 21], "number": [3, 5, 7, 8, 20, 22], "epic": [3, 15, 17, 20, 22, 24], "support": [3, 17, 21], "contain": [3, 5, 8, 13, 14, 15, 17, 21, 22], "pmac": [3, 23], "motor": 3, "plu": 3, "common": 3, "each": [3, 6, 8, 22], "mount": 3, "therefor": 3, "abl": 3, "make": [3, 4, 5, 13, 23], "librari": [3, 5, 8, 21], "db": [3, 22], "templat": [3, 17, 22], "ani": [3, 4, 5, 6, 8, 11, 12, 22, 24], "those": [3, 6], "goal": 3, "allow": [3, 22], "defin": [3, 8, 14, 17, 22, 23], "function": [3, 9, 14, 18, 22], "its": [3, 20, 22, 23, 24], "determin": 3, "what": [3, 5, 17, 22, 23], "featur": [3, 24], "instanti": [3, 22, 23], "henc": 3, "collect": 3, "insid": [3, 22], "In": [3, 8, 11, 17], "code": [3, 4, 6, 15, 17, 19], "class": [3, 22, 23], "genericioc": 3, "repres": [3, 18, 22, 23], "ha": [3, 7, 8, 12, 22, 23, 24], "own": [3, 19], "yaml": [3, 17, 21, 22], "whose": 3, "name": [3, 22, 23], "convent": [3, 14, 21], "support_modul": [3, 22], "These": [3, 15, 23], "all": [3, 5, 6, 8, 11, 22, 23], "resid": 3, "folder": [3, 23], "call": [3, 11, 17, 18, 22, 23], "which": [3, 4, 11, 12, 15, 22], "For": [3, 8, 14], "declar": [3, 23], "limit": 3, "3": [3, 8, 14, 15, 24], "full": [3, 8], "implement": 3, "would": [3, 11, 17, 23], "more": [3, 8, 12, 15, 17, 18, 21, 22], "geobrick": 3, "dlspmacasynipport": 3, "dlspmacasynmotor": 3, "provid": [3, 8, 12, 22], "argument": [3, 17, 22, 23], "suppli": [3, 7, 22], "when": [3, 5, 8, 15, 17], "boot": [3, 22], "script": [3, 17, 22, 23], "entri": [3, 22], "add": [3, 17, 22, 23], "form": 3, "jinja": [3, 22], "refer": [3, 18, 22], "databas": [3, 17, 22], "macro": 3, "valu": [3, 14, 17, 22], "expand": 3, "languag": 3, "server": 3, "_global": 3, "def": [3, 14, 22, 23], "json": [3, 6, 17, 19], "todo": [3, 23], "compliant": [3, 7], "camelcas": 3, "arg": [3, 14, 22], "snake_cas": [3, 23], "pmacasynsshport": 3, "descript": [3, 14, 22], "power": 3, "asyn": 3, "port": 3, "ssh": 3, "connect": 3, "type": [3, 10, 14, 15, 22, 23, 24], "id": [3, 22], "str": [3, 14, 22], "ip": [3, 23], "address": 3, "usernam": 3, "login": 3, "default": [3, 22], "root": [3, 8, 11, 23], "password": 3, "deltatau": 3, "int": [3, 14, 22], "prioriti": 3, "0": [3, 22], "noautoconnect": 3, "disabl": 3, "autoconnect": 3, "noeo": 3, "No": 3, "eo": 3, "drvasynpowerpmacportconfigur": 3, "pmacasynipport": 3, "turbo": 3, "tcp": 3, "1025": 3, "pmacasynipconfigur": 3, "object": [3, 17, 22], "p": [3, 11, 15], "pv": 3, "prefix": [3, 23], "numax": 3, "ax": 3, "initi": 3, "control": 3, "8": [3, 8, 15, 24], "idlepol": 3, "idl": 3, "poll": 3, "period": 3, "m": [3, 15, 24], "500": 3, "movingpol": 3, "move": 3, "100": [3, 5], "timeout": 3, "second": 3, "4": 3, "feedrat": 3, "go": [3, 7, 8], "error": [3, 9], "csg0": 3, "coordin": 3, "group": 3, "csg1": 3, "csg2": 3, "csg3": 3, "csg4": 3, "must": [3, 22, 23], "builder": [3, 17], "py": [3, 17, 22], "count": 3, "num_ax": 3, "someth": [3, 5, 12, 17], "hard": [3, 8], "do": [3, 6, 8, 10, 11, 17], "approach": [3, 8, 17, 18], "pmaccreatecontrol": 3, "pmaccreateax": 3, "pmaccontrol": 3, "define_arg": [3, 22], "nax": 3, "include_arg": [3, 22], "pmacstatu": 3, "import": [3, 14], "non": 3, "come": 3, "first": [3, 15, 22], "gui": 3, "associ": 3, "attach": 3, "axi": 3, "drive": 3, "desc": [3, 22], "displai": 3, "edm": 3, "screen": 3, "float": [3, 22], "mre": 3, "step": [3, 13, 15, 21], "size": 3, "egu": 3, "0001": 3, "velo": 3, "veloc": 3, "prec": 3, "precis": 3, "engin": 3, "unit": 3, "mm": 3, "twv": 3, "tweak": 3, "dtyp": 3, "datatyp": 3, "record": [3, 13], "asynmotor": 3, "dir": 3, "user": [3, 6, 17], "direct": 3, "vba": 3, "base": [3, 4, 17, 22], "vmax": 3, "max": 3, "union": [3, 22], "accl": 3, "5": 3, "bdst": 3, "bl": 3, "distanc": 3, "bvel": 3, "bacc": 3, "dhlm": 3, "dial": 3, "high": 3, "10000": 3, "dllm": 3, "low": 3, "hlm": 3, "llm": 3, "hlsv": 3, "hw": 3, "lim": 3, "violat": 3, "svr": 3, "init": [3, 22], "startup": [3, 17, 22, 23], "srev": 3, "per": [3, 22, 23], "revolut": 3, "1000": 3, "rre": 3, "readback": 3, "er": 3, "encod": 3, "jar": 3, "jog": 3, "acceler": 3, "ueip": 3, "If": [3, 4, 5, 6, 11, 22, 24], "present": 3, "urip": 3, "rdbl": 3, "locat": [3, 23], "you": [3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17, 23, 24], "specifi": 3, "rlnk": 3, "output": 3, "rtry": 3, "retri": 3, "dly": 3, "settl": 3, "time": [3, 5, 6, 8, 22], "off": 3, "offset": 3, "rdbd": 3, "deadband": 3, "foff": 3, "freez": [3, 8], "variabl": [3, 22], "frozen": 3, "adel": 3, "alarm": 3, "monitor": 3, "ntm": 3, "target": 3, "onli": [3, 8, 22], "soft": 3, "fehigh": 3, "fehihi": 3, "hihi": 3, "fehhsv": 3, "sever": 3, "no_alarm": 3, "fehsv": 3, "scale": 3, "homevi": 3, "home": 3, "visibl": 3, "homevisstr": 3, "alh": 3, "handler": 3, "send": 3, "email": 3, "autohom": 3, "unspecifi": 3, "allow_homed_set": 3, "blank": [3, 22], "rlink": 3, "sure": [3, 5], "dls_pmac_asyn_motor": 3, "addr": 3, "sport": 3, "dlscspmacasynmotor": 3, "dl": [3, 23], "cscontrol": 3, "feheigh": 3, "dls_pmac_cs_asyn_motor": 3, "c": 3, "pmacdisablelimitscheck": 3, "check": [3, 5, 6, 9, 10, 11, 12, 14, 15, 23], "auto": [3, 19], "plc": 3, "grp1": 3, "grp2": 3, "grp3": 3, "third": 3, "grp4": 3, "fourth": 3, "grp5": 3, "grp6": 3, "grp7": 3, "grp8": 3, "grp9": 3, "ctrl": 3, "9": 3, "program": 3, "prog": 3, "motion": 3, "10": 3, "pmaccreatec": 3, "pmaccreatecsax": 3, "pmaccscontrol": 3, "parentport": 3, "same": [3, 5, 7, 8, 23], "ioc_nam": [3, 22], "requir": [3, 11, 13, 15, 17, 18, 22, 24], "piec": 3, "configur": 3, "through": [3, 5, 15, 22], "given": [3, 22], "ar": [3, 4, 5, 8, 14, 17, 18, 20, 23], "caus": 3, "line": [3, 11, 14, 22], "also": [3, 4, 5, 6, 9, 13, 21, 22, 23, 24], "dbloadrecord": [3, 22], "one": [3, 5, 8, 18, 22, 23], "via": [3, 11], "itself": 3, "two": 3, "singl": [3, 22], "shown": 3, "along": 3, "st": [3, 17], "cmd": [3, 17], "click": [3, 7, 8, 15], "arrow": 3, "reveal": 3, "generic_ioc_imag": [3, 22], "ghcr": [3, 20, 24], "io": [3, 17, 20, 24], "main": [3, 7, 20, 24], "run": [3, 4, 5, 11, 12, 13, 14, 15, 17, 21], "brick1port": 3, "192": 3, "168": 3, "12": 3, "1112": 3, "brick": 3, "01": 3, "x1": 3, "thin": 3, "001": 3, "y1": 3, "http": [3, 4, 7, 12, 17, 19, 24], "github": [3, 5, 7, 12, 15, 17, 20, 24], "com": [3, 12, 15, 24], "repo": [3, 6, 8, 22, 23], "dbloaddatabas": 3, "dbd": 3, "ioc_registerrecorddevicedriv": 3, "pdbbase": 3, "tmp": 3, "iocinit": [3, 22], "constrain": 3, "avail": [3, 8, 11, 20], "assist": 3, "note": [3, 7, 21], "author": 3, "access": [3, 13, 21], "order": [3, 14, 18], "correctli": 3, "craft": 3, "correct": [3, 8, 22], "reason": [3, 8], "publish": [3, 7, 8, 22], "artifact": 3, "releas": [3, 8, 13, 17, 20, 21, 24], "other": [3, 11, 22], "oper": 3, "happen": 3, "within": 3, "dure": 3, "thu": 3, "num": 3, "global": 3, "part": 3, "combin": [3, 22], "properti": [3, 23], "string": [3, 22], "normal": [3, 22], "arrai": 3, "item": [3, 17], "purpos": [3, 18, 22], "anyof": 3, "pass": [3, 8, 11, 22], "const": 3, "null": 3, "doesn": [3, 22], "t": [3, 5, 11, 18, 22], "additionalproperti": 3, "fals": [3, 12, 22], "integ": 3, "bool": [3, 14, 22], "boolean": 3, "expos": [3, 22], "content": [3, 22], "filenam": [3, 22], "module_root": [3, 22], "header": [3, 22, 23], "comment": [3, 22], "appear": [3, 22], "befor": [3, 5, 22], "onc": [3, 8, 22], "true": [3, 14, 22], "snippet": [3, 17, 22], "env_var": [3, 22], "post_ioc_init": [3, 22], "post": [3, 22], "dbpf": [3, 22], "org": [3, 7], "draft": [3, 7], "07": 3, "doe": [3, 5, 22], "entity_en": 3, "vscode_ibek_plugin_typ": 3, "type_id": 3, "type_object": 3, "registri": [3, 20, 22, 24], "url": [3, 22], "result": [3, 6], "overal": 3, "jsonpmac": 3, "yamlasyn": 3, "yamlcontain": 3, "jsonioc": 3, "progress": 3, "hand": 3, "held": 3, "build": [3, 8, 13, 14, 17], "design": [3, 8], "directori": [4, 14, 17], "tox": [4, 6, 9, 10, 11, 15], "e": [4, 6, 8, 9, 10, 15, 17, 22, 23], "static": [4, 13, 14, 15], "api": [4, 14, 21], "docstr": [4, 14], "document": [4, 5, 13, 15, 21], "standard": [4, 5, 13], "built": [4, 20], "html": 4, "open": [4, 5, 15], "local": [4, 13, 15], "web": 4, "browser": 4, "firefox": 4, "index": [4, 21], "process": [4, 14], "watch": 4, "your": [4, 5, 6, 8, 11, 19], "rebuild": 4, "whenev": 4, "reload": 4, "view": 4, "localhost": 4, "8000": 4, "sourc": [4, 10, 15, 17, 22, 24], "too": 4, "tell": [4, 6], "src": 4, "most": [5, 18], "welcom": 5, "request": [5, 12], "handl": [5, 6], "pleas": [5, 7, 14], "file": [5, 6, 10, 17, 19, 22, 23], "great": 5, "idea": [5, 8], "involv": 5, "big": 5, "ticket": 5, "want": 5, "don": 5, "spend": 5, "might": 5, "fit": 5, "scope": 5, "offer": 5, "place": [5, 8], "ask": 5, "question": 5, "share": 5, "end": 5, "obviou": 5, "close": [5, 12], "rais": 5, "instead": [5, 11, 20], "while": 5, "bug": 5, "free": 5, "significantli": 5, "reduc": 5, "easili": 5, "caught": 5, "remain": 5, "improv": [5, 18], "inform": [5, 18], "up": [5, 13, 17], "black": [6, 14], "flake8": [6, 14], "isort": [6, 14], "under": [6, 15], "command": [6, 11, 22], "Or": 6, "instal": [6, 8, 11, 13, 17, 20, 21], "hook": 6, "git": [6, 12, 15, 23, 24], "just": 6, "It": [6, 8, 9, 10, 22, 24], "possibl": [6, 8, 17], "automat": 6, "enabl": [6, 19], "clone": 6, "repositori": [6, 8, 14, 23], "being": 6, "now": [6, 15, 24], "report": [6, 9], "reformat": 6, "likewis": 6, "get": [6, 7, 8, 13, 15, 20, 22], "manual": 6, "formatt": 6, "well": 6, "save": [6, 17], "highlight": [6, 10], "editor": 6, "window": 6, "checklist": 7, "choos": [7, 15], "pep440": 7, "pep": 7, "python": [7, 8, 12, 15, 23], "0440": 7, "tag": 7, "chose": 7, "review": 7, "edit": [7, 19], "titl": [7, 14], "push": [7, 8], "branch": 7, "effect": 7, "except": 7, "option": 7, "By": 8, "tabl": 8, "pyproject": 8, "toml": 8, "version": [8, 12, 20, 22], "some": 8, "best": [8, 11], "leav": 8, "minimum": 8, "so": [8, 15, 17, 24], "widest": 8, "rang": 8, "applic": [8, 11], "compat": 8, "after": 8, "mean": [8, 12, 23], "futur": 8, "break": 8, "becaus": [8, 11, 22], "wai": [8, 21], "issu": [8, 10], "work": [8, 17, 21], "out": [8, 23], "resolv": 8, "problem": [8, 11], "howev": [8, 23], "quit": 8, "consum": 8, "simpli": 8, "try": 8, "minor": 8, "mechan": 8, "previou": 8, "success": 8, "quick": 8, "guarante": 8, "asset": 8, "take": [8, 15, 17], "look": [8, 9], "cli": [8, 11], "here": [8, 21], "diamondlightsourc": [8, 12], "There": [8, 18, 23], "txt": 8, "show": 8, "virtual": 8, "multipl": [8, 12], "sub": 8, "download": 8, "them": [8, 9, 10, 17, 22], "ran": 8, "lowest": 8, "like": [8, 9], "matrix": 8, "ubuntu": 8, "lockfil": 8, "renam": 8, "commit": [8, 13, 14, 15], "exactli": 8, "been": [8, 22, 24], "good": [8, 18], "back": [8, 17], "unlock": 8, "earli": 8, "indic": [8, 12], "incom": 8, "restor": 8, "done": [9, 10, 17, 22], "find": 9, "coverag": 9, "commandlin": [9, 24], "cov": 9, "xml": 9, "definit": [10, 13, 22], "without": 10, "potenti": 10, "where": [10, 12, 17, 22, 23], "match": 10, "runtim": 11, "verifi": 11, "docker": [11, 20, 24], "fail": 11, "podman": [11, 15], "workstat": 11, "interchang": 11, "depend": [11, 20, 24], "help": [11, 18, 19], "paramet": [11, 22], "merg": 12, "keep": 12, "sync": 12, "rebas": 12, "conflict": 12, "area": 12, "detail": [12, 17], "split": [13, 17, 21, 23], "four": [13, 18, 21], "categori": [13, 21], "side": [13, 21], "bar": [13, 21], "contribut": [13, 17], "doc": [13, 14, 15], "sphinx": [13, 14, 15], "pytest": [13, 15], "analysi": [13, 14, 15], "mypi": [13, 14, 15], "pre": [13, 14, 15, 20], "pin": 13, "practic": [13, 21], "dai": 13, "dev": [13, 15, 19], "task": 13, "architectur": 13, "decis": 13, "entiti": [13, 17, 22, 23], "why": [13, 21], "technic": [13, 18, 21], "materi": [13, 21], "conform": 14, "style": 14, "how": [14, 18, 19], "guid": [14, 17, 18], "napoleon": 14, "extens": 14, "googl": 14, "consid": 14, "hint": [14, 22], "signatur": 14, "func": 14, "arg1": 14, "arg2": 14, "summari": 14, "extend": 14, "return": [14, 22], "extract": 14, "underlin": 14, "headl": 14, "head": 14, "instruct": 15, "minim": 15, "ibek": [15, 20, 23, 24], "either": 15, "host": 15, "machin": 15, "later": [15, 24], "vscode": [15, 19], "virtualenv": 15, "bin": [15, 24], "activ": [15, 24], "devcontain": 15, "reopen": 15, "prompt": 15, "termin": [15, 24], "complex": 15, "case": [15, 23], "integr": 15, "graph": 15, "tree": 15, "pipdeptre": 15, "parallel": 15, "kubernet": 17, "thei": [17, 18, 23], "togeth": 17, "schema": [17, 21], "write": [17, 18], "against": 17, "pypi": 17, "complet": [17, 19], "still": 17, "diagram": 17, "draw": 17, "svg": 17, "emb": 17, "abil": [17, 22], "embed": 17, "g": [17, 22, 23], "asynip": 17, "asynseri": 17, "both": 17, "asynport": 17, "similar": 17, "origin": 17, "enum": 17, "inlin": 17, "helm": 17, "config": 17, "start": [17, 21, 22, 23], "sh": 17, "section": 17, "grand": 18, "unifi": 18, "theori": 18, "david": 18, "la": 18, "secret": 18, "understood": 18, "softwar": [18, 24], "isn": 18, "thing": 18, "tutori": 18, "creation": 18, "implic": 18, "often": 18, "immens": 18, "topic": 18, "discuss": 19, "valid": 19, "brpaz": 19, "v": 19, "k1i": 19, "alreadi": [20, 22], "typic": [21, 23], "usag": 21, "experienc": 21, "about": 21, "intern": [22, 23], "__version__": 22, "calcul": 22, "pypa": 22, "setuptools_scm": 22, "A": 22, "few": 22, "defint": 22, "alia": 22, "typevar": 22, "annot": 22, "deriv": 22, "deseri": 22, "module_nam": 22, "hierarchi": 22, "dataclass": 22, "floatarg": 22, "undefin": 22, "liter": 22, "strarg": 22, "intarg": 22, "boolarg": 22, "objectarg": 22, "anoth": 22, "idarg": 22, "explicit": 22, "load": 22, "sequenc": 22, "environmentvari": 22, "dict": 22, "occurr": 22, "point": 22, "iocinst": 22, "baseclass": 22, "make_entity_class": 22, "simplenamespac": 22, "subclass": 22, "put": 22, "namespac": 22, "clear_entity_class": 22, "reset": 22, "cach": 22, "memori": 22, "ioc_instance_yaml": 22, "achiev": 22, "popul": 22, "jinja2": 22, "substitut": 22, "render_text": 22, "text": 22, "suffix": 22, "next": 22, "honour": 22, "flag": 22, "__post_init__": 22, "though": 22, "again": 22, "track": 22, "than": 22, "element": 22, "render_funct": 22, "render_script": 22, "none": 22, "render_databas": 22, "render_environment_vari": 22, "render_post_ioc_init": 22, "render_el": 22, "method": 22, "callabl": 22, "render_script_el": 22, "render_database_el": 22, "render_environment_variable_el": 22, "render_post_ioc_init_el": 22, "context": 22, "u": 22, "simpl": 22, "__utils__": 22, "function_nam": 22, "maintain": 22, "state": 22, "counter": 22, "stop": 22, "uniqu": 22, "ad": 22, "set_var": 22, "get_var": 22, "65535": 22, "inc": 22, "increment": 22, "yet": 22, "apischema": 22, "undefinedtyp": 22, "sentinel": 22, "detect": 22, "linter": 23, "adher": 23, "alwai": 23, "supportmodul": 23, "store": 23, "adcor": 23, "aravisgig": 23, "legal": 23, "adjust": 23, "usual": 23, "replac": 23, "_": 23, "field": 23, "uppercamelcas": 23, "iocshel": 23, "pscaddipmodul": 23, "carrierid": 23, "carrier": 23, "ipsitenumb": 23, "ip_site_numb": 23, "vector": 23, "interrupt_vector": 23, "recommend": 24, "interfer": 24, "path": 24, "interfac": 24}, "objects": {"ibek": [[22, 0, 1, "", "__version__"], [22, 1, 0, "-", "globals"], [22, 1, 0, "-", "ioc"], [22, 1, 0, "-", "modules"], [22, 1, 0, "-", "render"], [22, 1, 0, "-", "support"], [22, 1, 0, "-", "utils"]], "ibek.globals": [[22, 2, 1, "", "T"], [22, 3, 1, "", "desc"]], "ibek.ioc": [[22, 2, 1, "", "Entity"], [22, 2, 1, "", "IOC"], [22, 3, 1, "", "clear_entity_classes"], [22, 3, 1, "", "make_entity_class"], [22, 3, 1, "", "make_entity_classes"]], "ibek.render": [[22, 2, 1, "", "Render"]], "ibek.render.Render": [[22, 4, 1, "", "render_database"], [22, 4, 1, "", "render_database_elements"], [22, 4, 1, "", "render_elements"], [22, 4, 1, "", "render_environment_variable_elements"], [22, 4, 1, "", "render_environment_variables"], [22, 4, 1, "", "render_function"], [22, 4, 1, "", "render_post_ioc_init"], [22, 4, 1, "", "render_post_ioc_init_elements"], [22, 4, 1, "", "render_script"], [22, 4, 1, "", "render_script_elements"], [22, 4, 1, "", "render_text"]], "ibek.support": [[22, 2, 1, "", "Arg"], [22, 2, 1, "", "BoolArg"], [22, 2, 1, "", "Database"], [22, 2, 1, "", "Definition"], [22, 2, 1, "", "EnvironmentVariable"], [22, 2, 1, "", "FloatArg"], [22, 2, 1, "", "Function"], [22, 2, 1, "", "IdArg"], [22, 2, 1, "", "IntArg"], [22, 2, 1, "", "ObjectArg"], [22, 2, 1, "", "Once"], [22, 2, 1, "", "StrArg"], [22, 2, 1, "", "Support"], [22, 2, 1, "", "Value"]], "ibek.utils": [[22, 2, 1, "", "Counter"], [22, 2, 1, "", "Utils"]], "ibek.utils.Utils": [[22, 4, 1, "", "counter"], [22, 4, 1, "", "get_var"], [22, 4, 1, "", "set_var"]], "ibek.utils.apischema.types": [[22, 2, 1, "", "UndefinedType"]]}, "objtypes": {"0": "py:data", "1": "py:module", "2": "py:class", "3": "py:function", "4": "py:method"}, "objnames": {"0": ["py", "data", "Python data"], "1": ["py", "module", "Python module"], "2": ["py", "class", "Python class"], "3": ["py", "function", "Python function"], "4": ["py", "method", "Python method"]}, "titleterms": {"architectur": [0, 1], "decis": [0, 1, 2], "record": [0, 1], "1": 1, "statu": [1, 2], "context": [1, 2], "consequ": [1, 2], "2": 2, "adopt": 2, "python3": 2, "pip": 2, "skeleton": 2, "project": [2, 5], "structur": [2, 17], "modul": [3, 22, 23], "definit": [3, 23], "entiti": 3, "schema": [3, 19], "summari": 3, "ibek": [3, 17, 22], "file": [3, 8], "sequenc": 3, "command": 3, "stage": 3, "build": [4, 11, 15], "doc": 4, "us": [4, 6, 9, 10], "sphinx": 4, "autobuild": 4, "contribut": 5, "issu": [5, 6], "discuss": 5, "code": [5, 14], "coverag": 5, "develop": [5, 13, 15], "guid": [5, 13, 21], "run": [6, 9, 10, 20, 24], "lint": 6, "pre": 6, "commit": 6, "fix": 6, "vscode": 6, "support": [6, 22, 23], "make": 7, "releas": 7, "pin": 8, "requir": 8, "introduct": 8, "find": 8, "lock": 8, "appli": 8, "remov": 8, "depend": [8, 15], "from": 8, "ci": 8, "test": [9, 11, 15], "pytest": 9, "static": 10, "analysi": 10, "mypi": 10, "contain": [11, 20, 24], "local": 11, "updat": 12, "tool": 12, "tutori": [13, 21], "how": [13, 17, 21], "explan": [13, 21], "refer": [13, 21], "standard": 14, "document": [14, 17, 18], "instal": [15, 24], "clone": 15, "repositori": 15, "see": 15, "what": 15, "wa": 15, "api": [16, 22], "index": 16, "todo": 17, "i": 17, "about": 18, "yaml": [19, 23], "start": 20, "user": 21, "global": 22, "ioc": 22, "render": 22, "util": 22, "convent": 23, "filenam": 23, "arg": 23, "function": 23, "check": 24, "your": 24, "version": 24, "python": 24, "creat": 24, "virtual": 24, "environ": 24, "librari": 24}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Architectural Decision Records": [[0, "architectural-decision-records"]], "1. Record architecture decisions": [[1, "record-architecture-decisions"]], "Status": [[1, "status"], [2, "status"]], "Context": [[1, "context"], [2, "context"]], "Decision": [[1, "decision"], [2, "decision"]], "Consequences": [[1, "consequences"], [2, "consequences"]], "2. Adopt python3-pip-skeleton for project structure": [[2, "adopt-python3-pip-skeleton-for-project-structure"]], "Modules, Definitions and Entities": [[3, "modules-definitions-and-entities"]], "Modules": [[3, "modules"]], "Definition": [[3, "definition"]], "Entity": [[3, "entity"]], "Schemas": [[3, "schemas"]], "Summary of ibek files sequence": [[3, "id1"]], "Commands": [[3, "commands"]], "Summary of ibek stages": [[3, "id2"]], "Build the docs using sphinx": [[4, "build-the-docs-using-sphinx"]], "Autobuild": [[4, "autobuild"]], "Contributing to the project": [[5, "contributing-to-the-project"]], "Issue or Discussion?": [[5, "issue-or-discussion"]], "Code coverage": [[5, "code-coverage"]], "Developer guide": [[5, "developer-guide"]], "Run linting using pre-commit": [[6, "run-linting-using-pre-commit"]], "Running pre-commit": [[6, "running-pre-commit"]], "Fixing issues": [[6, "fixing-issues"]], "VSCode support": [[6, "vscode-support"]], "Make a release": [[7, "make-a-release"]], "Pinning Requirements": [[8, "pinning-requirements"]], "Introduction": [[8, "introduction"]], "Finding the lock files": [[8, "finding-the-lock-files"]], "Applying the lock file": [[8, "applying-the-lock-file"]], "Removing dependency locking from CI": [[8, "removing-dependency-locking-from-ci"]], "Run the tests using pytest": [[9, "run-the-tests-using-pytest"]], "Run static analysis using mypy": [[10, "run-static-analysis-using-mypy"]], "Container Local Build and Test": [[11, "container-local-build-and-test"]], "Update the tools": [[12, "update-the-tools"]], "Developer Guide": [[13, "developer-guide"]], "Tutorials": [[13, null], [21, null]], "How-to Guides": [[13, null], [21, null]], "Explanations": [[13, null], [21, null]], "Reference": [[13, null], [21, null]], "Standards": [[14, "standards"]], "Code Standards": [[14, "code-standards"]], "Documentation Standards": [[14, "documentation-standards"]], "Developer install": [[15, "developer-install"]], "Clone the repository": [[15, "clone-the-repository"]], "Install dependencies": [[15, "install-dependencies"]], "See what was installed": [[15, "see-what-was-installed"]], "Build and test": [[15, "build-and-test"]], "API Index": [[16, "api-index"]], "ibek": [[17, "ibek"], [22, "ibek"]], "TODO": [[17, "todo"]], "How the documentation is structured": [[17, "how-the-documentation-is-structured"]], "About the documentation": [[18, "about-the-documentation"]], "YAML schema": [[19, "yaml-schema"]], "Run in a container": [[20, "run-in-a-container"]], "Starting the container": [[20, "starting-the-container"]], "User Guide": [[21, "user-guide"]], "API": [[22, "api"]], "ibek.globals": [[22, "module-ibek.globals"]], "ibek.support": [[22, "module-ibek.support"]], "ibek.ioc": [[22, "module-ibek.ioc"]], "ibek.modules": [[22, "module-ibek.modules"]], "ibek.render": [[22, "module-ibek.render"]], "ibek.utils": [[22, "module-ibek.utils"]], "Support YAML Conventions": [[23, "support-yaml-conventions"]], "Filename": [[23, "filename"]], "Module": [[23, "module"]], "Definitions": [[23, "definitions"]], "Args": [[23, "args"]], "Functions": [[23, "functions"]], "Installation": [[24, "installation"]], "Check your version of python": [[24, "check-your-version-of-python"]], "Create a virtual environment": [[24, "create-a-virtual-environment"]], "Installing the library": [[24, "installing-the-library"]], "Running in a container": [[24, "running-in-a-container"]]}, "indexentries": {"arg (class in ibek.support)": [[22, "ibek.support.Arg"]], "boolarg (class in ibek.support)": [[22, "ibek.support.BoolArg"]], "counter (class in ibek.utils)": [[22, "ibek.utils.Counter"]], "database (class in ibek.support)": [[22, "ibek.support.Database"]], "definition (class in ibek.support)": [[22, "ibek.support.Definition"]], "entity (class in ibek.ioc)": [[22, "ibek.ioc.Entity"]], "environmentvariable (class in ibek.support)": [[22, "ibek.support.EnvironmentVariable"]], "floatarg (class in ibek.support)": [[22, "ibek.support.FloatArg"]], "function (class in ibek.support)": [[22, "ibek.support.Function"]], "ioc (class in ibek.ioc)": [[22, "ibek.ioc.IOC"]], "idarg (class in ibek.support)": [[22, "ibek.support.IdArg"]], "intarg (class in ibek.support)": [[22, "ibek.support.IntArg"]], "objectarg (class in ibek.support)": [[22, "ibek.support.ObjectArg"]], "once (class in ibek.support)": [[22, "ibek.support.Once"]], "render (class in ibek.render)": [[22, "ibek.render.Render"]], "strarg (class in ibek.support)": [[22, "ibek.support.StrArg"]], "support (class in ibek.support)": [[22, "ibek.support.Support"]], "t (class in ibek.globals)": [[22, "ibek.globals.T"]], "utils (class in ibek.utils)": [[22, "ibek.utils.Utils"]], "value (class in ibek.support)": [[22, "ibek.support.Value"]], "apischema.types.undefinedtype (class in ibek.utils)": [[22, "ibek.utils.apischema.types.UndefinedType"]], "clear_entity_classes() (in module ibek.ioc)": [[22, "ibek.ioc.clear_entity_classes"]], "counter() (ibek.utils.utils method)": [[22, "ibek.utils.Utils.counter"]], "desc() (in module ibek.globals)": [[22, "ibek.globals.desc"]], "get_var() (ibek.utils.utils method)": [[22, "ibek.utils.Utils.get_var"]], "ibek.__version__ (built-in variable)": [[22, "ibek.__version__"]], "ibek.globals": [[22, "module-ibek.globals"]], "ibek.ioc": [[22, "module-ibek.ioc"]], "ibek.modules": [[22, "module-ibek.modules"]], "ibek.render": [[22, "module-ibek.render"]], "ibek.support": [[22, "module-ibek.support"]], "ibek.utils": [[22, "module-ibek.utils"]], "make_entity_class() (in module ibek.ioc)": [[22, "ibek.ioc.make_entity_class"]], "make_entity_classes() (in module ibek.ioc)": [[22, "ibek.ioc.make_entity_classes"]], "module": [[22, "module-ibek.globals"], [22, "module-ibek.ioc"], [22, "module-ibek.modules"], [22, "module-ibek.render"], [22, "module-ibek.support"], [22, "module-ibek.utils"]], "render_database() (ibek.render.render method)": [[22, "ibek.render.Render.render_database"]], "render_database_elements() (ibek.render.render method)": [[22, "ibek.render.Render.render_database_elements"]], "render_elements() (ibek.render.render method)": [[22, "ibek.render.Render.render_elements"]], "render_environment_variable_elements() (ibek.render.render method)": [[22, "ibek.render.Render.render_environment_variable_elements"]], "render_environment_variables() (ibek.render.render method)": [[22, "ibek.render.Render.render_environment_variables"]], "render_function() (ibek.render.render method)": [[22, "ibek.render.Render.render_function"]], "render_post_ioc_init() (ibek.render.render method)": [[22, "ibek.render.Render.render_post_ioc_init"]], "render_post_ioc_init_elements() (ibek.render.render method)": [[22, "ibek.render.Render.render_post_ioc_init_elements"]], "render_script() (ibek.render.render method)": [[22, "ibek.render.Render.render_script"]], "render_script_elements() (ibek.render.render method)": [[22, "ibek.render.Render.render_script_elements"]], "render_text() (ibek.render.render method)": [[22, "ibek.render.Render.render_text"]], "set_var() (ibek.utils.utils method)": [[22, "ibek.utils.Utils.set_var"]]}})