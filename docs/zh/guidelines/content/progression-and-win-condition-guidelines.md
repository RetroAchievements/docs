---
title: 进度与通关条件指南
description: 为 RetroAchievements 集中的成就分配进度和通关条件的指南。了解如何对不同类型的成就进行分类以标记游戏已通关，以及针对各种类型的具体示例。
---

# 进度与通关条件指南

进度和通关类型条件分配给集中的成就，用于 designate 游戏何时已通关。当以下所有陈述为真时，游戏被视为已通关：

1. 所有进度类型成就已获得（如有）。
2. 任何通关类型成就已获得（如有）。

核心集的标注在集发布时是必需的。子集不应标注。

[[toc]]

## 如何为成就添加类型

- 对于**_单个成就_**，您可以在 RA 网站上该成就页面的开发者面板中更改类型。
- 对于**_多个成就_**同时，在 RA 网站上游戏页面的开发者面板中选择 **Manage Core Achievements** 或 **Manage Unofficial Achievements**，然后勾选给定类型的所有成就的复选框，点击 **Set Selected to Progression** 或 **Set Selected to Win Condition**。
- 截至此次更新，RA_Integration 中无法进行标注，因此无法通过模拟器完成。

## 进度类型条件

### 进度条件：

- 标记集中稳定进度的成就。通关后内容通常不是进度。
- 假设未使用漏洞/利用，则不可错过。

### 非进度

以下类型的成就*不*被视为进度类型标注：

- 可选内容
- 更高难度
- 支线任务
- 收集品
- 挑战
- 彩蛋
- 可能错过的故事，包括结局变化。

## 通关条件

- 标记游戏结束的成就。坏结局通常不是真正的结局。
- 有些游戏可能有多个通关条件，在这种情况下，获得其中任何成就（加上所有进度）即标记游戏已通关。
- 其他可能只有一个，仍应标记为通关条件以便用户阅读。
- 在某些情况下，没有单一通关条件，例如进度可以任意顺序完成的解谜游戏。在这些情况下，获得所有进度成就即标记游戏已通关。

## 进度类型

### 标准

#### 线性进度

