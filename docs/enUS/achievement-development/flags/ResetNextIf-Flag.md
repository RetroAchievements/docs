The `ResetNextIf` Flag is a special version of the [[ResetIf Flag]] that only resets the [hit count](Hit-Counts) of the following condition.

`ResetNextIf` has the same priority as the condition that it's attached to. If followed by a `PauseIf`, it can be used to reset that specific `PauseIf` without needing an alt. If attached to a standard condition, it will not be processed if the achievement is paused.

`AddAddress`, `AddSource`, and `SubSource` are combining modifier conditions and are not considered as the following condition. The `ResetNextIf` will apply to the next non-modified condition.

`AndNext` and `OrNext` are combining logical conditions and will have their hit counts reset, as well as whatever condition follows them.

All other condition flags, including `AddHits` and `SubHits`, will cause processing of the `ResetNextIf` behavior to stop.
