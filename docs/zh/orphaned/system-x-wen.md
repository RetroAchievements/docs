---
title: 系统 X 什么时候支持？
description: 了解为新系统添加 RetroAchievements 支持所需的技术步骤，包括模拟、游戏识别和服务器配置。本文解释了在支持新系统之前需要做些什么。
---

# 系统 X 什么时候支持？

::: warning 你是模拟器开发者吗？

[rcheevos](https://github.com/RetroAchievements/rcheevos) 是我们的模拟器集成库。我们有一份实用的[集成指南](https://github.com/RetroAchievements/rcheevos/wiki/rc_client-integration)，如果你希望为你的模拟器添加 RetroAchievements 支持，可能会对你有所帮助。

:::

_本文最初发布于 [RANews - 2020 年 11 月刊](https://news.retroachievements.org/issues/2020-11/nerd-corner)_

## 简介

关于下一批可支持成就的系统，似乎有很多猜测。随着[最近公布的 PS2 核心](https://twitter.com/libretro/status/1322711254826471424)，出现了很多关于是否/何时支持它的问题。如果你只关心这个问题的答案，请跳到[文章末尾](#when-will-ra-support-playstation-2)。但如果你想了解添加新系统支持究竟需要什么，请继续阅读。

## 要求

以下是为新系统添加 RetroAchievements 支持所需的条件：

1. 模拟（最好是 libretro 核心）。
   - 核心必须暴露内存。
   - 核心必须能在 RALibretro 中运行。
2. 游戏的唯一识别。
3. 服务器支持。

### 步骤 1：模拟

第一步显然是要有一个用于待支持系统的模拟器。

在 RetroAchievements 的早期，我们使用独立模拟器——每个系统一个。保持所有这些模拟器无 bug 且持续更新需要大量精力，而我们在这方面没有足够的程序员参与。

目前首选使用 [libretro 核心](https://www.retroarch.com/?page=cores)进行模拟。这样核心开发者可以推送新功能，而我们可以专注于成就功能。核心可以更新和发布，无需我们做额外工作。

另一个巨大的优势是 libretro 核心也可以在 [RetroArch](https://www.retroarch.com/) 中运行，这使得 RetroAchievements 可以在许多平台上获取（独立模拟器全部都是仅限 Windows 的应用程序）。

**管理方**：libretro 核心开发者。

#### 步骤 1a：暴露内存

由于成就触发器是一系列监视模拟 RAM 中事件的条件，另一个要求是能够访问系统的 RAM。

如果没有暴露的内存，[内存检查器](/zh/developer-docs/memory-inspector)将显示为空白，成就创建者将无法创建成就。

此外，由于 RetroAchievements 每帧只读取一次内存，一些大量使用[分页内存](https://en.wikipedia.org/wiki/Paging)的系统必须提供某种方式来访问全部内存，而不仅仅是当前的内存页。

**管理方**：libretro 核心开发者，需与 RetroAchievements 开发者进行一些交互。

#### 步骤 1b：RALibretro

核心必须能在 RALibretro 中运行，因为这是成就开发者识别重要内存片段并创建成就的地方。

这通常只在核心依赖 RALibretro 尚未实现的某些功能时才会成为问题（如最近添加的键盘和 OpenGL 3D 支持），但有些问题是由 RALibretro 的实现与 RetroArch 的实现存在显著差异造成的。除非核心可以修改为不需要缺失的功能，否则在 RALibretro 更新之前无法支持该核心。

[此页面](/zh/general/emulator-support-and-issues)列出了每个核心最近一次测试时的状态。

**管理方**：RetroAchievements

### 步骤 2：游戏识别

我们必须能够唯一识别该系统的游戏。

我们使用一种名为 [MD5](https://en.wikipedia.org/wiki/MD5) 的方法，它会扫描游戏文件并生成一个我们通常称为"哈希值"的数字。通过这个数字，可以确认两个文件副本是否相同，从而确保玩家使用的 ROM 与成就设计或测试时使用的相同。

对于大多数系统，我们直接对整个 ROM 文件进行哈希计算，去除任何头部信息。对于较大的游戏（特别是 CD 或 DVD 上的游戏），我们只对我们认为最重要的数据进行哈希计算，以最小化加载时间。关于我们如何识别游戏的更多信息，请参见[此处](/zh/developer-docs/game-identification)。

对于使用可写入介质的系统（主要是家用电脑），我们必须确保不对可能被游戏本身修改的文件进行哈希计算。写入游戏文件的系统必须将原始磁盘文件视为只读，只将更改写入磁盘的副本。如果核心/模拟器修改了磁盘文件，它将无法再被识别，因此不能被视为适用于成就的可行方案。

**管理方**：RetroAchievements

### 步骤 3：配置 Web 服务器

为了支持新系统，RetroAchievements 的 Web 服务器必须正确配置以接受该系统的新游戏和成就条目。

**管理方**：RetroAchievements

### RA 何时支持系统 X？

[此页面](/zh/general/emulator-support-and-issues)列出了每个核心最近一次测试时的状态。
