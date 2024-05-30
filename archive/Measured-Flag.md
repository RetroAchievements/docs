`Measured` marks a condition for tracking progress. It adds a progress bar to the achievement overlay to inform the user how close they are to completing an achievement. As the user expects an achievement to trigger when the progress bar is full, it is expected that any other conditions in the achievement should be true most of the time.

`Measured` should not be used to track things that are clearly visible to the user. If you have an achievement for getting 500,000 points, you don't need to Measure it if the score is displayed on the screen. Similarly, there's no need to use `Measured` in an achievement for having 100 of something in the inventory if the player can see a count of how many they have just by opening the inventory.

If placed on a condition with a required [HitCount](Hit-Counts), the target value is the required HitCount and the current value is the current HitCount. [`AddHits`](AddHits-and-SubHits-Flag) can be used.

If placed on a condition without a HitCount, the target value is the constant on the right side of the condition and the current value is the evaluation of the left side of the condition. [`AddSource`](AddSource-Flag) and [`SubSource`](SubSource-Flag) can be used.

If multiple conditions are marked as `Measured` and have the same target value, the current value will be the maximum of all the `Measured` conditions.

If multiple conditions are marked as `Measured` and have different target values, a Parse Error -22 will occur.

Note that progress for `Measured` values is reported at the time of examination and may actually go down depending on the current value (Hit Count could be reset, or comparison value decreases).

To limit the scope of a `Measured` condition, you can add a `MeasuredIf` condition. A `MeasuredIf` condition must be true for the `Measured` value to be non-zero (and for the achievement to trigger). You can use `MeasuredIf` to create achievements that require playing as a certain character, or just to prevent bogus data from showing up if the player is in the wrong part of the game. If any `MeasuredIf` condition in a group is false, the `Measured` value for the group is automatically 0.

Since [`PauseIf`](PauseIf-Flag) has precedence over `Measured`, the `Measured` value will be captured when a group becomes paused, and the captured value will be returned until the group is unpaused and `Measured` can be evaluated again. If another `Measured` exists in a non-paused group, its value will be returned even if it is lower than the captured value.
