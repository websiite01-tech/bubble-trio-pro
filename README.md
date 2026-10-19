# Bubble Trio Pro

A responsive, dark-mode browser game portal built with Next.js App Router, React, and Tailwind CSS 4.

## Included

- Eleven original, interactive browser mini-games, featuring a large Bubble Shooter canvas game plus Bubble Pop, Memory Match, Number Rush, Tic-Tac-Toe, Quick Math, Reaction Test, Rock Paper Scissors, Word Scramble, Colour Match, and Whack-a-Dot.
- Responsive three-column desktop layout, stacked mobile layout, keyboard-friendly buttons, focus states, and reduced-motion support.
- Server-rendered player guide with game rules, scoring explanations, and FAQs.
- About, privacy, cookie policy, terms of use, and contact information pages.
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

Connect this repository to a Vercel project and deploy from the main branch. Vercel provides a default deployment domain; a custom domain can be added later. Do not add a made-up canonical domain or DNS record. Once a stable production URL exists, set NEXT_PUBLIC_SITE_URL to that exact HTTPS origin and use it for sitemap and canonical metadata if configured.

## Editing the visual design

Most site styling is in app/globals.css. The final override block is named Bubble Trio Pro: classic bubble-shooter portal skin and contains the light theme, game thumbnails, spacing, and responsive breakpoints. Homepage copy lives in app/page.js; the game catalog and navigation wiring live in app/game-portal.js; the canvas mechanics and its original drawing functions live in app/bubble-shooter.js; category navigation and search live in app/site-header.js.

## AdSense readiness

No live ad code or publisher ID is included. Read ADSENSE_READINESS.md before applying. After the site and publisher are eligible, configure real ad units separately, preserve layout space, keep ads away from game controls and navigation, update the actual privacy disclosures, and configure any consent management that is applicable. A compliant-looking template cannot guarantee AdSense approval.

## Notes

- Game scores are client-side and do not persist across reloads.
- No logins, payment flows, third-party game embeds, or site-specific analytics are implemented.
- The public GitHub issue tracker is used for feedback until a private contact channel is configured.
