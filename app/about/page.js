export const metadata = { title: "About Bubble Trio Pro", description: "Learn about the original browser mini-games and the ideas behind Bubble Trio Pro." };

export default function AboutPage() {
  return (
    <article className="content-page">
      <span className="eyebrow">ABOUT THE PROJECT</span>
      <h1>A small place for smart play.</h1>
      <p>Bubble Trio Pro is an independent browser-game portal built around quick, approachable challenges. It brings together an original Bubble Shooter game and ten additional mini-games for players who enjoy puzzles, patterns, memory, arithmetic, and light arcade action. The goal is simple: open the page, choose a game, understand the objective, and start playing without an account or an installation.</p>
      <h2>Games made for the browser</h2>
      <p>The current library includes Bubble Shooter, Bubble Pop, Memory Match, Number Rush, Tic-Tac-Toe, Quick Math, Reaction Test, Rock Paper Scissors, Word Scramble, Colour Match, and Whack-a-Dot. Each one uses a straightforward set of rules and controls, so players can switch between different kinds of challenges whenever they like. Game progress is temporary and remains in the active page session; this version does not provide online accounts, saved profiles, or a permanent leaderboard.</p>
      <h2>Our design principles</h2>
      <p>We aim to make the portal responsive, readable, and comfortable to use on different screen sizes. The game library remains easy to navigate, the page explains how each mode works, and reserved advertising areas are visually separated from the game controls. These reserved spaces are not live ads. Advertising may be considered in the future only with the relevant account setup, consent choices, privacy information, and policy requirements in place.</p>
      <h2>What is available today?</h2>
      <p>This is an evolving project. The games and guide content describe the current version of the site. Features such as cloud saves, multiplayer matchmaking, permanent rankings, and user accounts are not offered at this time. We prefer to describe the experience that exists rather than suggest functionality that is not yet available.</p>
      <p>For feedback or to report a problem, visit the project's <a className="inline-link" href="https://github.com/websiite01-tech/bubble-trio-pro/issues" target="_blank" rel="noreferrer">GitHub issue tracker</a>. Please do not post personal or confidential information in a public issue.</p>
      <a className="primary-button" href="/#play">Explore the games <span>↗</span></a>
    </article>
  );
}