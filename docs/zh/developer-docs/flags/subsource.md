---
title: 使用 SubSource 实现高级成就逻辑
description: 了解如何有效使用 SubSource 标志从累加器中减去值、追踪特定增量、处理负数结果以及优化复杂的成就条件。
---

# `SubSource`

_**注意**：对于简单游戏，很可能不需要此技术。因此，初级开发者不必掌握。_

`SubSource` 可以在成就编辑器的 Flag 列中选择。

工作方式与 [`AddSource`](/zh/developer-docs/flags/addsource) 类似，但 `SubSource` 标志会从累加器中减去计算值。

因为它是从累加器中减去，所以 `SubSource A, B` 实际上是 `B - A`。

#### 简单示例

| ID  | Flag      | Type | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ---- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | SubSource | Mem  | 8-bit | 0x8010 |     |       |      |         |       |
| 2   |           | Mem  | 8-bit | 0x8020 | >   | Value |      | 0x04    | 0 (0) |

在这个示例中，`0x8010` 的值将从 `0x8020` 的值中减去，比较将检查这个差是否大于四。

如果 `0x8010` 的值为 `1`，`0x8020` 的值为 `2`，比较将是 `-1 + 2 > 4`，即 `1 > 4`。

**注意：** 当 `0x8010` 的值大于 `0x8020` 的值时，此比较也会被满足。

## 使用 SubSource 计数特定增量

`SubSource` 也可以用于追踪地址的特定增长。下面的条件表示地址 `0x80dc` 当前值减去同一地址前一帧的值必须等于 `2`。实际上，这意味着只要地址 `0x80dc` 的值恰好增加了二，条件就为真。

| ID  | Flag      | Type  | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ----- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | SubSource | Delta | 8-bit | 0x80dc |     |       |      |         |       |
| 2   |           | Mem   | 8-bit | 0x80dc | =   | Value |      | 0x02    | 0 (0) |

## 检查负数结果

累加器及所有执行的逻辑限制为无符号 32 位数。如果总值降到 0 以下，会发生下溢，产生一个非常大的正数。以下是前几个负数的表示：

- `-1` 为 `0xFFFFFFFF`
- `-2` 为 `0xFFFFFFFE`
- `-3` 为 `0xFFFFFFFD`
- `-4` 为 `0xFFFFFFFC`
- `-5` 为 `0xFFFFFFFB`
- `-6` 为 `0xFFFFFFFA`
- `-7` 为 `0xFFFFFFF9`
- 以此类推...

因此，如果你想查看一个值是否比另一个值小 1，可以这样写：

| ID  | Flag      | Type | Size  | Memory | Cmp | Type  | Size | Mem/Val    | Hits  |
| --- | --------- | ---- | ----- | ------ | --- | ----- | ---- | ---------- | ----- |
| 1   | SubSource | Mem  | 8-bit | 0x8020 |     |       |      |            |       |
| 2   |           | Mem  | 8-bit | 0x8010 | =   | Value |      | 0xffffffff | 0 (0) |

如果 $8010 的值 (1) 比 $8020 的值 (2) 小 1，则此条件为真：`1 - 2` = `-1` = `0xFFFFFFFF`。

但是，你应该交换条件使其更易读（`B - A = -1`）等同于（`A - B = 1`）：

| ID  | Flag      | Type | Size  | Memory | Cmp | Type  | Size | Mem/Val | Hits  |
| --- | --------- | ---- | ----- | ------ | --- | ----- | ---- | ------- | ----- |
| 1   | SubSource | Mem  | 8-bit | 0x8010 |     |       |      |         |       |
| 2   |           | Mem  | 8-bit | 0x8020 | =   | Value |      | 1       | 0 (0) |

这计算 `-1 + 2 = 1`，为真。

#### 减去负数常量

也可以在 Sub/`AddSource` 运算的左侧部分直接使用负数。为此，记得将 Type 从 `Mem` 更改为 `Value`，并使用如上所述的值，例如 `0xFFFFFFE5` 表示 `-27`，`0xFFFFFFE3` 表示 `-29`：

| ID  | Flag      | Type  | Size   | Memory     | Cmp | Type  | Size | Mem/Val    | Hits  |
| --- | --------- | ----- | ------ | ---------- | --- | ----- | ---- | ---------- | ----- |
| 1   | SubSource | Mem   | 32-bit | 0x8020     |     |       |      |            |       |
| 2   |           | Value |        | 0xffffffe5 | =   | Value |      | 0xffffffe3 | 0 (0) |

如果 $8020 的值为 2，则此条件为真。`-2 + (-27) = -29`，即 `-2 - 27 = -29`，为真。

如果在 `SubSource` 标志中使用负数，将产生双重否定，使数字变回正数。

| ID  | Flag      | Type  | Size | Memory     | Cmp | Type  | Size | Mem/Val    | Hits  |
| --- | --------- | ----- | ---- | ---------- | --- | ----- | ---- | ---------- | ----- |
| 1   | SubSource | Value |      | 0xfffffffe |     |       |      |            |       |
| 2   |           | Value |      | 0xffffffe5 | =   | Value |      | 0xffffffe3 | 0 (0) |

这意味着 `-(-2) + (-27) = -29`，即 `2 - 27 = -29`，即 `-25 = -29`，为假。

### 使用修饰符

与 `AddSource` 一样，你可以点击 "Cmp" 列添加修饰符来执行在从累加器减去值之前修改该值的运算。详情请参见 [AddSource - 使用修饰符](/zh/developer-docs/flags/addsource#using-modifiers)。
