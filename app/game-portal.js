"use client";

import { useEffect, useRef, useState } from "react";

const GAMES = [
  { id: "bubble-pop", name: "Bubble Pop", icon: "◉", category: "Puzzle", desc: "Clear connected colour groups of three or more." },
  { id: "memory-match", name: "Memory Match", icon: "▦", category: "Memory", desc: "Reveal tiles and find every matching pair." },
  { id: "number-rush", name: "Number Rush", icon: "↗", category: "Arcade", desc: "Tap numbers from 1 to 12 in the correct order." },
  { id: "tic-tac-toe", name: "Tic-Tac-Toe", icon: "⌗", category: "Strategy", desc: "Make a line of three before your opponent." },
  { id: "quick-math", name: "Quick Math", icon: "＋", category: "Brain", desc: "Solve short arithmetic challenges accurately." },
  { id: "reaction-test", name: "Reaction Test", icon: "ϟ", category: "Reflex", desc: "Wait for the green signal, then react quickly." },
  { id: "rock-paper-scissors", name: "Rock Paper Scissors", icon: "✊", category: "Classic", desc: "Choose a move and play against the computer." },
  { id: "word-scramble", name: "Word Scramble", icon: "Aa", category: "Words", desc: "Unscramble letters to uncover the hidden word." },
  { id: "colour-switch", name: "Colour Match", icon: "✳", category: "Focus", desc: "Find the named colour while the board distracts you." },
  { id: "whack-a-dot", name: "Whack-a-Dot", icon: "⊙", category: "Arcade", desc: "Hit the glowing target and build a streak." }
];

const PALETTE = [
  { name: "Violet", hex: "#a78bfa" },
  { name: "Cyan", hex: "#22d3ee" },
  { name: "Emerald", hex: "#34d399" },
  { name: "Rose", hex: "#fb7185" },
  { name: "Amber", hex: "#fbbf24" },
  { name: "Blue", hex: "#60a5fa" }
];

const MEMORY_SYMBOLS = ["☀", "◆", "♣", "✦", "☾", "♥"];
const MEMORY_START = [2, 4, 1, 3, 1, 2, 4, 3, 5, 5, 0, 0];
const NUMBER_ORDER = [8, 2, 11, 5, 1, 10, 3, 9, 4, 12, 6, 7];
const MATH_ROUNDS = [
  { question: "7 + 5", answer: 12, options: [10, 12, 13, 15] },
  { question: "18 − 7", answer: 11, options: [9, 11, 12, 13] },
  { question: "6 × 4", answer: 24, options: [18, 20, 24, 28] },
  { question: "36 ÷ 6", answer: 6, options: [4, 5, 6, 8] },
  { question: "15 + 19", answer: 34, options: [32, 33, 34, 35] }
];
const WORD_ROUNDS = [
  { scrambled: "ZLZUEP", answer: "PUZZLE", options: ["PUZZLE", "PLANET", "POCKET"] },
  { scrambled: "NRIAB", answer: "BRAIN", options: ["BRAIN", "BRAVE", "BRICK"] },
  { scrambled: "YPLPA", answer: "APPLY", options: ["APPLY", "APPLE", "PAPPY"] }
];

function makeBubbles() {
  return Array.from({ length: 42 }, (_, i) => {
    const row = Math.floor(i / 7);
    const col = i % 7;
    return (Math.floor(col / 3) + Math.floor(row / 2)) % 5;
  });
}

function getWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return board.every(Boolean) ? "draw" : null;
}

function AdSlot({ kind = "banner" }) {
  const side = kind === "sidebar";
  return (
    <section className="ad-wrap" aria-label={side ? "Sidebar advertisement area" : "Banner advertisement area"}>
      <p className="ad-label">Advertisement</p>
      <div className={side ? "ad-slot ad-slot-side" : "ad-slot ad-slot-banner"}>
        <span className="ad-icon" aria-hidden="true">▧</span>
        <p className="ad-title">{side ? "Vertical ad space" : "Banner ad space"}</p>
        <p className="ad-copy">Reserved for a future ad unit. No advertisement is currently loaded.</p>
      </div>
    </section>
  );
}

