---
title: Unsupported Emulators and Cores
description: Information about unsupported emulators and cores for RetroAchievements.
---

- ❌: Deprecated or confirmed to be problematic. Unusable for achievements.
- ❓ : Either untested or the issues haven't been narrowed down and documented. Not recommended.
- ⌛ : Currently being looked into or testing.

# Unsupported Emulators and Cores (Supported Consoles)

::: info
This is a list of emulators and cores that have either been confirmed to not work with achievements or have had little to no documented testing.
:::

## 3DO

| Name          | Type          | Status  | Notes          |
| :------------ | :------------ | :-----: | :------------- |
| **4DO**       | libretro core | ❓       |               |

## Amstrad CPC

| Name          | Type          | Status  | Notes    |
| :------------ | :------------ | :-----: | :------- |
| **CrocoDS**   | libretro core | ❓     |               |

## Apple II

| Name          | Type          | Status  | Notes                                                                                                                                                     |
| :------------ | :------------ | :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Virtu**     | BizHawk core  | ❓      | - woz files are not supported (2023-06-04)<br>- joystick not supported. keyboard has to be manually mapped (2023-06-04)<br>- have to manually create and load a multi-disk bundle for games with multiple disks. disks are generically labelled by index only (2023-06-04) |

## Arcade

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **FB Alpha**      | libretro core | ❌ | Deprecated core that should not be used |
| **FB Alpha 2012** | libretro core | ❌ | Deprecated core that should not be used |
| **MAME**          | libretro core | ❌ | Includes all variants: HBMAME, 2003, 2003 Midway, 2003-Plus, 2009, 2010, 2015, 2016 |
| **MAME**          | BizHawk core  | ❌ | |

## Atari Lynx

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **Gearlynx**      | libretro core | ❓ | |
| **Holani**        | libretro core | ❓ | |

## ColecoVision

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **Gearcoleco**    | libretro core | ❓ | |

## Fairchild Channel-F

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **ChannelFHawk**  | BizHawk core | ❓ | |

## Famicom Disk System

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **FCEUmm**        | libretro core | ❌     | Does not expose extra FDS RAM        |
| **QuickNES**      | libretro core | ❌     | Does not emulate the disk system     |
| **NEStopia**      | libretro core | ❌     | Does not expose extra FDS RAM        |
| **Emux NES**      | libretro core | ❓      |                                      |
| **fixNES**        | libretro core | ❓      |                                      |

## Game Boy Advance

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **gpSP**          | libretro core | ❌ | |
| **Meteor**        | libretro core | ❓ | |
| **TempGBA**       | libretro core | ❓ | |

## Game Boy/Game Boy Color

| Name               | Type          | Status  | Notes                               |
| :----------------- | :------------ | :-----: | :---------------------------------- |
| **DoubleCherryGB** | libretro core | ❌ | Does not expose all memory, some achievements will show up as unsupported |
| **Emux GB**        | libretro core | ❓ | |
| **fixGB**          | libretro core | ❓ | |
| **SameBoy**        | libretro core | ❓ | |
| **TGB Dual**       | libretro core | ❌ | |

## Game Gear

| Name               | Type          | Status  | Notes                               |
| :----------------- | :------------ | :-----: | :---------------------------------- |
| **PicoDrive**      | libretro core | ❓ | |
| **SMS Plus GX**    | libretro core | ❓ | |

## GameCube

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **Dolphin**       | libretro core | ❌ | |
| **Ishiiruka**     | libretro core | ❌ | |

## Magnavox Odyssey 2

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **O2Hawk**          | BizHawk core | ❓ | |

## Master System / Mark III

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **SMS Plus GX**   | libretro core | ❓ | |
| **Emux SMS**      | libretro core | ❓ | |
| **PicoDrive**     | libretro core | ❓ | |
| **SMSHawk**       | BizHawk core  | ❓ | |

## MSX/MSX2/MSX2+

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **fMSX**          | libretro core | ❌ | |

## Neo Geo Pocket/Color

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **RACE**          | libretro core | ❓ | |

