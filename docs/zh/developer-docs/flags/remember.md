---
title: 理解和使用 Remember
description: 学习如何有效使用 Remember 标志来存储值以供后续逻辑使用，以及几个特别有用的用例。
---

# `Remember`

::: warning 版本说明
此功能将在 RA_Integration 1.4 里程碑版本中为开发者提供，并将在 rcheevos 11.4 里程碑版本中添加支持。
:::

`Remember` 条件在资源编辑器的标志列中选择。由于许多用例往往相当复杂，建议在研读下面一些更复杂的示例之前，先熟悉工具包的其他部分。

当条件具有 `Remember` 标志时，条件的值会存储在召回累加器中。此值可在后续逻辑中通过使用 [`Recall`](/zh/developer-docs/recall) 操作数来使用，该操作数可在任意一侧的类型列中找到。

每个*组*（Core、Alt1、Alt2 等）有一个记住的值。此值在评估开始时初始化为值为 0 的无符号整数。如果记住一个新值，它将覆盖之前记住的值。如果记住一个浮点值，记住的值将是浮点值而不是无符号整数。在使用 `Remember` 条件记住值之前使用 `Recall` 将在资源编辑器中生成警告。

`Remember` 条件是组合条件，不会中断它所在的任何链。跟随它的条件被视为链的一部分。

## 基本用法

### 简单示例

| ID  | Flag      | Type  | Size   | Memory | Cmp | Type | Size | Mem/Val | Hits |
| --- | --------- | ----- | ------ | ------ | --- | ---- | ---- | ------- | ---- |
| 1   | SubSource | Delta | 16-bit | 0x1234 |     |      |      |         |      |
| 2   | Remember  | Mem   | 16-bit | 0x1234 |     |      |      |         |      |

在此示例中，`0x1234` 的 `Delta` 值（前一帧的值）从 `0x1234` 的 `Mem` 值中减去并记住。

::: info
`Remember` 设置召回累加器的值。
:::

### 简单示例 - 使用操作符

| ID  | Flag     | Type | Size   | Memory | Cmp | Type  | Size   | Mem/Val | Hits |
| --- | -------- | ---- | ------ | ------ | --- | ----- | ------ | ------- | ---- |
| 1   | Remember | Mem  | 16-bit | 0x1234 | -   | Delta | 16-Bit | 0x1234  |      |

Remember 条件可以选择性地接受两个操作数，并根据操作符（如乘法、除法、加法、减法等）处理值。在此示例中，我们使用减法操作符来存储与第一个示例等效的值，但我们在单行中完成。

### 使用存储的值

要使用存储的值，将 `Recall` 操作符指定为操作数的类型：

| ID  | Flag | Type   | Size | Memory | Cmp | Type  | Size | Mem/Val | Hits |
| --- | ---- | ------ | ---- | ------ | --- | ----- | ---- | ------- | ---- |
| 2   |      | Recall |      |        | =   | Value |      | 0x05    |      |

在此示例中，它使用存储的值并将其与常量值 5 进行比较。但是，仅使用一次存储的值并不能展示 `Remember` 的主要用途。

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type  | Size   | Mem/Val | Hits  |
| --- | -------- | ------ | ------ | ------ | --- | ----- | ------ | ------- | ----- |
| 1   | Remember | Mem    | 16-bit | 0x1234 | -   | Delta | 16-Bit | 0x1224  |       |
| 2   | And Next | Recall |        |        | =   | Value |        | 0x05    |       |
| 3   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03    | 1 (0) |
| 4   | And Next | Recall |        |        | =   | Value |        | 0x14    |       |
| 5   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03    | 1 (0) |
| 6   | And Next | Recall |        |        | =   | Value |        | 0x64    |       |
| 7   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03    | 1 (0) |
| 8   | Measured | Value  |        | 0x00   | =   | Value |        | 0x00    | 3 (0) |

在此示例中，我们在 Add Hits 链内的多个链中使用存储的值，而无需每次都重新计算值。这里我们查找 `0x1234` 的特定增量，同时 `0x1000` 的值等于 3。也许 `0x1234` 是金钱，`0x1000` 是当前关卡，您希望确保玩家在第 3 关收集价值 5 单位金钱的宝石、价值 20 的宝石和价值 100 的宝石。这里使用 `Recall` 来检查 Mem 和 Delta 之间的所有这些差值，而无需每次都重新计算。有关该条件如何工作的更多信息，请参阅 [`Add Hits`](/zh/developer-docs/flags/addhits-subhits) 文档。

::: info
`Recall` 检索存储在召回累加器中的值。
:::

## 与 Pause If 的交互

由于 `Pause If` 逻辑在其他逻辑之前处理，`Pause If` 逻辑只能召回由暂停逻辑记住的值。在 `Pause If` 逻辑期间记住的值在剩余逻辑处理期间继续被记住。

