# `SubSource`

_**Note**: most likely this technique is not needed for simple games. So, it's not mandatory for jr-devs._

The `SubSource` can be chosen in the Flag column of the Achievement Editor

Works similarly to [`AddSource`](/developer-docs/flags/addsource), but the `SubSource` flag subtracts the calculated value from the accumulator.

Because it subtracts from the accumulator, `SubSource A, B` is actually `B - A`.

#### Simple example

| ID  | Flag      | Type | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ---- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | SubSource | Mem  | 8-bit | 0x8010 |     |       |      |         |       |
| 2   |           | Mem  | 8-bit | 0x8020 | >   | Value |      | 0x04    | 0 (0) |

In this example the value in `0x8010` will be subtracted from the value in `0x8020` and the comparison will check is if this sum is greater than four.

If the value in `0x8010` is `1` and the value in `0x8020` is `2`, the comparison will be `-1 + 2 > 4`, or `1 > 4`.

## Using SubSource to Count Specific Increments

`SubSource` can also be used to track specific increases in addresses. The conditions below states that the current value in address `0x80dc` minus the value in the previous frame in the same address must be equal `2`. Effectively, this means that the condition is true whenever the value in address `0x80dc` increases by exactly two.

| ID  | Flag      | Type  | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ----- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | SubSource | Delta | 8-bit | 0x80dc |     |       |      |         |       |
| 2   |           | Mem   | 8-bit | 0x80dc | =   | Value |      | 0x02    | 0 (0) |

## Checking for a negative result

The accumulator and all logic performed is limited to an unsigned 32-bit number. If the total drops below 0, it underflows, resulting in a very large positive number. Here's the representation for the first few negative numbers:

- `-1` is `0xFFFFFFFF`
- `-2` is `0xFFFFFFFE`
- `-3` is `0xFFFFFFFD`
- `-4` is `0xFFFFFFFC`
- `-5` is `0xFFFFFFFB`
- `-6` is `0xFFFFFFFA`
- `-7` is `0xFFFFFFF9`
- and so on...

So, if you wanted to see if a value was 1 less than another value, you could write:

| ID  | Flag      | Type | Size  | Memory | Cmp | Type  | Size | Mem/Val    | Hits  |
| --- | --------- | ---- | ----- | ------ | --- | ----- | ---- | ---------- | ----- |
| 1   | SubSource | Mem  | 8-bit | 0x8020 |     |       |      |            |       |
| 2   |           | Mem  | 8-bit | 0x8010 | =   | Value |      | 0xffffffff | 0 (0) |

This would be true if the value at $8010 (1) was 1 less than the value at $8020 (2): `1 - 2` = `-1` = `0xFFFFFFFF`.

However, you should swap the conditions to make it easier to read (`B - A = -1`) is the same as (`A - B = 1`):

| ID  | Flag      | Type | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ---- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | SubSource | Mem  | 8-bit | 0x8010 |     |       |      |         |       |
| 2   |           | Mem  | 8-bit | 0x8020 | =   | Value |      | 1       | 0 (0) |

This evaluates `-1 + 2 = 1`, which is true.

#### Subtracting negative constants

It is also possible to use straight negative numbers in the left section of your Sub/`AddSource` operations. To do so, remember to change the Type from `Mem` to `Value`, and use the values as explained above, such as `0xFFFFFFE5` for `-27`, and `0xFFFFFFE3` for `-29`, for example:

| ID  | Flag      | Type  | Size   | Memory     | Cmp | Type  | Size | Mem/Val    | Hits  |
| --- | --------- | ----- | ------ | ---------- | --- | ----- | ---- | ---------- | ----- |
| 1   | SubSource | Mem   | 32-bit | 0x8020     |     |       |      |            |       |
| 2   |           | Value |        | 0xffffffe5 | =   | Value |      | 0xffffffe3 | 0 (0) |

If $8020 contains 2, this would be true. `-2 + (-27) = -29`, which is `-2 - 27 = -29`, which is true.

If you use a negative number in a `SubSource` flag, it will result in a double negative, turning the number back to positive.

| ID  | Flag      | Type  | Size | Memory     | Cmp | Type  | Size | Mem/Val    | Hits  |
| --- | --------- | ----- | ---- | ---------- | --- | ----- | ---- | ---------- | ----- |
| 1   | SubSource | Value |      | 0xfffffffe |     |       |      |            |       |
| 2   |           | Value |      | 0xffffffe5 | =   | Value |      | 0xffffffe3 | 0 (0) |

This means `-(-2) + (-27) = -29`, which is `2 - 27 = -29`, which is `-25 = -29`, which is false.
