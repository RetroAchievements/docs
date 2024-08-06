---
title: Emulator Support
description: Comprehensive guide to emulator support and compatibility for RetroAchievements, including console-specific issues and recommendations for various cores and emulators.
---

# Emulator Support and Issues

## Console Support

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

- ❓ libretro core: **FS-UAE**
- ❌ libretro core: **PUAE**
  - Needs a memory map to see the exposed memory.
  - Locks disk files so they can't be opened for hashing.
  - Hard disk support?
- ❓ libretro core: **PUAE 2021**
- ❓ libretro core: **UAE4ARM**

### Amstrad CPC

- ✅ libretro core: **Caprice32**
  - The core does not currently support writing to disk, which may affect hashing when implemented.
- ❌ libretro core: **CrocoDS**

### Apple II

- ✅ Standalone emulator: **[RAppleWin](https://retroachievements.org/download.php#rapplewin)**
- ⌛ BizHawk core: **Virtu**
  - Testing
  - June 4th, 2023: .woz files are not supported.
  - June 4th, 2023: The joystick is not supported. The keyboard has to be manually mapped.
  - June 4th, 2023: You have to manually create and load a multi-disk bundle for games with multiple disks. Disks are generically labelled by index only.

### Arcade

- ✅ libretro core: **FinalBurn Neo**
  - Some boards may not be fully exposed.
- ✅ libretro core: **Flycast**
  - Used for Atomiswave and NAOMI 1/2.
- ❌ libretro core: **FB Alpha 2012**
  - Deprecated.
  - CPS-1 through 3 and Neo Geo are separate cores.
- ❌ libretro core: **MAME**
  - Also has separate cores for MAME 2000, 2003 (with separate Midway and Plus cores) and 2010.
- ❌ BizHawk core: **MAME**

### Arcadia 2001

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Arduboy

- ✅ libretro core: **Ardens**
- ✅ libretro core: **Arduous**
  - Cannot emulate the Arduboy FX.

### Atari 2600

- ✅ libretro core: **Stella**
- ❓ libretro core: **Stella 2023**
- ❓ libretro core: **Stella 2014**
- ✅ BizHawk core: **Atari2600Hawk**
  - Achievements that require emulator resets do not work. If you see one, please open a ticket so the achievement can be fixed.

### Atari 5200

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **Atari800**
  - Appears to work fine, but the core is a bit of a headache to use;
    - The BIOS has to be configured within the core (F1 > Emulator Configuration > System ROM settings).
    - Couldn't figure out the controls: does the joystick need to be configured within the core too?
    - Allows loading arbitrary files from the internal menu, which bypasses hashing.
- ❌ libretro core: **a5200**
  - Does not expose memory.

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

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **Hatari**
  - Does not expose memory.

### Cassette Vision

- ❌ _Not supported_ - needs a hashing method and a memory map.

### CHIP-8

- ❌ _Not supported_ - needs a console ID, a hashing method and a memory map.
- ❌ libretro core: **Emux CHIP-8**
- ❌ libretro core: **JAXE**
  - April 16th, 2022: Seems ready when we are.
  - May need a settings blacklist to prevent lowering speed.

### Commodore 128

- ❌ _Not supported_
- ❌ libretro core: **VICE x128**

### Commodore 64

- ❌ libretro core: **VICE x64**
  - NOTE: Joystick is in port 2 by default. Use the JOY button on the virtual keyboard (select) to switch it to port 1.
  - Divided into separate cores (fast, accurate and SuperCPU).
  - May 1st, 2022: A reset does not autorun the game.
- ⌛ BizHawk core: **C64Hawk**
  - Testing
- ❓ libretro core: **Frodo**

### ColecoVision

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **blueMSX**
- ✅ BizHawk core: **ColecoHawk**
- ❌ libretro core: **Gearcoleco**

### Dreamcast

- ✅ libretro core: **Flycast**
  - You must disable threaded rendering to properly use save states.
- ❓ libretro core: **Flycast GLES2**

### Elektronika BK-0010/11

- ❌ _Not supported_
- ❌ libretro core: **M**

### Elektor TV Games Computer

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Enterprise 64/128

- ❌ _Not supported_
- ❌ libretro core: **ep128emu**

### Fairchild Channel F

- ✅ libretro core: **FreeChaF**
- ❓ BizHawk core: **ChannelFHawk**

### Famicom Disk System

- ✅ Standalone emulator: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ libretro core: **FCEUmm**
- ✅ libretro core: **Mesen**
- ❌ libretro core: **NEStopia UE**
  - Does not map SRAM.
  - PLEASE STOP USING THIS FOR ACHIEVEMENTS!!!

### FM Towns

- ❌ _Not supported_ - needs a hashing method and a memory map.

### Game & Watch

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **GW**
  - Does not expose memory.

### Game Boy

- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ libretro core: **Gambatte**
  - Most recommended.
- ✅ libretro core: **Gearboy**
- ✅ libretro core: **mGBA**
- ✅ libretro core: **VBA-M**
- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**
- ❓ libretro core: **Mesen-S**

### Game Boy Color

- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ libretro core: **Gambatte**
  - Most recommended.
- ✅ libretro core: **Gearboy**
- ✅ libretro core: **mGBA**
- ✅ libretro core: **VBA-M**
- ✅ BizHawk core: **Gambatte** (Pokémon speedrunning fork)
- ✅ BizHawk core: **GBHawk**
- ❌ Standalone emulator: **Pizza Boy GBC**
  - No longer being developed. Compatibility issues can cause problems with unlocks.
- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**
- ❓ libretro core: **Mesen-S**

### Game Boy Advance

- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ libretro core: **VBA-M**
- ✅ libretro core: **Beetle GBA**
- ✅ libretro core: **VBA Next**
- ✅ libretro core: **mGBA**
  - Most recommended.
- ✅ BizHawk core: **mGBA**
- ❌ Standalone emulator: **Pizza Boy GBA**
  - No longer being developed. Compatibility issues can cause problems with unlocks.
- ❓ libretro core: **gpSP**
- ❓ libretro core: **Meteor**
- ❓ libretro core: **TempGBA**

### GameCube

- ✅ Standalone emulator: **[Dolphin](https://retroachievements.org/download.php#dolphin)**
  - You MUST use version 2407-68 or newer.
  - Please make sure that the "Enable Dual Core (speedup)" option is unchecked as that mode is not supported.
- ❌ libretro core: **Dolphin**

### Game Gear

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **Gearsystem**

### Genesis/Mega Drive

- ✅ libretro core: **Genesis Plus GX**
  - Most recommended.
- ✅ libretro core: **PicoDrive**
- ❌ libretro core: **BlastEm**
  - While some achievements may work, the core has issues with the Game RAM portion of memory.
- ✅ BizHawk core: **Genplus-gx** (Genesis Plus GX)

### Intellivision

- ✅ libretro core: **FreeIntv**
  - Crashes when the game is reset.
  - Some crashes might be related to the Intellivoice not being emulated.
- ✅ BizHawk core: **IntelliHawk**

### Interton VC 4000

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**

### J2ME

- ❌ _Not supported_ - needs a console ID, a hashing method and a memory map.
- ❌ Standalone emulator: **FreeJ2ME**
- ❌ Standalone emulator: **J2ME Loader**
  - Android only.
- ❌ libretro core: **FreeJ2ME**

### Magnavox Odyssey 2

- ✅ libretro core: **O2EM**
- ❓ BizHawk core: **O2Hawk**

### Master System/Mark III

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Gearsystem**
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **PicoDrive**
- ❓ BizHawk core: **SMSHawk**
- ❓ libretro core: **Emux SMS**

### Mega Duck

- ✅ libretro core: **SameDuck**

### MicroW8

- ❌ _Not supported_
- ❌ libretro core: **MicroW8**

### MS-DOS

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **DOSBox-core**
- ❌ libretro core: **DOSBox-SVN**
- ❌ libretro core: **DOSBox-Pure**
  - Needs a way to prevent launching with user-specified command line parameters, TSRs and deactivate achievements if the game drops to the command prompt.

### MSX

- ✅ libretro core: **blueMSX**
  - The hash relies on the .dsk file not being modified.
  - .dsk files appear to be unsupported if they also require a cartridge. There is a core option for this, but it doesn't seem to function properly. See "SD Snatcher", which used a 'sound' cartridge.
- ❓ libretro core: **fMSX**

### Neo Geo CD

- ✅ libretro core: **NeoCD**

### Neo Geo Pocket (Color)

- ✅ libretro core: **Beetle NeoPop**
- ❓ libretro core: **RACE**
- ✅ BizHawk core: **NeoPop** (Mednafen)

### NES/Famicom

- ✅ Standalone emulator: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ libretro core: **FCEUmm**
  - Most recommended.
- ✅ libretro core: **Mesen**
- ✅ libretro core: **QuickNES**
  - Does not emulate the Famicom Disk System.
- ❌ libretro core: **NEStopia UE**
  - Does not map SRAM.
  - PLEASE STOP USING THIS FOR ACHIEVEMENTS!!!
- ❓ libretro core: **Emux NES**
- ❓ libretro core: **fixNES**

### Nintendo 3DS

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **Citra**
  - Only exposes 64MB of memory. The documentation suggests there should be 128MB.
  - No save state support.
- ❌ libretro core: **Citra 2018**
- ❌ libretro core: **Citra Canary**

### Nintendo 64

- ✅ Standalone emulator: **[RAProject64](https://retroachievements.org/download.php#rap64)**
- ✅ libretro core: **ParaLLEl N64**
- ✅ libretro core: **Mupen64Plus-Next**
  - Separated into cores for OpenGL ES 2 and 3.
  - Most recommended.
- ⌛ BizHawk core: **Mupen64Plus**
  - Testing (there are some graphical issues that can be fixed using the angrylion plugin.)

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

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ Standalone emulator: **EKA2L1**

### Oric

- ❌ _Not supported_

### Palm OS

- ❌ _Not supported_
- ❌ libretro core: **Mu**

### PC Engine/TurboGrafx-16/SuperGrafx

- ✅ libretro core: **Beetle PCE Fast**
  - SuperGrafx games do not work on the Beetle PCE Fast core.
- ✅ libretro core: **Beetle SuperGrafx**
  - Most recommended.
- ✅ BizHawk core: **PCEHawk**
- ❓ libretro core: **Beetle PCE**

### PC Engine CD/TurboGrafx-CD

- ✅ libretro core: **Beetle PCE Fast**
- ✅ libretro core: **Beetle SuperGrafx**
  - Most recommended.
- ✅ BizHawk core: **PCEHawk**
- ❌ libretro core: **Beetle PCE**
  - Does not expose the RAM needed for PC Engine CD.

### PC-6001

- ❌ _Not supported_ - needs a hashing method and a memory map.

### PC-8000/8800

- ✅ Standalone emulator: **[RAQUASI88](https://retroachievements.org/download.php#raquasi88)**
  - Most recommended.
- ❌ libretro core: **QUASI88**
  - NOT RECOMMENDED!!!
  - The PC-88VA is not supported.
  - April 16th, 2022: Cannot load m3u. The hash fails because core locks disk file.
  - April 16th, 2022: Attempting to load a single disk game in RALibretro just goes to "How many disks?" prompt. Seems to work in RetroArch.
  - April 16th, 2022: RALibretro does not provide a subsystem interface for loading multi-disk games.

### PC-9800

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **Neko Project II Kai**
  - Does not expose memory.
    - It appears that it exposes it in some games depending on the RAM size selected, but it seems like the machine RAM and not actually related to the game.
- ❌ libretro core: **Neko Project II**

### PC-FX

- ✅ libretro core: **Beetle PC-FX**
- ✅ BizHawk core: **T.S.T.** (Mednafen)

### Philips CD-i

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **CDi 2015**
- ❌ libretro core: **SAME CDi**

### Philips P2000T

- ❌ _Not supported_
- ❌ libretro core: **M2000**

### Pico

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **PicoDrive**
  - Needs controls related to turning pages in the attached books.

### Pico-8

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **FAKE-08**
- ❌ libretro core: **Retro8**

### PlayStation

- ✅ Standalone emulator: **[DuckStation](https://www.duckstation.org/wiki/Main_Page)**
  - There may be memory leak and/or burn-in when using save states. Beware, softcore players!
- ✅ libretro core: **Beetle PSX HW**
  - Most recommended.
- ✅ libretro core: **Beetle PSX**
- ✅ libretro core: **SwanStation**
- ❌ libretro core: **PCSX ReARMed**
  - BIOS files are not required for this core and will zero out the Kernel RAM.
  - Technically supported; not recommended.
- ❓ BizHawk core: **Octoshock** (Mednafen)
- ❓ BizHawk core: **Nymashock** (Mednafen)
- ❓ libretro core: **Rustation**

### PlayStation 2

- ✅ Standalone emulator: **[PCSX2](https://pcsx2.net/)**
  - PCSX2 is currently **the only officially supported** option for earning achievements.
- ❌ Standalone emulator: **AetherSX2**
  - No longer being developed and has known incompatibilities.
- ❌ Standalone emulator: **NetherSX2**
  - Fork of AetherSX2 and is known to have many issues with achievements and hardcore mode.
- ❌ libretro core: **LRPS2**
  - Still in alpha state.
  - Does not expose memory.
- ❌ libretro core: **Play!**
  - Low compatibility with most commercial games.
  - Black screen with stuttering sound.

### PlayStation 3
- ❌ _Not supported_ - needs a console ID, a hashing method and a memory map.
- ❌ Standalone emulator: **RPCS3**

### PlayStation Portable

- ✅ Standalone emulator: **[PPSSPP](https://www.ppsspp.org/download/)**
  - Does not support RAIntegration at this time, so achievement developers are unable to troubleshoot potential issues.
- ✅ libretro core: **PPSSPP**
  - Loading save states too fast can cause it to crash.
  - Some games have graphical issues.

### PocketStation

- ❌ _Not supported_ - needs a console ID, a hashing method and a memory map.
- ❌ libretro core: **pockystation**
  - The core doesn't seem to be functional, even in RetroArch.

### Pokemon Mini

- ✅ libretro core: **PokeMini**

### SAM Coupé

- ❌ _Not supported_
- ❌ libretro core: **SimCoupe**
  - Still in alpha state.

### Saturn

- ✅ libretro core: **Beetle Saturn**
  - The only **recommended** core.
- ❌ libretro core: **Yabause**
  - Technically supported; not recommended.
- ❌ libretro core: **Kronos**
  - Saving and loading states often locks up the UI in RALibretro.
  - Technically supported; not recommended.
- ❌ libretro core: **YabaSanshiro**
- ⌛ BizHawk core: **Saturnus** (Mednafen)
  - Testing

### Sega CD

- Appears to still have unmapped RAM.
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **PicoDrive**

### SG-1000

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Genesis Plus GX**
  - Most recommended.
- ✅ libretro core: **blueMSX**
- ❌ libretro core: **Gearsystem**
  - Has a significant amount of unexposed memory.

### Sharp X1

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **X1 Millennium**
  - April 16th, 2022: Disk writes modify source media, which breaks hashing.

### Sharp X68000

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **PX68k**
  - Crashes RALibretro upon loading a game.

### SNES/Super Famicom/Satellaview/Sufami Turbo

- ✅ Standalone emulator: **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)**
- ✅ libretro core: **Snes9x**
  - Most recommended.
- ✅ libretro core: **Mesen-S**
- ❓ libretro core: **Beetle bsnes**
- ❌ libretro core: **Beetle Supafaust**
  - June 11th, 2024: Does not expose memory.
- ❓ libretro core: **bsnes**
- ❓ libretro core: **bsnes 2014 Accuracy**
- ❓ libretro core: **bsnes 2014 Balanced**
- ❓ libretro core: **bsnes 2014 Performance**
- ❓ libretro core: **bsnes C++98 (v085)**
- ❓ libretro core: **bsnes-hd beta**
- ❓ libretro core: **bsnes-mercury Accuracy**
- ❓ libretro core: **bsnes-mercury Balanced**
- ❓ libretro core: **bsnes-mercury Performance**
- ❓ libretro core: **higan Accuracy**
- ❓ libretro core: **nSide Balanced**
- ❓ libretro core: **Snes9x 2002**
- ❓ libretro core: **Snes9x 2005**
- ❓ libretro core: **Snes9x 2005 Plus**
- ❌ libretro core: **Snes9x 2010**
  - PLEASE STOP USING THIS FOR ACHIEVEMENTS!!!
- ❓ BizHawk core: **BSNES**
- ❓ BizHawk core: **BSNESv115+**

### SpectraVideo SVI 318/328

- ❌ _Not supported_
- ❌ libretro core: **blueMSX**

### Super Cassette Vision

- ❌ libretro core: **EmuSCV**
  - Unfinished according to [the libretro docs](https://docs.libretro.com/library/emuscv/).
  - Does not expose memory. Appears to [export a save state](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229) via the RETRO_MEMORY_SAVE_RAM interface, which we try to shoehorn into $E000 as that's what's flagged as Cartridge RAM for the system.

### Thomson MO/TO
- ❌ _Not supported_ - needs a hashing method.
- ❌ libretro core: **Theodore**
  - Seems to work.
  - Uncertain about how the core handles writing to disk/tape. May affect hashing.

### TI-83

- ⌛ libretro core: **Numero**
  - Testing
- ⌛ BizHawk core: **TI83Hawk**
  - Testing

### TIC-80

- ❌ _Not supported_ - needs a hashing method.
- ❌ libretro core: **TIC-80**
  - Doesn't export memory correctly. Can only see 8 bytes.

### Uzebox

- ✅ BizHawk core: **Uzem**
- ✅ libretro core: **Uzebox**

### Vectrex

- ✅ libretro core: **vecx**

### VIC-20

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **VICE xvic**

### Virtual Boy

- ✅ libretro core: **Beetle VB**
- ✅ BizHawk core: **Virtual Boyee** (Mednafen)

### VMU/VMS

- ❌ _Not supported_ - needs a console ID, a hashing method and a memory map.
- ❌ libretro core: **VeMUlator**
  - No save state support.

### WASM-4

- ✅ libretro core: **WASM-4**

### Watara Supervision

- ✅ libretro core: **Potator**

### Wii

- ⌛ Standalone emulator: **Dolphin**
  - Testing
- ❌ libretro core: **Dolphin**

### Wii U

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ Standalone emulator: **Cemu**

### WonderSwan (Color)

- ✅ libretro core: **Beetle Cygne**
- ✅ BizHawk core: **Cygne** (Mednafen)

### Xbox

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ Standalone emulator: **xemu**
- ❌ libretro core: **DirectXbox**
  - Still in alpha state.

### Xbox 360

- ❌ _Not supported_ - needs a console ID, a hashing method and a memory map.
- ❌ Standalone emulator: **Xenia**

### Zeebo

- ❌ _Not supported_ - needs a hashing method and a memory map.

### ZX81

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **EightyOne**
  - Does not expose memory.

### ZX Spectrum

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **FUSE**
  - Requires the ability to map the keyboard to port 3.
  - Uncertain about save support. Does not seem to insert save disk.
- ⌛ - BizHawk core: **ZXHawk**
  - Testing
  - The hashing needs to be corrected.

More details on BizHawk cores can be found [here](https://tasvideos.org/BizHawk).
