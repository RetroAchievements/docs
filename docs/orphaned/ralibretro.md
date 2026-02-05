---
title: RALibretro
description: RALibretro is a multi-emulator that can be used to develop RetroAchievements and, of course, earn them.
---

# RALibretro

!! This page is wildly out-of-date

RALibretro is a multi-emulator that can be used to develop RetroAchievements.

The "multi-emulation" feature is only possible because it uses [libretro](https://github.com/libretro/) cores to do the actual emulation. What RALibretro does is to connect the emulation to the tools used to create RetroAchievements.

## WARNING

**RALibretro is a Work-in-Progress!!!**

Currently the development is going on this repo: [https://github.com/RetroAchievements/RALibretro](https://github.com/RetroAchievements/RALibretro)

Here's a list of known issues (feel free to report new issues if you find one): [https://github.com/RetroAchievements/RALibretro/issues](https://github.com/RetroAchievements/RALibretro/issues)

## Installation Instructions

Just download RALibretro from the [Downloads page](https://retroachievements.org/download.php) and unzip it.

## Basic Usage

1. Launch RALibretro.exe
2. Click on `File` > `Load System`, and click on the system you want to emulate
3. Now go to `File` > `Load Game` and choose your ROM. **Note**: RALibretro currently doesn't accept zipped files!
4. Now you can create your cheevos or just earn some!

## Supported Systems

**NOTE**: some systems may require system (BIOS) files in the `System` directory in order to load games correctly.

Here is a list of the systems supported currently:

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
- Neo Geo (Arcade) - new. **NOTE**: you need to put the `neogeo.zip` BIOS file on the same directory as the ROMs.
- Capcom Play System 1, 2 and 3 (Arcade) - new

## Keyboard Input

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

**Note**: the buttons for CPS1/2/3 games vary for each game.

## Keyboard Shortcuts

- **see overlay**: `Esc`
- **pause emulation**: `p`
- **advance one frame at a time**: `;` (automatically pauses emulation)
- **fast forward**: `=`
- **fast forward toggle**: `-` (minus signal)
- **Screenshot**: `PrintScreen`

### Save/Load state keys

- **Save state current slot**: `Backspace`
- **Load state current slot**: `F11`
- **Load state from slot 1, 2, .., 9, 0**: `F1`, `F2`, ..., `F9`, `F10`
- **Save state to slot 1, 2, .., 9, 10**: `shift`+`F1`, `shift`+`F2`, ..., `shift`+`F9`, `shift`+`F10`
- **Previous slot**: `shift`+`-`
- **Next slot**: `shift`+`+`
- **Switch slot**: `0`, `1`, `2`,..., `9`

## Missing Features

- feedback to the user when save/load state, pausing, etc.
- N64 support
- load zipped ROMs
- input configuration
- more issues listed here: [https://github.com/RetroAchievements/RALibretro/issues](https://github.com/RetroAchievements/RALibretro/issues)

## How to make AES BIOS work in RALibretro or RetroArch

To make AES BIOS emulation mode work in your emulator:

1. Make sure your emulator works correctly.

2. Put `neogeo.zip` to `System` directory (RALibretro), or a folder you keep your NeoGeo ROMs (RetroArch).

3. Make sure the `neogeo.zip` consist of at least files you can see here:

![aesminimum](/aesminimum.png)

If you keep only those files, AES mode will be automatically forced for any NeoGeo game (recommended).

**Important!** The files which are highlighted on this picture (`neo-epo.bin` and `neo-po.bin`) are the only one actually related to AES mode, and you probably will need to include them in your archive to make AES mode work for you. `neo-po.bin` is necessary for japanese-only titles or to make the japanese versions to work, but due to emulation issue it also forces japanese language as default, that's why you will need to remove it to display english in some games.

4. Load any FBA compatible neo geo ROM. More complete archive (including files needed to run MVS and UniBIOS modes) might need additional configuration to force AES mode:

In RaLibretro: Settings->Emulation->Force Neo Geo Mode->AES

In RetroArch: Command->Menu Toggle->Options->Force Neo Geo Mode->AES
