---
title: 使用正确的 ROM
description: 为 RetroAchievements 选择最佳 ROM 的指南，涵盖地区、版本和格式考虑，以及保持兼容性和确保成就准确触发的提示。
---

# 使用正确的 ROM

**相关：** [ROM 改版成就](/zh/guidelines/content/achievements-for-rom-hacks)、[子集](/zh/guidelines/content/subsets)

[[toc]]

每个游戏每个平台只允许一个成就集。对于现有官方版本（如 Rev 1）、官方和非官方修复补丁以及替代地区，情况也是如此。

[子集](/zh/guidelines/content/subsets) 是此规则的例外，但被视为标准集的扩展，并遵循关于允许哪些类型成就的不同规则。

当地区变体大幅改变游戏时，可能存在*极少*的地区例外。

## ROM 选择

几乎每个游戏都有多个 ROM 版本可用，有时有数十个。通常，底层存在重大差异，阻止版本之间的成就兼容。因此，找到适合成就的最佳 ROM 至关重要，应谨慎进行。

- **地区选择**：对于连接电视的主机，在可能的情况下选择 No-Intro（卡带）或 Redump（光盘）的 `NTSC USA` 发行 ROM，因为 60Hz 是更流畅的游戏体验，通常匹配预期游玩速度。`PAL European` 发行以 50Hz 运行，在大多数情况下应避免。`NTSC Japan` 发行也以 60Hz 运行，但仅当游戏为日本独占发行时才是最佳选择。`PAL European` 发行应仅作为最后手段使用（欧洲独占），通常仅限于整个平台库中极少数*独特*游戏。掌机没有地区时序差异，因此应优先考虑语言选项。

