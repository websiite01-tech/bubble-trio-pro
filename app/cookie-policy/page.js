import { siteConfig } from "../site-config";

export const metadata = {
  title: "Cookie Policy",
  description: "Detailed Cookie Policy for Bubble Trio Pro, covering current local storage, essential browser technology, possible advertising cookies, and user choices."
};

export default function CookiePolicyPage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">COOKIES & BROWSER STORAGE</span>
      <h1>Cookie Policy</h1>
      <p><strong>Last updated: {siteConfig.policyLastUpdated}</strong></p>
      <p className="page-lead">This Cookie Policy distinguishes what the current Bubble Trio Pro build actually uses from technologies that could be introduced later. Empty advertisement boxes do not set up an advertising relationship by themselves. The policy must be revisited whenever a new cookie, analytics tool, advertising network, embedded service, or preference feature is enabled.</p>

      <h2>1. What is a cookie?</h2>
      <p>A cookie is a small data value stored by a browser at the request of a website or service. Cookies may help a site remember a session, preserve a setting, secure a transaction, measure activity, or support advertising. A cookie can be temporary or remain until it expires or is deleted. The exact purpose and retention depend on how the service is implemented.</p>
      <p>“Similar technologies” can include browser local storage, session storage, pixels, web beacons, software development kits, and other identifiers. They are not technically identical, but some privacy rules treat them similarly because they can store information or recognise a browser or device.</p>

      <h2>2. What Bubble Trio Pro uses today</h2>
      <p>The level system uses browser local storage to keep the highest unlocked level for each of the three games. The storage key is <code>bubble-trio-pro-level-progress-v2</code>. It exists so that a visitor can return to the same browser and continue selecting the levels they previously unlocked. It stores a small progress record, not a name, email address, payment detail, or user account.</p>
      <p>The active game board, score, selected bubble, open memory cards, and moves remaining are generally kept in the active page state and reset when the player restarts or reloads a round. The game does not require local storage for an online identity because no online identity service exists in the current version.</p>
      <p>The application does not intentionally load Google AdSense code, set its own advertising cookie, run a site-specific analytics tracker, or use a marketing pixel in this placeholder-only build. Hosting and delivery infrastructure may nevertheless perform technical processing under its own configuration. The owner should re-check the actual browser storage and network requests before enabling optional services.</p>

      <h2>3. Why local storage is used</h2>
      <p>Local storage allows a small progress value to persist between page visits without requiring an account or sending it to a server. If you want to remove it, use the browser's site-data controls for this website. Clearing the data can reset the unlocked level counters and may also remove other site preferences if any are introduced later. Because this storage is on your device, it will not automatically follow you to another computer or browser.</p>
      <p>Local storage is not a substitute for a secure account system. It should not hold passwords, payment details, identity documents, private messages, or other sensitive information. The current progress key is used only to maintain the game's unlock state.</p>

      <h2>4. Cookies that may be used by hosting or security services</h2>
      <p>Depending on provider configuration, web hosting, bot protection, content delivery, or security services may process technical request information or use technologies to protect service availability. Bubble Trio Pro does not control every internal implementation choice made by its infrastructure providers. For exact provider practices and retention, consult their current privacy and cookie documentation.</p>
      <p>If the site owner adds a third-party service that sets cookies or similar identifiers, this section should be revised to name the service, explain its purpose, state whether it is necessary or optional where applicable, and identify appropriate user controls. A service should not be added solely because a sample template contains its script.</p>

      <h2>5. Google AdSense cookies if advertising is activated</h2>
      <p>There are no live Google AdSense units in the current build. The areas labelled “Advertisement” are design placeholders with reserved minimum height; they do not load an ad, make an ad request, or create a publisher account.</p>
      <p>If Google AdSense is later configured, Google and third-party vendors may use cookies or similar technologies to serve, personalise, limit, measure, and protect advertising. Google explains that third-party vendors, including Google, use cookies to serve ads based on users' previous visits to a publisher's website or other websites, and that Google's advertising cookies can enable ads based on visits to this and other sites. Actual details depend on publisher settings, ad products, the chosen vendors, and the user's location.</p>
      <p>Before those technologies are switched on, the owner should identify the actual vendors and links, update this policy and the Privacy Policy, and ensure any required consent or opt-out mechanism is implemented. A description of a possible future technology must not be mistaken for a statement that it is currently running.</p>
      <p>Official resources: <a className="inline-link" href="https://support.google.com/adsense/answer/1348695" target="_blank" rel="noreferrer">Google's required privacy-policy content</a>, <a className="inline-link" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">Google partner-site data use</a>, and <a className="inline-link" href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google advertising technologies</a>.</p>

      <h2>6. Advertising personalisation choices</h2>
      <p>When advertising is active, users can review available personalisation controls at <a className="inline-link" href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google Ads Settings</a>. For information about opting out of some participating third-party vendors' use of cookies for personalised ads, see <a className="inline-link" href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">YourAdChoices</a>. These links are provided for information; available controls depend on the service, browser, device, region, and vendor.</p>

      <h2>7. Consent and regional requirements</h2>
      <p>Where applicable privacy law requires consent before a non-essential technology is used, the site must obtain that consent through an appropriate interface. Browser settings can allow visitors to block or delete cookies, but browser controls do not automatically satisfy all obligations placed on the site operator.</p>
      <p>Google states that publishers serving personalised ads to users in the European Economic Area, the United Kingdom, or Switzerland must use a Google-certified consent management platform integrated with the IAB Transparency and Consent Framework. The publisher must check the current requirement and choose a suitable solution for its real audience and configuration. Read <a className="inline-link" href="https://support.google.com/adsense/answer/13554116" target="_blank" rel="noreferrer">Google's publisher consent requirements</a>.</p>

      <h2>8. Managing and removing browser data</h2>
      <p>Most browsers provide settings for clearing cookies and site data. The exact steps depend on your device and browser version. Clearing this website's stored data can reset the local level-progress record, so consider whether you wish to keep your progress before removing it. This project does not currently provide an online account or server-side recovery mechanism for local game progress.</p>

      <h2>9. Children, families, and future advertising</h2>
      <p>The site owner hopes children and families will enjoy these casual games. The present build does not load live AdSense ads, and the empty advertisement areas are only placeholders. Before activating advertising, the owner should determine whether the site or any section is child-directed under applicable rules and correctly configure the advertising service, privacy disclosures, and any relevant consent or ad-treatment controls.</p>
      <p>Google's Publisher Policies explain that where an advertising service is implemented on a site or section covered by COPPA, the publisher must notify Google through an applicable supported method or tag the site/ad request for child-directed treatment. Google also restricts interest-based advertising based on activity of users known to be under 13 or on sites directed to under-13 users. Review the current <a className="inline-link" href="https://support.google.com/publisherpolicies/answer/10502938" target="_blank" rel="noreferrer">Google Publisher Policies</a> before enabling ads. A cookie notice alone does not apply the required technical treatment.</p>

      <h2>10. Changes to this policy</h2>
      <p>This policy should be updated whenever the actual storage or service configuration changes, not just when the visual layout changes. The owner maintains the policy date in <code>app/site-config.js</code>. The date should be changed when the policy itself is materially revised. A new analytics, embedded video, advertising, or contact service should not be launched until the site accurately describes the resulting data handling.</p>

      <h2>11. Questions</h2>
      <p>For the project's available feedback routes, visit the <a className="inline-link" href="/contact">Contact page</a>. For broader information, read the <a className="inline-link" href="/privacy">Privacy Policy</a>, <a className="inline-link" href="/advertising-disclosure">Advertising Disclosure</a>, and <a className="inline-link" href="/terms">Terms of Use</a>.</p>
    </article>
  );
}