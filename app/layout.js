import "./globals.css";
import SiteHeader from "./site-header";
import { siteConfig } from "./site-config";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.siteUrl || (productionHost ? "https://" + productionHost : "https://bubble-trio-pro.vercel.app");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bubble Shooter — Play Free Online | Bubble Trio Pro",
    template: "%s | Bubble Trio Pro"
  },
  description: "Play the original Bubble Shooter and explore free browser-based arcade and puzzle games at Bubble Trio Pro.",
  applicationName: "Bubble Trio Pro",
  category: "games",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <div className="footer-main">
              <div className="footer-brand">
                <a className="brand" href="/" aria-label="Bubble Trio Pro home">
                  <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
                  <span className="brand-wording"><b>BUBBLE<span>TRIO</span></b><small>ARCADE & PUZZLE GAMES</small></span>
                </a>
                <p>Original browser games, clear rules, and helpful guides for every player.</p>
              </div>
              <div className="footer-links"><b>Explore</b><a href="/#game-library">Game library</a><a href="/#player-guide">How to play</a><a href="/about">About the project</a></div>
              <div className="footer-links"><b>Policies & contact</b><a href="/privacy">Privacy policy</a><a href="/cookie-policy">Cookie policy</a><a href="/terms">Terms of use</a><a href="/advertising-disclosure">Advertising disclosure</a><a href="/disclaimer">Disclaimer</a><a href="/content-standards">Content standards</a><a href="/corrections">Corrections policy</a><a href="/accessibility">Accessibility</a><a href="/contact">Contact</a></div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Bubble Trio Pro. All rights reserved.</span>
              <span>For enjoyable, mindful play <b>✦</b></span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}