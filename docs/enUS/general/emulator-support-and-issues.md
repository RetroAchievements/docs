# Emulator Support and Issues

## Console Support

#### 3DO Interactive Multiplayer

- ✅ libretro core: **Opera**<br>
  - Some issues depending on BIOS

#### Amiga

- ❓ libretro core: **FS-UAE**
- ❌ libretro core: **P-UAE**<br>
  - Needs memory map to see exposed memory<br>
  - Locks disk files so they can't be opened for hashing<br>
  - Hard disk support?<br>
- ❓ libretro core: **PUAE 2021**
- ❓ libretro core: **UAE4ARM**

#### Amstrad CPC

- ✅ libretro core: **Caprice32**<br>
  - Core does not currently support writing to disk, which may affect hashing when implemented
- ❌ libretro core: **CrocoDS**

#### Apple II

- ✅ Standalone emulator: **[RAppleWin](https://retroachievements.org/download.php#rapplewin)**
- ⌛ BizHawk core: **Virtu**<br>
  - Testing<br>
  - 4 Jun 2023 - woz files are not supported<br>
  - 4 Jun 2023 - joystick not supported. keyboard has to be manually mapped.<br>
  - 4 Jun 2023 - have to manually create and load a multi-disk bundle for games with multiple disks. disks are generically labelled by index only.

#### Arcade

- ✅ libretro core: **FinalBurn Neo**<br>
  - Some boards may not be fully exposed
- ✅ libretro core: **flycast**<br>
  - Used for Atomiswave, NAOMI, and NAOMI2
- ❌ libretro core: **FB Alpha**<br>
  - Deprecated

#### Arcadia 2001

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**

#### Arduboy

- ✅ libretro core: **Arduous**

#### Atari 2600

- ✅ libretro core: **Stella**
- ❓ libretro core: **Stella 2014**
- ✅ BizHawk core: **Atari2600Hawk**

#### Atari 5200

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **atari800**<br>
  - Appears to work fine, but the core is a bit of a headache to use.<br>
    - The BIOS has to be configured within the core (F1 > Emulator Configuration > System ROM settings)<br>
    - Couldn't figure out controls - does the joystick need to be configured within the core too?<br>
    - Allows loading arbitrary files from the internal menu, which bypasses hashing
- ❌ libretro core: **a5200**
  - Does not expose memory

#### Atari 7800

- ✅ libretro core: **ProSystem**
- ✅ BizHawk core: **A7800Hawk**

#### Atari Jaguar

- ✅ libretro core: **Virtual Jaguar**<br>
  - No save state support<br>
  - [Many issues with emulation](https://github.com/libretro/virtualjaguar-libretro/issues/38)
- ✅ BizHawk core: **Virtual Jaguar**

#### Atari Jaguar CD

- ✅ BizHawk core: **Virtual Jaguar**

#### Atari Lynx

- ✅ libretro core: **Handy**<br>
  - Most recommended
- ✅ libretro core: **Beetle Lynx**
- ✅ BizHawk core: **Handy** (Mednafen's fork)

#### Atari ST

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **Hatari**<br>
  - Memory not exposed

#### Cassette Vision

- ❌ _Not supported_ - needs hashing method and memory map

#### CHIP-8

- ❌ _Not supported_ - needs console ID, hashing method and memory map
- ❌ libretro core: **Emux CHIP-8**
- ❌ libretro core: **JAXE**<br>
  - 16 Apr 22 - Seems ready when we are<br>
  - May need settings blacklist to prevent lowering speed

#### Commodore 128

- ❌ _Not supported_
- ❌ libretro core: **VICE x128**

#### Commodore 64

- ❌ libretro core: **vice_x64**<br>
  - NOTE: Joystick is in port 2 by default. Use JOY button on virtual keyboard (select) to switch it to port 1.<br>
  - 1 May 2022 - Reset does not autorun game
- ⌛ BizHawk core: C64Hawk<br>
  - Testing
- ❓ libretro core: **Frodo**

#### ColecoVision

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **blueMSX**
- ✅ BizHawk core: **ColecoHawk**
- ❌ libretro core: **Gearcoleco**

#### Elektronika BK-0010/0011

- ❌ _Not supported_
- ❌ libretro core: **M**

#### Elektor TV Games Computer

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**

#### Enterprise 128

- ❌ _Not supported_
- ❌ libretro core: **ep128emu**

#### Fairchild Channel-F

- ✅ libretro core: **FreeChaF**
- ❓ BizHawk core: **ChannelFHawk**

#### Famicom Disk System

- ✅ Standalone emulator: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ libretro core: **FCEUmm**
- ✅ libretro core: **Mesen**

#### FM Towns

- ❌ _Not supported_ - needs hashing method and memory map

#### Game & Watch

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **gw**<br>
  - Does not expose memory

#### Game Boy

- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ libretro core: **Gambatte**<br>
  - Most recommended
- ✅ libretro core: **Gearboy**
- ✅ libretro core: **mGBA**
- ✅ libretro core: **VBA-M**
- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**

#### Game Boy Color

- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**<br>
- ✅ Standalone emulator: **[Pizza Boy GBC](https://play.google.com/store/apps/details?id=it.dbtecno.pizzaboy)**<br>
  - Android devices only<br>
  - Does not support RAIntegration at this time, so achievement developers are unable to troubleshoot potential issues.
- ✅ libretro core: **Gambatte**<br>
  - Most recommended
- ✅ libretro core: **Gearboy**
- ✅ libretro core: **mGBA**
- ✅ libretro core: **VBA-M**
- ✅ BizHawk core: **Gambatte** (Pokémon speedrunning fork)
- ✅ BizHawk core: **GBHawk**
- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**

#### Game Boy Advance

- ✅ Standalone emulator: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Standalone emulator: **[Pizza Boy GBA](https://play.google.com/store/apps/details?id=it.dbtecno.pizzaboygba)**<br>
  - Android devices only<br>
  - Does not support RAIntegration at this time, so achievement developers are unable to troubleshoot potential issues.
- ✅ libretro core: **VBA-M**
- ✅ libretro core: **Beetle GBA**
- ✅ libretro core: **VBA Next**
- ✅ libretro core: **mGBA**<br>
  - Most recommended
- ✅ BizHawk core: **mGBA**
- ❓ libretro core: **gpSP**
- ❓ libretro core: **Meteor**
- ❓ libretro core: **TempGBA**

#### GameCube

- ⌛ Standalone emulator: **Dolphin**<br>
  - Testing
- ⌛ libretro core: **Dolphin**<br>
  - Testing

#### Game Gear

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **GearSystem**

#### Genesis / Mega Drive

- ✅ libretro core: **Genesis Plus GX**<br>
  - Most recommended
- ✅ libretro core: **Picodrive**
- ❌ libretro core: **Blastem**<br>
  - While some achievements may work, the core has issues with the Game RAM portion of memory.
- ✅ BizHawk core: **Genplus-gx** (Genesis Plus GX)

#### Intellivision

- ✅ libretro core: **FreeIntV**<br>
  - Crashes when game is reset<br>
  - Some crashes which might be related to Intellivoice
- ✅ BizHawk core: **IntelliHawk**

#### Interton VC 4000

- ✅ Standalone emulator: **[WinArcadia](https://amigan.1emu.net/releases/)**

#### J2ME

- ❌ _Not supported_ - needs console ID, hashing method and memory map
- ❌ libretro core: **freej2me**

#### Magnavox Odyssey 2

- ✅ libretro core: **O2EM**
- ❓ BizHawk core: **O2Hawk**

#### Master System | Mark III

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Gearsystem**
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **Picodrive**
- ❓ BizHawk core: **SMSHawk**
- ❓ libretro core: **Emux SMS**

#### Mega Duck

- ✅ libretro core: **SameDuck**

#### MicroW8

- ❌ _Not supported_
- ❌ libretro core: **MicroW8**

#### MS-DOS

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **dosbox-core**
- ❌ libretro core: **dosbox-SVN**
- ❌ libretro core: **dosbox-pure**<br>
  - Needs a way to prevent launching with user-specified command line parameters<br>
  - Needs a way to prevent TSRs<br>
  - Needs a way to deactivate achievements if game drops to command prompt

#### MSX

- ✅ libretro core: **blueMSX**<br>
  - Hash relies on .DSK file not being modified<br>
  - .DSK files appear to be unsupported if they also require a cartridge. There is a core option for this, but it doesn't seem to function properly. See "SD Snatcher", which used a 'sound' cartridge.
- ❓ libretro core: **fMSX**

#### Neo Geo CD

- ✅ libretro core: **NeoCD**

#### Neo Geo Pocket

- ✅ libretro core: **Beetle NeoPop**
- ❓ libretro core: **RACE**
- ✅ BizHawk core: **NeoPop** (Mednafen)

#### Neo Geo Pocket Color

- ✅ libretro core: **Beetle NeoPop**
- ❓ libretro core: **RACE**
- ✅ BizHawk core: **NeoPop** (Mednafen)

#### NES / Famicom

- ✅ Standalone emulator: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ libretro core: **FCEUmm**<br>
  - Most recommended
- ✅ libretro core: **Mesen**
- ✅ libretro core: **QuickNES**
- ❌ libretro core: **NEStopia**<br>
  - Does not map SRAM
  - PLEASE STOP USING THIS FOR ACHIEVEMENTS
- ❓ libretro core: **Emux NES**
- ❓ libretro core: **fixNES**

#### Nintendo 3DS

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **Citra**<br>
  - Only exposes 64MB of memory - documentation suggests there should be 128MB.<br>
  - Does not support save states
- ❌ libretro core: **Citra 2018**
- ❌ libretro core: **Citra Canary**

#### Nintendo 64

- ✅ Standalone emulator: **[RAProject64](https://retroachievements.org/download.php#rap64)**
- ✅ libretro core: **ParaLLEl N64**
- ✅ libretro core: **Mupen64Plus-Next**<br>
  - Most recommended
- ⌛ BizHawk core: **Mupen64Plus**<br>
  - Testing (there are some graphical issues that can be fixed using the angrylion plugin)

#### Nintendo DS

- Limited microphone support
- ✅ libretro core: **DeSmuME**
- ✅ libretro core: **DeSmuME 2015**
- ✅ libretro core: **melonDS**
- ✅ libretro core: **melonDS DS**
- ✅ BizHawk core: **melonDS**

#### Nintendo DSi

- ✅ libretro core: **melonDS DS**
  - Does not support save states at this time
- ✅ BizHawk core: **melonDS**
- ❌ libretro core: **DeSmuME**
- ❌ libretro core: **melonDS**

#### Nokia N-Gage

- ❌ _Not supported_ - needs hashing method and memory map

#### Oric

- ❌ _Not supported_

#### Palm OS

- ❌ _Not supported_
- ❌ libretro core: **Mu**

#### PC Engine | TurboGrafx-16 | SuperGrafx

- ✅ libretro core: **Beetle PCE Fast**<br>
  - SuperGrafx games do not work on the Beetle PCE Fast core
- ✅ libretro core: **Beetle SuperGrafx**<br>
  - Most recommended
- ✅ BizHawk core: **PCEHawk**

#### PC Engine CD | TurboGrafx-CD

- ✅ libretro core: **Beetle PCE Fast**
- ✅ libretro core: **Beetle SuperGrafx**<br>
  - Most recommended
- ✅ BizHawk core: **PCEHawk**

#### PC-6001

- ❌ _Not supported_ - needs hashing method and memory map

#### PC-8800

- ✅ Standalone emulator: **[RAQuasi88](https://retroachievements.org/download.php#raquasi88)**<br>
  - Most recommended
- ❌ libretro core: **quasi88**<br>
  - NOT RECOMMENDED<br>
  - PC-88VA not supported<br>
  - 16 Apr 2022 - Cannot load m3u. Hash fails because core locks disk file.<br>
  - 16 Apr 2022 - Attempting to load a single disk game in RALibretro just goes to "How many disks?" prompt. Seems to work in RetroArch<br>
  - 16 Apr 2022 - RALibretro does not provide subsystem interface for loading multi-disk games

#### PC-9800

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **Neko Project II Kai**<br>
  - Memory is not exposed.<br>
    - It appears to be exposed in some games depending on the RAM size selected, but it seems like the machine RAM and not actually related to the game.
- ❌ libretro core: **Neko Project II**

#### PC-FX

- ✅ libretro core: **Beetle PC-FX**
- ✅ BizHawk core: **T.S.T.** (Mednafen)

#### Philips CD-I

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **CDi 2015**
- ❌ libretro core: **SAME CDi**

#### Philips P2000

- ❌ _Not supported_
- ❌ libretro core: **M2000**

#### Pico-8

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **FAKE-08**
- ❌ libretro core: **Retro8**

#### PlayStation

- ✅ Standalone emulator: **[DuckStation](https://www.duckstation.org/wiki/Main_Page)**<br>
  - There may be memory leak and/or burn-in when using save states. Softcore players beware!
- ✅ libretro core: **Beetle PSX HW**<br>
  - Most recommended
- ✅ libretro core: **Beetle PSX**
- ✅ libretro core: **SwanStation**
- ❌ libretro core: **PCSX ReARMed**<br>
  - BIOS are not required for this core and will zero out the Kernal RAM.<br>
  - Technically supported; not recommended.
- ❓ BizHawk core: **Octoshock** (Mednafen)
- ❓ BizHawk core: **Nymashock** (Mednafen)
- ❓ libretro core: **Rustation**

#### PlayStation 2

- ✅ Standalone emulator: **[PCSX2](https://pcsx2.net/)**<br>
  - PCSX2 is currently **the only officially supported** option for earning achievements.
- ❌ Standalone emulator: AetherSX2
  - No longer being developed, has known incompatiblities
- ❌ Standalone emulator: NetherSX2
- ❌ libretro core: **LRPS2**<br>
  - Still in alpha state<br>
  - Does not expose memory
- ❌ libretro core: **Play!**<br>
  - Low compatibility with most commerical games<br>
  - Black screen with stuttering sound

#### PlayStation Portable

- ✅ Standalone emulator: **[PPSSPP](https://www.ppsspp.org/download/)**<br>
  - Does not support RAIntegration at this time, so achievement developers are unable to troubleshoot potential issues.
- ✅ libretro core: **PPSSPP**<br>
  - Loading save states too fast can cause it to crash<br>
  - Some games have graphical issues

#### PocketStation

- ❌ _Not supported_ - needs console ID, hashing method and memory map
- ❌ libretro core: **pockystation**<br>
  - Core doesn't seem functional, even in RetroArch

#### Pokemon Mini

- ✅ libretro core: **PokeMini**

#### SAM Coupé

- ❌ _Not supported_
- ❌ libretro core: **SimCoupe**
  - Still in alpha state

#### Sega 32X

- ✅ libretro core: **PicoDrive**<br>
  - Several games are problematic<br>
  - Appears to still have unmapped RAM

#### Sega CD

- Appears to still have unmapped RAM
- ✅ libretro core: **Genesis Plus GX**
- ✅ libretro core: **Picodrive**

#### Sega Dreamcast

- ✅ libretro core: **flycast**<br>
  - Must disable threaded rendering to use save states
- ❓ libretro core: **Flycast GLES2**

#### Sega Pico

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **picodrive**<br>
  - Needs controls related to turning pages in the attached books

#### Sega Saturn

- ✅ libretro core: **Beetle Saturn**<br>
  - The only _recommended_ core
- ❌ libretro core: **Yabause**<br>
  - Technically supported; not recommended.
- ❌ libretro core: **Kronos**<br>
  - Saving and loading states often locks up the UI in RALibretro<br>
  - Technically supported; not recommended.
- ❓ libretro core: **YabaSanshiro**
- ⌛ BizHawk core: **Saturnus** (Mednafen)
  - Testing

#### SG-1000

- ✅ Standalone emulator: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ libretro core: **Genesis Plus GX**<br>
  - Most recommended
- ✅ libretro core: **blueMSX**
- ❌ libretro core: **Gearsystem**
  - Has significant unexposed memory

#### Sharp X1

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **X1 Millennium**<br>
  - 16 Apr 2022 - Disk writes modify source media, which breaks hashing

#### Sharp X68K

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **px68k**<br>
  - Crashes RALibretro upon loading a game

#### SNES | Super Famicom | Satellaview | Sufami Turbo

- ✅ Standalone emulator: **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)**
- ✅ libretro core: **Snes9x (Current)**<br>
  - Most recommended
- ✅ libretro core: **Mesen-S**
- ❓ libretro core: **Beetle bsnes**
- ❓ libretro core: **Beetle Supafaust**
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
- ❌ libretro core: **Snes9x 2010**<br>
  - PLEASE STOP USING THIS FOR ACHIEVEMENTS!!!!
- ❓ BizHawk core: **BSNES**
- ❓ BizHawk core: **BSNESv115+**

#### SpectraVideo SVI 318/328

- ❌ _Not supported_
- ❌ libretro core: **blueMSX**

#### Super Cassette Vision

- ❌ libretro core: **EmuSCV**<br>
  - Unfinished according to [libretro docs](https://docs.libretro.com/library/emuscv/).<br>
  - Does not expose memory. Appears to [export a save state](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229) via the RETRO_MEMORY_SAVE_RAM interface, which we try to shoehorn into $E000 as that's what's flagged as Cartridge RAM for the system.

#### Thomson TO8/TO8D

- ❌ _Not supported_ - needs hashing method
- ❌ libretro core: **Theodore**<br>
  - Seems to work<br>
  - Uncertain how core handles writing to disk/tape. May affect hashing.

#### TI-83

- ⌛ libretro core: **Numero**<br>
  - Testing
- ⌛ BizHawk core: **TI83Hawk**<br>
  - Testing

#### TIC-80

- ❌ _Not supported_ - needs hashing method
- ❌ libretro core: **TIC-80**<br>
  - Doesn't export memory correctly. Can only see 8 bytes.

#### Uzebox

- ✅ BizHawk core: **Uzem**
- ✅ libretro core: **Uzebox**

#### Vectrex

- ✅ libretro core: **VecX**

#### VIC-20

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **VICE xvic**

#### Virtual Boy

- ✅ libretro core: **Beetle VB**
- ✅ BizHawk core: **Virtual Boyee** (Mednafen)

#### VMU

- ❌ _Not supported_ - needs console ID, hashing method, and memory map
- ❌ libretro core: **VeMUlator**

#### WASM-4

- ✅ libretro core: **wasm4**

#### Watara Supervision

- ✅ libretro core: **potator**

#### Wii

- ⌛ Standalone emulator: **Dolphin**<br>
  - Testing
- ⌛ libretro core: **Dolphin**<br>
  - Testing

#### Wii U

- ❌ _Not supported_ - needs hashing method and memory map

#### WonderSwan

- ✅ libretro core: **Beetle Cygne**
- ✅ BizHawk core: **Cygne** (Mednafen)

#### WonderSwan Color

- ✅ libretro core: **Beetle Cygne**
- ✅ BizHawk core: **Cygne** (Mednafen)

#### XBOX

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **DirectXbox**
  - Still in alpha state

#### Zeebo

- ❌ _Not supported_ - needs hashing method and memory map

#### ZX81

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **EightyOne**<br>
  - Memory not exposed

#### ZX Spectrum

- ❌ _Not supported_ - needs hashing method and memory map
- ❌ libretro core: **FUSE**<br>
  - Requires ability to map keyboard to port 3<br>
  - Uncertain about save support. Cannot seem to insert save disk
- ⌛ - BizHawk core: **ZXHawk**<br>
  - Hashing needs to be corrected<br>
  - Testing

More details on BizHawk cores can be found [here](https://tasvideos.org/BizHawk).
