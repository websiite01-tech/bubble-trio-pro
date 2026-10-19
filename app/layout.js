import "./globals.css";

export const metadata = {
  title: {
    default: "Bubble Trio Pro — Free Online Mini Games",
    template: "%s | Bubble Trio Pro"
  },
  description: "Play original, free browser mini-games for puzzles, memory, focus and quick arcade challenges. No account or download required.",
  applicationName: "Bubble Trio Pro",
  category: "games",
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="header-inner">
              <a className="brand" href="/" aria-label="Bubble Trio Pro home">
                <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
                <span className="brand-wording"><b>Bubble Trio <em>Pro</em></b><small>PLAY A LITTLE SMARTER</small></span>
              </a>
              <nav className="header-nav" aria-label="Main navigation">
                <a href="/#games">Games</a>
                <a href="/#player-guide">Player guide</a>
                <a href="/about">About</a>
              </nav>
              <a className="header-cta" href="/#play">Play now <span aria-hidden="true">↗</span></a>
            </div>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <div className="footer-main">
              <div className="footer-brand"><a className="brand" href="/"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span className="brand-wording"><b>Bubble Trio <em>Pro</em></b><small>ORIGINAL BROWSER MINI-GAMES</small></span></a><p>A small corner for puzzles, focus, and quick browser-game breaks.</p></div>
              <div className="footer-links"><b>Explore</b><a href="/#games">Game library</a><a href="/#player-guide">How to play</a><a href="/about">About the project</a></div>
              <div className="footer-links"><b>Information</b><a href="/privacy">Privacy policy</a><a href="/contact">Contact</a><a href="/#faq">FAQs</a></div>
            </div>
            <div className="footer-bottom"><span>© {new Date().getFullYear()} Bubble Trio Pro. All rights reserved.</span><span>Made for enjoyable, mindful play <b>✦</b></span></div>
          </footer>
        </div>
      </body>
    </html>
  );
}