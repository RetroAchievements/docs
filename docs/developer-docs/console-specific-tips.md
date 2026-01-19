---
title: Console-specific Tips for Achievement Development
description: Essential tips and guidelines for memory inspection and achievement development across various retro consoles including NES, Game Boy, GBA, N64, DS, Neo Geo, PlayStation, and PSP.
---

# Console-specific Tips

When excavating the memory of these old consoles it helps to know what the original creators of the games were working with in the first place. If you familiarize yourself with the quirks of your favorite console then set making will be easier and more accurate.

[[toc]]

## NES

### Memory Mirroring

![nes_mem_mirror](/nes-memory-mirroring.png)

When using the memory inspector to find variables for NES games, there will be 4 copies of everything you find. If you're wondering "which one do I use?" or "should I check for all of them?" it's not as complicated as it seems.

This is a feature of the NES that gave developers more ways of looking at memory. Because the NES itself only has 2KB of RAM, the first result (the one below 0x800) should be used for consistency, and applying additional conditions on the others will do nothing.

This applies to RPS and leaderboards as well.

## Game Boy

### Memory Map

Certain ranges of values mean different things in the context of the Game Boy hardware, so having a map of what's where can help you with eliminating useless addresses. Here's the lowdown:

- ❌ **0x0000 - 0x7FFF: ROM Data** (No reason to use. This area contains header information that's only read on certain emulators.)
- ❌ **0x8000 - 0x9FFF: Graphics Data** (Some things here might correlate with what you're looking for if you're trying to find a map ID or animation, but there will always be a better way of going about what you're doing than using any of these)
- ✔️ **0xA000 - 0xBFFF: Cartridge RAM** (IE. save data. Sometimes using these addresses will be unavoidable but then your set could be prone to cheating by loading 100% save files. More info on protecting against save files to come)
- ✔️ **0xC000 - 0xDFFF: Work RAM** (The good stuff; almost everything you should use will fall inside this range)
- ❌ **0xE000 - 0xFDFF: ECHO RAM** (Do not use, see below)
- ❌ **0xFE00 - 0xFE9F: More Graphics Data** (same as Graphics Data above)
- ❌ **0xFEA0 - 0xFF7F: Miscellaneous** (Do not use)
- ✔️ **0xFF80 - 0xFFFF: Miscellaneous** (Okay to use)

For more info see: http://gameboy.mongenel.com/dmg/asmmemmap.html

### ECHO RAM

![gb_echo_ram](/game-boy-echo-ram.png)

Similarly to the NES, certain variables may show up twice when searching in the Memory Inspector. The second result is in what's called the ECHO RAM, which is a mirror of the actual memory. Since some emulators tend to ignore this area or emulate it incorrectly, it's recommended to NOT use it at all and always use the first result.

The Game Boy has 8KB of RAM starting at 0xC000. ECHO RAM starts at 0xE000, so if your address begins with an E you'll want to replace the first non-zero character with a C. Remember: C is correct, E is echo!

### GBC

On the GBC, the 4KB of memory from 0xD000-0xDFFF is a bank from a larger 32KB memory block not directly accessible by the processor. Bits 0-2 of 0xFF70 indicate which bank is loaded into the 0xD000-0xDFFF memory block. It's a "feature" used to expand the storage available to GBC ROMs while still supporting GB ROMs.

Bank switching (changing the value of 0xFF70) causes the memory in the 0xD000-0xDFFF range to update. This appears as flickering in the Memory Viewer and makes tracking down values in that memory range difficult. If you are writing conditions dependent on memory in that block, you should also require that 0xFF70 have a specific value to ensure you are looking at the correct bank. The 4KB of memory from 0xC000-0xCFFF is not bank-switched and can be used safely without additional conditions.

It is not advisable to use these addresses for achievements if there is any alternative to doing so. As of January 2018, RALibretro will only display bank 0x00 at 0xFF70. RetroArch has fluctuating memory banks, but the various addresses do not function in the same manner as RAVisualBoyAdvance. At least until RetroArch receives a memory inspector, achievements using addresses from 0xD000-0xDFFF will only work within RAVisualBoyAdvance.

### GB and GBC BIOS

RALibRetro and RetroArch support the GB/GBC BIOS, which shows the "Nintendo" and "GameBoy" logo before starting the game. This provides approximately four seconds where the main memory ($C000-$DFFF) hasn't been initialized and can't be trusted, and may cause achievements to trigger while loading the game for a subset of users who have the BIOS enabled.

To enable this feature, put the bios file (named `gb_bios.bin` or `gbc_bios.bin`) into the system directory of either RALibRetro or RetroArch. When you start the game, you will see the "Nintendo" and "GameBoy" logos before proceeding into the actual game.

If this is causing you problems, you may need to add logic to prevent the achievements from triggering while the BIOS is executing, but it would be preferable to use in-game logic if possible (i.e. a specific screen is being displayed).

The BIOS code is loaded from $0000-$00FF, so identify some chunk of that memory that's unique while the BIOS is running and ignore it. For example, the last four bytes of the GBC BIOS block are `3E 11 E0 50`, so you could add this condition to the achievement to prevent it from triggering while the BIOS is running.

```
32-bit 0x00FC != 0x50E0113E
```

After the BIOS completes, the block is blanked out with FF's, and repurposed for interrupt vectors. For more detail, see [A Look at the GameBoy bootstrap](https://realboyemulator.wordpress.com/2013/01/03/a-look-at-the-game-boy-bootstrap-let-the-fun-begin/).

**NOTE**: The last four bytes of the GB BIOS are `3E 01 E0 50`. So the GB condition would be:

```
32-bit 0x00FC != 0x50E0013E
```

## Game Boy Advance

### GBA Memory Map

| Name                         | Physical Address Range  | Virtual Address Range   | Offset (Virtual to Physical) |
| ---------------------------- | ----------------------- | ----------------------- | ---------------------------- |
| On-chip Working RAM (WRAMC)  | 0x00000000 - 0x00007fff | 0x03000000 - 0x03007fff | -0x03000000                  |
| On-board Working RAM (WRAMB) | 0x00008000 - 0x00047fff | 0x02000000 - 0x0203ffff | -0x01ff8000                  |
| Game Pak SRAM (SRAM)         | 0x00048000 - 0x00057fff | 0x0e000000 - 0x0e00ffff | -0x0dfb8000                  |

## Virtual Boy

Virtual Boy has hardware support for IEEE-754 Single-Precision Floating Point operations. If you are having trouble locating numeric data, try filtering using the `Float` data size.

## Nintendo 64

### Using GameShark Codes for Addresses

GameShark codes can be a valuable resource for finding addresses you can't or don't feel like finding. They have 12 characters per line and are fairly easy to parse.

`[AA][BBBBBB] [CCCC]`

[AA] is the codetype. This is a short instruction to the GameShark that defines what to do with the next value. If you understand what the GameShark code does you can use it to help with condition-making.

- **80, 88:** The address is 8-bit. Sets the value [00CC] to the address [BBBBBB].
- **81, 89:** The address is 16-bit. Sets the value [CCCC] to the address [BBBBBB].
- **D0:** The address is 8-bit. Checks if [00CC] is equal to the value at address [BBBBBB] then executes the next line if it is.
- **D2:** The address is 8-bit. Checks if [00CC] is DIFFERENT to the value at address [BBBBBB] then executes the next line if it is.
- **D1:** The address is 16-bit. Checks if [CCCC] is equal to the value at address [BBBBBB] then executes the next line if it is.
- **D3:** The address is 16-bit. Checks if [CCCC] is DIFFERENT to the value at address [BBBBBB] then executes the next line if it is.

Here are some examples:

- Paper Mario: Infinite HP:

`[80][10F292] [0032]`

Sets the 8-bit value at 0x10F292 to 0x32 (50). So this means Mario's HP is an 8-bit value at 0x10F292.

- Donkey Kong 64: Play as Rambi:

`[80][74E77C] [0006]`

Sets the 8-bit value at 0x74E77C to 6. So this means the character you're playing as is an 8-bit value at 0x74E77C.

- Chameleon Twist 2: Hold L to Moon Jump:

`[D0][18BAB5] [0020] <- Looking at this one`

`[81][18B9E0] [4200]`

Checks if the 8-bit value at 0x18BAB5 is equal to 0x20. This means 0x18BAB5 contains a button press variable and Bit5 (0x20) corresponds to L.

[Anti-GSC](http://viper.shadowflareindustries.com/antigsc/index.php?codes&dev=gs&system=n64) and [GameHacking](https://gamehacking.org/system/n64) are both good resources for finding GameShark codes.

## Nintendo DS

- **0x3ffa8c: DS Game ID** ASCII String that identifies the DS Game being played. Can be used to check which version of a game is loaded (for multi-region support, etc)
- Pointers always start with a `0x02`. For example, a pointer pointing directly to `0x13f944` will be `0x0213f944`.
- DSi mode can be detected when bit0 & bit1 are 1 at 0x400. This is known to slightly shift memory on some games and so it could be used to protect against the mode if needs be.

## Nintendo DSi

- **0xfffe00: DSi Mode String** ASCII String that identifies the DSi Game being played. Can be used to check if you are in the game rather than on the DSi home screen, etc.

## GameCube

- Identification of the game/disc:
   - Serial is located at **0x00000000** as a string of ASCII characters.
   - Disc Number (for multidisk games) is stored at **0x80000006**. (0 = Disc 1)
   - Revision Number is stored at **0x00000007**.
   - You can use these to determine the specific disc loaded.
- GameCube uses a PowerPC chipset with big-endian data. Filter using `16-Bit BE`, `32-Bit BE`, `Float BE`, and `Double32 BE` for data types wider than 1 byte (8-bits). Data is typically aligned on Gamecube, so 16-Bit data is always at an even address and 32-bit data addresses at a multiple of 4, etc.
- Gamecube has one bank of RAM, 24MB, located at `0x80000000-0x817FFFFF`, which is mapped at `0x00000000-0x017FFFFF` in the RA toolkit.
   - Therefore, pointers found will start with 0x8, and to use them, you can mask them using `0x1fffffff` to convert to RA addressing.
   - `Add Address 32-Bit BE Pointer & 0x1fffffff`
   - Uncached mirror of the RAM exists as well at `0xC0000000`. If you happen to find pointers that begin with 0xC, the same masking scheme will work to convert them to the RA addressing.

## Wii

- Identification of the game/disc:
   - Serial is located at **0x00000000** as a string of ASCII characters.
   - Disc Number (for multidisk games) is stored at **0x80000006**. (0 = Disc 1)
   - Revision Number is stored at **0x00000007**.
   - You can use these to determine the specific disc loaded.
- Wii uses a PowerPC chipset with big-endian data. Filter using `16-Bit BE`, `32-Bit BE`, `Float BE`, and `Double32 BE` for data types wider than 1 byte (8-bits). Data is typically aligned on Wii, so 16-Bit data is always at an even address and 32-bit data addresses at a multiple of 4, etc.
- Wii has two banks of RAM, 24MB called "MEM1" located at `0x80000000-0x817FFFFF`, which is mapped at `0x00000000-0x017FFFFF` in the RA toolkit, and 64MB called "MEM2" located at `0x90000000-0x93FFFFFF`, which is mapped at `0x10000000-0x13FFFFFF` in the RA toolkit.
   - Therefore, pointers found will start with 0x8 or 0x9, and to use them, you can mask them using `0x1fffffff` to convert to RA addressing.
   - `Add Address 32-Bit BE Pointer & 0x1fffffff`
   - Uncached mirrors of MEM1 and MEM2 exist as well at `0xC0000000` and `0xD0000000`, respectively. If you happen to find pointers that begin with 0xC or 0xD, the same masking scheme will work to convert them to the RA addressing.

## Neo Geo

### Mandatory UniBIOS protection

UniBIOS allows several debugging options, and also access the database of individual cheats for every game. Therefore all achievements for Neo Geo need to be protected from abusing it. The simplest solution here is disallowing UniBIOS usage completely, directly from the level of achievement code.

Fortunately, part of UniBIOS data seems to be reflected in two address strings in the RAM: `0x00fe30` and `0x00fe50`. While UniBIOS is active, `0x00fe30` in 32-bit size seems to always brings the same value (for every Neo Geo game), which is `0x80025632`, and it doesn't seem to change after the ROM was loaded. For any other BIOS, the value is always 0 (except for the moment the RAM is overloaded by the diagnostic program, after the ROM was loaded).

To protect achievements from using UniBIOS, all we need to do is to include a simple protection which will reset when `0x00fe30` in 32-bit size is not equal to `0`. This additionally protects the achievement from unlocking during RAM diagnostic process.

**Here is how the protection should look (selected in the Achievement Editor):**
![unineo1](/unibiosprotection.png)

**Here is how the same RAM region looks when other BIOS are used (here MSV):**
![unineo2](/unibiosp2.png)

## PlayStation

NOTE: If a core doesn't require a BIOS, this memory may not be initialized.

The RAM from $0000-$FFFF is reserved for the kernel. The boot executable name appears to reliably be placed at $9E18 AND $B8B0. The boot executable name almost always contains the disc serial, which is unique per region, so this can often be used to determine which version of a game the player is using.

```
Spyro the Dragon                         SCUS_942.28

9E18 5C 53 43 55 53 5F 39 34 32 2E 32 38 3B 31
      \  S  C  U  S  _  9  4  2  .  2  8  ;  1

B8B0 63 64 72 6F 6D 3A 5C 53 43 55 53 5F 39 34 32 2E 32 38 3B 31
      c  d  r  o  m  :  \  S  C  U  S  _  9  4  2  .  2  8  ;  1
```

## PlayStation Portable

When working with PSP make sure to check if your game has any DLC as this form of content is able to be accessed by players without altered saves or patched versions of the game and will need to be accounted for and in some cases protected against if it provides advantages that you don't want players to exploit.

## Amstrad CPC

Game written in BASIC will often use Microsoft Binary Format for numeric values. This is a floating point data. You can filter against the `MBF32 LE` data size on this system to find these values.

## Apple II

Game written in BASIC will often use Microsoft Binary Format for numeric values. This is a floating point data. You can filter against the `MBF32` data size on this system to find these values.

## PC-8000 / PC-8800

Games may use Microsoft Binary Format for numeric values. This is a floating point data. You can filter against the `MBF32` data size on this system to find these values.
