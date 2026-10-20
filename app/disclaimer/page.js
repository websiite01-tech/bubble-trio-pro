import { siteConfig } from "../site-config";

export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for Bubble Trio Pro covering student-project independence, casual entertainment, feature limits, third-party links, and advertising status."
};

export default function DisclaimerPage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">GENERAL INFORMATION</span>
      <h1>Disclaimer</h1>
      <p><strong>Last updated: {siteConfig.policyLastUpdated}</strong></p>
      <p className="page-lead">This Disclaimer explains the purpose of Bubble Trio Pro and the limits of the information and game experience offered by the current website. Read it together with the <a className="inline-link" href="/terms">Terms of Use</a>, <a className="inline-link" href="/privacy">Privacy Policy</a>, and <a className="inline-link" href="/advertising-disclosure">Advertising Disclosure</a>.</p>

      <h2>1. Independent student learning project</h2>
      <p>Bubble Trio Pro is a personal learning and training project maintained by a student at {siteConfig.university}. It is intended to provide a practical setting for learning browser-game development, interface design, documentation, writing, testing, and website publishing. It is not an official university website, course, department, or student-service portal. Unless a written relationship is separately confirmed, references to the university identify the creator's educational context and do not imply sponsorship, partnership, endorsement, or approval.</p>
      <p>The site is also not an official product of Google or any other advertising provider. References to Google AdSense or its policies are made to explain potential publisher requirements. They must not be interpreted as evidence of approval, certification, special access, or a commercial relationship.</p>

      <h2>2. Games provided for casual entertainment</h2>
      <p>The three browser games are provided for casual entertainment and development practice. They are not medical, psychological, therapeutic, diagnostic, educational-assessment, or professional training tools. The site does not claim that playing Bubble Shooter, Bubble Pop Puzzle, or Memory Match produces a measurable increase in intelligence, memory capacity, reaction speed, academic performance, or any health outcome.</p>
      <p>A game can offer practice with its own controls and rules, and a player may become more familiar with its patterns over time. Individual experience varies, and such familiarity should not be described as a guaranteed real-world benefit. Visitors should take breaks when needed and should not rely on the games for any high-stakes purpose.</p>

      <h2>3. Accuracy of explanations and scores</h2>
      <p>The player guide and FAQ are written to describe the current implementation as accurately as possible. However, game logic, level settings, scoring, instructions, or visual presentation may change while the project is being developed. If you notice an inconsistency between a written explanation and the game, use the <a className="inline-link" href="/contact">Contact page</a> to report the relevant game and level. The owner may correct the content or code after reviewing the issue.</p>
      <p>The site does not promise that every level has identical difficulty on every visit, that random board arrangements will produce the same outcomes, or that every device will display a game exactly the same way. The current progress record is stored in the visitor's browser and may be removed if local site data is cleared. There is no online account that can recover a lost level-progress record.</p>

      <h2>4. Availability and technical limitations</h2>
      <p>Website access depends on the visitor's device, browser, network, and the hosting infrastructure. Errors, interruptions, browser incompatibilities, or temporary outages can occur. The owner may update, modify, pause, or remove a feature as part of development. A visible link or description should not be treated as a promise that a future feature is complete until it is implemented and tested.</p>
      <p>The Bubble Shooter playfield is rendered on a canvas. Although the page provides a descriptive label and separate written instructions, a canvas game may not provide every visual interaction equally to every assistive technology. Please consult the <a className="inline-link" href="/accessibility">Accessibility Statement</a> for the current approach and known limitations.</p>

      <h2>5. Advertising and monetisation</h2>
      <p>At the time of this update, the site's advertisement areas are empty placeholders, not live ads. No AdSense approval is claimed. The owner may decide to apply for advertising in the future, but approval and continued eligibility depend on the actual website, publisher account, visitor experience, configured ad technology, and applicable policies. A particular word count, policy template, colour scheme, or code structure cannot guarantee approval.</p>
      <p>If advertisements are introduced, visitors must not be asked to click them, rewarded for clicking, or confused about whether an element is an ad or game control. The owner must use authentic publisher details, disclose actual data practices, provide any required privacy choices, and check the then-current advertising rules.</p>

      <h2>6. Third-party services and links</h2>
      <p>The site may link to third-party documentation, GitHub, hosting providers, or privacy resources. Those services are operated separately and may have their own terms, data practices, availability, and security. Bubble Trio Pro does not control all actions taken by an external service after a visitor opens it. Use discretion and review the third party's own information before submitting data.</p>

      <h2>7. No guarantee of particular results</h2>
      <p>The site is provided on an “as available” basis for the current project purpose. The owner does not promise a particular score, level-completion time, learning outcome, search-engine ranking, advertising revenue, or monetisation result. Suggestions are welcome, but fixes and enhancements depend on reproduction, testing, and the project's available time.</p>
      <p>Nothing in this Disclaimer removes any consumer right or legal protection that cannot be excluded under applicable law. It is not a substitute for professional legal advice tailored to the operator's location and actual services.</p>

      <h2>8. Changes and contact</h2>
      <p>This page should be reviewed when the site introduces an account system, analytics, live ads, payments, or a material new game feature. The update date can be changed in <code>app/site-config.js</code>. To report a factual problem or request a correction, visit the <a className="inline-link" href="/contact">Contact page</a>. For the site's development background, see <a className="inline-link" href="/about">About the Creator and Project</a>.</p>
    </article>
  );
}