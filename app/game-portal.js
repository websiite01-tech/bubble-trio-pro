"use client";

import { useEffect, useRef, useState } from "react";
import BubbleShooter from "./bubble-shooter";
import {
  GAMES,
  BUBBLE_LEVELS,
  POP_LEVELS,
  MEMORY_LEVELS,
  PLAYER_FAQS
} from "./game-content";

const PROGRESS_KEY = "bubble-trio-pro-level-progress-v2";
const DEFAULT_PROGRESS = {
  "bubble-shooter": 1,
  "bubble-puzzle": 1,
  "memory-match": 1
};

function readProgress() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(PROGRESS_KEY) || "{}");
    return Object.fromEntries(GAMES.map((game) => {
      const raw = Number(saved[game.id]);
      return [game.id, Number.isFinite(raw) ? Math.max(1, Math.min(31, raw)) : 1];
    }));
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function AdSlot({ variant = "banner" }) {
  const sidebar = variant === "sidebar";
  return (
    <section className="ad-wrap" aria-label={sidebar ? "Reserved sidebar advertisement" : "Reserved banner advertisement"}>
      <p className="ad-label">Advertisement</p>
      <div className={sidebar ? "ad-slot ad-slot-side" : "ad-slot ad-slot-banner"}>
        <span className="ad-icon" aria-hidden="true">▧</span>
        <p className="ad-title">{sidebar ? "Vertical ad space" : "Banner ad space"}</p>
        <p className="ad-copy">Reserved space only. No live advertising code is loaded.</p>
      </div>
    </section>
  );
}

function LevelPicker({ levels, selected, unlocked, onSelect }) {
  return (
    <section className="level-picker" aria-label="Select game level">
      <div className="level-picker-heading">
        <div><span className="eyebrow">LEVEL SELECT</span><h3>Choose your challenge</h3></div>
        <span className="level-progress-pill">{Math.max(0, unlocked - 1)} / 30 cleared</span>
      </div>
      <div className="level-grid">
        {levels.map((level) => {
          const isLocked = level.level > unlocked;
          return (
            <button
              type="button"
              key={level.level}
              disabled={isLocked}
              onClick={() => onSelect(level.level)}
              className={"level-button" + (selected === level.level ? " level-selected" : "") + (isLocked ? " level-locked" : "")}
              title={isLocked ? "Clear the previous level to unlock this one" : level.name}
              aria-label={"Level " + level.level + ": " + level.name + (isLocked ? ", locked" : "")}
              aria-current={selected === level.level ? "step" : undefined}
            >
              <b>{isLocked ? "🔒" : String(level.level).padStart(2, "0")}</b>
              <small>{isLocked ? "Locked" : level.name}</small>
            </button>
          );
        })}
      </div>
      <p className="level-picker-note">Levels unlock in order. Completed levels stay available on this browser. Your progress is stored locally on this device.</p>
    </section>
  );
}

