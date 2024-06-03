---
title: Understanding and Using Recall
description: Learn how to use the Recall operand type to represent a previously remembered value.
---

# `Recall`

_This feature will be available at the RA_Integration version 1.4 milestone for developers, with support to be added for rcheevos version 11.4 milestone._

A `Recall` value is the the last value stored by the [`Remember` Flag](/developer-docs/flags/remember)

The `Recall` accumulator's value is for the current frame's evaluation of logic. It does not persist between evaluations and does not maintain its value for use in a later evaluation. Each group (Core, Alt1, Alt2, etc) has its own separate `Recall` accumulator; a value remembered in one group therefore cannot be recalled in another group. Using `Recall` before a value is remembered in using the `Remember` condition will generate a warning in the asset editor.

Examples of how it can be used:

- Recall a calculated value for multiple uses in logic.
- Continuous operation on remembered values to perform more complicated math than `Add Source` and `Sub Source` can accomplish.
- Recall a calculated address+offset for use in `Add Address`

To use a remembered value, specify the `Recall` operator as the Type of operand:

| ID  | Flag | Type   | Size | Memory | Cmp | Type  | Size | Mem/Val | Hits |
| --- | ---- | ------ | ---- | ------ | --- | ----- | ---- | ------- | ---- |
| 2   |      | Recall |      |        | =   | Value |      | 0x05    |      |

In this snippet, the recalled value is compared for equality with a constant value of 5.
