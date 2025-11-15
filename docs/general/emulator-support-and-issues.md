---
title: Emulator Support
description: Comprehensive guide to hardcore compliance and compatibility for RetroAchievements, including console-specific issues and recommendations for various cores and emulators.
---

# Emulator Support

::: info
This page focuses on hardcore-compliant emulators. For detailed compliance requirements, see the [Hardcore Compliance Requirements](/general/hardcore-compliance-requirements) page. For extensive notes on unsupported emulators and cores, check the [unsupported emulators page](/developer-docs/unsupported-emulators-and-cores).
:::

libretro cores can be played on the following hardcore-compliant frontends. You can find each of them on the [Downloads page](https://retroachievements.org/downloads), listing all cores available for them:

- [RetroArch](https://www.retroarch.com/index.php?page=platforms) - Supports 40+ systems.
- [RALibRetro](https://retroachievements.org/downloads) - Supports 40+ systems.
- [Firelight](https://biscuitcakes.itch.io/firelight) - Supports 10+ systems.
- [Delta (iOS)](https://apps.apple.com/us/app/delta-game-emulator/id1048524688) - Supports 5+ systems.

BizHawk cores can only be played on [BizHawk](https://tasvideos.org/Bizhawk). More details on BizHawk cores can be found [here](https://tasvideos.org/BizHawk).

### 32X

| Name          | Type          | Notes                                                                                                                                                     |
| :------------ | :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PicoDrive** | libretro core | - Several games are problematic, use BizHawk if an achievement shows as unsupported or the game performs poorly.<br>- Appears to still have unmapped RAM. |
| **PicoDrive** | BizHawk core  | Most recommended.                                                                                                                                         |

### 3DO Interactive Multiplayer

| Name      | Type          | Notes                                       |
| :-------- | :------------ | :------------------------------------------ |
| **Opera** | libretro core | May have some issues depending on the BIOS. |

### Amstrad CPC

| Name          | Type          | Notes                                                                                           |
| :------------ | :------------ | :---------------------------------------------------------------------------------------------- |
| **Caprice32** | libretro core | The core does not currently support writing to disk, which may affect hashing when implemented. |

### Apple II

| Name                                                     | Type                 | Notes |
| :------------------------------------------------------- | :------------------- | :---- |
| **[RAppleWin](https://retroachievements.org/downloads)** | Standalone emulator  |       |

### Arcade

| Name                                                          | Type                | Notes                                                                                                                                                                                    |
| :------------------------------------------------------------ | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FinalBurn Neo**                                             | libretro core       | Some boards may not be fully exposed.                                                                                                                                                    |
| **Flycast**                                                   | libretro core       | Used for Atomiswave and NAOMI 1/2.                                                                                                                                                       |
| **[Flycast](https://github.com/flyinghead/flycast/releases)** | Standalone emulator | - Used for Atomiswave and NAOMI 1/2.<br>- Achievement developers have no way to troubleshoot issues directly, if an achievement doesn't work try using the core before opening a ticket. |

### Arcadia 2001

| Name                                                  | Type                | Notes |
| :---------------------------------------------------- | :------------------ | :---- |
| **[WinArcadia](https://amigan.1emu.net/releases/)**   | Standalone emulator |       |
| **[DroidArcadia](https://amigan.1emu.net/releases/)** | Standalone emulator |       |

### Arduboy

| Name        | Type          | Notes                          |
| :---------- | :------------ | :----------------------------- |
| **Ardens**  | libretro core |                                |
| **Arduous** | libretro core | Cannot emulate the Arduboy FX. |

### Atari 2600

| Name              | Type          | Notes                                                                                                        |
| :---------------- | :------------ | :----------------------------------------------------------------------------------------------------------- |
| **Stella**        | libretro core |                                                                                                              |
| **Atari2600Hawk** | BizHawk core  | Achievements that require emulator resets do not work. Please open a ticket so the achievement can be fixed. |

### Atari 7800

| Name          | Type          | Notes |
| :------------ | :------------ | :---- |
| **ProSystem** | libretro core |       |
| **A7800Hawk** | BizHawk core  |       |

### Atari Jaguar

| Name               | Type          | Notes                                                                                                                                                          |
| :----------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Virtual Jaguar** | libretro core | - No save state support.<br>- Does not emulate the Jaguar CD.<br>- [Many issues with emulation](https://github.com/libretro/virtualjaguar-libretro/issues/38). |
| **Virtual Jaguar** | BizHawk core  |                                                                                                                                                                |

### Atari Jaguar CD

| Name               | Type         | Notes |
| :----------------- | :----------- | :---- |
| **Virtual Jaguar** | BizHawk core |       |

### Atari Lynx

| Name            | Type          | Notes                         |
| :-------------- | :------------ | :---------------------------- |
| **Handy**       | libretro core | Most recommended.             |
| **Beetle Lynx** | libretro core |                               |
| **Handy**       | BizHawk core  | Mednafen's fork specifically. |

### ColecoVision

| Name                                                  | Type                | Notes |
| :---------------------------------------------------- | :------------------ | :---- |
| **blueMSX**                                           | libretro core       |       |
| **ColecoHawk**                                        | BizHawk core        |       |
| **[RAMeka](https://retroachievements.org/downloads)** | Standalone emulator |       |

### Dreamcast

| Name                                                          | Type                | Notes                                                                                                                                          |
| :------------------------------------------------------------ | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **Flycast**                                                   | libretro core       | Disable threaded rendering to properly use save states.                                                                                        |
| **[Flycast](https://github.com/flyinghead/flycast/releases)** | Standalone emulator | Achievement developers have no way to troubleshoot issues directly, if an achievement doesn't work try using the core before opening a ticket. |

### Elektor TV Games Computer

| Name                                                  | Type                | Notes |
| :---------------------------------------------------- | :------------------ | :---- |
| **[WinArcadia](https://amigan.1emu.net/releases/)**   | Standalone emulator |       |
| **[DroidArcadia](https://amigan.1emu.net/releases/)** | Standalone emulator |       |

### Fairchild Channel F

| Name         | Type          | Notes |
| :----------- | :------------ | :---- |
| **FreeChaF** | libretro core |       |

### Game Boy

| Name                                                         | Type                | Notes |
| :----------------------------------------------------------- | :------------------ | :-------------------------------------- |
| **Gambatte**                                                 | libretro core       | Most recommended.                       |
| **Gearboy**                                                  | libretro core       |                                         |
| **mGBA**                                                     | libretro core       |                                         |
| **VBA-M**                                                    | libretro core       |                                         |
| **Gambatte**                                                 | BizHawk core        | Pokémon speedrunning fork specifically. |
| **GBHawk**                                                   | BizHawk core        |                                         |
| **[RAVBA](https://retroachievements.org/downloads)**         | Standalone emulator |                                         |
| **[Pizza Boy C Basic & Pro](https://pizzaemulators.com/)**   | Standalone emulator |                                         |
| **[SkyEmu](https://github.com/skylersaleh/SkyEmu/pull/321)** | Standalone emulator |                                         |
| **[Playback](https://www.epilogue.co/)**                     | Standalone emulator | GB Operator device required.            |
| **[Linkboy](https://retroachievements.org/downloads)**       | Standalone emulator |                                         |

### Game Boy Color

| Name                                                         | Type                | Notes |
| :----------------------------------------------------------- | :------------------ | :-------------------------------------- |
| **Gambatte**                                                 | libretro core       | Most recommended.                       |
| **Gearboy**                                                  | libretro core       |                                         |
| **mGBA**                                                     | libretro core       |                                         |
| **VBA-M**                                                    | libretro core       |                                         |
| **Gambatte**                                                 | BizHawk core        | Pokémon speedrunning fork specifically. |
| **GBHawk**                                                   | BizHawk core        |                                         |
| **[RAVBA](https://retroachievements.org/downloads)**         | Standalone emulator |                                         |
| **[Pizza Boy C Basic & Pro](https://pizzaemulators.com/)**   | Standalone emulator |                                         |
| **[SkyEmu](https://github.com/skylersaleh/SkyEmu/pull/321)** | Standalone emulator |                                         |
| **[Playback](https://www.epilogue.co/)**                     | Standalone emulator | GB Operator device required.            |
| **[Linkboy](https://retroachievements.org/downloads)**       | Standalone emulator |                                         |

### Game Boy Advance

| Name                                                         | Type                | Notes|
| :----------------------------------------------------------- | :------------------ | :--------------------------- |
| **mGBA**                                                     | libretro core       | Most recommended.            |
| **VBA-M**                                                    | libretro core       |                              |
| **Beetle GBA**                                               | libretro core       |                              |
| **VBA Next**                                                 | libretro core       |                              |
| **mGBA**                                                     | BizHawk core        |                              |
| **[RAVBA](https://retroachievements.org/downloads)**         | Standalone emulator |                              |
| **[Pizza Boy A Basic & Pro](https://pizzaemulators.com/)**   | Standalone emulator |                              |
| **[SkyEmu](https://github.com/skylersaleh/SkyEmu/pull/321)** | Standalone emulator |                              |
| **[Playback](https://www.epilogue.co/)**                     | Standalone emulator | GB Operator device required. |
| **[Linkboy](https://retroachievements.org/downloads)**       | Standalone emulator |                                         |

### GameCube

| Name                                                                      | Type                | Notes                                                                                                            |
| :------------------------------------------------------------------------ | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| **[Dolphin](https://retroachievements.org/download.php#dolphin)**         | Standalone emulator | - Must use version 2407-68 or newer.<br>- Ensure "Enable Dual Core (speedup)" is unchecked as it is unsupported. |
| **[DolphinUWP](https://github.com/SternXD/dolphin/releases/tag/1.1.9.0)** | Standalone emulator |                                                                                                                  |

### Game Gear

| Name                                                        | Type                | Notes |
| :---------------------------------------------------------- | :------------------ | :---- |
| **Genesis Plus GX**                                         | libretro core       |       |
| **Gearsystem**                                              | libretro core       |       |
| **[RAMeka](https://retroachievements.org/downloads)**       | Standalone emulator |       |
| **[Pizza Boy SC Basic & Pro](https://pizzaemulators.com/)** | Standalone emulator |       |

### Genesis/Mega Drive

| Name                                                        | Type                | Notes                          |
| :---------------------------------------------------------- | :------------------ | :----------------------------- |
| **Genesis Plus GX**                                         | libretro core       | Most recommended.              |
| **PicoDrive**                                               | libretro core       |                                |
| **Genplus-gx**                                              | BizHawk core        | Also known as Genesis Plus GX. |
| **[Pizza Boy SC Basic & Pro](https://pizzaemulators.com/)** | Standalone Emulator |                                |

### Intellivision

| Name            | Type          | Notes                                                                                                        |
| :-------------- | :------------ | :----------------------------------------------------------------------------------------------------------- |
| **FreeIntv**    | libretro core | - Crashes when the game is reset.<br>- Some crashes might be related to the Intellivoice not being emulated. |
| **IntelliHawk** | BizHawk core  |                                                                                                              |

### Interton VC 4000

| Name                                                  | Type                | Notes |
| :---------------------------------------------------- | :------------------ | :---  |
| **[WinArcadia](https://amigan.1emu.net/releases/)**   | Standalone emulator |       |
| **[DroidArcadia](https://amigan.1emu.net/releases/)** | Standalone emulator |       |

### Magnavox Odyssey 2

| Name     | Type          | Notes |
| :------- | :------------ | :---- |
| **O2EM** | libretro core |       |

### Master System/Mark III

| Name                                                        | Type                | Notes |
| :---------------------------------------------------------- | :------------------ | :---- |
| **Genesis Plus GX**                                         | libretro core       |       |
| **Gearsystem**                                              | libretro core       |       |
| **[RAMeka](https://retroachievements.org/downloads)**       | Standalone emulator |       |
| **[Pizza Boy SC Basic & Pro](https://pizzaemulators.com/)** | Standalone emulator |       |

### Mega Duck

| Name         | Type          | Notes |
| :----------- | :------------ | :---- |
| **SameDuck** | libretro core |       |

### MSX

| Name        | Type          | Notes |
| :---------- | :------------ | :---- |
| **blueMSX** | libretro core |       |

### Neo Geo CD

| Name      | Type          | Notes |
| :-------- | :------------ | :---- |
| **NeoCD** | libretro core |       |

### Neo Geo Pocket (Color)

| Name              | Type          | Notes                       |
| :---------------- | :------------ | :-------------------------- |
| **Beetle NeoPop** | libretro core |                             |
| **NeoPop**        | BizHawk core  | Mednafen fork specifically. |

### NES/Famicom

| Name                                                           | Type                | Notes                                     |
| :---------------------------------------------------           | :------------------ | :---------------------------------------- |
| **FCEUmm**                                                     | libretro core       | Most recommended.                         |
| **Mesen**                                                      | libretro core       |                                           |
| **QuickNES**                                                   | libretro core       | Does not emulate the Famicom Disk System. |
| **[RANes](https://retroachievements.org/downloads)**           | Standalone emulator |                                           |
| **[NES RA Adapter](https://github.com/odelot/nes-ra-adapter)** | Console adapter     |                   |

### NES/Famicom Disk System

| Name                                                 | Type                | Notes             |
| :--------------------------------------------------- | :------------------ | :---------------- |
| **FCEUmm**                                           | libretro core       | Most recommended. |
| **Mesen**                                            | libretro core       |                   |
| **[RANes](https://retroachievements.org/downloads)** | Standalone emulator |                   |

### Nintendo 64

| Name                                                                              | Type                | Notes                                                                |
| :-------------------------------------------------------------------------------- | :------------------ | :------------------------------------------------------------------- |
| **Mupen64Plus-Next**                                                              | libretro core       | - Most recommended.<br>- Separated into cores for OpenGL ES 2 and 3. |
| **ParaLLEl N64**                                                                  | libretro core       |                                                                      |
| **[RAProject64](https://retroachievements.org/downloads)**                        | Standalone emulator |                                                                      |
| **[Luna's Project64](https://github.com/Luna-Project64/Luna-Project64/releases)** | Standalone emulator |                                                                      |

### Nintendo DS

::: info
Limited microphone support.
:::

| Name                                                                              | Type                | Notes                     |
| :-------------------------------------------------------------------------------- | :------------------ | :------------------------ |
| **DeSmuME**                                                                       | libretro core       | Does not emulate the DSi. |
| **melonDS**                                                                       | libretro core       |                           |
| **melonDS DS**                                                                    | libretro core       |                           |
| **melonDS**                                                                       | BizHawk core        |                           |
| **[melonDS Android](https://github.com/rafaelvcaetano/melonDS-android/releases)** | Standalone emulator |                           |

### Nintendo DSi

| Name                                                                              | Type                | Notes                                      |
| :-------------------------------------------------------------------------------- | :------------------ | :----------------------------------------- |
| **melonDS DS**                                                                    | libretro core       | Does not support save states at this time. |
| **melonDS**                                                                       | BizHawk core        |                                            |
| **[melonDS Android](https://github.com/rafaelvcaetano/melonDS-android/releases)** | Standalone emulator |                                            |

### PC Engine/TurboGrafx-16/SuperGrafx

| Name                  | Type          | Notes                                                     |
| :-------------------- | :------------ | :-------------------------------------------------------- |
| **Beetle SuperGrafx** | libretro core | Most recommended.                                         |
| **Beetle PCE Fast**   | libretro core | SuperGrafx games do not work on the Beetle PCE Fast core. |
| **PCEHawk**           | BizHawk core  |                                                           |

### PC Engine CD/TurboGrafx-CD

| Name                  | Type          | Notes             |
| :-------------------- | :------------ | :---------------- |
| **Beetle SuperGrafx** | libretro core | Most recommended. |
| **Beetle PCE Fast**   | libretro core |                   |
| **PCEHawk**           | BizHawk core  |                   |

### PC-8000/8800

| Name                                                                  | Type                | Notes |
| :-------------------------------------------------------------------- | :------------------ | :---- |
| **QUASI88**                                                           | libretro core       |       |
| **[RAQUASI88](https://retroachievements.org/downloads)** | Standalone emulator |       |

### PC-FX

| Name                  | Type          | Notes                       |
| :-------------------- | :------------ | :-------------------------- |
| **Beetle PC-FX**      | libretro core |                             |
| **T.S.T.**            | BizHawk core  | Mednafen fork specifically. |

### PlayStation

| Name                                            | Type                | Notes                                                                                                     |
| :---------------------------------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------- |
| **Beetle PSX HW**                               | libretro core       | Most recommended.                                                                                         |
| **Beetle PSX**                                  | libretro core       |                                                                                                           |
| **SwanStation**                                 | libretro core       |                                                                                                           |
| **[DuckStation](https://www.duckstation.org/)** | Standalone emulator | There may be memory leaks and/or burn-in when using save states. This can be disruptive to softcore mode. |

### PlayStation 2

| Name                                                                     | Type                | Notes |
| :----------------------------------------------------------------------- | :------------------ | :---- |
| **[PCSX2](https://pcsx2.net/)**                                          | Standalone emulator |       |
| **[NetherSX2](https://github.com/Trixarian/NetherSX2-classic/releases)** | Standalone emulator |       |
| **[XBSX2](https://github.com/XboxEmulationHub/XBSX2/releases)**          | Standalone emulator |       |

### PlayStation Portable

| Name                                       | Type                | Notes |
| :----------------------------------------- | :------------------ | :---- |
| **PPSSPP**                                 | libretro core       |       |
| **[PPSSPP](https://ppsspp.org/download/)** | Standalone emulator |       |

### Pokémon Mini

| Name         | Type          | Notes |
| :----------- | :------------ | :---- |
| **PokeMini** | libretro core |       |

### Saturn

| Name                                          | Type                | Notes                                              |
| :-------------------------------------------- | :------------------ | :------------------------------------------------- |
| **Beetle Saturn**                             | libretro core       |                                                    |
| **Saturnus**                                  | BizHawk core        | Good choice for users who can't run Beetle Saturn. |
| **[Yaba Sanshiro](https://yabasanshiro.com)** | Standalone emulator | Currently only on Android.                         |

### Sega CD

::: info
These cores appear to still have unmapped RAM.
:::

| Name                | Type          | Notes |
| :------------------ | :------------ | :---- |
| **Genesis Plus GX** | libretro core |       |
| **PicoDrive**       | libretro core |       |

### SG-1000

| Name                                                  | Type                | Notes             |
| :---------------------------------------------------- | :------------------ | :---------------- |
| **Genesis Plus GX**                                   | libretro core       | Most recommended. |
| **blueMSX**                                           | libretro core       |                   |
| **[RAMeka](https://retroachievements.org/downloads)** | Standalone emulator |                   |

### SNES/Super Famicom/Satellaview/Sufami Turbo

| Name                                                                | Type                | Notes             |
| :------------------------------------------------------------------ | :------------------ | :---------------- |
| **Snes9X**                                                          | libretro core       | Most recommended. |
| **Mesen-S**                                                         | libretro core       |                   |
| **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)** | Standalone emulator |                   |
| **[RA2Snes](https://github.com/Factor-64/RA2Snes/releases)**        | Console adapter     |                   |

### Uzebox

| Name       | Type          | Notes |
| :--------- | :------------ | :---- |
| **Uzebox** | libretro core |       |
| **Uzem**   | BizHawk core  |       |

### Vectrex

| Name     | Type          | Notes |
| :------- | :------------ | :---- |
| **vecx** | libretro core |       |

### Virtual Boy

| Name              | Type          | Notes                       |
| :---------------- | :------------ | :-------------------------- |
| **Beetle VB**     | libretro core |                             |
| **Virtual Boyee** | BizHawk core  | Mednafen fork specifically. |

### WASM-4

| Name       | Type          | Notes |
| :--------- | :------------ | :---- |
| **WASM-4** | libretro core |       |

### Watara Supervision

| Name        | Type          | Notes |
| :-------    | :------------ | :---- |
| **Potator** | libretro core |       |

### WonderSwan (Color)

| Name             | Type          | Notes                       |
| :--------------- | :------------ | :-------------------------- |
| **Beetle Cygne** | libretro core |                             |
| **Cygne**        | BizHawk core  | Mednafen fork specifically. |
