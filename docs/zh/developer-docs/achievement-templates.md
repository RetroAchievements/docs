---
title: 各类场景的成就模板
description: 探索用于创建成就的模板集合，包括收集物品、完成关卡、条件重置等示例。学习如何针对不同游戏调整这些模板。
---

# 成就模板

## **警告：每款游戏都不同！**

此处展示一些典型成就的示例。你可以用它们作为灵感来创建自己的成就。但请牢记：

**每款游戏都不同！内存在不同游戏中的行为各不相同。**

因此**切勿**将这些模板当作规则。它们仅供教育用途。

在这些示例中，我们使用以下约定：**0xLEVEL** 为关卡 ID 的内存地址；**0xLIFE** 为角色生命值的地址；**0xTIME** 为时间，**0xITEM** 为获取物品，等等。

- [收集物品 N 次](#收集物品-n-次)
- [完成关卡 N](#完成关卡-n)
- [在时间达到 T 之前完成关卡 N](#在时间达到-t-之前完成关卡-n)
- [无游戏内计时器时在时间 T 内完成关卡 N](#无游戏内计时器时在时间-t-内完成关卡-n)
- [不死亡完成关卡 N（或不受击、不使用武器等）](#不死亡完成关卡-n)
- [携带物品完成关卡 N](#携带物品完成关卡-n)
- [在特定关卡收集物品](#在特定关卡收集物品)
- [收集某物的 100%](#收集某物的-100)
- [规避同一帧内计数器递增两次的问题](#规避同一帧内计数器递增两次的问题)
- [检测特定值变为另一特定值十次](#检测特定值变为另一特定值十次)
- [条件重置](#条件重置)
- [「暂停直到：」使用 `PauseIf` 在满足某条件前阻止成就处理](#暂停直到使用-pauseif-在满足某条件前阻止成就处理)

## 收集物品 N 次

有些情况下，你希望玩家收集物品（如金币或戒指）N 次时授予成就。你需要在内存中找到负责统计该物品数量的地址。找到地址后，以下逻辑通常即可实现：

| ID  | Flag | Type | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | ---- | ---- | ------- | --- | ----- | ------- | ---- |
| 1   |      | Mem  | 0xCOUNT | >   | Delta | 0xCOUNT | (N)  |

但你可能希望更具体，例如「不死亡收集物品 N 次」。此时应使用带 `ResetIf` 的另一条件，如下：

| ID  | Flag    | Type | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | ------- | ---- | ------- | --- | ----- | ------- | ---- |
| 1   |         | Mem  | 0xCOUNT | >   | Delta | 0xCOUNT | (N)  |
| 2   | ResetIf | Mem  | 0xLIVES | <   | Delta | 0xLIVES |

`ResetIf` 条件可以是「在关卡 X 中」、「不使用炸弹」等。

## 完成关卡 N

本示例中，我们希望在玩家完成关卡 `N` 并进入关卡 `N+1` 时授予成就。

| ID  | Flag | Type  | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | ---- | ----- | ------- | --- | ----- | ------- | ---- |
| 1   |      | Delta | 0xLEVEL | =   | Value | N       | (0)  |
| 2   |      | Mem   | 0xLEVEL | =   | Value | N+1     | (0)  |

**要求**

- 1：上一帧在关卡 `N`。
- 2：当前帧在关卡 `N+1`。

该逻辑仅在关卡从 `N` 推进到 `N+1` 的那一帧为真，因此不会被关卡选择作弊或加载到关卡 `N+1` 的密码触发。为实现稳健的成就逻辑，你还需要其他条件，例如检查玩家在游戏中或没有演示在运行。

## 在时间达到 T 之前完成关卡 N

本示例考虑时间递减的游戏（如：超级马里奥兄弟）。请根据你游戏中时间的不同行为进行相应调整。

我们希望玩家在时间大于 `T` 时完成关卡 `N` 则授予成就。

| ID  | Flag      | Type  | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | --------- | ----- | ------- | --- | ----- | ------- | ---- |
| 1   |           | Delta | 0xLEVEL | =   | Value | N       |
| 2   | `Trigger` | Mem   | 0xLEVEL | =   | Value | N+1     |
| 3   |           | Mem   | 0xTIME  | >   | Value | T       |

**要求**

- 1-2：与[完成关卡 N](#完成关卡-n)模板中的条件 1-2 功能相同，但在最后一行使用 `Trigger`，以便挑战激活时向玩家显示挑战图标。
- 3：确保 `TIME` 地址的值大于失败时间。当时间等于或低于该值时，未带 Trigger 标志的条件变为假，挑战图标将消失，向用户表示失败。

**注意**

- 除了了解时间在游戏中的行为外，还需研究其在内存中的行为。

## 无游戏内计时器时在时间 T 内完成关卡 N

本示例考虑没有可用于速通的游戏内计时器的游戏。

我们希望玩家在关卡内经过的帧数等于时间 `T` 之前完成关卡 `N` 时授予成就。

| ID  | Flag      | Type  | Memory  | Cmp | Type  | Mem/Val | Hits           |
| --- | --------- | ----- | ------- | --- | ----- | ------- | -------------- |
| 1   |           | Delta | 0xLEVEL | =   | Value | N       |
| 2   | `Trigger` | Mem   | 0xLEVEL | =   | Value | N+1     |
| 3   | `PauseIf` | Mem   | 0xLEVEL | =   | Value | N       | (T\*FRAMERATE) |

**要求**

- 1-2：与[完成关卡 N](#完成关卡-n)模板中的条件 1-2 功能相同，但在最后一行使用 `Trigger`，以便挑战激活时向玩家显示挑战图标。
- 3：命中目标 `T*FRAMERATE` 应设为等于挑战失败时的帧数。对于 60 帧/秒的系统，`T*FRAMERATE = 秒数 x 60`。当玩家在关卡内停留该帧数时，`PauseIf` 将变为真并锁定核心组的成就处理，直到发生重置（见下方注意）。

**注意**

- 玩家应能重试该挑战。你需要在适当时机（如死亡）添加重置以清除暂停锁定。可以在备选组中使用 `ResetIf`（活跃的 `PauseIf` 会阻止核心组中的重置生效），或在 `PauseIf` 前附加 `ResetNextIf`。
- 你可能需要在 `PauseIf` 上添加其他条件。可使用 `AndNext` 标志链接更多条件。若游戏有表示玩家控制角色的标志，这可能是好选择。多尝试！

## 不死亡完成关卡 N

（或不受击、不使用武器等）

| ID  | Flag      | Type  | Memory      | Cmp | Type  | Mem/Val     | Hits |
| --- | --------- | ----- | ----------- | --- | ----- | ----------- | ---- |
| 1   | `AndNext` | Mem   | 0xLEVEL     | =   | Value | N           |
| 2   |           | Mem   | 0xLVL_STATE | =   | Value | LVL_N_INTRO | (1)  |
| 3   |           | Delta | 0xLEVEL     | =   | Value | N           |
| 4   | `Trigger` | Mem   | 0xLEVEL     | =   | Value | N+1         |
| 5   | `ResetIf` | Mem   | 0xLEVEL     | =   | Value | TITLE       |
| 6   | `AndNext` | Mem   | 0xLEVEL     | =   | Value | N           |
| 7   | `ResetIf` | Mem   | 0xLIVES     | <   | Delta | 0xLIVES     |

**要求**

- 1-2：假设存在 `LEVEL_STATE` 地址，其值如「关卡介绍画面」、「游戏中」等，并在你处于正确关卡介绍时设置检查点命中。这是你希望挑战开始的「检查点」的占位。你需要确定合适的条件和时机，并设置自己的起始检查点。
- 3-4：与[完成关卡 N](#完成关卡-n)模板中的条件 1-2 功能相同，但在最后一行使用 Trigger，以便挑战激活时向玩家显示挑战图标。
- 5：若玩家游戏结束或能提前返回标题画面，则重置起始检查点。防止检查点命中在不该存在时残留。
- 6-7：当 `LEVEL` 地址为关卡 `N` 且 `LIVES` 地址小于上一帧时（表示玩家失去一条命）的重置。清除起始检查点命中，从而失败挑战。

**注意**

- 6-7 中的要求也可修改为：若使用武器、受到伤害或任何你希望玩家**不要**做的事，则重置命中次数。
- 1-2 中的要求可能因游戏而异。

## 携带物品完成关卡 N

| ID  | Flag      | Type  | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | --------- | ----- | ------- | --- | ----- | ------- | ---- |
| 1   |           | Delta | 0xLEVEL | =   | Value | N       | (0)  |
| 2   | `Trigger` | Mem   | 0xLEVEL | =   | Value | N+1     | (0)  |
| 3   |           | Mem   | 0xITEM  | =   | Value | TRUE    | (0)  |

**要求**

- 1-2：与[完成关卡 N](#完成关卡-n)模板中的条件 1-2 功能相同，但在最后一行使用 `Trigger`，以便挑战激活时向玩家显示挑战图标。
- 3：玩家拥有正确物品时为真的值。此处缺少 `Trigger` 标志使图标在玩家拥有物品时显示，在玩家没有时消失。

## 在特定关卡收集物品

此模板用于物品的电池存档或密码保护。避免玩家通过加载已有该物品的密码或存档来获得「获取物品 X」成就。它检查物品是否在应收集的关卡/房间 ID 中收集，并仅允许在此时获得。

| ID  | Flag | Type  | Memory  | Cmp | Type  | Mem/Val       | Hits |
| --- | ---- | ----- | ------- | --- | ----- | ------------- | ---- |
| 1   |      | Mem   | 0xLEVEL | =   | Value | COLLECT_LEVEL | (0)  |
| 2   |      | Mem   | 0xLEVEL | =   | Delta | 0xLEVEL       | (0)  |
| 3   |      | Delta | 0xITEM  | =   | Value | FALSE         | (0)  |
| 4   |      | Mem   | 0xITEM  | =   | Value | TRUE          | (0)  |

**要求**

- 1-2：在物品状态变化的帧期间，必须在正确关卡（`COLLECT_LEVEL`）中至少两帧，防止以下条件在加载时触发逻辑。
- 3：上一帧没有该物品
- 4：当前帧拥有该物品。

**注意**

- 要求 1 和 2 together 意味着你必须在关卡中至少两帧。加载数据（来自密码或存档）的帧将被视为假，因此此时物品状态的任何变化都不会触发。
- 不一定是关卡/房间 ID。还有其他方法，例如仅在收集时出现的唯一 Mem/Val。等等。

## 收集某物的 100%

这是玩家收集某物 100% 时的有限电池存档/密码保护，如超级马里奥世界中通关每个关卡，或超级银河战士中达到 100% 收集率。这是必要的，以免玩家直接加载 100% 存档免费获得成就。（通常也有其他方法解决此问题。）

| ID  | Flag | Type  | Memory            | Cmp | Type  | Mem/Val                    | Hits |
| --- | ---- | ----- | ----------------- | --- | ----- | -------------------------- | ---- |
| 1   |      | Delta | 0xCollectPercent  | <   | Value | 100% value                 |
| 2   |      | Mem   | 0xCollectPercent  | =   | Value | 100% value                 |
| 3   |      | Mem   | 0xGuardConditions | =   | Value | When to Check for Increase |

正确设置要求 3+ 的条件尤其重要。你需要找到代表游戏中该百分比增加的唯一时刻的地址。你不希望成就 in 玩家加载游戏内存档时触发，这意味着该成就在该时刻必须求值为 `False`。

**示例**

- 检查游戏内状态并寻找其连续多帧激活，类似于[在特定关卡收集物品](#在特定关卡收集物品)中的关卡检查：

| ID  | Flag | Type | Memory       | Cmp | Type  | Mem/Val      | Hits |
| --- | ---- | ---- | ------------ | --- | ----- | ------------ | ---- |
| 3   |      | Mem  | 0xGAME_STATE | =   | Value | IN_GAME      | (0)  |
| 4   |      | Mem  | 0xGAME_STATE | =   | Delta | 0xGAME_STATE | (0)  |

- 在超级马里奥世界中，该变化发生在玩家完成关卡后看到世界地图时。因此你应以区分加载存档的方式构建此时机的条件。此处玩家状态为：

| ID  | Flag | Type | Memory        | Cmp | Type  | Mem/Val                        | Hits |
| --- | ---- | ---- | ------------- | --- | ----- | ------------------------------ | ---- |
| 3   |      | Mem  | 0xPlayerState | =   | Value | Returned to map from completed |

## 规避同一帧内计数器递增两次的问题

在[收集物品 N 次](#收集物品-n-次)中，我们统计计数器增加的次数。但在某些游戏中，同一帧内计数器可能增加两次，而命中计数器只增加一次。这种行为显然会破坏我们的逻辑。我们将看到一种规避此问题的方法。

此处使用的技术依赖另外两种：

- [使用 `SubSource` 统计特定增量](/zh/developer-docs/flags/subsource#using-subsource-to-count-increments)
- [`AddHits` 标志](/zh/developer-docs/flags/addhits-subhits)

技巧如下：

| ID  | Flag        | Type  | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | ----------- | ----- | ------- | --- | ----- | ------- | ---- |
| 1   | `SubSource` | Delta | 0xCOUNT |     |       |         |
| 2   | `AddHits`   | Mem   | 0xCOUNT | =   | Value | 0x02    |
| 3   |             | Mem   | 0xCOUNT | >   | Delta | 0xCOUNT | (N)  |
| 4   | `ResetIf`   | Mem   | 0xLIVES | <   | Delta | 0xLIVES |

乍看可能有些困惑，但用实际示例可能更清晰。参见[规避同一帧内计数器递增两次的问题](/zh/developer-docs/real-examples/circumvent-the-problem-of-a-counter-incrementing-twice-in-the-same-frame)。

## 检测特定值变为另一特定值十次

本示例中，我们希望检测值从 `V1` 变为 `V2` 十次：

| ID  | Flag      | Type  | Memory    | Cmp | Type  | Mem/Val | Hits |
| --- | --------- | ----- | --------- | --- | ----- | ------- | ---- |
| 1   | `AndNext` | Delta | 0xADDRESS | =   | Value | 0xV1    |
| 2   |           | Mem   | 0xADDRESS | =   | Value | 0xV2    | (10) |

**要求**

- 1：若 `0xADDRESS` 上一帧的值为 `0xV1`
- 2：且若 `0xADDRESS` 当前值为 `0xV2`，则增加命中次数（最多 10 次）。

## 条件重置

条件重置可用于多种场景。

假设你希望玩家进入关卡的某个 X 和 Y 区域时触发重置：

**CORE（核心）**

- 核心是你成就为真所需的任意条件。也可包含常规重置行为。

**ALT1**

| ID  | Flag      | Type | Memory     | Cmp | Type  | Mem/Val      |
| --- | --------- | ---- | ---------- | --- | ----- | ------------ |
| 1   | `ResetIf` | Mem  | 0xLEVEL    | =   | Value | LEVELID      |
| 2   | `PauseIf` | Mem  | 0xX-COORDS | >   | Value | RESET-X-ZONE |
| 3   | `PauseIf` | Mem  | 0xX-COORDS | <   | Value | RESET-X-ZONE |
| 4   | `PauseIf` | Mem  | 0xY-COORDS | >   | Value | RESET-Y-ZONE |
| 5   | `PauseIf` | Mem  | 0xY-COORDS | <   | Value | RESET-Y-ZONE |

- 仅当所有 `PauseIf` 条件都不为真时才会发生重置。
- 暂停仅作用于该备选组，但重置会重置整个成就。

**ALT2**

| ID  | Flag | Type | Memory | Cmp | Type | Mem/Val |
| --- | ---- | ---- | ------ | --- | ---- | ------- |
| 1   |      | Mem  | 0x1    | =   | Mem  | 0x1     |

- 任意为真的条件。（为满足备选组行为，需要有一个恒为真的备选组）

**注意**

- 可使用多个条件重置，每个在各自的备选组中，以更好地控制重置行为。

## 暂停直到：使用 `PauseIf` 在满足某条件前阻止成就处理

有时很难确定何时处理命中次数或其他命中相关事件的持续时机。或者，有许多条件可能看起来有效但实际无效。这种情况可能导致复杂的逻辑以防范无效命中次数。一种缓解方法是 `Pause Until`（暂停直到）：

### 「暂停直到」的基本结构

| ID  | Flag          | Type  | Memory  | Cmp | Type  | Mem/Val | Hits  |
| --- | ------------- | ----- | ------- | --- | ----- | ------- | ----- |
| 1   | `AndNext`     | Delta | 0xSTATE | =   | Value | VALUE_A | 0 (0) |
| 2   | `ResetNextIf` | Mem   | 0xSTATE | =   | Value | VALUE_B | 1 (0) |
| 3   | `PauseIf`     | Value | 1       | =   | Value | 1       | 0 (0) |

**条件说明**：

- 1-2：从 `VALUE_A` 到 `VALUE_B` 的转换可能明确标记「游戏/关卡/序列开始」。然而，`VALUE_B` 可能无法明确标识你关心的挑战的「游戏中/关卡中/序列中」。此处的 `ResetNextIf` 将在此转换时锁存为真，并抑制下一条件中「恒为真」的 `PauseIf`，允许处理其余逻辑。此处的单次命中目标对此功能很重要。
- 3：此 `PauseIf` 条件将恒为真。除非其前的 `ResetNextIf` 锁存为「真」并收到朝向其 1 次命中目标的命中！这就是「暂停直到」结构：组在 `ResetNextIf` 发生前处于暂停状态。

### 成就逻辑示例

假设我们的实际目标是「在 X 单位时间内完成游戏/关卡/序列且不失去生命」。

| ID  | Flag      | Type  | Memory          | Cmp | Type  | Mem/Val | Hits  |
| --- | --------- | ----- | --------------- | --- | ----- | ------- | ----- |
| 4   |           | Delta | 0xCOMPLETE_FLAG | =   | Value | 0       | 0 (0) |
| 5   | `Trigger` | Mem   | 0xCOMPLETE_FLAG | =   | Value | 1       | 0 (0) |

在此处代替条件 4 和 5，你可使用能明确标识你所构建挑战完成的任意逻辑。这只是标识挑战完成的一组条件的示例。

| ID  | Flag      | Type  | Memory   | Cmp | Type  | Mem/Val  | Hits                           |
| --- | --------- | ----- | -------- | --- | ----- | -------- | ------------------------------ |
| 6   | `ResetIf` | Mem   | 0xHEALTH | <   | Delta | 0xHEALTH | 0 (0)                          |
| 7   | `ResetIf` | Value | 0        | =   | Value | 0x0      | NUM_FRAMES_EQUAL_TO_TIME_X (0) |

此处，任一 `ResetIf` 语句都会从 `ResetNextIf` 移除命中，导致成就进入暂停状态，阻止计时命中累积，直到游戏/关卡/序列开始转换再次发生。由于组在挑战开始前处于暂停状态，计时器重置永远不会在挑战外错误累积命中。

### 需牢记

很少需要此结构。通常开发者应能找到一些条件与计时器或其他计数器结合（使用 `AndNext` 标志等），以将其限制在特定窗口内，以及清除计数器命中为零所需的其他失败情况的重置。