function BubblePopPuzzle({ level, onComplete, onNextLevel }) {
  const palette = ["#fa3b58", "#27c96f", "#27bfeb", "#f5ce39", "#a46bf4", "#ff8ad2"];
  const [board, setBoard] = useState(() => makePopBoard(level));
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(level.moves);
  const [status, setStatus] = useState("playing");
  const [message, setMessage] = useState("Find a connected group of three or more matching bubbles.");
  const [lastCleared, setLastCleared] = useState(0);

  useEffect(() => {
    setBoard(makePopBoard(level));
    setScore(0);
    setMoves(level.moves);
    setStatus("playing");
    setMessage(level.hint);
    setLastCleared(0);
  }, [level]);

  function restart() {
    setBoard(makePopBoard(level));
    setScore(0);
    setMoves(level.moves);
    setStatus("playing");
    setMessage("Fresh board. Study the groups before your first move.");
    setLastCleared(0);
  }

  function pop(index) {
    if (status !== "playing") return;
    const row = Math.floor(index / 8);
    const col = index % 8;
    const colour = board[index];
    if (colour === null || colour === undefined) return;

    const queue = [[row, col]];
    const seen = new Set();
    const group = [];
    while (queue.length) {
      const [r, c] = queue.pop();
      const key = r * 8 + c;
      if (seen.has(key)) continue;
      seen.add(key);
      if (r < 0 || r >= 8 || c < 0 || c >= 8 || board[key] !== colour) continue;
      group.push(key);
      queue.push([r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]);
    }

    if (group.length < level.minimumGroup) {
      setMessage("That group has only " + group.length + " bubble(s). Select a connected group of at least " + level.minimumGroup + ".");
      return;
    }

    const nextBoard = board.slice();
    group.forEach((cell) => { nextBoard[cell] = null; });
    for (let r = 7; r >= 0; r -= 1) {
      for (let c = 0; c < 8; c += 1) {
        const idx = r * 8 + c;
        if (nextBoard[idx] === null && r > 0) {
          let source = r - 1;
          while (source >= 0 && nextBoard[source * 8 + c] === null) source -= 1;
          if (source >= 0) {
            nextBoard[idx] = nextBoard[source * 8 + c];
            nextBoard[source * 8 + c] = null;
          } else {
            nextBoard[idx] = Math.floor(Math.random() * level.colours);
          }
        } else if (nextBoard[idx] === null && r === 0) {
          nextBoard[idx] = Math.floor(Math.random() * level.colours);
        }
      }
    }

    const earned = group.length * 10 + Math.max(0, group.length - 3) * level.bonus;
    const nextScore = score + earned;
    const nextMoves = moves - 1;
    setBoard(nextBoard);
    setScore(nextScore);
    setMoves(nextMoves);
    setLastCleared(group.length);

    if (nextScore >= level.targetScore) {
      setStatus("won");
      setMessage("Level complete! You reached " + nextScore + " points and beat the target.");
      onComplete(level.level);
    } else if (nextMoves <= 0) {
      setStatus("lost");
      setMessage("You scored " + nextScore + " of " + level.targetScore + " points. Restart and plan larger clusters.");
    } else {
      setMessage("Nice pop! +" + earned + " points. " + Math.max(0, level.targetScore - nextScore) + " points left to reach the target.");
    }
  }

  return (
    <div className="game-stage puzzle-stage">
      <div className="stage-topline">
        <div><span className="eyebrow">LEVEL {String(level.level).padStart(2, "0")} / 30</span><h3 className="stage-heading">{level.name}</h3></div>
        <button type="button" className="quiet-button" onClick={restart}>↻ Restart</button>
      </div>
      <div className="puzzle-stats">
        <div><small>TARGET SCORE</small><b>{level.targetScore.toLocaleString()}</b></div>
        <div><small>CURRENT SCORE</small><b>{score.toLocaleString()}</b></div>
        <div><small>MOVES LEFT</small><b className={moves <= 4 ? "danger-number" : ""}>{moves}</b></div>
      </div>
      <div className="score-progress"><span style={{ width: Math.min(100, score / level.targetScore * 100) + "%" }} /></div>
      <div className="pop-board" aria-label={"Bubble Pop Puzzle level " + level.level}>
        {board.map((colour, index) => (
          <button type="button" key={index} onClick={() => pop(index)} disabled={status !== "playing"} className="pop-bubble" aria-label={colour === null ? "Empty space" : "Bubble colour " + (colour + 1)}>
            {colour !== null && <span style={{ "--bubble-colour": palette[colour % palette.length] }} />}
          </button>
        ))}
      </div>
      <div className="goal-hint"><span className="hint-star">✦</span><p><b>Level hint</b><span>{level.hint}</span></p></div>
      <p className="stage-instruction">{message}</p>
      {status !== "playing" && <div className={"level-result " + (status === "won" ? "result-win" : "result-lose")}><b>{status === "won" ? "✦ LEVEL CLEARED" : "↻ TRY AGAIN"}</b><span>{status === "won" ? "Level " + level.level + " is complete. The next challenge is now unlocked." : "You can replay this level as many times as you need."}</span><div>{status === "won" ? <button type="button" className="primary-button" onClick={level.level === 30 ? restart : onNextLevel}>{level.level === 30 ? "Replay final level ↻" : "Next level →"}</button> : <button type="button" className="primary-button" onClick={restart}>Retry level ↻</button>}</div></div>}
      {lastCleared > 0 && <p className="bubble-count-note">Last group cleared: {lastCleared} bubbles · Large groups earn extra points.</p>}
    </div>
  );
}

