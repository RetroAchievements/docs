# Achievement Templates

## **WARNING: EVERY GAME IS DIFFERENT!**

Here you'll see examples of some typical achievements. You can use them as inspiration to create your own achievement. But keep in mind the following:

**EVERY GAME IS DIFFERENT! The memory has a different behavior from game to game.**

So do **NOT** take these templates as a rule. They are here just for educational purposes.

In these examples we use the following convention **0xLEVEL** is the memory address with the level ID; **0xLIFE** is the address used for the character life; **0xTIME** for time, **0xITEM** for getting an item, etc...

- [Collecting an Item N Times](#collecting-an-item-n-times)
- [Finish Level N](#finish-level-n)
- [Finish Level N Before Time Reaches T](#finish-level-n-before-time-reaches-t)
- [Finish Level N In Under Time T When There Is No In-Game Timer](#finish-level-n-in-under-time-t-when-there-is-no-in-game-timer)
- [Finish Level N without Dying (or getting hit, using a weapon, etc.)](#finish-level-n-without-dying)
- [Finish Level N with Item](#finish-level-n-with-item)
- [Collect an Item in a Specific Level](#collect-an-item-in-a-specific-level)
- [Collected 100 Percent of Something](#collected-100-percent-of-something)
- [Circumvent the Problem of a Counter Incrementing Twice in the Same Frame](#circumvent-the-problem-of-a-counter-incrementing-twice-in-the-same-frame)
- [Check for a Specific Value Changing to Another Specific Value Ten Times](#check-for-a-specific-value-changing-to-another-specific-value-ten-times)
- [Conditional Resets](#conditional-resets)

## Collecting an Item N times

There are some situations where you want to award an achievement for collecting an item (like a coin or a ring) N times. You'll need to find in the memory the address responsible to count how much of the item you have. Once you have the address, this logic usually does the job:

| ID  | Flag | Type | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | ---- | ---- | ------- | --- | ----- | ------- | ---- |
| 1   |      | Mem  | 0xCOUNT | >   | Delta | 0xCOUNT | (N)  |

But you most likely will want to be more specific, for example "get item N times without dying". Then you should use another condition with a `ResetIf`, like this:

| ID  | Flag    | Type | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | ------- | ---- | ------- | --- | ----- | ------- | ---- |
| 1   |         | Mem  | 0xCOUNT | >   | Delta | 0xCOUNT | (N)  |
| 2   | ResetIf | Mem  | 0xLIVES | <   | Delta | 0xLIVES |

The `ResetIf` condition could be "while in level X", "without using a bomb", etc.

## Finish Level N

In this example we want to award when the player finish the level `N` and goes to level `N+1`.

| ID  | Flag | Type  | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | ---- | ----- | ------- | --- | ----- | ------- | ---- |
| 1   |      | Delta | 0xLEVEL | =   | Value | N       | (0)  |
| 2   |      | Mem   | 0xLEVEL | =   | Value | N+1     | (0)  |

**Requirements**

- 1: On Level `N` in previous frame.
- 2: Now at level `N+1` on current frame.

This logic is true only on the exact frame the level advances from `N` to `N+1`, which makes it safe from being triggered by a level select cheat or loading a password to Level `N+1`. For robust achievement logic, you'll want other conditions too, such as checking the player is in-game or there is no demo active.

## Finish Level N Before Time Reaches T

In this example we consider a game where the time decreases (e.g.: Super Mario Bros). Adapt it accordingly the time on your game has a different behavior.

We want to award if the player finishes the level `N` while time is greater than `T`.

| ID  | Flag      | Type  | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | --------- | ----- | ------- | --- | ----- | ------- | ---- |
| 1   |           | Delta | 0xLEVEL | =   | Value | N       |
| 2   | `Trigger` | Mem   | 0xLEVEL | =   | Value | N+1     |
| 3   |           | Mem   | 0xTIME  | >   | Value | T       |

**Requirements**

- 1-2: Functionally the same as conditions 1-2 from the [Finish Level N](#finish-level-n) template, but with a `Trigger` on the final line so that the challenge icon shows to the player while the challenge is active.
- 3: Ensure the `TIME` address has a value greater than the failure time. When the time is at or below this value, a non-Trigger-flagged condition is now false and the challenge icon will disappear, indicating a failure to the user.

**Notes**

- Keep in mind that besides knowing how the time behaves in game you also need to research how it behaves in memory.

## Finish Level N In Under Time T When There Is No In-Game Timer

In this example we consider a game where there is no in-game timer to use for a speed run.

We want to award if the player finishes the level `N` before a a time `T` in the level, calculated as number of frames, has passed.

| ID  | Flag      | Type  | Memory  | Cmp | Type  | Mem/Val | Hits           |
| --- | --------- | ----- | ------- | --- | ----- | ------- | -------------- |
| 1   |           | Delta | 0xLEVEL | =   | Value | N       |
| 2   | `Trigger` | Mem   | 0xLEVEL | =   | Value | N+1     |
| 3   | `PauseIf` | Mem   | 0xLEVEL | =   | Value | N       | (T\*FRAMERATE) |

**Requirements**

- 1-2: Functionally the same as conditions 1-2 from the [Finish Level N](#finish-level-n) template, but with a `Trigger` on the final line so that the challenge icon shows to the player while the challenge is active.
- 3: The hit target `T*FRAMERATE` should be set equal to the number of frames that equal the time at which the challenge fails. For a system that runs at 60 frames per second, `T*FRAMERATE = TimeInSeconds x 60`. When the player is in the level for that many frames, the `PauseIf` will become true and locked achievement processing in the core group until a Reset occurs (see Notes, below).

**Notes**

- A player should be able to re-try this challenge. You will need a Reset to clear the pause lock at an appropriate time, such as dying. You can use a `ResetIf` in an alt group (an active `PauseIf` will prevent a reset in the core group from working), or you can attach a `ResetNextIf` right before the `PauseIf`.
- You may want some other conditions on the `PauseIf`. You can link more using `AndNext` flag. If a game has a flag that indicates the player has control of the character, this may be a good choice. Experiment!

## Finish Level N without Dying

(or getting hit, using a weapon, etc.)

| ID  | Flag      | Type  | Memory      | Cmp | Type  | Mem/Val     | Hits |
| --- | --------- | ----- | ----------- | --- | ----- | ----------- | ---- |
| 1   | `AndNext` | Mem   | 0xLEVEL     | =   | Value | N           |
| 2   |           | Mem   | 0xLVL_STATE | =   | Value | LVL_N_INTRO | (1)  |
| 3   |           | Delta | 0xLEVEL     | =   | Value | N           |
| 4   | `Trigger` | Mem   | 0xLEVEL     | =   | Value | N+1         |
| 5   | `ResetIf` | Mem   | 0xLEVEL     | =   | Value | TITLE       |
| 6   | `AndNext` | Mem   | 0xLEVEL     | =   | Value | N           |
| 7   | `ResetIf` | Mem   | 0xLIVES     | <   | Delta | 0xLIVES     |

**Requirements**

- 1-2 Supposes there is a `LEVEL_STATE` address that has values like "In Level Intro Screen," "Playing Level," etc and sets a checkpoint hit when you are in the correct level's intro. This is a stand in for some "checkpoint" where you want the challenge to start. You will need to determine the proper conditions and timing and set up your own appropriate start checkpoint.
- 3-4: Functionally the same as conditions 1-2 from the [Finish Level N](#finish-level-n) template, but with a Trigger on the final line so that the challenge icon shows to the player while the challenge is active.
- 5: Resets the start checkpoint if the player has a game over or otherwise is able to quit back to the title screen early. Prevents the checkpoint hit from sticking around when it shouldn't.
- 6-7: A Reset for when the `LEVEL` address has the value of level `N` and the `LIVES` address is less than it was on the previous frame, indicating the player lost a life. Clears the starting checkpoint hit and so fails the challenge.

**Notes**

- The requirements in 6-7 can also be modified to reset hit count if a weapon was used, damage taken, or anything else that you want the player to NOT do.
  -The requirements in 1-2 may vary widely depending on the game.

## Finish Level N with Item

| ID  | Flag      | Type  | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | --------- | ----- | ------- | --- | ----- | ------- | ---- |
| 1   |           | Delta | 0xLEVEL | =   | Value | N       | (0)  |
| 2   | `Trigger` | Mem   | 0xLEVEL | =   | Value | N+1     | (0)  |
| 3   |           | Mem   | 0xITEM  | =   | Value | TRUE    | (0)  |

**Requirements**

- 1-2: Functionally the same as conditions 1-2 from the [Finish Level N](#finish-level-n) template, but with a `Trigger` on the final line so that the challenge icon shows to the player while the challenge is active.
- 3: Value that is true when the player has the correct item. The lack of a `Trigger` flag here allows the icon to appear while the player has the item, and disappear when the player does not have it.

## Collect an Item In a Specific Level

This template is for battery save or password protection for items. It avoids awarding "get item X" by loading a password or save where the player already has the item. It checks that an item is collected in the level/room ID it is supposed to be collected, and only allows it be earned at that time.

| ID  | Flag | Type  | Memory  | Cmp | Type  | Mem/Val       | Hits |
| --- | ---- | ----- | ------- | --- | ----- | ------------- | ---- |
| 1   |      | Mem   | 0xLEVEL | =   | Value | COLLECT_LEVEL | (0)  |
| 2   |      | Mem   | 0xLEVEL | =   | Delta | 0xLEVEL       | (0)  |
| 3   |      | Delta | 0xITEM  | =   | Value | FALSE         | (0)  |
| 4   |      | Mem   | 0xITEM  | =   | Value | TRUE          | (0)  |

**Requirements**

- 1-2: Must be in the correct Level (`COLLECT_LEVEL`) for at least two frames during the frame at which the item status changes, preventing the following conditions from triggering the logic on load.
- 3: Did not have the item last frame
- 4: Have the item on the current frame.

**Notes**

- Requirements 1 and 2 together mean you have to have been in the level for at least two frames. The frame at which you load the data (from password or save) will be considered false, so any change in the item status at this time won't cause the trigger.
- It does not necessarily have to be level/Room ID. There are other ways to approach this problem, for example a unique Mem/Val that only occurs on collection. Etc.

## Collected 100 Percent of Something

This is limited battery save/password protection for when a player will collect 100% of something like clearing each stage in Super Mario world, or getting a 100% collection rate in Super Metroid. It's necessary so that a player cannot just load a save at 100% and get the achievement for free. (As usual there are other ways to approach this problem too.)

| ID  | Flag | Type  | Memory            | Cmp | Type  | Mem/Val                    | Hits |
| --- | ---- | ----- | ----------------- | --- | ----- | -------------------------- | ---- |
| 1   |      | Delta | 0xCollectPercent  | <   | Value | 100% value                 |
| 2   |      | Mem   | 0xCollectPercent  | =   | Value | 100% value                 |
| 3   |      | Mem   | 0xGuardConditions | =   | Value | When to Check for Increase |

Using the correct condition or conditions for requirement 3+ is especially important. You need to find an address or addresses that represents a unique time in the game where this percent increases. You'd not want the achievement to trigger when the player is loading their in game save file, which means this achievement must evaluate to `False` at that time.

**Examples**

- Check for an in-game state and look for it being active for multiple frames, similar to the level check in [Collect an Item in a specific Level](#collect-an-item-in-a-specific-level):

| ID  | Flag | Type | Memory       | Cmp | Type  | Mem/Val      | Hits |
| --- | ---- | ---- | ------------ | --- | ----- | ------------ | ---- |
| 3   |      | Mem  | 0xGAME_STATE | =   | Value | IN_GAME      | (0)  |
| 4   |      | Mem  | 0xGAME_STATE | =   | Delta | 0xGAME_STATE | (0)  |

- In Super Mario World this change happens while the player sees the world map after completing a stage. So you construct your conditions for this timing in a way to distinguish that from loading a save. Here the player state would be

| ID  | Flag | Type | Memory        | Cmp | Type  | Mem/Val                        | Hits |
| --- | ---- | ---- | ------------- | --- | ----- | ------------------------------ | ---- |
| 3   |      | Mem  | 0xPlayerState | =   | Value | Returned to map from completed |

## Circumvent the Problem of a Counter Incrementing Twice in the Same Frame

In the [Collecting an Item N times](#collecting-an-item-n-times) we are counting how many times the counter goes up. But in some games there are situations where the counter goes up twice in the same frame, and the hit counter is incremented only by one. This behavior, obviously, ruins our logic. We're going to see a way to circumvent this issue.

The technique used here relies on two other ones:

- [Using `SubSource` to count specific increments](/developer-docs/flags/subsource#using-subsource-to-count-increments)
- [`AddHits` Flag](/developer-docs/flags/addhits-subhits)

Here's the trick:

| ID  | Flag        | Type  | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | ----------- | ----- | ------- | --- | ----- | ------- | ---- |
| 1   | `SubSource` | Delta | 0xCOUNT |     |       |         |
| 2   | `AddHits`   | Mem   | 0xCOUNT | =   | Value | 0x02    |
| 3   |             | Mem   | 0xCOUNT | >   | Delta | 0xCOUNT | (N)  |
| 4   | `ResetIf`   | Mem   | 0xLIVES | <   | Delta | 0xLIVES |

It can look a bit confusing at a first sight, but maybe using a real example it can be more clear. Check the [Circumvent the Problem of a Counter Incrementing Twice in the Same Frame](/developer-docs/real-examples/circumvent-the-problem-of-a-counter-incrementing-twice-in-the-same-frame).

## Check for a Specific Value Changing to Another Specific Value Ten Times

In this example we want to detect a value changing from `V1` to `V2` ten times:

| ID  | Flag      | Type  | Memory    | Cmp | Type  | Mem/Val | Hits |
| --- | --------- | ----- | --------- | --- | ----- | ------- | ---- |
| 1   | `AndNext` | Delta | 0xADDRESS | =   | Value | 0xV1    |
| 2   |           | Mem   | 0xADDRESS | =   | Value | 0xV2    | (10) |

**Requirements**

- 1: If value in `0xADDRESS` in the previous frame is `0xV1`
- 2: AND If the current value in `0xADDRESS` is `0xV2`, increases the hitcount (up to 10).

## Conditional Resets

Conditional resets can be used for many things.

Lets say you want to have a reset if a player enters a certain X and Y zone of a level:

**CORE**

- The Core is whatever condition(s) you need for your achievement to be true. It can also include normal reset behavior.

**ALT1**

| ID  | Flag      | Type | Memory     | Cmp | Type  | Mem/Val      |
| --- | --------- | ---- | ---------- | --- | ----- | ------------ |
| 1   | `ResetIf` | Mem  | 0xLEVEL    | =   | Value | LEVELID      |
| 2   | `PauseIf` | Mem  | 0xX-COORDS | >   | Value | RESET-X-ZONE |
| 3   | `PauseIf` | Mem  | 0xX-COORDS | <   | Value | RESET-X-ZONE |
| 4   | `PauseIf` | Mem  | 0xY-COORDS | >   | Value | RESET-Y-ZONE |
| 5   | `PauseIf` | Mem  | 0xY-COORDS | <   | Value | RESET-Y-ZONE |

- The reset will only happen if all of the `PauseIf` conditions are not true.
- The pause is local to the alt but the reset resets the entire achievement.

**ALT2**

| ID  | Flag | Type | Memory | Cmp | Type | Mem/Val |
| --- | ---- | ---- | ------ | --- | ---- | ------- |
| 1   |      | Mem  | 0x1    | =   | Mem  | 0x1     |

- Any true condition. (to satisfy alt behavior having an always true alt is needed)

**Notes**

- You can use multiple conditional resets, each one in their own alt group to have far greater control of reset behavior.
