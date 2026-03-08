---
title: 命中次数
description: 学习如何在成就编辑器中使命中次数创建必须在多次满足条件后才能触发的成就。
---

# 命中次数

在成就编辑器中，最右侧的字段是命中次数。

![编辑器中的命中次数字段](/achievement-editor-hits-column.png)

默认为零，表示条件必须为真才能触发成就。

如果设置目标命中次数（如 5），表示条件必须至少在该数量的帧内为真，一旦达到该命中次数目标，则无需在任何其他时间再次满足。

**请注意**：如果条件具有非零命中次数并达到所需数量，则该条件不再被测试。它保持为真，**除非**你有 [`ResetIf`](/zh/developer-docs/flags/resetif)，我们将在下面讨论。

具有 [`ResetIf`](/zh/developer-docs/flags/resetif) 和 [`PauseIf`](/zh/developer-docs/flags/pauseif) 标志的条件也可以有命中次数。请参阅链接了解详情。

在[实际示例](/zh/developer-docs/real-examples)部分有两个很好的示例：

- [使用命中次数作为计时器](/zh/developer-docs/real-examples/using-hit-counts-as-a-timer)
- [使用 Delta 值和命中次数检测递增](/zh/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)

### 重置模拟器的影响

当模拟器重置时，所有命中次数会立即清零，成就会恢复为等待状态。然而，模拟器重置不会清除内存，因此命中次数有可能在游戏重新初始化内存之前重新累积。因此，你不应依赖模拟器重置来清除命中次数。

同样，当模拟器首次「通电」时，内存状态不能保证与真实硬件一致，因为真实硬件不会初始化其内存。相反，软件在占用内存部分时会设置一些初始状态。有些游戏实际上依赖未初始化内存的随机性来为其随机数生成器提供种子。

对于这两种情况，你应该对某些可知逻辑有明确的重置，例如玩家在标题屏幕上。
