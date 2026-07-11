---
title: Leaderboards
description: Learn how to create and manage leaderboards for RetroAchievements, including start, cancel, and submit conditions.
---

# Leaderboards

[[toc]]

## Overview

This is how a game's Leaderboard List looks like on the website:

![leaderboard_list](/new-lb-list.png)

Here you can see the different leaderboards that exist for a game title.  
By selecting any leaderboard you can view its logic in detail.

![leaderboard_edit_web](/new-lb-web-detail.png)

Here you are also able to view specific conditions or review what Code Note an address it related to.

Leaderboards can be created just like an achievement using the Assets List:

![Leaderboards_assets_list](/new-lb-assets-list.png)

![Leaderboards_editor](/new-lb-editor.png)

Here's a brief explanation of each field of a single Leaderboard:

- **Title**: the leaderboard's title.
- **Description**: the leaderboard's description.
- **Format**: specifies how the value should be displayed.
- **"Lower is Better" checkbox**: determines how the list should be sorted. When checked, lower value appear as higher ranks in the leaderboard. Time-based leaderboards usually honor faster times (lower), whereas score-based leaderboards favor higher values.
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

The best place to start is to look at existing leaderboards and break it down to see how it works. We're going to use the [The Wizard](https://retroachievements.org/leaderboardinfo.php?i=22955) leaderboard from Super Mario Bros. 3 for this purpose. Let's take a look:

![new_leaderboard_metadata](/new-mario3-ex1.png)

The **Title / Description** fields are quite obvious.

