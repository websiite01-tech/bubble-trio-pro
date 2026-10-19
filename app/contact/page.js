export const metadata = { title: "Contact", description: "How to share feedback or report an issue with Bubble Trio Pro." };

export default function ContactPage() {
  return (
    <article className="content-page">
      <span className="eyebrow">FEEDBACK & SUPPORT</span>
      <h1>Contact the project</h1>
      <p>Found a broken control, spotted a mistake in a game guide, or have an idea for a new mini-game? Feedback helps make Bubble Trio Pro clearer and more useful.</p>
      <h2>Report a bug or suggest an improvement</h2>
      <p>The project currently uses its public GitHub repository for issue tracking. Open an issue to describe the problem, what you expected to happen, and the browser/device where you noticed it. Please avoid including passwords, payment details, private correspondence, or other sensitive personal information because issue reports are public.</p>
      <p><a className="primary-button" href="https://github.com/websiite01-tech/bubble-trio-pro/issues" target="_blank" rel="noreferrer">Open GitHub issue tracker <span>↗</span></a></p>
      <h2>Advertising, partnerships, and privacy requests</h2>
      <p>A dedicated private contact address has not yet been configured. Until one is published, please do not put confidential privacy or business information in a public issue. A private contact method should be added before the site introduces account features or begins collecting user-submitted information.</p>
      <p><a className="inline-link" href="/privacy">Read the privacy policy</a> or <a className="inline-link" href="/about">learn about this project</a>.</p>
    </article>
  );
}