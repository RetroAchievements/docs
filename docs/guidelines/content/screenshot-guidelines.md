---
title: Screenshot Guidelines
description: Guidelines for contributing game screenshots to RetroAchievements. Learn about the best practices for taking screenshots of games, including how to configure emulators.
---

# Screenshot Guidelines

## Taking Screenshots

- Screenshots should be taken directly from an emulator's screenshot capture function, using the game's natural resolution. Do not use external screenshot tools and do not take screenshots of an upscaled window or full screen display. 2D games should be pixel perfect and 3D games should be their natural resolution.
- If possible, 3D games can have their internal resolution upscaled by 2x or 3x. Note that this is a special emulator setting, not just resizing the window while it's at 1x internal resolution. This should only be done when the result looks good - it may not be desirable if the high quality 3D graphics clash too much with low quality upscaled 2D assets. If used, 3x is preferred over 2x. Never submit 4x or higher.
- For most systems, RALibretro is recommended for taking screenshots, since it generally takes them at the appropriate resolution. RetroArch should be avoided since it generally takes screenshots based on your window size.
- Standalone emulators such as DuckStation, PCSX2, Dolphin, and PPSSPP require configuration to have the appropriate screenshot settings. Please read the [Emulator Setup](#emulator-setup) section below.
- You should generally never manually resize or crop a screenshot, especially if it's just to force a match with the required dimensions. If you're sure you have the appropriate emulator settings and the screenshots are correct for the game, but the site doesn't allow it, it may be an oversight. Please report these cases in the `#cleanup-requests` forum in our [Discord server](https://discord.gg/dq2E4hE) if you're sure it's a mistake.
- Exceptions can include games for Amstrad CPC and some other systems like PS1 and Saturn where the emulator may produce screenshots that look too wide. You may need to manually resize these screenshots to the game's appropriate resolution using Nearest Neighbor scaling in an image editor. Be sure you know the game's proper resolution and be sure you know how to use Nearest Neighbor scaling if you're dealing with games like this.
- If a game uses multiple resolutions (e.g. title screen and in-game look different), you may also want to resize them to one appropriate resolution for the game, especially for the primary screenshots displayed on the game page. Again, if you're dealing with games like this and you choose to do this, be sure you know what the best unified resolution should be for the game and be sure to use Nearest Neighbor scaling.

## Submitting Screenshots

- File size must be under 6 MB to upload.
- Each game allows a maximum of 10 screenshots, including those marked as the title screen and completion screen. You don't have to fill all of these slots - the primary title screen and in-game screenshot and the completion screenshot are what's important.
- Some games lack a typical title screen. In these cases, a screenshot of the title during an opening movie or loading screen may be used. If that doesn't exist, an initial menu screen or gameplay screen may be used.
- Completion screenshots are intended to be "The End" screens that appear after beating the game, whenever possible. If such a screen doesn't exist, or if it's too uninteresting or non-distinct (i.e. pure text on a black background), creativity may be needed in taking a good screenshot during an ending scene, or when finishing the final level, defeating the final boss, winning the final round before looping (for arcade games), etc.
- If a game currently has low quality primary screenshots for both the title screen and in-game shot, please replace both at the same time. Submitting a higher quality replacement for one while leaving the other in lower quality may be rejected.

## General Guidelines

- No watermarks are to be present on any images.
- Be sure to carefully look at the existing screenshots for a game before submitting more. Multiple screenshots of the same level or scene aren't that interesting - diversity is preferred (as much as the game allows). Do not rush and submit several screenshots of the first level just for the sake of submitting things. In games with multiple playable characters, like fighting games, don't use just one character.
- Screenshots of menus generally shouldn't be submitted as in-game screenshots unless there's a good reason. Screenshots of gameplay are preferred. Also don't add too many shots of cutscenes at the expense of gameplay.
- Try to make screenshots interesting in general - not just characters standing in idle poses at the beginning of each level, but shots with more action and energy as well.
- Avoid submitting screenshots of spoilers - scenes that involve plot twists, unexpected characters or unexpected boss fights later in the game, etc. Use your best judgment. (completion screenshots are an exception, of course - the site will automatically obscure them as a spoiler)
- Don't try too hard to be funny or provocative. It may depend on the nature of the game, but in general the screenshots should be neutral - it gets old if they're all trying to be silly.
- Avoid adding potentially controversial or NSFW content. Even if it's in the nature of the game, screenshots (like other content on game pages) should generally steer clear of it. They can be censored if there's no other option.
- If replacing a low quality primary in-game screenshot, consider reproducing its content if you feel it's interesting, or if it depicts a particularly iconic level or scene or something else that would be missed by the additional screenshots.

## System-Specific Guidelines

- Game Boy screenshots should be in black-and-white. Do not use SGB borders.
- Emulator filters and shaders should be disabled for screenshots. For example, Game Boy Color and Game Boy Advance should not use color correction, and Apple II should not use a scanline filter.
- NES color palette can be whatever the default is in your emulator.
- DS screenshots should include both screens in vertical orientation, without a gap in-between, and with both screens being the same size.
- As mentioned above, Amstrad CPC games may produce screenshots that look too wide using the Caprice32 core in RALibretro. It's recommended that you only deal with this system if you understand how the games should be displayed. Be sure to use Nearest Neighbor scaling if you have to resize the screenshots in an image editor.
- PS1 and Saturn games (and possibly other systems like Dreamcast and Arcade) may also produce screenshots that look too wide in their raw internal resolution. Again, it's recommended that you only submit screenshots for these systems if you understand the game well and what the best resolution may be. Be sure to use Nearest Neighbor scaling if you have to resize the screenshots in an image editor.
- PS2 games should never have widescreen enabled.
- Wii games should always have widescreen enabled (this should already be the default in Dolphin).

## Screenshot Dimensions

- Listed below are the standard image dimensions for each system. Some systems may differ depending on the game.
- A reminder: in general, please do not manually resize or crop your screenshots to match with these dimensions. They should be produced automatically by the emulator with appropriate settings, with rare exceptions that may be explained elsewhere on this page. If you believe an error has been made, please report it in the `#cleanup-requests` forum as explained above.
- This list may not always be up to date with the site's configuration if a change is made there without editing this page yet.
	- 3DO Interactive Multiplayer - 320x240
	- Amstrad CPC - 192x272, 384x272
	- Apple II - 280x192, 560x384
	- Arcade - Game-dependent
	- Arcadia 2001 - 164x269 (Taken in narrow)
	- Arduboy - 128x64
	- Atari 2600 - 160x228 (NTSC), 160x274 (PAL)
	- Atari 5200 - 320x228, 336x240
	- Atari 7800 - 320x223, 320x272, 320x240, 160x240
	- Atari Jaguar - Game-dependent
	- Atari Jaguar CD - Game-dependent
	- Atari Lynx - 160x102
	- Atari ST - 320x200
	- Bandai WonderSwan - 224x144, 144x224
	- ColecoVision - 256x192
	- Commodore 64 - Game-dependent
	- Commodore Amiga - Game-dependent
	- Commodore VIC-20 - 200x234
	- DOS - Game-dependent
	- Elektor TV Games Computer - 164x269 (Taken in narrow)
	- Epoch Co. Cassette Vision - 128x192
	- Epoch Co. Super Cassette Vision - 198x225
	- Fairchild Channel F - 306x192
	- Famicom Disk System - 256x224, 256x240
	- Fujitsu FM Towns - Game-dependent
	- GCE Vectrex - 193x240, 360x480
	- Interton VC 4000 - 164x269 (Taken in narrow)
	- Magnavox Odyssey 2 - 320x235
	- Mattel Intellivision - 320x200
	- Mega Duck - 160x144
	- Microsoft MSX - 272x240
	- Microsoft Xbox - 640x480
	- NEC PC Engine CD/TurboGrafx-CD - 256x232, 256x239, 336x239, 512x243
	- NEC PC Engine/TurboGrafx-16 - 256x232, 256x239, 336x239, 512x243
	- NEC PC-6000 - Game-dependent
	- NEC PC-8000/8800 - 320x200
	- NEC PC-9800 - 640x400
	- NEC PC-FX - 256x232, 256x240, 341x240
	- Nintendo 3DS - 400x240, 320x240, 720x480
	- Nintendo 64 - 320x240
	- Nintendo DS - 256x384, 256x192
	- Nintendo DSi - 256x384, 256x192
	- Nintendo Entertainment System/Famicom - 256x224, 256x240
	- Nintendo Game & Watch - Game-dependent
	- Nintendo Game Boy - 160x144
	- Nintendo Game Boy Advance - 240x160
	- Nintendo Game Boy Color - 160x144
	- Nintendo GameCube - 640x480, 640x448
	- Nintendo Pokemon Mini - 96x64
	- Nintendo Virtual Boy - 320x186, 384x224
	- Nintendo Wii - Game-dependent
	- Nintendo Wii U - 1280x720
	- Nokia N-Gage - Game-dependent
	- Philips CD-i - 384x240, 384x280
	- Sega 32X - 320x224, 256x224, 320x240
	- Sega CD - 320x224, 256x224, 320x240
	- Sega Dreamcast - 640x480, 1280x480
	- Sega Game Gear - 160x144
	- Sega Genesis/Mega Drive - 320x224, 256x224, 320x240
	- Sega Master System - 256x192, 256x224, 256x240
	- Sega Pico - 320x224, 256x224, 320x240
	- Sega Saturn - 320x224, 352x224, 320x240, 352x240, 320x256, 352x256, 640x224, 704x224, 640x240, 704x240, 640x448, 704x448, 640x480, 704x480, 330x224, 660x224
	- Sega SG-1000 - 256x192
	- Sharp X1 - 320x200
	- Sharp X68000 - Game-dependent
	- Sinclair ZX Spectrum - 320x240
	- Sinclair ZX81 - 256x192
	- SNK Neo Geo CD - 320x224
	- SNK Neo Geo Pocket - 160x152
	- Sony PlayStation - 320x240, 256x240, 368x240, 512x240, 640x240, 320x480, 256x480, 368x480, 512x480, 640x480, 320x224, 512x268, 320x268, 640x224, 512x384, 512x224
	- Sony PlayStation 2 - 640x480, 640x448, 640x512, 596x447, 682x512
	- Sony PlayStation Portable - 480x272
	- Super Nintendo Entertainment System/Famicom - 256x224, 256x240, 512x224
	- TCS Oric - 240x224
	- Texas Instruments TI-83 - 96x64
	- Thomson TO8 - 672x432
	- TIC-80 - 240x136
	- Uzebox - Game-dependent
	- WASM-4 - 160x160
	- Watara Supervision - 160x160
	- Zeebo - 800x480

## Emulator Setup

### DuckStation

- Go to Settings -> Capture and under Screenshots, set Screenshot Size to Internal Resolution (Aspect Uncorrected).

![DuckStation Screenshot Size setting](/duckstation-screenshot-size.png)

- To increase the internal resolution by 2x or 3x, go to Settings -> Graphics -> Rendering tab -> Internal Resolution. If you choose to do this, 3x Native is preferred for screenshots.

![DuckStation Internal Resolution setting](/duckstation-internal-resolution.png)

- All other settings can be default.

### PCSX2

- Go to Settings -> Graphics -> Media Capture tab and under Screenshot Capture Setup, set Resolution to Internal Resolution (No Aspect Correction).

![PCSX2 Screenshot Resolution setting](/pcsx2-screenshot-resolution.png)

- To increase the internal resolution by 2x or 3x, go to Settings -> Graphics -> Rendering tab -> Internal Resolution. If you choose to do this, 3x Native is preferred for screenshots.

![PCSX2 Internal Resolution setting](/pcsx2-internal-resolution.png)

- All other settings can be default, especially Aspect Ratio under the Display tab. Widescreen should not be used for PS2 screenshots (just to keep things simple and standard for the system).

### Dolphin

- Go to Settings -> Graphics -> Advanced tab and under Frame Dumping, set Resolution Type to Raw Internal Resolution.

![Dolphin Screenshot Resolution Type setting](/dolphin-screenshot-resolution-type.png)

- Widescreen is preferred for Wii screenshots, so go to Settings -> Wii and under Misc Settings, make sure Aspect Ratio is set to 16:9 (this should be the default).

![Dolphin Wii Aspect Ratio setting](/dolphin-wii-aspect-ratio.png)

- To increase the internal resolution by 2x or 3x, go to Settings -> Graphics -> Enhancements tab -> Internal Resolution. If you choose to do this, 3x Native is preferred for screenshots.

![Dolphin Internal Resolution setting](/dolphin-internal-resolution.png)

- All other settings can be default. Do not use widescreen for GameCube games.

### PPSSPP

- Go to Settings -> System -> General and set Screenshot Mode to Raw Game Image. Enabling "Save screenshots in PNG format" is also recommended.

![PPSSPP Screenshot Mode setting](/ppsspp-screenshot-mode.png)

- To increase the internal resolution by 2x or 3x, go to Settings -> Graphics -> Rendering Mode -> Rendering Resolution. If you choose to do this, 3x PSP is preferred for screenshots. Please note if this setting is set to Auto, the internal resolution will correspond with your Window Size setting.

![PPSSPP Rendering Resolution setting](/ppsspp-rendering-resolution.png)

- All other settings can be default.

### RALibretro

#### SwanStation

- If you wish to increase the internal resolution to 3x here, go to Core Settings -> Enhancement Settings and set Internal Resolution Scale to 3. Leave everything else default.

![RALibretro - SwanStation Internal Resolution Scale setting](/ralibretro-swanstation-internal-resolution-scale.png)

#### Mupen64Plus-Next

- To increase the internal resolution with this core, using the default GLideN64 plugin, go to Core Settings -> GLideN64 and set 4:3 Resolution to 960x720 (x3). Leave everything else default.

![RALibretro - Mupen64Plus-Next Resolution setting](/ralibretro-mupen64plus-next-resolution.png)

#### ParaLLEl N64

- To increase the internal resolution here, go to Core Settings -> General and set Resolution to 960x720 (x3). Leave everything else default.

![RALibretro - ParaLLEl N64 Resolution setting](/ralibretro-parallel-n64-resolution.png)

#### Flycast

- To increase the internal resolution with this core, go to Core Settings -> Video and set Internal Resolution to 1920x1440 (x3). Leave everything else default.

![RALibretro - Flycast Internal Resolution setting](/ralibretro-flycast-internal-resolution.png)

#### DeSmuME

- To increase the internal resolution here, go to Core Settings -> Graphics and set Internal Resolution to 768x576 (x3). Leave everything else default.

![RALibretro - DeSmuME Internal Resolution setting](/ralibretro-desmume-internal-resolution.png)

#### PPSSPP

- To increase the internal resolution here, go to Core Settings -> Video and set Rendering Resolution to 1440x816 (x3). Leave everything else default.

![RALibretro - PPSSPP Rendering Resolution setting](/ralibretro-ppsspp-rendering-resolution.png)