---
title: Understanding and Utilizing AddSource for Accumulator Logic
description: Learn how to effectively use the AddSource flag to manage accumulators in achievement conditions, including chaining, modifiers, overflow handling, and interactions with float values.
---

# `AddSource`

_**Note**: most likely this technique is not needed for simple games. So, it's not mandatory for jr-devs._

The `AddSource` can be chosen in the Flag column of the Achievement Editor

When a condition has the `AddSource` flag, the value on that memory address is added to the accumulator. When a condition is reached that does not modify the accumulator, the accumulator is added to value of the address on that condition before the comparison is made, and the accumulator will be reset to 0. It may sound a bit confusing, but the example below will clarify how this works:

#### Simple example

| ID  | Flag      | Type | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ---- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | AddSource | Mem  | 8-bit | 0x8010 |     |       |      |         |       |
| 2   |           | Mem  | 8-bit | 0x8020 | >   | Value |      | 0x04    | 0 (0) |

In this example the value in `0x8010` will be added to the value in `0x8020` and the comparison will check is if this sum is greater than four.

If the value in `0x8010` is `1` and the value in `0x8020` is `2`, the comparison will be `1 + 2 > 4`, or `3 > 4`.

Trying to summarize the explanation in an image:

![`AddSource` Explained](https://user-images.githubusercontent.com/8508804/42702180-1712bca0-869f-11e8-9949-11021fa891bb.png)

#### Chaining

You can use the `AddSource` flag to sum more addresses, like in the example below:

| ID  | Flag      | Type | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ---- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | AddSource | Mem  | 8-bit | 0x8010 |     |       |      |         |       |
| 2   | AddSource | Mem  | 8-bit | 0x8011 |     |       |      |         |       |
| 3   |           | Mem  | 8-bit | 0x8020 | >   | Value |      | 0x04    | 0 (0) |

This represents `value(0x8010) + value(0x8011) + value(0x8020) > 4`.

#### Independence

The accumulator is reset after its used, so you can have multiple `AddSource` chains in one trigger without having to worry about them interfering with each other.

| ID  | Flag      | Type | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ---- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | AddSource | Mem  | 8-bit | 0x8010 |     |       |      |         |       |
| 2   |           | Mem  | 8-bit | 0x8020 | >   | Value |      | 0x04    | 0 (0) |
| 3   | AddSource | Mem  | 8-bit | 0x8030 |     |       |      |         |       |
| 4   |           | Mem  | 8-bit | 0x8040 | <   | Value |      | 0x80    | 0 (0) |

This represents `value(0x8010) + value(0x8020) > 4 AND value(0x8030) + value(0x8040) < 0x80`.

#### Overflow

The accumulator and all logic being performed is limited to 32-bits. If the total value exceeds 0xFFFFFFFF, there will be an overflow and only the 32 least significant bits will be used in the comparison.

| ID  | Flag      | Type | Size   | Memory | Cmp | Type  | Size | Mem/Val    | Hits  |
| --- | --------- | ---- | ------ | ------ | --- | ----- | ---- | ---------- | ----- |
| 1   | AddSource | Mem  | 32-bit | 0x8010 |     |       |      |            |       |
| 2   |           | Mem  | 32-bit | 0x8020 | >   | Value |      | 0x30000000 | 0 (0) |

If 0x8010 is 0xC0000000 and 0x8020 is 0x54321ABC, then the total will be 0x114321ABC, which is more than 32-bits and will be truncated to 0x14321ABC, which is not more then 0x30000000, so the logic will evaluate false.

### Using Modifiers

Additionally, you can use AddSource to modify a value. By clicking on the "Cmp" column, a dropdown will open with various math and logical operators. This allows you to modify the value before adding it to the accumulator.

`*`: Multiply the left side by the right side.

- `AddSource 8-bit Mem 0x8010 * Value 0x14` would read the 8-bit value from $8010, multiply it by 20 (0x14 hex) and then add that to the accumulator.

`/`: Divide the left side by the right side.

- `AddSource 8-bit Mem 0x8010 / Value 0x14` would read the 8-bit value from $8010, divide by 20 (rounding down) and then add that to the accumulator.
- Note: If the divisor (right side) is zero, the result will be treated as a value of 0.

`%` Modulus operator: Divide the left side by the right side and return the remainder of the division.

- `AddSource 8-bit Mem 0x8010 % Value 0x14` would read the 8-bit value from $8010, divide by 20, and then add the remainder of the division that to the accumulator.  For example, if $8010 held a value of 43, the result of the modulus operation would be 3, which will be added to the accumulator.
- Note: If the divisor (right side) is zero, the result will be treated as a value of 0.

`+`: Add the left side and the right side.

- `AddSource 8-bit Mem 0x8010 + Value 0x14` would read the 8-bit value from $8010, add 20 to it and then add that to the accumulator.

`-`: Subtract the right side from the left side.

- `AddSource 8-bit Mem 0x8010 - Value 0x14` would read the 8-bit value from $8010, subtract 20 from it and then add that to the accumulator.

`&`: Bitwise-mask the left side with the right side.

- `AddSource 8-bit Mem 0x8010 & Value 0x3f` would read the 8-bit value from $8010, discard bits 6 and 7 (0x3f is 00111111 in binary) and then add that to the accumulator.

`^`: Bitwise-XOR the left side with the right side

- `AddSource 8-bit Mem 0x8010 ^ Mem 0x8011` would read the 8-bit values from $8010 and $8011, and result in a value where the resulting bits would be 1 if the same bit in the two operands differed, or 0 if the same bit in the two operands matched. This result would be added to the accumulator.

You can use memory references on the right side as well. `AddSource 8-bit Mem 0x8010 * 8-bit Mem 0x8011` would read the two 8-bit values, multiply them together, and add that to the accumulator.

::: warning VERSION NOTICE
Addition, subtraction, and Modulus operators are slated for the version 1.4 RA_Integration milestone. Processing support will be available in the version 11.4 rcheevos milestone. They will are available in earlier versions.
:::

### Interaction with floats

The accumulator is typed based on the first thing added to it. If the first `AddSource`/`SubSource` of a chain is an integer, the accumulator will be an integer and any floats added to the accumulator will be floored before they're added to the accumulator. If the first `AddSource`/`SubSource` of a chain is a float, the accumulator will be a float and any integers added to the accumulator will be converted to floats before they're added to the accumulator.

Note that when the accumulator is added to the final condition, the type of the final condition is used. So if the final condition is float and the accumulator is an integer, the accumulator will be converted to a float before it's added to the final condition.

To force all floats in an `AddSource` chain to be floored, you need an extra first and last condition:

| ID  | Flag      | Type  | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ----- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | AddSource | Value |       | 0      |     |       |      |         |       |
| 2   | AddSource | Mem   | Float | 0x1000 |     |       |      |         |       |
| 3   | AddSource | Mem   | Float | 0x1004 |     |       |      |         |       |
| 4   | AddSource | Mem   | Float | 0x1008 |     |       |      |         |       |
| 5   |           | Value |       | 0      | >   | Value |      | 12      | 0 (0) |

Line 1 primes the accumulator as an integer, so lines 2-4 will be floored before they're added to the accumulator. Line 5 ensures the final value is an integer before doing the comparison. Without line 1, lines 2-4 would be accumulated as floats. Without line 5, the accumulator would be added to the last float without it being floored.
