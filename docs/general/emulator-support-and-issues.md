---
title: Emulator Support
description: Comprehensive guide to emulator support and compatibility for RetroAchievements, including console-specific issues and recommendations for various cores and emulators.
---

# Emulator Support and Issues

### 32X

- ✅ libretro core: **PicoDrive**
  - Several games are problematic, use BizHawk if an achievement shows as unsupported.
  - Appears to still have unmapped RAM.
- ✅ BizHawk core: **PicoDrive**
  - Most recommended.

### 3DO Interactive Multiplayer

- ✅ libretro core: **Opera**
  - May have some issues depending on the BIOS.

### Amiga

- ❌ _Not supported_.

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

### Arcadia 2001

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Arduboy

- ✅ libretro core: **Ardens**
- ✅ libretro core: **Arduous**
  - Cannot emulate the Arduboy FX.

### Atari 2600

- ✅ libretro core: **Stella**
- ✅ BizHawk core: **Atari2600Hawk**
  - Achievements that require emulator resets do not work. Please open a ticket so the achievement can be fixed.

### Atari 5200

- ❌ _Not supported_.

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

### Atari ST

- ❌ _Not supported_.

### Cassette Vision

- ❌ _Not supported_.

### CHIP-8

- ❌ _Not supported_.

### Commodore 128

- ❌ _Not supported_.

### Commodore 64

- ❌ _Not supported_.

### ColecoVision

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **blueMSX**
- ✅ BizHawk core: **ColecoHawk**

### Dreamcast

- ✅ libretro core: **Flycast**
  - Disable threaded rendering to properly use save states.

### Elektronika BK-0010/11

- ❌ _Not supported_.

### Elektor TV Games Computer

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Enterprise 64/128

- ❌ _Not supported_.

### Fairchild Channel F

- ✅ libretro core: **FreeChaF**

### Famicom Disk System

- ✅ Standalone emulator: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ libretro core: **FCEUmm**
- ✅ libretro core: **Mesen**

### FM Towns

- ❌ _Not supported_.

### Game & Watch

- ❌ _Not supported_.

### Game Boy

- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ libretro core: **Gambatte**
  - Most recommended.
- ✅ libretro core: **Gearboy**
- ✅ libretro core: **mGBA**
- ✅ libretro core: **VBA-M**
- ✅ BizHawk core: **Gambatte** (Pokémon speedrunning fork)
- ✅ BizHawk core: **GBHawk**

### Game Boy Color

- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ libretro core: **Gambatte**
  - Most recommended.
- ✅ libretro core: **Gearboy**
- ✅ libretro core: **mGBA**
- ✅ libretro core: **VBA-M**
- ✅ BizHawk core: **Gambatte** (Pokémon speedrunning fork)
- ✅ BizHawk core: **GBHawk**

### Game Boy Advance

- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ libretro core: **VBA-M**
- ✅ libretro core: **Beetle GBA**
- ✅ libretro core: **VBA Next**
- ✅ libretro core: **mGBA**
  - Most recommended.
- ✅ BizHawk core: **mGBA**

### GameCube

