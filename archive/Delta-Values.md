A `Delta` value is the previous frame's value. **Note**: when you use `Delta` it is implicit that you are referring to an address and not a value.

Examples of how it can be used:

- Detect if the level has been increased: `level > delta level`. It means "current level is greater than the previous frame's level".
- Detect damage: `health < delta health`. It means "current health is smaller than the previous frame's health". Or you can just make the previous frame's value a requirement. `health delta = 1` means "the previous frame's value for health must be 1 when the achievement pops up."

In the [Real Examples](Real-Examples) section there are some good examples:

- [Using Hit Counts as a Timer](Using-Hit-Counts-as-a-Timer)
- [Using Delta Values and Hit Counts to Detect an Increment](Using-Delta-Values-and-Hit-Counts-to-Detect-an-Increment)
