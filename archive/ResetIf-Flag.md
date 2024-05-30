The `ResetIf` can be chosen in the Flag column of the Achievement Editor

If the associated condition is true, **all** [hit counts](Hit-Counts) in the achievement will be reset to 0. This includes hit counts in other groups (more about it in [Alt Groups](Alt-Groups) below).

The achievement will not trigger if one or more `ResetIf` conditions is true, even if there are no conditions with hit count targets.

You can see many examples of `ResetIf` in the [Real Examples page](Real-Examples).

## `ResetIf` with hit counts

A `Reset If` condition with a hit count will only trigger when the hit count target is met.

**Note**: If another `ResetIf` condition is met, all conditions, including the `ResetIf` with the hit count will have their hit counts reset to 0.

It is very common to use a condition with a hit count of 1 as a start marker for an achievement, and use a `ResetIf` to cancel the achievement before the end condition is met. A common example is a damageless achievement: "From start of (level/battle), reset if damage taken, trigger at end of (level/battle)". When the start condition is true, a hit count is captured. If it's still set when the end condition is true, the achievement triggers. If the `ResetIf` condition triggers, the hit count on the start condition is set back to zero, which makes the condition false when evaluating the state when the end condition is true, and the achievement will not trigger.
