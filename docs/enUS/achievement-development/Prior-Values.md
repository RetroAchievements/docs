A `Prior` value is the previous value at an address. It is similar to [Delta](Delta-Values), except it's only updated when the current values changes, whereas Delta is updated every frame.
**Note**: when you use `Prior` it is implicit that you are referring to an address and not a value.

Examples of how it can be used:

- Ensures a player visited the previous level instead of using a password to get there: `prior level = 6` would only be true if the player isn't currently on level 6, but hasn't been anywhere except the current level since being on level 6. If they came straight from the menu `prior level` would likely be 0.

### Comparison of memory types across several frames:

| Frame | Mem | Delta | Prior |
| ----- | --- | ----- | ----- |
| 1     | 25  | 0     | 0     |
| 2     | 25  | 25    | 0     |
| 3     | 30  | 25    | 25    |
| 4     | 35  | 30    | 30    |
| 5     | 35  | 35    | 30    |
| 6     | 35  | 35    | 30    |
| 7     | 40  | 35    | 35    |

Delta is always one frame behind Mem. Prior is only updated when Mem changes.
