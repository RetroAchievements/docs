---
title: Leaderboards
description: Learn how to create and manage leaderboards for RetroAchievements, including start, cancel, and submit conditions.
---

# Leaderboards

[[toc]]

## Overview

This is how a game's Leaderboard List looks like on the website:

![leaderboard_list](/public/leaderboard-list.png)

In the center you can see every already made Leaderboard, and in the right column you can see the **Code Notes** for the game. The Code Notes are here to help with some conditions we'll see below.

And now you can also create and edit Leaderboards through the GUI just like achievements by selecting Leaderboards from the Assets List:

![Leaderboards GUI](/public/leaderboards-gui.png)

Here's a brief explanation of each field of a single Leaderboard:

- **Title**: the leaderboard's title.
- **Description**: the leaderboard's description.
- **Format**: specifies how the value should be displayed.
- **"LowerIsBetter" checkbox**: determines how the list should be sorted. When checked, lower value appear as higher ranks in the leaderboard. Time-based leaderboards usually honor faster times (lower), whereas score-based leaderboards favor higher values.
- **Start**: start conditions, aka **STA**.
- **Cancel**: cancel conditions, aka **CAN**.
- **Submit**: submit conditions, aka **SUB**.
- **Value**: a value interpreter, aka **VAL**.
- **Display Order**: The order leaderboards appear and also used for hiding them from view if set to -1. This can only be edited from the site editor.

**Note**: A valid leaderboard MUST have all four of these conditions, even if they're set to always be true (`1=1`) or always be false (`0=1`).

Those last 4 fields are really important and _LOTS_ of care must be taken over the entry of any characters into these strings. That's why they deserve a further explanation:

The **Start** (**STA**) condition is a series of values, like an achievement, that must be true in order to start looking for a leaderboard submission.

If a **Cancel** (**CAN**) condition is true, then it will cancel the leaderboard and no score will be submitted. NOTE: Cancel is given priority over Start. If both become true in the same frame, the leaderboard will not start.

If the **Submit** (**SUB**) condition is true, then the leaderboard score will be submitted. NOTE: Cancel is given priority over Submit. If both become true in the same frame, the score will not be submitted.

Finally, the **Value** (**VAL**) is a special case, and will be taken from memory using the formula stated in the memory box. This is the score that gets displayed while the leaderboard is active, and the value that's submitted if **SUB** is true.

Memory addresses for STA/CAN/SUB/VAL have the format defined [here](/developer-docs/condition-syntax).

NOTE: Once an active leaderboard is cancelled or submitted, it cannot be reactivated until the **Start** condition becomes false, then true again. This prevents the leaderboard from immediately reactivating after submission/cancel.

## Example

The best place to start is to look at existing leaderboards and break it down to see how it works. We're going to use the [Green Hill Act 1 (Sonic the Hedgehog) Leaderboard](https://retroachievements.org/leaderboardinfo.php?i=2) for this purpose. Then let's see how it looks:

![new_leaderboard2](/public/new-leaderboard2.png)

The **Title/Description** fields are quite obvious.

The **Type** is "Time (Frames)". The value we're tracking updates once a frame, and the Genesis runs at 60 frames per second (see note below on [Value Format](/developer-docs/leaderboards#value-format) for systems that run at other speeds).

The **Lower Is Better** flag is checked, then the one who makes the shortest time will be the #1.

Now we're going to break down the most important parts.

### Start Conditions

**STA**: `0xfe10=h0000_0xhf601=h0c_d0xhf601!=h0c_0xfff0=0`

![Start conditions](/public/start-conditions.png)

- `0xfe10=h0000`: If 16-bit RAM address 0xfe10 is equivalent to hex 0000,
- `_`: AND,
- `0xhf601=h0c`: If 8-bit RAM address 0xf601 is equivalent to hex 0c,
- `_`: AND,
- `d0xhf601!=h0c`: If the previous 8-bit RAM address 0xf601 is NOT equivalent to hex 0c,
- `_`: AND,
- `0xfff0=0` If 16-bit RAM address 0xfff0 is equivalent to 0.

This might seem daunting, because we don't know what these addresses mean. That's why the **Code Notes** in the right column are pretty handy! You can see how these addresses are labeled in memory. In our example we have:

- `0xfe10` is the level, and is expected to be `0` (the first level).
- `0xf601` is an 8-bit memory address, and we use the prefix `0xh` instead of `0x` to signify this. The `0xf601` is the screen mode. The second and third parts of the start statement are saying "the current mode should be _ingame_ (`0c`), and the mode on the previous frame should NOT be _ingame_". **Note**: that `d` prefix on the address represents delta, or "the previous frame's value". **Summing up:** trigger this if we've JUST arrived in a level (the start of the level, when we want to start testing their time).
- Finally we also expect `0xfff0` to be equivalent to `0`, because this address is used for demo mode, and we don't want to award a leaderboard entry when the demo is active!

**Tip**: the most common mistake when creating leaderboards through the site editor is forgetting the `h` when trying to reference an 8-bit memory address.

**Note**: You can use `HitCount`s in the Start/Submit/Cancel triggers, but you are responsible for resetting them. These triggers are evaluated every frame, and the state of the leaderboard is dependent on which ones are true. As such, the `HitCount` will increment even when the leaderboard is not active unless you have an explicit ResetIf condition.

