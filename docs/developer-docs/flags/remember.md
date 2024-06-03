---
title: Understanding and Using Remember
description: Learn how to effectively use the Remember flag to store values for use later in logic, along with several use cases where this is particularly helpful.
---

# `Remember`

_This feature will be available at the RA_Integration version 1.4 milestone for developers, with support to be added for rcheevos version 11.4 milestone._

The `Remember` condition is chosen in the Flag column of the Asset Editor. Since many of the use cases tend to be fairly complex, it is recommended you be familiar with the rest of the tool kit before studying some of the more complicated examples below.

When a condition has the `Remember Flag`, the value of the condition is stored in the `Recall` accumulator. This value may be used in later logic by using the [`Recall`](/developer-docs/recall) operand found in the Type column of either side.

There is one remembered value per _group_ (Core, Alt1, Alt2, etc). This value is initialized at the beginning of an evaluation as a unsigned integer with value 0. If you Remember a new value, it will overwrite the previously remembered value. If you remember a Float value, the remembered value will be a floating point value instead of an unsigned integer. Using `Recall` before a value is remembered using the `Remember` condition will generate a warning in the asset editor.

The `Remember` condition is a combining condition and does not break any chain it is in. Conditions that follow it are considered part of the chain.

## Basic Usage

### Simple Example

| ID  | Flag      | Type  | Size   | Memory | Cmp | Type | Size | Mem/Val | Hits |
| --- | --------- | ----- | ------ | ------ | --- | ---- | ---- | ------- | ---- |
| 1   | SubSource | Delta | 16-bit | 0x1234 |     |      |      |         |      |
| 2   | Remember  | Mem   | 16-bit | 0x1234 |     |      |      |         |      |

In this example, the `Delta` value of `0x1234`, the value from the previous frame, is subtracted from the `Mem` value of `0x1234` and Remembered.

### Simple Example - With Operators

| ID  | Flag     | Type | Size   | Memory | Cmp | Type  | Size   | Mem/Val | Hits |
| --- | -------- | ---- | ------ | ------ | --- | ----- | ------ | ------- | ---- |
| 1   | Remember | Mem  | 16-bit | 0x1234 | -   | Delta | 16-Bit | 0x1224  |      |

The Remember condition can optionally take two operands and process a value based on an operator such as multiplication, division, addition, subtraction, and others. In this example, we used the subtraction operator to store the equivalent value as in the first example, but we do it in a single line.

### Using the Stored Value

To use the stored value, specify the `Recall` operator as the Type of operand:

| ID  | Flag | Type   | Size | Memory | Cmp | Type  | Size | Mem/Val | Hits |
| --- | ---- | ------ | ---- | ------ | --- | ----- | ---- | ------- | ---- |
| 2   |      | Recall |      |        | =   | Value |      | 0x05    |      |

In this example it uses the stored value and compares it to a constant value of 5. However, using the stored value once does not show off the main usefulness of `Remember`.

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type  | Size   | Mem/Val | Hits  |
| --- | -------- | ------ | ------ | ------ | --- | ----- | ------ | ------- | ----- |
| 1   | Remember | Mem    | 16-bit | 0x1234 | -   | Delta | 16-Bit | 0x1224  |       |
| 2   | And Next | Recall |        |        | =   | Value |        | 0x05    |       |
| 3   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03    | 1 (0) |
| 4   | And Next | Recall |        |        | =   | Value |        | 0x14    |       |
| 5   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03    | 1 (0) |
| 6   | And Next | Recall |        |        | =   | Value |        | 0x14    |       |
| 7   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03    | 1 (0) |
| 8   | Measured | Value  |        | 0x00   | =   | Value |        | 0x00    | 3 (0) |

In this example, we are using the stored value in multiple chains within an Add Hits chain without having to recalculate the value each time. Here we are looking for specific increases of `0x1234` to occur while the value of `0x1000` is equal to 3. Perhaps `0x1234` is money, `0x1000` is the current level, and you want to make sure the player collects a gem worth 5 units of money, one worth 20, and one worth 100 in level 3. `Recall` is used here to check all these values of the difference between Mem and Delta without having to recalculate it each time. See the [`Add Hits`](/developer-docs/flags/addhits-subhits) document for more information about how that condition works.

## Interaction with Pause If

Because `Pause If` logic is processed before other logic, `Pause If` logic can only recall values that have been remembered by pause logic. Values remembered during `Pause If` logic continue to be remembered during the remaining logic processing.

See the [`Pause If`](/developer-docs/flags/pauseif) document for more information about how that condition works.

