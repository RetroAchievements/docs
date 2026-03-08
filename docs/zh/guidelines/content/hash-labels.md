---
title: 哈希标签
description: 本指南涵盖为链接到成就集的 ROM 添加标签，包括标签类型、图片标签和示例。
---

# 哈希标签

链接到成就集的每个 ROM 必须清晰识别和标注。这些标签帮助玩家了解哪些游戏版本兼容，以及是否有他们可以使用的翻译补丁、错误修复、外观改版、生活质量改版等。

[[toc]]

## 支持的游戏文件信息

- RA 哈希：查看 [游戏识别](/zh/developer-docs/game-identification) 了解更多。这些会在 `Manage Hashes` 中自动出现。
- 文件名 - 文件名应作为描述输入。这些通常是自动的，但可能需要一些调整。
- 标签 - 您可以使用下面列出的标签，使用图片的文件名（无扩展名）。
- 补丁 URL - 链接到 [RAPatches](https://github.com/RetroAchievements/RAPatches) GitHub 仓库中的 .zip 或 .7z 文件。
- 资源页面 URL - 链接到特定的 No Intro、Redump、RHDN、SMWCentral、itch.io 等页面。

## 图片

以下用于保存组织或合集：

| 图片                                                                                 | 使用的标签  | 说明                                             |
| ------------------------------------------------------------------------------------ | ----------- | ------------------------------------------------ |
| ![no-intro-label](https://retroachievements.org/assets/images/labels/nointro.png)    | `nointro`   | 卡带游戏的标准                                   |
| ![redump-label](https://retroachievements.org/assets/images/labels/redump.png)       | `redump`    | 光盘游戏的标准                                   |
| ![fb-neo-label](https://retroachievements.org/assets/images/labels/fbneo.png)        | `fbneo`     | 主要用于街机                                     |
| ![wozaday-label](https://retroachievements.org/assets/images/labels/wozaday.png)     | `wozaday`   | 干净的 Apple II 转储                             |
| ![4am-crack-label](https://retroachievements.org/assets/images/labels/4amcrack.png)  | `4amcrack`  | 用于 Apple II。                                  |
| ![clean-cpc-label](https://retroachievements.org/assets/images/labels/cleancpc.png)  | `cleancpc`  | Amstrad 保存项目                        |
| ![neo-kobe-label](https://retroachievements.org/assets/images/labels/neokobe.png)    | `neokobe`   | 用于 PC-8001 和 PC-8801                          |
| ![lostlevel-label](https://retroachievements.org/assets/images/labels/lostlevel.png) | `lostlevel` | 专门为 RetroAchievements 哈希验证制作的 DAT 项目 |
| ![rapatches-label](https://retroachievements.org/assets/images/labels/rapatches.png) | `rapatches` | 当哈希需要托管在 RAPatches 上的补丁时使用        |
| ![mamesl-label](https://retroachievements.org/assets/images/labels/mamesl.png)       | `mamesl`    | MAME Software List。                             |
| ![tosec-label](https://retroachievements.org/assets/images/labels/tosec.png)         | `tosec`     | 用于各种平台                                     |
| ![goodtools-label](https://retroachievements.org/assets/images/labels/goodtools.png) | `goodtools` | 已停止的集合，也包含不良转储。尽可能避免         |
| ![nongood-label](https://retroachievements.org/assets/images/labels/nongood.png)     | `nongood`   | 接替 GoodTools。也应尽可能避免                   |

以下用于特定网站：

| 图片                                                                                         | 使用的标签      | 说明                                            |
| -------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------------- |
| ![atari-age-label](https://retroachievements.org/assets/images/labels/atariage.png)          | `atariage`      | 自制游戏热门网站                                |
| ![baddesthacks-label](https://retroachievements.org/assets/images/labels/baddesthacks.png)   | `baddesthacks`  | 有问题的改版网站                                |
| ![project-egg-label](https://retroachievements.org/assets/images/labels/egg.png)             | `egg`           | 从 Project Egg 购买的 ROM，通常为日本 PC 游戏。 |
| ![gamebanana-label](https://retroachievements.org/assets/images/labels/gamebanana.png)       | `gamebanana`    | PS1、PS2、PSP、GC 等改版/mod 网站               |
| ![github-label](https://retroachievements.org/assets/images/labels/github.png)               | `github`        | 用于托管在 GitHub 上的改版、自制等              |
| ![gog-label](https://retroachievements.org/assets/images/labels/gog.png)                     | `gog`           | 从 GOG.com 购买的 ROM - 可能仅用于 DOS 哈希     |
| ![itch-io-label](https://retroachievements.org/assets/images/labels/itchio.png)              | `itchio`        | 自制游戏热门网站                                |
| ![metconst-label](https://retroachievements.org/assets/images/labels/metconst.png)           | `metconst`      | 银河战士改版仓库和社区                          |
| ![moddb-label](https://retroachievements.org/assets/images/labels/moddb.png)                 | `moddb`         | 较新主机/PC 改版/mod 热门仓库                   |
| ![pokecommunity-label](https://retroachievements.org/assets/images/labels/pokecommunity.png) | `pokecommunity` | 宝可梦改版仓库和社区                            |
| ![rhdc-label](https://retroachievements.org/assets/images/labels/rhdc.png)                   | `rhdc`          | 超级马里奥 64 改版热门仓库。                    |
| ![romhackplaza-label](https://retroachievements.org/assets/images/labels/romhackplaza.png)   | `romhackplaza`  | 较新的改版仓库和社区                            |
| ![steam-label](https://retroachievements.org/assets/images/labels/steam.png)                 | `steam`         | 从 Steam 购买的 ROM。                           |
| ![smwcentral-label](https://retroachievements.org/assets/images/labels/smwcentral.png)       | `smwcentral`    | 超级马里奥世界改版热门仓库。                    |
| ![rhdn-label](https://retroachievements.org/assets/images/labels/rhdn.png)                   | `rhdn`          | ROM 改版热门仓库                                |

以下为通用标签：

| 图片                                                                                      | 使用的标签    | 说明                               |
| ----------------------------------------------------------------------------------------- | ------------- | ---------------------------------- |
| ![main-label](https://retroachievements.org/assets/images/labels/main.png)                | `main`        | 有时用于显示集开发者使用的主要 ROM |
| ![atomiswave-label](https://retroachievements.org/assets/images/labels/atomiswave.png)    | `atomiswave`  | Atomiswave 街机游戏通用标签        |
| ![homebrew-label](https://retroachievements.org/assets/images/labels/homebrew.png)        | `homebrew`    | 自制游戏通用标签                   |
| ![mdplus-label](https://retroachievements.org/assets/images/labels/mdplus.png)            | `mdplus`      | 使用 MD+ 补丁的 ROM 通用标签       |
| ![msu-1-label](https://retroachievements.org/assets/images/labels/msu1.png)               | `msu1`        | 使用 MSU-1 补丁的 ROM 通用标签     |
| ![naomi-label](https://retroachievements.org/assets/images/labels/naomi.png)              | `naomi`       | NAOMI 和 NAOMI 2 街机游戏通用标签  |
| ![snes-mini-label](https://retroachievements.org/assets/images/labels/snesmini.png)       | `snesmini`    |                                    |
| ![offline-list-label](https://retroachievements.org/assets/images/labels/offlinelist.png) | `offlinelist` |                                    |

## 示例

### Deja Vu: A Nightmare Comes True (NES/Famicom)

#### Manage Hashes

![manage-hashes-dejavu](/manage-hashes-dejavu.png)

- 第一个哈希是 No Intro 验证的游戏瑞典语版本。
- 第二个哈希是应用了 Uncensored 补丁的游戏美国版本。描述的完整文本是 `Deja Vu (USA) (Uncensored) (v1.0) (usertheloset).nes`，遵循 [RAPatches 命名规范](https://github.com/RetroAchievements/RAPatches#naming-convention)。使用的标签是 `nointro` 和 `rapatches`。
- 第三个哈希是 No Intro 验证的游戏日文版本。
- 第四个哈希是 No Intro 验证的游戏美国版本。

在此页面上，支持的游戏文件按 MD5 哈希的字典顺序排列。

每个支持的文件可以通过点击同一行的 "Edit" 单独编辑：
![edit-game-hash](/edit-game-hash.png)

要查看大多数用户将看到的效果，请前往游戏条目页面并点击 "Supported Game Files。"

#### Supported Game Files

![links-dejavu](/links-dejavu.png)

如下所示，`nointro` 和 `rapatches` 被替换为相应的图片，来自 "Patch URL" 字符串的文件链接方便地添加在相应哈希下方。在此页面上，支持的游戏文件按文件名的字典顺序排列。

![linked-hashes-dejavu](/supported-game-files-dejavu.png)

### Suikoden (PlayStation)

我们将跳过此游戏的 manage hashes 示例。让我们直接前往游戏条目页面上的 "Supported Game Files"：

![links-suikoden](/links-suikoden.png)

标有 `redump`、`rhdn` 和 `rapatches` 的哈希需要 romhacking.net 和 RAPatches 仓库中都可用的补丁。

![linked-hashes-suikoden](/supported-game-files-suikoden.png)