function makePopBoard(level) {
  return Array.from({ length: 64 }, (_, index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (Math.floor(col / 2) + Math.floor(row / 2) + Math.floor(level.level / 2) + ((row * 3 + col * 5 + level.level) % 4 === 0 ? 1 : 0)) % level.colours;
  });
}

const MEMORY_SYMBOLS = ["✦", "☾", "♣", "◆", "♥", "☀", "♠", "❖", "✿", "◈", "☘", "★", "⚑", "❋", "⬟", "✺", "☯", "❂"];

function makeDeck(level) {
  const symbols = MEMORY_SYMBOLS.slice(0, level.pairs);
  const cards = symbols.flatMap((symbol, pair) => [
    { id: pair * 2, pair, symbol },
    { id: pair * 2 + 1, pair, symbol }
  ]);
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function MemoryMatch({ level, onComplete, onNextLevel }) {
  const [deck, setDeck] = useState(() => makeDeck(level));
  const [revealed, setRevealed] = useState([]);
  const [matched, setMatched] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [locking, setLocking] = useState(false);
  const [status, setStatus] = useState("playing");
  const [message, setMessage] = useState("Turn over two cards and remember where each symbol appears.");
  const timerRef = useRef(null);
  const completeRef = useRef(onComplete);
  completeRef.current = onComplete;

  useEffect(() => {
    setDeck(makeDeck(level));
    setRevealed([]);
    setMatched([]);
    setAttempts(0);
    setLocking(false);
    setStatus("playing");
    setMessage(level.hint);
    if (timerRef.current) clearTimeout(timerRef.current);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [level]);

  function restart() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDeck(makeDeck(level));
    setRevealed([]);
    setMatched([]);
    setAttempts(0);
    setLocking(false);
    setStatus("playing");
    setMessage("New layout ready. Scan each row and remember positions.");
  }

  function turnCard(index) {
    if (status !== "playing" || locking || revealed.includes(index) || matched.includes(deck[index].pair)) return;
    const nextRevealed = [...revealed, index];
    setRevealed(nextRevealed);
    if (nextRevealed.length !== 2) return;

    const [first, second] = nextRevealed.map((cardIndex) => deck[cardIndex]);
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);

    if (first.pair === second.pair) {
      const nextMatched = [...matched, first.pair];
      setMatched(nextMatched);
      setRevealed([]);
      if (nextMatched.length === level.pairs) {
        setStatus("won");
        setMessage("Excellent recall! You found all " + level.pairs + " pairs in " + nextAttempts + " turns.");
        completeRef.current(level.level);
      } else {
        setMessage("Pair found! " + (level.pairs - nextMatched.length) + " pair(s) remain.");
      }
    } else {
      setLocking(true);
      setMessage("Not a pair. Remember both symbols; they turn over shortly.");
      timerRef.current = setTimeout(() => {
        setRevealed([]);
        setLocking(false);
        setMessage("Keep scanning from the last known positions.");
      }, 850);
    }
  }

  const columns = level.pairs <= 8 ? 4 : level.pairs <= 12 ? 5 : 6;

  return (
    <div className="game-stage memory-stage">
      <div className="stage-topline">
        <div><span className="eyebrow">LEVEL {String(level.level).padStart(2, "0")} / 30</span><h3 className="stage-heading">{level.name}</h3></div>
        <button type="button" className="quiet-button" onClick={restart}>↻ Restart</button>
      </div>
      <div className="puzzle-stats">
        <div><small>PAIRS FOUND</small><b>{matched.length} / {level.pairs}</b></div>
        <div><small>TURNS TAKEN</small><b>{attempts}</b></div>
        <div><small>THEME</small><b>{level.theme}</b></div>
      </div>
      <div className="memory-progress"><span style={{ width: (matched.length / level.pairs * 100) + "%" }} /></div>
      <div className="memory-board" style={{ "--memory-columns": columns }} aria-label={"Memory Match level " + level.level}>
        {deck.map((card, index) => {
          const faceUp = revealed.includes(index) || matched.includes(card.pair);
          return <button type="button" key={card.id} disabled={status !== "playing" || matched.includes(card.pair)} onClick={() => turnCard(index)} className={"memory-tile" + (faceUp ? " memory-face-up" : "") + (matched.includes(card.pair) ? " memory-paired" : "")} aria-label={faceUp ? "Card symbol " + card.symbol : "Hidden memory card"}>{faceUp ? card.symbol : "?"}</button>;
        })}
      </div>
      <div className="goal-hint"><span className="hint-star">✦</span><p><b>Recall tip</b><span>{level.hint}</span></p></div>
      <p className="stage-instruction" role="status" aria-live="polite">{message}</p>
      {status === "won" && <div className="level-result result-win"><b>✦ ALL PAIRS FOUND</b><span>Level complete. The next memory challenge is unlocked.</span><div><button type="button" className="primary-button" onClick={level.level === 30 ? restart : onNextLevel}>{level.level === 30 ? "Replay final memory round ↻" : "Next level →"}</button></div></div>}
    </div>
  );
}

