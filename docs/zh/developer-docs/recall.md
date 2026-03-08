---
title: 理解和使用 Recall
description: 了解如何使用 Recall 操作数类型表示之前记住的值。
---

# `Recall`

::: warning 版本说明
此功能将在 RA_Integration 1.4 版本中向开发者开放，rcheevos 11.4 版本将添加支持。
:::

`Recall` 值是 [`Remember` 标志](/zh/developer-docs/flags/remember)存储的最后一个值。

`Recall` 累加器的值用于当前帧的逻辑求值。它不会在求值之间持久化，也不会为后续求值保留其值。每个组（Core、Alt1、Alt2 等）都有各自独立的 `Recall` 累加器；因此在一个组中记住的值无法在另一个组中召回。在使用 `Remember` 条件记住值之前使用 `Recall` 会在资源编辑器中生成警告。

使用示例：

- 召回计算值以在逻辑中多次使用。
- 对记住的值进行连续运算，以完成比 `Add Source` 和 `Sub Source` 更复杂的数学运算。
- 召回计算出的地址+偏移量以在 `Add Address` 中使用。

要使用记住的值，将 `Recall` 操作符指定为操作数的 Type：

| ID  | Flag | Type   | Size | Memory | Cmp | Type  | Size | Mem/Val | Hits |
| --- | ---- | ------ | ---- | ------ | --- | ----- | ---- | ------- | ---- |
| 2   |      | Recall |      |        | =   | Value |      | 0x05    |      |

在此片段中，召回的值与常量 5 进行相等比较。
