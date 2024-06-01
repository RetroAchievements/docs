const redirects = {
  "/RetroAchievements-Manifesto": "/guidelines/users/retroachievements-manifesto.html",
  "https://docs.retroachievements.org/Users-Code-of-Conduct/": "http://localhost:5173/guidelines/users/code-of-conduct.html",
  "https://docs.retroachievements.org/Global-Leaderboard-and-Achievement-Hunting-Rules/": "http://localhost:5173/guidelines/users/global-leaderboard-and-achievement-hunting-rules.html",
  "https://docs.retroachievements.org/Developers-Code-of-Conduct/": "http://localhost:5173/guidelines/developers/code-of-conduct.html",
  "https://docs.retroachievements.org/Creating-Entries/": "http://localhost:5173/guidelines/developers/creating-entries.html",
  "https://docs.retroachievements.org/Claims-System/": "http://localhost:5173/guidelines/developers/claims-system.html",
  "https://docs.retroachievements.org/Handling-Tickets/": "http://localhost:5173/guidelines/developers/handling-tickets.html",
  "https://docs.retroachievements.org/Achievement-Set-Requirements/": "http://localhost:5173/guidelines/content/achievement-set-requirements.html",
  "https://docs.retroachievements.org/Unwelcome-Concepts/": "http://localhost:5173/guidelines/content/unwelcome-concepts.html",
  "https://docs.retroachievements.org/Progression-and-Win-Condition-Guidelines/": "http://localhost:5173/guidelines/content/progression-and-win-condition-guidelines.html",
  "https://docs.retroachievements.org/Badge-and-Icon-Creation/": "http://localhost:5173/guidelines/content/badge-and-icon-guidelines.html",
  "https://docs.retroachievements.org/Achievement-Development-Overview/": "http://localhost:5173/developer-docs/achievement-development-overview.html",
  "https://docs.retroachievements.org/Set-Plagiarism/": "http://localhost:5173/guidelines/content/set-plagiarism.html",
  "https://docs.retroachievements.org/Naming-Conventions/": "http://localhost:5173/guidelines/content/naming-conventions.html",
  "https://docs.retroachievements.org/Writing-Policy/": "http://localhost:5173/guidelines/content/writing-policy.html",
  "https://docs.retroachievements.org/Code-Notes/": "http://localhost:5173/guidelines/content/code-notes.html",
  "https://docs.retroachievements.org/Editing-Leaderboards/": "http://localhost:5173/guidelines/content/editing-leaderboards.html",
  "https://docs.retroachievements.org/Achievement-Set-Revisions/": "http://localhost:5173/guidelines/content/achievement-set-revisions.html",
  "https://docs.retroachievements.org/Achievements-for-ROM-hacks/": "http://localhost:5173/guidelines/content/achievements-for-rom-hacks.html",
  "https://docs.retroachievements.org/Subsets/": "http://localhost:5173/guidelines/content/subsets.html",
  "https://docs.retroachievements.org/Working-with-the-Right-ROM/": "http://localhost:5173/guidelines/content/working-with-the-right-rom.html",
  "https://docs.retroachievements.org/Hash-Labels/": "http://localhost:5173/guidelines/content/hash-labels.html",
  "https://docs.retroachievements.org/FAQ/": "http://localhost:5173/general/faq.html",
  "https://docs.retroachievements.org/Setup-Guide/": "http://localhost:5173/general/setup-guide.html",
  "https://docs.retroachievements.org/Emulator-Support-and-Issues/": "http://localhost:5173/general/emulator-support-and-issues.html",
  "https://docs.retroachievements.org/Ways-to-Contribute/": "http://localhost:5173/general/ways-to-contribute.html",
  "https://docs.retroachievements.org/RABot%2C-the-RA-Discord-Robot/": "http://localhost:5173/general/rabot.html",
  "https://docs.retroachievements.org/Events/": "http://localhost:5173/general/events.html",
  "https://docs.retroachievements.org/Overlay-Themes/": "http://localhost:5173/general/overlay-themes.html",
  "https://docs.retroachievements.org/Useful-Links/": "http://localhost:5173/general/useful-links.html",
  "https://docs.retroachievements.org/Contributing-with-the-docs/": "http://localhost:5173/general/contributing-to-the-docs.html",
  "https://docs.retroachievements.org/About-Us/": "http://localhost:5173/general/about-us.html",
  "https://docs.retroachievements.org/How-to-configure-OBS-Studio-to-see-the-popups/": "http://localhost:5173/general/tutorials/how-to-configure-obs-studio.html",
  "https://docs.retroachievements.org/Multi-Disc-Games-Tutorial/": "http://localhost:5173/general/tutorials/multi-disc-games.html",
  "https://docs.retroachievements.org/Working-with-DLC-for-the-PlayStation-Portable/": "http://localhost:5173/general/tutorials/working-with-dlc-for-the-psp.html",
};

function handleRedirects() {
  const { pathname } = window.location;
  if (redirects[pathname]) {
    window.location.replace(redirects[pathname]);
  }
}

handleRedirects();
