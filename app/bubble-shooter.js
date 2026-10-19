"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  { name: "Red", hex: "#ff263c", light: "#ff8a95" },
  { name: "Green", hex: "#12d849", light: "#a3ffb8" },
  { name: "Magenta", hex: "#e60edb", light: "#ffb9fa" },
  { name: "Cyan", hex: "#12d9df", light: "#adffff" },
  { name: "Yellow", hex: "#f4e500", light: "#fffda8" },
  { name: "Blue", hex: "#1545f8", light: "#a2b4ff" }
];

const WIDTH = 960;
const HEIGHT = 700;
const COLS = 16;
const MAX_ROWS = 15;
const R = 17;
const STEP_X = 36;
const STEP_Y = 34;
const START_X = 45;
const START_Y = 43;
const SHOOT_X = 350;
const SHOOT_Y = 615;
const CONTROL_X = 690;

function randomColour() {
  return Math.floor(Math.random() * COLORS.length);
}

function makeGrid() {
  const grid = Array.from({ length: MAX_ROWS }, () => Array(COLS).fill(null));
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      grid[row][col] = randomColour();
    }
  }
  return grid;
}

function freshGame() {
  return {
    grid: makeGrid(),
    score: 0,
    shots: 0,
    misses: 0,
    colour: randomColour(),
    next: Array.from({ length: 5 }, randomColour),
    projectile: null,
    aim: { x: SHOOT_X, y: 155 },
    gameOver: false,
    won: false,
    help: false,
    muted: true,
    message: "Aim with your mouse or finger, then click to shoot."
  };
}

function bubblePosition(col, row) {
  return {
    x: START_X + col * STEP_X + (row % 2) * (STEP_X / 2),
    y: START_Y + row * STEP_Y
  };
}

