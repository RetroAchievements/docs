---
title: Effectively Using ResetNextIf to Manage Specific Hit Counts
description: Learn how to utilize the ResetNextIf flag to selectively reset hit counts of specific conditions, ensuring precise control over achievement progression and avoiding unwanted resets.
---

# `ResetNextIf`

The `ResetNextIf` Flag is a special version of the `ResetIf` Flag that only resets the [hit count](/developer-docs/hit-counts) of the following condition.

`ResetNextIf` has the same priority as the condition that it's attached to. If followed by a `PauseIf`, it can be used to reset that specific `PauseIf` without needing an alt. If attached to a standard condition, it will not be processed if the achievement is paused.

`AddAddress`, `AddSource`, and `SubSource` are combining modifier conditions and are not considered as the following condition. The `ResetNextIf` will apply to the next non-modified condition.

`AndNext` and `OrNext` are combining logical conditions and will have their hit counts reset, as well as whatever condition follows them.

All other condition flags, including `AddHits` and `SubHits`, will cause processing of the `ResetNextIf` behavior to stop.

## Example

```
  1:             Mem   8-bit  0x00065980 !=  Value        1          (0)
  2:             Mem   8-bit  0x000a35a0 =   Value        3          (0)
  3:             Mem   8-bit  0x0007536c =   Value        3          (0)
  4: Trigger     Mem   32-bit 0x001bf958 >=  Value        1500000    (0)
  5: Trigger     Delta 32-bit 0x001bf958 <=  Value        1500000    (0)
  6:             Mem   16-bit 0x001bf9ac <   Value        10         (0)
  7: AndNext     Mem   8-bit  0x000a2774 =   Value        1          (0)
  8: ResetNextIf Delta 8-bit  0x000a2774 =   Value        0          (0)
  9: PauseIf     Delta 8-bit  0x000a22e8 >   Mem   8-bit  0x000a22e8 (1)
 10:             Mem   8-bit  0x000a2774 =   Value        1          (0)
```

In this achievement we want players to complete an objective without using a special item. The amount of items the player has is tracked in 0x000a22e8.  
Once an item has been used condition 9 with the `PauseIf` will be true and prevent the achievement from unlocking.

In order to be able to reattempt the challenge both condition 7 and 8 must be true. Since ResetNextIf is used the PauseIf will then properly be reset.  
Other hit counts would not be affected by this.