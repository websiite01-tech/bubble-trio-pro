export const metadata = { title: "Privacy Policy", description: "Privacy information for Bubble Trio Pro, including browser game state, hosting, and current advertising status." };

export default function PrivacyPage() {
  return (
    <article className="content-page">
      <span className="eyebrow">SITE INFORMATION</span>
      <h1>Privacy policy</h1>
      <p><strong>Last updated: 19 October 2026</strong></p>
      <p>This page explains the current data practices for Bubble Trio Pro. It describes the site as it exists today and should be updated before introducing advertising, analytics, accounts, or other third-party services. This information is not a promise that the hosting infrastructure itself collects no technical data.</p>
      <h2>Game data in your browser</h2>
      <p>The mini-games do not require an account. Scores, revealed cards, selected moves, and other game progress are maintained in the active page's client-side state. The current version does not send that game state to a Bubble Trio Pro account service, does not provide cloud saves, and does not run a site-specific analytics tracker. Refreshing the page or restarting a game resets the relevant state.</p>
      <h2>Hosting and technical information</h2>
      <p>When you request a website, the hosting provider and delivery infrastructure may process technical information such as IP address, browser details, request timing, and security logs to operate, protect, and troubleshoot the service. Those operations are controlled by the relevant infrastructure providers and their own privacy terms. Do not assume that browsing the web is anonymous.</p>
      <h2>Advertising and cookies</h2>
      <p>The advertisement areas currently visible on the site are reserved layout spaces only. No live Google AdSense ad unit is loaded by this version. The site does not intentionally set an advertising cookie from those placeholders. If advertising or analytics is introduced, this policy must be revised to identify the actual providers, categories of data, cookies or similar technologies, purposes, and available controls. Applicable consent and disclosure requirements must be considered for the locations in which the site operates and its visitors reside.</p>
      <h2>Children and personal information</h2>
      <p>The site does not currently ask players to provide their names, email addresses, profile details, or payment information to play. If future features collect personal information, appropriate notices and age-related requirements should be reviewed before launch.</p>
      <h2>External websites</h2>
      <p>Links to third-party websites, such as the public project issue tracker, are provided for convenience. Those websites operate under their own terms and privacy practices. Review their information before submitting anything to an external service.</p>
      <h2>Policy updates and contact</h2>
      <p>This policy may change as the site gains features or integrations. The date above should be updated whenever a material revision is published. For privacy questions, use the project's <a className="inline-link" href="https://github.com/websiite01-tech/bubble-trio-pro/issues" target="_blank" rel="noreferrer">public GitHub issue tracker</a>; do not publish sensitive personal information there. A private contact channel should be added before the site begins collecting information through forms or accounts.</p>
      <p><a className="inline-link" href="/">Return to Bubble Trio Pro</a></p>
    </article>
  );
}