The **Format** is "Score". For more information on the different options see the documentation on [Value Formats](/developer-docs/leaderboards#value-format).

The **Lower Is Better** flag is unchecked so whoever scores the highest amount of points is in first place.

Now we're going to break down the most important parts.

### Start Conditions

![Start conditions](/new-mario3-ex2.png)

This leaderboard will start once

- The 16-bit RAM address 0x7dfc is equivalent to hex 0x00,
- AND,
- The 8-bit RAM address 0x072b is equivalent to hex 0x00,
- AND
- The fourth bit in the address 0x0017 was set to 0 in the previous frame (Delta),
- AND,
- The fourth bit in the address 0x0017 is set to 0 in the current frame (Mem),
- AND,
- The 8-bit RAM address 0x0209 is equivalent to hex 0xe5

This might seem daunting, because we don't know what these addresses mean. That's why the **Code Notes** are pretty handy! You can see how these addresses are labeled in memory by hovering over an address.

![Hover example](/new-mario3-ex3.png)


In our example we have:

- `0x7dfc` is the current screen the player is on. 0x00 is equivalent to the Title Screen.
- `0x072b` is the amount of players selected. 0x00 is equivalent to Single Player mode.
- `0x0017` tracks the currently pressed buttons. Once the player presses the Start button and starts the game the fourth bit will be set to 1.
- `0x0209` checks if the Player Select screen is visible.

**Note**: You can use `Hit Count`s in the Start/Submit/Cancel triggers, but you are responsible for resetting them. These triggers are evaluated every frame, and the state of the leaderboard is dependent on which ones are true. As such, the `Hit Count` will increment even when the leaderboard is not active unless you have an explicit ResetIf condition.

### Cancel Conditions

![Cancel conditions](/new-mario3-ex4.png)

`0x7dfc`, as previously noted, is the current screen the player is on.

Should the player lose all their lives or end the game early they are sent back to the title screen.
Thus, if the player dies or otherwise gives up the challenge, we reset their leaderboard progress

### Submit Conditions

![Submit conditions](/new-mario3-ex5.png)

The first condition checks if the Value 1 is equivalent to 1. Obviously this is always the case - so after the leaderboard has started for every frame in the game this condition earns a single hit.  
The amount of currently accumulated hits is shown in the bracket on the far right of the editor.  
Once a total of 3600 hits are collected the condition is true and the leaderboard will complete successfully.

The second condition will reset the amount of hits we accumulated in case the player returns to the title screen.

**Tip**: It can be useful to watch these values in memory to see how they perform, and what sort of values they end up at in different circumstances.

### Value

Finally, the value. Once the player has reached the start condition, they will be shown a popup which remains on-screen, showing their progress so far. If it's a time leaderboard, it will be a clock, and if it's a score, it will just be the value. If they fulfill the cancel condition, they will be told that they have failed, and the popup will be removed. If they successfully reach the submit condition, the current value will be taken and submitted as their score, and on successful submission, an in game popup will inform the player of the leaderboard so far, and their position in the leaderboard.  

To choose the condition that will determine what score is submitted, use the `Measured` flag.

![Value conditions](/new-mario3-ex6.png)

For more information on the value format, see [Value Definition](/developer-docs/value-definition).

**NOTE**: The value calculation is performed using 32-bit signed integers. As such, the maximum value is 2147483647 and the minimum value is -2147483648. Values above the maximum will wrap around and register as very negative numbers.

### Value Format

'Format' can be any of the available [formats](/developer-docs/rich-presence#format). **Time (Frames)** is the most common one, and represents a time derived from a value that increments every frame. It does this by multiplying by 100 (to convert to hundredths of a second) and dividing by 60 (the number of frames per second).

**NOTE**: If you're using a system that doesn't run at 60Hz, you have to use "Time (Centiseconds)" and multiply by some value to do the conversion yourself (50Hz = `*2` [100/50], 60Hz = `*1.666666` [100/60], 75Hz =`*1.333333` [100/75]).

## Instant Submission Leaderboards

An active leaderboard will display the current progress in the bottom corner. However, if multiple leaderboards are active at the same time the interface can become quite difficult to read and thus get spammy.  
It is generally good practice to try and eliminate this as much as possible when you can.

Instant Submission Leaderboards are especially useful when some information is already visible on screen.
For example there is no reason to display the current time spent in the bottom corner in a racing game which already displays the time spent.

You can do this by taking advantage of the fact that you can start and submit a leaderboard on the same frame by setting the start condition to what you would normally use as the submit and then setting the submit condition so something that is always true like 1=1.  

For example in this leaderboard for a racing game the `Start` group is true for a single frame once a race has been completed in a specific mode:

### Start
```
  1: AddAddress  Mem   32-bit 0x003d03d8 
  2:             Mem   32-bit 0x00000040 >   Value        0          (0)
  3:             Mem   8-bit  0x0030f016 =   Value        49         (0)
  4:             Mem   32-bit 0x00379f6c =   Value        150        (0)
  5:             Mem   32-bit 0x0037a820 =   Value        0          (0)
  6: AddAddress  Mem   32-bit 0x003d03d8 
  7:             Mem   32-bit 0x00000034 =   Value        1          (0)
  8: AddAddress  Mem   32-bit 0x003d03d8 
  9:             Delta 32-bit 0x00000034 =   Value        0          (0)
```

The `Cancel` group is always false. Since the leaderboard UI never shows up we do not need to cancel it either:

### Cancel
```
  1:             Value 0 =   Value 1 (0)
```

Finally, `Submit` is always true. The moment the `Start` group is true the leaderboard will submit whatever is defined in the `Value` group:

### Submit
```
  1:             Value 1 =   Value 1 (0)
```

If a game tracks a score or time that you are using to directly call for your value then consider starting and submitting the leaderboard on the same frame so that only one popup is called (for the submission) and the screen won't have extra clutter. There are still cases where it can be useful for players to have the values up on display if they are hidden in menus so use your best judgement.  

In games where levels are short and retries are quick you really don't want to have it start/cancel/submit repeatedly after each start/retry when you can help it as the popups can start stacking together and clutter the screen well past the actual attempts are over. These are a prime candidate for starting and submitting on the same frame when possible.

## Score Wrapping

In games where the high score wraps around back to 0 it is actually possible to account for this and keep your leaderboard tracking the score! You can do this by using Alt Groups combined with `MeasuredIf` to track which loop you are on and will use one Alt per loop.

As an example lets take a look at Balloon Fight on NES where the score wraps around after 999,990. Here is the original leaderboard:

![Original leaderboard](/leaderboard-original.png)

And an updated version which will continue tracking after each loop:
Core needs to have a `Measured` statement in it so just put something that is never true and also a ResetIf for resetting the `MeasuredIf` statements in the Alt Groups when needed (in this case on the title screen)

![Leaderboard core updated](/leaderboard-core-updated.png)

The first Alt will contain the normal logic for high score

![Leaderboard alt1](/leaderboard-alt1.png)

The next Alt will contain a `MeasuredIf` that is true after the first loop which will allow this value to be used. You will also add an extra condition to AddSource in the total score from the first loop which will be 1,000,000 in this case. This value will now be used since `MeasuredIf` is true and the value is the highest of the Alt Groups

![Leaderboard alt2](/leaderboard-alt2.png)

For the next Alt we increment the number of hits used in the loop detection as well as the value we multiply the total score added by for each loop

![Leaderboard alt3](/leaderboard-alt3.png)

## Further Help

There are unfortunately _MANY_ ways to get this process wrong, so if you are having any trouble feel free to ask for help in our [Discord server](https://discord.gg/dq2E4hE).

If you want to practice, it's highly recommended to create your own leaderboard and attempting something on a new game, rather than using an existing leaderboard. Just remember to clean up any test leaderboards that you push to the site afterwards.

Please remember that these files are pulled directly into someone's game if they decide to play it, and a badly formed memory address or string could cause their emulator to crash, so please test your leaderboard code!
