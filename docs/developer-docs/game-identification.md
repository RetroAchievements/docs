---
title: Game Identification Methods by Console
description: Detailed guide on the hashing methods used for game identification across various gaming consoles, including Nintendo, Sega, Sony, and more.
---

# Game Identification

This page details the hashing method used for each supported system.

## The 3DO Company

- **3DO Interactive Multiplayer** uses a custom hash.
  - The volume header (first 132 bytes of sector 0) and the contents of the LaunchMe file are hashed.

## Amstrad

- **Amstrad CPC** uses the MD5 checksums of each disk.
  - As saving and other manipulations can mutate disk data, local copies of loaded images are required to ensure that their hashes do not change across sessions.

## Apple

- **Apple II** uses the MD5 checksums of each disk.
  - As saving and other manipulations can mutate disk data, local copies of loaded images are required to ensure that their hashes do not change across sessions.

## Arcade

- **Arcade** uses a custom hash.
  - The filename string without the extension (`path/galaga.zip` -> `galaga`) is hashed. It is case-sensitive.

## Arduboy Inc.

- **Arduboy** uses a custom hash.
  - Arudboy .hex files contain ASCII text. We normalize to Unix line endings, then perform a full file hash.

## Atari

- **Atari 2600** uses the MD5 checksum.

- **Atari 7800** uses the MD5 checksum unless the ROM has a header.

  - If the ROM starts with `\1ATARI7800`, the first 128 bytes are ignored and the remaining file contents are hashed. If the ROM does not start with `\1ATARI7800`, the entire file is hashed.

- **Atari Jaguar** uses the MD5 checksum.

- **Atari Jaguar CD** uses a custom hash.

  - A header block is located within the first sector of the disc. This block indicates the location and size of the boot code, which is loaded and hashed.
  - If the resulting hash is `254487b59ab21bc005338e85cbf9fd2f`, it's a common bootloader for homebrew games and the actual game code is located in track 2. If a separate header block containing a new location and size is found in track 2, then that data is loaded and hashed.

- **Atari Lynx** uses the MD5 checksum unless the ROM has a header.
  - If the ROM starts with `LYNX\0`, the first 64 bytes are ignored and the remaining file contents are hashed. If the ROM does not start with `LYNX\0`, the entire file is hashed.

## Bandai

- **WonderSwan** uses the MD5 checksum.

- **WonderSwan Color** uses the MD5 checksum.

## Coleco

- **ColecoVision** uses the MD5 checksum.

## Fairchild

- **Channel F** uses the MD5 checksum.

## GCE

- **Vectrex** uses the MD5 checksum.

## Magnavox

- **Odyssey2** uses the MD5 checksum.

## Mattel

- **Intellivision** uses the MD5 checksum.

## Microsoft

- **MSX / MSX2** uses the MD5 checksums of each disk.
  - As saving mutates disk data, local copies of loaded images are required to ensure that their hashes do not change across sessions. We do not believe this is working, but have yet to find a game where saving to disk actually works.

## NEC

- **PC-8001/PC-8801** uses the MD5 checksums of each disk.

  - As saving and other manipulations can mutate disk data, local copies of loaded images are required to ensure that their hashes do not change across sessions.

- **PC Engine / TurboGrafx 16 / SuperGrafx** use the MD5 checksum unless the ROM has a header.

  - If the size of the file is 512 bytes more than a multiple of 128KB, the first 512 bytes are ignored and the remaining file contents are hashed. If the size of the file is not 512 bytes more than a multiple of 128KB, the entire file is hashed.

