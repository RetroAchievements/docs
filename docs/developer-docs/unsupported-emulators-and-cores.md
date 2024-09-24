---
title: Unsupported Emulators and Cores
description: Information about unsupported emulators and cores for RetroAchievements.
---

# Unsupported Emulators and Cores

## Amiga

- ❓ libretro core: **FS-UAE**
- ❌ libretro core: **P-UAE**
  - Needs memory map to see exposed memory
  - Locks disk files so they can't be opened for hashing
  - Hard disk support?
- ❓ libretro core: **PUAE 2021**
- ❓ libretro core: **UAE4ARM**

## Amstrad CPC

- ❌ libretro core: **CrocoDS**

## Apple II

- ⌛ BizHawk core: **Virtu**
  - Testing
  - 4 Jun 2023 - woz files are not supported
  - 4 Jun 2023 - joystick not supported. keyboard has to be manually mapped.
  - 4 Jun 2023 - have to manually create and load a multi-disk bundle for games with multiple disks. disks are generically labelled by index only.

## Arcade

- ❌ libretro core: **FB Alpha**
  - Deprecated
- ❌ libretro core: **MAME**
- ❌ BizHawk core: **MAME**

## Atari 2600

- ❓ libretro core: **Stella 2014**

## Atari 5200

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **atari800**
  - Appears to work fine, but the core is a bit of a headache to use.
    - The BIOS has to be configured within the core (F1 > Emulator Configuration > System ROM settings)
    - Couldn't figure out controls - does the joystick need to be configured within the core too?
    - Allows loading arbitrary files from the internal menu, which bypasses hashing
- ❌ libretro core: **a5200**
  - Does not expose memory

## Atari ST

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **Hatari**
  - Memory not exposed

## Casette Vision

- ❌ _Not supported_ - needs hashing method and memory map

## CHIP-8

- ❌ _Not supported_ - needs console ID, hashing method and memory map
- ❌ libretro core: **Emux CHIP-8**
- ❌ libretro core: **JAXE**
  - 16 Apr 22 - Seems ready when we are
  - May need settings blacklist to prevent lowering speed

## Commodore 128

- ❌ _Not supported_
- ❌ libretro core: **VICE x128**

## Commodore 64

- ❌ libretro core: **vice_x64**
  - NOTE: Joystick is in port 2 by default. Use JOY button on virtual keyboard (select) to switch it to port 1.
  - 1 May 2022 - Reset does not autorun game
- ⌛ BizHawk core: C64Hawk
  - Testing
- ❓ libretro core: **Frodo**

## ColecoVision

- ❌ libretro core: **Gearcoleco**

## Elektronika BK-0010/0011

- ❌ _Not supported_
- ❌ libretro core: **M**

## Enterprise 128

- ❌ _Not supported_
- ❌ libretro core: **ep128emu**

## Fairchild Channel-F

- ❓ BizHawk core: **ChannelFHawk**

## FM Towns

- ❌ _Not supported_ - needs hashing method and memory map

## Game & Watch

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **gw**
  - Does not expose memory

## Game Boy

- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**

## Game Boy Color

- ❌ Standalone emulator: **Pizza Boy GBC**
  - No longer being developed. Compatibility issues can cause problems with unlocks. Devs have no means to resolve issues.
- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**

## Game Boy Advance

- ❌ Standalone emulator: **Pizza Boy GBA**
  - No longer being developed. Compatibility issues can cause problems with unlocks. Devs have no means to resolve issues.
- ❓ libretro core: **gpSP**
- ❓ libretro core: **Meteor**
- ❓ libretro core: **TempGBA**

## GameCube

- ⌛ libretro core: **Dolphin**
  - Testing

## J2ME

- ❌ _Not supported_ - needs console ID, hashing method and memory map
- ❌ libretro core: **freej2me**

## Magnavox Odyssey 2

- ❓ BizHawk core: **O2Hawk**

## Master System / Mark III

- ❓ BizHawk core: **SMSHawk**
- ❓ libretro core: **Emux SMS**

## MicroW8

- ❌ _Not supported_
- ❌ libretro core: **MicroW8**

## MS-DOS

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **dosbox-core**
- ❌ libretro core: **dosbox-SVN**
- ❌ libretro core: **dosbox-pure**
  - Needs a way to prevent launching with user-specified command line parameters
  - Needs a way to prevent TSRs
  - Needs a way to deactivate achievements if game drops to command prompt

## MSX

- ❓ libretro core: **fMSX**

## Neo Geo Pocket

- ❓ libretro core: **RACE**

## Neo Geo Pocket Color

- ❓ libretro core: **RACE**

## NES / Famicom

- ❌ libretro core: **NEStopia**
  - Does not map SRAM
- ❓ libretro core: **Emux NES**
- ❓ libretro core: **fixNES**

## Nintendo 3DS

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **Citra**
  - Only exposes 64MB of memory - documentation suggests there should be 128MB.
  - Does not support save states
- ❌ libretro core: **Citra 2018**
- ❌ libretro core: **Citra Canary**

## Nintendo 64

- ⌛ BizHawk core: **Mupen64Plus**
  - Testing (there are some graphical issues that can be fixed using the angrylion plugin)
 
## Nintendo DS

- ❌ Standalone Emulator: **melonDS Android**
  - Causes numerous issues with achievements
  - Devs have no means to resolve issues players have

## Nintendo DSi

- ❌ libretro core: **DeSmuME**
- ❌ libretro core: **melonDS**

## Nokia N-Gage

- ❌ _Not supported_ - needs hashing method and memory map

## Oric

- ❌ _Not supported_

## Palm OS

- ❌ _Not supported_
- ❌ libretro core: **Mu**

