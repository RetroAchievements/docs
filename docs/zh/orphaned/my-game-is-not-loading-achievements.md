---
title: 成就加载问题排查
description: 了解如何解决 RetroAchievements 成就无法加载的问题，包括检查 ROM 兼容性和查找 ROM 哈希值。
---

# 我的游戏没有加载成就

也许你加载了游戏但看到了这样的弹窗：
![no achievements 1](/docs-not-loading1.jpg)
然后你检查了覆盖层（通常按 ESC）并看到：
![no achievements 2](/docs-not-loading2.png)

或者你收到了这些消息：

![nocheevos](/docs-not-loading3.png)

和

![nocheevos2](/docs-not-loading4.png)

当出现上述任何一种情况时，要么你的游戏还没有成就，要么更可能的原因是你使用了错误的 ROM。

为了确认，请搜索游戏名称并检查匹配结果。
![search](/search-the-site.png)

如果你的游戏有成就但你的 ROM 不在我们的系统中，你需要找到正确的 ROM 或为你的 ROM 寻求支持。

## 如何知道我的 ROM 是否兼容？

如果你的 ROM 与网站上关联的校验和/哈希值相同，那么它就是兼容的。

**注意**："校验和"或"哈希值"是用于确认两个文件副本是否相同的数字。在 RA 上，我们使用它来确保玩家使用的 ROM 与成就开发者使用的相同。

有 _两种_ 方式可以检查与游戏关联的校验和/哈希值：

### 检查游戏的关联哈希值页面

以 [Super Mario Bros.](https://retroachievements.org/linkedhashes.php?g=1446) 为例

你可以通过点击游戏页面"更多信息"部分中的"Hashes linked to this game"按钮来访问此页面。

![link to linked hashes page](/hashes-linked-to-game.png)

它会将你带到如下页面：

![list of linked hashes](/list-of-linked-hashes.png)

### 检查游戏官方论坛帖子的置顶帖

链接可以在游戏页面成就列表底部或"更多信息"部分找到。以 [Super Mario Bros.](https://retroachievements.org/viewtopic.php?t=282&c=2233) 为例：

![forum](/forum.png)

![forum 2](/official-forum-topic.png)

游戏官方论坛帖子的第一篇帖子通常会列出该游戏的有效 ROM 以及 ROM 的校验和。

如果你的 ROM 名称和校验和尚未列出，你需要提出请求（**请不要请求下载 ROM 的链接**，只需提供文件名和校验和）。你可以在游戏论坛页面提交请求，或在 [Discord](https://discord.gg/dq2E4hE) 或首页网站聊天中寻求帮助。

一旦你提交了请求，开发者会审核并确保其正常工作。然后他们会将哈希值添加到"兼容哈希值页面"。

## 如何查找你的 ROM 校验和：

在菜单栏中选择 `RetroAchievements` > `Get ROM Checksum`

![checksum](/rom-checksum.png)

关于校验和与哈希值的更多详情，请阅读：https://datacrystal.romhacking.net/wiki/Hashes
