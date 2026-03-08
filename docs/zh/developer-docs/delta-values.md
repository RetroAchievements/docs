---
title: 成就开发中的 Delta 值使用
description: 学习如何在成就开发中使用 Delta 值来检测帧之间的变化，例如关卡提升和伤害检测。
---

# `Delta` 值

`Delta` 值是上一帧的值。**注意**：使用 `Delta` 时，隐含的是您引用的是地址而非数值。

使用示例：

- 检测关卡是否提升：`mem level > delta level`。表示“当前关卡大于上一帧的关卡”。
- 检测伤害：`mem health < delta health`。表示“当前生命值小于上一帧的生命值”。或者您可以将上一帧的值作为条件。`delta health = 1` 表示“成就触发时，上一帧的生命值必须为 1”。

在[实际示例](/zh/developer-docs/real-examples)部分有一些很好的例子：

- [使用 Hit Counts 作为计时器](/zh/developer-docs/real-examples/using-hit-counts-as-a-timer)
- [使用 Delta 值和 Hit Counts 检测增量](/zh/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)

另见：[我真的需要使用 Delta 吗？](/zh/developer-docs/why-delta)