## PC Engine CD / TurboGrafx-CD

- ❌ libretro core: **Beetle PCE**
  - Does not expose RAM needed for PC Engine CD

## PC-6001

- ❌ _Not supported_ - needs hashing method and memory map

## PC-8800

- ❌ libretro core: **quasi88**
  - NOT RECOMMENDED
  - PC-88VA not supported
  - 16 Apr 2022 - Cannot load m3u. Hash fails because core locks disk file.
  - 16 Apr 2022 - Attempting to load a single disk game in RALibretro just goes to "How many disks?" prompt. Seems to work in RetroArch
  - 16 Apr 2022 - RALibretro does not provide subsystem interface for loading multi-disk games

## PC-9800

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **Neko Project II Kai**
  - Memory is not exposed.
    - It appears to be exposed in some games depending on the RAM size selected, but it seems like the machine RAM and not actually related to the game.
- ❌ libretro core: **Neko Project II**

## Philips CD-i

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **CDi 2015**
- ❌ libretro core: **SAME CDi**

## Philips P2000

- ❌ _Not supported_
- ❌ libretro core: **M2000**

## Pico-8

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **FAKE-08**
- ❌ libretro core: **Retro8**

## PlayStation

- ❌ libretro core: **PCSX ReARMed**
  - BIOS are not required for this core and will zero out the Kernel RAM.
  - Technically supported; not recommended.
- ❓ BizHawk core: **Octoshock** (Mednafen)
- ❓ BizHawk core: **Nymashock** (Mednafen)
- ❓ libretro core: **Rustation**

## PlayStation 2

- ❌ Standalone emulator: **AetherSX2**
  - No longer being developed, has known incompatibilities. Devs have no means to resolve issues
- ❌ Standalone emulator: **NetherSX2**
- ❌ libretro core: **LRPS2**
  - Still in alpha state
  - Does not expose memory
- ❌ libretro core: **Play!**
  - Low compatibility with most commercial games
  - Black screen with stuttering sound

## PocketStation

- ❌ _Not supported_ - needs console ID, hashing method and memory map
- ❌ libretro core: **pockystation**
  - Core doesn't seem functional, even in RetroArch

## SAM Coupé

- ❌ _Not supported_
- ❌ libretro core: **SimCoupe**
  - Still in alpha state

## Sega Dreamcast

- ❓ libretro core: **Flycast GLES2**
- ❌ Standalone Emulator: **Flycast**
    - Untested
    - No access to dev tools to resolve issues

## Sega Genesis / Mega Drive

- ❌ libretro core: **Blastem**
  - While some achievements may work, the core has issues with the Game RAM portion of memory.

## Sega Pico

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **picodrive**
  - Needs controls related to turning pages in the attached books

## Sega Saturn

- ❌ libretro core: **Yabause**
  - Technically supported; not recommended.
- ❌ libretro core: **Kronos**
  - Saving and loading states often locks up the UI in RALibretro
  - Technically supported; not recommended.
- ❓ libretro core: **YabaSanshiro**

## SG-1000

- ❌ libretro core: **Gearsystem**
  - Has significant unexposed memory

## Sharp X1

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **X1 Millennium**
  - 16 Apr 2022 - Disk writes modify source media, which breaks hashing

## Sharp X68K

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **px68k**
  - Crashes RALibretro upon loading a game

## SNES / Super Famicom / Satellaview / Sufami Turbo

- ❓ libretro core: **Beetle bsnes**
- ❌ libretro core: **Beetle Supafaust**
  - 11 Jun 2024 - does not expose memory
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
- ❓ libretro core: **Snes9x 2005+**
- ❌ libretro core: **Snes9x 2010**
  - PLEASE STOP USING THIS FOR ACHIEVEMENTS!!!!
- ❓ BizHawk core: **BSNES**
- ❓ BizHawk core: **BSNESv115+**

## SpectraVideo SVI 318/328

- ❌ _Not supported_
- ❌ libretro core: **blueMSX**

## Super Casette Vision

- ❌ libretro core: **EmuSCV**
  - Unfinished according to [libretro docs](https://docs.libretro.com/library/emuscv/).
  - Does not expose memory. Appears to [export a save state](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229) via the RETRO_MEMORY_SAVE_RAM interface, which we try to shoehorn into $E000 as that's what's flagged as Cartridge RAM for the system.

## Thomson TO8/TO8D

- ❌ _Not supported_ - needs hashing method
- ❌ libretro core: **Theodore**
  - Seems to work
  - Uncertain how core handles writing to disk/tape. May affect hashing.

## TI-83

- ⌛ libretro core: **Numero**
  - Testing
- ⌛ BizHawk core: **TI83Hawk**
  - Testing

## TIC-80

- ❌ _Not supported_ - needs hashing method
- ❌ libretro core: **TIC-80**
  - Doesn't export memory correctly. Can only see 8 bytes.

## VIC-20

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **VICE xvic**

## VMU

- ❌ _Not supported_ - needs console ID, hashing method, and memory map
- ❌ libretro core: **VeMUlator**

## Wii

- ⌛ Standalone emulator: **Dolphin**
  - Testing
- ⌛ libretro core: **Dolphin**
  - Testing

## Wii U

- ❌ _Not supported_ - needs hashing method and memory map

## Xbox

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **DirectXbox**
  - Still in alpha state

## Zeebo

- ❌ _Not supported_ - needs hashing method and memory map

## ZX81

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **EightyOne**
  - Memory not exposed

## ZX Spectrum

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **FUSE**
  - Requires ability to map keyboard to port 3
  - Uncertain about save support. Cannot seem to insert save disk
- ⌛ - BizHawk core: **ZXHawk**
  - Hashing needs to be corrected
  - Testing
