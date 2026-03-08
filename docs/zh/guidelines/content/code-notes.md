---
title: 代码注释
description: 在 RetroAchievements 上创建清晰一致代码注释的开发者指南。了解如何记录内存地址、指定地址大小，并确保未来开发者能轻松理解和使用您的注释。
---

# 代码注释

[[toc]]

代码注释是成就开发的重要组成部分。它们为成就创建中使用的内存地址提供有价值的上下文。好的代码注释可以使未来的成就故障排除对开发者来说轻而易举，而差的代码注释则可能成为噩梦。本指南将帮助开发者创建清晰、有用且一致的代码注释，供任何在未来查看其集的开发者使用。

## 如何制作代码注释

代码注释由开发者在内存检查器中在 RAM 挖掘游戏时制作。这便于查看 notable 地址的大小以及 RAM 中保存重要值的区域。代码注释可从内存检查器添加、删除和更新。已创建的代码注释可从网站上的游戏“代码注释”页面更新或删除。这旨在用于快速修复注释，而非代码注释修改的主要形式。

- 开发者可自由向任何游戏添加任何代码注释，无需声明工作意图。只需注意不要删除他人先前添加的注释，除非您确定它们不正确。
- 初级开发者应将其代码注释限制在其已认领的游戏。初级开发者无法删除或覆盖其他用户制作的注释。

## 建议

- **清晰且信息丰富**：代码注释应清楚记录地址代表什么，以便其他开发者轻松理解。
- **指定地址大小**：代码注释应指定所注释地址的大小。这有助于在成就逻辑创建期间轻松了解地址大小，并正确为内存检查器中的地址值着色。
- **包含重要值**：代码注释应包含成就逻辑中使用的所有值。未记录的值会使调试复杂得多，尤其是当您没有创建该注释时。
- **广泛记录**：最好记录您发现的任何有用地址，即使您知道成就逻辑中不需要它们。您永远不知道如果集被修订，以后可能需要哪些地址。

::: tip 代码注释为谁而写？
五年后，可能有人需要阅读您的代码注释来解决工单。编写代码注释以帮助未来的 RetroAchievements 开发者理解内存地址和成就逻辑。清晰的文档有助于未来的维护者处理工单。另一位开发者能理解地址代表什么以及如何使用吗？
:::

## 指定内存地址大小

有多种方式可指定内存检查器将识别的内存地址。任何未指定有效大小的代码注释将导致内存检查器高亮显示该注释的字节。内存检查器高亮将识别任意数量的位和字节长度。许多开发者会将地址大小括在方括号 (`[]`) 中，以便在完整注释中更醒目。

- `[Lower4]`, `[Upper4]`
- `[8-bit]`, `[16-bit]`, `[24-bit BE]`, `[32-bit]`, `[Float]`
- `[1 byte]`, `[2 bytes]`, `[4 bytes]`, `[8-bytes]`
- `[128 bits]`, `[78 bytes]`, `[428 bits]`, `[1024 bytes]`

### 位域与位标志

您经常会遇到地址使用地址内的每位存储数据的情况。注释各个位不会影响任何内存检查器高亮，但每个位应在代码注释中正确注释。有些人选择将这些标记为 [Bitfield] 或 [Bitflags] 而非 [8-Bit]。

## 添加值和标签

当您需要在注释中标注特定值或位的含义时，请注意以下事项。

- 始终在十六进制值前加 `0x` 前缀，以明确该值为十六进制。当您的值都不使用 A-F 字符时，这尤其重要。
- 若值为十进制，考虑在描述中添加说明：`(Values below are decimal)`
- 将每个值放在单独一行——这通常是视觉区分每个值的最简单方式。当有两个以上值需要标注时，通常应使用此方式。
- 若只有两个值（示例：是/否），考虑在描述中内联放置，若描述和标签较短。
- 在值和其标签之间放置分隔符。可以是等号、冒号或破折号，您可根据需要添加空格。提示：使用无空格的等号可让您轻松将值列表复制到 [Rich Presence](/zh/developer-docs/rich-presence) 查找。

## 示例

### 简单类型

简单地址类型涵盖几乎所有成就集所需的非常基本的地址，通常是 RAM 挖掘时最先注释的地址之一。通常可在一两行内轻松描述。可能包括生命值、生命数、游戏内货币、关卡、X/Y 位置等。

#### 良好示例

此处的良好示例包括大小、描述以及不同的值或对值的影响。

```
[8-bit] Difficulty
0x01 - Easy
0x02 - Normal
0x03 - Hard
```

```
[16-bit] Player Health
Max health is 0x1200, each hit reduces it by 0x8
```

#### 不良示例

```
Difficulty
```

```
health
```

### 地图或屏幕 ID 类型

地图和屏幕 ID 类型的代码注释常用于确定游戏内的位置，常用于关卡完成或物品收集成就。

#### 良好示例

此处的良好示例包括地址在整个游戏中可以采取的各种值。成就逻辑中使用的所有地址都详细注释。

```
[8-bit] Screen ID
Chapter I
0x36 - Initial Screen with woman's face
0x0b - Taxi ride opening scene
0x07 - Outside of apartment (Day 1)
0x04 - Apartment main hall (Day 1)
0x16 - Apartment main hall (Day 2)

Chapter II
0x37 - Driving intro cutscene
0x2b - Outside of Inn (Day 1)
0x2c - Inn main room (Day 1)
```