function GameBoard({ gameId, note, setNote }) {
  const [bubbles, setBubbles] = useState(makeBubbles);
  const [bubbleScore, setBubbleScore] = useState(0);
  const [revealed, setRevealed] = useState([]);
  const [matched, setMatched] = useState([]);
  const [numberCount, setNumberCount] = useState(0);
  const [numberTapped, setNumberTapped] = useState([]);
  const [ticBoard, setTicBoard] = useState(Array(9).fill(null));
  const [mathIndex, setMathIndex] = useState(0);
  const [mathChoice, setMathChoice] = useState(null);
  const [mathScore, setMathScore] = useState(0);
  const [reaction, setReaction] = useState("idle");
  const [reactionMs, setReactionMs] = useState(null);
  const reactionTimer = useRef(null);
  const readyAt = useRef(0);
  const [rpsResult, setRpsResult] = useState(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordChoice, setWordChoice] = useState(null);
  const [colourTarget, setColourTarget] = useState(1);
  const [colourStreak, setColourStreak] = useState(0);
  const [whackTarget, setWhackTarget] = useState(6);
  const [whackScore, setWhackScore] = useState(0);

  useEffect(() => () => {
    if (reactionTimer.current) clearTimeout(reactionTimer.current);
  }, []);

  function restartCurrent() {
    setNote("Fresh round ready. Have fun!");
    if (gameId === "bubble-pop") { setBubbles(makeBubbles()); setBubbleScore(0); }
    if (gameId === "memory-match") { setRevealed([]); setMatched([]); }
    if (gameId === "number-rush") { setNumberCount(0); setNumberTapped([]); }
    if (gameId === "tic-tac-toe") setTicBoard(Array(9).fill(null));
    if (gameId === "quick-math") { setMathIndex(0); setMathChoice(null); setMathScore(0); }
    if (gameId === "reaction-test") {
      if (reactionTimer.current) clearTimeout(reactionTimer.current);
      setReaction("idle"); setReactionMs(null);
    }
    if (gameId === "rock-paper-scissors") setRpsResult(null);
    if (gameId === "word-scramble") { setWordIndex(0); setWordChoice(null); }
    if (gameId === "colour-switch") { setColourTarget(1); setColourStreak(0); }
    if (gameId === "whack-a-dot") { setWhackTarget(6); setWhackScore(0); }
  }

  function popBubble(index) {
    if (bubbles[index] === null || bubbles[index] === undefined) return;
    const colour = bubbles[index];
    const stack = [index];
    const visited = new Set();
    const group = [];
    while (stack.length) {
      const current = stack.pop();
      if (visited.has(current)) continue;
      visited.add(current);
      if (bubbles[current] !== colour) continue;
      group.push(current);
      const col = current % 7;
      const adjacent = [current - 7, current + 7];
      if (col > 0) adjacent.push(current - 1);
      if (col < 6) adjacent.push(current + 1);
      adjacent.forEach((next) => {
        if (next >= 0 && next < 42 && !visited.has(next) && bubbles[next] === colour) stack.push(next);
      });
    }
    if (group.length < 3) {
      setNote("Find a connected group of at least three matching bubbles.");
      return;
    }
    const next = bubbles.slice();
    group.forEach((cell) => { next[cell] = null; });
    setBubbles(next);
    const earned = group.length * 10 + Math.max(0, group.length - 3) * 5;
    setBubbleScore((score) => score + earned);
    setNote(next.every((cell) => cell === null) ? "Amazing! You cleared the whole board." : "Nice pop! +" + earned + " points.");
  }

  function chooseMemory(index) {
    if (matched.includes(index) || revealed.includes(index)) return;
    if (revealed.length === 2) {
      setRevealed([index]);
      setNote("Two cards at a time: remember the last pair as you continue.");
      return;
    }
    const next = [...revealed, index];
    setRevealed(next);
    if (next.length === 2) {
      if (MEMORY_START[next[0]] === MEMORY_START[next[1]]) {
        setMatched((prev) => [...prev, ...next]);
        setNote("Pair found! " + (matched.length + 2 === MEMORY_START.length ? "All pairs complete!" : "Keep going."));
      } else {
        setNote("Not a pair yet. Remember those symbols for your next turn.");
      }
    }
  }

  function tapNumber(number) {
    const expected = numberCount + 1;
    if (number !== expected) {
      setNote("Look for " + expected + " next.");
      return;
    }
    setNumberTapped((prev) => [...prev, number]);
    setNumberCount(expected);
    setNote(expected === 12 ? "Perfect run! You tapped every number in order." : "Good! Next: " + (expected + 1));
  }

  function tapTicCell(index) {
    if (ticBoard[index] || getWinner(ticBoard)) return;
    const next = ticBoard.slice();
    next[index] = next.filter(Boolean).length % 2 === 0 ? "X" : "O";
    setTicBoard(next);
    const winner = getWinner(next);
    if (winner === "draw") setNote("It's a draw. Start another round to try again.");
    else if (winner) setNote(winner + " wins! Well played.");
    else setNote(next.filter(Boolean).length % 2 === 1 ? "O's turn." : "X's turn.");
  }

  function answerMath(value) {
    if (mathChoice !== null) return;
    setMathChoice(value);
    if (value === MATH_ROUNDS[mathIndex].answer) {
      setMathScore((score) => score + 10);
      setNote("Correct answer — +10 points.");
    } else setNote("Not quite. The correct answer is " + MATH_ROUNDS[mathIndex].answer + ".");
  }

  function nextMath() {
    setMathIndex((index) => (index + 1) % MATH_ROUNDS.length);
    setMathChoice(null);
    setNote("Next question. Take your time.");
  }

  function startReaction() {
    if (reactionTimer.current) clearTimeout(reactionTimer.current);
    setReaction("wait");
    setReactionMs(null);
    setNote("Wait for the green signal. Do not click early.");
    reactionTimer.current = setTimeout(() => {
      readyAt.current = Date.now();
      setReaction("ready");
      setNote("Now! Click the green button.");
    }, 800 + Math.floor(Math.random() * 1700));
  }

  function clickReaction() {
    if (reaction === "idle" || reaction === "result" || reaction === "early") {
      startReaction();
    } else if (reaction === "wait") {
      if (reactionTimer.current) clearTimeout(reactionTimer.current);
      setReaction("early");
      setNote("Too soon! Start again and wait for green.");
    } else if (reaction === "ready") {
      const ms = Date.now() - readyAt.current;
      setReactionMs(ms);
      setReaction("result");
      setNote(ms < 250 ? "Lightning fast — " + ms + " ms." : "Reaction time: " + ms + " ms.");
    }
  }

  function playRps(move) {
    const options = ["Rock", "Paper", "Scissors"];
    const computer = options[Math.floor(Math.random() * 3)];
    let outcome = "Draw";
    if ((move === "Rock" && computer === "Scissors") ||
        (move === "Paper" && computer === "Rock") ||
        (move === "Scissors" && computer === "Paper")) outcome = "You win";
    else if (move !== computer) outcome = "Computer wins";
    setRpsResult({ move, computer, outcome });
    setNote(outcome + " this round.");
  }

  function chooseWord(word) {
    if (wordChoice !== null) return;
    setWordChoice(word);
    setNote(word === WORD_ROUNDS[wordIndex].answer ? "Correct! You solved the scramble." : "Try the letters again or start a new word.");
  }

  function nextWord() {
    setWordIndex((index) => (index + 1) % WORD_ROUNDS.length);
    setWordChoice(null);
    setNote("New scramble. Rearrange the letters.");
  }

  function selectColour(index) {
    if (index === colourTarget) {
      const streak = colourStreak + 1;
      setColourStreak(streak);
      setColourTarget((target) => (target + 2) % PALETTE.length);
      setNote("Correct colour! Streak: " + streak + ".");
    } else {
      setColourStreak(0);
      setNote("That was " + PALETTE[index].name + ". Find " + PALETTE[colourTarget].name + ".");
    }
  }

  function whack(index) {
    if (index !== whackTarget) {
      setNote("Aim for the glowing dot.");
      return;
    }
    const score = whackScore + 1;
    setWhackScore(score);
    setWhackTarget((target) => (target + 7) % 16);
    setNote("Hit! Streak: " + score + ".");
  }

  const ticWinner = getWinner(ticBoard);
  const currentMath = MATH_ROUNDS[mathIndex];
  const currentWord = WORD_ROUNDS[wordIndex];

  return (
    <div className="game-stage">
      <div className="stage-topline">
        <div><span className="eyebrow">LIVE GAME</span><h3 className="stage-heading">{GAMES.find((game) => game.id === gameId)?.name}</h3></div>
        <button type="button" className="quiet-button" onClick={restartCurrent}>↻ Restart</button>
      </div>

      {gameId === "bubble-pop" && (
        <>
          <div className="game-stats"><span>Score <b>{bubbleScore}</b></span><span>Colour groups <b>3+ bubbles</b></span></div>
          <div className="bubble-grid" aria-label="Bubble Pop game board">
            {bubbles.map((bubble, index) => (
              <button key={index} type="button" disabled={bubble === null} onClick={() => popBubble(index)} className="bubble-cell" aria-label={bubble === null ? "Empty bubble space" : PALETTE[bubble].name + " bubble"}>
                {bubble !== null && <span style={{ background: "radial-gradient(circle at 32% 27%, white 0%, " + PALETTE[bubble].hex + " 36%, " + PALETTE[bubble].hex + " 100%)" }} />}
              </button>
            ))}
          </div>
          <p className="stage-instruction">Select a connected group of three or more matching bubbles. Larger groups earn bonus points.</p>
        </>
      )}

      {gameId === "memory-match" && (
        <>
          <div className="game-stats"><span>Pairs found <b>{matched.length / 2} / 6</b></span><span>Cards <b>{revealed.length}/2</b></span></div>
          <div className="memory-grid">
            {MEMORY_START.map((symbol, index) => {
              const visible = revealed.includes(index) || matched.includes(index);
              return <button type="button" key={index} className={"memory-card" + (visible ? " is-revealed" : "") + (matched.includes(index) ? " is-matched" : "")} onClick={() => chooseMemory(index)} disabled={matched.includes(index)} aria-label={visible ? "Card " + MEMORY_SYMBOLS[symbol] : "Hidden card"}>
                {visible ? MEMORY_SYMBOLS[symbol] : "?"}
              </button>;
            })}
          </div>
          <p className="stage-instruction">Reveal two cards per turn. Matching symbols stay open; unmatched cards can be retried after you remember them.</p>
        </>
      )}

      {gameId === "number-rush" && (
        <>
          <div className="game-stats"><span>Progress <b>{numberCount} / 12</b></span><span>Next number <b>{Math.min(12, numberCount + 1)}</b></span></div>
          <div className="number-grid">
            {NUMBER_ORDER.map((number) => <button type="button" key={number} disabled={numberTapped.includes(number)} className={"number-tile" + (numberTapped.includes(number) ? " is-done" : "")} onClick={() => tapNumber(number)}>{numberTapped.includes(number) ? "✓" : number}</button>)}
          </div>
          <p className="stage-instruction">Tap the tiles in numeric order, beginning with 1. Take a breath and focus on your next target.</p>
        </>
      )}

      {gameId === "tic-tac-toe" && (
        <>
          <div className="game-stats"><span>Two-player mode</span><span>{ticWinner ? "Round complete" : "Turn " + (ticBoard.filter(Boolean).length % 2 === 0 ? "X" : "O")}</span></div>
          <div className="tic-grid">
            {ticBoard.map((cell, index) => <button type="button" key={index} className={"tic-cell " + (cell === "X" ? "mark-x" : cell === "O" ? "mark-o" : "")} onClick={() => tapTicCell(index)} disabled={Boolean(cell) || Boolean(ticWinner)} aria-label={"Square " + (index + 1) + (cell ? ": " + cell : "")}>{cell || ""}</button>)}
          </div>
          <p className="stage-instruction">Take turns on the same device. Make a horizontal, vertical, or diagonal line of three marks to win.</p>
        </>
      )}

      {gameId === "quick-math" && (
        <>
          <div className="game-stats"><span>Question <b>{mathIndex + 1} / {MATH_ROUNDS.length}</b></span><span>Score <b>{mathScore}</b></span></div>
          <div className="math-panel"><span className="eyebrow">SOLVE THIS</span><p className="math-question">{currentMath.question}</p>
            <div className="answer-grid">{currentMath.options.map((value) => <button type="button" key={value} onClick={() => answerMath(value)} disabled={mathChoice !== null} className={"answer-option" + (mathChoice === value ? " answer-picked" : "")}>{value}</button>)}</div>
            {mathChoice !== null && <div className="inline-next"><span className={mathChoice === currentMath.answer ? "success-text" : "muted-text"}>{mathChoice === currentMath.answer ? "Correct" : "Answer: " + currentMath.answer}</span><button type="button" className="primary-button" onClick={nextMath}>Next question →</button></div>}
          </div>
          <p className="stage-instruction">Answer each question once. Correct answers are worth 10 points. The question set loops so you can keep practising.</p>
        </>
      )}

      {gameId === "reaction-test" && (
        <>
          <div className="game-stats"><span>Goal <b>React fast</b></span><span>Latest <b>{reactionMs === null ? "—" : reactionMs + " ms"}</b></span></div>
          <button type="button" onClick={clickReaction} className={"reaction-panel reaction-" + reaction} aria-live="polite">
            <span className="reaction-symbol">{reaction === "ready" ? "ϟ" : reaction === "result" ? reactionMs + " ms" : reaction === "early" ? "!" : reaction === "wait" ? "···" : "▶"}</span>
            <span className="reaction-title">{reaction === "idle" || reaction === "result" || reaction === "early" ? "Click to start" : reaction === "wait" ? "Wait for green…" : "CLICK NOW!"}</span>
            <span className="reaction-caption">{reaction === "wait" ? "Don't jump the signal" : reaction === "ready" ? "Tap as quickly as you can" : "Measure your reaction time"}</span>
          </button>
          <p className="stage-instruction">Start a round, wait for the panel to turn green, then click it. Clicking early cancels the round. Your result is shown in milliseconds.</p>
        </>
      )}

      {gameId === "rock-paper-scissors" && (
        <>
          <div className="game-stats"><span>Classic duel</span><span>Player vs <b>CPU</b></span></div>
          <div className="rps-options">
            {[["Rock", "✊"], ["Paper", "✋"], ["Scissors", "✌"]].map(([move, icon]) => <button type="button" className="rps-option" key={move} onClick={() => playRps(move)}><span>{icon}</span><b>{move}</b></button>)}
          </div>
          {rpsResult && <div className="result-panel"><p className="result-head">{rpsResult.outcome}</p><p className="result-detail">You chose {rpsResult.move}; the computer chose {rpsResult.computer.toLowerCase()}.</p></div>}
          <p className="stage-instruction">Rock beats scissors, scissors beat paper, and paper beats rock. Choose a move to play a new round against the computer.</p>
        </>
      )}

      {gameId === "word-scramble" && (
        <>
          <div className="game-stats"><span>Word <b>{wordIndex + 1} / {WORD_ROUNDS.length}</b></span><span>Category <b>Everyday words</b></span></div>
          <div className="word-panel"><span className="eyebrow">UNSCRAMBLE</span><div className="scrambled-word">{currentWord.scrambled.split("").join(" ")}</div><div className="answer-grid word-options">{currentWord.options.map((word) => <button type="button" key={word} onClick={() => chooseWord(word)} disabled={wordChoice !== null} className={"answer-option" + (wordChoice === word ? " answer-picked" : "")}>{word}</button>)}</div>
            {wordChoice !== null && <div className="inline-next"><span className={wordChoice === currentWord.answer ? "success-text" : "muted-text"}>{wordChoice === currentWord.answer ? "You got it!" : "Correct word: " + currentWord.answer}</span><button type="button" className="primary-button" onClick={nextWord}>Next word →</button></div>}
          </div>
          <p className="stage-instruction">Rearrange the letters in the top row to find a real word. Pick an answer and move to the next scramble.</p>
        </>
      )}

      {gameId === "colour-switch" && (
        <>
          <div className="game-stats"><span>Target <b>{PALETTE[colourTarget].name}</b></span><span>Streak <b>{colourStreak}</b></span></div>
          <div className="colour-target"><span>Find this colour</span><strong style={{ color: PALETTE[colourTarget].hex }}>{PALETTE[colourTarget].name.toUpperCase()}</strong></div>
          <div className="colour-grid">{PALETTE.map((colour, index) => <button key={colour.name} type="button" className="colour-choice" style={{ "--tile-colour": colour.hex }} onClick={() => selectColour(index)} aria-label={"Choose " + colour.name}><span /></button>)}</div>
          <p className="stage-instruction">Read the target name, then tap its matching colour tile. Correct choices grow your streak; a miss resets it.</p>
        </>
      )}

      {gameId === "whack-a-dot" && (
        <>
          <div className="game-stats"><span>Hits <b>{whackScore}</b></span><span>Target <b>Glowing dot</b></span></div>
          <div className="whack-grid">{Array.from({ length: 16 }, (_, index) => <button type="button" key={index} onClick={() => whack(index)} aria-label={index === whackTarget ? "Hit glowing target" : "Empty target slot"} className={"whack-cell" + (index === whackTarget ? " whack-active" : "")}>{index === whackTarget ? <span /> : ""}</button>)}</div>
          <p className="stage-instruction">Tap the glowing target as it jumps around the board. Each hit moves it and increases your streak.</p>
        </>
      )}

      <div className="game-feedback" role="status" aria-live="polite"><span className="feedback-dot" />{note}</div>
    </div>
  );
}

