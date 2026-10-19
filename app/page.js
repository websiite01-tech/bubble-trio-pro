import GamePortal from "./game-portal";
import { PLAYER_FAQS } from "./game-content";

export const metadata = {
  title: "Bubble Shooter — Play Free Online | Bubble Trio Pro",
  description: "Play Bubble Shooter free in your browser. Aim, bounce shots off the wall, match three or more bubbles, clear floating clusters, and learn scoring tips in our original arcade puzzle.",
  keywords: ["bubble shooter", "free bubble shooter online", "bubble pop game", "match three bubbles", "online arcade puzzle"],
  openGraph: {
    title: "Bubble Shooter — Play Free Online | Bubble Trio Pro",
    description: "An original browser-based Bubble Shooter with aiming, wall bounces, scoring, a next-bubble queue, and a helpful player guide.",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <>
      <section className="home-intro">
        <div className="intro-copy">
          <div className="hero-badge"><span className="status-dot" /> FREE BROWSER GAME <span className="badge-separator">·</span> NO DOWNLOAD</div>
          <h1>Bubble Shooter <span>Pro</span></h1>
          <p>Line up your shot, match three or more bubbles, and clear the board. Play our original Bubble Shooter, explore more mini-games from the left menu, and use the guide below to learn the rules and scoring.</p>
          <div className="hero-actions"><a className="primary-button hero-button" href="#play">Play Bubble Shooter <span>↓</span></a><a className="secondary-button" href="#player-guide">Read the guide</a></div>
        </div>
        <div className="intro-highlights" aria-label="Game features">
          <div><span className="highlight-icon violet-highlight">◉</span><span><b>Classic bubble action</b><small>Aim, match, and clear</small></span></div>
          <div><span className="highlight-icon cyan-highlight">↗</span><span><b>Skill-based scoring</b><small>Plan bigger matches</small></span></div>
          <div><span className="highlight-icon green-highlight">◇</span><span><b>Runs in your browser</b><small>No account or download</small></span></div>
        </div>
      </section>

      <section className="game-section-heading" id="games">
        <div><span className="eyebrow">THE GAME ROOM</span><h2>Pick a game. Make your next move.</h2><p>Bubble Shooter is featured first. Choose another original mini-game from the library whenever you want a different challenge.</p></div>
        <a href="#player-guide" className="small-guide-link">Player guide <span>↗</span></a>
      </section>

      <GamePortal initialGame="bubble-shooter" />

      <article className="editorial-section" id="player-guide">
        <div className="article-header">
          <span className="eyebrow">THE BUBBLE SHOOTER FIELD GUIDE</span>
          <h2>How to play Bubble Shooter: rules, aiming, and scoring</h2>
          <p>Learn the controls, understand what makes a valid match, and plan shots that remove more bubbles instead of simply adding another one to the board.</p>
        </div>
        <div className="article-grid">
          <section id="how-to-play">
            <span className="article-number">01 — GETTING STARTED</span>
            <h3>How to play Bubble Shooter</h3>
            <p>Bubble Shooter is a colour-matching arcade puzzle. The upper part of the board begins with a formation of coloured bubbles, while the launcher near the bottom holds the bubble for your next shot. Move your mouse or finger across the board to point the aiming guide at the place where you want the bubble to travel. Click or tap in the playfield to launch it. The shot follows the direction you selected, and a side-wall contact can redirect its path. When the flying bubble reaches the ceiling or touches the existing formation, it attaches to an available position.</p>
            <p>Look at the colour of the bubble in the launcher and identify nearby groups of that same colour. The main goal is to connect at least three matching bubbles. When a valid group is formed, those bubbles disappear and free space opens on the board. A larger connected group usually earns more points. If removing a group leaves other bubbles with no route back to the top, those unsupported bubbles fall too. That can turn one carefully planned shot into a much larger clear.</p>
            <p>The interface includes a score display, a queue of upcoming bubbles, a trajectory guide, a restart control, and a short help panel. The restart button starts a fresh arrangement if you want to try a different strategy. This version runs locally in the browser: it does not require a login or a download, and the score belongs to the current game session.</p>
          </section>

          <section id="game-rules">
            <span className="article-number">02 — UNDERSTAND THE RULES</span>
            <h3>Game rules and valid matches</h3>
            <p>A match is made from three or more connected bubbles of one colour. The newly fired bubble can complete the group, but colours cannot be mixed to satisfy the minimum. Bubbles that merely look close together are not necessarily connected; the game checks the links between neighbouring positions. A shot that does not form a group of at least three stays on the board and may make later shots more difficult, so the choice of landing point matters.</p>
            <p>Wall bounces are useful when a direct path to the target is blocked. Aim toward the side boundary so the trajectory reflects back toward an exposed cluster. Use the queue at the bottom as a planning aid: it gives you some information about upcoming colours, which can help you decide whether to clear a small match now or set up a larger one for the next turn. Avoid repeatedly firing at isolated bubbles that cannot contribute to a match.</p>
            <p>Several unsuccessful shots cause the ceiling to advance in this version, reducing the available space. If bubbles reach the launch area, the round ends. Clear every bubble to finish with a board-cleared result. Restarting creates a fresh arrangement. These rules describe the current implementation of Bubble Trio Pro and may differ from versions on other game portals.</p>
          </section>

          <section id="scoring-system">
            <span className="article-number">03 — BUILD A BETTER SCORE</span>
            <h3>Scoring system and combo strategy</h3>
            <p>The current version awards 10 base points for each bubble removed in a direct match. Each bubble above the three-bubble minimum adds a 5-point bonus, and each unsupported bubble that drops after the match adds another 10 points. For example, a group of three is worth 30 points. A group of five is worth 60 points: 50 base points plus a 10-point size bonus. If four additional floating bubbles fall as a result, they add 40 points, bringing that shot's total to 100 points.</p>
            <p>The most reliable scoring strategy is to look beyond the first cluster. Before you shoot, ask what holds the nearby bubbles in place. A group connected to a narrow support can be more valuable than a larger group that leaves everything above it attached. When the target is in an awkward position, try a wall bounce instead of adding another bubble to the front of the formation. Clearing space at the sides can create better angles for later shots.</p>
            <p>Good play is not simply rapid clicking. Take a moment to read the current and next colours, aim at the intended landing point, and consider which connected groups will disappear. When a shot misses the desired match, adapt the plan instead of repeating the same angle. Scores are shown during the session, but this version does not store permanent personal records or publish an online leaderboard.</p>
          </section>

          <section id="tips">
            <span className="article-number">04 — PRACTICAL TECHNIQUES</span>
            <h3>Aiming tips for desktop and mobile</h3>
            <h4>Use the aim guide</h4>
            <p>The guide previews the line from the launcher toward your pointer. Move your pointer slowly to compare different angles. On touch devices, place your finger in the play area and tap when the trajectory points where you want. If your finger covers the target, aim from a little farther away and use the line rather than trying to tap an individual bubble.</p>
            <h4>Choose a landing point, not just a colour</h4>
            <p>Find the position where the shot will attach to the formation. A group of the right colour may still be separated from the landing point by another bubble. Plan the contact so the new bubble connects directly to the matching cluster, and consider side-wall rebounds when a straight shot cannot reach it.</p>
            <h4>Keep the playfield clear</h4>
            <p>Every unmatched shot takes up space. Favour moves that make a match, remove a supporting group, or open a useful angle for the next colour. If the board becomes crowded, prioritise safe, larger clears over speculative shots. You can restart at any time to practise a new approach.</p>
          </section>

          <section id="faq-basics">
            <span className="article-number">05 — FREQUENTLY ASKED QUESTIONS</span>
            <h3>Bubble Shooter FAQs</h3>
            <h4>Is Bubble Shooter free to play?</h4>
            <p>Yes. This original browser version is available to play without a player account, an installation, or an in-game purchase.</p>
            <h4>How many bubbles do I need to match?</h4>
            <p>You need at least three connected bubbles of the same colour. The fired bubble may be the one that completes the group.</p>
            <h4>Can I shoot off the side walls?</h4>
            <p>Yes. The aiming guide can be used to line up a bank shot. The bubble reflects from the left or right playfield boundary and can reach a cluster that is difficult to approach directly.</p>
            <h4>How do I get more points?</h4>
            <p>Make larger colour matches and look for clusters that become disconnected from the ceiling after a clear. This version awards bonus points for larger matches and for unsupported bubbles that fall.</p>
            <h4>Does the site remember my score?</h4>
            <p>No. Score and board progress are kept in the current browser session. Restarting the game or refreshing the page starts a new round; online score storage is not included.</p>
            <h4>Are advertisements active on this page?</h4>
            <p>No live ads are loaded in this build. Areas marked “Advertisement” are reserved spaces only. Real ad units should be added only after the publisher account is eligible and the placement, privacy disclosures, and applicable consent requirements have been reviewed.</p>
          </section>

          <section id="site-and-ads">
            <span className="article-number">06 — SITE TRANSPARENCY</span>
            <h3>Content, advertising, and privacy</h3>
            <p>Bubble Trio Pro is an independent game project with its own browser-game implementation and written instructions. The game guide is designed to explain the mechanics of the current playable version rather than repeat generic promotional text. Game scores are not sent to a Bubble Trio Pro account server, and the current build does not implement user profiles, cloud saves, or a site-specific analytics tracker. Hosting infrastructure may still process normal technical request and security information.</p>
            <p>The clearly labelled advertising areas in the layout do not load ads, track ad impressions, or contain click-through elements. Before adding Google AdSense or another ad network, the site owner should confirm the actual publisher requirements, use the real ad-unit code only in reserved areas, keep game controls well separated from ads, and update the privacy notice to describe cookies, identifiers, data use, vendors, and user choices as applicable. Visitors should never be asked to click ads to support the site.</p>
            <p>Review the <a href="/privacy" className="article-link">Privacy Policy</a>, learn about the <a href="/about" className="article-link">About the project</a> page, or use the <a href="/contact" className="article-link">Contact page</a> for site feedback. Policies and disclosure text need to be updated when the real hosting, advertising, or analytics setup changes.</p>
          </section>
        </div>
        <div className="article-note"><span>✦</span><p><b>Make every shot count.</b> Choose an angle, aim for a connected group, and look for the bubbles that will fall after a successful clear. The best shot is often the one that creates a better board for your next move.</p></div>
      </article>

 
      <section className="faq-library" id="faq">
        <div className="faq-library-header">
          <span className="eyebrow">PLAYER SUPPORT CENTRE</span>
          <h2>Common questions, clear answers</h2>
          <p>Answers about game rules, level unlocks, scores, browser progress, mobile play, and what the site does or does not currently offer.</p>
        </div>
        <div className="faq-items">
          {PLAYER_FAQS.map((item, index) => (
            <section className="faq-item" key={item.question}>
              <h3>{String(index + 1).padStart(2, "0")}. {item.question}</h3>
              <p>{item.answer}</p>
            </section>
          ))}
        </div>
        <div className="content-edit-note">
          <b>For the site owner: edit content without rebuilding the games from scratch</b>
          <p>Descriptions, all 30 level names and hints, objectives, difficulty values, FAQs, and written game guides are centrally maintained in <code>app/game-content.js</code>. Homepage article text is in <code>app/page.js</code>; visual styles are in <code>app/globals.css</code>. Ask for a text or level change and it can be committed directly to the connected GitHub repository—no copy-pasting code is needed.</p>
        </div>
      </section>

      <section className="closing-cta"><div><span className="eyebrow">READY FOR ANOTHER ROUND?</span><h2>Aim. Match. Clear.</h2><p>Start a new board or choose another mini-game from the library.</p></div><a className="primary-button" href="#play">Back to the game <span>↑</span></a></section>
    </>
  );
}