---
title: ROM 改版成就
description: 关于哪些 ROM 改版可以拥有自己的 RetroAchievements 成就集的指南，包括将改版链接到基础集的规则。了解允许和不允许的内容。
---

# ROM 改版成就

RetroAchievements 为玩家享受有趣的改版集敞开了大门。在如此广泛的创意世界中出现的问题是“RetroAchievements 允许什么，不允许什么拥有集？”本页将介绍*不允许*拥有自己集的各种改版类型，以及它们是否允许链接到基础集。

[[toc]]

## 质量保证团队批准要求

任何由非原始集开发者以外的人链接到主要成就集的改版或补丁，需要根据[添加哈希文档](/zh/guidelines/content/adding-hashes)获得质量保证团队的批准，以确保遵循适当的兼容性测试流程。

## 游戏训练器补丁

- 这些是集成了作弊功能的改版。熟悉 GoodTool 命名方案的人，标题中带有 `[t1]`、`[t2]` 等的 ROM 就是此类示例。
- 这些在任何情况下都不允许拥有自己的集或链接到基础集。事实上，数千个已知的此类哈希已链接到虚拟游戏条目，例如[此条目](https://retroachievements.org/linkedhashes.php?g=11623)。

## 难度与剧情改版

- 若改版与基础游戏的差异足够大，以至于改版可被视为完全不同的游戏，则通常可以接受独立集。不建议将这些链接到基础集，因为它们可能会破坏集。
  - 示例包括 [Metroid - Rogue Dawn](http://retroachievements.org/Game/9597)、[Castlevania: The Holy Relics](http://retroachievements.org/game/11655)、[Super Mario 64: Last Impact](http://retroachievements.org/game/12733) 和 [Super Metroid: Redesign](http://retroachievements.org/game/820)。
- 若改版与基础游戏的差异不足，但有改版独有的好成就创意，则考虑制作改版合集或将其纳入奖励集。
- 若考虑为主要游戏高度相似的难度或剧情改版创建独立集，必须获得开发者合规团队的批准。

## 错误修复、平衡调整和实用改版

- 包含开发级集成实用程序的改版，如易于访问的关卡选择、调试菜单、显示信息或提供正常游戏无法访问的测试功能的菜单，**几乎**从不允许链接到核心集或拥有自己的集。
  - 示例：[Metroid + Saving](http://www.romhacking.net/hacks/1186/) 用于 [Metroid](https://retroachievements.org/game/1487)
- 在发行版本中不存在游戏玩法实用程序时提供实用程序的改版**由活跃开发者自行决定允许**（若开发者不活跃则需修订投票）。如简易武器选择、游戏内地图、新的小升级或能力、改进控制、更快移动等实用程序。
  - 示例：[Castlevania 2: Improved Controls](https://www.romhacking.net/hacks/4150/) 用于 [Castlevania 2: Simon's Quest](https://retroachievements.org/game/1461)
- 改进或修补发行版游戏中发现的错误的实用程序和错误修复改版**由活跃开发者自行决定允许**（若开发者不活跃则需修订投票）。
  - 示例：[Sonic 1 Bugfix](https://www.romhacking.net/hacks/3200/) 用于 [Sonic the Hedgehog](http://retroachievements.org/game/1)
  - 示例：[Double Dragon III - Difficulty Fix](https://www.romhacking.net/hacks/239/) 用于 [Double Dragon III - The Sacred Stones](https://retroachievements.org/game/1662)
- 不改变游戏玩法的外观错误修复**在某些情况下可能允许**，请参阅[外观/精灵改版](#cosmetic--sprite-hacks)。

## Beta 发行、原型和“测试”改版

**通常不允许**

若 ROM 改版不完整或处于 beta/原型/测试状态，存在潜在的破坏性错误、崩溃或漏洞（作为改版的结果 intact），则**通常不允许**。

示例：

- [废弃的不完整改版列表](https://www.romhacking.net/abandoned/#id2)
- [Pokemon LeafYellow Beta 1.3](https://www.pokecommunity.com/showthread.php?t=418666) 用于 [Pokemon FireRed](https://retroachievements.org/game/515)
- [Fire Emblem TSS Hack _INCOMPLETE_ testing](https://www.romhacking.net/forum/index.php?topic=28277.0) 用于 [Fire Emblem: The Sacred Stones](http://retroachievements.org/game/2482)

## 翻译补丁

**通常允许**

翻译补丁可以显著改善玩家体验，通常不会改变成就倾向于评估的内存区域。

示例：

- [Bahamut Lagoon, T+Eng1.3-Copier_DeJap](http://www.romhacking.net/translations/280/)；[Bahumut Lagoon](https://retroachievements.org/Game/2257) 的日英翻译
- [Clock Tower, T+Eng1.01_Aeon Genesis](http://www.romhacking.net/translations/302/)；[Clock Tower](https://retroachievements.org/Game/2374) 的日英翻译
- [Chrono Trigger, T+Rus_Chief-NET](http://chief-net.ru/index.php?option=com_content&task=view&id=15&Itemid=29)；[Chrono Trigger](http://retroachievements.org/Game/319) 的英俄翻译

## 外观改版

**通常允许**

- 仅改变原版游戏图形而不改变其他内容的外观/精灵改版**不允许成为自己的集**。只要仍是同一核心游戏，可考虑添加到主要集。链接时必须链接到主要集。

示例：

- [Castlevania - High Budget Remake](https://www.romhacking.net/hacks/2673/) 用于 [Castlevania (NES)](http://retroachievements.org/game/1462)
- [Super Waluigi 64](https://hacks.sm64hacks.com/hack/403) 用于 [Super Mario 64](http://retroachievements.org/Game/10003)
- [Chrono Trigger MSU-1 (with FMV's)](https://www.romhacking.net/forum/index.php?topic=23115.0) 用于 [Chrono Trigger](http://retroachievements.org/game/319)
