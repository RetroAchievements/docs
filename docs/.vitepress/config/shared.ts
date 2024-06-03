import { type HeadConfig, defineConfig } from "vitepress";
// TODO search configs

export const shared = defineConfig({
  // Metadata
  title: "RetroAchievements",

  // SEO
  /**
   * Generate social media metadata tags at build time.
   * Note: this does not run when using the development server,
   * so it must be tested by doing a full build with `npm run build`.
   */
  transformHead({ pageData }) {
    // Get the raw title and description from frontmatter,
    // rather than the title which has the site suffix
    const { title: fmTitle, description: fmDescription } = pageData.frontmatter;

    const title = fmTitle ?? pageData.title;
    const description = fmDescription ?? pageData.description;

    // New meta tags to add to the <head>
    const tags: HeadConfig[] = [];

    // Add opengraph tags
    tags.push(["meta", { property: "og:title", content: title }]);
    tags.push(["meta", { property: "og:description", content: description }]);

    // Add twitter tags
    tags.push(["meta", { name: "twitter:site", content: "@RetroAchievements" }]);
    tags.push(["meta", { name: "twitter:card", content: "summary_large_image" }]);
    tags.push(["meta", { name: "twitter:title", content: title }]);
    if (fmDescription) {
      tags.push(["meta", { name: "twitter:description", content: description }]);
    }

    return tags;
  },

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
