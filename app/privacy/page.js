export const metadata = {
  title: "Privacy Policy",
  description: "Bubble Trio Pro privacy policy covering browser game state, hosting information, cookies, third-party advertising disclosures, and privacy choices."
};

export default function PrivacyPage() {
  return (
    <article className="content-page">
      <span className="eyebrow">SITE INFORMATION</span>
      <h1>Privacy policy</h1>
      <p><strong>Last updated: 19 October 2026</strong></p>
      <p>Bubble Trio Pro (“we”, “us”, or “the site”) is a browser-game portal. This policy explains the data practices of the current version and the disclosures that apply if advertising or analytics services are added. It should be reviewed whenever the site's actual technology or vendors change. This page is general information, not legal advice.</p>

      <h2>1. Game state and information you provide</h2>
      <p>You do not need an account to play the current mini-games. Game progress such as the current board, selected moves, and score is held in the active browser page. The current build does not provide accounts, cloud saves, public score profiles, payment forms, or a site-specific analytics tracker. Game progress resets when a player restarts a round or refreshes the page.</p>
      <p>The current Contact page links to the public GitHub issue tracker for bug reports. Anything posted there may be publicly visible and is handled under GitHub's own terms and privacy policy. Do not post passwords, payment information, private correspondence, or other sensitive personal information in a public issue.</p>

      <h2>2. Hosting and technical data</h2>
      <p>When a website is requested, hosting and content-delivery providers may process technical information such as IP address, browser and device information, request timing, and security logs to deliver, protect, and troubleshoot the service. Such processing is controlled in part by the infrastructure providers and their own terms. The absence of a player account does not mean that all network-level technical processing is absent.</p>

      <h2>3. Advertising status and Google AdSense disclosure</h2>
      <p><strong>Current status:</strong> the areas labelled “Advertisement” on this site are empty layout placeholders. This build does not load Google AdSense ad tags or live ads. These placeholders do not represent active ad inventory.</p>
      <p><strong>When advertising is enabled:</strong> Google and third-party vendors may use cookies or similar technologies to serve and measure ads. Third-party vendors, including Google, may use cookies to serve ads based on a user's prior visits to this site or other websites. Google's use of advertising cookies enables Google and its partners to serve ads based on visits to this site and/or other sites on the Internet. Depending on the services configured, ad delivery may involve cookies, web beacons, IP addresses, or other identifiers and may involve the collection, sharing, or use of information by the relevant vendors.</p>
      <p>Before live ads are enabled, the site operator must confirm that this disclosure accurately describes the vendors and technologies actually configured, link to the relevant vendor information, and provide applicable privacy choices and consent notices. Do not assume every vendor or cookie described above is active in the current placeholder-only build.</p>
      <p>Google's information about partner-site data use: <a className="inline-link" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">How Google uses data when you use our partners' sites or apps</a>. Learn more about <a className="inline-link" href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google advertising technologies</a>.</p>

      <h2>4. Advertising personalisation choices</h2>
      <p>When Google ads are used, users can review available personalisation controls in <a className="inline-link" href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google Ads Settings</a>. Users can also learn about options for some third-party vendors' use of cookies for personalised advertising at <a className="inline-link" href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">YourAdChoices</a>. Available choices depend on the vendor, device, region, browser, and the user's settings.</p>

      <h2>5. Consent and regional privacy requirements</h2>
      <p>Privacy, cookie, and advertising requirements differ by location. Before serving personalised ads in the European Economic Area, the United Kingdom, or Switzerland, Google publisher products require a Google-certified consent management platform integrated with the IAB Transparency and Consent Framework. The operator must configure an appropriate consent solution and disclosures for the regions and services actually used. A policy page alone does not collect consent or configure the ad technology.</p>
      <p>Reference: <a className="inline-link" href="https://support.google.com/adsense/answer/13554116" target="_blank" rel="noreferrer">Google's consent management requirements for publishers</a>.</p>

      <h2>6. Children and personal information</h2>
      <p>The current game experience does not ask players to provide names, email addresses, account profiles, or payment details. If future functionality collects personal information or is directed to children, the operator must review applicable age, privacy, notice, and consent requirements before launch.</p>

      <h2>7. Retention, security, and external services</h2>
      <p>Game state exists in the current page session and is cleared when the page is refreshed or the game is restarted. Hosting providers may retain technical logs under their own practices. No online leaderboard or persistent player profile is included in this version. Links to external sites are provided for convenience; those sites operate under their own privacy practices.</p>

      <h2>8. Changes and contact</h2>
      <p>This policy should be updated when live advertising, analytics, account functionality, forms, or other vendors are introduced. The date at the top should be changed for material revisions. For general feedback, visit the <a className="inline-link" href="https://github.com/websiite01-tech/bubble-trio-pro/issues" target="_blank" rel="noreferrer">public project issue tracker</a>. Do not submit confidential privacy requests or sensitive data through a public issue. A private contact channel should be configured before the site begins collecting information through forms or accounts.</p>
      <p>Related pages: <a className="inline-link" href="/cookie-policy">Cookie policy</a>, <a className="inline-link" href="/terms">Terms of use</a>, and <a className="inline-link" href="/contact">Contact</a>.</p>
    </article>
  );
}