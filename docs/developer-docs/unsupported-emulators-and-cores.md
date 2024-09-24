---
title: Unsupported Emulators and Cores
description: Information about unsupported emulators and cores for RetroAchievements.
---

# Unsupported Emulators and Cores

### Amiga

- ❌ _Not supported_.
- ❓ libretro core: **FS-UAE**
- ❌ libretro core: **PUAE**
  - Needs memory map to see exposed memory.
  - Locks disk files so they can't be opened for hashing.
  - Hard disk support?
- ❓ libretro core: **PUAE 2021**
- ❓ libretro core: **UAE4ARM**
- ❓ BizHawk core: **PUAE**

### Amstrad CPC

- ❌ libretro core: **CrocoDS**

### Apple II

- ⌛ BizHawk core: **Virtu**
  - Testing
  - 4 Jun 2023: .woz files are not supported.
  - 4 Jun 2023: The joystick is not supported. The keyboard has to be manually mapped.
  - 4 Jun 2023: Have to manually create and load a multi-disk bundle for games with multiple disks. Disks are generically labelled by index only.

### Arcade

- ❌ libretro core: **FB Alpha 2012**
  - Deprecated.
  - CPS-1 through 3 and Neo Geo are separate cores.
- ❌ libretro core: **MAME**
  - Also has separate cores for MAME 2000, 2003 (with separate Midway and Plus cores) and 2010.
- ❌ BizHawk core: **MAME**

### Atari 2600

- ❓ libretro core: **Stella 2023**
- ❓ libretro core: **Stella 2014**

### Atari 5200

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **Atari800**
  - Appears to work fine, but the core is a bit of a headache to use;
    - The BIOS has to be configured within the core (F1 > Emulator Configuration > System ROM settings).
    - Couldn't figure out the controls: does the joystick need to be configured within the core too?
    - Allows loading arbitrary files from the internal menu, which bypasses hashing.
- ❌ libretro core: **a5200**
  - Does not expose memory.

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
  - 16 Apr 2022: Seems ready when we are.
  - May need a settings blacklist to prevent lowering speed.

### Commodore 64

- ❌ libretro core: **VICE x64**
  - NOTE: Joystick is in port 2 by default. Use the JOY button on the virtual keyboard (select) to switch it to port 1.
  - Divided into separate cores (fast, accurate and SuperCPU).
  - 1 May 2022: A reset does not autorun the game.
- ⌛ BizHawk core: C64Hawk
  - Testing
- ❓ libretro core: **Frodo**

### Commodore 128

- ❌ _Not supported_.
- ❌ libretro core: **VICE x128**

### ColecoVision

- ❌ libretro core: **Gearcoleco**

### Dreamcast

- ❓ libretro core: **Flycast GLES2**

### Elektronika BK-0010/11

- ❌ _Not supported_.
- ❌ libretro core: **M**

### Enterprise 64/128

- ❌ _Not supported_.
- ❌ libretro core: **ep128emu**

### Fairchild Channel-F

- ❓ BizHawk core: **ChannelFHawk**

### Famicom Disk System

- ❌ libretro core: **NEStopia UE**
  - Does not map SRAM.

### FM Towns

- ❌ _Not supported_ - needs a hashing method and a memory map.

### Game & Watch

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **GW**
  - Does not expose memory.

### Game Boy

- ❌ Standalone emulator: **Pizza Boy GBC**
  - No longer being developed. Compatibility issues can cause problems with unlocks.
- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**
- ❓ libretro core: **Mesen-S**

### Game Boy Color

- ❌ Standalone emulator: **Pizza Boy GBC**
  - No longer being developed. Compatibility issues can cause problems with unlocks.
- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**
- ❓ libretro core: **Mesen-S**

### Game Boy Advance

- ❌ Standalone emulator: **Pizza Boy GBA**
  - No longer being developed. Compatibility issues can cause problems with unlocks.
