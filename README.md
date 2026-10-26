# Isekai Academy — Learn Programming Through an RPG

> 🚧 Work in progress (week 1 of 8). Target: a finished, public version by 20 Dec 2026.

You're transported to a fantasy world with no useful abilities. Programming concepts are the skills you unlock: Python at the Adventurer's Guild, SQL at the Alchemist's Workshop, and pandas at the Grand Library.

## Play

Public URL: *coming in week 1*. To play locally, open `index.html` in a modern browser (an internet connection is needed to load Python).

## Current status

- ✅ 11 Python chapters with automatic quest checks, XP, and EN/ES/PT-BR support (runtime: Brython)
- 🔜 Switch to Pyodide (real CPython in WebAssembly) so the same runtime handles Python, SQL (`sqlite3`), and pandas

See [`docs/ASSESSMENT.md`](docs/ASSESSMENT.md) for the architecture and [`docs/PLAN.md`](docs/PLAN.md) for the schedule.

## Project structure

```
index.html          the playable game (generated, do not edit by hand)
src/
  shell.html        page layout, styles, Python runner
  app.js            game logic: chapters, editor, quests, XP, language, theme
  ui.js             interface text in EN / ES / PT
  code.js           example code and quest checks for each chapter
  text_*.js         story and quest text, one file per language
  build.py          builds index.html from src/
docs/               assessment and plan
LEARNING_LOG.md     what I can do alone, with hints, or not yet
```

## Build

```
python src/build.py
```

---
made by Lydson
