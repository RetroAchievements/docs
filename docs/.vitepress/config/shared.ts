import { defineConfig } from "vitepress";
// TODO search configs

export const shared = defineConfig({
  // Metadata
  title: "RetroAchievements",
  head: [["script", { src: "/assets/missing-page-redirector.js" }]],

  // Sitemap
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.retroachievements.org",
  },
  metaChunk: true,

  // Theme and Navigation
  appearance: "dark",
  themeConfig: {
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

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/RetroAchievements/docs",
      },
      {
        icon: "discord",
        link: "https://discord.gg/dq2E4hE",
      },
    ],
  },
});
