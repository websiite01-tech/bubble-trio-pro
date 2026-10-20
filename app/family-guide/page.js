import { siteConfig } from "../site-config";

export const metadata = {
  title: "Family Play Guide — Bubble Trio Pro",
  description: "A practical family guide to Bubble Shooter, Bubble Pop Puzzle and Memory Match, with controls, tips, privacy notes, and advice for supervised play."
};

export default function FamilyGuidePage() {
  return (
    <article className="content-page longform-page">
      <span className="eyebrow">FAMILY PLAY GUIDE</span>
      <h1>A simple guide for players, parents, and families</h1>
      <p className="page-lead">Welcome to Bubble Trio Pro. I am Sonu, a student and beginner web developer in Lucknow. I built this independent project while learning how to create a website, explain game rules, and make interactive puzzles. This guide helps new players understand the three games and helps parents or caregivers know what the current site does—and does not—offer.</p>

      <h2>What is Bubble Trio Pro?</h2>
      <p>Bubble Trio Pro is a browser-game project with three playable experiences: Bubble Shooter, Bubble Pop Puzzle, and Memory Match. Each game has thirty level profiles, making ninety level challenges across the site. The games run in the website rather than requiring a separate game download or player account. Players can choose an available level, read a hint, restart a round, and try a different approach when a puzzle does not go as expected.</p>
      <p>The portal is a personal student learning project, not an official university service or a product endorsed by a school, university, Google, or another game publisher. The games are intended for casual entertainment and for practising how the controls work. They are not a formal educational curriculum, a medical service, or a promise that a player will improve intelligence, school marks, memory ability, or any other real-world outcome.</p>

      <h2>Game one: Bubble Shooter</h2>
      <h3>The goal</h3>
      <p>Bubble Shooter shows a formation of coloured bubbles and a launcher with the next bubble to fire. The player aims toward a matching group and tries to connect at least three bubbles of the same colour. When a valid group is made, those bubbles disappear. Bubbles that are no longer supported by the remaining formation may fall as well, adding a chance for a larger clear. The level ends when the board is cleared or the game reaches its loss condition.</p>
      <h3>How to play</h3>
      <p>On a computer, move the mouse to set the aim and click the playfield to fire. On a touch screen, move your finger to point the shot and tap when the direction looks right. The line helps estimate the path. A shot can rebound from the left or right wall, so a direct path is not always the only route to a group. After firing, watch where the bubble attaches and how the formation changes before deciding on the next move.</p>
      <h3>Beginner tips</h3>
      <p>Check the current bubble colour first. Look for a connected group that colour can join, rather than aiming only at the biggest shape you can see. Think about what is holding the upper bubbles in place; a group that removes the support under several bubbles may be more useful than a small match that leaves the rest of the board unchanged. Use the next-bubble queue as a planning aid, keep an eye on the miss count, and restart when you want to try a different strategy.</p>

      <h2>Game two: Bubble Pop Puzzle</h2>
      <h3>The goal</h3>
      <p>Bubble Pop Puzzle is a grid-based game about choosing connected groups. The objective is to reach the score target shown for the level before using all available moves. A valid group has at least three connected bubbles of the same colour. A pair or a single bubble is not a valid group. The score target, colour count, move budget, and hint vary through the levels.</p>
      <h3>How to make a move</h3>
      <p>Look across the board and identify bubbles that touch vertically or horizontally in the same colour. Select a group of three or more to pop it. A larger group can earn more points, so it is worth comparing more than one option before spending a move. After a successful clear, the board changes; take a moment to look again, because the best next group may be different from the one you saw before the move.</p>
      <h3>Beginner tips</h3>
      <p>Read the target and move count before starting. A small group is useful if it helps reach the target, but it can be a poor choice when a larger group is available and only a few moves remain. If the selected group is too small, the game explains that it is not valid. Use the hint as a suggestion, not as a promise that there is only one correct sequence. If you run out of moves, restart the level and compare the choices you made in the previous attempt.</p>

      <h2>Game three: Memory Match</h2>
      <h3>The goal</h3>
      <p>Memory Match has hidden cards arranged in a grid. Each symbol appears in a pair. Reveal two cards at a time. If the symbols match, the pair stays visible. If the symbols differ, the cards turn face down after a short pause. Find every pair to complete the level. The later levels contain more pairs and require remembering more positions.</p>
      <h3>How to build a steady strategy</h3>
      <p>Choose a consistent way to scan the cards, such as moving left to right along each row. When a card is revealed, remember both its symbol and its position. If it does not match the second card, try to remember where both cards are so you can use that information later. When you find a pair, use the next turn to uncover new information unless a previously seen symbol lets you complete another pair.</p>
      <h3>Beginner tips</h3>
      <p>Speed is not always helpful. Pause long enough to look at the symbol before selecting the second card. When a mismatch appears, pay attention to both locations rather than tapping quickly to move on. The interface tracks turns and pairs found. If you lose track of locations, restart and use a simple scanning pattern instead of guessing randomly.</p>

      <h2>Understanding levels and progress</h2>
      <p>Each game has thirty levels arranged from introductory challenges to more demanding layouts. The level picker shows which levels are available and which are locked. Completing a level unlocks the next one. Bubble Shooter changes the starting board shape, row count, colour variety and missed-shot allowance. Bubble Pop Puzzle changes score targets, moves and colours. Memory Match increases the number of pairs and changes the symbol themes.</p>
      <p>Unlocked-level progress is stored in local storage in the browser you are using. This is a small record held on the device, not an online account. It does not synchronise across phones, computers, browsers, or different user profiles. If you clear site data or use private browsing, you may lose your unlock record. The current board and score are temporary and restart when a round is restarted or the page is refreshed. There is no cloud save or public score leaderboard in this version.</p>

      <h2>Family guidance and sensible play</h2>
      <p>These games are designed to be straightforward to start, but parents and caregivers should decide whether a website is appropriate for a particular child and remain involved in younger children's online activity. Help a new player read the instructions, explain the controls, and show how to leave the game or return to the home page. Encourage players to take breaks and balance screen time with sleep, schoolwork, exercise, outdoor play, reading, and other activities.</p>
      <p>The game pages do not require a login and the current game implementation does not provide player chat, public profiles, friend requests, payment flows, user uploads, or an online leaderboard. However, the wider website contains external links such as the public GitHub issue tracker and third-party policy resources. Parents should supervise children when opening external sites. A public issue tracker is not a private support inbox; children should not post their full name, age, school, address, photographs, passwords, or contact details in a public report.</p>
      <p>Bubble Trio Pro currently shows empty spaces labelled “Advertisement” as layout placeholders. They are not live advertising units and no Google AdSense ad script is loaded in this version. If advertising is added later, the site owner must review child-directed advertising obligations, privacy disclosures, and relevant consent or ad-treatment controls before enabling ads. The description of possible future advertising in the policies does not mean ads are currently active.</p>
      <p>For a family using the site, the practical approach is simple: play the games directly, avoid posting personal information on linked services, supervise children when they open external links, and contact the site owner if an unexpected screen, request, or confusing element appears. The owner should keep the privacy policy and contact information current as the project changes.</p>

      <h2>Privacy and contact information</h2>
      <p>The current portal does not ask players to create an account to play. Unlocked levels are saved in the local browser. Hosting providers may still process normal technical request and security data as part of delivering a website. The privacy and cookie pages explain the current browser storage and the disclosures that would need to be updated if analytics, advertising, a contact form, or another service were introduced.</p>
      <p>This project is maintained by {siteConfig.creatorName}, a {siteConfig.creatorRole} in {siteConfig.city}. For questions about the site or to report a bug, visit the <a className="inline-link" href="/contact">Contact page</a>. The public project email is <a className="inline-link" href={"mailto:" + siteConfig.contactEmail}>{siteConfig.contactEmail}</a>. Please do not email passwords or other sensitive information. Public bug reports should be limited to information you are comfortable sharing openly.</p>

      <h2>Frequently asked questions</h2>
      <h3>Do I need to install a game or create an account?</h3>
      <p>No account is needed for the current browser game experience. Open the page, choose one of the three games, read the instructions, and start a level. Progress is kept locally in the same browser rather than connected to an account.</p>
      <h3>Can I play on a phone or tablet?</h3>
      <p>The layout adapts to smaller screens. Bubble Shooter uses touch aiming and taps, while Bubble Pop Puzzle and Memory Match use on-screen buttons. If the playfield feels cramped, try landscape orientation or a larger screen.</p>
      <h3>Are all levels available at the beginning?</h3>
      <p>No. The levels unlock in order. Complete the current level objective to make the next level available. Levels already unlocked can be replayed from the level picker in that browser.</p>
      <h3>Will progress sync to another device?</h3>
      <p>No. Local browser progress does not sync. Using a different browser or device starts with its own local progress record.</p>
      <h3>Are these games an educational or medical programme?</h3>
      <p>No. They are casual browser games and a student development project. They are not a formal course, assessment, treatment, or guarantee of learning or health outcomes.</p>
      <h3>Are live ads shown?</h3>
      <p>No live ads are loaded in the current build. The labelled ad spaces are placeholders only. The site owner must configure real advertising and update all relevant disclosures before serving ads.</p>

      <h2>About the creator</h2>
      <p>My name is Sonu. I am learning web development and building Bubble Trio Pro to improve my skills step by step. I want the project to be clear, enjoyable, and useful to the people who visit it. I am still learning, so I welcome specific feedback about broken controls, unclear rules, level balance, mobile layout or accessibility. The project is an independent learning effort and is not presented as an official university website.</p>
      <p>Thank you for taking time to learn the rules before playing. A good game session begins with understanding the objective, making deliberate choices, and enjoying the challenge at your own pace.</p>
    </article>
  );
}