---
title: 多碟游戏
description: 在 RetroArch 中处理多碟 PlayStation 游戏的综合指南，包括换碟说明。
---

# 多碟游戏

## m3u 文件

在 PlayStation 上换碟需要为你的碟片创建播放列表文件（.m3u）。这可能听起来令人生畏，但实际上非常简单。

**步骤 1：** 将你的 .bin 和 .cue 文件放在所需位置。

**步骤 2：** 打开记事本

**步骤 3：** 输入你的 .cue 文件名称，_完全_按照文件上的命名。完成后，你的文本文档应类似这样：

![Prepare .cue playlist](/prepare-cue-playlist.png)

完成后，将文本文档保存在与游戏碟片相同的位置，名称随意。

**步骤 4：** 重命名文档，将扩展名从 .txt 改为 .m3u

![Rename document](/rename-document.png)

**注意：** 如果看不到文本文档标题末尾的 .txt 扩展名，需要更改设置以显示已知文件扩展名。在 Windows 10 中很简单，可以在文件夹的「查看」下找到，有一个显示「文件扩展名」的复选框

![RALibretro filename extensions](/ralibretro-filename-extensions.png)

完成了！简单吧？从此以后，当你启动游戏时，使用你刚创建的 .m3u 文件加载游戏。

**注意：** 如果你已经玩过游戏的第一碟并发现存档不见了，可以通过导航到模拟器的「saves」文件夹，找到第一碟的存档并将其重命名为与创建的 .m3u 匹配来恢复。例如：

'Metal Gear Solid (v1.1) (Disc 1).mcr' > 'Metal Gear Solid (v1.1).mcr'

## 在 RAlibretro 中换碟

在 RAlibretro 中换碟时，当游戏提示时，进入文件菜单并按以下步骤操作

![Change to disc 2 in RAlibretro](/mgs-disc2.png)

**步骤 1：** 文件 > CD-ROM > 打开托盘

**步骤 2：** 文件 > CD-ROM > 所需碟片

**步骤 3：** 文件 > CD-ROM > 关闭托盘

完成！

## 在 RetroArch 中换碟

你可以在 RetroArch 的「Quick Menu > Disk Control」下找到该选项

![Retroarch disk control](/ra-disk-control.png)

![Retroarch disk options](/ra-disk-options.png)

**步骤 1：** 选择「Disk Cycle Tray Status」（注意：如果开启了「Pause when menu activated」选项，需要先关闭再打开菜单，这样游戏才能知道碟片托盘已打开）

**步骤 2：** 选择「Disk Index」（左右切换碟片）

**步骤 3：** 再次选择「Disk Cycle Tray Status」

完成！
