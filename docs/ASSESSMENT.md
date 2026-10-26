# Assessment and architecture (Week 1)

Date: 26 Oct 2026

## What already works

Tested in headless Chromium on 21–22 Oct 2026. It has **not** been tested on a public URL yet.

- An 11-chapter Python course with a story: `print()`, variables, math and types, `if`/`elif`/`else`, `for`, lists, `while`, functions, `match`/`case`, dictionaries, and a final boss.
- Real Python runs in the browser with **Brython 3.13.2**. Brython translates Python to JavaScript.
- Every **Cast** checks the quest automatically. Quest checks are written in Python and run after the player's code.
- Friendly error explanations, and a guard that stops infinite `while` loops after 200,000 steps.
- XP, levels, saved drafts and progress (stored in the browser), plus a one-line REPL.
- English, Spanish and Portuguese (BR) versions, and light and dark themes.
- The build is a single static `index.html`, generated from `src/` with `python src/build.py`.

## Gaps compared with the brief

| Gap | Impact |
|---|---|
| Not in git, not deployed | No public URL yet. This is the biggest risk for week 8. |
| Brython has no `sqlite3` or `pandas`, and only limited file writing | It can't support Arc 2 (SQL), Arc 3 (pandas), or the CSV/JSON part of Arc 1. |
| Brython isn't CPython | Some error messages and behaviors differ from the Python you'll use at work. |
| Every quest is "write code that passes" | There are no predict-the-output, fix-the-bug, or explain-it quests yet. The brief requires them. |
| Arc 1 is missing topics | Scope, debugging, CSV/JSON, modules, more string formatting. |
| Content is written three times (EN/ES/PT) | Every new mission costs three times the writing. |
| Only `while` loops are guarded | A huge `for` loop can still freeze the page. |
| No automated tests in the repo | Tests were one-off scripts. |

## Recommended architecture: one runtime (Pyodide in a Web Worker)

**Replace Brython with Pyodide 314.0.x** (CPython 3.14 compiled to WebAssembly). Keep everything else: the story content, the quest checks, the UI, and the build script.

| Need | How Pyodide covers it | Verified? |
|---|---|---|
| Arc 1 / 1.5 Python | Real CPython 3.14, with real tracebacks | ✅ Spike on 26 Oct: Python 3.14.2 runs |
| CSV/JSON, save/load game | `open()`, `json`, and `csv` on an in-memory file system | ✅ Spike: wrote and read a JSON file |
| Arc 2 SQL | `sqlite3` is in Pyodide's standard library again since 314. The player writes SQL; the app runs it with `sqlite3` and shows a table. **No need for SQL.js.** | ✅ Spike: SQLite 3.39.0, `GROUP BY` + `RANK() OVER` worked |
| Arc 3 pandas | Load `pandas` 3.0.2 only when the player enters Arc 3 | ⚠️ Not loaded yet. Download size still to be measured (week 5 spike). |
| Stopping runaway code | Run Python in a Web Worker and restart it after a timeout. This doesn't need special server headers. | To build in week 2 |

**Download size (uncompressed, from the npm package):** core about 13.4 MB (`pyodide.asm.wasm` 9.6 MB, `python_stdlib.zip` 2.5 MB, `pyodide.asm.mjs` 1.25 MB). Brython today is about 5.6 MB. The browser caches it after the first visit. The local cold start took about 2.8 s in the test; real-world speed depends on the network.

**Why not keep Brython?** Brython would be fine for Arc 1, but then we'd need SQL.js for Arc 2 and Pyodide for Arc 3. That's three runtimes to maintain in eight weeks. One runtime is simpler, and you practice real CPython throughout.

**Fallback for pandas:** if pandas is too heavy or too slow in the browser, Arc 3 quests will show the code and data in the page, and you'll run them locally in a notebook with downloadable CSV/JSON files. Each quest will be labeled **"runs in browser"** or **"run locally"**.

**Hosting:** GitHub Pages serves the static files (free; 1 GB site limit; soft limit of 100 GB of bandwidth per month). Pyodide loads from the jsDelivr CDN. No accounts, API keys, or installs are needed for players.

**Known limitation:** the claude.ai artifact preview blocks external downloads and WebAssembly, so the Pyodide version probably won't run there. From now on, **GitHub Pages is the real test environment.**

## Scope cuts I recommend now

1. **New content in English only.** ES/PT stay for the existing 11 chapters. This also gives you more English practice. Translating can come back after week 8.
2. No separate inventory or achievements screens before week 7. Story text and XP are enough.
3. Arc 1.5's text RPG is built inside the editor, not as a new game engine.

## Sources

- Pyodide 314 release notes: https://blog.pyodide.org/posts/314-release
- Packages in Pyodide: https://pyodide.org/en/latest/usage/packages-in-pyodide.html
- GitHub Pages limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