### Cancel Conditions

**CAN**: `0xhfe13<d0xhfe13`

![Cancel conditions](/public/cancel-conditions.png)

- 0xfe13 is the number of lives.

The cancel section checks if the player's LIVES counter ever becomes lower. Literally, it says "Cancel if the CURRENT value at 0xfe13 is less than the PREVIOUS value at 0xfe13". We want to do this because you could reach the final checkpoint and run out of time, resetting your timer to 0:00. We don't want to allow this, because it's not the correct way of completing the level. So if the player dies, we reset their leaderboard progress. Finally, if you connect two cancel conditions with `s`, the leaderboard will cancel when either one of them are true.

### Submit Conditions

**SUB**: `0xf7cc!=0_d0xf7cc=0`

![Submit conditions](/public/submit-conditions.png)

- 0xf7cc is the endlevel flag, non-interactive.

The submit section checks if the current frame has the 'endlevel' flag set to true (or `!=0`, 'nonzero'), and the previous frame (delta) has it set to false (or `=0`, 'zero'). This suggests that the player has reached the end of the level, and has proven to be a fairly sturdy benchmark.

**Tip**: it can be useful to watch these values in memory to see how they perform, and what sort of values they end up at in different circumstances.

### Value

Finally, value. Once the player has reached the start condition, they will be shown a popup which remains on-screen, showing their progress so far. If it's a time leaderboard, it will be a clock, and if it's a score, it will just be the value. If they fulfill the cancel condition, they will be told that they have failed, and the popup will be removed. If they successfully reach the submit condition, the current value will be taken and submitted as their score, and on successful submission, an in game popup will inform the player of the leaderboard so far, and their position in the leaderboard.

For more information on the value format, see [Value Definition](/developer-docs/value-definition).

**NOTE**: The value calculation is performed using 32-bit signed integers. As such, the maximum value is 2147483647 and the minimum value is -2147483648. Values above the maximum will wrap around and register as very negative numbers.

### Value Format

'Format' can be any of the available [formats](/developer-docs/rich-presence#format). **Time (Frames)** is the most common one, and represents a time derived from a value that increments every frame. It does this by multiplying by 100 (to convert to hundredths of a second) and dividing by 60 (the number of frames per second).

**NOTE**: If you're using a system that doesn't run at 60Hz, you have to use "Time (Centiseconds)" and multiply by some value to do the conversion yourself (50Hz = `*2` [100/50], 60Hz = `*1.666666` [100/60], 75Hz =`*1.333333` [100/75]).

## Design Tips

Leaderboards can sometimes get pretty spammy and take up a lot of screen space when starting or depending on how many are active at once. It is generally good practice to try and eliminate this as much as possible when you can. You can do this by taking advantage of the fact that you can start and submit a leaderboard on the same frame by setting the start condition to what you would normally use as the submit and then setting the submit condition so something that is always true like 1=1.

If a game tracks a score or time that you are using to directly call for your value then consider starting and submitting the leaderboard on the same frame so that only one popup is called (for the submission) and the screen won't have extra clutter. There are still cases where it can be useful for players to have the values up on display if they are hidden in menus so use your best judgement.

In games where levels are short and retries are quick you really don't want to have it start/cancel/submit repeatedly after each start/retry when you can help it as the popups can start stacking together and clutter the screen well past the actual attempts are over. These are a prime candidate for starting and submitting on the same frame when possible.

## Score Wrapping

In games where the high score wraps around back to 0 it is actually possible to account for this and keep your leaderboard tracking the score! You can do this by using Alt Groups combined with `MeasuredIf` to track which loop you are on and will use one Alt per loop.

As an example lets take a look at Balloon Fight on NES where the score wraps around after 999,990. Here is the original leaderboard:

![Original leaderboard](/public/leaderboard-original.png)

And an updated version which will continue tracking after each loop:
Core needs to have a `Measured` statement in it so just put something that is never true and also a ResetIf for resetting the `MeasuredIf` statements in the Alt Groups when needed (in this case on the title screen)

![Leaderboard core updated](/public/leaderboard-core-updated.png)

The first Alt will contain the normal logic for high score

![Leaderboard alt1](/public/leaderboard-alt1.png)

The next Alt will contain a `MeasuredIf` that is true after the first loop which will allow this value to be used. You will also add an extra condition to AddSource in the total score from the first loop which will be 1,000,000 in this case. This value will now be used since `MeasuredIf` is true and the value is the highest of the Alt Groups

![Leaderboard alt2](/public/leaderboard-alt2.png)

For the next Alt we increment the number of hits used in the loop detection as well as the value we multiply the total score added by for each loop

![Leaderboard alt3](/public/leaderboard-alt3.png)

## Further Help

There are unfortunately _MANY_ ways to get this process wrong, so if you are having any trouble feel free to ask for help in our [Discord server](https://discord.gg/dq2E4hE).

If you want to practice, it's highly recommended to create your own leaderboard and attempting something on a new game, rather than using an existing leaderboard. Just remember to clean up any test leaderboards that you push to the site afterwards.

Please remember that these files are pulled directly into someone's game if they decide to play it, and a badly formed memory address or string could cause their emulator to crash, so please test your leaderboard code!
