---
title: Emulator Support
description: Comprehensive guide to hardcore compliance and compatibility for RetroAchievements, including console-specific issues and recommendations for various cores and emulators.
---

# Emulator Support

::: info
This page focuses on hardcore-compliant emulators. For extensive notes on unsupported emulators and cores, check the [unsupported emulators page](/developer-docs/unsupported-emulators-and-cores).
:::

### 3DO Interactive Multiplayer

- ✅ libretro core: **Opera**
  - May have some issues depending on the BIOS.

### Amstrad CPC

- ✅ libretro core: **Caprice32**
  - The core does not currently support writing to disk, which may affect hashing when implemented.

### Apple II

- ✅ Standalone emulator: **[RAppleWin](https://retroachievements.org/download.php#rapplewin)**

### Arcade

- ✅ libretro core: **FinalBurn Neo**
  - Some boards may not be fully exposed.
- ✅ libretro core: **Flycast**
  - Used for Atomiswave and NAOMI 1/2.
- ✅ Standalone emulator: **[Flycast](https://github.com/flyinghead/flycast/releases)**
  - Used for Atomiswave and NAOMI 1/2.
  - Achievement developers have no way to troubleshoot issues directly, if an achievement doesn't work try using the core before opening a ticket

### Arcadia 2001

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**
- ✅ Standalone emulator: **[DroidArcadia](https://amigan.1emu.net/releases/)**

### Arduboy

- ✅ libretro core: **Ardens**
- ✅ libretro core: **Arduous**
  - Cannot emulate the Arduboy FX.

### Atari 2600

- ✅ libretro core: **Stella**
- ✅ BizHawk core: **Atari2600Hawk**
  - Achievements that require emulator resets do not work. Please open a ticket so the achievement can be fixed.

### Atari 7800

- ✅ libretro core: **ProSystem**
- ✅ BizHawk core: **A7800Hawk**

### Atari Jaguar

- ✅ libretro core: **Virtual Jaguar**
  - No save state support.
  - [Many issues with emulation](https://github.com/libretro/virtualjaguar-libretro/issues/38).
  - Does not emulate the Jaguar CD.
- ✅ BizHawk core: **Virtual Jaguar**

### Atari Jaguar CD

- ✅ BizHawk core: **Virtual Jaguar**

### Atari Lynx

- ✅ libretro core: **Handy**
  - Most recommended.
- ✅ libretro core: **Beetle Lynx**
- ✅ BizHawk core: **Handy** (Mednafen's fork)

### ColecoVision

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **blueMSX**
- ✅ BizHawk core: **ColecoHawk**

### Elektor TV Games Computer

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**
- ✅ Standalone emulator: **[DroidArcadia](https://amigan.1emu.net/releases/)**

### Fairchild Channel F

- ✅ libretro core: **FreeChaF**

### Famicom Disk System

- ✅ libretro core: **FCEUmm**
- ✅ libretro core: **Mesen**
- ✅ Standalone emulator: **[RANes](https://retroachievements.org/download.php#ranes)**

### Game Boy

- ✅ libretro core: **Gambatte**
  - Most recommended.
- ✅ libretro core: **Gearboy**
- ✅ libretro core: **mGBA**
- ✅ libretro core: **VBA-M**
- ✅ BizHawk core: **Gambatte** (Pokémon speedrunning fork)
- ✅ BizHawk core: **GBHawk**
- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Standalone emulator: **[Pizza Boy C Basic & Pro](https://pizzaemulators.com/)**

### Game Boy Color

- ✅ libretro core: **Gambatte**
  - Most recommended.
- ✅ libretro core: **Gearboy**
- ✅ libretro core: **mGBA**
- ✅ libretro core: **VBA-M**
- ✅ BizHawk core: **Gambatte** (Pokémon speedrunning fork)
- ✅ BizHawk core: **GBHawk**
- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Standalone emulator: **[Pizza Boy C Basic & Pro](https://pizzaemulators.com/)**

### Game Boy Advance

- ✅ libretro core: **mGBA**
  - Most recommended.
- ✅ libretro core: **VBA-M**
- ✅ libretro core: **Beetle GBA**
- ✅ libretro core: **VBA Next**
- ✅ BizHawk core: **mGBA**
- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Standalone emulator: **[Pizza Boy A Basic & Pro](https://pizzaemulators.com/)**

### GameCube

- ✅ Standalone emulator: **[Dolphin](https://retroachievements.org/download.php#dolphin)**
  - Must use version 2407-68 or newer.
  - Ensure "Enable Dual Core (speedup)" is unchecked as it is unsupported.

### Game Gear

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **Gearsystem**
- ✅ Standalone emulator: **[Pizza Boy SC Basic & Pro](https://pizzaemulators.com/)**

### Intellivision

- ✅ libretro core: **FreeIntv**
  - Crashes when the game is reset.
  - Some crashes might be related to the Intellivoice not being emulated.
- ✅ BizHawk core: **IntelliHawk**

### Interton VC 4000

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**
- ✅ Standalone emulator: **[DroidArcadia](https://amigan.1emu.net/releases/)**

### Magnavox Odyssey 2

- ✅ libretro core: **O2EM**

### Master System/Mark III

- ✅ libretro core: **Gearsystem**
- ✅ libretro core: **Genesis Plus GX**
- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ Standalone emulator: **[Pizza Boy SC Basic & Pro](https://pizzaemulators.com/)**

### Mega Duck

- ✅ libretro core: **SameDuck**

### MSX

- ✅ libretro core: **blueMSX**

### Neo Geo CD

- ✅ libretro core: **NeoCD**

### Neo Geo Pocket (Color)

- ✅ libretro core: **Beetle NeoPop**
- ✅ BizHawk core: **NeoPop** (Mednafen)

### NES/Famicom

- ✅ libretro core: **FCEUmm**
  - Most recommended.
- ✅ libretro core: **Mesen**
- ✅ libretro core: **QuickNES**
  - Does not emulate the Famicom Disk System.
- ✅ Standalone emulator: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ Standalone emulator: **[Delta](https://faq.deltaemulator.com/)**

### Nintendo 64

- ✅ libretro core: **Mupen64Plus-Next**
  - Most recommended.
  - Separated into cores for OpenGL ES 2 and 3.
- ✅ libretro core: **ParaLLEl N64**
- ✅ Standalone emulator: **[RAProject64](https://retroachievements.org/download.php#rap64)**
- ✅ Standalone emulator: **[Luna Project64](https://github.com/Luna-Project64/Luna-Project64/releases)**
- ✅ Standalone emulator: **[Delta](https://faq.deltaemulator.com/)**

### Nintendo DS

- Limited microphone support.
- ✅ libretro core: **DeSmuME**
  - Does not emulate the DSi.
- ✅ libretro core: **melonDS**
- ✅ libretro core: **melonDS DS**
- ✅ BizHawk core: **melonDS**
- ✅ Standalone emulator: **[melonDS Android](https://github.com/rafaelvcaetano/melonDS-android/releases)**

### Nintendo DSi

- ✅ libretro core: **melonDS DS**
  - Does not support save states at this time.
- ✅ BizHawk core: **melonDS**
- ✅ Standalone emulator: **[melonDS Android](https://github.com/rafaelvcaetano/melonDS-android/releases)**

### PC Engine/TurboGrafx-16/SuperGrafx

- ✅ libretro core: **Beetle SuperGrafx**
  - Most recommended.
- ✅ libretro core: **Beetle PCE Fast**
  - SuperGrafx games do not work on the Beetle PCE Fast core.
- ✅ BizHawk core: **PCEHawk**

### PC Engine CD/TurboGrafx-CD

- ✅ libretro core: **Beetle SuperGrafx**
  - Most recommended.
- ✅ libretro core: **Beetle PCE Fast**
- ✅ BizHawk core: **PCEHawk**

### PC-8000/8800

- ✅ libretro core: **QUASI88**
- ✅ Standalone emulator: **[RAQUASI88](https://retroachievements.org/download.php#raquasi88)**

### PC-FX

- ✅ libretro core: **Beetle PC-FX**
- ✅ BizHawk core: **T.S.T.** (Mednafen)

### PlayStation

- ✅ libretro core: **Beetle PSX HW**
  - Most recommended.
- ✅ libretro core: **Beetle PSX**
- ✅ libretro core: **SwanStation**
- ✅ Standalone emulator: **[DuckStation](https://www.duckstation.org/)**
  - There may be memory leaks and/or burn-in when using save states. This can be disruptive to softcore mode.

### PlayStation 2

- ✅ Standalone emulator: **[PCSX2](https://pcsx2.net/)**
- ✅ Standalone emulator: **[NetherSX2](https://github.com/Trixarian/NetherSX2-classic/releases)**
- ✅ Standalone emulator: **[XBSX2](https://github.com/XboxEmulationHub/XBSX2/releases)**

### PlayStation Portable

- ✅ Standalone emulator: **[PPSSPP](https://www.ppsspp.org/download/)**
- ✅ libretro core: **PPSSPP**

### Pokémon Mini

- ✅ libretro core: **PokeMini**

### Sega 32X

- ✅ BizHawk core: **PicoDrive**
  - Most recommended.
- ✅ libretro core: **PicoDrive**
  - Several games are problematic, use BizHawk if an achievement shows as unsupported or the game performs poorly.
  - Appears to still have unmapped RAM.

### Sega CD

- Appears to still have unmapped RAM.
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **PicoDrive**

### Sega Dreamcast

- ✅ libretro core: **Flycast**
  - Disable threaded rendering to properly use save states.
- ✅ Standalone emulator: **[Flycast](https://github.com/flyinghead/flycast/releases)**
  - Achievement developers have no way to troubleshoot issues directly, if an achievement doesn't work try using the core before opening a ticket

### Sega Genesis/Mega Drive

- ✅ libretro core: **Genesis Plus GX**
  - Most recommended.
- ✅ libretro core: **PicoDrive**
- ✅ BizHawk core: **Genplus-gx** (Genesis Plus GX)
- ✅ Standalone emulator: **[Pizza Boy SC Basic & Pro](https://pizzaemulators.com/)**

### Sega Saturn

- ✅ libretro core: **Beetle Saturn**
- ✅ BizHawk core: **Saturnus** (Mednafen)
  - Good choice for users who can't run Beetle Saturn

### SG-1000

- ✅ libretro core: **Genesis Plus GX**
  - Most recommended.
- ✅ libretro core: **blueMSX**
- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**

### SNES/Super Famicom/Satellaview/Sufami Turbo

- ✅ libretro core: **Snes9x**
  - Most recommended.
- ✅ libretro core: **Mesen-S**
- ✅ Standalone emulator: **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)**
- ✅ Standalone emulator: **[Delta](https://faq.deltaemulator.com/)**

### Uzebox

- ✅ BizHawk core: **Uzem**
- ✅ libretro core: **Uzebox**

### Vectrex

- ✅ libretro core: **vecx**

### Virtual Boy

- ✅ libretro core: **Beetle VB**
- ✅ BizHawk core: **Virtual Boyee** (Mednafen)

### WASM-4

- ✅ libretro core: **WASM-4**

### Watara Supervision

- ✅ libretro core: **Potator**

### WonderSwan (Color)

- ✅ libretro core: **Beetle Cygne**
- ✅ BizHawk core: **Cygne** (Mednafen)

More details on BizHawk cores can be found [here](https://tasvideos.org/BizHawk).
