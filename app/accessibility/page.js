import { siteConfig } from "../site-config";

export const metadata = {
  title: "Accessibility Statement",
  description: "Accessibility goals, current known limitations, testing approach and feedback route for Bubble Trio Pro."
};

export default function AccessibilityPage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">ACCESSIBILITY & USABILITY</span>
      <h1>Accessibility Statement</h1>
      <p><strong>Last updated: {siteConfig.policyLastUpdated}</strong></p>
      <p className="page-lead">Bubble Trio Pro aims to make its game portal readable and usable on desktop, tablet, and mobile devices. This page describes the accessibility practices intended for the current version, identifies a known limitation in the canvas-based game, and explains how a visitor can report a barrier. It is not a claim of formal WCAG certification or a completed independent accessibility audit.</p>

      <h2>1. Design goals</h2>
      <p>The site uses semantic headings, labelled navigation, descriptive links, visible keyboard focus styles, readable text sizes, responsive layout rules, and buttons for interactive controls. The interface aims to distinguish the game from navigation, editorial content, and reserved advertising space. Users should be able to identify the purpose of a section without relying on colour alone wherever practicable.</p>
      <p>The page respects the browser's reduced-motion preference in its CSS animation and transition rules. The game boards use button controls for the puzzle and memory experiences, and the page provides written instructions that explain the objective of each game. These choices are intended to support a range of users, though they do not remove every possible barrier.</p>

      <h2>2. Keyboard and pointer controls</h2>
      <p>Many navigation items, game selectors, restart buttons, level controls, and policy links are ordinary HTML buttons or anchors and can be reached using standard browser interaction. Visible focus styling helps users who navigate with a keyboard. Bubble Shooter uses pointer and touch interaction on a canvas, so the experience is different from a board built out of individual HTML buttons. Mobile visitors should use touch controls and may find landscape orientation gives the game board more room.</p>

      <h2>3. Known limitations</h2>
      <p>The Bubble Shooter board is drawn inside a canvas. It has a descriptive accessible label and the site explains the main controls and goal in nearby text, but individual bubbles are not exposed as separate semantic controls in the same way as the HTML buttons used for other games. This can make it difficult for some screen-reader or keyboard-only users to perceive the current board and operate precise shots. Improving accessible control alternatives is a known area for future work.</p>
      <p>Some decorative colour effects, tiny game-cover artwork, and visual status cues may not convey all information to every visitor. Where a visible game state affects play, the site should keep a textual score, objective, or status explanation available. Feedback is welcome if a control label, colour combination, focus indicator, or instruction is unclear.</p>

      <h2>4. Content and readability</h2>
      <p>Long-form pages use headings to divide the material into topics. Policy and contact links are available from the footer, and the player guide explains game mechanics without requiring a visitor to read the source code. The owner aims to use plain language and to correct confusing wording. A new feature should be checked on a narrow phone screen as well as a desktop-sized browser to prevent controls or text from overlapping.</p>

      <h2>5. How to report an accessibility issue</h2>
      <p>If you find a barrier, visit the <a className="inline-link" href="/contact">Contact page</a>. Include the page URL, game and level if relevant, your browser and device, the method you were using (keyboard, touch, screen reader, zoom, or another assistive tool), what you tried, and what happened. Do not include personal medical information or other sensitive details. The project is managed by a student and may not respond immediately, but a precise description makes the problem easier to investigate.</p>
      {siteConfig.contactEmail ? <p>You may also email <a className="inline-link" href={"mailto:" + siteConfig.contactEmail}>{siteConfig.contactEmail}</a> with an accessibility report.</p> : <p>A private email contact has not been configured yet. The owner can add a public contact address in <code>app/site-config.js</code> when ready.</p>}

      <h2>6. Ongoing review</h2>
      <p>Accessibility is an ongoing maintenance task rather than a one-time label. Changes to layout, controls, game logic, or third-party embeds should be tested again. The current statement will be updated when known barriers are fixed or when new ones are discovered. This page describes the project's present goals and limitations, not a guarantee that the site meets every accessibility standard.</p>
      <p>For related information, read the <a className="inline-link" href="/content-standards">Content and Editorial Standards</a>, <a className="inline-link" href="/disclaimer">Disclaimer</a>, and <a className="inline-link" href="/contact">Contact page</a>.</p>
    </article>
  );
}