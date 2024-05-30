The `PauseIf` flag can be chosen in the Flag column of the Achievement Editor.

`PauseIf` is usually used to prevent hit counts from going up during a specific situation (like when the game is paused). It's used when you want to keep previously earned hit count, but don't want to increment it or reset it while something else is going on.

When a group is processed, first all `PauseIf` are evaluated in order. As soon as any `PauseIf` is true, the group stops processing. This means that any `PauseIf`s after the true `PauseIf` **will not be evaluated**. This allows one `PauseIf` to prevent another `PauseIf` from collecting hits, but it's usually better to write the second `PauseIf` with an [`AndNext`](AndNext-and-OrNext-Flags) to limit when it collects hits.

This also means that any [`ResetIf`](ResetIf-Flag)s in the group will not be processed while the group is paused. To reset the hit count on a `PauseIf`, you must place the `ResetIf` in an alt group or attach a [`ResetNextIf`](ResetNextIf-Flag) to the `PauseIf`.

[Delta values](Delta-Values) are not affected by paused groups. The value returned by a delta read will still be from the previous frame, not from the frame just before the group was paused.

## `PauseIf` with hit counts

A `PauseIf` condition with a hit count target will only trigger when the hit count target is met. Once the hit count target is met, the group **remains paused** until the hit count is reset by a `ResetIf` in another group or a `ResetNextIf` attached to the `PauseIf`. You may hear this referred to as a PauseLock.

A `PauseIf` without a hit count will automatically unpause when the condition is no longer true.
