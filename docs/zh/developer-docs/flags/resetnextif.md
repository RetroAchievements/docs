---
title: 有效使用 ResetNextIf 管理特定命中计数
description: 了解如何利用 ResetNextIf 标志选择性地重置特定条件的命中计数，确保对成就进度的精确控制并避免不必要的重置。
---

# `ResetNextIf`

`ResetNextIf` 标志是 `ResetIf` 标志的特殊版本，它只重置紧随其后的条件的[命中计数](/zh/developer-docs/hit-counts)。

`ResetNextIf` 与其所附加的条件具有相同的优先级。如果后面跟着 `PauseIf`，它可以用来重置该特定的 `PauseIf` 而无需使用 alt。如果附加到标准条件上，则在成就暂停时不会被处理。

`AddAddress`、`AddSource` 和 `SubSource` 是组合修饰条件，不被视为后续条件。`ResetNextIf` 将应用于下一个未被修饰的条件。

`AndNext` 和 `OrNext` 是组合逻辑条件，它们的命中计数将被重置，以及跟在它们后面的任何条件的命中计数也会被重置。

所有其他条件标志，包括 `AddHits` 和 `SubHits`，将导致 `ResetNextIf` 行为的处理停止。
