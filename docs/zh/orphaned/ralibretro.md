---
title: RALibretro
description: RALibretro 是一款多平台模拟器，可用于开发 RetroAchievements 成就，当然也可以用来获取成就。
---

# RALibretro

!! 本页面严重过时

RALibretro 是一款多平台模拟器，可用于开发 RetroAchievements 成就。

"多平台模拟"功能之所以成为可能，是因为它使用 [libretro](https://github.com/libretro/) 核心来执行实际的模拟。RALibretro 所做的是将模拟与用于创建 RetroAchievements 的工具连接起来。

## 警告

**RALibretro 仍在开发中！**

目前开发在此仓库进行：[https://github.com/RetroAchievements/RALibretro](https://github.com/RetroAchievements/RALibretro)

以下是已知问题列表（如果你发现新问题，请随时报告）：[https://github.com/RetroAchievements/RALibretro/issues](https://github.com/RetroAchievements/RALibretro/issues)

## 安装说明

只需从[下载页面](https://retroachievements.org/download.php)下载 RALibretro 并解压即可。

## 基本用法

1. 启动 RALibretro.exe
2. 点击 `File` > `Load System`，然后点击你想模拟的系统
3. 然后进入 `File` > `Load Game`，选择你的 ROM。**注意**：RALibretro 目前不支持压缩文件！
4. 现在你可以创建成就或获取成就了！

## 支持的系统

**注意**：某些系统可能需要在 `System` 目录中放置系统（BIOS）文件才能正确加载游戏。

以下是当前支持的系统列表：

- SNES
- NES
- Nintendo 64
- Mega Drive
- Master System
- Gameboy
- Gameboy Color
- Gameboy Advance
- PC Engine (TurboGrafx-16/TurboGrafx-CD)
- Atari Lynx
- Game Gear
- Neo Geo Pocket
- Atari 2600
- Atari 7800
- Virtual Boy
- Neo Geo (Arcade) - 新增。**注意**：你需要将 `neogeo.zip` BIOS 文件放在与 ROM 相同的目录中。
- Capcom Play System 1, 2 and 3 (Arcade) - 新增

## 键盘输入

| Keyboard        |  a  |  s  |  z  |  x  |          d           |            c            |       f        |       v        | Enter |  Tab   |  g  |  h  |
| --------------- | :-: | :-: | :-: | :-: | :------------------: | :---------------------: | :------------: | :------------: | :---: | :----: | :-: | :-: |
| RetroPad        |  Y  |  X  |  B  |  A  |          L           |            R            |       L2       |       R2       | Start | Select | L3  | R3  |
| SNES            |  Y  |  X  |  B  |  A  |          L           |            R            |                |                | Start | Select |     |
| NES             |     |     |  B  |  A  | Swap disk side (FDS) | Insert/Eject disk (FDS) |                |                | Start | Select |     |
| Mega Drive      |  A  |  Y  |  B  |  C  |          X           |            Z            |                |                | Start |        |     |
| Master System   |     |     |  B  |  A  |                      |                         |                |                | Start |        |     |
| GameGear        |     |     |  B  |  A  |                      |                         |                |                | Start |        |     |
| Gameboy [Color] |     |     |  B  |  A  |                      |                         |                |                | Start | Select |     |
| Gameboy Advance |     |     |  B  |  A  |          L           |            R            |                |                | Start | Select |     |
| PC Engine       |     |     | II  |  I  |                      |                         |                |                |  Run  | Select |     |
| Atari Lynx      |     |     |  B  |  A  |       Option 1       |        Option 2         |                |                | Start |        |     |
| Neo Geo Pocket  |     |     |  B  |  A  |                      |                         |                |                | Start |        |     |
| Atari 2600      |     |     |  o  |     |    L difficulty b    |     R difficulty b      | L difficulty a | R difficulty a | Start | Select |     |
| Neo Geo         |  C  |  D  |  A  |  B  |                      |                         |                |                | Start |  Coin  |     |
| CPS1/2/3\*      | \*  | \*  | \*  | \*  |          \*          |           \*            |                |                | Start |  Coin  |     |

**注意**：CPS1/2/3 游戏的按键因游戏而异。

## 键盘快捷键

- **查看覆盖层**：`Esc`
- **暂停模拟**：`p`
- **逐帧前进**：`;`（自动暂停模拟）
- **快进**：`=`
- **快进切换**：`-`（减号键）
- **截图**：`PrintScreen`

### 即时存档/读档快捷键

- **保存当前槽位**：`Backspace`
- **加载当前槽位**：`F11`
- **从槽位 1、2、...、9、0 加载**：`F1`、`F2`、...、`F9`、`F10`
- **保存到槽位 1、2、...、9、10**：`shift`+`F1`、`shift`+`F2`、...、`shift`+`F9`、`shift`+`F10`
- **上一个槽位**：`shift`+`-`
- **下一个槽位**：`shift`+`+`
- **切换槽位**：`0`、`1`、`2`、...、`9`

## 缺少的功能

- 即时存档/读档、暂停等操作时缺少用户反馈
- N64 支持
- 加载压缩 ROM
- 输入配置
- 更多问题列于此处：[https://github.com/RetroAchievements/RALibretro/issues](https://github.com/RetroAchievements/RALibretro/issues)

## 如何在 RALibretro 或 RetroArch 中使用 AES BIOS

要在模拟器中使 AES BIOS 模拟模式正常工作：

1. 确保你的模拟器正常运行。

2. 将 `neogeo.zip` 放入 `System` 目录（RALibretro），或放在你存放 NeoGeo ROM 的文件夹中（RetroArch）。

3. 确保 `neogeo.zip` 至少包含你在这里看到的文件：

![aesminimum](/aesminimum.png)

如果你只保留这些文件，AES 模式将自动强制应用于任何 NeoGeo 游戏（推荐）。

**重要！** 此图中高亮显示的文件（`neo-epo.bin` 和 `neo-po.bin`）是唯一与 AES 模式真正相关的文件，你可能需要将它们包含在压缩包中才能使 AES 模式正常工作。`neo-po.bin` 对于仅限日版的游戏或使日版正常运行是必需的，但由于模拟问题，它也会将日语设为默认语言，因此你需要将其移除才能在某些游戏中显示英语。

4. 加载任何 FBA 兼容的 Neo Geo ROM。更完整的压缩包（包含运行 MVS 和 UniBIOS 模式所需的文件）可能需要额外配置以强制 AES 模式：

在 RALibretro 中：Settings->Emulation->Force Neo Geo Mode->AES

在 RetroArch 中：Command->Menu Toggle->Options->Force Neo Geo Mode->AES
