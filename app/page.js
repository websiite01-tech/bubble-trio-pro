import GamePortal from "./game-portal";
import { PLAYER_FAQS } from "./game-content";

export const metadata = {
  title: "Bubble Shooter — Play Free Online | Bubble Trio Pro",
  description: "Play three original browser games free: Bubble Shooter, Bubble Pop Puzzle, and Memory Match. Explore 90 level challenges, game-specific tips, scoring guides, and family play information.",
  keywords: ["bubble shooter", "free bubble shooter online", "bubble pop game", "match three bubbles", "online arcade puzzle"],
  openGraph: {
    title: "Bubble Shooter — Play Free Online | Bubble Trio Pro",
    description: "Three original browser games, 90 level challenges, detailed play guides, family information and useful puzzle tips from Bubble Trio Pro.",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <>
      <section className="home-intro">
        <div className="intro-copy">
          <div className="hero-badge"><span className="status-dot" /> 3 ORIGINAL GAMES <span className="badge-separator">·</span> 90 LEVEL CHALLENGES</div>
          <h1>Bubble Shooter <span>Pro</span></h1>
          <p>Play three original browser games, each with 30 levels: aim and match in Bubble Shooter, plan scoring moves in Bubble Pop Puzzle, or find pairs in Memory Match. Read the game-specific guides, learn how progress works, and explore family play information before starting.</p>
          <div className="hero-actions"><a className="primary-button hero-button" href="#play">Play Bubble Shooter <span>↓</span></a><a className="secondary-button" href="#player-guide">Read the guide</a></div>
        </div>
        <div className="intro-highlights" aria-label="Game features">
          <div><span className="highlight-icon violet-highlight">◉</span><span><b>Classic bubble action</b><small>Aim, match, and clear</small></span></div>
          <div><span className="highlight-icon cyan-highlight">↗</span><span><b>Skill-based scoring</b><small>Plan bigger matches</small></span></div>
          <div><span className="highlight-icon green-highlight">◇</span><span><b>Runs in your browser</b><small>No account or download</small></span></div>
        </div>
      </section>

      <section className="game-section-heading" id="games">
        <div><span className="eyebrow">THE GAME ROOM</span><h2>Pick a game. Make your next move.</h2><p>Choose between Bubble Shooter, Bubble Pop Puzzle and Memory Match. Each has thirty progressive levels, its own objective, hints and restart controls.</p></div>
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

 
      
      <article className="editorial-section" id="all-games-guide">
        <div className="article-header">
          <span className="eyebrow">THE COMPLETE GAME ROOM GUIDE</span>
          <h2>Three games, three different ways to solve a puzzle</h2>
          <p>Bubble Trio Pro is maintained by Sonu as a student learning project. This guide explains how each game's decisions work, how level progression behaves, and how visitors can use the site responsibly.</p>
        </div>
        <div className="article-grid">
          <section id="bubble-pop-guide">
            <span className="article-number">07 — PLAN EACH PUZZLE MOVE</span>
            <h3>Bubble Pop Puzzle: strategy, moves, and score targets</h3>
            <p>Bubble Pop Puzzle changes the type of decision the player makes. Instead of aiming a projectile, you choose a connected group of bubbles on an eight-by-eight board. Every valid group must contain at least three bubbles of the same colour connected vertically or horizontally. Two bubbles that touch only at a diagonal do not form one connected group for this rule. The minimum group size stays consistent, while the number of colours and the score target change with the level.</p>
            <p>At the beginning of a round, read the target score and moves remaining. Those two values describe the challenge: you need to collect enough points before spending the last move. A larger group usually earns more points than the smallest valid group because the score includes a group-size bonus. However, a large group is not always automatically the best move if a smaller clear opens a better cluster immediately afterwards. Look at the board, select the connected shape you understand, and plan around the move budget rather than clicking randomly.</p>
            <p>When a valid cluster is removed, the columns refill and the layout changes. This means that an empty space is not the end of the decision; the board needs to be inspected again. A sensible routine is to read the goal, identify more than one potential group, choose the group that best supports your target, and re-check the board after it changes. If you select a group that is too small, the game tells you that the match is not valid instead of spending a move. Use the hint as a guide, then make the final choice yourself.</p>
            <h4>Example: choosing a more useful group</h4>
            <p>Imagine the board has a group of three green bubbles and a connected group of five purple bubbles. If the level target is still far away and there are several moves left, the purple group may be a stronger scoring move. If the level is close to the target, a smaller group may already be enough. There is no universal choice for every situation because the right move depends on the current score, remaining moves and groups still visible. Check those values rather than memorising one sequence that may not apply to a different level.</p>
            <h4>Why a restart can help</h4>
            <p>If the moves run out before the target is reached, the result screen explains that the level can be retried. Restarting creates a fresh attempt and resets the round's score and moves; it does not remove levels already unlocked. Use the retry to test a different opening move. The purpose is not to punish a mistake but to let you compare strategies and understand why the board changed.</p>
          </section>

          <section id="memory-match-guide">
            <span className="article-number">08 — LEARN THE BOARD</span>
            <h3>Memory Match: remembering symbols and locations</h3>
            <p>Memory Match is built around pairs of hidden symbols. A turn consists of revealing two cards. If they match, that pair stays visible. If they do not, both return face down after a short pause. A round ends when every pair has been found. The scorekeeping information shows pairs found, turns taken and the level's symbol theme, so the player can see progress without needing an account or a saved profile.</p>
            <p>The most reliable method is to use a consistent scanning order. For example, start at the top-left card, move from left to right, and then continue row by row. When you reveal a card, note both what the symbol was and where you saw it. A symbol by itself is not enough if you cannot remember where it appeared. When the second card is a mismatch, store both positions rather than dismissing the result and tapping the next available card immediately.</p>
            <p>As levels introduce more pairs, it becomes easier to confuse symbols if the player changes their scanning pattern every turn. A steady routine makes the board easier to mentally map: known matching pairs can be completed, while previously unseen cards add new locations to remember. Do not feel pressured to play as quickly as possible. The mismatch pause exists so that you can look at the two symbols and try to retain their positions before they turn back over.</p>
            <h4>Example: use information you already found</h4>
            <p>Suppose you reveal a star and then a moon, but those cards do not match. Later, you reveal a different card that is a star. If you remember where the first star was, you can choose that location and complete the pair. The earlier mismatch was still useful because it taught you the location of two symbols. Random guessing tends to ignore that information and may take more turns to clear the board.</p>
            <h4>What changes in later levels?</h4>
            <p>The pair count increases from the earliest boards to larger late-game layouts, up to eighteen pairs. Themes also change as you move through the levels. The central rule does not change: reveal two, keep a matching pair open, and continue until the board is complete. The increased number of cards changes how much information you need to retain, not the basic way a turn works. A level can be restarted at any time if you want to use a different scanning strategy.</p>
          </section>

          <section id="level-progression-guide">
            <span className="article-number">09 — HOW PROGRESSION WORKS</span>
            <h3>Thirty levels in each game</h3>
            <p>The portal contains three game modes with thirty level profiles each, for ninety level challenges in total. A level profile can define the name of the challenge, the hint presented to the player, the objective, and difficulty settings used by the game. The level picker makes the current selection visible and disables levels that have not yet been unlocked. Completing a level advances the unlocked boundary so that the next challenge can be selected.</p>
            <p>The three games vary difficulty in different ways because their rules are different. Bubble Shooter adds starting rows, adjusts the colour palette, uses different formations and changes the allowance for missed shots. Bubble Pop Puzzle adjusts the target score, move budget and number of colours. Memory Match changes the number of pairs and the symbol theme. This approach makes a level feel different because the gameplay conditions change, rather than relying only on a new title.</p>
            <p>Progress is stored in the visitor's browser with local storage. It is not linked to a cloud service, email address, or online account. The same browser profile can retain the unlocked level record between visits, but another device or browser will have a separate record. Clearing the site's browser data can remove the stored progress. The current board, score, turns and moves are temporary round data and reset when a round is restarted or the page is refreshed. The website does not provide an online leaderboard, friend system, chat room, multiplayer matching or cloud save.</p>
            <p>When testing the site, a helpful sequence is to start level one, practise the controls, complete the objective, use the next-level control, return to a previously unlocked level, and refresh the page to see whether the local progression is available. If a level does not unlock as described, use the Contact page to report the game and level number. This description reflects the current browser implementation and should be updated when the progression system changes.</p>
          </section>

          <section id="family-play-notes">
            <span className="article-number">10 — FAMILY PLAY AND GOOD HABITS</span>
            <h3>Enjoying browser games with children and families</h3>
            <p>Bubble Trio Pro is intended as a casual game break, and its simple rules can make it approachable for different ages. Parents or caregivers should decide whether the website is appropriate for a particular child and supervise younger visitors while they use the internet. It can be helpful to read a level's instructions together, explain the difference between a restart and a new level, and remind a child that making a mistake is part of learning how the game works.</p>
            <p>The current game modes do not require registration and do not include player-to-player chat, public profiles, payments, friend requests, or user uploads. That does not mean every page linked from the site is a children's service: the public issue tracker and third-party documentation open external websites with their own terms. Children should not post their full name, age, school, photographs, home address or personal contact details on public pages. Parents should be involved if a child needs to report an issue or open an external link.</p>
            <p>Take regular breaks and keep gaming balanced with sleep, studies, physical movement, family time and offline interests. The games are not a replacement for lessons, therapy or professional advice, and the site does not promise that playing will raise school marks or improve memory or intelligence. The goal is straightforward entertainment and a chance to practise the rules of each puzzle.</p>
            <p>The advertising areas are empty placeholders in the current build; there are no live AdSense requests. If the site owner adds advertising later, the child-directed nature of the content and any applicable rules must be reviewed before ads are enabled. The owner should use the appropriate ad-treatment and consent settings, update the privacy disclosures, and keep ads separated from the game controls. The presence of a policy page alone does not configure those systems.</p>
            <p>Read the <a className="article-link" href="/family-guide">Family Play Guide</a> for a longer explanation of the games, family supervision, privacy, progress and common questions. Parents may also review the <a className="article-link" href="/privacy">Privacy Policy</a> and <a className="article-link" href="/contact">Contact page</a> before letting a child explore the site.</p>
          </section>

          <section id="site-owner-guide">
            <span className="article-number">11 — ABOUT THE CREATOR</span>
            <h3>A student learning project by Sonu</h3>
            <p>My name is Sonu. I study in Lucknow and am learning web development as a beginner. I created Bubble Trio Pro so I could improve through practice: designing game boards, writing useful instructions, adding controls, testing responsive layouts, organising website files, and learning how a published site is maintained. I want to build my skills and work towards becoming a successful developer in the future, one project and one correction at a time.</p>
            <p>I hope children, families and other casual players can enjoy the three puzzle modes and understand what they are doing without needing to read technical documentation. That is why the page includes instructions near the games, hints, levels, scoring examples and answers to common questions. I am still learning, so I welcome practical reports about a broken control, an unclear rule, an unbalanced level, or a page that is difficult to use on a phone. I cannot promise every suggestion will be implemented, but specific feedback helps me choose what to test and improve next.</p>
            <p>Bubble Trio Pro is an independent project. My student background is shared to explain why I built the website; it does not mean the website is an official university service or has been endorsed by a university or advertising provider. If you want to contact me about the website, use <a className="article-link" href="/contact">Contact</a> and choose the public email or issue tracker according to the type of message.</p>
          </section>
        </div>
        <div className="article-note"><span>✦</span><p><b>Want the fuller explanation?</b> Open the <a className="article-link" href="/family-guide">Family Play Guide</a> for step-by-step instructions for all three games, family guidance, progress details and privacy information.</p></div>
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

      </section>

      <section className="closing-cta"><div><span className="eyebrow">READY FOR ANOTHER ROUND?</span><h2>Aim. Match. Clear.</h2><p>Start a new board or choose another mini-game from the library.</p></div><a className="primary-button" href="#play">Back to the game <span>↑</span></a></section>
    </>
  );
}