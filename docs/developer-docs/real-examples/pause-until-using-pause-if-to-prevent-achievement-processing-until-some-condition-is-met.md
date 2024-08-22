---
title: Using PauseIf to Control Achievement Processing
description: Learn how to use the PauseIf flag to prevent achievement processing until specific conditions are met, ensuring accurate tracking and avoiding convoluted logic in complex scenarios.
---

# Pause Until-Using `PauseIf` to Prevent Achievement Processing Until Some Condition is Met

Sometimes it will be very difficult to identify an on-going timing for when to process hit counts or other hit-related events. Or, there are a lot of conditions for when something might look valid, but not be valid. This situation may lead to convoluted logic in order to guard against invalid hit counts. One method to mitigate this is a `Pause Until`:

### Basic Construction of the "Pause Until"

| ID  | Flag          | Type  | Memory  | Cmp | Type  | Mem/Val | Hits  |
| --- | ------------- | ----- | ------- | --- | ----- | ------- | ----- |
| 1   | `AndNext`     | Delta | 0xSTATE | =   | Value | VALUE_A | 0 (0) |
| 2   | `ResetNextIf` | Mem   | 0xSTATE | =   | Value | VALUE_B | 1 (0) |
| 3   | `PauseIf`     | Value | 1       | =   | Value | 1       | 0 (0) |

**Explanation of Conditions**:

- 1-2: This transition from `VALUE_A` to `VALUE_B` may mark the 'start of game/level/sequence' definitively, however `VALUE_B` may not definitively identify the 'in-game/in-level/in-sequence' that you care about for the challenge. The `ResetNextIf` here will latch to true upon this transition and suppress the "always-true" `PauseIf` in the following condition, allowing the rest of the logic to be processed. The single hit target here is important for this to function properly.
- 3: This `PauseIf` condition will always be true. That is, unless the `ResetNextIf` before it is latched to 'true' but receiving a hit towards its target of 1 hit! That's what makes this a "Pause Until" structure: The group is paused until the `ResetNextIf` occurs.

### An Example of Logic towards an Achievement

Suppose our actual goal is to "Complete Game/Level/Sequence in under X units of time without losing health."

| ID  | Flag      | Type  | Memory          | Cmp | Type  | Mem/Val | Hits  |
| --- | --------- | ----- | --------------- | --- | ----- | ------- | ----- |
| 4   |           | Delta | 0xCOMPLETE_FLAG | =   | Value | 0       | 0 (0) |
| 5   | `Trigger` | Mem   | 0xCOMPLETE_FLAG | =   | Value | 1       | 0 (0) |

In place of conditions 3 and 4 here you would use whatever logic definitively identifies the completion of the challenge you are constructing. This is just one example of a set of conditions you might have to identify the completion of the challenge.

| ID  | Flag      | Type  | Memory   | Cmp | Type  | Mem/Val  | Hits                           |
| --- | --------- | ----- | -------- | --- | ----- | -------- | ------------------------------ |
| 6   | `ResetIf` | Mem   | 0xHEALTH | <   | Delta | 0xHEALTH | 0 (0)                          |
| 7   | `ResetIf` | Value | 0        | =   | Value | 0x0      | NUM_FRAMES_EQUAL_TO_TIME_X (0) |

Here, either `ResetIf` statement will remove the hit from the `ResetNextIf` and result in the achievement becoming Paused, preventing the timing hits from accruing until the game/level/sequence start transition happens again. Because the group is paused until the challenge starts, the timer reset will never falsely accrue hits outside of the challenge.

### Something To Keep In Mind

There will rarely be a time where this structure is needed. Usually the developer should be able to find some conditions to join with the timer or other counter (using the `AndNext` flag, etc) in order to restrict them to a specific window, along with any other resets needed to clear the counter hits to zero for other failure cases.
