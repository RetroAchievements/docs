---
title: Mastering ResetIf to Manage Achievement Hit Counts
description: Discover how to effectively use the ResetIf flag to reset hit counts and prevent unwanted achievement triggers, ensuring precise control over achievement conditions and progression.
---

# `ResetIf`

The `ResetIf` can be chosen in the Flag column of the Achievement Editor.

If the associated condition is true, **all** [hit counts](/developer-docs/hit-counts) in the achievement will be reset to 0. This includes hit counts in other groups (more about it in [Alt Groups](/developer-docs/alt-groups) below).

The achievement will not trigger if one or more `ResetIf` conditions is true, even if there are no conditions with hit count targets.

You can see many examples of `ResetIf` in the [Real Examples page](/developer-docs/real-examples).

## `ResetIf` with hit counts

A `ResetIf` condition with a hit count will only trigger when the hit count target is met.

**Note**: If another `ResetIf` condition is met, all conditions, including the `ResetIf` with the hit count will have their hit counts reset to 0.

It is very common to use a condition with a hit count of 1 as a start marker for an achievement, and use a `ResetIf` to cancel the achievement before the end condition is met. A common example is a damageless achievement:  

"From start of (level/battle), ResetIf damage taken, trigger at end of (level/battle)".  

When the start condition is true, a hit count is captured. If it's still set when the end condition is true, the achievement triggers. If the `ResetIf` condition triggers, the hit count on the start condition is set back to zero, which makes the condition false when evaluating the state when the end condition is true, and the achievement will not trigger.

## Example

```
  1: ResetIf     Mem   8-bit  0x0007536c !=  Value        3          (0)
  2:             Mem   8-bit  0x00065980 !=  Value        1          (0)
  3:             Mem   8-bit  0x000a35a0 !=  Value        2          (0)
  4:             Mem   8-bit  0x000a35a0 !=  Value        4          (0)
  5:             Mem   8-bit  0x000a35a0 !=  Value        7          (0)
  6: AndNext     Delta 32-bit 0x000b0c00 =   Value        2          (0)
  7:             Mem   32-bit 0x000b0c00 =   Value        1          (2)
  8: AndNext     Mem   32-bit 0x001eed30 =   Value        1          (0)
  9: ResetIf     Delta 32-bit 0x001eed30 =   Value        0          (0)
```

In this achievement we want players to witness a special event twice in one round. The event is tracked using the address 0x000b0c00 - once the value jumps from 2 to 1 the event took place once.

Every time the event started the hit target in condition gains one hit.

Should the player lose or end the current session we wish to reset the amount of events witnessed. If we did not do that a player could see the event once, end the current session, start again and witness it only one more time in order to unlock the achievement.

Condition 1 checks if the player is not in a session. If that condition is true they are in the main menu and thus the hit targets are cleared.