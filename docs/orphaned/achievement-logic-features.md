---
title: Achievement Logic Features
description: There are several tools and options available to a developer. Knowing how to properly utilize them will improve the quality of your sets.
---

# Achievement Logic Features

There are several tools and options available to a developer. Knowing how to properly utilize them will improve the quality of your sets. These tools/options can be used in the Achievement Editor:

![achievement_editor](/public/achievement-editor.png)

For more help regarding these, our [Discord server](https://discord.gg/dq2E4hE) is always open for assistance.

Here is the list of features available:

- <a name="hit-counts"></a>[Hit Counts](/developer-docs/hit-counts)

- <a name="delta-values"></a>[Delta Values](/developer-docs/delta-values)

- <a name="resetif"></a>[`ResetIf` Flag](/developer-docs/flags/resetif)

  - <a name="resetif-with-hit-counts"></a>[`ResetIf` with hit counts](/developer-docs/flags/resetif#resetif-with-hit-counts)

- <a name="pauseif"></a>[`PauseIf` Flag](/developer-docs/flags/pauseif)

  - <a name="pauseif-with-hit-counts"></a>[`PauseIf` with hit counts](/developer-docs/flags/pauseif#pauseif-with-hit-counts)

- <a name="addsource"></a>[`AddSource` Flag](/developer-docs/flags/addsource)

- <a name="subsource"></a>[`SubSource` Flag](/developer-docs/flags/subsource)

  - <a name="checking-for-a-negative-result"></a>[Checking for a negative result](/developer-docs/flags/subsource#checking-for-a-negative-result)

- <a name="addhits"></a>[`AddHits` and `SubHits` Flag](/developer-docs/flags/addhits-subhits)

- **Combining Flags**: `ResetIf` and `PauseIf` can be applied to a condition following any number of `AddHits`, `AddSource`, or `SubSource` conditions. Going back to the [`AddSource` example](/developer-docs/flags/addsource) above, if `ResetIf` were applied to condition 2, the achievement would reset because `1 + 2 > 0`.

- <a name="alt-groups"></a>[Alt Groups](/developer-docs/alt-groups)

- <a name="minimum-required-versions"></a>[Minimum Required Versions for Logic Features](/developer-docs/minimum-required-versions-for-logic-features)
