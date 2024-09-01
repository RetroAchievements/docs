import DefaultTheme from "vitepress/theme";
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";

import "./styles.css";

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin);
  },
};
