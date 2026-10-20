import { siteConfig } from "../site-config";

export const metadata = {
  title: "About the Creator and Project",
  description: "Meet the student creator behind Bubble Trio Pro, learn why the project was built, how the three browser games work, and what the site does and does not offer."
};

export default function AboutPage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">ABOUT THE PROJECT</span>
      <h1>A student-built project for learning, practice, and play.</h1>
      <p className="page-lead">Bubble Trio Pro brings together three original browser-game experiences with thirty levels each. The purpose is not only to offer a short game break, but also to practise the real work behind a small website: planning, building, testing, explaining, publishing, and improving it over time.</p>

      <h2>Who created Bubble Trio Pro?</h2>
      <p>I am a student at LU University. I created Bubble Trio Pro as a personal learning and training project, using it as a practical way to improve my understanding of web development and digital publishing. Rather than treating development as only a set of code examples, I wanted to build something that a visitor could open, understand, interact with, and give feedback about.</p>
      <p>{siteConfig.creatorPurpose} This project gives me a place to practise several connected skills: designing a clear interface, creating interactive game logic, organising content, explaining game rules in plain language, building pages that work on different screen sizes, and learning how a website is prepared for publication. Writing the guide and policy pages is part of that learning process too. A useful website needs more than a good-looking home screen; it should explain its purpose, provide working navigation, be honest about its features, and make it possible for a visitor to find help or understand how the site operates.</p>
      {siteConfig.creatorName && {siteConfig.creatorName && <p><strong>Creator:</strong> {siteConfig.creatorName}</p>}}
      <p><strong>Creator role:</strong> {siteConfig.creatorRole}. <strong>University:</strong> {siteConfig.university}.</p>
      <p className="policy-note">{siteConfig.universityDisclaimer}</p>

      <h2>Why build a browser-game portal?</h2>
      <p>Small games are an excellent practical exercise because their rules are easy to describe, but their implementation requires a surprising number of decisions. A bubble shooter needs pointer or touch input, aiming, collision detection, matching rules, scoring, board generation, and a clear win or loss state. A group-clearing puzzle needs connected-cell detection, a move counter, a score target, and feedback after each choice. A memory game needs a shuffled deck, matching logic, a short mismatch delay, progress tracking, and a reliable way to restart.</p>
      <p>Building the three experiences in one portal also creates useful web-development problems to solve. The navigation must stay understandable as visitors switch games. Level selection must indicate what is available and what remains locked. Instructions need to be close enough to the game to be useful, but should not cover or confuse the controls. Page content must remain readable on a phone as well as on a desktop. These constraints make the project more useful for learning than a static screenshot or a single unchanging page.</p>

      <h2>The three games</h2>
      <h3>Bubble Shooter</h3>
      <p>Bubble Shooter is the featured arcade puzzle. The player aims a coloured bubble, launches it toward a formation, and tries to connect three or more bubbles of the same colour. Removing a group may also free bubbles that are no longer connected to the top. The game includes board patterns, an aiming guide, scoring, a next-bubble queue, restart controls, and progressive levels. Strong play depends on planning where a bubble will attach, not simply firing as quickly as possible.</p>
      <h3>Bubble Pop Puzzle</h3>
      <p>Bubble Pop Puzzle is a slower planning challenge. The player selects a connected group of at least three matching bubbles and tries to reach a target score before using all available moves. The goal and move budget change by level. This makes the game about comparing choices, understanding the value of a larger group, and avoiding wasted moves. Hints explain a useful approach without pretending that every board has only one possible strategy.</p>
      <h3>Memory Match</h3>
      <p>Memory Match focuses on observation and recall. The player reveals two cards, remembers their symbols and positions, and tries to find all matching pairs. Later levels contain more pairs, so a consistent scanning pattern and careful attention become more valuable. This game has a different rhythm from the bubble games: it rewards remembering information rather than aiming or spending moves.</p>

      <h2>What the thirty-level structure means</h2>
      <p>Each game has thirty level profiles, which creates ninety level challenges across the portal. Level profiles include names, goals, hints, and difficulty-related settings. Bubble Shooter changes its starting rows, available colours, board silhouette, and tolerance for missed shots. Bubble Pop Puzzle varies the target score, colours, bonus values, and available moves. Memory Match changes the pair count and theme. The intention is to introduce a clear basic rule, then increase the challenge in steps.</p>
      <p>Progression is saved in the visitor's browser using local storage. It is not connected to a user account or cloud service. That means a visitor can continue on the same browser, but progress is not synchronised between devices and may be removed if browser site data is cleared. Round scores and board state are temporary. The website does not claim to offer an online ranking, multiplayer matchmaking, cloud saves, or a permanent player profile.</p>

      <h2>How the site is maintained</h2>
      <p>The game descriptions, level profiles, hints, and common questions are organised in a central configuration file so they can be improved without rewriting the full page layout. The long-form guide, policies, contact details, and visual design are maintained separately. This separation makes it easier to correct a confusing explanation, rebalance a level, or update contact information while reducing the risk of accidentally changing game mechanics.</p>
      <p>Feedback is valuable because a developer can overlook confusing wording or an awkward control when familiar with the code. If a level seems impossible, a button does not behave as described, or a guide contains a mistake, the visitor can report the page and level number through the contact route. Reports should describe what happened and what was expected. Please do not include passwords or confidential personal information in public issue reports.</p>

      <h2>Original work, limitations, and transparency</h2>
      <p>Bubble Trio Pro is presented as an independent personal project. The games are original browser implementations made for this portal; they are not claimed to be sponsored, licensed, or endorsed by a university, a major game publisher, or Google. References to Google AdSense in policy or checklist pages explain potential future advertising requirements. They are not a claim that the site is approved, partnered, or currently serving Google advertisements.</p>
      <p>The advertisement-shaped areas shown in the layout are reserved placeholders only. They are not live ads, do not contain a publisher identifier, and should not be clicked. Before real advertising is introduced, the site owner must configure the actual publisher account and advertising code, review the current policies, ensure ads remain separate from game controls, and update the descriptions of any third-party technologies that are truly enabled.</p>
      <p>There are other limits today. The portal does not provide account registration, payment features, saved online scores, user uploads, player chat, or a public leaderboard. It does not claim that practising these games produces a medical, educational, or cognitive benefit. The games are intended for casual entertainment and development practice. Any future features should be described only after they actually exist and have been tested.</p>

      <h2>What I hope to learn next</h2>
      <p>The project can continue to improve through careful testing, more informative explanations, accessible controls, balanced levels, cleaner mobile layouts, and better documentation. Each change should be based on an observed problem or a clear visitor need, rather than adding features only for appearance. I also want to keep learning how to publish responsibly: describe data practices honestly, keep contact information current, maintain policies that match the real implementation, and avoid suggesting that a template or word count guarantees approval from an advertising programme.</p>
      <p>Thank you for visiting Bubble Trio Pro. If you play a level, read a guide, or send a helpful report, you are helping turn a student learning exercise into a better-maintained web project. The most useful feedback is specific, respectful, and tied to something that can be improved.</p>

      <h2>Project links</h2>
      <p>Use the <a className="inline-link" href="/#play">game room</a> to start playing, read the <a className="inline-link" href="/#player-guide">player guide</a> for rules and scoring, review the <a className="inline-link" href="/privacy">Privacy Policy</a>, or visit the <a className="inline-link" href="/contact">Contact page</a> to report an issue.</p>
      <p><strong>Project repository:</strong> <a className="inline-link" href={siteConfig.sourceRepositoryUrl} target="_blank" rel="noreferrer">Bubble Trio Pro on GitHub</a>.</p>
    </article>
  );
}