function distance(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

function neighbours(col, row) {
  const adjacent = [[col - 1, row], [col + 1, row]];
  if (row % 2 === 0) {
    adjacent.push([col - 1, row - 1], [col, row - 1], [col - 1, row + 1], [col, row + 1]);
  } else {
    adjacent.push([col, row - 1], [col + 1, row - 1], [col, row + 1], [col + 1, row + 1]);
  }
  return adjacent.filter(([c, r]) => c >= 0 && c < COLS && r >= 0 && r < MAX_ROWS);
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
}

function drawBubble(ctx, x, y, colourIndex, radius = R) {
  const colour = COLORS[colourIndex] || COLORS[0];
  const gradient = ctx.createRadialGradient(
    x - radius * 0.34,
    y - radius * 0.42,
    radius * 0.04,
    x + radius * 0.12,
    y + radius * 0.16,
    radius * 1.18
  );
  gradient.addColorStop(0, "#ffffff");
  gradient.addColorStop(0.11, colour.light);
  gradient.addColorStop(0.38, colour.hex);
  gradient.addColorStop(0.78, colour.hex);
  gradient.addColorStop(1, "rgba(34,36,99,.9)");
  ctx.save();
  ctx.shadowColor = colour.hex;
  ctx.shadowBlur = 5;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(255,255,255,.7)";
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(x - radius * 0.32, y - radius * 0.44, radius * 0.2, radius * 0.105, -0.6, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,.78)";
  ctx.fill();
  ctx.restore();
}

function drawCircleButton(ctx, x, y, radius, top, bottom, label, smallLabel = "") {
  const gradient = ctx.createLinearGradient(x - radius, y - radius, x + radius, y + radius);
  gradient.addColorStop(0, top);
  gradient.addColorStop(1, bottom);
  ctx.save();
  ctx.shadowColor = "rgba(44,45,134,.2)";
  ctx.shadowBlur = 9;
  ctx.beginPath();
  ctx.arc(x, y + 2, radius + 1, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(34,41,133,.2)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(255,255,255,.88)";
  ctx.lineWidth = 1.4;
  ctx.stroke();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = bottom === "#fefefe" ? "#282a6c" : "#fff";
  ctx.font = "800 " + (label.length > 8 ? "10" : "12") + "px Arial";
  ctx.fillText(label, x, y - (smallLabel ? 4 : 0));
  if (smallLabel) {
    ctx.font = "800 10px Arial";
    ctx.fillText(smallLabel, x, y + 9);
  }
  ctx.restore();
}

function drawGame(ctx, state) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  const outer = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  outer.addColorStop(0, "#ccceff");
  outer.addColorStop(0.55, "#c2c5ff");
  outer.addColorStop(1, "#b8bdfb");
  ctx.fillStyle = outer;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.strokeStyle = "rgba(87,91,177,.5)";
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, 2, 2, WIDTH - 4, HEIGHT - 4, 15);
  ctx.stroke();

  ctx.save();
  drawRoundedRect(ctx, 25, 24, 642, 535, 18);
  ctx.fillStyle = "rgba(255,255,255,.18)";
  ctx.fill();
  ctx.strokeStyle = "rgba(96,99,179,.45)";
  ctx.lineWidth = 2;
  ctx.stroke();

  const gloss = ctx.createLinearGradient(25, 24, 667, 570);
  gloss.addColorStop(0, "rgba(255,255,255,.17)");
  gloss.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gloss;
  ctx.fill();
  ctx.restore();

  for (let row = 0; row < MAX_ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const colour = state.grid[row][col];
      if (colour === null || colour === undefined) continue;
      const point = bubblePosition(col, row);
      drawBubble(ctx, point.x, point.y, colour);
    }
  }

  // The pale line is a trajectory guide, not an interactive element.
  if (!state.gameOver && state.aim.y < SHOOT_Y - 25) {
    let vx = state.aim.x - SHOOT_X;
    let vy = state.aim.y - SHOOT_Y;
    const length = Math.sqrt(vx * vx + vy * vy) || 1;
    vx /= length;
    vy /= length;
    let x = SHOOT_X;
    let y = SHOOT_Y;
    ctx.save();
    ctx.setLineDash([5, 8]);
    ctx.strokeStyle = "rgba(66,65,170,.48)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let step = 0; step < 280; step += 1) {
      x += vx * 3;
      y += vy * 3;
      if (x < START_X || x > 651) {
        vx *= -1;
        x = Math.max(START_X, Math.min(651, x));
      }
      ctx.lineTo(x, y);
      if (y < START_Y - R) break;
    }
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  // The launcher and preview queue.
  const launcherGradient = ctx.createLinearGradient(SHOOT_X - 42, SHOOT_Y, SHOOT_X + 42, SHOOT_Y + 32);
  launcherGradient.addColorStop(0, "#ffffff");
  launcherGradient.addColorStop(0.35, "#c6c9fa");
  launcherGradient.addColorStop(1, "#9096e5");
  ctx.beginPath();
  ctx.arc(SHOOT_X, SHOOT_Y + 9, 37, Math.PI, Math.PI * 2);
  ctx.fillStyle = launcherGradient;
  ctx.fill();
  ctx.strokeStyle = "rgba(92,95,175,.55)";
  ctx.lineWidth = 2;
  ctx.stroke();
  drawBubble(ctx, SHOOT_X, SHOOT_Y, state.colour, R + 1);

  if (state.projectile) {
    drawBubble(ctx, state.projectile.x, state.projectile.y, state.projectile.colour, R);
  }

  state.next.forEach((colour, index) => {
    drawBubble(ctx, 47 + index * 49, 642, colour, index === 0 ? 17 : 15);
  });
  ctx.textAlign = "left";
  ctx.fillStyle = "#5055a4";
  ctx.font = "700 10px Arial";
  ctx.fillText("NEXT", 26, 613);

  // Original in-board utility controls on the right side.
  drawCircleButton(ctx, 760, 99, 31, "#39ef35", "#079d22", "RESTART");
  drawCircleButton(ctx, 836, 152, 29, "#1df5ed", "#079ca9", state.muted ? "SOUND" : "MUTE");
  drawCircleButton(ctx, 717, 206, 27, "#fff55b", "#d4c500", "HELP");
  drawCircleButton(ctx, 853, 232, 31, "#6688ff", "#0b2cc4", "MORE", "GAMES");

  ctx.textAlign = "center";
  ctx.fillStyle = "#152a9a";
  ctx.font = "900 29px Arial";
  ctx.fillText(String(state.score), 858, 309);
  ctx.fillStyle = "#fbf300";
  ctx.strokeStyle = "#a729aa";
  ctx.lineWidth = 2;
  ctx.font = "900 22px Arial";
  ["B", "U", "B", "B", "L", "E"].forEach((letter, index) => {
    const x = 716 + index * 30;
    ctx.strokeText(letter, x, 357);
    ctx.fillText(letter, x, 357);
  });
  ctx.fillStyle = "#5960b1";
  ctx.font = "700 11px Arial";
  ctx.fillText("SHOOTER", 794, 379);

  ctx.fillStyle = "#5055a4";
  ctx.font = "600 10px Arial";
  ctx.textAlign = "center";
  ctx.fillText("AIM • MATCH 3+ • CLEAR", 794, 425);

  if (state.help) {
    ctx.fillStyle = "rgba(41,43,116,.78)";
    drawRoundedRect(ctx, 100, 180, 500, 260, 18);
    ctx.fill();
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.font = "900 25px Arial";
    ctx.fillText("HOW TO PLAY", 350, 222);
    ctx.font = "15px Arial";
    ctx.fillText("1. Aim with your mouse or finger.", 350, 267);
    ctx.fillText("2. Tap or click to launch a bubble.", 350, 301);
    ctx.fillText("3. Connect three or more same-colour bubbles.", 350, 335);
    ctx.fillText("4. Remove hanging bubbles to earn more points.", 350, 369);
    ctx.font = "700 12px Arial";
    ctx.fillStyle = "#c7f9ff";
    ctx.fillText("Tap the yellow HELP button to close this guide.", 350, 408);
  }

  if (state.gameOver) {
    ctx.fillStyle = "rgba(43,46,130,.78)";
    drawRoundedRect(ctx, 100, 205, 500, 220, 18);
    ctx.fill();
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.font = "900 36px Arial";
    ctx.fillText(state.won ? "BOARD CLEARED!" : "GAME OVER", 350, 277);
    ctx.font = "20px Arial";
    ctx.fillText("Final score: " + state.score, 350, 317);
    ctx.font = "15px Arial";
    ctx.fillText("Click RESTART to play again", 350, 357);
  }

  if (state.message) {
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(39,43,123,.8)";
    ctx.font = "600 11px Arial";
    ctx.fillText(state.message, 794, 490, 300);
  }
}

