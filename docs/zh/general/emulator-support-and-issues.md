---
title: 模拟器支持
description: RetroAchievements 硬核合规与兼容性综合指南，包括各主机相关问题以及各类核心与模拟器的推荐。
---

# 模拟器支持

::: info
本页聚焦于符合硬核要求的模拟器。有关详细合规要求，请参阅[硬核合规要求](/zh/general/hardcore-compliance-requirements)页面。有关不受支持的模拟器和核心的详细说明，请查看[不受支持的模拟器页面](/zh/developer-docs/unsupported-emulators-and-cores)。
:::

libretro 核心可在以下符合硬核要求的前端上运行。您可在[下载页面](https://retroachievements.org/downloads)找到它们，其中列出了所有可用的核心：

- [RetroArch](https://www.retroarch.com/index.php?page=platforms) - 支持 40+ 平台。
- [RALibRetro](https://retroachievements.org/downloads) - 支持 40+ 平台。
- [Firelight](https://biscuitcakes.itch.io/firelight) - 支持 10+ 平台。
- [Delta (iOS)](https://apps.apple.com/us/app/delta-game-emulator/id1048524688) - 支持 5+ 平台。

BizHawk 核心只能在 [BizHawk](https://tasvideos.org/Bizhawk) 上运行。有关 BizHawk 核心的更多详情请参见[此处](https://tasvideos.org/BizHawk)。

### 32X

| 名称          | 类型          | 备注                                                                                                 |
| :------------ | :------------ | :--------------------------------------------------------------------------------------------------- |
| **PicoDrive** | libretro 核心 | - 部分游戏存在问题，若成就显示为不支持或游戏运行不佳，请使用 BizHawk。<br>- 似乎仍存在未映射的 RAM。 |
| **PicoDrive** | BizHawk 核心  | 最推荐。                                                                                             |

### 3DO Interactive Multiplayer

| 名称      | 类型          | 备注                             |
| :-------- | :------------ | :------------------------------- |
| **Opera** | libretro 核心 | 根据 BIOS 不同可能存在一些问题。 |

### Amstrad CPC

| 名称          | 类型          | 备注                                               |
| :------------ | :------------ | :------------------------------------------------- |
| **Caprice32** | libretro 核心 | 该核心目前不支持写入磁盘，实现后可能影响哈希计算。 |

### Apple II

| 名称                                                     | 类型       | 备注 |
| :------------------------------------------------------- | :--------- | :--- |
| **[RAppleWin](https://retroachievements.org/downloads)** | 独立模拟器 |      |

### Arcade

| 名称                                                          | 类型          | 备注                                                                                                               |
| :------------------------------------------------------------ | :------------ | :----------------------------------------------------------------------------------------------------------------- |
| **FinalBurn Neo**                                             | libretro 核心 | 部分基板可能未完全支持。                                                                                           |
| **Flycast**                                                   | libretro 核心 | 用于 Atomiswave 和 NAOMI 1/2。                                                                                     |
| **[Flycast](https://github.com/flyinghead/flycast/releases)** | 独立模拟器    | - 用于 Atomiswave 和 NAOMI 1/2。<br>- 成就开发者无法直接排查问题，若成就无法正常工作请先尝试使用核心，再提交工单。 |

### Arcadia 2001

| 名称                                                  | 类型       | 备注 |
| :---------------------------------------------------- | :--------- | :--- |
| **[WinArcadia](https://amigan.1emu.net/releases/)**   | 独立模拟器 |      |
| **[DroidArcadia](https://amigan.1emu.net/releases/)** | 独立模拟器 |      |

### Arduboy

| 名称        | 类型          | 备注                  |
| :---------- | :------------ | :-------------------- |
| **Ardens**  | libretro 核心 |                       |
| **Arduous** | libretro 核心 | 无法模拟 Arduboy FX。 |

### Atari 2600

| 名称              | 类型          | 备注                                                     |
| :---------------- | :------------ | :------------------------------------------------------- |
| **Stella**        | libretro 核心 |                                                          |
| **Atari2600Hawk** | BizHawk 核心  | 需要模拟器重置的成就无法工作。请提交工单以便修复该成就。 |

### Atari 7800

| 名称          | 类型          | 备注 |
| :------------ | :------------ | :--- |
| **ProSystem** | libretro 核心 |      |
| **A7800Hawk** | BizHawk 核心  |      |

### Atari Jaguar

| 名称               | 类型          | 备注                                                                                                                               |
| :----------------- | :------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Virtual Jaguar** | libretro 核心 | - 不支持即时存档。<br>- 不支持 Jaguar CD。<br>- [模拟存在诸多问题](https://github.com/libretro/virtualjaguar-libretro/issues/38)。 |
| **Virtual Jaguar** | BizHawk 核心  |                                                                                                                                    |

### Atari Jaguar CD

| 名称               | 类型         | 备注 |
| :----------------- | :----------- | :--- |
| **Virtual Jaguar** | BizHawk 核心 |      |

### Atari Lynx

| 名称            | 类型          | 备注                            |
| :-------------- | :------------ | :------------------------------ |
| **Handy**       | libretro 核心 | 最推荐。                        |
| **Beetle Lynx** | libretro 核心 |                                 |
| **Handy**       | BizHawk 核心  | specifically 为 Mednafen 分支。 |

### ColecoVision

| 名称                                                  | 类型          | 备注 |
| :---------------------------------------------------- | :------------ | :--- |
| **blueMSX**                                           | libretro 核心 |      |
| **ColecoHawk**                                        | BizHawk 核心  |      |
| **[RAMeka](https://retroachievements.org/downloads)** | 独立模拟器    |      |

### Dreamcast

| 名称                                                          | 类型          | 备注                                                                         |
| :------------------------------------------------------------ | :------------ | :--------------------------------------------------------------------------- |
| **Flycast**                                                   | libretro 核心 | 需禁用多线程渲染才能正确使用即时存档。                                       |
| **[Flycast](https://github.com/flyinghead/flycast/releases)** | 独立模拟器    | 成就开发者无法直接排查问题，若成就无法正常工作请先尝试使用核心，再提交工单。 |

### Elektor TV Games Computer

| 名称                                                  | 类型       | 备注 |
| :---------------------------------------------------- | :--------- | :--- |
| **[WinArcadia](https://amigan.1emu.net/releases/)**   | 独立模拟器 |      |
| **[DroidArcadia](https://amigan.1emu.net/releases/)** | 独立模拟器 |      |

### Fairchild Channel F

| 名称         | 类型          | 备注 |
| :----------- | :------------ | :--- |
| **FreeChaF** | libretro 核心 |      |

### Game Boy

| 名称                                                         | 类型          | 备注                               |
| :----------------------------------------------------------- | :------------ | :--------------------------------- |
| **Gambatte**                                                 | libretro 核心 | 最推荐。                           |
| **Gearboy**                                                  | libretro 核心 |                                    |
| **mGBA**                                                     | libretro 核心 |                                    |
| **VBA-M**                                                    | libretro 核心 |                                    |
| **Gambatte**                                                 | BizHawk 核心  | specifically 为 Pokémon 速通分支。 |
| **GBHawk**                                                   | BizHawk 核心  |                                    |
| **[RAVBA](https://retroachievements.org/downloads)**         | 独立模拟器    |                                    |
| **[Pizza Boy C Basic & Pro](https://pizzaemulators.com/)**   | 独立模拟器    |                                    |
| **[SkyEmu](https://github.com/skylersaleh/SkyEmu/pull/321)** | 独立模拟器    |                                    |
| **[Playback](https://www.epilogue.co/)**                     | 独立模拟器    | 需要 GB Operator 设备。            |
| **[Linkboy](https://retroachievements.org/downloads)**       | 独立模拟器    |                                    |

### Game Boy Color

| 名称                                                         | 类型          | 备注                               |
| :----------------------------------------------------------- | :------------ | :--------------------------------- |
| **Gambatte**                                                 | libretro 核心 | 最推荐。                           |
| **Gearboy**                                                  | libretro 核心 |                                    |
| **mGBA**                                                     | libretro 核心 |                                    |
| **VBA-M**                                                    | libretro 核心 |                                    |
| **Gambatte**                                                 | BizHawk 核心  | specifically 为 Pokémon 速通分支。 |
| **GBHawk**                                                   | BizHawk 核心  |                                    |
| **[RAVBA](https://retroachievements.org/downloads)**         | 独立模拟器    |                                    |
| **[Pizza Boy C Basic & Pro](https://pizzaemulators.com/)**   | 独立模拟器    |                                    |
| **[SkyEmu](https://github.com/skylersaleh/SkyEmu/pull/321)** | 独立模拟器    |                                    |
| **[Playback](https://www.epilogue.co/)**                     | 独立模拟器    | 需要 GB Operator 设备。            |
| **[Linkboy](https://retroachievements.org/downloads)**       | 独立模拟器    |                                    |

### Game Boy Advance

| 名称                                                         | 类型          | 备注                    |
| :----------------------------------------------------------- | :------------ | :---------------------- |
| **mGBA**                                                     | libretro 核心 | 最推荐。                |
| **VBA-M**                                                    | libretro 核心 |                         |
| **Beetle GBA**                                               | libretro 核心 |                         |
| **VBA Next**                                                 | libretro 核心 |                         |
| **mGBA**                                                     | BizHawk 核心  |                         |
| **[RAVBA](https://retroachievements.org/downloads)**         | 独立模拟器    |                         |
| **[Pizza Boy A Basic & Pro](https://pizzaemulators.com/)**   | 独立模拟器    |                         |
| **[SkyEmu](https://github.com/skylersaleh/SkyEmu/pull/321)** | 独立模拟器    |                         |
| **[Playback](https://www.epilogue.co/)**                     | 独立模拟器    | 需要 GB Operator 设备。 |
| **[Linkboy](https://retroachievements.org/downloads)**       | 独立模拟器    |                         |

### GameCube

| 名称                                                                      | 类型       | 备注                                                                                        |
| :------------------------------------------------------------------------ | :--------- | :------------------------------------------------------------------------------------------ |
| **[Dolphin](https://retroachievements.org/download.php#dolphin)**         | 独立模拟器 | - 必须使用 2407-68 或更高版本。<br>- 请确保取消勾选「启用双核（加速）」选项，因其不受支持。 |
| **[DolphinUWP](https://github.com/SternXD/dolphin/releases/tag/1.1.9.0)** | 独立模拟器 |                                                                                             |

### Game Gear

| 名称                                                        | 类型          | 备注 |
| :---------------------------------------------------------- | :------------ | :--- |
| **Genesis Plus GX**                                         | libretro 核心 |      |
| **Gearsystem**                                              | libretro 核心 |      |
| **[RAMeka](https://retroachievements.org/downloads)**       | 独立模拟器    |      |
| **[Pizza Boy SC Basic & Pro](https://pizzaemulators.com/)** | 独立模拟器    |      |

### Genesis/Mega Drive

| 名称                                                        | 类型          | 备注                   |
| :---------------------------------------------------------- | :------------ | :--------------------- |
| **Genesis Plus GX**                                         | libretro 核心 | 最推荐。               |
| **PicoDrive**                                               | libretro 核心 |                        |
| **Genplus-gx**                                              | BizHawk 核心  | 亦称 Genesis Plus GX。 |
| **[Pizza Boy SC Basic & Pro](https://pizzaemulators.com/)** | 独立模拟器    |                        |

### Intellivision

| 名称            | 类型          | 备注                                                                 |
| :-------------- | :------------ | :------------------------------------------------------------------- |
| **FreeIntv**    | libretro 核心 | - 游戏重置时会崩溃。<br>- 部分崩溃可能与 Intellivoice 未被模拟有关。 |
| **IntelliHawk** | BizHawk 核心  |                                                                      |

### Interton VC 4000

| 名称                                                  | 类型       | 备注 |
| :---------------------------------------------------- | :--------- | :--- |
| **[WinArcadia](https://amigan.1emu.net/releases/)**   | 独立模拟器 |      |
| **[DroidArcadia](https://amigan.1emu.net/releases/)** | 独立模拟器 |      |

### Magnavox Odyssey 2

| 名称     | 类型          | 备注 |
| :------- | :------------ | :--- |
| **O2EM** | libretro 核心 |      |

### Master System/Mark III

| 名称                                                        | 类型          | 备注 |
| :---------------------------------------------------------- | :------------ | :--- |
| **Genesis Plus GX**                                         | libretro 核心 |      |
| **Gearsystem**                                              | libretro 核心 |      |
| **[RAMeka](https://retroachievements.org/downloads)**       | 独立模拟器    |      |
| **[Pizza Boy SC Basic & Pro](https://pizzaemulators.com/)** | 独立模拟器    |      |

### Mega Duck

| 名称         | 类型          | 备注 |
| :----------- | :------------ | :--- |
| **SameDuck** | libretro 核心 |      |

### MSX

| 名称        | 类型          | 备注 |
| :---------- | :------------ | :--- |
| **blueMSX** | libretro 核心 |      |

### Neo Geo CD

| 名称      | 类型          | 备注 |
| :-------- | :------------ | :--- |
| **NeoCD** | libretro 核心 |      |

### Neo Geo Pocket (Color)

| 名称              | 类型          | 备注                            |
| :---------------- | :------------ | :------------------------------ |
| **Beetle NeoPop** | libretro 核心 |                                 |
| **NeoPop**        | BizHawk 核心  | specifically 为 Mednafen 分支。 |

### NES/Famicom

| 名称                                                           | 类型          | 备注                         |
| :------------------------------------------------------------- | :------------ | :--------------------------- |
| **FCEUmm**                                                     | libretro 核心 | 最推荐。                     |
| **Mesen**                                                      | libretro 核心 |                              |
| **QuickNES**                                                   | libretro 核心 | 不支持 Famicom Disk System。 |
| **[RANes](https://retroachievements.org/downloads)**           | 独立模拟器    |                              |
| **[NES RA Adapter](https://github.com/odelot/nes-ra-adapter)** | 主机适配器    |                              |

### NES/Famicom Disk System

| 名称                                                 | 类型          | 备注     |
| :--------------------------------------------------- | :------------ | :------- |
| **FCEUmm**                                           | libretro 核心 | 最推荐。 |
| **Mesen**                                            | libretro 核心 |          |
| **[RANes](https://retroachievements.org/downloads)** | 独立模拟器    |          |

### Nintendo 64

| 名称                                                                              | 类型          | 备注                                             |
| :-------------------------------------------------------------------------------- | :------------ | :----------------------------------------------- |
| **Mupen64Plus-Next**                                                              | libretro 核心 | - 最推荐。<br>- 分为 OpenGL ES 2 和 3 两个核心。 |
| **ParaLLEl N64**                                                                  | libretro 核心 |                                                  |
| **[RAProject64](https://retroachievements.org/downloads)**                        | 独立模拟器    |                                                  |
| **[Luna's Project64](https://github.com/Luna-Project64/Luna-Project64/releases)** | 独立模拟器    |                                                  |

### Nintendo DS

::: info
麦克风支持有限。
:::

| 名称                                                                              | 类型          | 备注         |
| :-------------------------------------------------------------------------------- | :------------ | :----------- |
| **DeSmuME**                                                                       | libretro 核心 | 不支持 DSi。 |
| **melonDS**                                                                       | libretro 核心 |              |
| **melonDS DS**                                                                    | libretro 核心 |              |
| **melonDS**                                                                       | BizHawk 核心  |              |
| **[melonDS Android](https://github.com/rafaelvcaetano/melonDS-android/releases)** | 独立模拟器    |              |

### Nintendo DSi

| 名称                                                                              | 类型          | 备注                 |
| :-------------------------------------------------------------------------------- | :------------ | :------------------- |
| **melonDS DS**                                                                    | libretro 核心 | 目前不支持即时存档。 |
| **melonDS**                                                                       | BizHawk 核心  |                      |
| **[melonDS Android](https://github.com/rafaelvcaetano/melonDS-android/releases)** | 独立模拟器    |                      |

### PC Engine/TurboGrafx-16/SuperGrafx

| 名称                  | 类型          | 备注                                               |
| :-------------------- | :------------ | :------------------------------------------------- |
| **Beetle SuperGrafx** | libretro 核心 | 最推荐。                                           |
| **Beetle PCE Fast**   | libretro 核心 | SuperGrafx 游戏在 Beetle PCE Fast 核心上无法运行。 |
| **PCEHawk**           | BizHawk 核心  |                                                    |

### PC Engine CD/TurboGrafx-CD

| 名称                  | 类型          | 备注     |
| :-------------------- | :------------ | :------- |
| **Beetle SuperGrafx** | libretro 核心 | 最推荐。 |
| **Beetle PCE Fast**   | libretro 核心 |          |
| **PCEHawk**           | BizHawk 核心  |          |

### PC-8000/8800

| 名称                                                     | 类型          | 备注 |
| :------------------------------------------------------- | :------------ | :--- |
| **QUASI88**                                              | libretro 核心 |      |
| **[RAQUASI88](https://retroachievements.org/downloads)** | 独立模拟器    |      |

### PC-FX

| 名称             | 类型          | 备注                            |
| :--------------- | :------------ | :------------------------------ |
| **Beetle PC-FX** | libretro 核心 |                                 |
| **T.S.T.**       | BizHawk 核心  | specifically 为 Mednafen 分支。 |

### PlayStation

| 名称                                            | 类型          | 备注                                                        |
| :---------------------------------------------- | :------------ | :---------------------------------------------------------- |
| **Beetle PSX HW**                               | libretro 核心 | 最推荐。                                                    |
| **Beetle PSX**                                  | libretro 核心 |                                                             |
| **SwanStation**                                 | libretro 核心 |                                                             |
| **[DuckStation](https://www.duckstation.org/)** | 独立模拟器    | 使用即时存档时可能出现内存泄漏和/或烧屏，可能影响软核模式。 |

### PlayStation 2

| 名称                                                                     | 类型       | 备注 |
| :----------------------------------------------------------------------- | :--------- | :--- |
| **[PCSX2](https://pcsx2.net/)**                                          | 独立模拟器 |      |
| **[NetherSX2](https://github.com/Trixarian/NetherSX2-classic/releases)** | 独立模拟器 |      |
| **[XBSX2](https://github.com/XboxEmulationHub/XBSX2/releases)**          | 独立模拟器 |      |

### PlayStation Portable

| 名称                                       | 类型          | 备注 |
| :----------------------------------------- | :------------ | :--- |
| **PPSSPP**                                 | libretro 核心 |      |
| **[PPSSPP](https://ppsspp.org/download/)** | 独立模拟器    |      |

### Pokémon Mini

| 名称         | 类型          | 备注 |
| :----------- | :------------ | :--- |
| **PokeMini** | libretro 核心 |      |

### Saturn

| 名称                                          | 类型          | 备注                                      |
| :-------------------------------------------- | :------------ | :---------------------------------------- |
| **Beetle Saturn**                             | libretro 核心 |                                           |
| **Saturnus**                                  | BizHawk 核心  | 无法运行 Beetle Saturn 的用户的良好选择。 |
| **[Yaba Sanshiro](https://yabasanshiro.com)** | 独立模拟器    | 目前仅支持 Android。                      |

### Sega CD

::: info
这些核心似乎仍存在未映射的 RAM。
:::

| 名称                | 类型          | 备注 |
| :------------------ | :------------ | :--- |
| **Genesis Plus GX** | libretro 核心 |      |
| **PicoDrive**       | libretro 核心 |      |

### SG-1000

| 名称                                                  | 类型          | 备注     |
| :---------------------------------------------------- | :------------ | :------- |
| **Genesis Plus GX**                                   | libretro 核心 | 最推荐。 |
| **blueMSX**                                           | libretro 核心 |          |
| **[RAMeka](https://retroachievements.org/downloads)** | 独立模拟器    |          |

### SNES/Super Famicom/Satellaview/Sufami Turbo

| 名称                                                                | 类型          | 备注     |
| :------------------------------------------------------------------ | :------------ | :------- |
| **Snes9X**                                                          | libretro 核心 | 最推荐。 |
| **Mesen-S**                                                         | libretro 核心 |          |
| **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)** | 独立模拟器    |          |
| **[RA2Snes](https://github.com/Factor-64/RA2Snes/releases)**        | 主机适配器    |          |

### Uzebox

| 名称       | 类型          | 备注 |
| :--------- | :------------ | :--- |
| **Uzebox** | libretro 核心 |      |
| **Uzem**   | BizHawk 核心  |      |

### Vectrex

| 名称     | 类型          | 备注 |
| :------- | :------------ | :--- |
| **vecx** | libretro 核心 |      |

### Virtual Boy

| 名称              | 类型          | 备注                            |
| :---------------- | :------------ | :------------------------------ |
| **Beetle VB**     | libretro 核心 |                                 |
| **Virtual Boyee** | BizHawk 核心  | specifically 为 Mednafen 分支。 |

### WASM-4

| 名称       | 类型          | 备注 |
| :--------- | :------------ | :--- |
| **WASM-4** | libretro 核心 |      |

### Watara Supervision

| 名称        | 类型          | 备注 |
| :---------- | :------------ | :--- |
| **Potator** | libretro 核心 |      |

### WonderSwan (Color)

| 名称             | 类型          | 备注                            |
| :--------------- | :------------ | :------------------------------ |
| **Beetle Cygne** | libretro 核心 |                                 |
| **Cygne**        | BizHawk 核心  | specifically 为 Mednafen 分支。 |
