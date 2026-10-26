"""Builds index.html (the playable game) from the files in src/.

Run from the repository root:  python src/build.py
"""
from pathlib import Path

SRC = Path(__file__).parent
ROOT = SRC.parent
CONTENT_FILES = ["ui.js", "code.js", "text_en.js", "text_pt.js", "text_es.js"]


def build():
    shell = (SRC / "shell.html").read_text(encoding="utf-8")
    content = "\n".join((SRC / name).read_text(encoding="utf-8") for name in CONTENT_FILES)
    app = (SRC / "app.js").read_text(encoding="utf-8")
    body = shell.replace("//@@CONTENT@@", content).replace("//@@APP@@", app)

    # shell.html starts with the <head> elements; the game layout starts at the wrapper div.
    split = body.index('<div class="wrap">')
    page = (
        '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        + body[:split].rstrip() + "\n</head>\n<body>\n" + body[split:].rstrip() + "\n</body>\n</html>\n"
    )
    (ROOT / "index.html").write_text(page, encoding="utf-8")
    print(f"index.html written ({len(page):,} characters)")


if __name__ == "__main__":
    build()