- ❓ libretro core: **gpSP**
- ❓ libretro core: **Meteor**
- ❓ libretro core: **TempGBA**

### GameCube

- ❌ libretro core: **Dolphin**

### Genesis/Mega Drive

- ❌ libretro core: **BlastEm**
  - While some achievements may work, the core has issues with the Game RAM portion of memory.

### J2ME

- ❌ _Not supported_ - needs a console ID, a hashing method and a memory map.
- ❌ Standalone emulator: **FreeJ2ME**
- ❌ Standalone emulator: **J2ME Loader**
  - Android only.
- ❌ libretro core: **FreeJ2ME**

### Magnavox Odyssey 2

- ❓ BizHawk core: **O2Hawk**

### Master System/Mark III

- ❓ BizHawk core: **SMSHawk**
- ❓ libretro core: **Emux SMS**

### MicroW8

- ❌ _Not supported_.
- ❌ libretro core: **MicroW8**

### MS-DOS

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **DOSBox-core**
- ❌ libretro core: **DOSBox-SVN**
- ❌ libretro core: **DOSBox-Pure**
  - Needs a way to prevent launching with user-specified command line parameters, TSRs and deactivate achievements if the game drops to the command prompt.

### MSX

- ❓ libretro core: **fMSX**

### Neo Geo Pocket (Color)

- ❓ libretro core: **RACE**

### NES/Famicom

- ❌ libretro core: **NEStopia**
  - Does not map SRAM.
- ❓ libretro core: **Emux NES**
- ❓ libretro core: **fixNES**

### Nintendo 3DS

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **Citra**
  - Only exposes 64MB of memory. The documentation suggests there should be 128MB.
  - Does not support save states
- ❌ libretro core: **Citra 2018**
- ❌ libretro core: **Citra Canary**
- ❌ BizHawk core: **Encore** (Citra)

### Nintendo 64

- ⌛ BizHawk core: **Mupen64Plus**
  - Testing (there are some graphical issues that can be fixed using the angrylion plugin.)

### Nokia N-Gage

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ Standalone emulator: **EKA2L1**

### Oric

- ❌ _Not supported_.

### Palm OS

- ❌ _Not supported_.
- ❌ libretro core: **Mu**

### PC Engine/TurboGrafx-16/SuperGrafx

- ❓ libretro core: **Beetle PCE**

### PC Engine CD/TurboGrafx-CD

- ❌ libretro core: **Beetle PCE**
  - Does not expose RAM needed for the PC Engine CD.

### PC-6001

- ❌ _Not supported_ - needs a hashing method and a memory map.

### PC-8000/8800

- ❌ libretro core: **QUASI88**
  - The PC-88VA is not supported.
  - 16 Apr 2022: Cannot load a .m3u file. The hash fails because the core locks the disk file.
  - 16 Apr 2022: Attempting to load a single disk game in RALibretro just goes to "How many disks?" prompt. Seems to work in RetroArch.
  - 16 Apr 2022: RALibretro does not provide a subsystem interface for loading multi-disk games.

### PC-9800

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **Neko Project II Kai**
  - Does not expose memory.
    - It appears to be exposed in some games depending on the RAM size selected, but it seems like the machine RAM and not actually related to the game.
- ❌ libretro core: **Neko Project II**

### Philips CD-i

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **CDi 2015**
- ❌ libretro core: **SAME CDi**

### Philips P2000T

- ❌ _Not supported_.
- ❌ libretro core: **M2000**

### Pico-8

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **FAKE-08**
- ❌ libretro core: **Retro8**

### PlayStation

- ❌ libretro core: **PCSX ReARMed**
  - BIOS are not required for this core and will zero out the Kernel RAM.
  - Technically supported; not recommended.
- ❓ BizHawk core: **Octoshock** (Mednafen)
- ❓ BizHawk core: **Nymashock** (Mednafen)
- ❓ libretro core: **Rustation**

### PlayStation 2

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

### PocketStation

