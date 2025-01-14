---
title: Hash Labels
description: This guide covers labeling ROMs linked to achievement sets, including label types, image labels, and examples.
---

# Hash Labels

Every ROM that is linked to an achievement set must be clearly identified and labeled. These labels help players know which versions of a game are compatible as well as if there are any translation patches, bug fixes, cosmetic hacks, quality of life hacks, etc. that they can use.

[[toc]]

## Info for Supported Game Files

- RA Hash: Check [Game Identification](/developer-docs/game-identification) to learn more about these. These appear in `Manage Hashes` automatically.
- File Name - File name should be entered as the description. These are typically automatic, but may need some adjustments.
- Labels - You can use the labels listed below by using the filename of the image (no extension).
- Patch URL - Link to an either .zip or .7z file in the [RAPatches](https://github.com/RetroAchievements/RAPatches) GitHub repository. 
- Resource Page URL - Link to a specific No Intro, Redump, RHDN, SMWCentral, itch.io, etc. page.

## Images

The following are used for preservation groups or collections:

| Image                                                                                | Label to Use  | Note                                                                   |
| ------------------------------------------------------------------------------------ | ------------- | ---------------------------------------------------------------------- |
| ![no-intro-label](https://retroachievements.org/Images/labels/nointro.png)           | `nointro`     | The standard for cartridge-based games                                 |
| ![redump-label](https://retroachievements.org/Images/labels/redump.png)              | `redump`      | The standard for disc-based games                                      |
| ![fb-neo-label](https://retroachievements.org/Images/labels/fbneo.png)               | `fbneo`       | Mostly used for Arcade                                                 |
| ![wozaday-label](https://retroachievements.org/assets/images/labels/wozaday.png)     | `wozaday`     | Clean Apple II dumps                                                   |
| ![4am-crack-label](https://retroachievements.org/Images/labels/4amcrack.png)         | `4amcrack`    | Used for Apple II.                                                     |
| ![clean-cpc-label](https://retroachievements.org/Images/labels/cleancpc.png)         | `cleancpc`    | Amstrad preservation project                                           |
| ![neo-kobe-label](https://retroachievements.org/Images/labels/neokobe.png)           | `neokobe`     | Used for PC-8001 and PC-8801                                           |
| ![lostlevel-label](https://retroachievements.org/assets/images/labels/lostlevel.png) | `lostlevel`   | DAT project made specifically for RetroAchievements hash verifications |
| ![rapatches-label](https://retroachievements.org/Images/labels/rapatches.png)        | `rapatches`   | Used when the hash requires a patch hosted on RAPatches                |
| ![mamesl-label](https://retroachievements.org/Images/labels/mamesl.png)              | `mamesl`      | MAME Software List.                                                    |
| ![tosec-label](https://retroachievements.org/Images/labels/tosec.png)                | `tosec`       | Used for various platforms                                             |
| ![goodtools-label](https://retroachievements.org/Images/labels/goodtools.png)        | `goodtools`   | Defunct collection that also includes bad dumps. Avoid if possible     |
| ![nongood-label](https://retroachievements.org/Images/labels/nongood.png)            | `nongood`     | Picked up where GoodTools left off. Should also avoid if possible      |

The following are used for specific websites:

| Image                                                                                | Label to Use  | Note                                                                   |
| ------------------------------------------------------------------------------------ | ------------- | ---------------------------------------------------------------------- |
| ![atari-age-label](https://retroachievements.org/Images/labels/atariage.png)         | `atariage`    | Popular site for Homebrews                                             |
| ![itch-io-label](https://retroachievements.org/Images/labels/itchio.png)             | `itchio`      | Popular site for Homebrews                                             |
| ![project-egg-label](https://retroachievements.org/Images/labels/egg.png)            | `egg`         | ROMs purchased from Project Egg, typically Japanese PC games.          |
| ![steam-label](https://retroachievements.org/Images/labels/steam.png)                | `steam`       | ROMs purchased from Steam.                                             |
| ![smwcentral-label](https://retroachievements.org/Images/labels/smwcentral.png)      | `smwcentral`  | Popular repository for Super Mario World hacks.                        |
| ![rhdn-label](https://retroachievements.org/Images/labels/rhdn.png)                  | `rhdn`        | Popular repository for ROM hacks                                       |

The following are generic labels:

| Image                                                                                | Label to Use  | Note                                                                   |
| ------------------------------------------------------------------------------------ | ------------- | ---------------------------------------------------------------------- |
| ![main-label](https://retroachievements.org/Images/labels/main.png)                  | `main`        | Sometimes used to show the primary ROM used by the set developer(s)    |
| ![homebrew-label](https://retroachievements.org/Images/labels/homebrew.png)          | `homebrew`    | Generic label for Homebrews                                            |
| ![msu-1-label](https://retroachievements.org/Images/labels/msu1.png)                 | `msu1`        | Generic label for ROMs using MSU-1 patches                             |
| ![snes-mini-label](https://retroachievements.org/Images/labels/snesmini.png)         | `snesmini`    |                                                                        |
| ![offline-list-label](https://retroachievements.org/Images/labels/offlinelist.png)   | `offlinelist` |                                                                        |

## Examples

### Deja Vu: A Nightmare Comes True (NES/Famicom)

#### Manage Hashes

![managehashes-dejavu](/public/manage-hashes-dejavu.png)

- The first hash is the No Intro-verified Swedish version of the game.
- The second hash is the USA version of the game with an Uncensored patch applied to it. The full text of the description is `Deja Vu (USA) (Uncensored) (v1.0) (usertheloset).nes`, which follows the [RAPatches naming convention](https://github.com/RetroAchievements/RAPatches#naming-convention). The labels used are `nointro` and `rapatches`.
- The third hash is the No Intro-verified Japanese version of the game.
- The fourth hash is the No Intro-verified USA version of the game.

On this page, supported game files are ordered lexicographically by their MD5 hashes.

Each supported file can be edited individually by clicking on "Edit" on the same line:
![edit-game-hash](/public/edit-game-hash.png)

To see how this will look for the majority of users, go to the game entry page and click on "Supported Game Files."

#### Supported Game Files
![links-dejavu](/public/links-dejavu.png)

As you can see below, `nointro` and `rapatches` were replaced with corresponding images, and the file link from the "Patch URL" string is conveniently added right below the corresponding hash. On this page, supported game files are ordered lexicographically by their filenames.

![linkedhashes-dejavu](/public/supported-game-files-dejavu.png)

### Suikoden (PlayStation)

We'll skip the manage hashes example for this one. Let's go straight to "Supported Game Files" on the game entry page:

![links-suikoden](/public/links-suikoden.png)

The hashes labeled with `redump`, `rhdn`, and `rapatches` require patches that are available on both romhacking.net and in the RAPatches repository.

![linkedhashes-suikoden](/public/supported-game-files-suikoden.png)
