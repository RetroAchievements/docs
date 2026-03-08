---
title: 子集
description: 了解为 RetroAchievements 创建和管理子集，包括故障展示、挑战通关和 DLC 等类型。本指南涵盖命名规范、审批流程以及不同子集类别的示例。
---

# 子集

[[toc]]

## 什么是子集？

浏览[游戏列表](http://retroachievements.org/gameList.php)时，您会看到某些游戏标题中有 `[Subset]` 标签。这些游戏包含因某种原因在游戏基础集中不可用的成就。子集通常是特定类型挑战通关的归属地。

子集现已通过多集系统完全集成到 RetroAchievements 中。当您加载游戏时，服务器将根据您使用的游戏哈希和个人偏好自动解析要包含的成就集。开发者将集链接在一起，让您无需单独补丁或通关即可同时游玩多个集（如基础集及其奖励内容）。

多集需要最新版本的模拟器：

- RetroArch 1.22.1+
- PCSX2 2.6+
- DuckStation 0.1-10530+
- Dolphin 2512-144+（开发版）
- PPSSPP 1.19.3-1328+（开发版）

## 多集如何运作

### 集类型

多集系统使用四种技术集类型来确定集之间的关系：

- **Base（基础）**：游戏的主要成就集。默认加载，代表主要内容。
- **Bonus（奖励）**：链接到基础集的额外成就。当您加载基础集时，根据您的偏好，任何关联的奖励集也可用。
- **Specialty（专项）**：这些集仍需要自己的补丁 ROM，但也会自动加载基础集和任何奖励集。通常用于挑战通关或替代游戏模式。
- **Exclusive（独占）**：这些集单独加载，与游戏的其他集不兼容。

### 用户偏好

您可以控制要游玩的子集：

- **全局偏好**：您[设置页面](https://retroachievements.org/settings)上默认提供全站选择退出所有子集的设置。关闭此设置将禁用多集。
- **每集偏好**：您可以按游戏逐个覆盖全局偏好。若游戏启用了多集，在其游戏页面的集选择标签上，您会找到子集配置按钮。这让您可以选择加入或退出该游戏的子集。

### 哈希兼容性

某些成就集可能与特定游戏哈希（ROM 版本、补丁等）不兼容。服务器将自动从您的模拟器会话中排除不兼容的集。若您正在测试哈希兼容性，您可能有特殊权限查看通常对不兼容哈希隐藏的集。

## 提醒

挑战成就是基础集的默认内容。只有当挑战达到远超典型挑战的极端程度（如全程无伤通关）时，挑战才适合放入子集。子集不应成为因某种原因不完全适合基础集的挑战的倾倒场。

## 子集类型

以下类别描述子集的*内容类型*。创建子集时，您还需要根据子集与基础集的交互方式选择适当的*技术子集类型*（Bonus、Specialty 或 Exclusive）：

- 对于大多数可与基础集一起游玩且无冲突的子集，使用 **Bonus**。
- 对于受益于自己的 Rich Presence 脚本但仍与基础集成就配合的挑战通关或模式，使用 **Specialty**。
- 对于以会完全与基础集成就冲突的方式根本改变游戏玩法的子集（例如：完全 incompatible 的内存），使用 **Exclusive**。

### 挑战通关

虽然许多基础集包含大量挑战，但开发者可以选择将贯穿整个游戏通关的挑战添加到子集。这些通常是违背游戏正常玩法的自我挑战。示例：

- [Chrono Trigger - No Level Up](https://retroachievements.org/game/9966) 要求玩家在不升级角色的情况下完成游戏。
- [EarthBound - Rare Drops](https://retroachievements.org/game/18280) 要求玩家获得敌人的所有稀有掉落。
- [Final Fantasy - Solo Class](https://retroachievements.org/game/17996) 要求玩家仅使用一个职业完成游戏，但需要用每个职业完成才能精通集。
- [Super Mario Bros. - 5-Minute Speedrun](https://retroachievements.org/game/23910) 要求玩家在速通社区广泛认可的被视为重大成就的阈值内完成游戏。
- [Pokemon - Professor Oak Challenge](https://retroachievements.org/searchresults.php?s=Professor+Oak+Challenge) 目前已有多个！此挑战要求玩家在游戏主要剧情点之间捕捉和/或进化所有可能的宝可梦。
- [Trails in the Sky FC - NG Nightmare](https://retroachievements.org/game/11115) 要求玩家在噩梦难度设置的单一 NG（新游戏）通关中获得 100% 完成度，而非在 NG+ 中携带继承进行。

### 极端或残酷挑战

若普遍认为挑战**过于困难**，它是子集的好候选。然而，仅仅因为成就可能可以编写并不意味着可能可以获得；因此，成就必须仍然可以获得。多难算太难？少数集玩家能够完成的。若您预期获得率低于 1%，可能是极端的。若要求任何人完成成就感觉不合理，可能是残酷的。

- 可被视为极端或残酷的单个成就的好例子是著名的 [Mega Man (NES) 的 Mr. Perfect](https://retroachievements.org/achievement/53290)，要求玩家在*整个*游戏中不受伤害完成。
- 完整子集的好例子是 [Ninja Gaiden | Shadow Warriors (NES) [Subset - Full Game Damageless]](https://retroachievements.org/game/25303)。
- 不必命名为 Brutal Challenge，但子集计划/任何子集投票中应引用该子集类型。若对挑战是否属于此类有疑问，请联系开发者合规团队快速判断。

### 多人合作集

若成就*需要*多名玩家输入才能解锁，则不能放在基础集中。多人合作集必须要求两名或更多玩家输入控制。成就必须要求多名玩家才能适合此类子集。仅能在多人模式下单人获得成就是不可接受的。

若基础游戏标题较长，此子集类型可缩短。若需要缩短名称，应使用以下优先列表查找选项："Multiplayer Co-op"、"Multi Co-op" 或 "Co-op"。

### DLC 和扩展包

不常见，但随着我们平台支持的扩展将变得更常见。这些集中的成就专属于游戏的可下载内容或扩展包。示例：

- [Arc the Lad 2 - Arc Arena: Monster Tournament](https://retroachievements.org/game/17001) 作为 Arc the Lad Collection 的奖励光盘发布，需要 Arc the Lad 2 的存档数据才能游玩。
- [F-Zero X - Expansion Kit](https://retroachievements.org/game/10962) - 成就是游戏 64DD 扩展的专属内容。
- [Return Fire - Maps o' Death](https://retroachievements.org/game/16851) 是提供游戏额外地图的独立发行。需要原版游戏的存档数据才能游玩。

### 地区差异

若游戏的地区变体差异不足以保证“完整”集，但您不想因其与基础挑战的干扰而将其包含在基础集中，子集可能是展示差异的选项。

### 用户生成内容

若游戏具有允许玩家制作自己内容的功能（如自定义关卡），则子集是包含此类内容的合适场所。示例：

- [Irritating Stick - IrRAtating Custom Courses](https://retroachievements.org/game/20084) 包含由各种 RA 社区成员制作的自定义关卡。
- [Tony Hawk's Underground - RAdical Custom Goals/Gaps](https://retroachievements.org/game/20476) 包含由各种 RA 社区成员制作的自定义目标和间隙。

### 刷怪会话

若成就涉及过度漫长且令人沮丧的、无意义的刷怪，它们更适合放入子集。包括将角色升级到最高等级、最大化属性、执行 absurd 次数的任务等，当这些都不奖励玩家时。好的刷怪会话子集将有强烈、 cohesive 的主题。

- 请注意，刷怪并不自动意味着不适合基础集：奖励玩家的刷怪适合基础集的好例子是 [Final Fantasy IV (SNES) 的 One of a Kind](https://retroachievements.org/achievement/108720)，需要高度依赖 RNG 的刷怪来换取 said 盔甲。

### 故障展示

故障可能对游戏内存产生不可预测的影响，可能导致某些成就的不当行为，因此不适合基础集。然而，许多故障可以增添有趣或有趣的游戏玩法、效果或只是愚蠢的动作，可能值得在基础集之外突出展示。一些例子是 [Final Fantasy VII (PlayStation) 的 Replica](https://retroachievements.org/achievement/83776)、[Pokemon - Red and Blue Versions (Game Boy) 的 Rare Candy Addiction](https://retroachievements.org/achievement/57643) 和 [Sonic 3 & Knuckles (Genesis) 的 Lock-Off the Lock-On](https://retroachievements.org/achievement/228498)。

### 检查点挑战

子集要求在每个检查点之前收集或执行漫长的刷怪，检查点清晰分布在整个游戏中。此类子集不应严重前置，意味着若大部分成就要在第一个检查点之前完成，可能是较差的子集候选。好例子是大多数主系列 Pokemon Professor Oak Challenge 子集或 [Zelda II: The Adventure of Link - Level-1 Runs](https://retroachievements.org/game/10311)。

### 永久死亡挑战

限制性挑战，其中玩家单位或等效物若在游戏中死亡、过期或以某种方式失败则不得再次使用。（示例：Pokemon Nuzlocke 挑战或永久死亡不是游戏特征的策略 RPG）。注意：这些挑战可能需要在游戏或改版中有支持才能与当前工具包一起实现。

### Bonus（奖励）

奖励集是包含因各种原因不适合游戏基础集的各种成就的集。这些可能是超出欢迎范围的极其困难的挑战、除了变强或收集一切之外没有特定目的的痛苦刷怪、故障展示，或许多其他不被视为基础集好成就的东西。

- 奖励集**不应**命名为 `[Subset - Bonus]`。相反，选择与子集所属游戏主题相符的名称。
- 奖励集多样性本质的好例子是 Suikoden Bonus Set，在单个子集中包含各种挑战通关、稀有掉落和极端挑战。

::: warning 提示
选择与游戏主题相符的名称。
:::

## 命名规范

为防止玩家混淆，所有子集都有特定的命名规范：

- **多人合作集**：必须在基础游戏标题后跟 `[Subset - Multiplayer Cooperative]`。例如：`Contra [Subset - Multiplayer Cooperative]`。
- **挑战通关**：必须在基础游戏标题后跟 `[Subset - 挑战名称/类型]`。例如：`Chrono Trigger [Subset - No Level Up]` 和 `Pocket Monsters Midori [Subset - Monotype Challenge]`。
- **DLC 和扩展包**：必须在基础游戏标题后跟 `[Subset - DLC/扩展包名称]`。例如：`Return Fire - [Subset - Maps o' Death]` 和 `F-Zero X [Subset - Expansion Kit]`。
- **用户生成内容**：虽然不强制要求，但在子集标题中包含 `RA` 一直是命名内容的有趣方式。
- **奖励集**：必须在基础游戏标题后跟 `[Subset - Bonus]`。例如：`Castlevania - [Subset - Bonus]` 和 `Darkwing Duck - [Subset - Bonus]`

## 审批与认领

以下子集类型已预批准：

- 多人合作
- 故障展示
- 用户生成内容
- 挑战通关：低等级游戏/不升级通关
- 挑战通关：单人职业/单属性通关
- 挑战通关：官方 Pokemon 主系列发行的 Professor Oak Challenge

其他类型的子集，包括先前已预批准的 Bonus，必须在认领前经开发者合规批准。要请求批准，请[在此处](https://retroachievements.org/createmessage.php?t=DevCompliance)发送站内消息，通过解决以下要点详细说明您的提案。

- _解释为什么这不适合基础集：_
- _解释尽管不适合基础集为什么仍然合适：_
- _提议的成就有多难？尽可能详细解释：_
- _提出解释集将是什么样子的全面集计划：_

请以非游戏专家也能理解的方式回答上述问题。若涉及分数或时间，请提供几个明确示例说明集将要求什么。

此外，向游戏添加子集被视为其基础集的修订。这意味着在获得 [Developer Compliance](https://retroachievements.org/createmessage.php?t=DevCompliance) 批准后，认领前可能需要修订投票，如下所述：

| 作者身份¹        | 审批与认领流程                                                                                                                             |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| 基础集作者       | • 若集的所有活跃作者批准，不需要计划和修订投票<br> • 视为免费认领 ²                                                                        |
| 无核心集作者身份 | • 集计划必须发布在基础集的论坛主题中，必须经过标准修订投票<br> • **不**视为免费认领<br> • 若同时为集制定修订和子集计划，两个认领将计为一个 |

¹ 在有多个修订作者的情况下，使用表格中最严格的规则集。示例：若有子集协作且任何子集作者不是核心集作者，使用 `无核心集作者身份` 规则。

² 目前，必须通过 Discord 或[向 RAdmin 发消息](https://retroachievements.org/user/RAdmin)联系管理员将认领标记为免费。作为礼貌，请仅在您确实需要认领槽位或预期开发周期较长时请求此操作。
