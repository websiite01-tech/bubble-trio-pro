import { siteConfig } from "../site-config";

export const metadata = {
  title: "Corrections and Updates Policy",
  description: "How Bubble Trio Pro reviews bug reports, corrects game instructions, updates policy pages, and documents site changes."
};

export default function CorrectionsPage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">CORRECTIONS & MAINTENANCE</span>
      <h1>Corrections and Updates Policy</h1>
      <p><strong>Last updated: {siteConfig.policyLastUpdated}</strong></p>
      <p className="page-lead">Accurate instructions and a working game experience matter more than the appearance of being finished. This policy describes how Bubble Trio Pro handles reports about factual errors, unclear text, broken controls, unbalanced levels, and outdated policy information.</p>

      <h2>1. What can be reported?</h2>
      <p>Visitors can report a game that does not start, a button that does not respond, a level that appears impossible, a scoring explanation that conflicts with the current game, a spelling mistake, a broken internal link, an outdated contact route, or a policy statement that no longer matches the implementation. Accessibility barriers, confusing controls, and mobile layout problems are also useful reports.</p>
      <p>For game reports, include the game name and level number. Explain what you did, what you expected to happen, and what happened instead. If the issue can be reproduced, provide a short sequence of steps. Mention your browser and whether you were using a phone, tablet, or desktop if that information helps explain the issue. Do not share private account details or confidential information in a public report.</p>

      <h2>2. How reports are reviewed</h2>
      <p>The project is managed as a student learning exercise, so reports may not be handled on a fixed schedule. When possible, the owner should attempt to reproduce the issue, identify whether it comes from game logic, layout, browser behaviour, or text, and decide on a safe correction. Issues that block the main game or make a level unwinnable should generally take priority over purely decorative changes, subject to the time available.</p>
      <p>A report is a request for review, not a promise that a change will be implemented. Some suggestions require a larger redesign, depend on external providers, or would add features the site does not currently support. Where a report cannot be reproduced, more details may be required before an effective change can be made.</p>

      <h2>3. Correcting game logic and instructions</h2>
      <p>If code changes, related instructions should be checked for accuracy. For example, changes to Bubble Shooter scoring should be reflected in the scoring explanation; changes to Bubble Pop Puzzle move limits should be reflected in the level descriptions; and changes to Memory Match pair counts should be reflected in the current objective and hints. A content-only edit should not claim a change in game functionality unless the game engine has also been updated and tested.</p>
      <p>Testing should include the level selector, restart button, completion state, next-level unlock, local progress persistence, responsive layout, and any new control affected by the patch. At least a quick test of the updated page and the relevant game should be done before describing a change as complete.</p>

      <h2>4. Correcting factual and policy content</h2>
      <p>When a written page contains a factual error or is out of date, the owner should update the relevant source and the deployment. Policy pages require special care: they must describe the actual hosting, browser storage, contact methods, advertising services, analytics, and consent controls. A service should not be listed as active just because it is mentioned as a possible future integration.</p>
      <p>The policy date in <code>app/site-config.js</code> can be updated when a material policy revision is published. It should not be changed solely to make an old policy appear freshly reviewed when the text and implementation have not been checked.</p>

      <h2>5. Version and publishing transparency</h2>
      <p>The site's source repository is used to maintain changes. A code or content edit is not live until it has been committed and the resulting deployment is published. If a build fails, the project owner should investigate the error and avoid telling visitors that the change is live before it becomes available. The live site, repository, and any published policy should remain consistent.</p>
      <p>For each substantial change, the owner should check that the navigation still works, the target route renders, and mobile styling is not broken. Where a fix introduces a new data practice or third-party service, the privacy and cookie disclosures must be reviewed as part of the same release.</p>

      <h2>6. Contact and confidentiality</h2>
      <p>Use the <a className="inline-link" href="/contact">Contact page</a> for the currently available feedback routes. Public issue reports can be read by other people. Do not submit passwords, access tokens, financial information, private correspondence, identity documents, or confidential privacy requests in a public report. A private contact channel can be configured through <code>app/site-config.js</code> before confidential correspondence is encouraged.</p>

      <h2>7. Relationship to advertising review</h2>
      <p>A correction process can help maintain the website, but it does not guarantee search ranking or AdSense approval. The owner must still review the actual site and publisher account against the applicable policies. Pages should have useful content for visitors, ads must not be placed on low-value or navigation-only screens, and the presence of policy documents alone does not prove that all requirements are met. Review the <a className="inline-link" href="/advertising-disclosure">Advertising Disclosure</a> and <a className="inline-link" href="/content-standards">Content and Editorial Standards</a> for related principles.</p>

      <h2>8. Ongoing improvement</h2>
      <p>The goal is to improve the site responsibly over time, not to imply that software has no defects. Clear reporting, careful reproduction, small corrections, and honest release notes make the project more trustworthy. If something still needs work, the site should say so and prioritise a fix instead of inventing a feature or a result.</p>
    </article>
  );
}