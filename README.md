# Bubble Trio Pro

A responsive classic-style Bubble Shooter portal built with Next.js App Router, React, and Tailwind CSS 4.

## Included

- Exactly three original browser games, each with 30 levels: Bubble Shooter, Bubble Pop Puzzle, and Memory Match (90 level challenges in total).
- Responsive three-column desktop layout, stacked mobile layout, keyboard-friendly buttons, focus states, and reduced-motion support.
- A substantial player guide with game rules, per-game strategy, scoring explanations, hints, and 12 frequently asked questions with answers.
- About, Privacy Policy, Cookie Policy, Terms of Use, Advertising Disclosure, Disclaimer, Content and Editorial Standards, Corrections and Updates Policy, Accessibility Statement, and Contact pages.
- Clearly labelled, reserved ad spaces with stable minimum heights. They are placeholders, not active AdSense units.
- SEO metadata and a site icon.

## Local development

Use Node.js supported by the selected Next.js release.

    npm install
    npm run dev

Open http://localhost:3000.

## Production build

    npm run build
    npm start

## Deployment and domain

Current Vercel deployment: https://bubble-trio-pro.vercel.app. A custom domain can be added later. The current build was deployed directly from the committed source files. To enable automatic deployments on every GitHub push, install/authorize the Vercel GitHub integration for the websiite01-tech account and connect this repository in the Vercel project's Git settings. Do not add a made-up canonical domain or DNS record. Once you choose a custom domain, set NEXT_PUBLIC_SITE_URL to that exact HTTPS origin and keep sitemap and canonical metadata aligned with it.

## Editing the visual design

Most site styling is in app/globals.css. The final override block is named Bubble Trio Pro: classic bubble-shooter portal skin and contains the light theme, game thumbnails, spacing, and responsive breakpoints. Homepage copy lives in app/page.js; the game catalog and navigation wiring live in app/game-portal.js; the canvas mechanics and its original drawing functions live in app/bubble-shooter.js; category navigation and search live in app/site-header.js.

## Editing game content

Site owner and contact settings are in `app/site-config.js`. Edit `contactEmail` to publish an email link on the Contact page (leave it blank until you want the address public), `creatorName` to optionally display your name, and `university` / `creatorRole` to correct the public profile. These values are part of the public repository, so never put passwords, keys, tokens or confidential data there.


For a step-by-step owner reference, see `OWNER_EDIT_GUIDE.md`.

Open `app/game-content.js` to edit the three games' names, descriptions, the 30 level names/hints/board patterns/difficulty values for each game, Bubble Pop score targets and move budgets, Memory Match pair counts and themes, the player instructions, and the FAQ answers. The homepage long-form guide is maintained in `app/page.js`. Styling and spacing are in `app/globals.css`; Bubble Shooter mechanics live in `app/bubble-shooter.js`; the two other game engines and level progression are in `app/game-portal.js`.

Edits to `app/game-content.js` are intended to be safe content configuration changes. To change the actual game rules or controls, change the engine files and test the build. The owner can request changes in plain English and have them committed directly to the connected GitHub repository—there is no need to paste full files into chat.

## AdSense readiness

No live ad code or publisher ID is included. Read `ADSENSE_READINESS.md` before applying. Review every policy page against the deployed implementation. After the site and publisher are eligible, configure real ad units separately, preserve layout space, keep ads away from game controls and navigation, update the actual privacy disclosures, and configure any consent management that is applicable. A compliant-looking template cannot guarantee AdSense approval.

## Notes

- Game scores are client-side and reset with a new round; unlocked level progression is saved in local browser storage.
- No logins, payment flows, third-party game embeds, or site-specific analytics are implemented.
- The public GitHub issue tracker is used for feedback until a private contact channel is configured.
