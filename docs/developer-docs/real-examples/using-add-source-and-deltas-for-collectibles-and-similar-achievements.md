---
title: Using AddSource and Deltas for Collectible Achievements
description: Learn how to effectively use the AddSource flag and Deltas to create achievements for collectibles, ensuring accurate tracking and preventing premature triggers in games.
---

# Using `AddSource` and Deltas for Collectibles and Similar Achievements

In this example is a simple way one can utilize the `AddSource` flag in their achievement logic.

We'll look at an achievement from [Suikoden (PlayStation)](https://retroachievements.org/game/11255) entitled [Treasure Hunter - Dragon Knights' Domain](http://retroachievements.org/Achievement/80100):

## Addresses Used

- `0x1b8244`: bit0-bit4 are treasures in Soniere, bit5 is a treasure at the Northern Checkpoint, and bit6-bit7 are treasures at the Dragon Den.
- `0x1b8245`: bit0 is a treasure at the Dragon Den, bit1-bit5 are treasures at Seek Valley, and bit6-7 are treasures in Kalekka.
- `0x1b824b`: bit0-bit1 are treasures at the Village of the Hidden Rune, bit2 is unused, bit3-4 are treasures at the Dragon Knights' Fortress, bit5-6 are treasures in Teien, and bit7 is a treasure at Luiken's House.

![Suikoden achievement editor example](/public/suikoden-achievement-editor-example.png)

This particular achievement only requires treasures from Dragon Knights' Fortress, Dragon Den, and Seek Valley; therefore, we only need bit6-7 from `0x1b8244`, bit0-bit5 from `0x1b8245`, and bit3-bit4 from `0x1b824b`.

## Logic Breakdown

- There are two groups of ten conditions with the main differences being the Delta type and the total. This is to ensure that the player goes from nine of these treasures obtained to having all ten of these treasures obtained. _Note: Remember to use hexadecimal for `AddSource` totals!_
- Since we're using bitflags here, the totals for individual conditions will only ever be 0x00 or 0x01. Obviously, we want them all to be 0x01 for the trigger, but we don't want someone to get the achievement simply by loading a save with all ten treasures already found.
- The trigger is the first frame that the player goes from nine to ten treasures obtained. This is to help prevent the achievement from triggering when it's not supposed to.
- The `Measured` flag is on the last condition so the player can check how far they are from their goal. If they have eight out of ten treasures, the achievement will show that it is 80% complete in the overlay (RAEmus) or achievement menu (RetroArch).

This method is mostly handy for when the totals between the Delta-type and Mem-type only have a difference of 0x01, but it can be used in various types of achievements: collectibles that are only obtainable one-at-a-time, map completion (such as dungeon-crawlers with viewable maps that get revealed as you enter new areas), learnable skills, bestiaries, completing a certain number of side missions, and many others.

If you run into a situation where more than one bitflag in an `AddSource` chain toggles at the same time, you can still utilize this template. However, you'll want to clone the Delta conditions and make it so both totals create a range. Still using the above achievement as an example, the existing total could be changed to `<= 0x09` and the total for the second group could be `>= 0x05`. This would make it so the achievement would trigger if the total goes from 5-9 treasures to 10 treasures.
