---
title: 使用 Hit Counts 作为成就计时器
description: 学习如何使用 hit counts 作为计时器，创建需要在一定时间内保持条件的成就，以《超级 Hang-On》为例进行说明。
---

# 使用 Hit Counts 作为计时器

在本示例中，你将了解如何使用 hit counts 作为计时器，在条件保持 10 秒时授予成就。

让我们看看 [《超级 Hang-On》（Mega Drive）](http://retroachievements.org/Game/16) 的成就 [Speed Freak - Maintain at least 300kph for 10 seconds](http://retroachievements.org/Achievement/71) 在成就编辑器对话框中的配置：

**地址**

- `0x0055a`：速度
- `0x0c757`：游戏未暂停时为 0x00

![Super Hang-On speed achievement using timer](/super-hang-on-timer-achievement-editor.png)

对于此成就，我们寻找连续满足 600 次的条件。原因是 Genesis 锁定为每秒处理 60 帧逻辑（至少 NTSC 如此）。我们检查的条件是“速度超过 300”。此外，我们希望玩家在不暂停游戏的情况下保持速度超过 300。

**条件**

1. 玩家速度在 600 帧内（或 10 秒内）保持超过 300。

2. 如果速度低于 300，则重置 hit 计数器。

3. 如果玩家暂停游戏，则重置 hit 计数器。