- **版本选择**：由于版本主要包含错误和拼写修复，除非您有*特定*理由不这样做，否则始终选择最终版本。这通常会在长期内为玩家和开发者省去麻烦。在开发游戏之前，快速搜索已知的版本变更并查看 [TCRF](https://tcrf.net/) 以了解是否有理由偏好早期版本。

- **环码**：某些系统，如世嘉土星，有不同“环码”的游戏多个版本。这些是刻印在实体光盘内环上的字母数字标识符。在大多数情况下，它们对游戏或甚至哈希没有功能影响，但如版本所述，请先检查是否有已知差异。

- **格式**：对于大多数系统，若您使用了经验证的良好转储，这不会成为问题。特别是对于 N64，游戏可以基于文件中字节顺序以三种格式存在：n64（小端）、v64（字节交换）和 z64（大端）。尽管产生唯一哈希，这三种格式对于相同转储是相同的。由于大端是 N64 卡带的最准确表示，大端（z64）哈希*必须*为任何 N64 游戏链接，此外还有您作为开发者可能希望个人使用的任何格式。这确保可以一致地使用一组 ROM 进行游玩。如需要，可使用 [Tool64](https://gbatemp.net/download/tool-64.32494/) 更改字节顺序。

- **街机**：街机 ROM 是特殊情况，因为 FBNeo 强制要求游戏存档的确切内容。当存在不同版本时，通常应优先选择名称的基础版本（例如，mslug2 应优先于 mslug2dg 或 mslug2t）。这仅是指南，因为可能有各种理由偏好不同版本。

- **无 Mod**：使用干净的 ROM。不要使用带有修改过的/自定义启动画面的 ROM，如 Mode7 和 RisingSun 所具有的，因为它会改变 RAM 值并使用户使用自己合法转储的 ROM 的能力复杂化。

- **无训练器**：不要使用包含集成作弊功能的 ROM。这些通常被称为售后 `ROM 训练器`，不是官方的，RetroAchievements 不以任何方式支持。这些 ROM 甚至不能作为次要选项链接。

## 保存组织

[No-Intro](http://www.no-intro.org/) 和 [Redump](http://redump.org/) 是负责验证主机游戏干净转储的主要组织，在此过程中排除所有修改和不可信来源。它们提供可用于通过 ROM 管理器验证您自己转储的 dat 文件。尽可能优先使用这些组织验证的 ROM，通常可通过以下命名方案识别：

**游戏名称（地区）（如适用可用语言）（如适用当前版本）**  
_**示例：** Diddy Kong Racing (USA) (En,Fr) (Rev 1)_

[TOSEC](https://www.tosecdev.org/) 是另一个限制较少的保存组织。它们的哈希通常与 Redump 的光盘匹配，但经常包含验证较不彻底的转储。对于 No-Intro 和/或 Redump 验证不可用的软盘、磁带和较不知名系统，TOSEC 是良好的备选选择。

您可以使用带有首选组织提供的 dat 的 rom 管理器或通过手动验证校验和并在文本编辑器中搜索 dat 来验证您的 ROM 校验和是否与 No-Intro、Redump 或 TOSEC 的数据库匹配。请注意，与手动检查不同，rom 管理器可能能够跳过外部头部以准确验证完整性。标准选择是 [clrmamepro](https://mamedev.emulab.it/clrmamepro/) 和 [Romulus](https://romulus.cc/)。

## 各平台首选组织

| 系统 ID | 系统名称                        |      首选组织      |
| :-----: | ------------------------------- | :----------------: |
|   01    | Genesis<br>Mega Drive           |      No Intro      |
|   02    | Nintendo 64                     |      No Intro      |
|   03    | Super Nintendo<br>Super Famicom |      No Intro      |
|   03    | Sufami Turbo                    |      No Intro      |
|   03    | Satellaview                     |      No Intro      |
|   04    | Game Boy                        |      No Intro      |
|   05    | Game Boy Advance                |      No Intro      |
|   06    | Game Boy Color                  |      No Intro      |
|   07    | NES<br>Famicom                  |      No Intro      |
|   07    | Famicom Disk System             |      No Intro      |
|   08    | TurboGrafx-16<br>PC Engine      |      No Intro      |
|   08    | SuperGrafx                      |      No Intro      |
|   09    | Sega CD<br>Mega CD              |       Redump       |
|   10    | Sega 32X                        |      No Intro      |
|   11    | Master System<br>Mark III       |      No Intro      |
|   12    | PlayStation                     |       Redump       |
|   13    | Atari Lynx                      |      No Intro      |
|   14    | Neo Geo Pocket                  |      No Intro      |
|   14    | Neo Geo Pocket Color            |      No Intro      |
|   15    | Game Gear                       |      No Intro      |
|   16    | GameCube                        |       Redump       |
|   17    | Atari Jaguar                    |      No Intro      |
|   18    | Nintendo DS                     |      No Intro      |
|   21    | PlayStation 2                   |       Redump       |
|   23    | Magnavox Odyssey 2              |      No Intro      |
|   24    | Pokemon Mini                    |      No Intro      |
|   25    | Atari 2600                      |      No Intro      |
|   27    | Arcade                          |   Final Burn Neo   |
|   28    | Virtual Boy                     |      No Intro      |
|   29    | MSX (Cartridges)                |      No Intro      |
|   29    | MSX (Disks)                     |       TOSEC        |
|   29    | MSX2 (Cartridges)               |      No Intro      |
|   29    | MSX2 (Disks)                    |       TOSEC        |
|   33    | SG-1000                         |      No Intro      |
|   37    | Amstrad CPC                     |     Clean CPC      |
|   38    | Apple II                        |       TOSEC        |
|   38    | Apple II                        |     Woz A Day      |
|   39    | Sega Saturn                     |       Redump       |
|   40    | Sega Dreamcast                  |       Redump       |
|   41    | PlayStation Portable            |       Redump       |
|   41    | PlayStation Portable            |      No Intro      |
|   43    | 3DO Interactive Multiplayer     |       Redump       |
|   44    | ColecoVision                    |      No Intro      |
|   45    | Intellivision                   |      No Intro      |
|   46    | Vectrex                         |      No Intro      |
|   47    | NEC PC-8001                     |      Neo Kobe      |
|   47    | NEC PC-8001                     |       TOSEC        |
|   47    | NEC PC-8801                     |      Neo Kobe      |
|   47    | NEC PC-8801                     |       TOSEC        |
|   49    | NEC PC-FX                       |       Redump       |
|   51    | Atari 7800                      |      No Intro      |
|   53    | WonderSwan                      |      No Intro      |
|   53    | WonderSwan Color                |      No Intro      |
|   57    | Fairchild Channel F             |      No Intro      |
|   56    | Neo Geo CD                      |       Redump       |
|   63    | Watara Supervision              |      No Intro      |
|   69    | Mega Duck                       |      No Intro      |
|   71    | Arduboy                         |      No Intro      |
|   72    | WASM-4                          |      Homebrew      |
|   72    | WASM-4                          | Lost Level Archive |
|   73    | Arcadia 2001                    |      No Intro      |
|   74    | Interton VC 4000                |      No Intro      |
|   75    | Elektor TV Games Computer       |         -          |
|   76    | TurboGrafx-CD<br>PC Engine CD   |       Redump       |
|   77    | Atari Jaguar CD                 |       Redump       |
|   78    | Nintendo DSi                    |      No Intro      |
|   80    | Uzebox                          |      Homebrew      |
|   80    | Uzebox                          | Lost Level Archive |

## 翻译补丁

（另见：下文 [ROM 本地化政策](#rom-localization-policy)）

英语是 RetroAchievements 的主要语言。翻译补丁有时由开发者应用于非英文标题作为成就集的主要哈希，当不存在授权英文版本时。在这些情况下，补丁说明将在该标题的论坛主题中提供。只要合理，仍应支持原始未打补丁版本。

有时翻译补丁可能产生与链接哈希关键地不同的内存。所有链接哈希预期由*整个*成就集完全支持。若您无法个人保证这一点，请不要链接哈希。

若您不是相关集的原始开发者且开发者活跃，请使用测试模式亲自验证内存，并在尝试添加新翻译前联系开发者。

## ROM 本地化政策

由于英语是社区的主要语言，优先使用英文 ROM。在选择为哪个 ROM 开发成就时，我们优先考虑**非掌机的 No-Intro 或 Redump 美国 ROM** 和**掌机的欧洲 ROM**。

我们希望继续改善对所有地区版本的支持，尤其是日文（因为我们游戏库的大部分在日本创建）。一些用户可能也偏好游戏的特定地区版本，更好地包含广泛支持，以便任何良好的 ROM 都可以链接到良好条目并给予适当的成就。也就是说，地区变体仍必须完全支持，50Hz 减速需要通过额外补丁缓解或证明存在时不是问题。

在查看如何处理有地区版本的游戏时，我们的标准是**每个游戏每个平台一个条目**。理想情况下，若玩家加载 Donkey Kong、Pac-Man 或 Contra 的美国或日文版本，他们将从同一条目获得相同的成就。如上所述，存在一些极其罕见的情况，将地区版本拆分为自己的独特条目对我们的库和玩家更好。若社区有理由相信拆分条目更好，可以由 RetroAchievements 工作人员审核和批准。

**提示：** 对于有文本触发成就的游戏（尤其是 RPG），建议查找事件标志而不是挂钩文本或文本 ID。文本呈现因地区版本而异，使多地区支持变得困难。

### 本地化差异

本地化期间（最常见的是从日文到英文）所做的更改类型可能差异很大。以下任何更改可能来自本地化：

- 很少或没有更改；
- 密码替代电池存档；
- 错误修复；
- 轻度或大量翻译；
- 轻度或大量外观更改，包括“冒犯性”元素被审查、音效更改、授权素材被通用素材替换和/或未知角色被任天堂化（例如 Tetris Attack、Super Mario Bros. 2）；
- 关卡添加、修改或移除；
- 游戏物理和游戏机制修改；
- 游戏模式、难度级别和游戏选项添加或移除；
- 作弊码或调试模式添加或移除；
- 游戏重新平衡导致更难或更简单的体验，有时显著如此；
- 两个游戏合并为一个；
- 以及更多。

由于这种变化以及为避免用不必要的重复填充数据库，我们的目标是最小化拆分集的数量。要拆分集需要令人信服的理由；我们非常谨慎地确定何时批准这些拆分。
