---
title: 使用 AddSource 和 Delta 实现收集类成就
description: 学习如何有效使用 AddSource 标志和 Delta 创建收集类成就，确保准确追踪并防止过早触发。
---

# 使用 `AddSource` 和 Delta 实现收集类及类似成就

本示例展示了一种在成就逻辑中使用 `AddSource` 标志的简单方法。

我们将查看 [《幻想水浒传》（PlayStation）](https://retroachievements.org/game/11255) 中的成就 [Treasure Hunter - Dragon Knights' Domain](http://retroachievements.org/Achievement/80100)：

## 使用的地址

- `0x1b8244`：bit0-bit4 为 Soniere 的宝物，bit5 为北方检查站的宝物，bit6-bit7 为龙穴的宝物。
- `0x1b8245`：bit0 为龙穴的宝物，bit1-bit5 为 Seek Valley 的宝物，bit6-7 为 Kalekka 的宝物。
- `0x1b824b`：bit0-bit1 为 Hidden Rune 村的宝物，bit2 未使用，bit3-4 为龙骑士堡垒的宝物，bit5-6 为 Teien 的宝物，bit7 为 Luiken 之家的宝物。

![Suikoden achievement editor example](/suikoden-achievement-editor-example.png)

此成就仅需要龙骑士堡垒、龙穴和 Seek Valley 的宝物；因此，我们只需要 `0x1b8244` 的 bit6-7、`0x1b8245` 的 bit0-bit5 和 `0x1b824b` 的 bit3-bit4。

## 逻辑分解

- 有两组各十个条件，主要区别在于 Delta 类型和总数。这是为了确保玩家从已获得九个宝物变为获得全部十个宝物。_注意：记得在 `AddSource` 总数中使用十六进制！_
- 由于我们在此使用位标志，单个条件的总数只会是 0x00 或 0x01。显然，我们希望触发时全部为 0x01，但我们不希望有人仅通过加载已找到全部十个宝物的存档来获得成就。
- 触发器是玩家从九个宝物变为十个宝物的第一帧。这有助于防止成就在不该触发时触发。
- 最后一个条件使用 `Measured` 标志，以便玩家可以查看距离目标的进度。如果玩家有十个中的八个宝物，成就将在叠加层（RAEmus）或成就菜单（RetroArch）中显示 80% 完成。

此方法在 Delta 类型和 Mem 类型的总数之间仅相差 0x01 时最为实用，但也可用于各种类型的成就：一次只能获得一个的收集品、地图完成（如随进入新区域而揭示地图的 dungeon-crawler）、可学习技能、图鉴、完成一定数量的支线任务等。

如果遇到 `AddSource` 链中多个位标志在同一帧切换的情况，你仍可使用此模板。但需要克隆 Delta 条件，使两个总数形成一个范围。仍以上述成就为例，现有总数可改为 `<= 0x09`，第二组的总数可改为 `>= 0x05`。这样，当总数从 5-9 个宝物变为 10 个宝物时，成就就会触发。
