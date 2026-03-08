---
title: 成就开发综合指南
description: 深入了解成就创作的方方面面，本详细指南涵盖基本概念、编辑器工具、保护方法、逻辑技巧、鲜为人知的功能等。
---

# 成就开发概述

## 简介

本页面仍在大力开发中，目标是深入探讨成就创作。可能会将「实际示例」合并到本节。每个标志、类型、大小、比较等都将有独立页面展示其各种用法。还将包含若干技巧、案例研究等。

## 基础

- 向数据库添加游戏
  - 关于哈希的一切（你想知道但不敢问的）
  - 补丁指南
- RAM 挖掘
  - 利用 Game Genie、Game Shark、Codebreaker、Action Replay 等金手指码
- 代码注释
  - 格式规范

## 成就编辑器

开发者可使用多种工具和选项。正确使用它们将提升成就集的质量。这些工具/选项可在成就编辑器中使用：

![achievement_editor](/achievement-editor.png)

### 标志

- <a name="pauseif"></a>[`PauseIf` 标志](/zh/developer-docs/flags/pauseif)

  - <a name="pauseif-with-hit-counts"></a>[带命中次数的 `PauseIf`](/zh/developer-docs/flags/pauseif#pauseif-with-hit-counts)

- <a name="resetif"></a>[`ResetIf` 标志](/zh/developer-docs/flags/resetif)

  - <a name="resetif-with-hit-counts"></a>[带命中次数的 `ResetIf`](/zh/developer-docs/flags/resetif#resetif-with-hit-counts)

- <a name="resetnextif"></a>[`ResetNextIf` 标志](/zh/developer-docs/flags/resetnextif)

- <a name="addsource"></a>[`AddSource` 标志](/zh/developer-docs/flags/addsource)

- <a name="subsource"></a>[`SubSource` 标志](/zh/developer-docs/flags/subsource)

  - <a name="checking-for-a-negative-result"></a>[检查负结果](/zh/developer-docs/flags/subsource#checking-for-a-negative-result)

- <a name="addhits"></a>[`AddHits` 和 `SubHits` 标志](/zh/developer-docs/flags/addhits-subhits)

- <a name="addaddress"></a>[`AddAddress` 标志](/zh/developer-docs/flags/addaddress)

- <a name="andnext"></a>[`AndNext` 和 `OrNext` 标志](/zh/developer-docs/flags/andnext-ornext)

- <a name="measured"></a>[`Measured` 和 `MeasuredIf` 标志](/zh/developer-docs/flags/measured)

- <a name="trigger"></a>[`Trigger` 标志](/zh/developer-docs/flags/trigger)

### 类型

- Mem
- Value
- Delta
  - `Mem > Delta` 比较
- Prior
- BCD
- Float

### 大小

- bit0 - bit7
- 8-Bit
- 16-Bit
- 24-Bit
- 32-Bit
- Lower4 和 Upper4
- 16-Bit BE
- 24-Bit BE
- 32-Bit BE
- BitCount
- Float
- MBF32

### 通用比较

- `=`
- `<`
- `<=`
- `>`
- `>=`
- `!=`

### 标志专用比较

- `*`
- `/`
- `&`

### 其他工具包功能

- 命中次数
  - 与 `ResetIf` 配合使用
  - 与 `PauseIf` 配合使用
- Alt Groups（备选组）

## 保护

- 演示保护
  - 查找和测试演示地址
- 存档保护
  - Delta 和 Prior
  - 使用游戏内计时器
  - 使用事件标志
- 密码保护
- 作弊保护
- 多人游戏保护
- 其他
  - Dipswitch
  - BIOS（PlayStation 和 Saturn）

## 逻辑技巧

- 检查点命中
- 暂停锁定
- 使用命中次数作为计时器
- 使用 Delta 值和命中次数检测增量
- 规避同一帧内计数器递增两次的问题
  - `注意：需补充工具包在 BCD 值下仍使用十六进制的内容`
- 各类链式条件
- 何时使用 `ResetIf` 或 `PauseIf`
- 何时使用 Delta 或 Prior
- 使用 BitCount 统计收集物
- 在 `Mem / Mem` 比较中使用 `AddSource`
- 根据游戏速度用 `ResetIf` 命中创建计时器
- 使用 `bit0` 包含或排除奇数值

## 鲜为人知的功能

- 在 8 位视图中双击位标志
- 在编辑器中右键点击地址可跳转到内存查看器（也支持通过偏移跳转到当前地址）
- 选中多个条件并按住 CTRL 点击可同时修改多个条件中的同一字段

## 工作流技巧

- 使用 Google Sheets 和 Notepad++
- 编辑本地文件

## 应避免的做法及原因

- 冗余的 `ResetIf`
- 单条件成就
- 基于文本的地址

## 另见

- 分数分配
- 徽章创作
- Rich Presence
- 排行榜
- RATools
- 制作教程视频
- 语法表
