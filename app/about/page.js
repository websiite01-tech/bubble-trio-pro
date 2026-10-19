export const metadata = { title: "About Bubble Trio Pro", description: "Learn about the original browser mini-games and the ideas behind Bubble Trio Pro." };

export default function AboutPage() {
  return (
    <article className="content-page">
      <span className="eyebrow">ABOUT THE PROJECT</span>
      <h1>A small place for smart play.</h1>
      <p>Bubble Trio Pro is an independent browser-game portal built around quick, approachable challenges. It brings together three focused browser games with thirty levels each: Bubble Shooter, Bubble Pop Puzzle, and Memory Match. Each game is designed to teach a simple core mechanic first, then increase its challenge through new board shapes, more colours, tighter move budgets, or more pairs to remember. The goal is simple: open the page, choose a game, understand the objective, and start playing without an account or an installation.</p>
      <h2>Games made for the browser</h2>
      <p>The current library contains Bubble Shooter for aiming and matching, Bubble Pop Puzzle for planning score-earning moves before a move limit runs out, and Memory Match for finding pairs in increasingly large layouts. Every game includes thirty selectable levels, hints, restart controls, and a progression system. Unlocks are stored locally in the browser, while current round scores reset when a round or page is restarted; accounts, cloud saves, and online leaderboards are not included.</p>
      <h2>Our design principles</h2>
      <p>We aim to make the portal responsive, readable, and comfortable to use on different screen sizes. The game library remains easy to navigate, the page explains how each mode works, and reserved advertising areas are visually separated from the game controls. These reserved spaces are not live ads. Advertising may be considered in the future only with the relevant account setup, consent choices, privacy information, and policy requirements in place.</p>
      <h2>What is available today?</h2>
      <p>This is an evolving project. The games and guide content describe the current version of the site. Features such as cloud saves, multiplayer matchmaking, permanent score history, and user accounts are not offered at this time. Level descriptions, names, hints, goals, scoring targets, and frequently asked questions are centrally documented in the repository so the owner can revise the experience without rebuilding it from scratch. We prefer to describe the experience that exists rather than suggest functionality that is not yet available.</p>
      <p>For feedback or to report a problem, visit the project's <a className="inline-link" href="https://github.com/websiite01-tech/bubble-trio-pro/issues" target="_blank" rel="noreferrer">GitHub issue tracker</a>. Please do not post personal or confidential information in a public issue.</p>
      <a className="primary-button" href="/#play">Explore the games <span>↗</span></a>
    </article>
  );
}