import { type HeadConfig, defineConfig } from "vitepress";

export const shared = defineConfig({
  // Metadata
  title: "RetroAchievements",
  titleTemplate: ":title | RetroAchievements Docs",

  // SEO
  head: getHeadTags(),

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

  transformHead: (context) => {
    const tags: HeadConfig[] = [
      ["meta", { name: "twitter:title", content: context.title }],
      ["meta", { name: "twitter:description", content: context.description }],
    ];

    return tags;
  }
});

function getHeadTags(): HeadConfig[] {
  const tags: HeadConfig[] = [
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@RetroCheevos" }],
  ];

  tags.push(["script", { src: "https://plausible.retroachievements.org/psa3.js", defer: "", "data-domain": "docs.retroachievements.org" }]);

  return tags;
}
