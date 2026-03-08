---
title: 使用 Delta 值和 Hit Counts 检测增量
description: 学习如何使用 Delta 值和 hit counts 准确检测成就的增量，以《怒之铁拳 2》为例进行详细说明。
---

# 使用 Delta 值和 Hit Counts 检测增量

让我们以 [《怒之铁拳 2》（Mega Drive）](http://retroachievements.org/Game/3) 和成就 [Steel Grip - Defeat 10 enemies without dropping your weapon](http://retroachievements.org/Achievement/55) 为例。该成就依赖四个条件：

**地址**

- `0xef33`：持有武器
- `0xef37`：武器类型
- `0xef4e`：KO 数量（玩家 1）

![Streets of Rage 2 steel grip achievement configuration](/sor2-steel-grip-achievement-editor.png)

**条件**

1. 玩家持有武器。我们要求此条件为真一次。实际上并非必需，但有助于显示进度。我们要求玩家至少持有一次武器。

2. 玩家造成的 KO 数量。该值为 16 位（即值可超过 255），通过使用 delta 和“大于”符号，我们要求 KO 数量大于前一帧的值，且需要发生 10 次。每次当前值大于前一帧的值时，hit count 增加 1。下一帧，“delta”值将增加到与当前值相同，这确保每次击杀后 KO 计数器增加 1，hit count 也增加 1。**限制**：如果同一帧内 KO 数量增加 2，hit count 只会增加 1。这是一个小缺陷，发生的频率比预期略高……虽不够精确，但能相当接近地估算击杀数。

3. 如果**武器类型**与上次已知的武器类型不同，则重置所有进度。

4. 如果玩家不再持有武器，则重置**所有**进度。
