// EDITABLE GAME CONTENT
// Change game descriptions, level names, difficulty and written help here.
// The play engines live in app/bubble-shooter.js and app/game-portal.js.
// Keep exactly three entries in GAMES unless you intend to change the portal layout.

export const GAMES = [
  {
    id: "bubble-shooter",
    name: "Bubble Shooter",
    short: "Classic aim & match",
    category: "BUBBLES",
    icon: "●",
    cover: "cover-bubble-shooter",
    description: "Aim carefully, bank shots off the walls, match three or more bubbles, and clear every level.",
    tagline: "Aim. Match. Clear.",
    instructions: [
      "Move your mouse or finger to aim the launcher.",
      "Click or tap the playfield to fire the current bubble.",
      "Connect at least three bubbles of the same colour to remove them.",
      "Unsupported bubbles fall for bonus points. Clear the whole board to unlock the next level."
    ]
  },
  {
    id: "bubble-puzzle",
    name: "Bubble Pop Puzzle",
    short: "Plan moves & score",
    category: "PUZZLE",
    icon: "✦",
    cover: "cover-bubble-puzzle",
    description: "Choose connected groups, manage a move limit, and reach each puzzle's target score.",
    tagline: "Think first. Pop smart.",
    instructions: [
      "Select a connected group of three or more same-colour bubbles.",
      "Each valid group scores points. Larger groups earn bigger bonuses.",
      "Reach the target score before you run out of moves.",
      "Later levels have more colours, higher targets and tighter move limits."
    ]
  },
  {
    id: "memory-match",
    name: "Memory Match",
    short: "Train your memory",
    category: "BRAIN",
    icon: "▦",
    cover: "cover-memory-match",
    description: "Remember symbols, find every pair, and finish each increasingly large card layout.",
    tagline: "Look. Remember. Match.",
    instructions: [
      "Choose two face-down cards to reveal their symbols.",
      "A matching pair stays open; a mismatch turns back over after a short pause.",
      "Find every pair to complete the level.",
      "Later levels add more pairs and increase the challenge."
    ]
  }
];

const LEVEL_NAMES = [
  "First Flight", "Easy Clusters", "Colour Corner", "Open Lanes", "Pocket Play",
  "Wall Bank", "Split Formation", "Double Bridge", "Colour Switch", "Crossfire",
  "High Ceiling", "Narrow Window", "Twin Wings", "Jagged Edge", "Six Shades",
  "Precision Run", "Offset Wall", "Deep Field", "Triple Pocket", "Hard Angles",
  "Colour Storm", "Tight Formation", "Long Clear", "Hidden Lanes", "Master Board",
  "Expert Bounce", "Dense Clusters", "Final Approach", "Grand Challenge", "Bubble Champion"
];

const POP_NAMES = [
  "Warm-up", "Three in a Row", "Corner Groups", "Chain Reaction", "Open Space",
  "Colour Focus", "Move Economy", "Big Cluster", "Five-Step Plan", "Pocket Clear",
  "Switch It Up", "Score Chase", "Dense Board", "Careful Clicks", "Bonus Hunter",
  "Tight Budget", "Colour Mix", "Combo Builder", "Small Window", "Fast Thinker",
  "Deep Strategy", "Few Moves", "Target Master", "Cluster Storm", "Precision Pop",
  "Double Target", "Busy Board", "Final Puzzle", "Expert Pop", "Puzzle Champion"
];

const MEMORY_NAMES = [
  "First Pairs", "Symbol Spotter", "Six Pairs", "Quick Recall", "Pattern Keeper",
  "Eight Pairs", "Sharp Eyes", "Recall Route", "Ten Pairs", "No Guessing",
  "Picture Memory", "Longer Look", "Twelve Pairs", "Focus Mode", "Recall Expert",
  "Fourteen Pairs", "Steady Mind", "Hidden Rhythm", "Sixteen Pairs", "Memory Sprint",
  "Deep Recall", "No Distraction", "Eighteen Pairs", "Pattern Pro", "Long Game",
  "Recall Marathon", "Perfect Focus", "Final Recall", "Memory Master", "Grand Memory"
];

const POP_TARGETS = [
  100, 130, 160, 190, 220, 250, 280, 310, 340, 370,
  400, 430, 460, 490, 520, 560, 600, 640, 680, 720,
  760, 800, 840, 880, 920, 970, 1020, 1080, 1140, 1200
];

const POP_MOVES = [
  18, 18, 19, 19, 20, 20, 20, 21, 21, 22,
  22, 22, 23, 23, 23, 24, 24, 24, 25, 25,
  25, 26, 26, 26, 27, 27, 27, 28, 28, 30
];

