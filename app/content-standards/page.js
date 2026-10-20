import { siteConfig } from "../site-config";

export const metadata = {
  title: "Content and Editorial Standards",
  description: "How Bubble Trio Pro creates, reviews, corrects and maintains original game content, instructions, scoring guides, FAQs and policy pages."
};

export default function ContentStandardsPage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">QUALITY & EDITORIAL STANDARDS</span>
      <h1>Content and Editorial Standards</h1>
      <p><strong>Last updated: {siteConfig.policyLastUpdated}</strong></p>
      <p className="page-lead">Bubble Trio Pro is a student learning project. These standards explain how the site's game descriptions, level hints, scoring explanations, FAQs, and policy pages are intended to be created, checked, and improved. The aim is to give visitors useful, accurate information about the actual games rather than pages that exist only to fill space.</p>

      <h2>1. Purpose and editorial approach</h2>
      <p>The central purpose of the website is to offer three original browser-game experiences—Bubble Shooter, Bubble Pop Puzzle, and Memory Match—and explain how they work. Written content should help a visitor understand the objective, learn the controls, plan a move, understand a score, troubleshoot an issue, or make an informed choice about using the site. Content should answer the real questions players have, rather than repeat a keyword in slightly different sentences.</p>
      <p>Every public page should have a clear reason to exist. The homepage introduces the game room and supplies instructions. The About page describes the student project and its limits. Contact explains how to report a problem. The Privacy and Cookie policies describe the current storage and possible future third-party technologies. The Terms of Use set expectations for using the site. The Advertising Disclosure explains the current placeholder status. These pages have different functions and should not be interchangeable copies.</p>

      <h2>2. Original game implementation and ownership claims</h2>
      <p>The three games are implemented for this project with their own browser interactions, boards, objectives, scoring, and progression settings. Guides should describe what a visitor can see in the current version. The site must not claim to be an official version of another game publisher's service, imply a sponsorship that has not been granted, or use another organisation's name to suggest approval. References to third-party technologies should be factual and limited to what is needed to explain the implementation or link to documentation.</p>
      <p>The owner should check that any third-party images, fonts, sounds, code packages, or other assets used in future changes have a suitable licence or permission. If a material third-party component is added, documentation and attribution should be updated where required. The fact that a resource is visible on the internet does not automatically permit it to be copied into a commercial or advertising-supported site.</p>

      <h2>3. Accuracy of game instructions</h2>
      <p>Instructions should match the current game engine. Bubble Shooter documentation should accurately describe aiming, launching a bubble, matching at least three connected bubbles of the same colour, scoring bonuses, falling bubbles, misses, and the end-of-level state. Bubble Pop Puzzle documentation should describe the valid group rule, how target score and moves work, and what happens after a successful or unsuccessful move. Memory Match documentation should explain two-card turns, found pairs, mismatch timing, attempt counts, and the conditions needed to clear a level.</p>
      <p>If the underlying rules change, the homepage guide, level hints, FAQ answers, and any relevant screenshots or explanations should be reviewed. A written description should not promise a feature that is absent, such as cloud saves, a public ranking table, online multiplayer, sound effects that are not implemented, or an account system. When an issue is discovered, the affected instruction should be corrected instead of hiding the problem behind more promotional text.</p>

      <h2>4. Level design and difficulty review</h2>
      <p>The three games each contain thirty level profiles. Level names, hints, goals, score targets, move budgets, row counts, colours, patterns, pair counts, and themes are maintained in the game's configuration. A level profile is a starting point for playtesting, not proof that a level is balanced. If a target is impossible to reach within the available moves, or a level cannot be cleared because the board generator creates no useful move, the owner should rebalance or fix it.</p>
      <p>Difficulty should grow in a way that players can understand. Early levels establish the controls and core rules. Intermediate levels introduce more choices or tighter constraints. Later levels may combine patterns and memory demands. The site should avoid describing a level as “expert” or “challenging” solely because it is unfinished. Hints should provide a practical suggestion and should be checked against the current rules.</p>
      <p>When reviewing progression, test a new browser profile, restarting a level, completing a level, unlocking the next level, choosing a previously unlocked level, and refreshing the page. Unlock progress is stored locally, so testing should also verify what happens when local storage is unavailable or cleared.</p>

      <h2>5. Long-form guides and FAQs</h2>
      <p>Long-form text should add usable information, such as a worked scoring example, a method for planning a wall bounce, advice for remembering card positions, instructions for recovering from a failed round, or a clear explanation of browser progress. FAQs should answer distinct questions with complete explanations. They should not be padded with repeated sentences merely to reach a target word count.</p>
      <p>The site does not claim a medical or scientific benefit from these games. Words such as “brain training”, “improves memory”, or “boosts intelligence” should not be presented as evidence-backed health or education outcomes without appropriate evidence. It is acceptable to say that Memory Match asks players to remember symbol locations; that describes a mechanic. It is not the same as claiming that playing the game improves a person's long-term memory.</p>

      <h2>6. Review process</h2>
      <p>Before publishing a substantial change, the owner should review spelling, grammar, headings, internal links, the target page, mobile layout, and whether the claims match the current code. Interactive features should be tested after changes to their engine. A policy update should be compared with the real services enabled in the deployment, not merely copied from an example site.</p>
      <p>Automated writing or coding tools may be used as part of the learning workflow, but the published material remains the site's responsibility. Suggested text should be read, tested where it describes software, and corrected when it contains an unsupported claim, an inaccurate setting, a fabricated contact address, or a placeholder that has been mistaken for a real feature. No tool can guarantee that a website complies with every law or is approved by Google AdSense.</p>

      <h2>7. Corrections and visitor feedback</h2>
      <p>Visitors can report errors through the <a className="inline-link" href="/contact">Contact page</a>. Good reports identify the exact page or level, quote the part that seems wrong, explain why it is confusing, and suggest a correction where possible. The project may prioritise reports according to severity, how many visitors are affected, and the time available for testing.</p>
      <p>Corrections should be made in the relevant source file and re-deployed. Policy pages should show a date that reflects a material revision. The site should not imply that a correction was made when only a draft was written or a change has not been published.</p>

      <h2>8. Advertising, independence, and conflicts</h2>
      <p>The advertisement areas are placeholders only, and the site does not claim an active Google AdSense partnership. If advertising or sponsorship is introduced, it should be clearly identified and visually separated from editorial explanations and game controls. Payment or sponsorship must not be represented as an independent recommendation. Visitors must not be pressured to click an ad, and ads must not be designed to resemble level selectors or restart buttons.</p>
      <p>Google Publisher Policies prohibit Google-served ads on pages without publisher content or with low-value content, including certain pages used mainly for navigation or other behavioural purposes. The owner should therefore make sure that any future pages receiving ads have meaningful user-facing content and are not just a list of buttons or an empty shell. Read <a className="inline-link" href="https://support.google.com/publisherpolicies/answer/11112688" target="_blank" rel="noreferrer">Google's guidance on ads on screens without publisher content</a> and the <a className="inline-link" href="/advertising-disclosure">Advertising Disclosure</a>.</p>

      <h2>9. Accessibility and readability</h2>
      <p>Pages should use semantic headings, descriptive link names, readable line lengths, visible focus states, and layouts that adapt to different screen sizes. Game controls should communicate their purpose. The canvas-based Bubble Shooter has special accessibility limits because most of its visual board is drawn in a canvas; its accessible label and the separate written instructions are important, but they are not a complete substitute for every assistive-technology interaction. The site should document known limitations and improve them where practical.</p>

      <h2>10. Student project transparency</h2>
      <p>The About page explains that this is a student learning project. Contact details remain editable in <code>app/site-config.js</code>. The owner should never publish a private email address, personal name, or other information simply because a template contains a field for it. University references should be factual and should not imply official endorsement. The source configuration file is public, so it must not contain passwords, secret API keys, private tokens, or confidential personal information.</p>

      <h2>11. Policy and configuration maintenance</h2>
      <p>The public policy pages should reflect the current build. If a live ad network, analytics tool, contact form, embedded media, or account database is introduced, the owner should review the Privacy Policy, Cookie Policy, Terms of Use, Advertising Disclosure, and any consent settings that apply. If a feature is removed, references that suggest it is still active should be removed or updated.</p>
      <p>The owner can edit game text and level settings in <code>app/game-content.js</code>, style values in <code>app/globals.css</code>, contact and creator information in <code>app/site-config.js</code>, and the long-form homepage guide in <code>app/page.js</code>. The <a className="inline-link" href="https://github.com/websiite01-tech/bubble-trio-pro/blob/main/OWNER_EDIT_GUIDE.md" target="_blank" rel="noreferrer">Owner Edit Guide</a> provides a map of those files.</p>

      <h2>12. Limits of these standards</h2>
      <p>These standards describe the intended review process. They do not guarantee that every error will be found, every suggestion will be adopted, or that Google, a search engine, a regulator, or any other organisation will approve the site. The owner should continue to check the live experience, monitor policy changes, and correct problems when identified.</p>
    </article>
  );
}