## NES / Famicom

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **NEStopia**      | libretro core | ❌ | - Does not map SRAM |
| **Emux NES**      | libretro core | ❓ | |
| **fixNES**        | libretro core | ❓ | |
| **bnes**          | libretro core | ❓ | |

## Nintendo 3DS

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **Citra**         | libretro core | ❌ | - Only exposes 64MB of memory - documentation suggests there should be 128MB<br>- Does not support save states |
| **Citra 2018**    | libretro core | ❌ | |
| **Citra Canary**  | libretro core | ❌ | |

## Nintendo 64

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **Mupen64Plus-Next GLES2** | libretro core | ❓ | |
| **Mupen64Plus-Next GLES3** | libretro core | ❓ | |
| **Mupen64Plus**            | BizHawk core  | ❓ | There are some graphical issues that can be fixed using the angrylion plugin |

## Nintendo DS

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **DeSmuME 2015**           | libretro core | ❌      | |
| **melonDS 2021**           | libretro core | ❓       | |

## Nintendo DSi

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **DeSmuME**                | libretro core | ❌ | |
| **melonDS**                | libretro core | ❌ | |

## PC Engine CD / TurboGrafx-CD

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **Beetle PCE**             | libretro core | ❌ | Does not expose RAM needed for PC Engine CD |
| **Geargrafx**              | libretro core | ❌ | |

## PlayStation

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **PCSX ReARMed**           | libretro core | ❌ | BIOS are not required for this core and will zero out the Kernel RAM |
| **Rustation**              | libretro core | ❓ | |
| **Octoshock**              | BizHawk core  | ❓ | |
| **Nymashock**              | BizHawk core  | ❓ | |
| **DuckStation**            | libretro core | ❌ | |

## PlayStation 2

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **AetherSX2**              | Standalone emulator | ❌ | No longer being developed, has known incompatibilities. Devs have no means to resolve issues. |
| **LRPS2**                  | libretro core | ❌ | - Still in alpha state<br> - Does not expose memory. |
| **Play!**                  | libretro core | ❌ | - Low compatibility with most commercial games.<br>- Black screen with stuttering sound. |

## Sega Dreamcast

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **Flycast GLES2**          | libretro core | ❓ | |

## Sega Genesis / Mega Drive

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **Blastem**                | libretro core | ❌ | While some achievements may work, the core has issues with the Game RAM portion of memory. |
| **ClownMDEmu**             | libretro core | ❓ | |

## Sega Saturn

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **Yabause**                | libretro core | ❌ | Technically supported; not recommended.         |
| **Kronos**                 | libretro core | ❓ | Saving and loading states often locks up the UI in RALibretro<br>- Technically supported; not recommended. |
| **YabaSanshiro**           | libretro core | ❓ | |

## SG-1000

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **Gearsystem**             | libretro core | ❌ | Has significant unexposed memory |

## SNES / Super Famicom / Satellaview / Sufami Turbo

| Name                             | Type          | Status  | Notes                               |
| :------------------------------- | :------------ | :-----: | :---------------------------------- |
| **Beetle bsnes**                 | libretro core | ❌ | - |
| **Beetle Supafaust**             | libretro core | ❌ | Does not expose memory (2024-06-11) |
| **fixNES**                       | libretro core | ❓ | |
| **bnes**                         | libretro core | ❓ | |
| **bnes 2014 Accuracy**           | libretro core | ❓ | |
| **bnes 2014 Balanced**           | libretro core | ❓ | |
| **bnes 2014 Performance**        | libretro core | ❓ | |
| **bnes C++98 (v085)**            | libretro core | ❓ | |
| **bnes-hd beta**                 | libretro core | ❓ | Memory Inspector displays nothing but zeroes. Do not use. (2025-12-29) |
| **bnes-jg**                      | libretro core | ❓ | |
| **bnes-mercury Accuracy**        | libretro core | ❓ | |
| **bnes-mercury Balanced**        | libretro core | ❓ | |
| **bnes-mercury Performance**     | libretro core | ❓ | |
| **Snes9x 2002**                  | libretro core | ❌ | |
| **Snes9x 2005**                  | libretro core | ❌ | |
| **Snes9x 2005+**                 | libretro core | ❌ | |
| **Snes9x 2010**                  | libretro core | ❌ | PLEASE STOP USING THIS FOR ACHIEVEMENTS!!! |
| **higan Accuracy**               | libretro core | ❓ | |
| **nSide Balanced**               | libretro core | ❓ | |
| **BSNES**                        | BizHawk core  | ❓ | |
| **BSNESv115+**                   | BizHawk core  | ❓ | |

