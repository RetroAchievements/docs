---
title: How to Play Subsets
description: Brief explanation of subsets with a simple tutorial on how to patch a ROM for a subset.
---

# How to Play Subsets

## What are Subsets?

Subsets are supplemental achievement sets for a game that contain achievements which may not be a good fit into the main (core) set. There are [many types of subsets](/guidelines/content/subsets#types-of-subsets). Subsets typically require an extra patch or sometimes an alternate revision/version of the game.

## Getting Started

When the subset you want to play requires a patch, follow these steps. These steps can be followed for patching a ROM to play a hack.

**Step 1:** Download the patch for the subset of your choice. We'll use [this subset](https://retroachievements.org/game/7596) as an example (in this case, Super Mario Land [Subset - Bonus]). Patches are hosted on [RAPatches](https://github.com/RetroAchievements/RAPatches).

![RetroAchievements hashes](/retroachievements-hashes.png)

**Step 2:** Go to [ROM Patcher JS](https://www.marcrobledo.com/RomPatcher.js/), a free online tool to patch your ROM.

![Rom Patcher JS](/rom-patcher-js.png)

**Step 3:** Choose your ROM in the upper field and your patch file in the lower one. Make sure that you are using the correct ROM for the patch (see the readme file that usually comes included with the patch itself). Checking the CRC32, MD5 and SHA-1 hashes between both fields also helps (in this case, the subset offers patches for both the original, unmodified Super Mario Land and the Super Mario Land DX hack. In this tutorial, we'll use the one for the unmodified game). Rom Patcher JS will also tell you the required CRC32 hash for the patch to work.

![ROM field](/rom-field.png)

![Patch field](/patch-field.png)

**Step 4:** Click/tap on "Apply patch" and download your patched ROM.

![Apply patch](/apply-patch.png)

**Step 5:** Open your emulator of choice, then load your patched ROM, and see if a pop-up appears telling you that you're using "X Game [Subset - X]". If so, congratulations! You have properly patched your ROM! Otherwise, repeat all the previous steps.

![RetroArch Bonus set](/retroarch-bonus-set.png)

For a full list of subsets you can try, check out [this hub](https://retroachievements.org/game/20156).