### Example of Use with Pause If

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type  | Size   | Mem/Val    | Hits  |
| --- | -------- | ------ | ------ | ------ | --- | ----- | ------ | ---------- | ----- |
| 1   | Remember | Mem    | 16-bit | 0x1234 | -   | Delta | 16-Bit | 0x1224     |       |
| 2   | Pause If | Recall |        |        | >=  | Value |        | 0x80000000 | 1 (0) |
| 3   | And Next | Recall |        |        | =   | Value |        | 0x05       |       |
| 4   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03       | 1 (0) |
| 5   | And Next | Recall |        |        | =   | Value |        | 0x14       |       |
| 6   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03       | 1 (0) |
| 7   | And Next | Recall |        |        | =   | Value |        | 0x14       |       |
| 8   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03       | 1 (0) |
| 9   | Measured | Value  |        | 0x00   | =   | Value |        | 0x00       | 3 (0) |

This example extends the previous [Using the Stored Value](#using-the-stored-value) example by adding a `Pause If` lock if the player loses money\*. Because `Remember` is a combining condition, it links with the following `Pause If` to form a chain and is processed as part of the pause processing, allowing the value to be used by the `Pause If`. The remembered value is available to the remaining logic and can therefore be used by the Add Hits chain.

Notes:

- \* Due to the way unsigned math works, the subtraction will underflow back to 0xfffffff at negative one, so any value greater or equal to 0x80000000 is treated as negative).
- Because pause processing happens first, you _could_ put conditions 1-2 at the end of the logic and it will still work! The value remembered by the pause logic will still be available to the Add Hits chain. However because this may be a confusing effect, we recommend putting your pause logic at the beginning when using it with `Remember` and `Recall`.

### Example of Incorrect Usage with Pause If

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type  | Size   | Mem/Val   | Hits  |
| --- | -------- | ------ | ------ | ------ | --- | ----- | ------ | --------- | ----- |
| 1   | Remember | Mem    | 16-bit | 0x1234 | -   | Delta | 16-Bit | 0x1224    |       |
| 2   | And Next | Recall |        |        | =   | Value |        | 0x05      |       |
| 3   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03      | 1 (0) |
| 4   | And Next | Recall |        |        | =   | Value |        | 0x14      |       |
| 5   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03      | 1 (0) |
| 6   | And Next | Recall |        |        | =   | Value |        | 0x14      |       |
| 7   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03      | 1 (0) |
| 8   | Measured | Value  |        | 0x00   | =   | Value |        | 0x00      | 3 (0) |
| 9   | Pause If | Recall |        |        | >=  | Value |        | 0x8000000 | 1 (0) |

In this example, the `Remember` condition is not chained with the `Pause If`. Because of this, the `Pause If` condition will read a value of 0 from the `Recall` operand and never be paused, as a consequence of the pause logic being processed first. Fear not though, as the validation is smart enough to recognize this and will generate a warning on condition 9 that `Recall` is being used in a `Pause If` without a value being remembered in a `Pause If`.

## Using `Recall` within a `Remember` Condition

You can perform math on a remembered value and remember the result:

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type  | Size   | Mem/Val | Hits |
| --- | -------- | ------ | ------ | ------ | --- | ----- | ------ | ------- | ---- |
| 1   | Remember | Mem    | 16-bit | 0x1002 | +   | Mem   | 16-Bit | 0x1004  |      |
| 2   | Remember | Recall |        |        | \*  | Value |        | 0x03    |      |
| 3   | Remember | Recall |        |        | +   | Mem   | 16-Bit | 0x1000  |      |
| 4   | Remember | Recall |        |        | %   | Value |        | 0x05    |      |
| 5   |          | Recall |        |        | =   | Value |        | 0x00    |      |

In this example, let's say you need to calculate the value of `0x1000` + (`0x1002` + `0x1004`) \* 3 and check to see if that is a multiple of 5. You can use `Recall` in a `Remember` condition to operate on the last remembered value and store the new result.

Notes:

- If the value of the modulus (`%`) operation is 0, that means there is no remainder from the division by 5, meaning the value is a multiple of 5.

## Using `Remember` for Calculated Pointer Offsets

| ID  | Flag       | Type | Size   | Memory | Cmp | Type   | Size | Mem/Val | Hits |
| --- | ---------- | ---- | ------ | ------ | --- | ------ | ---- | ------- | ---- |
| 1   | Remember   | Mem  | 8-bit  | 0x0789 | \*  | Value  |      | 0x60    |      |
| 2   | AddAddress | Mem  | 32-bit | 0x1234 | +   | Recall |      |         |      |
| 3   |            | Mem  | 16-bit | 0x08   | >   | Value  |      | 0x00    |      |

In this example, let's say you have an address that points to a table of data, but in order to know where in the table you want to go, you have to calculate the offset from another source. `0x1234` will be used as the pointer to the table of data. `0x0789` will be the index in the table. The size of data for table entries is `0x60` bytes. And finally, the data we care about is `0x08` bytes into the data's structure. Perhaps this is "Player Health" and the index we are calculating is the index in the table where the "Player Data" exists and we need to check if this value is greater than 0.

