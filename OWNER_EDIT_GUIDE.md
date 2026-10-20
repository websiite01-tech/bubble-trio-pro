# Bubble Trio Pro — Owner Edit Guide

You can change the game's written content directly in GitHub. You do not have to paste code into ChatGPT to change ordinary text, level names, level goals, and hints.

Repository: https://github.com/websiite01-tech/bubble-trio-pro

## The three games

The homepage deliberately contains only three games, each with 30 level profiles:

1. **Bubble Shooter** — BUBBLE_LEVELS
   - Level name, starting rows, colours, board silhouette/pattern, allowed missed shots, goal, and hint.
2. **Bubble Pop Puzzle** — POP_LEVELS
   - Level names, target score, available moves, number of colours, minimum match size, bonus and hint.
3. **Memory Match** — MEMORY_LEVELS
   - Level names, number of pairs, symbol theme, objective and hint.

All of this editable configuration is in app/game-content.js.

## Where to edit what

| Creator / site setting | File |
| --- | --- |
| Public contact email (hidden until populated) | app/site-config.js → contactEmail |
| Optional public name | app/site-config.js → creatorName |
| Student role and university label | app/site-config.js → creatorRole, university |
| Policy update date and site URL | app/site-config.js → policyLastUpdated, siteUrl |
| Advertising disclosure | app/advertising-disclosure/page.js |
| Content and editorial standards | app/content-standards/page.js |
| Disclaimer | app/disclaimer/page.js |
| Accessibility statement | app/accessibility/page.js |
| Corrections and updates policy | app/corrections/page.js |


| What you want to change | File |
| --- | --- |
| Game name, summary, category, instruction list | app/game-content.js → GAMES |
| Bubble Shooter's 30 level names and hints | app/game-content.js → LEVEL_NAMES, BUBBLE_LEVELS |
| Bubble Pop Puzzle's 30 targets and moves | app/game-content.js → POP_TARGETS, POP_MOVES, POP_LEVELS |
| Memory Match's 30 pair counts and themes | app/game-content.js → MEMORY_PAIRS, MEMORY_THEMES, MEMORY_LEVELS |
| Common questions and answers | app/game-content.js → PLAYER_FAQS |
| Longer homepage article and FAQs layout | app/page.js |
| Game logic, level completion, reset, local progress | app/game-portal.js and app/bubble-shooter.js |
| Colours, spacing, game cards and mobile layout | app/globals.css |
| Header and game navigation labels | app/site-header.js |
| Privacy disclosures | app/privacy/page.js |
| Cookie and browser storage explanation | app/cookie-policy/page.js |
| About/student project profile | app/about/page.js |
| Family Play Guide | app/family-guide/page.js |
| Contact page content | app/contact/page.js |
| Cookie explanation | app/cookie-policy/page.js |
| Usage terms | app/terms/page.js |
| Pre-launch advertising checklist | ADSENSE_READINESS.md |

## How to make a text change in GitHub

1. Open the repository linked above and open the relevant file.
2. Press the pencil icon (Edit this file).
3. Search within the file for the text, level name, or FAQ question you want to update.
4. Make the smallest change you can, then use GitHub's Preview changes if it is offered.
5. Commit the change to main. The next Vercel deployment should publish it once the GitHub integration is connected. Until automatic integration is enabled, a new build needs to be triggered through the available deployment workflow.

You can instead tell ChatGPT something plain-English such as: “Change level 8's hint to explain a wall bounce,” “Make Memory Match level 15 use 14 pairs,” or “Add an FAQ explaining progress reset.” It can edit the corresponding GitHub file directly with the connected tools.

## Difficulty tuning notes

- Keep each level array at exactly 30 entries.
- Level numbers are generated from array positions, so level 1 is the first entry and level 30 is the last entry.
- Bubble Shooter currently caps the colour palette at six colours; don't set colours above six without also updating the game engine palette.
- Memory Match currently has 18 unique symbols, so MEMORY_PAIRS must not exceed 18 without adding new symbols in app/game-portal.js.
- Bubble Pop Puzzle's score targets and move budgets should rise gently. A target that is too high for the available moves can make the level frustrating or impossible.
- Level unlocks are saved in the player's local browser. They do not sync across devices, and clearing browser site data can erase progression.

## Before publishing changes

Open the preview or live website and try all three games on desktop and mobile. At minimum, test a fresh level, a restart, completing a level, unlocking the next level, selecting a previously unlocked level, and refreshing to confirm that progress is preserved.

## AdSense caution

Advertisement boxes in this version are intentionally empty placeholders. Do not add a made-up publisher ID or sample ads.txt record. Review ADSENSE_READINESS.md and the actual Google publisher account before turning live ads on. Policy pages must always describe the site's real vendors and behaviour.