export default function GamePortal({ initialGame = "bubble-shooter" }) {
  const [activeGame, setActiveGame] = useState(initialGame);
  const [selectedLevels, setSelectedLevels] = useState({ ...DEFAULT_PROGRESS });
  const [progress, setProgress] = useState({ ...DEFAULT_PROGRESS });
  const [progressReady, setProgressReady] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    setProgress(readProgress());
    setProgressReady(true);
    const onFilter = (event) => {
      const value = event.detail || "all";
      const map = { "bubble-shooter": "bubble-shooter", "bubble-puzzle": "bubble-puzzle", "memory-match": "memory-match" };
      setActiveGame(map[value] || (value === "all" ? "bubble-shooter" : value));
    };
    const onSearch = (event) => {
      const value = String(event.detail || "").toLowerCase();
      const match = GAMES.find((game) => (game.name + " " + game.description + " " + game.category).toLowerCase().includes(value));
      if (match) {
        setActiveGame(match.id);
        setNote("");
      } else if (value) {
        setNote("No game matched that search. Try Bubble Shooter, Bubble Pop Puzzle, or Memory Match.");
      } else {
        setNote("");
      }
    };
    window.addEventListener("bubble-portal-filter", onFilter);
    window.addEventListener("bubble-portal-search", onSearch);
    return () => {
      window.removeEventListener("bubble-portal-filter", onFilter);
      window.removeEventListener("bubble-portal-search", onSearch);
    };
  }, []);

  useEffect(() => {
    if (!progressReady) return;
    try { window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch {}
  }, [progress, progressReady]);

  const currentGame = GAMES.find((game) => game.id === activeGame) || GAMES[0];
  const selectedLevel = selectedLevels[currentGame.id] || 1;
  const unlockedLevel = progress[currentGame.id] || 1;
  const levels = currentGame.id === "bubble-shooter" ? BUBBLE_LEVELS : currentGame.id === "bubble-puzzle" ? POP_LEVELS : MEMORY_LEVELS;
  const level = levels[selectedLevel - 1] || levels[0];

  function selectGame(gameId) {
    setActiveGame(gameId);
    setNote("");
  }

  function chooseLevel(levelNumber) {
    if (levelNumber > unlockedLevel) return;
    setSelectedLevels((previous) => ({ ...previous, [currentGame.id]: levelNumber }));
  }

  function completeLevel(levelNumber) {
    setProgress((previous) => {
      const nextUnlocked = Math.min(31, Math.max(previous[currentGame.id] || 1, levelNumber + 1));
      return { ...previous, [currentGame.id]: nextUnlocked };
    });
  }

  function goNextLevel() {
    const nextLevel = Math.min(30, selectedLevel + 1);
    if (nextLevel <= (progress[currentGame.id] || 1)) {
      setSelectedLevels((previous) => ({ ...previous, [currentGame.id]: nextLevel }));
    }
  }

  return (
    <div className="portal-layout" id="play">
      <aside className="sidebar-panel game-menu">
        <div className="panel-heading" id="game-library"><div><span className="eyebrow">3 ORIGINAL GAMES</span><h2>Game library</h2></div><span className="count-pill">03 GAMES</span></div>
        <nav className="game-nav" aria-label="Choose one of three games">
          {GAMES.map((game, index) => (
            <button type="button" key={game.id} onClick={() => selectGame(game.id)} className={"game-nav-item" + (activeGame === game.id ? " game-nav-active" : "")} aria-current={activeGame === game.id ? "page" : undefined}>
              <span className={"game-nav-icon game-nav-cover " + game.cover} aria-hidden="true">{game.icon}</span>
              <span className="game-nav-copy"><b>{game.name}</b><small>{game.short}</small></span>
              <span className="game-nav-detail">{String(progress[game.id] - 1).padStart(2, "0")} / 30</span>
            </button>
          ))}
        </nav>
        <div className="pro-tip"><span className="tip-mark">✦</span><div><b>Better play, one level at a time</b><p>Read the level goal, use its hint, and learn why a move works before increasing the challenge.</p></div></div>
        <div className="sidebar-mini-guide"><span className="eyebrow">QUICK LINKS</span><a href="#player-guide">How to play</a><a href="#scoring-system">Scoring explained</a><a href="#faq">Questions & answers</a><a href="/privacy">Privacy policy</a></div>
      </aside>

      <main className="main-column">
        {note && <p className="search-notice" role="status">{note}</p>}
        <section className="game-card" aria-label={currentGame.name + " playable game"}>
          <div className="selected-game-banner">
            <div className={"selected-game-emblem " + currentGame.cover}>{currentGame.icon}</div>
            <div className="selected-game-copy"><span className="eyebrow">{currentGame.category} · 30 LEVELS</span><h2>{currentGame.name}</h2><p>{currentGame.description}</p></div>
            <div className="selected-progress"><b>{Math.min(30, unlockedLevel - 1)}<small>/30</small></b><span>Levels cleared</span></div>
          </div>

          <LevelPicker levels={levels} selected={selectedLevel} unlocked={unlockedLevel} onSelect={chooseLevel} />

          {currentGame.id === "bubble-shooter" && <BubbleShooter key={"shooter-" + selectedLevel} level={level} onLevelComplete={completeLevel} onNextLevel={goNextLevel} />}
          {currentGame.id === "bubble-puzzle" && <BubblePopPuzzle key={"puzzle-" + selectedLevel} level={level} onComplete={completeLevel} onNextLevel={goNextLevel} />}
          {currentGame.id === "memory-match" && <MemoryMatch key={"memory-" + selectedLevel} level={level} onComplete={completeLevel} onNextLevel={goNextLevel} />}

          <div className="game-card-footer"><span>◇ Three original games · 90 level challenges</span><span>Progress saved on this browser</span></div>
        </section>

        <AdSlot />
        <section className="feature-card"><div className="feature-icon">✧</div><div><h2>Made to be played, not just looked at</h2><p>Each game has a real objective, clear win conditions, restart controls, and thirty levels that gradually raise the challenge. Pick up the basics, learn from a hint, then bring your own strategy to later levels.</p></div></section>
      </main>

      <aside className="right-column">
        <section className="sidebar-panel quick-guide"><span className="eyebrow">YOUR NEXT MOVE</span><h2>{currentGame.tagline}</h2><p className="right-game-description">{currentGame.description}</p><div className="guide-steps">{currentGame.instructions.map((instruction, index) => <div key={instruction}><span>{String(index + 1).padStart(2, "0")}</span><p><b>{["Choose your move", "Watch the board", "Use your strategy", "Finish the objective"][index]}</b><small>{instruction}</small></p></div>)}</div><a className="text-link" href="#player-guide">Read the full guide <span>↗</span></a></section>
        <AdSlot variant="sidebar" />
        <section className="sidebar-panel mini-faq"><span className="eyebrow">POPULAR QUESTION</span><h2>{PLAYER_FAQS[0].question}</h2><p>{PLAYER_FAQS[0].answer}</p><a href="#faq" className="text-link">More answers <span>↗</span></a></section>
        <section className="sidebar-panel responsible-card"><span className="responsible-symbol">◎</span><h2>Play at your pace</h2><p>Enjoy a round, take a break when you need one, and treat a high score as a personal challenge.</p></section>
      </aside>
    </div>
  );
}