## Wii

| Name                       | Type          | Status  | Notes                               |
| :------------------------- | :------------ | :-----: | :---------------------------------- |
| **Dolphin**                | libretro core | ❌      |                                     |

# Unsupported Emulators and Cores (Unsupported Consoles)

## Acorn BBC Micro

| Name          | Type          | Status  | Notes         |
| :------------ | :------------ | :-----: | :------------- |
| **b2**        | libretro core | ❓ | Testing needed |

## Amiga

| Name          | Type          | Status  | Notes         |
| :------------ | :------------ | :-----: | :------------- |
| **FS-UAE**    | libretro core | ❓ | Testing needed |
| **P-UAE**     | libretro core | ❓ | - Needs memory map to see exposed memory<br>- Locks disk files so they can't be opened for hashing<br>- Unknown hard disk support |
| **PUAE 2021** | libretro core | ❓ | Testing needed |
| **UAE4ARM**   | libretro core | ❓ | Testing needed |

## Atari 5200

| Name           | Type          | Status  | Notes                                                                                                                                                     |
| :------------- | :------------ | :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **atari800**   | libretro core | ❌ | Appears to work fine, but the core is a bit of a headache to use<br>- The BIOS has to be configured within the core (F1 -> Emulator Configuration -> System ROM settings<br>- Couldn't figure out controls - does the joystick need to be configured within the core too?<br>- Allows loading arbitrary files from the internal menu, which bypasses hashing |
| **a5200**      | libretro core | ❌ | Does not expose memory |

## Atari ST/STE/TT/Falcon

| Name          | Type          | Status  | Notes             |
| :------------ | :------------ | :-----: | :---------------- |
| **Hatari**    | libretro core | ❌ | Does not expose memory |

## Cassette Vision

| Name             | Type          | Status  | Notes             |
| :--------------- | :------------ | :-----: | :---------------- |
| **PD777**        | libretro core | ❌ | |

## CHIP-8

- Needs console ID, hashing method, and memory map

| Name            | Type          | Status  | Notes             |
| :-------------- | :------------ | :-----: | :---------------- |
| **Emux CHIP-8** | libretro core | ❌ | |
| **JAXE**        | libretro core | ❌ | - May need settings blacklist to prevent lowering speed |

## Commodore 64

| Name             | Type          | Status  | Notes             |
| :--------------- | :------------ | :-----: | :---------------- |
| **Frodo**        | libretro core | ❌ | |
| **VICE x64**     | libretro core | ❌ | - Joystick is in port 2 by default. Use JOY button on virtual keyboard (select) to switch it to port 1<br>- Reset does not autorun game (2022-05-01) |
| **VICE x64SC**   | libretro core | ❌ | |
| **VICE xscpu64** | libretro core | ❌ | |
| **VICE x64tv**   | libretro core | ❌ | |
| **VICE xcbm5x0** | libretro core | ❌ | |
| **VICE xcbm2**   | libretro core | ❌ | |
| **C64Hawk**      | BizHawk core  | ❌ | |

## Commodore 128

| Name          | Type          | Status  | Notes         |
| :------------ | :------------ | :-----: | :------------- |
| **VICE x128** | libretro core | ❌ | |

## Commodore PET

| Name             | Type          | Status  | Notes             |
| :--------------- | :------------ | :-----: | :---------------- |
| **VICE xpet**    | libretro core | ❌ | |

## Commodore Plus/4

| Name             | Type          | Status  | Notes             |
| :--------------- | :------------ | :-----: | :---------------- |
| **VICE xplus4**  | libretro core | ❌ | |

## Commodore VIC-20

| Name             | Type          | Status  | Notes             |
| :--------------- | :------------ | :-----: | :---------------- |
| **VICE xvic**    | libretro core | ❌ | |

## DOS

| Name            | Type          | Status  | Notes         |
| :-------------- | :------------ | :-----: | :------------- |
| **DOSBox**      | libretro core | ❌ | |
| **DOSBox Core** | libretro core | ❌ | |
| **DOSBox SVN**  | libretro core | ❌ | |
| **DOSBox Pure** | libretro core | ⌛ | |

## Elektronika BK-0010/0011

| Name            | Type          | Status  | Notes         |
| :-------------- | :------------ | :-----: | :------------- |
| **BK**          | libretro core | ❌ | |

## Enterprise 64/128

| Name            | Type          | Status  | Notes         |
| :-------------- | :------------ | :-----: | :------------- |
| **ep128emu**    | libretro core | ❌ | |

## Game & Watch

| Name            | Type          | Status  | Notes         |
| :-------------- | :------------ | :-----: | :------------- |
| **gw**          | libretro core | ❌ | - Does not expose memory |

## J2ME

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **FreeJ2ME**      | libretro core | ❌ | |

## MicroW8

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **MicroW8**       | libretro core | ❌ | |

## PC-9800

| Name                    | Type          | Status  | Notes                               |
| :---------------------- | :------------ | :-----: | :---------------------------------- |
| **Neko Project II**     | libretro core | ❌ | |
| **Neko Project II Kai** | libretro core | ❌ | - Memory appears to be exposed in some games depending on the RAM size selected, but it seems like the machine RAM and not actually related to the game. |

## Philips CD-i

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **CDi 2015**      | libretro core | ❌ | |
| **SAME CDi**      | libretro core | ❌ | |

## Philips P2000

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **M2000**         | libretro core | ❌ | |

## Pico-8

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **FAKE-08**       | libretro core | ❌ | |
| **Retro8**        | libretro core | ❌ | |

## PocketStation

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **pockystation**  | libretro core | ❌ | Core doesn't seem functional, even in RetroArch |

## SAM Coupé

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **SimCoupe**      | libretro core | ❌ | Still in alpha state |

## Sega Pico

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **PicoDrive**     | libretro core | ❌ | Needs controls related to turning pages in the attached books |

## Sharp X1

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **X1 Millennium** | libretro core | ❌ | Disk writes modify source media, which breaks hashing (2022-04-16) |

## Sharp X68K

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **px68k**         | libretro core | ❌ | Crashes RALibretro upon loading a game |

## Sharp ZX81

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **EightyOne**     | libretro core | ❌ | Memory not exposed |

## Super Casette Vision

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **EmuSCV**        | libretro core | ❌ | - Unfinished according to [libretro docs](https://docs.libretro.com/library/emuscv/).<br>- Does not expose memory. Appears to [export a save state](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229) via the RETRO_MEMORY_SAVE_RAM interface, which we try to shoehorn into $E000 as that's what's flagged as Cartridge RAM for the system. |

## Thomson TO8/TO8D

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **Theodore**      | libretro core | ❌ | Uncertain how core handles writing to disk/tape. May affect hashing. |

## TI-83

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **Numero**        | libretro core | ❌ | |
| **TI83Hawk**      | BizHawk core | ❌ | |

## TIC-80

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **TIC-80**        | libretro core | ❌ | Doesn't export memory correctly. Can only see 8 bytes |

## VMU

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **VeMUlator**     | libretro core | ❌ | |

## Xbox

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **DirectXbox**    | libretro core | ❌ | Still in alpha state |

## ZX Spectrum

| Name              | Type          | Status  | Notes                               |
| :---------------- | :------------ | :-----: | :---------------------------------- |
| **FUSE**          | libretro core | ❌      | - Requires ability to map keyboard to port 3<br>- Uncertain about save support. Cannot seem to insert save disk |
| **ZXHawk**        | BizHawk core  | ❌      | Hashing needs to be corrected |

## Others

- FM Towns
- Nokia N-Gage
- Oric
- PC-6001
- Wii U
- Zeebo
