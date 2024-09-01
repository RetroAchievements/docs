import "@nolebase/vitepress-plugin-git-changelog/client/style.css";
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";
import "./styles.css";

import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";

export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => [h(NolebaseHighlightTargetedHeading)],
    });
  },

  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin);
  },
};
