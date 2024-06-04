import { type HeadConfig, defineConfig } from "vitepress";

import { search as esSearch } from "./es";
import { search as ptSearch } from "./pt";

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

    // It's okay for these keys to be publicly exposed.
    // As reference, see the official VitePress docs config: https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config/shared.ts#L57
    search: {
      provider: "algolia",
      options: {
        appId: "ZZXWI82V1J",
        apiKey: "2b510f2ef4d79811fe1f6dd437c595e1",
        indexName: "retroachievements",
        locales: { ...esSearch, ...ptSearch },
      },
    },

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
