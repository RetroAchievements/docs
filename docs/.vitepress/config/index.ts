import { GitChangelog, GitChangelogMarkdownSection } from "@nolebase/vitepress-plugin-git-changelog";
import { defineConfig } from "vitepress";

import { shared } from "./shared";
import { en } from "./en";

export default defineConfig({
  ...shared,
  ...en,

  themeConfig: {
    ...shared.themeConfig,
    ...en.themeConfig,
  },

  vite: {
    plugins: [
      GitChangelog({
        repoURL: () => "https://github.com/RetroAchievements/docs",
      }),

      GitChangelogMarkdownSection({
        sections: {
          disableContributors: true,
        },
      }),
    ],

    ssr: {
      noExternal: ["@nolebase/vitepress-plugin-highlight-targeted-heading"],
    },
  },
});
