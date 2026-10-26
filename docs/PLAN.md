# Eight-week plan

**Deadline:** week 8 ends on **Sun 20 Dec 2026** (week 1 = 26 Oct – 1 Nov).
**Budget:** under 5 hours/week. That's about 2 hours of learning and 2–3 hours of building, in 30–45 minute sessions.
**Rule:** if a week slips, cut from the bottom of the cut list. The deadline doesn't move.

| Week | Dates | Build | Learn (missions) | Done when |
|---|---|---|---|---|
| 1 | 26 Oct – 1 Nov | Create a GitHub repo, publish the **current** game on GitHub Pages, test it in a clean browser | Arc 1 diagnostic: types, conversion, reading errors | Public URL works |
| 2 | 2 – 8 Nov | Swap Brython for Pyodide (Web Worker runner). Add the "predict" and "fix the bug" quest types | Arc 1: scope, debugging, CSV/JSON save/load | All 11 old quests pass on Pyodide |
| 3 | 9 – 15 Nov | Arc 1.5 Training Grounds: 4–5 combined missions and the text-RPG steps | Inventory, rewards, reusable functions, game state | You build the mini RPG yourself |
| 4 | 16 – 22 Nov | SQL quest type (SQL editor + results table) and the alchemy database (6–7 tables) | SELECT/WHERE/ORDER BY, GROUP BY, INNER/LEFT JOIN | Real queries run in the browser |
| 5 | 23 – 29 Nov | SQL: CASE, NULLs, CTEs, window functions, constraints. **pandas spike** (load size and speed) | Profit, low stock, duplicates, ranking, monthly sales | Arc 2 playable; pandas decision made |
| 6 | 30 Nov – 6 Dec | Arc 3 Grand Library: messy grimoire CSV/JSON files and pandas quests | Load, inspect, clean, group, merge, validate | Arc 3 playable (in browser or locally) |
| 7 | 7 – 13 Dec | Final Trial: messy file → database → queries → report. Polish, plus an automated test script | Capstone | Capstone passes and every quest is tested |
| 8 | 14 – 20 Dec | README, screenshots, clean-browser test of the public URL, portfolio write-up | Explain the architecture in your own words | Definition of done met |

## Cut list (cut from the bottom first)

1. Animations and visual polish
2. Achievements and inventory screens
3. ES/PT translation of new content (already cut)
4. Window functions beyond `RANK` and `ROW_NUMBER`
5. pandas in the browser (fallback: run locally with downloadable data)
6. Arc 1.5 reduced to 3 missions

**Never cut:** the public URL, real SQL execution, real pandas code (in the browser or locally), the capstone, the README.
