---
title: 使用 PauseIf 控制成就命中计数
description: 了解如何有效使用 PauseIf 标志来管理成就中的命中计数，防止在特定场景下的意外增长，并理解与其他条件的交互以实现最佳的成就追踪。
---

# `PauseIf`

`PauseIf` 标志可以在成就编辑器的 Flag 列中选择。

`PauseIf` 通常用于防止命中计数在特定情况下（如游戏暂停时）增加。当你想保留已获得的命中计数，但不想在其他事情发生时增加或重置它时使用。

当一个组被处理时，首先按顺序评估所有 `PauseIf`。一旦任何 `PauseIf` 为真，该组就会停止处理。这意味着真值 `PauseIf` 之后的任何 `PauseIf` **将不会被评估**。这允许一个 `PauseIf` 阻止另一个 `PauseIf` 累积命中数，但通常更好的做法是将第二个 `PauseIf` 与 [`AndNext`](/zh/developer-docs/flags/andnext-ornext) 配合使用以限制其累积命中数的时机。

这也意味着在组暂停期间，组中的任何 [`ResetIf`](/zh/developer-docs/flags/resetif) 都不会被处理。要重置 `PauseIf` 上的命中计数，你必须将 `ResetIf` 放在 alt 组中，或者将 [`ResetNextIf`](/zh/developer-docs/flags/resetnextif) 附加到 `PauseIf` 上。

[Delta 值](/zh/developer-docs/delta-values)不受暂停组的影响。Delta 读取返回的值仍然是前一帧的值，而不是组暂停前那一帧的值。

## 带命中计数的 `PauseIf`

带有命中计数目标的 `PauseIf` 条件只有在命中计数目标达成时才会触发。一旦命中计数目标达成，该组将**保持暂停**，直到命中计数被另一个组中的 `ResetIf` 或附加在 `PauseIf` 上的 `ResetNextIf` 重置。你可能会听到这被称为 PauseLock。

没有命中计数的 `PauseIf` 会在条件不再为真时自动取消暂停。
