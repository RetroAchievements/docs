---
title: Effectively Using Measured for Tracking Progress in Achievements
description: Discover how to use the Measured flag to track progress in achievement conditions, manage progress bars, and optimize user experience by providing real-time feedback on achievement completion.
---

# `Measured`

`Measured` marks a condition for tracking progress. It adds a progress bar to the achievement overlay to inform the user how close they are to completing an achievement. As the user expects an achievement to trigger when the progress bar is full, it is expected that any other conditions in the achievement should be true most of the time.

`Measured` should not be used to track things that are clearly visible to the user. If you have an achievement for getting 500,000 points, you don't need to Measure it if the score is displayed on the screen. Similarly, there's no need to use `Measured` in an achievement for having 100 of something in the inventory if the player can see a count of how many they have just by opening the inventory.

If placed on a condition with a required [`HitCount`](/developer-docs/hit-counts), the target value is the required `HitCount` and the current value is the current `HitCount`. [`AddHits`](/developer-docs/flags/addhits-subhits) can be used.

If placed on a condition without a `HitCount`, the target value is the constant on the right side of the condition and the current value is the evaluation of the left side of the condition. [`AddSource`](/developer-docs/flags/addsource) and [`SubSource`](/developer-docs/flags/subsource) can be used.

If multiple conditions are marked as `Measured` and have the same target value, the current value will be the maximum of all the `Measured` conditions.

If multiple conditions are marked as `Measured` and have different target values, a Parse Error -22 will occur.

Note that progress for `Measured` values is reported at the time of examination and may actually go down depending on the current value (Hit Count could be reset, or comparison value decreases).

## Limiting When a Measurement Appears or Changes

You will find cases where you don't want a measurement to update or where a measurement is invalid. You can use `Pause If` or `Measured If` to manage these cases.

### Using Measured If with Measured:
To limit the scope of a `Measured` condition, you can add a `MeasuredIf` condition. A `MeasuredIf` condition must be true for the `Measured` value to be non-zero (and for the achievement to trigger). You can use `MeasuredIf` to create achievements that require playing as a certain character, or just to prevent bogus data from showing up if the player is in the wrong part of the game. If any `MeasuredIf` condition in a group is false, the `Measured` value for the group is automatically 0.

To summarize, use `Measured If` when:
- Conditions are such that a measurement is invalid.
- Multiple possible measurement sources exist and you want to restrict which one is active
- **Example**: When using the wrong character.
- **Example**: When on the wrong stage or in the wrong area.
- **Example**: Measuring something during a race, but the measurement addresses are different between single-race mode and tournament mode.

### Using Pause If with Measured:
Since [`PauseIf`](/developer-docs/flags/pauseif) has precedence over `Measured`, the `Measured` value will be captured when a group becomes paused, and the captured value will be returned until the group is unpaused and `Measured` can be evaluated again. If another `Measured` exists in a non-paused group, its value will be returned even if it is lower than the captured value.

To summarize, use `Pause If` when:
- You want to prevent the measurement from updating or changing
- The scope of the measurement is valid, but the data is volatile
- **Example**: Pause while on a loading screen where the address(es) that normally contain or determine the measurement are used for something else
- **Example**: Some temporary case where you don't want to count hits during a challenge (i.e. Defeat X enemies while not invincible)
