# Bubble Trio Pro — AdSense Readiness Checklist

This is a practical owner checklist, not a promise or guarantee of Google AdSense approval. Google evaluates the live website and publisher account against its current policies. Policy pages and a long article are useful only when they describe the real website and sit alongside original, useful, functioning content.

## Current implementation

- [x] Three original browser-game experiences: Bubble Shooter, Bubble Pop Puzzle, and Memory Match.
- [x] Thirty level profiles per game, with level selection and local progress tracking.
- [x] Original, game-specific instructions for controls, rules, scoring, aiming, hints, and strategy.
- [x] Player FAQ with answers about levels, progress, scores, mobile play, restart behaviour, and advertising status.
- [x] Creator/About page that describes this as a student learning project and does not claim university or Google endorsement.
- [x] Contact page with a clear owner-editable email configuration. The email field is blank until the owner elects to publish a public address.
- [x] Separate Privacy Policy, Cookie Policy, Terms of Use, Advertising Disclosure, Disclaimer, Content and Editorial Standards, Corrections and Updates Policy, and Accessibility Statement.
- [x] Legal and transparency routes linked from the site footer and included in the sitemap.
- [x] Empty ad placeholders are labelled “Advertisement” and have reserved minimum heights; this build does not load live AdSense ad requests.
- [x] No fabricated publisher ID or sample ads.txt record.
- [ ] Owner must confirm that “LU University” is the preferred accurate public label before submitting the site. The About page expressly disclaims official university endorsement.
- [ ] Strongly consider purchasing and connecting a custom domain before applying. Google's sign-up instructions say the submitted URL must be a standard domain and that subdomains are only accepted through qualifying host-partner flows such as Blogger. A normal Vercel preview/hosting subdomain may not be accepted in AdSense; verify current account requirements before submission. See https://support.google.com/adsense/answer/2784438 and https://support.google.com/adsense/answer/91205.
- [ ] Owner should optionally add a public contact email to the contactEmail setting in app/site-config.js. Use an address you are comfortable publishing openly; never add a private email unknowingly.
- [ ] Test all three games from a clean browser profile, including restarting, level completion, unlocking the next level, switching games, and refreshing to confirm that local level progress persists.
- [ ] Check desktop, tablet, and mobile layouts; verify that ad placeholders, navigation, game controls, and article content do not overlap.
- [ ] Inspect keyboard focus and screen-reader behaviour. The Bubble Shooter canvas has known accessibility limitations documented on /accessibility.
- [ ] Proofread all public pages and verify the policy statements match the live implementation, especially local storage, contact routes, hosting, and any future third-party code.
- [ ] Open every footer link in a normal signed-out browser and check that there are no broken or blank routes.
- [ ] Confirm the canonical URL, robots.txt and sitemap use the exact production domain. A custom domain can be configured later.
- [ ] Apply to AdSense from the publisher account you actually control. Do not claim approval before the account approves the site.
- [ ] Add live ads only after the real publisher setup and review. Do not invent a publisher ID, fill slots with fake ad code, or add an ads.txt example ID.
- [ ] If Google AdSense indicates an ads.txt record is needed, retrieve the real publisher information from the account and publish the matching record at the site's root. Check the AdSense status after Google recrawls the site.
- [ ] Review the current AdSense settings, selected vendors, privacy disclosure, and applicable consent requirements before enabling the first ad request.
- [ ] Where required for personalised ads in the EEA, UK, or Switzerland, configure a Google-certified consent-management platform integrated with the IAB Transparency and Consent Framework.
- [ ] Keep real ads away from restart, play, search, navigation, and level-selection controls. Do not ask users to click ads. Check that responsive ad sizes do not cause unexpected layout movement.
- [ ] Check the AdSense Policy Centre after review and address specific feedback before reapplying or enabling ads.

## Owner-editable settings

Open app/site-config.js to edit the creator display name, student role, university label, public contact email, policy update date, site URL, and project links. The public creator name and contact email fields are intentionally blank by default. Do not publish a personal name or email until you have decided you are comfortable displaying it to every visitor.

Open app/game-content.js to adjust each game's name, description, thirty level profiles, hints, target values, move limits, themes, and FAQ answers. The longer homepage guide is in app/page.js. Visual design is in app/globals.css. The OWNER_EDIT_GUIDE.md file gives a map of those source files.

## What these policies do and do not mean

The Privacy Policy describes local level-progress storage and possible future advertising technologies. The Cookie Policy distinguishes the current use of browser local storage from future cookies and vendor technologies. The Terms of Use describe expected site usage. The Advertising Disclosure says that the current ad shapes are placeholders only. The Disclaimer avoids claiming medical, educational, university, or Google endorsement. The Content Standards and Corrections Policy explain how editorial content and bug reports should be reviewed. The Accessibility Statement describes goals and known limits.

The policies must be changed when the implementation changes. For example, if an analytics tracker, email form, account system, external game embed, or real advertising script is added, the owner must review the pages and the actual consent / privacy settings. Listing a future service in a policy does not activate it and should not make visitors think it is already running.

## Official Google references

- Required privacy-policy content for AdSense: https://support.google.com/adsense/answer/1348695
- Google Publisher Policies: https://support.google.com/publisherpolicies/
- Google-served ads on screens without publisher content or with low-value content: https://support.google.com/publisherpolicies/answer/11112688
- Ad placement and accidental-click guidance: https://support.google.com/adsense/answer/1346295
- Ads that interfere with content or user interactions: https://support.google.com/publisherpolicies/answer/11035030
- Google consent-management requirements for publishers: https://support.google.com/adsense/answer/13554116
- Google's data-use information for partner sites: https://policies.google.com/technologies/partner-sites
- Find your actual AdSense publisher ID: https://support.google.com/adsense/answer/105516
- Resolve ads.txt issues: https://support.google.com/adsense/answer/12171244

## Important

Google's inventory-value guidance says ads should not be served on screens without publisher content or with low-value content, under-construction screens, and screens used mainly for alerts or navigation. The game and the editorial information should be useful to the visitor; policy pages are supporting transparency, not a substitute for the main experience. Word count alone is not an approval requirement and this checklist cannot guarantee acceptance.