- ❌ _Not supported_ - needs a console ID, a hashing method and a memory map.
- ❌ libretro core: **pockystation**
  - The core doesn't seem to be functional, even in RetroArch.

### SAM Coupé

- ❌ _Not supported_.
- ❌ libretro core: **SimCoupe**
  - Still in alpha state.

### Saturn

- ❌ libretro core: **Yabause**
  - Technically supported; not recommended.
- ❌ libretro core: **Kronos**
  - Saving and loading states often locks up the UI in RALibretro.
  - Technically supported; not recommended.
- ❌ libretro core: **YabaSanshiro**
- ⌛ BizHawk core: **Saturnus** (Mednafen)
  - Testing

### Sega Pico

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **PicoDrive**

### SG-1000

- ❌ libretro core: **Gearsystem**
  - Has a significant amount of unexposed memory.

### Sharp X1

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **X1 Millennium**
  - 16 Apr 2022: Disk writes modify source media, which breaks hashing.

### Sharp X68000

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **PX68k**
  - Crashes RALibretro upon loading a game.

### SNES/Super Famicom/Satellaview/Sufami Turbo

- ❌ libretro core: **Beetle bsnes**
- ❌ libretro core: **Beetle Supafaust**
   - 11 Jun 2024: Does not expose memory.
- ❌ libretro core: **bsnes**
- ❌ libretro core: **bsnes 2014 Accuracy**
- ❌ libretro core: **bsnes 2014 Balanced**
- ❌ libretro core: **bsnes 2014 Performance**
- ❌ libretro core: **bsnes C++98 (v085)**
- ❌ libretro core: **bsnes-hd beta**
- ❌ libretro core: **bsnes-mercury Accuracy**
- ❌ libretro core: **bsnes-mercury Balanced**
- ❌ libretro core: **bsnes-mercury Performance**
- ❌ libretro core: **higan Accuracy**
- ❌ libretro core: **nSide Balanced**
- ❌ libretro core: **Snes9x 2002**
- ❌ libretro core: **Snes9x 2005**
- ❌ libretro core: **Snes9x 2005 Plus**
- ❌ libretro core: **Snes9x 2010**
- ❌ BizHawk core: **BSNES**
- ❌ BizHawk core: **BSNESv115+**

### SpectraVideo SVI 318/328

- ❌ _Not supported_.
- ❌ libretro core: **blueMSX**

### Super Cassette Vision

- ❌ _Not supported_.
- ❌ libretro core: **EmuSCV**
  - Unfinished according to [the libretro docs](https://docs.libretro.com/library/emuscv/).
  - Does not expose memory. Appears to [export a save state](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229) via the RETRO_MEMORY_SAVE_RAM interface, which we try to shoehorn into $E000 as that's what's flagged as Cartridge RAM for the system.

### Thomson MO/TO

- ❌ _Not supported_ - needs a hashing method.
- ❌ libretro core: **Theodore**
  - Seems to work.
  - Uncertain about how the core handles writing to disk/tape. May affect hashing.

### TI-83

- ❌ _Not supported_.
- ⌛ libretro core: **Numero**
  - Testing
- ⌛ BizHawk core: **TI83Hawk**
  - Testing

## TIC-80

- ❌ _Not supported_ - needs a hashing method.
- ❌ libretro core: **TIC-80**
  - Doesn't export memory correctly. Can only see 8 bytes.

## VIC-20

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ libretro core: **VICE xvic**

## VMU/VMS

- ❌ _Not supported_ - needs a console ID, a hashing method, and a memory map.
- ❌ libretro core: **VeMUlator**
  - No save state support.

### Wii

- ❌ _Not supported_.
- ⌛ Standalone emulator: **Dolphin**
  - Testing
- ❌ libretro core: **Dolphin**

### Wii U

- ❌ _Not supported_ - needs a hashing method and a memory map.
- ❌ Standalone emulator: **Cemu**

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
- ❌ Standalone emulator: **Infuse**
  - Currently closed-source, has plans to become open-source.

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
