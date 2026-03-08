---
title: 掌握 AndNext 和 OrNext 实现复杂的成就条件
description: 了解如何使用 AndNext 和 OrNext 标志为 ResetIf、PauseIf 和命中计数创建复杂的条件逻辑，从而实现灵活精巧的成就需求。
---

# `AndNext` 和 `OrNext`

`AndNext` 和 `OrNext` 用于将多个条件关联到 [ResetIf](/zh/developer-docs/flags/resetif)、[PauseIf](/zh/developer-docs/flags/pauseif) 或[命中计数](/zh/developer-docs/hit-counts)上。

`AndNext` 和 `OrNext` 可以在成就编辑器的 Flag 列中选择。

当一个条件带有 `AndNext` 标志时，该条件必须与_后续条件_同时为真，后续条件才被认为是真。

当一个条件带有 `OrNext` 标志时，该条件_或后续条件_中任一为真，后续条件就被认为是真。

你可以链接多个 `AndNext` 和 `OrNext` 条件，为单个 `ResetIf`、`PauseIf` 或命中计数创建复杂的要求。

当评估 `AndNext` 和 `OrNext` 条件的组合时，每一行都是单独评估的。

```
AndNext A = 1
OrNext  B = 1
AndNext C = 1
OrNext  D = 1
AndNext E = 1
ResetIf F = 1
```

代表以下逻辑语句：

```
reset if (((((A = 1 and B = 1) or C = 1) and D = 1) or E = 1) and F = 1)
```

对于大多数用例，[Alt Groups](/zh/developer-docs/alt-groups) 仍然优于 `OrNext`。它们允许在 OR 的每个子句中包含多个条件，并支持两个以上的子句。

`AndNext` 对于简单逻辑不是必需的。组中的所有条件会自动以 AND 连接。`AndNext` 只是允许两个或更多条件影响单个 `PauseIf`、`ResetIf` 或命中计数。
