import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en",
  description: "Access comprehensive guides, tutorials, and developer resources for RetroAchievements. Learn how to enhance your retro gaming experience with custom achievements.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/general/": sidebarGeneral(),
      "/guidelines/": sidebarGuidelines(),
      "/developer-docs": sidebarDeveloperDocs(),
    },

    editLink: {
      pattern: "https://github.com/RetroAchievements/docs/edit/main/docs/:path",
      text: "Edit this page",
    },

    footer: {
      message: "Released under the GPL-3 License. There are no copyright-protected ROMs available for download on RetroAchievements.",
      copyright: `Copyright © 2012–${new Date().getFullYear()} RetroAchievements. All rights reserved.`,
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "General",
      link: "/general/index",
      activeMatch: "/general/",
    },
    {
      text: "Guidelines",
      link: "/guidelines/users/retroachievements-manifesto",
      activeMatch: "/guidelines/",
    },
    {
      text: "Achievement Development",
      link: "/developer-docs/index",
      activeMatch: "/developer-docs/",
    },
  ];
}

function sidebarGeneral(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "General",
      collapsed: false,
      items: [
        {
          text: "Index",
          link: "/general/index",
        },
        {
          text: "FAQ",
          link: "/general/faq",
        },
        // {
        //   text: "Setup Guide",
        //   link: "/general/setup-guide",
        // },
        {
          text: "Emulator Support",
          link: "/general/emulator-support-and-issues",
        },
        {
          text: "Hardcore Compliance Requirements",
          link: "/general/hardcore-compliance-requirements",
        },
        {
          text: "Standalone Support",
          link: "/general/standalone-support",
        },
        {
          text: "How RA Works",
          link: "/general/how-ra-works",
        },
        {
          text: "How to contribute if you're not a developer",
          link: "/general/ways-to-contribute",
        },
        {
          text: "RABot, the RA Discord Robot",
          link: "/general/rabot",
        },
        {
          text: "Events",
          link: "/general/events",
        },
        {
          text: "Overlay Themes",
          link: "/general/overlay-themes",
        },
        {
          text: "Useful Links",
          link: "/general/useful-links",
        },
        {
          text: "Contributing to the Docs",
          link: "/general/contributing-to-the-docs",
        },
        {
          text: "About Us",
          link: "/general/about-us",
        },
      ],
    },
    {
      text: "Teams",
      collapsed: false,
      items: [
        {
          text: "Quality Assurance",
          link: "/general/teams/qa-team",
        },
      ],
    },
    {
      text: "Tutorials",
      collapsed: false,
      items: [
        {
          text: "How to configure OBS Studio to see the popups",
          link: "/general/tutorials/how-to-configure-obs-studio",
        },
        {
          text: "Multi-Disc Games",
          link: "/general/tutorials/multi-disc-games",
        },
        {
          text: "Turbo Buttons",
          link: "/general/tutorials/turbo-button",
        },
        {
          text: "Working with DLC for the PlayStation Portable",
          link: "/general/tutorials/working-with-dlc-for-the-psp",
        },
        {
          text: "How to Play Subsets",
          link: "/general/tutorials/how-to-play-subsets",
        },
      ],
    },
  ];
}

function sidebarGuidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "User Guidelines",
      collapsed: false,
      items: [
        {
          text: "RetroAchievements Manifesto",
          link: "/guidelines/users/retroachievements-manifesto",
        },
        {
          text: "Users Code of Conduct",
          link: "/guidelines/users/code-of-conduct",
        },
        {
          text: "Global Leaderboard and Achievement Hunting Rules",
          link: "/guidelines/users/global-leaderboard-and-achievement-hunting-rules",
        },
      ],
    },
    {
      text: "Developer Guidelines",
      collapsed: false,
      items: [
        {
          text: "Developers Code of Conduct",
          link: "/guidelines/developers/code-of-conduct",
        },
        {
          text: "Claims System",
          link: "/guidelines/developers/claims-system",
        },
        {
          text: "Handling Tickets",
          link: "/guidelines/developers/handling-tickets",
        },
        {
          text: "Maintainership Role",
          link: "/guidelines/developers/maintainership",
        },
        {
          text: "Set and Achievement Contribution Credit",
          link: "/guidelines/developers/credit",
        },
      ],
    },
    {
      text: "Content Guidelines",
      collapsed: false,
      items: [
        {
          text: "Achievement Set Requirements",
          link: "/guidelines/content/achievement-set-requirements",
        },
        {
          text: "Unwelcome Concepts",
          link: "/guidelines/content/unwelcome-concepts",
        },
        {
          text: "Progression and Win Condition Guidelines",
          link: "/guidelines/content/progression-and-win-condition-guidelines",
        },
        {
          text: "Set Plagiarism",
          link: "/guidelines/content/set-plagiarism",
        },
        {
          text: "Game Info and Hub Guidelines",
          link: "/guidelines/content/game-info-and-hub-guidelines",
        },
        {
          text: "Genre Definitions",
          link: "/guidelines/content/genre-definitions",
        },
        {
          text: "Writing Policy",
          link: "/guidelines/content/writing-policy",
        },
        {
          text: "Badge and Icon Guidelines",
          link: "/guidelines/content/badge-and-icon-guidelines",
        },
        {
          text: "Code Notes",
          link: "/guidelines/content/code-notes",
        },
        {
          text: "Editing Leaderboards",
          link: "/guidelines/content/editing-leaderboards",
        },
        {
          text: "Achievement Set Revisions",
          link: "/guidelines/content/achievement-set-revisions",
        },
        {
          text: "Adding Additional Hashes",
          link: "/guidelines/content/adding-hashes",
        },
        {
          text: "Player Compatibility Testing",
          link: "/guidelines/content/player-compatibility-testing",
        },
        {
          text: "Games With Parallel Releases",
          link: "/guidelines/content/games-with-parallel-releases",
        },
        {
          text: "Achievements for ROM Hacks",
          link: "/guidelines/content/achievements-for-rom-hacks",
        },
        {
          text: "Subsets",
          link: "/guidelines/content/subsets",
        },
        {
          text: "Working with the Right ROM",
          link: "/guidelines/content/working-with-the-right-rom",
        },
        {
          text: "Hash Labels",
          link: "/guidelines/content/hash-labels",
        },
      ],
    },
  ];
}

function sidebarDeveloperDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Development",
      collapsed: false,
      items: [
        {
          text: "Index",
          link: "/developer-docs/index",
        },
        {
          text: "How to Become an Achievement Developer",
          link: "/developer-docs/how-to-become-an-achievement-developer",
        },
        {
          text: "Getting Started as an Achievement Developer",
          link: "/developer-docs/getting-started-as-an-achievement-developer",
        },
        {
          text: "Junior Developer Program",
          link: "/developer-docs/jr-dev-rules",
        },
        {
          text: "Am I Ready for Code Review?",
          link: "/developer-docs/am-i-ready-for-review",
        },
        {
          text: "Emulator Setup for Developers",
          link: "/developer-docs/emulator-setup-for-developers",
        },
        {
          text: "Game Identification",
          link: "/developer-docs/game-identification",
        },
        {
          text: "Achievement Design",
          link: "/developer-docs/achievement-design",
        },
        {
          text: "Achievement Scoring",
          link: "/developer-docs/achievement-scoring",
        },
        {
          text: "Difficulty Scale and Balance",
          link: "/developer-docs/difficulty-scale-and-balance",
        },
        {
          text: "Progression and Win Condition Typing",
          link: "/guidelines/content/progression-and-win-condition-guidelines",
        },
        {
          text: "Badge and Icon Creation",
          link: "/developer-docs/badge-and-icon-creation",
        },
        {
          text: "Achievement Development Overview",
          link: "/developer-docs/achievement-development-overview",
        },
        {
          text: "Minimum Required Versions for Logic Features",
          link: "/developer-docs/minimum-required-versions-for-logic-features",
        },
        {
          text: "Memory Inspector",
          link: "/developer-docs/memory-inspector",
        },
        {
          text: "Real Examples",
          link: "/developer-docs/real-examples",
        },
        {
          text: "Achievement Templates",
          link: "/developer-docs/achievement-templates",
        },
        {
          text: "Save and Password Protection",
          link: "/developer-docs/save-and-password-protection",
        },
        {
          text: "Tips and Tricks",
          link: "/developer-docs/tips-and-tricks",
        },
        {
          text: "Leaderboards",
          link: "/developer-docs/leaderboards",
        },
        {
          text: "Rich Presence",
          link: "/developer-docs/rich-presence",
        },
        {
          text: "Rollouts",
          link: "/developer-docs/rollouts",
        },
        {
          text: "DevQuests",
          link: "/developer-docs/devquests",
        },
        {
          text: "DevJam",
          link: "/developer-docs/devjam",
        },
        {
          text: "RATools",
          link: "/developer-docs/ratools",
        },
        {
          text: "Console Specific Tips",
          link: "/developer-docs/console-specific-tips",
        },
        {
          text: "Do I Really Need to Use Delta?",
          link: "/developer-docs/why-delta",
        },
        {
          text: "Emulator Hotkeys for Developers",
          link: "/developer-docs/emulator-hotkeys-for-developers",
        },
        {
          text: "Unsupported Emulators and Cores",
          link: "/developer-docs/unsupported-emulators-and-cores",
        },
        {
          text: "libretro core support",
          link: "/developer-docs/libretro-core-support",
        },
      ],
    },
    {
      text: "Flags",
      collapsed: false,
      items: [
        {
          text: "ResetIf",
          link: "/developer-docs/flags/resetif",
        },
        {
          text: "ResetNextIf",
          link: "/developer-docs/flags/resetnextif",
        },
        {
          text: "PauseIf",
          link: "/developer-docs/flags/pauseif",
        },
        {
          text: "AndNext and OrNext",
          link: "/developer-docs/flags/andnext-ornext",
        },
        {
          text: "AddSource",
          link: "/developer-docs/flags/addsource",
        },
        {
          text: "SubSource",
          link: "/developer-docs/flags/subsource",
        },
        {
          text: "AddHits and SubHits",
          link: "/developer-docs/flags/addhits-subhits",
        },
        {
          text: "AddAddress",
          link: "/developer-docs/flags/addaddress",
        },
        {
          text: "Measured",
          link: "/developer-docs/flags/measured",
        },
        {
          text: "Trigger",
          link: "/developer-docs/flags/trigger",
        },
        {
          text: "Remember",
          link: "/developer-docs/flags/remember",
        },
      ],
    },
    {
      text: "Additional Functionality",
      collapsed: false,
      items: [
        {
          text: "BitCount Size",
          link: "/developer-docs/bitcount-size",
        },
        {
          text: "Alt Groups",
          link: "/developer-docs/alt-groups",
        },
        {
          text: "Hit Counts",
          link: "/developer-docs/hit-counts",
        },
        {
          text: "Delta Values",
          link: "/developer-docs/delta-values",
        },
        {
          text: "Prior Values",
          link: "/developer-docs/prior-values",
        },
        {
          text: "Recall",
          link: "/developer-docs/recall",
        },
        {
          text: "Value Definition",
          link: "/developer-docs/value-definition",
        },
        {
          text: "Condition Syntax",
          link: "/developer-docs/condition-syntax",
        },
      ],
    },
  ];
}
