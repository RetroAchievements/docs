---
title: Utilizing Alt Groups for Achievement Requirements
description: Learn how to use Alt Groups to create alternative requirements for unlocking achievements, including examples, facts, and advanced techniques for conditional resets.
---

# Alt Groups

Achievements can have groups added to them that allow for alternative requirements to unlock an achievement. These are called _Alt Groups_,

When using _Alt groups_, for the achievement to trigger, all the conditions in the _Core group_ MUST be true. And then all the conditions of ANY _Alt group_ must be true. In other words, each _Alt group_ uses `OR` logic.

## Example

In this dummy example for Contra (NES) the achievement requires, "While on stage look up or crouch." Lets look at what's in the _Core group_ and in the _Alt groups_:

![Alt Groups: Core](/alt-groups-core.png)
In the core group: `0x18 = 5`. This checks that the player is on stage.

![Alt Groups: Alt1](/alt-groups-alt1.png)
In `Alt 01`: `0xbc = 1`. This checks that the player is looking up.

![Alt Groups: Alt2](/alt-groups-alt2.png)
In `Alt 02`: `0xbc = 2`. This checks that the player is crouching.

As long as the player is on stage. The core group is true. If the player looks up, Alt 01 is true. If the player crouches, Alt 02 is true. If core + Alt 01 OR Alt 02 are true, the achievement will trigger.

## Facts about Alt Groups

- To add or remove _Alt groups_ click the `+` or `-` button in the bottom left of the achievement editor.  
  ![Alt Groups: Add or remove](/alt-groups-add.png)

- If you want to simply test for **this** `OR` **that** you can leave the core group blank and add **this** in `Alt 01`, and **that** in `Alt 02`.

- No matter how many `Alt groups` an achievement has, if the Core group is true, only one Alt has to be true for the achievement to trigger.

- When using [ResetIf](#resetif) and [PauseIf](#pauseif), PauseIf only pauses the group that it's in, but ResetIf resets hit counts in all groups and prevents achievements from triggering so long as the reset is active.

## Using Alt Groups for Conditional Resets

**Advanced:** An _Alt group_ can be used to create a ResetIf condition that is only active some of the time.

If you create an _Alt group_ containing a PauseIf condition and a ResetIf condition, you can use the PauseIf condition to disable the ResetIf condition under certain circumstances without disabling the entire achievement.

- The Reset will still affect all groups, including your core group. The Pause will only pause the _Alt group_ containing the PauseIf.

- This logic can be applied to multiple _Alt groups_ in the same achievement to protect several separate Reset statements.

- **Make sure** that you have at least one _Alt group_ that will be true or the achievement won't trigger. The easiest way to do this is to create an extra alt group that has one condition that is `Value 1 = Value 1`.

- **Beware**: If your Pause condition is false, and the Reset condition is also false, the group will be considered true unless you have another always false condition in the group. When using an _Alt group_ to segregate a PauseIf, make sure to include an always false condition like `Value 1 = Value 0`.
