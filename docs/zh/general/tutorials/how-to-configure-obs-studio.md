---
title: 如何配置 OBS Studio 以显示成就弹窗
description: 学习如何配置 OBS Studio 以捕获 RetroAchievements 弹窗。
---

# 如何配置 OBS Studio 以显示成就弹窗

在「窗口捕获」模式下，OBS Studio 无法捕获弹窗。弹窗使用「分层窗口」渲染，OBS Studio 已移除对捕获分层窗口的支持。

如果你想在直播中包含弹窗，有两个选择：切换到「显示器捕获」模式，或为「TransparentOverlayWindow」添加第二个「窗口捕获」。本页将指导你完成第二种方式。

向场景添加第二个「窗口捕获」源。在弹窗对话框中，选择「TransparentOverlayWindow」。

![Add second "Window Capture"](/obs-add-second-window-capture.png)

你可能会注意到窗口是粉色的。

![Pink overlay](/obs-pink-overlay.png)

为第二个「窗口捕获」添加滤镜

![Add filter](/obs-add-filter.png)

添加「色度键」滤镜，将键颜色类型设置为「自定义颜色」，然后使用选择颜色对话框输入 `#FF01FE` 作为颜色。将相似度降至 1，不透明度降至 90。

![Color Key properties](/obs-color-key-properties.png)

最后，如果仍有少量粉色边框显示，启用缩放滤镜。它们似乎都能消除残留，选择你喜欢的即可。

![Scale Filter](/obs-scale-filter.png)
