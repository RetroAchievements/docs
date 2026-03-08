---
title: 成就逻辑功能
description: 开发者可以使用多种工具和选项。了解如何正确使用它们将提升你的成就集质量。
---

# 成就逻辑功能

开发者可以使用多种工具和选项。了解如何正确使用它们将提升你的成就集质量。这些工具/选项可以在成就编辑器中使用：

![achievement_editor](/achievement-editor.png)

如需更多帮助，我们的 [Discord 服务器](https://discord.gg/dq2E4hE) 随时为你提供支持。

以下是可用功能列表：

- <a name="hit-counts"></a>[Hit Counts（命中计数）](/zh/developer-docs/hit-counts)

- <a name="delta-values"></a>[Delta Values（增量值）](/zh/developer-docs/delta-values)

- <a name="resetif"></a>[`ResetIf` 标志](/zh/developer-docs/flags/resetif)

  - <a name="resetif-with-hit-counts"></a>[`ResetIf` 与 hit counts 配合使用](/zh/developer-docs/flags/resetif#resetif-with-hit-counts)

- <a name="pauseif"></a>[`PauseIf` 标志](/zh/developer-docs/flags/pauseif)

  - <a name="pauseif-with-hit-counts"></a>[`PauseIf` 与 hit counts 配合使用](/zh/developer-docs/flags/pauseif#pauseif-with-hit-counts)

- <a name="addsource"></a>[`AddSource` 标志](/zh/developer-docs/flags/addsource)

- <a name="subsource"></a>[`SubSource` 标志](/zh/developer-docs/flags/subsource)

  - <a name="checking-for-a-negative-result"></a>[检查负值结果](/zh/developer-docs/flags/subsource#checking-for-a-negative-result)

- <a name="addhits"></a>[`AddHits` 和 `SubHits` 标志](/zh/developer-docs/flags/addhits-subhits)

- **组合标志**：`ResetIf` 和 `PauseIf` 可以应用于跟在任意数量 `AddHits`、`AddSource` 或 `SubSource` 条件之后的条件。回到上面的 [`AddSource` 示例](/zh/developer-docs/flags/addsource)，如果将 `ResetIf` 应用于条件 2，则成就将被重置，因为 `1 + 2 > 0`。

- <a name="alt-groups"></a>[Alt Groups（替代组）](/zh/developer-docs/alt-groups)

- <a name="minimum-required-versions"></a>[逻辑功能的最低版本要求](/zh/developer-docs/minimum-required-versions-for-logic-features)
