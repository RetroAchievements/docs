---
title: Emulator Setup for Developers
description: Learn how to set up emulators for achievement development with RetroAchievements.
---

# Emulator Setup for Developers

Achievement development requires a Windows-only DLL file called [RAIntegration](https://github.com/RetroAchievements/RAIntegration). In most cases, this file will be bundled with or automatically downloaded upon starting a [supported emulator](https://retroachievements.org/download.php), including the following:

- RALibRetro
- RAMeka
- RANes
- RAP64
- RAppleWin
- RAQUASI88
- RASnes9x
- RAVBA
- WinArcadia

![RAIntegration download prompt in RALibRetro](/public/ralibretro-raintegration-download.png)

In other cases, manual setup may be required. The latest version of RAIntegration can be downloaded from here:

- **https://retroachievements.org/bin/RA_Integration-x64.dll**

Instructions for different emulators will follow.

## BizHawk

For BizHawk, ensure the file is named `RA_Integration-x64.dll` and place it in the `BizHawk/dll` folder.

![RAIntegration in BizHawk folder](/public/bizhawk-raintegration-folder.png)

After you've done so, start `EmuHawk.exe`, then go to Tools -> RetroAchievements -> Start RetroAchievements. You will be notified about BizHawk sending information to RetroAchievements; if you accept, you will be asked to log in to your account. You can then find the developer tools under Tools -> RetroAchievements, as well as an option to Autostart RetroAchievements whenever you open BizHawk.

![RAIntegration menu in BizHawk](/public/bizhawk-raintegration-menu.png)

## DuckStation

With DuckStation, the file may be named either `RA_Integration-x64.dll` or `RA_Integration.dll`. Place it in DuckStation's main folder.

![RAIntegration in DuckStation folder](/public/duckstation-raintegration-folder.png)

When you run the emulator for the first time, a setup wizard will guide you through various options, including enabling and logging into RetroAchievements. Otherwise, you can find these options under Tools -> Achievements.

![Achievement settings in DuckStation](/public/duckstation-achievement-settings.png)

After enabling RetroAchievements and logging in, check "Enable RAIntegration (Development Only)". A menu with RAIntegration tools will then appear.

![RAIntegration menu in DuckStation](/public/duckstation-raintegration-menu.png)

Note: If you have issues logging in (e.g. DuckStation freezes), try it with RAIntegration disabled. Wait until after logging in to enable it.

## PCSX2

PCSX2 supports RetroAchievements in its stable builds as of v2.0.0.

Ensure the file is named `RA_Integration.dll` (without the `-x64` part) and place it in the main folder of PCSX2.

![RAIntegration in PCSX2 folder](/public/pcsx2-raintegration-folder.png)

There are two ways to launch PCSX2 with RAIntegration enabled.

### Add a parameter

The first way is to launch `pcsx2-qt.exe` with the parameter `-raintegration`. A convenient way to do this in Windows is to right click the .exe and create a shortcut. Then right click the shortcut and go to Properties. In the Target field under the Shortcut tab, enter `-raintegration` after the filename, and click OK.

![RAIntegration parameter in PCSX2 shortcut](/public/pcsx2-raintegration-shortcut.png)

You can then use this shortcut to launch the emulator with RAIntegration enabled.

### Edit a config file

This method involves editing the file `PCSX2.ini` in `C:\Users\YourUsername\Documents\PCSX2\inis`. If you don't see these directories, you may need to launch the emulator first to generate them. If you wish to keep these directories in PCSX2's main folder instead of your Documents folder, you can create an empty file called `portable.txt` in PCSX2's main folder.

Open `PCSX2.ini` in a text editor such as Notepad. Scroll down to the `[Achievements]` section and add the line `UseRAIntegration = true`. Save the file.

![RAIntegration in PCSX2 config file](/public/pcsx2-raintegration-config.png)

RAIntegration will then be enabled when launching `pcsx2-qt.exe`.

### Developer tools

After launching the emulator with RAIntegration enabled and logging in to your account, the developer tools can be found under Tools -> RAIntegration.

![RAIntegration menu in PCSX2](/public/pcsx2-raintegration-menu.png)

When an update for RAIntegration is available, it will ask you if you want to upgrade when you open the emulator. However, note that this automatic upgrade is not supported by PCSX2 - clicking Yes will present an error. You must manually replace `RAIntegration.dll` whenever it's updated.

## PPSSPP

PPSSPP supports RAIntegration in its main builds as of version 1.18. You can grab the latest version here:

- **https://www.ppsspp.org/download/**

If you want to download PPSSPP as a portable application, bypassing the need for installation, you can grab one of the development builds from here:

- **https://www.ppsspp.org/devbuilds/**

After running the installer or extracting to a location of your choice, launch PPSSPPP and go to Settings -> Tools -> RetroAchievements. Here you can log in under the Account tab. Under the Developer Tools tab, you can enable RAIntegration. Enabling unofficial achievements may also be necessary in order to view them with the developer tools.

![RAIntegration setting in PPSSPP](/public/ppsspp-raintegration-setting.png)

Afterwards, exit PPSSPP and reopen it to load RAIntegration. RetroAchievements will have its own menu with the developer tools.

![RAIntegration menu in PPSSPP](/public/ppsspp-raintegration-menu.png)

If you grabbed a development build, you may need to manually place a copy of RA_Integration.dll into the folder. Ensure it is named `RA_Integration.dll` and place it in PPSSPP's main folder.

![RAIntegration in PPSSPP folder](/public/ppsspp-raintegration-folder.png)

Once you've done that, restart PPSSPP and it should recognize RAIntegration successfully.

## Dolphin

Dolphin supports RAIntegration in its development releases as of version 2503-251.

The file may be named either `RA_Integration-x64.dll` or `RA_Integration.dll`. Place it in Dolphin's main folder.

![RAIntegration in Dolphin folder](/public/dolphin-raintegration-folder.png)

Options can be found under Tools -> Achievements. Here you can enable RetroAchievements and log in.

![Achievement settings in Dolphin](/public/dolphin-achievement-settings.png)

When the RAIntegration file exists in Dolphin's main folder, a menu with the development tools will then automatically appear under Tools -> RetroAchievements Development.

![RAIntegration menu in Dolphin](/public/dolphin-raintegration-menu.png)

## Other resources

To familiarize yourself with the hotkeys in each emulator, refer to this page:

- [Emulator Hotkeys for Developers](/developer-docs/emulator-hotkeys-for-developers)
