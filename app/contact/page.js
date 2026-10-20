import { siteConfig } from "../site-config";

export const metadata = {
  title: "Contact Bubble Trio Pro",
  description: "Contact the student creator of Bubble Trio Pro with game feedback, accessibility suggestions, bug reports, content corrections, and privacy questions."
};

export default function ContactPage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">CONTACT & FEEDBACK</span>
      <h1>Contact Bubble Trio Pro</h1>
      <p className="page-lead">A useful report helps me understand what a visitor experienced and what should be improved. You can use this page to share a game bug, report a confusing instruction, suggest an accessibility improvement, or ask a question about the project.</p>

      <h2>About the person behind the project</h2>
      <p>Bubble Trio Pro is an independent learning and training project built by a student at LU University. The site is being developed as a practical exercise in browser-game programming, interface design, web publishing, documentation, and maintaining a small public project. Feedback is welcome because testing with real visitors can reveal issues that are easy to miss during development.</p>
      <p>The project is not an official university website and does not claim university endorsement. Please use the contact routes for the website itself rather than treating this page as a university office or official student-service channel.</p>

      <h2>Report a game bug</h2>
      <p>For a useful bug report, include the name of the game, the level number, the browser and device you used, the action you took, what you expected, and what happened instead. For example, explain whether a bubble attached to an unexpected cell, whether a match did not count, or whether a memory card remained face up after a mismatch. If the issue occurs only sometimes, say that too. A short sequence of reproducible steps is usually more helpful than a general message saying that the site is broken.</p>
      <p>Use the <a className="primary-button" href={siteConfig.publicIssueUrl} target="_blank" rel="noreferrer">Project issue tracker <span>↗</span></a> for public bug reports and feature suggestions. The tracker is operated by GitHub, not by the game itself. Issue reports may be visible to the public, so never include passwords, authentication tokens, payment details, private messages, or sensitive personal information.</p>

      <h2>Suggest a level or content improvement</h2>
      <p>Bubble Shooter, Bubble Pop Puzzle, and Memory Match each have thirty levels. A suggestion is easiest to evaluate when it identifies the level, explains why its current goal or hint is confusing, and offers a practical alternative. You can also suggest a clearer explanation of the scoring rules, a better label for a control, a contrast improvement, or a layout change for small screens. Suggestions are reviewed as part of a student learning project; submission does not guarantee that an idea will be implemented.</p>

      <h2>Contact details and owner editing</h2>
      {siteConfig.contactEmail ? (
        <p>For direct project enquiries, email <a className="inline-link" href={"mailto:" + siteConfig.contactEmail}>{siteConfig.contactEmail}</a>. Please use a concise subject and describe the purpose of your message. Do not attach confidential information unless there is a clear need and a suitable private channel.</p>
      ) : (
        <p>A direct public email address has not been configured yet. Until one is added, use the project issue tracker for general, non-sensitive feedback only. Private or confidential requests should not be posted publicly. The site owner can add a public contact address in <code>app/site-config.js</code> by editing the <code>contactEmail</code> setting; once set, the email link will appear here automatically. Use an address you are comfortable publishing on the open web.</p>
      )}
      <p>The public contact address, creator display name, university label, and policy update date are intentionally kept in one editable configuration file: <code>app/site-config.js</code>. This avoids searching through multiple pages to change the same detail. The public email setting should remain blank until you decide which address you want visitors to see.</p>

      <h2>Privacy questions and corrections</h2>
      <p>If you have a question about the website's data practices, first read the <a className="inline-link" href="/privacy">Privacy Policy</a> and <a className="inline-link" href="/cookie-policy">Cookie Policy</a>. The current game portal uses browser storage for unlocked-level progress and does not require account creation. Do not put personal or sensitive details in a public bug report. A private contact route should be configured before the website introduces a form that collects personal information or begins using services that require private requests.</p>

      <h2>Advertising and partnership questions</h2>
      <p>The page layouts currently include reserved advertisement areas, but they do not load live Google AdSense ads. The website has not claimed approval from Google. For context, read the <a className="inline-link" href="/advertising-disclosure">Advertising Disclosure</a> and the site's <a className="inline-link" href="/content-standards">Content and Editorial Standards</a>. Any future sponsorship, ad vendor, or analytics integration must be described accurately after it has been configured.</p>

      <h2>Response expectations</h2>
      <p>This is a student-managed learning project, not a staffed commercial support desk. I may not respond immediately, and I cannot promise a fixed response time. Clear, relevant reports have the best chance of helping me reproduce a problem and decide on a correction. Abusive messages, spam, requests to manipulate advertising, or messages that expose private information may not receive a response.</p>

      <h2>Before you send a report</h2>
      <p>Please check whether the issue can be reproduced after restarting the level and refreshing the page. This can help distinguish a one-time browser-state issue from a repeatable game bug. Do not repeatedly reload a page if doing so would risk losing progress you want to keep; unlocked-level progress is stored locally and may be affected by clearing site data.</p>
      <p>Thank you for helping improve Bubble Trio Pro through considerate, specific feedback.</p>
    </article>
  );
}