import { GitChangelog, GitChangelogMarkdownSection } from "@nolebase/vitepress-plugin-git-changelog";
import { defineConfig } from "vitepress";

import { shared } from "./shared";
import { en } from "./en";
import { pt } from "./pt";
import { es } from "./es";

export default defineConfig({
  ...shared,

  locales: {
    root: { label: "English", ...en },
    pt: { label: "Português", ...pt },
    es: { label: "Español", ...es },
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