export default function GamePortal({ initialGame = "bubble-pop" }) {
  const [activeGame, setActiveGame] = useState(initialGame);
  const [note, setNote] = useState("Choose a move to begin. Each game has its own rules and scoring.");
  const currentGame = GAMES.find((game) => game.id === activeGame) || GAMES[0];

  function selectGame(id) {
    setActiveGame(id);
    setNote("Welcome to " + (GAMES.find((game) => game.id === id)?.name || "your game") + ". " + (GAMES.find((game) => game.id === id)?.desc || ""));
  }

  return (
    <div className="portal-layout" id="play">
      <aside className="sidebar-panel game-menu">
        <div className="panel-heading"><div><span className="eyebrow">PICK YOUR MODE</span><h2>Game library</h2></div><span className="count-pill">10 GAMES</span></div>
        <nav className="game-nav" aria-label="Game menu">
          {GAMES.map((game, index) => (
            <button type="button" key={game.id} onClick={() => selectGame(game.id)} className={"game-nav-item" + (activeGame === game.id ? " game-nav-active" : "")} aria-current={activeGame === game.id ? "page" : undefined}>
              <span className="game-nav-icon">{game.icon}</span><span className="game-nav-copy"><b>{game.name}</b><small>{game.category}</small></span><span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </nav>
        <div className="pro-tip"><span className="tip-mark">✦</span><div><b>Small moves, smart plays</b><p>Take a second to read the board. Practice beats random clicks.</p></div></div>
      </aside>

      <main className="main-column">
        <section className="game-card" aria-label="Selected game">
          <div className="game-card-header"><div className="game-title-wrap"><span className="game-title-icon">{currentGame.icon}</span><div><span className="eyebrow">NOW PLAYING</span><h2>{currentGame.name}</h2><p>{currentGame.desc}</p></div></div><span className="live-pill"><i /> PLAYABLE</span></div>
          <GameBoard key={activeGame} gameId={activeGame} note={note} setNote={setNote} />
          <div className="game-card-footer"><span>◇ Original browser mini-game</span><span>No account · No download</span></div>
        </section>
        <AdSlot />
        <section className="feature-card"><div className="feature-icon">✧</div><div><h2>A tiny break with a big brain boost</h2><p>Each mini-game is built around a different skill: pattern recognition, working memory, arithmetic, reaction timing, or simple strategy. Play a quick round, switch modes when you want something different, and use each reset to practise again.</p></div></section>
      </main>

      <aside className="right-column">
        <section className="sidebar-panel quick-guide"><span className="eyebrow">YOUR NEXT MOVE</span><h2>How to get started</h2><div className="guide-steps"><div><span>01</span><p><b>Choose a game</b><small>Pick one of ten original mini-games.</small></p></div><div><span>02</span><p><b>Read the goal</b><small>Every board has a short instruction.</small></p></div><div><span>03</span><p><b>Play your way</b><small>Restart or change games whenever you like.</small></p></div></div><a className="text-link" href="#player-guide">Read the player guide <span>↗</span></a></section>
        <AdSlot kind="sidebar" />
        <section className="sidebar-panel responsible-card"><span className="responsible-symbol">◎</span><h2>Play at your pace</h2><p>Enjoy a round, take a break when you need one, and treat high scores as a personal challenge.</p></section>
      </aside>
    </div>
  );
}