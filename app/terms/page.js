import { siteConfig } from "../site-config";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Bubble Trio Pro game portal, including game progress, intellectual property, responsible use, advertising placeholders, third-party links and site availability."
};

export default function TermsPage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">TERMS & SITE USE</span>
      <h1>Terms of Use</h1>
      <p><strong>Last updated: {siteConfig.policyLastUpdated}</strong></p>
      <p className="page-lead">These Terms of Use explain the basic expectations for visiting Bubble Trio Pro and using its browser games. They are intended to make the current service clear to visitors and to describe the limits of the current project honestly. This page is general information and does not replace legal advice tailored to the operator's circumstances.</p>

      <h2>1. About this website</h2>
      <p>Bubble Trio Pro is an independent student learning project offering three browser games—Bubble Shooter, Bubble Pop Puzzle, and Memory Match—with thirty level profiles per game. The site also publishes original game instructions, hints, scoring explanations, FAQs, and project information. It is not represented as an official university website or as endorsed by a university, Google, or any third-party game publisher.</p>

      <h2>2. Eligibility and ordinary use</h2>
      <p>You may use the site for lawful personal entertainment and to read its content. When using the controls, follow the instructions shown on the page and do not attempt to interfere with other visitors or with the operation of the website. If a game does not work in your browser, you may stop playing, restart a round, or report a reproducible issue through the Contact page.</p>
      <p>The game portal does not currently offer user registration, public player accounts, online matchmaking, player chat, in-game purchases, payment functions, or a cloud leaderboard. Any descriptions of possible future services do not create an obligation to implement them.</p>

      <h2>3. Game rules and progress</h2>
      <p>Each game has its own objective. Bubble Shooter asks the player to connect matching bubbles and clear a formation. Bubble Pop Puzzle asks for valid connected groups and a target score within a move limit. Memory Match asks the player to reveal and find matching pairs. The current version includes restart controls and level progression, but round scores and active boards are temporary.</p>
      <p>Unlocked levels are stored in local browser storage. The level record may be lost if the visitor clears site data, uses a new browser, changes device, or runs a mode that does not preserve local storage. The site does not promise that progress will sync between devices or that it can recover a cleared local record. The user is responsible for their own browser settings and device.</p>

      <h2>4. Intellectual property and permitted references</h2>
      <p>Unless a page says otherwise, the original text, layouts, game implementation, and Bubble Trio Pro branding are part of this project. Visitors may read and use the site for its intended personal purpose, but may not assume that access grants permission to copy and republish substantial parts of the website as their own product. Third-party brand names, product names, and linked services belong to their respective owners. References to third-party services are explanatory and do not imply sponsorship or endorsement.</p>
      <p>If you believe content on the site infringes your rights, please use the Contact page to identify the specific page and explain the concern. Do not submit private information in a public issue report.</p>

      <h2>5. User feedback and public reports</h2>
      <p>The project may use a public issue tracker for bug reports and feature requests. By submitting a public report, you understand that the content may be visible to other people and that GitHub's own terms and privacy practices apply. Do not upload confidential records, passwords, payment information, private correspondence, or other sensitive personal data into a public report.</p>
      <p>Submitting feedback does not guarantee that a suggestion will be adopted, that a reply will be sent, or that a fix will be published by a certain date. A useful report identifies the game, level, device and browser, steps to reproduce the problem, and expected versus actual behaviour.</p>

      <h2>6. Advertising and the prohibition on manipulation</h2>
      <p>The current advertisement areas are empty placeholders labelled “Advertisement”. They are not live ads. If advertising is enabled later, advertisements will need to remain clearly separate from game controls, navigation, and explanatory text. Visitors must not be asked to click ads to support the site, increase revenue, or unlock a game. Artificial impressions, forced clicks, deceptive placements, and interference with ad delivery are not part of the intended experience.</p>
      <p>Any future advertising service is subject to its own rules as well as the applicable laws and disclosures. Review the separate <a className="inline-link" href="/advertising-disclosure">Advertising Disclosure</a> and <a className="inline-link" href="/privacy">Privacy Policy</a> for the status of the current implementation.</p>

      <h2>7. Third-party links and services</h2>
      <p>The site links to third-party resources for project feedback, publisher documentation, and privacy information. Those external websites are not controlled by Bubble Trio Pro. Their availability, terms, privacy statements, and content may change independently. Opening a link does not mean that the third party endorses this site.</p>

      <h2>8. Availability, updates, and technical errors</h2>
      <p>The site is provided on an “as available” basis. Reasonable efforts may be made to keep it usable, but continuous availability is not guaranteed. Browser updates, network disruptions, hosting incidents, or a code change can temporarily affect a game or page. A visitor should not rely on the site for safety-critical, financial, medical, academic assessment, or other high-stakes tasks.</p>
      <p>Game mechanics, level goals, instructions, layout, or features may be updated as the project develops. The owner should correct documented mistakes and may temporarily disable a broken feature rather than present it as working. Descriptions on a page should reflect the version that is actually available.</p>

      <h2>9. No professional or educational outcome promise</h2>
      <p>The games are provided for casual entertainment and as part of a student development project. They are not a medical treatment, diagnostic tool, formal educational programme, or guarantee of improved memory, intelligence, reaction time, or academic results. Practice may help a player become familiar with a game's controls, but individual experience varies and no particular outcome is promised.</p>

      <h2>10. Disclaimers and limits</h2>
      <p>To the extent permitted by applicable law, the site is offered without a promise that it will be uninterrupted, error-free, suitable for every device, or appropriate for a particular purpose. Nothing in these terms excludes consumer rights or other protections that cannot legally be excluded. The owner should seek legal advice before using this template as a final legal agreement for a commercial service.</p>

      <h2>11. Changes to these terms</h2>
      <p>These terms may be revised when the site, its content, or its integrations change. The owner maintains the public policy date through <code>app/site-config.js</code>. Material changes should be reflected in the document and communicated through the site where appropriate. Continued use after an update is subject to applicable law and any rights that cannot be waived.</p>

      <h2>12. Contact and related policies</h2>
      <p>For general feedback, bug reports, or questions about these terms, visit the <a className="inline-link" href="/contact">Contact page</a>. Also read the <a className="inline-link" href="/privacy">Privacy Policy</a>, <a className="inline-link" href="/cookie-policy">Cookie Policy</a>, <a className="inline-link" href="/advertising-disclosure">Advertising Disclosure</a>, and <a className="inline-link" href="/disclaimer">Disclaimer</a>.</p>
    </article>
  );
}