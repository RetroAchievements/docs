import { defineConfig } from "vitepress";

/**
 * Try your best not to have any sidebar page titles wrap to a 2nd line.
 */

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RetroAchievements Docs",
  description: "The official documentation for RetroAchievements.",

  themeConfig: {
    siteTitle: "Docs",
    logo: "/logo.webp",
    aside: false,

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
    ],

    sidebar: {
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
              text: "Progression and Win Condition Typing",
              link: "/guidelines/content/progression-and-win-condition-typing",
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
              text: "Working with the Right ROm",
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