- ✅ Standalone emulator: **[Dolphin](https://retroachievements.org/download.php#dolphin)**
  - Must use version 2407-68 or newer.
  - Ensure "Enable Dual Core (speedup)" is unchecked as it is unsupported.

### Game Gear

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **Gearsystem**

### Genesis/Mega Drive

- ✅ libretro core: **Genesis Plus GX**
  - Most recommended.
- ✅ libretro core: **PicoDrive**
- ✅ BizHawk core: **Genplus-gx** (Genesis Plus GX)

### Intellivision

- ✅ libretro core: **FreeIntv**
  - Crashes when the game is reset.
  - Some crashes might be related to the Intellivoice not being emulated.
- ✅ BizHawk core: **IntelliHawk**

### Interton VC 4000

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**

### J2ME

- ❌ _Not supported_.

### Magnavox Odyssey 2

- ✅ libretro core: **O2EM**

### Master System/Mark III

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Gearsystem**
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **PicoDrive**

### Mega Duck

- ✅ libretro core: **SameDuck**

### MicroW8

- ❌ _Not supported_.

### MS-DOS

- ❌ _Not supported_.

### MSX

- ✅ libretro core: **blueMSX**

### Neo Geo CD

- ✅ libretro core: **NeoCD**

### Neo Geo Pocket (Color)

- ✅ libretro core: **Beetle NeoPop**
- ✅ BizHawk core: **NeoPop** (Mednafen)

### NES/Famicom

- ✅ Standalone emulator: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ libretro core: **FCEUmm**
  - Most recommended.
- ✅ libretro core: **Mesen**
- ✅ libretro core: **QuickNES**
  - Does not emulate the Famicom Disk System.

### Nintendo 3DS

- ❌ _Not supported_.

### Nintendo 64

- ✅ Standalone emulator: **[RAProject64](https://retroachievements.org/download.php#rap64)**
- ✅ libretro core: **ParaLLEl N64**
- ✅ libretro core: **Mupen64Plus-Next**
  - Separated into cores for OpenGL ES 2 and 3.
  - Most recommended.

### Nintendo DS

- Limited microphone support.
- ✅ libretro core: **DeSmuME**
  - Does not emulate the DSi.
- ✅ libretro core: **DeSmuME 2015**
  - Does not emulate the DSi.
- ✅ libretro core: **melonDS**
- ✅ BizHawk core: **melonDS**

### Nintendo DSi

- ✅ libretro core: **melonDS DS**
  - Does not support save states at this time.
- ✅ BizHawk core: **melonDS**

### Nokia N-Gage

- ❌ _Not supported_.

### Oric

- ❌ _Not supported_.

### Palm OS

- ❌ _Not supported_.

### PC Engine/TurboGrafx-16/SuperGrafx

- ✅ libretro core: **Beetle PCE Fast**
  - SuperGrafx games do not work on the Beetle PCE Fast core.
- ✅ libretro core: **Beetle SuperGrafx**
  - Most recommended.
- ✅ BizHawk core: **PCEHawk**

### PC Engine CD/TurboGrafx-CD

- ✅ libretro core: **Beetle PCE Fast**
- ✅ libretro core: **Beetle SuperGrafx**
  - Most recommended.
- ✅ BizHawk core: **PCEHawk**

### PC-6001

- ❌ _Not supported_.

### PC-8000/8800

- ✅ Standalone emulator: **[RAQUASI88](https://retroachievements.org/download.php#raquasi88)**

### PC-9800

- ❌ _Not supported_.

### PC-FX

- ✅ libretro core: **Beetle PC-FX**
- ✅ BizHawk core: **T.S.T.** (Mednafen)

### Philips CD-i

- ❌ _Not supported_.

### Philips P2000T

- ❌ _Not supported_.

### Pico

- ❌ _Not supported_.

### Pico-8

- ❌ _Not supported_.

### PlayStation

- ✅ Standalone emulator: **[DuckStation](https://www.duckstation.org/wiki/Main_Page)**
  - There may be memory leak and/or burn-in when using save states.
- ✅ libretro core: **Beetle PSX HW**
  - Most recommended.
- ✅ libretro core: **Beetle PSX**
- ✅ libretro core: **SwanStation**

### PlayStation 2

- ✅ Standalone emulator: **[PCSX2](https://pcsx2.net/)**

### PlayStation 3
- ❌ _Not supported_.

### PlayStation Portable

- ✅ Standalone emulator: **[PPSSPP](https://www.ppsspp.org/download/)**
  - Does not support RAIntegration at this time, so achievement developers are unable to troubleshoot potential issues.
- ✅ libretro core: **PPSSPP**
  - Loading save states too fast can cause it to crash.
  - Some games have graphical issues.

### PocketStation

- ❌ _Not supported_.

### Pokémon Mini

- ✅ libretro core: **PokeMini**

### SAM Coupé

- ❌ _Not supported_.

### Saturn

- ✅ libretro core: **Beetle Saturn**

### Sega CD

- Appears to still have unmapped RAM.
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **PicoDrive**

### SG-1000

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Genesis Plus GX**
  - Most recommended.
- ✅ libretro core: **blueMSX**

### Sharp X1

- ❌ _Not supported_.

### Sharp X68000

- ❌ _Not supported_.

### SNES/Super Famicom/Satellaview/Sufami Turbo

- ✅ Standalone emulator: **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)**
- ✅ libretro core: **Snes9x**
  - Most recommended.
- ✅ libretro core: **Mesen-S**

### SpectraVideo SVI 318/328

- ❌ _Not supported_.

### Super Cassette Vision

- ❌ _Not supported_.

### Thomson MO/TO
- ❌ _Not supported_.

### TI-83

- ❌ _Not supported_.

### TIC-80

- ❌ _Not supported_.

### Uzebox

- ✅ BizHawk core: **Uzem**
- ✅ libretro core: **Uzebox**

### Vectrex

- ✅ libretro core: **vecx**

### VIC-20

- ❌ _Not supported_.

### Virtual Boy

- ✅ libretro core: **Beetle VB**
- ✅ BizHawk core: **Virtual Boyee** (Mednafen)

### VMU/VMS

- ❌ _Not supported_.

### WASM-4

- ✅ libretro core: **WASM-4**

### Watara Supervision

- ✅ libretro core: **Potator**

### Wii

- ❌ _Not supported_.

### Wii U

- ❌ _Not supported_.

### WonderSwan (Color)

- ✅ libretro core: **Beetle Cygne**
- ✅ BizHawk core: **Cygne** (Mednafen)

### Xbox

- ❌ _Not supported_.

### Xbox 360

- ❌ _Not supported_.

### Zeebo

- ❌ _Not supported_.

### ZX81

- ❌ _Not supported_.

### ZX Spectrum

- ❌ _Not supported_.

More details on BizHawk cores can be found [here](https://tasvideos.org/BizHawk).
