# Value Definition

Value definitions are used for [leaderboards](/developer-docs/leaderboards#value) and [rich presence](/developer-docs/rich-presence#value-properties).

A value is calculated by evaluating one or more [memory reads](/developer-docs/condition-syntax). Read values can be scaled (multiplication) or summed (addition) to arrive at the final value.

**NOTE**: Value calculations are performed using 32-bit signed integers. As such, the maximum value is 2147483647 and the minimum value is -2147483648. Values above the maximum will wrap around and register as very negative numbers.

### Value from `Measured`

Starting with the 0.77 DLL (and RetroArch 1.8.2), you can use the [`Measured`](/developer-docs/flags/measured) flag to generate a Value. This supports all logic supported by the achievement editor, but every condition must have a flag that somehow influences the `Measured` value (i.e. [AddSource](/developer-docs/flags/addsource), [AddAddress](/developer-docs/flags/addaddress)). Note that the `Measured` condition cannot have a multiplier directly on it. If the final clause needs to be multiplied, use an additional AddSource and Measure 0.

**VAL**: `A:0xhfe24_A:0xhfe25*60_A:0xhfe22*3600_M:0`

The example provided above reads:

```
AddSource 8-bit 0xfe24
AddSource 8-bit 0xfe25 * Value 60
AddSource 8-bit 0xfe22 * Value 3600
`Measured`  Value 0
```

The addresses represent frames, seconds, and minutes respectively, and are individually multiplied and then added together to create a total number of frames that can be submitted to the database.

### Value from HitCount

Sometimes you want to count the number of times something happens and submit that as the value. You can also do this using `Measured` syntax. Just add a comparison to your final condition. Do not include an explicit Hit target, or that will be the maximum value that can be submitted.

The [HitCount](/developer-docs/hit-counts) on the condition will automatically be set to 0 when the leaderboard starts, and the HitCount will be submitted as the Value when the leaderboard submit trigger activates. You can use [PauseIf](/developer-docs/flags/pauseif) and [ResetIf](/developer-docs/flags/resetif) within the Value conditions to further control the behavior.

For example:

```
M:0xH1234!=d0xH1234
```

Would submit the number of times the byte at $1234 changed while the leaderboard was active.

```
N:0xH1234!=20_M:0xH1234!=d0xH1234
```

Would submit the number of times the byte at $1234 changed to something other than 20 while the leaderboard was active.

### Legacy Syntax:

**VAL**: `0xhfe24*1_0xhfe25*60_0xhfe22*3600`

Before the introduction of the `Measured` flag, Values were written using their own syntax. Some people still prefer this syntax as it's generally easier to do by hand. A legacy value is the sum of a collection of memory values multiplied by modifiers.

`address*modifier` (address times modifier)

The `_` underscore operator separates the individual values and acts as 'plus'. So the example above represents:

```
8-bit 0xfe24 times 1, PLUS
8-bit 0xfe25 times 60, PLUS
8-bit 0xfe22 times 3600
```

The addresses represent frames, seconds, and minutes respectively, and are individually multiplied and then added together to create a total number of frames that can be submitted to the database.

To add a constant, use `_vN` where N is the constant in decimal (i.e. `_v10`) will add 10 to the result. You can also use negative values for N (i.e. `_v-10` will subtract 10 from the result.

**Tip**: modifier can be a non-integer value, so if you need to divide by two, you can multiply by 0.5: `0xhfe24*0.5`

### Modifiers

#### Max of

Multiple value calculations may be joined with a `$`. This is similar to alt groups in a trigger, but instead of any one alt group needing to be true, whichever "alt value" is largest will be used as the overall value for the expression.

`M:0xH1234$M:0xH1235` would return the larger of the values at $1234 or $1235.

#### Binary Inversion

A single memory reference can be prefixed with a `~` to perform a binary inversion on it. After reading the value from memory, every bit is switches (0s become 1s, 1s become 0s).

Typically, this is used to conditionally add or subtract a value:

`A:0xH1234*~0xM1233_M:0xH1235` will add the byte at $1234 to the byte at $1235 if bit0 of $1233 is not set.

#### Binary Coded Decimal

Binary Coded Decimal (BCD) is when a values in memory is stored as decimal digits in each hex digit location. For example, if the memory inspector shows 86 at a byte in memory, it would normally represent the decimal value 134 (0x86 hex = 134 decimal). BCD decoding the value keeps the individual decimal numbers and the result is 86 (0x86 hex = 86 BCD).

You can have the runtime decode BCD values by putting a `b` prefix in front of the memory reference (i.e. `b0xW1234`). You still need to specify the size of the BCD memory address. b0x1234 reads a 16-bit value. b0xh1234 reads an 8-bit value and b0xX1234 reads a 32-bit value. NOTE: Support for 16-bit and 32-bit BCD decoding is a feature of the 0.075 toolkit.