const MEMORY_PAIRS = [
  6, 6, 6, 8, 8, 8, 10, 10, 10, 10,
  12, 12, 12, 12, 14, 14, 14, 14, 16, 16,
  16, 16, 18, 18, 18, 18, 18, 18, 18, 18
];

const MEMORY_THEMES = [
  "Stars", "Geometric", "Botanical", "Night Sky", "Lucky Charms",
  "Ocean", "Garden", "Celestial", "Bright Shapes", "Hidden Symbols",
  "Nature", "Midnight", "Crystal", "Flower Field", "Dreamscape",
  "Constellation", "Wild Garden", "Moonlight", "Royal Symbols", "Deep Space",
  "Prismatic", "Forest", "Galaxy", "Orbits", "Aurora",
  "Enchanted", "Spectrum", "Starlight", "Infinite Sky", "Grand Finale"
];

export const BUBBLE_LEVELS = LEVEL_NAMES.map((name, index) => ({
  level: index + 1,
  name,
  rows: Math.min(5 + Math.floor(index / 3), 14),
  colours: Math.min(3 + Math.floor(index / 5), 6),
  pattern: ["full", "wings", "valley", "islands", "arch", "cross"][index % 6],
  missLimit: index < 5 ? 6 : index < 15 ? 5 : 4,
  goal: "Clear every bubble",
  hint: [
    "Start by matching a large group near the bottom edge.",
    "Look for a wall-bounce angle to reach the side cluster.",
    "Clear the support beneath a large group to drop extra bubbles.",
    "Use the next-bubble queue to plan a shot ahead.",
    "Prioritise matches that open a clean path to the ceiling."
  ][index % 5]
}));

export const POP_LEVELS = POP_NAMES.map((name, index) => ({
  level: index + 1,
  name,
  targetScore: POP_TARGETS[index],
  moves: POP_MOVES[index],
  colours: Math.min(3 + Math.floor(index / 5), 6),
  minimumGroup: 3,
  bonus: 5 + Math.floor(index / 6) * 2,
  goal: "Reach " + POP_TARGETS[index] + " points in " + POP_MOVES[index] + " moves",
  hint: [
    "Start with the biggest group that is easy to reach.",
    "A group one bubble larger earns a useful score bonus.",
    "Inspect the board before spending a move.",
    "Choose groups that open new clusters and spaces.",
    "Do not waste turns on pairs; a valid group needs three."
  ][index % 5]
}));

export const MEMORY_LEVELS = MEMORY_NAMES.map((name, index) => ({
  level: index + 1,
  name,
  pairs: MEMORY_PAIRS[index],
  theme: MEMORY_THEMES[index],
  goal: "Find all " + MEMORY_PAIRS[index] + " pairs",
  hint: [
    "Scan the board row by row to build a mental map.",
    "Say each symbol's position to yourself as you reveal it.",
    "When you find a pair, use the freed space to scan nearby cards.",
    "Avoid random taps: recall the symbol and its position.",
    "Pause briefly after a mismatch and remember both locations."
  ][index % 5]
}));

export const PLAYER_FAQS = [
  {
    question: "How do I unlock the next level?",
    answer: "Finish the current level's objective. Bubble Shooter requires you to clear the board, Bubble Pop Puzzle requires the target score within the move limit, and Memory Match requires every pair. Completed progress is saved in this browser, so the next level remains available on this device."
  },
  {
    question: "Why can't I click a locked level?",
    answer: "Levels unlock in order so the difficulty builds gradually. Finish the previous level to unlock the next one. This keeps the first playthrough structured, while already unlocked levels remain available from the level selector."
  },
  {
    question: "Does progress sync between phones and computers?",
    answer: "Not yet. Progress is stored locally in your browser. Clearing browser site data, changing browsers, or using another device may reset or separate your unlocks. Cloud accounts and synchronised scores are not included in this version."
  },
  {
    question: "How are Bubble Shooter points calculated?",
    answer: "The current game awards 10 base points per bubble in a removed group, a size bonus for each bubble above the three-bubble minimum, and 10 points for each unsupported bubble that falls after a match. Larger and better-planned clears can earn more points."
  },
  {
    question: "How does Bubble Pop Puzzle work?",
    answer: "Select a connected group of at least three bubbles of the same colour. A valid move removes that group and adds points. Reach the level target before using all available moves. Groups that are too small do not count as a move."
  },
  {
    question: "How does Memory Match work?",
    answer: "Reveal two cards per turn. If their symbols match, they stay revealed. If they do not match, they turn back over after a short pause. Find all pairs to win the level. Later levels have larger boards and require more careful recall."
  },
  {
    question: "Can I restart a level?",
    answer: "Yes. Use the Restart button within the active game. Restarting resets that level's current score, moves, and board but does not remove levels you have already unlocked."
  },
  {
    question: "Can I play on a mobile phone?",
    answer: "Yes. The page stacks its columns on smaller screens. Bubble Shooter supports touch aiming and taps, while the puzzle and memory boards use touch-friendly buttons. Landscape mode may give the shooter more room."
  },
  {
    question: "Are the advertisement boxes live ads?",
    answer: "No. They are clearly labelled placeholders with reserved space to help reduce layout movement. No live AdSense ad is loaded in this build. Real ads should only be added after publisher configuration and a review of all applicable requirements."
  },
  {
    question: "Does the site guarantee Google AdSense approval?",
    answer: "No website template can guarantee approval. Review the live site for original value, working navigation, useful content, privacy disclosures, legitimate traffic, and current Google policies. The publisher should use their own AdSense account information and never invent an ads.txt publisher ID."
  },
  {
    question: "Can I suggest a level or report a broken game?",
    answer: "Yes. Use the Contact page's project issue link to describe the level number, what you expected, and what actually happened. Avoid placing private information or passwords in public issue reports."
  },
  {
    question: "Can I edit the site's words and levels later?",
    answer: "Yes. The file app/game-content.js is the main editable source for the three game descriptions, all 30 level profiles, hints, objectives, and common questions. app/page.js contains the long-form guide. ADSENSE_READINESS.md lists checks to revisit before advertising goes live."
  }
];

