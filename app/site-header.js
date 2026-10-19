"use client";

import { useState } from "react";

const FILTERS = [
  ["BUBBLES", "bubble"],
  ["PUZZLE", "puzzle"],
  ["WORD", "word"],
  ["BOARD", "board"],
  ["ARCADE", "arcade"],
  ["ALL GAMES", "all"]
];

export default function SiteHeader() {
  const [query, setQuery] = useState("");

  function chooseFilter(filter) {
    window.dispatchEvent(new CustomEvent("bubble-portal-filter", { detail: filter }));
    const library = document.getElementById("game-library");
    if (library) library.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submitSearch(event) {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("bubble-portal-search", { detail: query.trim() }));
    const library = document.getElementById("game-library");
    if (library) library.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Bubble Trio Pro home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand-wording"><b>BUBBLE<span>TRIO</span></b><small>ARCADE & PUZZLE GAMES</small></span>
        </a>
        <nav className="header-nav" aria-label="Game categories">
          {FILTERS.map(([label, filter]) => (
            <button key={filter} type="button" onClick={() => chooseFilter(filter)}>{label}</button>
          ))}
          <a href="#player-guide">GUIDE</a>
        </nav>
        <form className="header-search" onSubmit={submitSearch} role="search">
          <label className="visually-hidden" htmlFor="game-search">Search games</label>
          <input id="game-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search games..." />
          <button type="submit" aria-label="Search games">⌕</button>
        </form>
        <a className="header-cta" href="#game-board">▶ <span>Play</span></a>
      </div>
    </header>
  );
}