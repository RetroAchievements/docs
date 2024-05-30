# Work in Progress

This page details how the memory of each supported system is mapped.

Memory banks as registered in the RA emulators are defined [here](https://github.com/RetroAchievements/RAIntegration/blob/master/src/data/ConsoleContext.cpp).

## NES

Reference: https://wiki.nesdev.com/w/index.php/CPU_memory_map

| Bank | Offset | Length | Description                |
| ---- | ------ | ------ | -------------------------- |
| 0    | 0x0000 | 0x0800 | 2KB internal RAM           |
| 1    | 0x0800 | 0x0800 | Mirror of $0000-$07FF      |
| 2    | 0x1000 | 0x0800 | Mirror of $0000-$07FF      |
| 3    | 0x1800 | 0x0800 | Mirror of $0000-$07FF      |
| 4    | 0x2000 | 0x0008 | PPU registers              |
| 5    | 0x2008 | 0x1FF8 | Mirrors of $2000-$2008     |
| 6    | 0x4000 | 0x0018 | APU and I/O registers      |
| 7    | 0x4018 | 0x0008 | APU and I/O test registers |
| 8    | 0x4020 | 0x1FE0 | Cartridge data             |
| 9    | 0x6000 | 0x2000 | Cartridge RAM              |
| 10   | 0x8000 | 0x8000 | Cartridge ROM              |

## SNES

https://en.wikibooks.org/wiki/Super_NES_Programming/SNES_memory_map

## N64

https://raw.githubusercontent.com/mikeryan/n64dev/master/docs/n64ops/n64ops%23h.txt

## GB

Reference: [http://gameboy.mongenel.com/dmg](http://gameboy.mongenel.com/dmg/asmmemmap.html)

The memory map reflects the CPU memory space.

## GBC

The memory map is identical to the Game Boy's, with the exception of banked work RAM. The first bank is mapped to its usual location in CPU space, while banks 2-7 are appended to the end of the memory map, in the 0x10000-0x15FFF region.

## GBA

https://www.coranac.com/tonc/text/hardware.htm#sec-memory

## VirtualBoy

## Master System

Reference: http://www.codeslinger.co.uk/pages/projects/mastersystem/memory.html

_TODO_: find a more reliable source.

| Offset  | Length  | Description |
| ------- | ------- | ----------- |
| 0x0C000 | 0x02000 | RAM         |

## MegaDrive (Genesis)

https://en.wikibooks.org/wiki/Genesis_Programming  
https://wiki.megadrive.org/index.php?title=Main_68k_memory_map  
see also Jamiras comment here: https://github.com/RetroAchievements/RALibretro/issues/47#issuecomment-455374796

## GameGear

## Atari 2600

Reference: http://www.randomterrain.com/atari-2600-memories-tutorial-andrew-davie-05.html#summary

| Offset | Length | Description |
| ------ | ------ | ----------- |
| 0x080  | 0x080  | RAM         |

## Atari 7800

## Atari Lynx

## ColecoVision

## NeoGeo Pocket

## PCEngine (TurboGrafx16)

## PCEngine CD

## Arcade

## PC-8001 / PC-8801

Reference: http://www.maroon.dti.ne.jp/youkan/pc88/memmap.html

The memory map is based on the PC-8801 layout, but excludes graphics VRAM and extended RAM.

### PC-8801

| Bank | Offset  | Length  | Description |
| ---- | ------- | ------- | ----------- |
| 0    | 0x00000 | 0x10000 | Main RAM    |
| 1    | 0x10000 | 0x1000  | Text VRAM   |

Text VRAM is also known as high-speed RAM, and is used as a main RAM area in some titles.

### PC-8001

Reference: [http://www.cyross.com/pc8801wiki](http://www.cyross.com/pc8801wiki/index.php/PC-8001%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%9E%E3%83%83%E3%83%97)

The entire memory space is mapped in the PC-8801 main RAM bank, but only RAM is exposed, so most of the mapped space will remain uninitialized.

| Offset  | Length  | Description |
| ------- | ------- | ----------- |
| 0x08000 | 0x08000 | RAM         |

## Apple II

Reference: http://apple2.guidero.us/doku.php/mg_notes/general/mem_map

The memory map consists of both main and auxiliary RAM banks. Rather than mapping the CPU-accessible memory space, which can flicker at high frequencies, the RAM banks are mapped consecutively.

Auxiliary RAM is only available on systems with 128KB of RAM (Apple IIe and up), so it will remain uninitialized on 64KB systems or when running titles that are not designed to make use of auxiliary RAM.

| Bank | Offset  | Length  | Description   |
| ---- | ------- | ------- | ------------- |
| 0    | 0x00000 | 0x10000 | Main RAM      |
| 1    | 0x10000 | 0x10000 | Auxiliary RAM |
