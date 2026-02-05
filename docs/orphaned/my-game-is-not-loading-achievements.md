---
title: Troubleshooting Achievement Loading Issues
description: Learn how to resolve issues with achievements not loading for RetroAchievements, including checking ROM compatibility and finding ROM hashes.
---

# My game is not loading achievements

Maybe you loaded up your game but you see a popup:  
![no achievements 1](/docs-not-loading1.jpg)  
Then you check the overlay (typically ESC) and see:  
![no achievements 2](/docs-not-loading2.png)

Or maybe you got these messages:

![nocheevos](/docs-not-loading3.png)

and

![nocheevos2](/docs-not-loading4.png)

When any of these situations happens, either your game doesn't have achievements yet or more likely you have the incorrect ROM.

Just to be sure, search for the game name and check matching results.  
![search](/search-the-site.png)

If your game has achievements but your ROM isn't in our system either you'll need to find the correct ROM or get support for your ROM.

## How do I know if my ROM is compatible?

If your ROM has the same checksum/hash as those linked to the website, then it is compatible.

**Note**: a "checksum" or "hash" is a number used to confirm if two copies of a file are identical. On RA we use it to assure the player is using the same ROM as the achievement developer.

There are _two_ ways of checking what checksums/hashes are linked to a game:

### Check the Linked Hashes page associated with the game

Example for [Super Mario Bros.](https://retroachievements.org/linkedhashes.php?g=1446)

You can access this page by clicking the "Hashes linked to this game" button in the "More Info" section on the game page.

![link to linked hashes page](/hashes-linked-to-game.png)

It takes you to a page like this:

![list of linked hashes](/list-of-linked-hashes.png)

### Check the top post of the official game's forum thread

The link for it can be found at the bottom of the achievement list on game pages OR in the More Info section. Example for [Super Mario Bros.](https://retroachievements.org/viewtopic.php?t=282&c=2233):

![forum](/forum.png)

![forum 2](/official-forum-topic.png)

The first post of the official game's forum thread usually has a list of valid ROMs for the respective game and also the checksum of the ROMs.

If your ROMs name and checksum aren't listed yet, then you'll need to ask for it (**please, do NOT ask for links to download the ROM**, only the filename and the checksum). You can request it in the game's forum page or ask for help in [Discord](https://discord.gg/dq2E4hE) or on the site chat on the front page.

Once you make a request, a developer will review it and make sure it works. Then they will add the hash to the 'compatible hashes page.'

## How to find the checksum of your ROM:

In the menu bar `RetroAchievements` > `Get ROM Checksum`

![checksum](/rom-checksum.png)

For more details about checksum and hashes, read here: https://datacrystal.romhacking.net/wiki/Hashes