function getMatches(grid, startCol, startRow, colour) {
  const stack = [[startCol, startRow]];
  const seen = new Set();
  const result = [];
  while (stack.length) {
    const [col, row] = stack.pop();
    const key = col + "," + row;
    if (seen.has(key)) continue;
    seen.add(key);
    if (row < 0 || row >= MAX_ROWS || col < 0 || col >= COLS || grid[row][col] !== colour) continue;
    result.push([col, row]);
    neighbours(col, row).forEach(([nextCol, nextRow]) => {
      if (!seen.has(nextCol + "," + nextRow)) stack.push([nextCol, nextRow]);
    });
  }
  return result;
}

function removeFloatingBubbles(grid) {
  const visited = new Set();
  const stack = [];
  for (let col = 0; col < COLS; col += 1) {
    if (grid[0][col] !== null) stack.push([col, 0]);
  }
  while (stack.length) {
    const [col, row] = stack.pop();
    const key = col + "," + row;
    if (visited.has(key)) continue;
    visited.add(key);
    if (!grid[row] || grid[row][col] === null || grid[row][col] === undefined) continue;
    neighbours(col, row).forEach(([nextCol, nextRow]) => {
      if (!visited.has(nextCol + "," + nextRow)) stack.push([nextCol, nextRow]);
    });
  }
  let removed = 0;
  for (let row = 0; row < MAX_ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      if (grid[row][col] !== null && grid[row][col] !== undefined && !visited.has(col + "," + row)) {
        grid[row][col] = null;
        removed += 1;
      }
    }
  }
  return removed;
}

function attachBubble(state) {
  const projectile = state.projectile;
  if (!projectile) return;
  let best = null;
  let bestDistance = Infinity;

  for (let row = 0; row < MAX_ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      if (state.grid[row][col] !== null) continue;
      const connected = row === 0 || neighbours(col, row).some(([nCol, nRow]) => (
        state.grid[nRow] && state.grid[nRow][nCol] !== null
      ));
      if (!connected) continue;
      const point = bubblePosition(col, row);
      const d = distance(projectile.x, projectile.y, point.x, point.y);
      if (d < bestDistance) {
        bestDistance = d;
        best = { col, row };
      }
    }
  }

  if (!best) {
    state.projectile = null;
    state.message = "No open place for that shot. Try restarting.";
    return;
  }

  state.grid[best.row][best.col] = projectile.colour;
  const matches = getMatches(state.grid, best.col, best.row, projectile.colour);
  if (matches.length >= 3) {
    matches.forEach(([col, row]) => { state.grid[row][col] = null; });
    const fallen = removeFloatingBubbles(state.grid);
    state.score += matches.length * 10 + Math.max(0, matches.length - 3) * 5 + fallen * 10;
    state.misses = 0;
    state.message = "Great shot! +" + (matches.length * 10 + Math.max(0, matches.length - 3) * 5 + fallen * 10) + " points.";
  } else {
    state.misses += 1;
    state.message = state.misses >= 5 ? "The bubbles are moving down. Find a match soon!" : "Try to connect three or more matching bubbles.";
  }

  state.shots += 1;
  state.projectile = null;
  state.colour = state.next.shift();
  state.next.push(randomColour());

  if (state.grid.every((row) => row.every((colour) => colour === null))) {
    state.gameOver = true;
    state.won = true;
    state.message = "You cleared the board!";
  }

  if (!state.gameOver && state.misses >= 5) {
    state.grid.pop();
    state.grid.unshift(Array.from({ length: COLS }, () => randomColour()));
    state.misses = 0;
    if (state.grid[MAX_ROWS - 1].some((colour) => colour !== null)) {
      state.gameOver = true;
      state.won = false;
    }
  }

  if (!state.gameOver) {
    for (let row = 0; row < MAX_ROWS; row += 1) {
      if (state.grid[row].some((colour) => colour !== null) && bubblePosition(0, row).y >= SHOOT_Y - 50) {
        state.gameOver = true;
        state.won = false;
      }
    }
  }
}