- **PC Engine CD / TurboGrafx-CD** - uses a custom hash. The boot code and disc title are hashed as follows:

  - Read 128 bytes from sector 1 of the data track (PCE predates ISO-9660, so there's no file system to read).
  - If `"PC Engine CD-ROM SYSTEM"` does not exist at 32 bytes into the data, discard as invalid.
  - Copy the last 22 bytes of the data into a buffer. This is the disc title, and _usually_ identifies the game.
  - The first three bytes of the data are a little-endian sector index for the boot code.
  - The fourth byte is the number of sectors that the boot code occupies.
  - The boot code is appended to the buffer (N sectors, starting at sector X)
  - The buffer is hashed.

- **PC-FX** uses a custom hash. The boot code and disc title are hashed as follows:
  - Read 32 bytes from sector 0 of the data track (PC-FX predates ISO-9660, so there's no file system to read).
  - If `"PC-FX:Hu_CD-ROM"` was not read, discard as invalid.
  - Read 128 bytes from sector 1 of the data track into a buffer. This is the volume header and includes the disc title.
  - The 32-bit value at 32-bytes into the buffer is the first sector of the boot code.
  - The 32-bit value at 36-bytes into the buffer is the number of sectors that the boot code occupies.
  - The boot code is appended to the buffer (N sectors, starting at sector X)
  - The buffer is hashed.

## Nintendo

- **Famicom Disk System** uses the MD5 checksum unless the file has a header.

  - If the ROM starts with `FDS\1a`, the first 16 bytes are ignored and the remaining file contents are hashed.
  - If the ROM does not start with `FDS\1a`, the entire file is hashed.
  - As saving mutates disk data, local copies of loaded images are required to ensure that their hashes do not change across sessions.

- **Game Boy** uses the MD5 checksum.

- **Game Boy Advance** uses the MD5 checksum.

- **Game Boy Color** uses the MD5 checksum.

- **GameCube** uses a custom hash. Initially loaded program code is hashed as follows:

  - The Apploader is loaded and added to a buffer.
  - Each DOL segment (code and data) referenced in the Apploader is loaded and added to the buffer.
  - The buffer is hashed.

- **Nintendo 64** uses the MD5 checksum for Big Endian (`.z64`) ROMs.

  - ByteSwapped (`.v64`) and Little Endian (`.n64`) use the MD5 checksum for its Big Endian counterpart.

- **Nintendo DS** uses a custom hash.

  - A NDS ROM has a 0x160 byte header. In this header are pointers to icon/title information and to the boot code for both processors. The hash method combines the header, the two pieces of boot code, and the icon/title information and hashes the result.
  - The icon/title information is 0xA00 bytes starting at the address stored in the header at $68
  - The arm9 code address is stored at $20 in the header, and the size is stored at $2C in the header
  - The arm7 code address is stored at $30 in the header, and the size is stored at $3C in the header

- **Nintendo Entertainment System / Famicom** uses a custom hash.

  - If the ROM starts with `NES\1a`, the first 16 bytes are ignored and the remaining file contents are hashed.
  - If the ROM does not start with `NES\1a`, the entire file is hashed.

- **Pokemon Mini** uses the MD5 checksum.

- **Super Nintendo Entertainment System / Super Famicom / Satellaview / Sufami Turbo** use the MD5 unless the ROM has a header.
  - If the size of the file is 512 bytes more than a multiple of 8KB, the first 512 bytes are ignored and the remaining file contents are hashed.
  - If the size of the file is not 512 bytes more than a multiple of 8KB, the entire file is hashed.
- **Virtual Boy** uses the MD5 checksum.

## SNK

- **Neo Geo CD** uses a custom hash. Initially loaded program code is hashed as follows:

  - The `IPL.TXT` file is loaded and parsed.
  - Each line of the file is data to load. PRG files are executable code. Each PRG file is loaded and added to the buffer.
  - The buffer is hashed.

- **Neo Geo Pocket** uses the MD5 checksum.

- **Neo Geo Pocket Color** uses the MD5 checksum.

## Sega

- **32X** uses the MD5 checksum.

- **Dreamcast** uses a custom hash. The disc metadata and primary executable are hashed as follows:

  - The first 512 bytes of sector 0 are appended to the buffer. This contains the volume header and ROM header. The first 16 bytes must be `"SEGA SEGAKATANA "`. If not, discard as invalid.
  - The contents of the primary executable (as identified by the volume header) are appended to the buffer.
  - The buffer is hashed.

- **Game Gear** uses the MD5 checksum.

- **Master System** uses the MD5 checksum.

- **Mega Drive / Genesis** uses the MD5 checksum.

- **SG-1000** uses the MD5 checksum.

- **Saturn** uses a custom hash.

  - The first 512 bytes of track 0 are hashed. This contains the volume header and ROM header. The first 16 bytes must be `"SEGADISCSYSTEM  "` for Sega CD or `"SEGA SEGASATURN "` for Sega Saturn. If not, discard as invalid.
  - Immediately following those 512 bytes are an arbitrary amount of code that validates the region and loads the primary executable. Without processing the code, we cannot determine what additional file(s) to hash, so this was determined to be sufficient as an alternative to hashing the entire CD.

- **Sega CD** uses a custom hash.
  - The first 512 bytes of track 0 are hashed. This contains the volume header and ROM header. The first 16 bytes must be `"SEGADISCSYSTEM  "` for Sega CD or `"SEGA SEGASATURN "` for Sega Saturn. If not, discard as invalid.
  - Immediately following those 512 bytes are an arbitrary amount of code that validates the region and loads the primary executable. Without processing the code, we cannot determine what additional file(s) to hash, so this was determined to be sufficient as an alternative to hashing the entire CD.

## Sony

- **PlayStation** uses a custom hash. The primary executable and its name are hashed as follows:
  - The `SYSTEM.CNF` file is loaded and parsed. The primary executable is identified by the BOOT= line within.
  - The primary executable name (and its path) are extracted from `SYSTEM.CNF` and written to a buffer.
  - The contents of the primary executable are appended to the buffer.
  - The buffer is hashed.
- **PlayStation 2** uses a custom hash. The primary executable and its name are hashed as follows:
  - The `SYSTEM.CNF` file is loaded and parsed. The primary executable is identified by the BOOT2= line within.
  - The primary executable name (and its path) are extracted from `SYSTEM.CNF` and written to a buffer.
  - The contents of the primary executable are appended to the buffer.
  - The buffer is hashed.
- **PlayStation Portable** uses a custom hash. The disc metadata and primary executable are hashed as follows:
  - The contents of the `PSP_GAME\PARAMS.SFO` file are written to a buffer. This contains the game attributes displayed in the menu, including the name and serial.
  - The contents of the primary executable (`PSP_GAME\SYSDIR\EBOOT.BIN`) are appended to the buffer.
  - The buffer is hashed.

## WASM-4

- **WASM-4** uses the MD5 checksum.

## Watara

- **Supervision** uses the MD5 checksum.

## Wellback

- **Mega Duck** uses the MD5 checksum.
