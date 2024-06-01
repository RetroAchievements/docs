# Combining Flags

`ResetIf` and `PauseIf` can be applied to a condition following any number of `Add Hits`, `Add Source`, or `Sub Source` conditions.

Going back to the [`Add Source` example](/developer-docs/flags/addsource) above, if `ResetIf` were applied to condition 2, the achievement would reset because `1 + 2 > 0`.
