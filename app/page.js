import GamePortal from "./game-portal";

export const metadata = {
  title: "Bubble Trio Pro — Free Online Mini Games",
  description: "Play ten original browser mini-games at Bubble Trio Pro. Match bubbles, test your memory, solve quick maths, race numbers, and challenge your reflexes — free to play, no download required.",
  keywords: ["free online mini games", "bubble pop game", "memory matching game", "number puzzle", "reaction time game", "browser games"],
  openGraph: {
    title: "Bubble Trio Pro — A Better Little Game Break",
    description: "Ten original browser mini-games for puzzles, memory, focus, and quick challenges.",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <>
      <section className="hero-wrap">
        <div className="hero-copy">
          <div className="hero-badge"><span className="status-dot" /> FREE BROWSER GAMES <span className="badge-separator">·</span> NO DOWNLOAD</div>
          <h1>One portal.<br /><span>Ten ways to play.</span></h1>
          <p>Meet your new mini-game corner. Pop colour groups, remember hidden pairs, solve quick maths, and challenge your reaction speed — with original games that run right in your browser.</p>
          <div className="hero-actions"><a className="primary-button hero-button" href="#play">Explore the games <span>↓</span></a><a className="secondary-button" href="#player-guide">How it works</a></div>
          <div className="hero-footnote"><span>✦</span> Quick rounds. Clear rules. Your own pace.</div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-glow" />
          <div className="floating-tile tile-purple">✦</div><div className="floating-tile tile-blue">↗</div><div className="floating-tile tile-amber">＋</div>
          <div className="bubble-orb orb-a" /><div className="bubble-orb orb-b" /><div className="bubble-orb orb-c" /><div className="bubble-orb orb-d" /><div className="bubble-orb orb-e" />
          <div className="hero-art-caption"><span className="caption-symbol">◉</span><span><b>Bubble Trio Pro</b><small>Play something clever</small></span><span className="caption-arrow">↗</span></div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Portal highlights"><div><b>10</b><span>Original mini-games</span></div><i /><div><b>0</b><span>Downloads required</span></div><i /><div><b>∞</b><span>Ways to practise</span></div><i /><div><b>100%</b><span>Browser-based play</span></div></section>

      <div className="section-intro" id="games"><div><span className="eyebrow">THE GAME ROOM</span><h2>Find your next favourite</h2><p>Switch between quick arcade moments and calm brain teasers without leaving the page.</p></div><span className="section-counter">01 <span>/</span> 03</span></div>
      <GamePortal />

      <article className="editorial-section" id="player-guide">
        <div className="article-header"><span className="eyebrow">THE PLAYER'S FIELD GUIDE</span><h2>How to play, improve, and enjoy Bubble Trio Pro</h2><p>Simple rules make games easy to start. A little attention and practice make them more rewarding.</p></div>
        <div className="article-grid">
          <section id="how-to-play">
            <span className="article-number">01 — GETTING STARTED</span>
            <h3>How to play the mini-games</h3>
            <p>Bubble Trio Pro brings ten small games together in one browser portal. Choose a game from the left-hand Game Library, read the instruction under the board, and use the visible buttons to play. The Bubble Pop board asks you to remove connected groups of matching colours. Memory Match turns over symbols so you can find pairs. Number Rush rewards careful scanning as you tap from one through twelve. Tic-Tac-Toe is a two-player game for one device, while Quick Math offers short arithmetic questions.</p>
            <p>Reaction Test is about waiting for a green signal before clicking. Rock Paper Scissors lets you choose a move against the computer. Word Scramble asks you to recognise a word from rearranged letters. Colour Match tests whether you can find a named shade among several tiles, and Whack-a-Dot asks you to hit the glowing target as it moves around a small grid. Every mode can be restarted from its own panel, so a missed move does not lock you out of another attempt.</p>
            <p>These games are designed for current desktop and mobile browsers. Use a mouse, trackpad, touch screen, or keyboard where the game controls allow it. Small screens display the portal in a single column; larger screens give the game menu, play area, and reserved advertising area separate spaces. No account or installation is required to start a round.</p>
          </section>
          <section id="game-rules">
            <span className="article-number">02 — UNDERSTAND THE RULES</span>
            <h3>Game rules and fair play</h3>
            <p>Each game has its own objective, and the instruction displayed beneath the game board explains the task. In Bubble Pop, a valid group contains at least three adjacent bubbles of the same colour. A selected group that is too small remains on the board. In Memory Match, two identical symbols make a pair and stay revealed. Number Rush accepts the next number in sequence, so finding the correct tile matters more than clicking quickly. Tic-Tac-Toe ends when a player makes a complete line of three or the board fills without a winner.</p>
            <p>Quick Math marks each question once, then lets you move forward to another problem. Reaction Test measures the time between the green signal and your click; clicking before the signal is an early start and the round must be tried again. In Rock Paper Scissors, rock beats scissors, scissors beat paper, and paper beats rock. Word Scramble is solved by choosing the word made from the mixed letters. Colour Match requires the named colour, and Whack-a-Dot only counts a hit on the highlighted target.</p>
            <p>Scores and progress shown in these mini-games belong to the current browser session. The current version does not provide a permanent online leaderboard, multiplayer matchmaking, purchased power-ups, or cross-device score synchronisation. Refreshing the page or restarting a round resets game state. Play fairly, use the controls as intended, and take breaks between sessions.</p>
          </section>
          <section id="scoring-system">
            <span className="article-number">03 — BUILD A BETTER SCORE</span>
            <h3>Scoring system and useful strategies</h3>
            <p>Not every game uses the same scoring model. Bubble Pop awards ten base points for each removed bubble and a small bonus for groups larger than three. Quick Math adds ten points for each correct answer. Colour Match tracks a streak of consecutive correct selections, while Whack-a-Dot counts each successful hit. Memory Match tracks pairs completed, and Number Rush tracks how many numbers you have correctly tapped. Reaction Test reports elapsed milliseconds rather than a conventional point total. Tic-Tac-Toe and Rock Paper Scissors report the round result rather than a running score.</p>
            <p>A reliable strategy begins with the goal, not with speed. In Bubble Pop, inspect the connected shapes and look for large same-colour groups. In Memory Match, pause briefly to remember where a symbol appeared. For Number Rush, use a consistent scanning pattern across the grid instead of jumping randomly. In Tic-Tac-Toe, protect two marks that could create a winning line and block the opponent when necessary. In Quick Math, read the operation sign carefully before choosing the answer.</p>
            <p>Reaction Test is most useful when you can avoid anticipating the signal. For colour and target games, accuracy helps more than frantic tapping. In word puzzles, compare the available letters before choosing. Repeating a short session can help you notice patterns and build familiarity, but there is no need to chase a score when you are tired. The purpose of a mini-game is a short, enjoyable challenge.</p>
          </section>
          <section id="faq">
            <span className="article-number">04 — COMMON QUESTIONS</span>
            <h3>Frequently asked questions</h3>
            <h4>Are Bubble Trio Pro games free?</h4>
            <p>Yes. The games currently available on this portal can be played in the browser without an account or download. The site displays reserved ad spaces, but no live advertising is currently loaded.</p>
            <h4>Can I play on a phone or tablet?</h4>
            <p>The layout is responsive and the mini-game controls use browser buttons designed for pointer or touch interaction. A wider screen may make some boards easier to see, but the page is designed to stack on small screens.</p>
            <h4>Does Bubble Trio Pro save my high scores?</h4>
            <p>Not at this stage. Scores and progress are stored in the current page state and reset when the game is restarted or the page is refreshed. An account system and cloud leaderboard are not part of this version.</p>
            <h4>Do I need to install anything?</h4>
            <p>No. Open the site in a modern browser and choose a game. A current browser and a stable internet connection to load the website are all that is required.</p>
            <h4>Are ads already active on this website?</h4>
            <p>No. The labelled advertisement areas reserve layout space only. Real ads should be introduced only after the publisher has a valid setup and the site follows applicable advertising, privacy, and consent requirements.</p>
          </section>
        </div>
        <div className="article-note"><span>✦</span><p><b>Made for short, satisfying play.</b> Each game is a small original browser experience. If a board feels difficult, restart it, read the objective, and try another strategy.</p></div>
      </article>

      <section className="closing-cta"><div><span className="eyebrow">YOUR NEXT ROUND IS READY</span><h2>Small challenge. Fresh start.</h2><p>Choose a game, learn its rhythm, and enjoy the next few minutes.</p></div><a className="primary-button" href="#play">Back to the games <span>↑</span></a></section>
    </>
  );
}