export default function BubbleShooter() {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    stateRef.current = freshGame();
    let animationFrame = 0;
    let disposed = false;

    function render() {
      if (disposed) return;
      const state = stateRef.current;
      if (state.projectile && !state.gameOver) {
        const ball = state.projectile;
        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.x < START_X) {
          ball.x = START_X;
          ball.vx = Math.abs(ball.vx);
        }
        if (ball.x > 650) {
          ball.x = 650;
          ball.vx = -Math.abs(ball.vx);
        }

        let collision = ball.y <= START_Y;
        for (let row = 0; row < MAX_ROWS && !collision; row += 1) {
          for (let col = 0; col < COLS; col += 1) {
            if (state.grid[row][col] === null) continue;
            const point = bubblePosition(col, row);
            if (distance(ball.x, ball.y, point.x, point.y) <= R * 2 - 1) {
              collision = true;
              break;
            }
          }
        }
        if (collision) attachBubble(state);
      }
      drawGame(ctx, state);
      animationFrame = window.requestAnimationFrame(render);
    }

    function mapPointer(event) {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) * WIDTH / rect.width;
      const y = (event.clientY - rect.top) * HEIGHT / rect.height;
      return {
        x: Math.max(0, Math.min(WIDTH, x)),
        y: Math.max(0, Math.min(HEIGHT, y))
      };
    }

    function onMove(event) {
      const point = mapPointer(event);
      stateRef.current.aim = point;
    }

    function shoot(event) {
      const state = stateRef.current;
      const point = mapPointer(event);
      state.aim = point;
      if (point.x > CONTROL_X) {
        if (point.x > 720 && point.x < 800 && point.y > 55 && point.y < 145) {
          stateRef.current = freshGame();
          return;
        }
        if (point.y > 150 && point.y < 210) {
          state.muted = !state.muted;
          state.message = state.muted ? "Sound effects are muted." : "Sound toggle changed. Visual play is enabled.";
          return;
        }
        if (point.y > 170 && point.y < 240 && point.x < 755) {
          state.help = !state.help;
          return;
        }
        if (point.y > 190 && point.y < 270 && point.x > 815) {
          state.message = "Choose another game from the left menu.";
          return;
        }
        return;
      }
      if (state.gameOver || state.projectile || point.y >= SHOOT_Y - 18) return;
      const dx = point.x - SHOOT_X;
      const dy = point.y - SHOOT_Y;
      if (dy >= -10) return;
      const length = Math.sqrt(dx * dx + dy * dy) || 1;
      state.help = false;
      state.projectile = {
        x: SHOOT_X,
        y: SHOOT_Y,
        vx: dx / length * 10,
        vy: dy / length * 10,
        colour: state.colour
      };
    }

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", shoot);
    render();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", shoot);
    };
  }, []);

  function restart() {
    stateRef.current = freshGame();
  }

  function toggleHelp() {
    if (stateRef.current) stateRef.current.help = !stateRef.current.help;
  }

  return (
    <section className="bubble-shooter-panel" id="bubble-shooter" aria-label="Playable Bubble Shooter">
      <div className="shooter-heading">
        <div><span className="shooter-eyebrow">CLASSIC ARCADE PUZZLE</span><h3>Bubble Shooter</h3><p>Aim, bounce, match three or more bubbles, and clear the board.</p></div>
        <span className="shooter-status"><i /> PLAY NOW</span>
      </div>
      <div className="shooter-canvas-wrap">
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} aria-label="Bubble Shooter game board. Move the pointer to aim, then click or tap inside the playfield to launch a bubble. Match at least three bubbles of the same colour." />
      </div>
      <div className="shooter-controls">
        <button type="button" className="shooter-control primary-control" onClick={restart}>↻ Restart game</button>
        <button type="button" className="shooter-control" onClick={toggleHelp}>? How to play</button>
        <span className="shooter-key-tip">Aim with mouse or touch · Tap the board to shoot</span>
      </div>
      <p className="shooter-instruction">Each shot launches the current bubble. Match at least three connected bubbles of the same colour to remove them. Unsupported bubbles fall for bonus points. After several misses, the ceiling advances, so plan your next shot.</p>
    </section>
  );
}
