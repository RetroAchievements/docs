---
title: 基于游戏速度使用 ResetIf Hits 创建游戏内计时器
description: 学习如何使用 ResetIf 标志创建精确的游戏内计时器以考虑游戏帧率，在各种游戏场景中实现准确的计时机制。
---

# 基于游戏速度使用 `ResetIf` Hits 创建计时器

在本示例中，你将学习如何根据游戏的帧率速度创建游戏内计时器。

每个游戏都有一个不断增加的地址，其功能就像汽车的引擎，无论你做什么都在不断运转，游戏一开始就启动。游戏本身是你的车，有些车比其他的更快。

> 请注意：PAL 游戏（50hz）的帧率低于 NTSC 游戏（60hz），与此方法不兼容。建议基于游戏的 NTSC 版本创建所有计时器，除非只有 PAL 版本且没有 NTSC 补丁可用。

## 地址

- `0x19`：演示模式：`01`=激活，`00`=未激活
- `0x1a`：游戏引擎（基于帧率的速度）
- `0x25`：游戏暂停：`01`=是，`00`=否
- `0x2c`：游戏进度：`03`=关卡开始前，`04`=关卡已开始，`08`=关卡已完成
- `0x30`：关卡 ID（本示例中为关卡 1）

![Contra timer achievement setup in editor](/contra-timer-achievement-editor.png)

成就链接：[Contra Speedrun](https://retroachievements.org/achievement/65443)

YouTube：[ResetIfHits Demo: Contra Stage 1 60 seconds Speedrun](https://youtu.be/6PpdG04tM4s)

## 条件

1. 进入关卡时激活成就的 'Hit'（每个关卡中 `03` 仅出现一次）。

2. 关卡完成时触发成就。

3. 当前关卡（本示例中为关卡 1）。

4. 如果游戏“暂停”，则暂停成就（停止成就中的计时器）。

5. 如果达到 `60` 秒 `3600` Hits，则重置成就。`1` 秒 = `60Hits`（NTSC 60fps），`50Hits`（PAL 50fps）。

6. 如果演示模式激活，则重置成就。

7. 进入新关卡时重置成就的计时器。