有关该条件如何工作的更多信息，请参阅 [`Pause If`](/zh/developer-docs/flags/pauseif) 文档。

### 与 Pause If 一起使用的示例

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type  | Size   | Mem/Val    | Hits  |
| --- | -------- | ------ | ------ | ------ | --- | ----- | ------ | ---------- | ----- |
| 1   | Remember | Mem    | 16-bit | 0x1234 | -   | Delta | 16-Bit | 0x1234     |       |
| 2   | Pause If | Recall |        |        | >=  | Value |        | 0x80000000 | 1 (0) |
| 3   | And Next | Recall |        |        | =   | Value |        | 0x05       |       |
| 4   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03       | 1 (0) |
| 5   | And Next | Recall |        |        | =   | Value |        | 0x14       |       |
| 6   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03       | 1 (0) |
| 7   | And Next | Recall |        |        | =   | Value |        | 0x64       |       |
| 8   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03       | 1 (0) |
| 9   | Measured | Value  |        | 0x00   | =   | Value |        | 0x00       | 3 (0) |

此示例通过添加一个 `Pause If` 锁定来扩展之前的[使用存储的值](#using-the-stored-value)示例，如果玩家失去金钱\*。由于 `Remember` 是组合条件，它与后续的 `Pause If` 链接形成链，并作为暂停处理的一部分进行处理，允许 `Pause If` 使用该值。记住的值可用于剩余逻辑，因此可由 Add Hits 链使用。

注意事项：

- \* 由于无符号数学的工作方式，减法将在负一时下溢回 0xfffffff，因此任何大于或等于 0x80000000 的值都被视为负数）。
- 由于暂停处理首先发生，您*可以*将条件 1-2 放在逻辑的末尾，它仍然有效！由暂停逻辑记住的值仍可用于 Add Hits 链。但是，由于这可能是一个令人困惑的效果，我们建议在使用 `Remember` 和 `Recall` 时将暂停逻辑放在开头。

::: tip
为避免 `Remember` 和 `Recall` 的意外行为，请将使用这些功能的暂停逻辑放在组的顶部。
:::

### 与 Pause If 的错误用法示例

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type  | Size   | Mem/Val   | Hits  |
| --- | -------- | ------ | ------ | ------ | --- | ----- | ------ | --------- | ----- |
| 1   | Remember | Mem    | 16-bit | 0x1234 | -   | Delta | 16-Bit | 0x1234    |       |
| 2   | And Next | Recall |        |        | =   | Value |        | 0x05      |       |
| 3   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03      | 1 (0) |
| 4   | And Next | Recall |        |        | =   | Value |        | 0x14      |       |
| 5   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03      | 1 (0) |
| 6   | And Next | Recall |        |        | =   | Value |        | 0x64      |       |
| 7   | Add Hits | Mem    | 8-Bit  | 0x1000 | =   | Value |        | 0x03      | 1 (0) |
| 8   | Measured | Value  |        | 0x00   | =   | Value |        | 0x00      | 3 (0) |
| 9   | Pause If | Recall |        |        | >=  | Value |        | 0x8000000 | 1 (0) |

在此示例中，`Remember` 条件未与 `Pause If` 链接。因此，`Pause If` 条件将从 `Recall` 操作数读取值 0 并且永远不会暂停，因为暂停逻辑首先处理。不过不用担心，因为验证足够智能，可以识别这一点，并将在条件 9 上生成警告，即在 `Pause If` 中使用 `Recall`，但在 `Pause If` 中未记住值。

::: danger
在 Pause If 逻辑中使用 `Recall` 类型操作符时，请确保设置要使用的值的 `Remember` 条件位于同一 `Pause If` 链或更早的 `Pause If` 链中。否则召回的值将为 0！
:::

## 在 `Remember` 条件内使用 `Recall`

您可以对记住的值执行数学运算并记住结果：

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type  | Size   | Mem/Val | Hits |
| --- | -------- | ------ | ------ | ------ | --- | ----- | ------ | ------- | ---- |
| 1   | Remember | Mem    | 16-bit | 0x1002 | +   | Mem   | 16-Bit | 0x1004  |      |
| 2   | Remember | Recall |        |        | \*  | Value |        | 0x03    |      |
| 3   | Remember | Recall |        |        | +   | Mem   | 16-Bit | 0x1000  |      |
| 4   | Remember | Recall |        |        | %   | Value |        | 0x05    |      |
| 5   |          | Recall |        |        | =   | Value |        | 0x00    |      |

在此示例中，假设您需要计算 `0x1000` + (`0x1002` + `0x1004`) \* 3 的值，并检查它是否是 5 的倍数。您可以在 `Remember` 条件中使用 `Recall` 对最后记住的值进行操作并存储新结果。

注意事项：

- 如果模数（`%`）运算的值为 0，这意味着除以 5 没有余数，意味着该值是 5 的倍数。

## 使用 `Remember` 计算指针偏移

| ID  | Flag       | Type | Size   | Memory | Cmp | Type   | Size | Mem/Val | Hits |
| --- | ---------- | ---- | ------ | ------ | --- | ------ | ---- | ------- | ---- |
| 1   | Remember   | Mem  | 8-bit  | 0x0789 | \*  | Value  |      | 0x60    |      |
| 2   | AddAddress | Mem  | 32-bit | 0x1234 | +   | Recall |      |         |      |
| 3   |            | Mem  | 16-bit | 0x08   | >   | Value  |      | 0x00    |      |

在此示例中，假设您有一个指向数据表的地址，但为了知道要访问表中的哪个位置，您必须从另一个源计算偏移量。`0x1234` 将用作数据表的指针。`0x0789` 将是表中的索引。表条目数据的大小为 `0x60` 字节。最后，我们关心的数据在数据结构中偏移 `0x08` 字节。也许这是"玩家生命值"，我们计算的索引是"玩家数据"存在的表中的索引，我们需要检查此值是否大于 0。

有关该条件如何工作的更多信息，请参阅 [`Add Address`](/zh/developer-docs/flags/addaddress) 文档。

条件分解：

1. 按数据结构的大小缩放索引。现在它表示数据距离表开头的距离。
2. 使用表的起始地址并向其添加存储的值。现在此 Add Address 指向表中"玩家数据"的开头。
3. 从地址偏移 `0x08`，它读取玩家生命值的当前内存值，大小为 16 位，然后使用比较检查是否大于零。

## `Remember` 条件的更深层链接

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
| 9   | Reset If   | Mem  | 8-bit  | 0x00   | =   | Value  |      | 0xa7    | 0 (0) |

此示例展示了如何使用 `Remember` 继续 And Next 条件链，以及如何在链中记住新值而不影响链的早期部分或中断链。

在此示例中，我们通过将之前的 `Add Address` 示例与其他条件链接来构建它。假设这是一个挑战，如果玩家在持有某个对象时失去生命值就会失败。假设玩家数据在偏移 `0x24` 处存储对象的索引（如果未持有对象，其值为 `0xff`）。假设该索引是保存玩家数据的同一表的索引。此示例展示了完成此操作的重置链。假设对象数据的偏移 `0x00` 保存对象的 8 位 ID。

条件分解：

1. 按数据结构的大小缩放索引。现在它表示数据距离表开头的距离。
2. 使用表的起始地址并向其添加存储的值。现在此 Add Address 指向表中"玩家数据"的开头。
3. 检查玩家是否失去生命值，使用之前示例中建立的生命值偏移。
4. 重新使用玩家数据的起始地址
5. 检查持有对象的偏移并确保它不是 0xff。
6. 重新使用玩家数据的起始地址
7. 存储持有对象的索引乘以对象数据的大小，现在存储的值是对象数据所在表中的位置。
8. 使用对象表指针 + 对象在表中的位置
9. 读取对象的 ID，如果持有特定对象且链中的其他两个核心条件为真（玩家失去生命值且持有对象），则重置。

## 其他注意事项

### 与浮点数的交互

记住的值将匹配正在记住的数据类型。如果正在执行运算，第一个操作数通常确定类型，除法除外（第二个操作数确定类型）。如果需要强制将整数值存储为浮点数，可以执行以下任一操作：

| ID  | Flag     | Type  | Size | Memory | Cmp | Type | Size   | Mem/Val | Hits |
| --- | -------- | ----- | ---- | ------ | --- | ---- | ------ | ------- | ---- |
| 1   | Remember | Float |      | 0.0    | +   | Mem  | 16-Bit | 0x1234  |      |

| ID  | Flag     | Type | Size   | Memory | Cmp | Type  | Size | Mem/Val | Hits |
| --- | -------- | ---- | ------ | ------ | --- | ----- | ---- | ------- | ---- |
| 1   | Remember | Mem  | 16-Bit | 0x1234 | /   | Float |      | 1.0     |      |

### 整数溢出

当存储的值是整数时，执行的所有逻辑都限制为 32 位。如果总值超过 0xffffffff，将发生溢出，并且只有 32 个最低有效位将在比较中使用。

| ID  | Flag     | Type   | Size   | Memory | Cmp | Type       | Size   | Mem/Val | Hits |
| --- | -------- | ------ | ------ | ------ | --- | ---------- | ------ | ------- | ---- |
| 1   | Remember | Mem    | 32-bit | 0x8010 | +   | Mem        | 32-Bit | 0x8020  |      |
| 2   |          | Recall | >      | Value  |     | 0x30000000 | 0 (0)  |         |      |

如果 0x8010 是 0xc0000000 且 0x8020 是 0x54321abc，则总和将为 0x114321abc，超过 32 位并将被截断为 0x14321abc，不大于 0x30000000，因此逻辑将评估为 false。
