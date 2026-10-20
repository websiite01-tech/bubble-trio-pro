import { siteConfig } from "../site-config";

export const metadata = {
  title: "Advertising Disclosure",
  description: "Advertising transparency for Bubble Trio Pro, including empty ad placeholders, future Google AdSense use, ad placement principles, publisher responsibility, and user choices."
};

export default function AdvertisingDisclosurePage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">ADVERTISING TRANSPARENCY</span>
      <h1>Advertising Disclosure</h1>
      <p><strong>Last updated: {siteConfig.policyLastUpdated}</strong></p>
      <p className="page-lead">This page explains the current advertising status of Bubble Trio Pro and the principles that will apply if advertising is introduced. Clear disclosure matters: visitors should be able to tell the difference between a playable game, editorial content, a navigation element, and an advertisement.</p>

      <h2>1. Current advertising status</h2>
      <p>At the time of this update, Bubble Trio Pro displays reserved layout areas labelled “Advertisement”. These areas are empty placeholders with minimum heights intended to keep the layout stable and reserve space for possible future ad units. They do not load a Google AdSense script, do not display live ads, and do not contain a real publisher ID. Their presence does not mean that Google has approved the website or that an advertising relationship is active.</p>
      <p>The owner must update this page when the real advertising setup changes. If ad code is enabled, the disclosure should identify the services actually used, link to applicable vendor information, explain any material data processing, and state relevant visitor choices. A hypothetical description of a possible vendor is not evidence that the vendor currently runs on this site.</p>

      <h2>2. Why the page includes reserved ad space</h2>
      <p>Ad slots are visually separated from the main game interface so that an advertisement, if eventually served, can be distinguished from game controls and instructions. Each placeholder has a reserved minimum height to reduce the possibility that a page jumps after loading. This is a layout measure, not an assurance that every future advertising configuration will have no layout shift; the actual ad format and responsive behaviour need to be tested once a real unit is used.</p>
      <p>The site should not position live advertisements where a visitor could reasonably mistake them for the Bubble Shooter launcher, level selector, game library, restart control, or another interactive element. Ads should not cover play controls or make accidental clicks likely. The owner should review how placements behave on desktop, tablet, and mobile screens before serving ads.</p>

      <h2>3. No incentivised or artificial clicks</h2>
      <p>Visitors should never be asked or encouraged to click an advertisement to support the student creator, unlock a level, increase a score, gain a reward, or help the site earn income. Ad impressions and clicks must reflect genuine visitor activity and must not be artificially generated. The website should not use misleading labels, deceptive buttons, forced redirects, or layouts designed to confuse ad clicks with game actions.</p>
      <p>Game progress and core controls are not meant to depend on interacting with advertisements. If a player sees a placeholder in the current version, there is nothing to click. If real advertising is activated later, normal game play should remain clearly distinguishable from ad interaction and the publisher must follow the applicable network policies.</p>

      <h2>4. Potential future Google AdSense use</h2>
      <p>The owner may apply to Google AdSense in the future, but no approval is claimed here. Google assesses the site and the publisher account under its current requirements; the presence of a privacy page, an editorial article, a number of words, or a certain design cannot guarantee acceptance. Before applying or enabling ad requests, the owner should inspect the live site, make sure all games work, correct broken pages, remove unfinished sections, and confirm that the content offers real value rather than merely repeating keywords.</p>
      <p>If the site is later accepted and AdSense is configured, the owner should use the actual ad code and publisher settings provided by the account. The site should not invent a publisher ID, paste a sample identifier into production, or publish an inaccurate authorised-seller record. If AdSense indicates that an <code>ads.txt</code> record is needed, obtain the correct publisher details from the account and publish the matching record at the site's root. The correct record depends on the real account setup.</p>

      <h2>5. Advertising and privacy</h2>
      <p>Depending on the products and vendors configured, advertising may involve cookies or similar technologies for ad delivery, personalisation, measurement, frequency management, fraud prevention, or reporting. The privacy policy must explain the actual data practices and provide the necessary vendor links and choices. Google's own privacy information should be reviewed, including <a className="inline-link" href="https://support.google.com/adsense/answer/1348695" target="_blank" rel="noreferrer">required privacy-policy content for AdSense</a> and <a className="inline-link" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">how Google uses data on partner sites</a>.</p>
      <p>Google states that publishers serving personalised ads to users in the European Economic Area, the United Kingdom, or Switzerland must use a Google-certified consent management platform integrated with the IAB Transparency and Consent Framework. The owner must confirm current rules and configure a suitable solution if relevant. A policy page by itself does not collect consent. See <a className="inline-link" href="https://support.google.com/adsense/answer/13554116" target="_blank" rel="noreferrer">Google's publisher consent requirements</a>.</p>
      <p>Visitors can review Google's available advertising personalisation settings at <a className="inline-link" href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google Ads Settings</a>. Choices and applicability depend on the service, region, device, and configuration.</p>

      <h2>6. Child-directed content and family audiences</h2>
      <p>The creator hopes children and families will enjoy the games. Before an advertising integration is enabled, the owner must determine whether the website or a particular section is child-directed under the applicable rules. If a Google advertising service is used on a site or section covered by COPPA, the publisher must notify Google by an applicable supported method or mark the site/ad request for child-directed treatment. Google does not permit interest-based advertising based on the activity of users known to be under 13 or on sites directed to children under 13. The owner should check the current Google requirements and correctly configure ad treatment before the first ad request. This is not something a disclosure paragraph can configure on its own.</p>
      <p>Until that assessment, the advertising placeholders remain empty. The site must not imply that child-directed ad settings, a consent interface, or live advertising are already configured when they are not. See <a className="inline-link" href="https://support.google.com/publisherpolicies/answer/10502938" target="_blank" rel="noreferrer">Google Publisher Policies</a>.</p>

      <h2>7. The site owner's responsibility</h2>
      <p>Before advertising becomes live, the owner should verify that publisher account details are accurate, applicable consent controls are configured, the privacy and cookie pages reflect the real implementation, ads do not interfere with content, and the page is not under construction. The owner should also monitor the publisher dashboard and respond to any site-specific policy notifications.</p>
      <p>Maintaining this site is part of a student learning project, so the site should be improved in manageable steps. It is better to leave a reserved slot empty while the real advertising configuration is being completed than to simulate a live unit or publish made-up account information.</p>

      <h2>8. Related pages and contact</h2>
      <p>Read the <a className="inline-link" href="/privacy">Privacy Policy</a> for information about data practices, the <a className="inline-link" href="/cookie-policy">Cookie Policy</a> for browser technologies, and the <a className="inline-link" href="/content-standards">Content and Editorial Standards</a> for the principles used to maintain site content. For feedback, visit the <a className="inline-link" href="/contact">Contact page</a>.</p>
    </article>
  );
}