export const EDITORIAL_GUIDE = [
  {
    id: "bubble-shooter-guide",
    title: "Bubble Shooter: how to aim and clear the board",
    paragraphs: [
      "Bubble Shooter is the featured game on Bubble Trio Pro. The launcher holds the current bubble and the preview row shows upcoming colours. Move your pointer or finger across the playfield to set the angle, then click or tap to launch. A bubble attaches when it reaches the top or contacts the existing formation. The goal is to create a connected group of three or more bubbles of the same colour.",
      "Before taking a shot, look at the colour you have now and the colours coming next. A direct shot is often best when it reaches a large cluster, but a bank shot off the left or right wall can reach a group hidden behind another colour. When a match disappears, bubbles that no longer have a connection to the top can fall too. Those unsupported bubbles can provide a valuable bonus, so check what is holding the formation together before firing.",
      "The 30 levels grow more demanding through larger starting formations, more colours, different silhouettes, and fewer tolerated missed shots. Early levels teach aim and colour grouping. Middle levels introduce split formations and narrow lanes. The final stretch expects the player to use wall bounces, prepare future matches, and choose clears that reduce the formation rather than simply adding to it. If a level fails, restart it and test a different angle rather than repeating the same shot."
    ]
  },
  {
    id: "bubble-puzzle-guide",
    title: "Bubble Pop Puzzle: plan each move",
    paragraphs: [
      "Bubble Pop Puzzle is the more deliberate companion game. It presents a compact grid where you select an orthogonally connected group of at least three bubbles of the same colour. Every valid clear adds to the score; the group-size bonus rewards players who spot a cluster of four, five, or more instead of taking the first small match they see. The objective is to reach a displayed target before the move counter reaches zero.",
      "The board is not only a colour test. It is a move-economy challenge. Every valid group changes the remaining bubbles and refills the empty cells, so the best option now may also improve a later cluster. Read the target and move budget at the start of a level. If you are comfortably ahead of the target, select groups that open up the board. If you are behind, prioritise the largest available group and use the built-in hint to think about the next choice.",
      "Across 30 levels, the game increases its palette, score targets, and board pressure while keeping the minimum match rule consistent. A pair does not count as a match. Clicking isolated bubbles will not spend a move, which allows players to inspect the board without penalty. Once the target is reached, the game announces completion and unlocks the next challenge."
    ]
  },
  {
    id: "memory-match-guide",
    title: "Memory Match: build a reliable recall method",
    paragraphs: [
      "Memory Match tests observation rather than speed. Choose one hidden card, note its symbol and location, then reveal a second card. A correct pair remains visible. A mismatch turns face down after a short pause, giving you a chance to store the two positions in memory. Continue until every pair on the board has been found. The game tracks turns and matched pairs to make your progress clear.",
      "A practical strategy is to scan the board in a repeatable order, such as left to right across each row. When a symbol appears, connect it to a location in your head instead of remembering only the symbol. After the first few turns, use known positions to complete pairs and learn new cards. Do not click too quickly through a mismatch; the extra second you spend remembering locations can reduce future turns.",
      "The 30 levels increase the number of pairs and change the symbol theme as the board grows. The earlier levels teach the reveal-and-recall loop. Intermediate levels ask you to remember more locations across more turns. The final levels contain eighteen pairs and reward a consistent scanning strategy. A level is complete when every pair has been found, and the next level then becomes available."
    ]
  }
];
