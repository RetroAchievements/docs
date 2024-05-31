import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RetroAchievements Docs",
  description: "The official documentation for RetroAchievements.",

  locales: {
    root: {
      label: "English",
      lang: "en_US",
    },
    es_ES: {
      label: "Español",
      lang: "es_ES",
    },
    pt_BR: {
      label: "Portugues",
      lang: "pt_BR",
    },
  },

  themeConfig: {
    siteTitle: "Docs",
    logo: "/logo.webp",
    outline: {
      level: [2, 4],
    },

    // TODO
    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "3QMK5TQHQC",
    //     apiKey: "a5d33ec313db5c671171ca35d3de3cea",
    //     indexName: "retroachievements-api-js",
    //   },
    // },

    // TODO
    // socialLinks: [
    //   {
    //     icon: "github",
    //     link: "https://github.com/RetroAchievements/api-docs",
    //   },
    //   {
    //     icon: "discord",
    //     link: "https://discord.gg/dq2E4hE",
    //   },
    // ],

    nav: [
      {
        text: "Guidelines",
        link: "/guidelines/users/retroachievements-manifesto",
      },
      {
        text: "General",
        link: "/general/index",
      },
      {
        text: "Achievement Development",
        link: "/developer-docs/index",
      },
    ],

    sidebar: {
      "/developer-docs": [
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
              text: "Set Development Roadmap",
              link: "/developer-docs/set-development-roadmap",
            },
            {
              text: "Achievement Templates",
              link: "/developer-docs/achievement-templates",
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
              text: "RATools",
              link: "/developer-docs/ratools",
            },
            {
              text: "Console Specific Tips",
              link: "/developer-docs/console-specific-tips",
            },
            {
              text: "Emulator Hotkeys for Developers",
              link: "/developer-docs/emulator-hotkeys-for-developers",
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
              text: "Value Definition",
              link: "/developer-docs/value-definition",
            },
            {
              text: "Condition Syntax",
              link: "/developer-docs/condition-syntax",
            },
          ],
        },
      ],

      "/general/": [
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
            {
              text: "Setup Guide",
              link: "/general/setup-guide",
            },
            {
              text: "Emulator Support and Issues",
              link: "/general/emulator-support-and-issues",
            },
            {
              text: "Ways to Contribute",
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
              text: "Working with DLC for the PlayStation Portable",
              link: "/general/tutorials/working-with-dlc-for-the-psp",
            },
          ],
        },
      ],

      // This sidebar gets displayed when a user
      // is on `guide` directory.
      "/guidelines/": [
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
              text: "Creating Entries",
              link: "/guidelines/developers/creating-entries",
            },
            {
              text: "Claims System",
              link: "/guidelines/developers/claims-system",
            },
            {
              text: "Handling Tickets",
              link: "/guidelines/developers/handling-tickets",
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
              text: "Naming Conventions",
              link: "/guidelines/content/naming-conventions",
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
      ],
    },

    // TODO
    // editLink: {
    //   pattern:
    //     "https://github.com/RetroAchievements/api-docs/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },

    footer: {
      message: "Released under the MIT license.",
      copyright: "Copyright © 2024–Present RetroAchievements.",
    },
  },
});
