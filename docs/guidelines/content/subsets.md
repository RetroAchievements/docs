---
title: Multiset and Subset Types
description: Learn about subset types, multiset functionality and minimum requirements
---

When browsing the [list of games](https://retroachievements.org/games), you will see that some games have a `[Subset]` tag in the title. Each of these contain achievements that for some reason or another, are not available in a game's base set. To learn more about the kind of challenges that are included in subsets, refer to the [Subset Design](./subset_design) docs.
## Set Types

Subsets are now fully integrated into RetroAchievements through the multiset system. When you load a game, the server will automatically resolve which achievement sets to include based on the game hash you're using and your personal preferences. Developers link sets together, allowing you to play multiple sets (such as a base set and its bonus content) simultaneously without needing separate patches or playthroughs. 

There are four technical set types that determine how sets relate to each other:

- **Base**: The primary achievement set for a game. This is loaded by default and represents the main content.
- **Bonus**: Additional achievements linked to a base set. When you load a base set, any associated bonus sets are also available based on your preferences.
- **Challenge**: Like bonus, does not require a patched ROM but is opt-out by default, requiring you to opt-in to play. These are typically used when you play the game in a specific way, like low-level/single-member party runs in RPGs, beating a game without weapons, or doing as much as you can before a certain story event.
- **Specialty**: These sets still require their own patched ROM, but also load the base set and any bonus sets automatically. These are typically used for alternate game modes or challenges that modify the game itself.
- **Exclusive**: These sets load in isolation and are not compatible with any of the other game's sets.

Multiset requires the latest version of your emulator:
* RetroArch 1.22.1+
* PCSX2 2.6+
* DuckStation 0.1-10530+
* Dolphin 2512-144+ (development build)
* PPSSPP 1.19.3-1328+ (development build)

### User Preferences

You can control which subsets you want to play:

- **Global Preference**: A site-wide setting to opt out of all subsets is available by default on your [settings page](https://retroachievements.org/settings). Turning off this setting disables multiset.
- **Per-set Preferences**: You can override your global preference for individual achievement sets on a game-by-game basis. If a game has multiset enabled, on the set selection tabs on its game page, you'll find a Subset Configuration button. This lets you opt in or out of subsets for the game.

### Hash Compatibility

Some achievement sets may be incompatible with certain game hashes (ROM versions, patches, etc). The server will automatically exclude incompatible sets from your emulator session. If you're testing hash compatibility, you may have special access to view sets that are normally hidden for incompatible hashes.