- 逐关游戏时遇到的内容。
- 示例：[Prince of Persia](https://retroachievements.org/game/257) - 每关按顺序完成游戏。

#### 分组

- 关卡分组在一起，而不是有单独的成就。
- 示例：[Lemmings](https://retroachievements.org/game/1798) - 每 5 关奖励成就。

#### Boss

- 作为故事里程碑的 Boss 战。
- 示例：[Spyro: Year of the Dragon](https://retroachievements.org/game/11267) - Buzz、Spike 和 Scorch 是能够进度并击败 Sorceress 的强制 Boss 战。

#### 关键物品/事件

- 收集重要物品、到达下一个地点或见证关键故事事件。
- 示例：[Final Fantasy](https://retroachievements.org/game/1449) - Sleeping Prince 和 Flotation 等重要事件作为游戏其他 Boss 进度之间的故事里程碑。

### 非标准进度

#### 合集

- 其中所有游戏具有同等重要性，因此需要全部完成才能标记合集已通关。
- 照常为所有单独游戏标记进度。
- 通关条件必须改为标记为进度。
- 示例：[Final Fantasy Origins](https://retroachievements.org/game/11332) - Scions and Sinners 和 True Emperor of Hell 均标记为进度。

#### 预期跳过

- 有些游戏包含允许在不使用 Bug 或利用的情况下跳过关卡的功能。在这些情况下，可跳过的关卡不得标记为进度，因为游戏可以在没有它们的情况下通关。
- 示例：[Super Mario Bros.](https://retroachievements.org/game/1446) - 因为可以传送到不同关卡，无法将任何关卡标记为进度。Saved The Girl 标记为通关条件。

#### 有限范围/内容极少

- 有些游戏非常简单，或内容极少，进度与精通之间的差异很小。如果进度清晰，照常标记。否则，将每个成就标记为进度条件。
- 示例：[Dice of Fate](https://retroachievements.org/game/19577) - 这是一个骰子模拟器。

#### 多种游戏模式

- 首次启动游戏时可用的所有非无限和非限制模式都标记了进度条件。
- 这些游戏模式具有同等重要性，类似于合集中的单独游戏。任何通关条件应改为标记为进度。
- 无限模式按定义持续到失败，因此缺乏进度且不包含。
- 限制模式以某种方式限制玩家，最常见的是时间或回合限制。它们可能看似包含进度，但限制作为额外挑战，使这些成就成为不应标记的非进度。
- 示例：[Kirby Super Star](https://retroachievements.org/game/814) - Bye Bye Birdy、What A Meta-Knightmare、Like A Gentle Breeze、Back On Solid Ground 和 Balance Restored...? 标记为进度。

#### 子集

- 这些本质上专注于挑战、限制或游戏的其他非标准玩法。
- **请勿**标记任何进度或通关条件；这已在核心集中涵盖。

### 多种可能的通关条件

#### 多种结局

- 通过正常游戏在游戏结束时发生的结局应标记为通关条件。
- 需要可选内容（如收集品）的替代结局是非进度，不应标记。
- 提前结束故事线的替代结局也是非进度，不应标记。
- 示例：
  - [Knuckles Chaotix](https://retroachievements.org/game/10023) - Bad Ending 和 Good Ending 均标记为通关条件。结局由可选收集品决定。
  - [Oddworld: Abe's Oddysee](https://retroachievements.org/game/11295) - Bad Ending 和 Good Ending 均标记为通关条件。结局由拯救 NPC 决定。
  - [Sigma Star Saga](https://retroachievements.org/game/5179) - One is the Loneliest Number 和 Show Me This Planet 标记为通关条件。结局由仅改变最终过场动画的游戏操作决定。
  - [Cave Story MD](https://retroachievements.org/game/13943) - Coward 未标记为进度或通关，因为它提前结束游戏且未解决故事。Shtuff Happens 和 Curse Broken 均标记为通关条件。
  - [Castlevania: Dawn of Sorrow](https://retroachievements.org/game/5522) - The Dark Lord Returns 未标记为进度或通关，因为它提前结束游戏且未解决故事。No Dark Lord Here 标记为通关条件。
  - [Shadowgate](https://retroachievements.org/game/1499) - Uh... What? 未标记为进度或通关，因为它导致玩家死亡。Talimar the Black 标记为通关条件。
  - [Sonic Adventure 2](https://retroachievements.org/game/3417) - Final Story
  - [Zero Escape: Nine Hours, Nine Persons, Nine Doors](https://retroachievements.org/game/999) - Plaudite! Acta Est Fabula!
  - [Live-A-Live](https://retroachievements.org/game/1411) - Live A Live 需要可选角色招募。仅 Demon King No More 标记为通关条件。
  - [Powerslave | Exhumed](https://retroachievements.org/game/9989) - King of the World 需要可选收集品。仅 Time to Rest 标记为通关条件。
  - [Sonic 3 & Knuckles](https://retroachievements.org/game/4874) - Hyper Sonic Victory、Hyper Knuckles Victory 和 Super Tails Victory 均需要可选收集品。Sonic Victory、Knuckles Victory 和 Tails Victory 均标记为通关条件。

#### 多种难度

- 应为集支持的最低难度标记进度和通关条件。
- 如果难度成就不叠加（例如普通或更高），对于从新存档可用的每种难度，将每个游戏通关成就标记为通关条件。
- 仅在较低难度可用的结局不被视为进度。
- 示例：
  - [Devil May Cry 3](https://retroachievements.org/game/2936) - Leave Me And Go 和 Normal Mode 标记为通关条件，因为简单和普通在第一次通关时可用。
  - [Resident Evil 3: Nemesis](https://retroachievements.org/game/11265) - Carlos, My Love! 和 Is That You?! 是通关条件，简单难度未被集覆盖。
  - [Streets of Rage 3](https://retroachievements.org/game/54) - The End? 未标记为进度或通关，因为简单难度提前结束游戏。Unfinished Business、Time's Up 和 The End! 均为通关条件。

#### 多种故事线/角色

- 有些线性游戏有仍然是标准通关一部分的尾声或扩展故事。这些解决了故事线，应标记为通关条件。
- 有些游戏在故事解决后可能有无限的通关后内容。此可选内容不应标记为进度或通关条件。
- 特定版本或发布独有的额外故事内容是进度的一部分。这些将该游戏与其他发布区分开来，应标记为通关条件。在此之前达成的结局应标记为进度。
- 制作人员名单并不总是意味着故事结束。
- 有些游戏根据初始角色选择有进度差异。在这些情况下，需要所有起始角色的结局才能通关游戏，因此这些应全部标记为进度条件。
- 如果角色选择仅影响玩法或能力，每个角色的结局应标记为通关条件。
- 角色可能各有多个结局。在这些情况下，确保仅标记他们的正常结局，而不是需要额外步骤的结局。
- 示例：
  - [EarthBound](https://retroachievements.org/game/264) - Smiles and Tears 标记为通关条件，On a Mission from God 标记为进度条件。
  - [Resident Evil 2](https://retroachievements.org/game/11245) - No Time to Waste 和 I Have to Find You 标记为通关条件。由于所选角色顺序对整体故事不显著，无法标记进度。
  - [Shin Megami Tensei: Persona 3 FES](https://retroachievements.org/game/2657) - The Fate of the Sealed 标记为通关条件，Thank You for Everything 标记为进度条件。
  - [Final Fantasy I & II: Dawn of Souls](https://retroachievements.org/game/762) - Break The Time Loop、To Heck With You! 和 To Arubboth With You! 标记为进度。此版本的游戏扩展了故事线以解决剧情。
  - [Final Fantasy V: Advance](https://retroachievements.org/game/764) - The True Power of the Void 未标记为进度或通关，因为它是无限游戏中的通关后内容。通关条件是 Warriors of Light。
  - [Pokemon Gold Version](https://retroachievements.org/game/576) - Battle On the Mountain 未标记为进度或通关，因为它是无限游戏中的通关后内容。通关条件是 Elite Five。

## notable 类型

这些类型通常缺乏标准进度，因此在此有额外指南。它们也可能具有多种游戏模式；有关如何为这些标记进度，请参阅上述指南。

### 街机

使用以下第一个适用的：

- 将为每关通关的成就标记为进度，最后一关为通关条件。
  - 示例：[Galaga](https://retroachievements.org/game/1701) - Bulletstorm 标记为通关条件。
- 使用添加新元素（敌人/障碍/机制）或增加难度的最后一关作为进度的最终关卡。
  - 示例：[Donkey Kong](https://retroachievements.org/game/11943) - 将 150m Finish 标记为通关条件。
- 使用集开发者的分数成就作为进度，达到最高分为通关条件。
  - 示例：[Pokemon Pinball: Ruby & Sapphire](https://retroachievements.org/game/789) - 1st Place Ruby、1st Place Sapphire 和 High Roller 标记为进度。
- 使用游戏内排行榜的高分作为进度。

### 格斗

- 首次启动游戏时可用的所有非无限和非限制模式都标记了进度条件，遵循具有多种游戏模式游戏的规则。
- 游戏中的任何故事模式必须通关才能通关游戏。
  - 即使最初不可用，通关游戏也需要。
  - 故事模式完成应标记为“通关条件”类型，除非另一模式的要求需要通关条件类型来处理该模式内的替代情况，在这种情况下故事完成应标记为进度，例如当没有通用的“通关街机模式”成就，但有一系列“用角色通关街机模式”成就时。
- 典型的街机式锦标赛或梯子模式应要求用任何角色完成。
  - 如果这是唯一模式，标记为通关条件。
  - **注意**：对于完整内容覆盖，集应包含所有街机结局作为精通的要求。
- 示例：[Soulcalibur II](https://retroachievements.org/game/2982) - Weapon Master (Story) 标记为进度，每个默认角色的 Arcade (Normal or Higher) 标记为通关条件。Time Attack（限制）、Survival（无限）和可解锁模式不标记。
- 示例：[Street Fighter II: The World Warrior](https://retroachievements.org/game/1192) - 在难度级别 3 或更高用特定角色通关游戏的每个成就标记为通关条件。

### 解谜

- 有些解谜游戏允许以任意顺序玩关卡。在这些情况下，不要标记任何通关条件，仅标记进度。
- 解谜游戏可能按难度分段关卡。这些作为类别而非相同关卡但更具挑战性，因此在这些情况下更高难度仍然是进度的一部分。

### 节奏

- 通过标准游戏解锁的所有歌曲被视为进度。
- 不要包含通过高分或连击要求等额外步骤解锁的歌曲。

### 射击游戏（Shmups）

- 如果角色/飞船选择不影响故事线，只需通关一个即可通关游戏。
- 将每个角色的通关成就标记为通关条件。
- 不要将角色特定成就标记为进度。

### 体育

- 仅当没有其他游戏模式时，赢得比赛才被视为进度。
- 应为首次启动时可用的所有非无限模式标记进度。
- 通过标准游戏解锁的所有锦标赛/赛事被视为进度。
- 不要包含通过完美比赛等额外步骤解锁的锦标赛/赛事。
