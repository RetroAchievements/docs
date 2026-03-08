---
title: 解决同一帧内计数器增加两次的成就问题
description: 学习如何使用 SubSource 和 AddHits 标志处理同一帧内计数器增加两次的问题，确保同时收集物品的游戏中的成就逻辑准确。
---

# 解决同一帧内计数器增加两次的问题

在本示例中，你将了解如何通过结合 [SubSource](/zh/developer-docs/flags/subsource) 和 [AddHits](/zh/developer-docs/flags/addhits-subhits) 来解决同一帧内计数器增加两次的问题。

在 Game Boy Advance 游戏库中有一款名为 [《圣诞老人 Jr. Advance》](http://retroachievements.org/Game/7152) 的圣诞平台游戏。每个奖励关卡都有收集全部拐杖糖的成就。

此类成就本应相当简单，如下所示：

| ID  | Special? | Memory    | Cmp | Type  | Mem/Val   | Hits |
| --- | -------- | --------- | --- | ----- | --------- | ---- |
| 1   |          | 0xCANDIES | !=  | Delta | 0xCANDIES | (N)  |
| 2   | ResetIf  | 0xSTAGE   | !=  | Value | 0xBONUS   |      |

这表示“检查拐杖糖计数器在奖励关卡中是否变化了 `N` 次”。

**注意**：我们使用 `0xCANDIES != Delta 0xCANDIES`（使用 `!=` 而非 `>`），因为当玩家有 99 个糖果并再收集一个时，计数器会归零。

然而，此游戏（以及许多其他游戏）存在一种情况：如果玩家同时收集 2 个拐杖糖，计数器会在同一帧内增加 2。发生这种情况时，hit 计数器增加 1，而糖果计数器增加 2。显然，这会破坏上述逻辑。

为解决此问题，我们需要使用 [使用 SubSource 计算特定增量](/zh/developer-docs/flags/subsource#using-subsource-to-count-specific-increments) 的技术，并结合 [`AddHits` 标志](/zh/developer-docs/flags/addhits-subhits)。

让我们查看成就逻辑及其解释：

## 地址

- `0x80dc`：拐杖糖计数器
- `0x809c`：关卡 ID

因此，成就结构将如下所示：

![Basic achievement logic in editor for Santa Claus Jr](/santa-jr-achievement-editor-basic.png)

## 条件

1. 与条件 2 一起，用于检查 `0xCANDIES - Delta 0xCANDIES = 2`。换句话说，糖果计数器增加了 2。

2. 与条件 1（如上所述）和 3 一起使用。如[其相应页面](/zh/developer-docs/flags/addhits-subhits)所述，当 `AddHits` 条件为真时，下一个条件的 hit 计数器会增加。因此，在本示例中，当条件 2 为真时，条件 3 的 hit 计数器会增加。

3. 统计糖果计数器变化的次数。

4. 如果不在奖励关卡，则重置计数器。

所有这些条件可以理解为“在奖励关卡中，如果糖果计数器变化 99 次则触发成就，如果糖果计数器在同一帧内增加 2，则额外计一次糖果计数器的变化。”

那么，现在 100% 解决了吗？嗯，实际上几乎解决了。仍有一个非常小的例外。还记得之前说过使用 `!=` 而不是 `>` 是因为**当玩家有 99 个糖果并再收集一个时，计数器会归零**吗？

这意味着，如果我们在同一帧获得两个拐杖糖（已经很少见），有很小的可能性变化是 `98 -> 00` 或 `99 -> 01`。在这两种情况下，我们的代码将不起作用，因为 `00 - 98` 不是 2，而是 `-98`。`01 - 99` 同理，不是 2，也是 `-98`。

尽管可能性很小，我们仍应处理这种情况。因此，我们将在代码中添加两个额外要求，最终如下所示：

![Complete achievement logic with edge case handling in editor](/santa-jr-achievement-editor-complete.png)

与之前相同，唯一的变化是第 3 行和第 4 行，代表额外的 `SubSource + AddHits` 来检查 `0xCANDIES - Delta 0xCANDIES = -98`，仅用于处理刚才提到的这个非常小的例外。

现在解决了！