#### 不良示例

```
screen id
```

### 分数

游戏可以用多种方式在内存中存储玩家分数，因此有多种方式写出分数代码注释。

#### 良好示例

此处的良好示例将指定大小、代表的分数位数、屏幕上分数如何从内存中的值计算、如适用的二进制编码十进制 (BCD) 表示法，以及任何其他重要细节。

```
[1 byte] 1P display score, digits 0000XX00 in BCD
```

```
[16bit][DEC] P2 Score XXXX0000
```

```
Score [24-Bit BE BCD] (Determines Rank)
0-9=Pauper
0-99=Peasant
100-999=Prosperous
1000+=Professional
```

#### 不良示例

```
Player 1 score
```

### 位

经常遇到需要存储事件或物品标志的游戏。这些通常存储为单独的位，而不是每个标志占用整个字节。假定位值为 0 表示关/否/假，若非如此则应注明。

#### 良好示例

此处的良好示例将指定每个位及其代表的内容。

```
[Bitflags] Requests completed
Bit1 = No. 01 - Retrieve 1 Beetle Shell.
Bit2 = No. 02 - Retrieve the first old document.
Bit3 = No. 03 - I'd like to sip a Muscle Drink.
Bit4 = No. 04 - Retrieve 3 Old Lanterns.
Bit5 = No. 05 - Retrieve the second old document.
Bit6 = No. 06 - Create Jack Frost with Dia.
Bit7 = No. 07 - Retrieve 1 Lead Metal.
```

```
Bonuses Unlocked
bit0 - All Replay Items
bit1 - Unlimited Ammo (Mission 1)
bit2 - Silver Bullets (Mission 3)
bit3 - Bullet Shield (Mission 4)
bit4 - Rubber Grenades
bit5 - Men With Hats (Mission 5)
bit6 - Always Sniper
bit7 - Achilles Head (Mission 6)
```

```
[Treasure Flags 03]
Bit0=[Altair - Rebel Hideout] Potion
Bit1=[Fynn - Pub Basement] Scott's Ring
Bit2=[Castle Deist 1F - South Treasure Room] Stun Tome
Bit3=[Castle Deist 1F - South Treasure Room] Stop Tome
Bit4=[Castle Deist 1F - South Treasure Room] Curse Tome
Bit5=[Cave of Mysidia B4 - Treasure Room] Bell of Silence
Bit6=[Castle Deist 1F] Phoenix Down
Bit7=[Castle Deist 1F - NW Treasure Room] Gold Needle
```

#### 不良示例

```
The bits here represent the unlocked bonuses
```

### 指针

指针在新主机上更常见，其注释通常包含指针可指向的各种地址的信息。指针注释通常包含开发者使用的各种重要地址的众多偏移值。

- 若带标签的偏移正确编写，内存检查器和资源编辑器将在指针 _地址 + 偏移_ 处生成正确大小的间接代码注释。
- 在偏移值前使用加号 `+`。
  - 对于多层指针，许多人会使用额外的加号表示这是原始指针所指向的指针的偏移。然而，这将破坏该指针的所有间接代码注释。考虑在这些分层偏移前使用竖线，以允许顶层生成间接代码注释。
- 使用 `0x` 表示十六进制偏移值；若不存在，内存检查器将将其视为十进制偏移。
- 您可以用任意数量的空格以及等号、冒号或竖线等分隔符分隔偏移值与其标签。
- 您应像任何普通代码注释一样指定偏移处数据的大小。间接注释和高亮将使用此值。
- 若偏移值后存在多行，它们都将成为该地址的间接注释的一部分。

#### 良好示例

此处的良好示例包括各种地址偏移，每个都包含所指向地址的细节和大小。

```
Pointer to P1 Data [16-Bit]
+0x68 P1 Character ID [8-Bit]
+0xba P1 Health [8-Bit]
+0xc4 P1 Move ID [16-Bit]
```

```
[32-bit] Data Pointer
+0x638 | Pointer to pointer to smells pointer
++0x6d0 | Pointer to woofs
+++0xb8 | Total Woofs [32-bit]
+++0x380 | Sniff Level [32-bit]
0x00 = Sniff Apprentice
0x01 = Sniff Artisan
0x02 = Sniff Expert
0x03 = Sniff Master
0x04 = Grand Sniff Master
+++0x3c8 | Pointer to Racing Data [32-bit]
++++0x15a8 | Checkpoint Count [32-bit]
++++0x15ac | Frame Timer [32-bit]
++0x13d8 | Pointer to smells pointer
+++0x04 | Total Smells [32-bit]
```

```
*US* Pointer [32-bits]

--Player Kratos--
+0x97898=Health [Float]
+0x6f570=Combo [32-bits]
+0x977a0=Coordinates Y [Float]
+0x977a4=Coordinates Z [Float]
+0x977a8=Coordinates X [Float]

--Unlockables (Alternative)--
+0x6f594=Poseidon's Trident [Bit0]
+0x6f598=Poseidon's Rage [Bit0]
+0x6f59c=Medusa's Gaze [Bit0]
+0x6f5a0=Zeus' Fury [Bit0]
+0x6f5a4=Army of Hades [Bit0]
+0x6f5a8=Blade of Artemis [Bit0]
```

#### 不良示例

```
Pointer for player information. Includes player data and unlockables.
```