See the [`Add Address`](/developer-docs/flags/addaddress) document for more information about how that condition works.

Breakdown of Conditions:

1. Scales the index by the size of the data structure. Now it represents how far from the beginning of the table the data is located.
2. Uses the address for the start of the table and adds to it the stored value. Now this Add Address points to the start of the "Player Data" in the table.
3. Offsets from the Address by `0x08`, where it reads the current memory value for the Player's Health with 16-bit size, then uses a comparison to check if it is greater than zero.

## Deeper Chaining of `Remember` Conditions

| ID  | Flag       | Type | Size   | Memory | Cmp | Type   | Size | Mem/Val | Hits  |
| --- | ---------- | ---- | ------ | ------ | --- | ------ | ---- | ------- | ----- |
| 1   | Remember   | Mem  | 8-bit  | 0x0789 | \*  | Value  |      | 0x60    |       |
| 2   | AddAddress | Mem  | 32-bit | 0x1234 | +   | Recall |      |         |       |
| 3   | And Next   | Mem  | 16-bit | 0x08   | <   | Delta  |      | 0x08    | 0 (0) |
| 4   | AddAddress | Mem  | 32-bit | 0x1234 | +   | Recall |      |         |       |
| 5   | And Next   | Mem  | 8-bit  | 0x24   | !=  | Value  |      | 0xff    | 0 (0) |
| 6   | AddAddress | Mem  | 32-bit | 0x1234 | +   | Recall |      |         |       |
| 7   | Remember   | Mem  | 16-bit | 0x24   | \*  | Value  |      | 0x60    |       |
| 8   | AddAddress | Mem  | 32-bit | 0x1234 | +   | Recall |      |         |       |
| 9   | Reset If   | Mem  | 8-bit  | 0x00   | =   | Value  |      | 0xA7    | 0 (0) |

This example shows how using `Remember` continues the chain of And Next conditions and how you can remember new values during the chain without affecting earlier parts of the chain or breaking the chain.

In this example, we build on the previous `Add Address` example by chaining it with other conditions. Pretend this is a challenge that fails if the player loses health while holding a certain object. Suppose the player data stores the index of the object at offset `0x24` (the value of which is `0xff` if no object is held). Suppose that index is an index into the same table that holds the player data. This example shows the reset chain that accomplishes this. Suppose that offset `0x00` of object data holds the 8-bit ID of the object.

Breakdown of Conditions:

1. Scales the index by the size of the data structure. Now it represents how far from the beginning of the table the data is located.
2. Uses the address for the start of the table and adds to it the stored value. Now this Add Address points to the start of the "Player Data" in the table.
3. Checks if the player lost health, using the offset for health established in the previous example.
4. Re-uses the address for the start of the player data
5. Checks the offset of the held object and makes sure it's not 0xff.
6. Re-uses the address for the start of the player data
7. Stores the index of the held object times the size of the object data and now the stored value is the location in the table where the object's data is located.
8. Uses the object table pointer + location in table of object
9. Reads the ID of the object and resets if holding the specific object while the other two core conditions in the chain are true (Player lost health and an object is held.

## Other Considerations

### Interaction With Floats

A remembered value will match the type of data being remembered. If operations are being performed, the first operand usually determines the type, except in the case of division (where the second operand determines the type). If you need to force an integer value to be stored as a float, you can do either of the following:

| ID  | Flag     | Type  | Size | Memory | Cmp | Type | Size   | Mem/Val | Hits |
| --- | -------- | ----- | ---- | ------ | --- | ---- | ------ | ------- | ---- |
| 1   | Remember | Float |      | 0.0    | +   | Mem  | 16-Bit | 0x1234  |      |

| ID  | Flag     | Type | Size   | Memory | Cmp | Type  | Size | Mem/Val | Hits |
| --- | -------- | ---- | ------ | ------ | --- | ----- | ---- | ------- | ---- |
| 1   | Remember | Mem  | 16-Bit | 0x1234 | /   | Float |      | 1.0     |      |

### Integer Overflow

When the stored value is an integer, all logic being performed is limited to 32-bits. If the total value exceeds 0xFFFFFFFF, there will be an overflow and only the 32 least significant bits will be used in the comparison.

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type       | Size   | Mem/Val | Hits |
| --- | -------- | ------ | ------ | ------ | --- | ---------- | ------ | ------- | ---- |
| 1   | Remember | Mem    | 32-bit | 0x8010 | +   | Mem        | 32-Bit | 0x8020  |      |
| 2   |          | Recall | >      | Value  |     | 0x30000000 | 0 (0)  |

If 0x8010 is 0xC0000000 and 0x8020 is 0x54321ABC, then the total will be 0x114321ABC, which is more than 32-bits and will be truncated to 0x14321ABC, which is not more then 0x30000000, so the logic will evaluate false.
