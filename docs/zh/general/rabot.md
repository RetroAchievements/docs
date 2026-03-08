---
title: RABot
description: 了解 RABot，官方 RetroAchievements Discord 机器人，探索其提供的实用命令。
---

# RABot，RA Discord 机器人

RABot 是官方 RetroAchievements Discord 机器人。因此，要与之交互，你需要成为 [RA Discord 服务器](https://discord.gg/dq2E4hE) 的成员。

RABot 有许多酷炫实用的命令，本页将展示其中一些的使用示例。

RABot 由 [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)、[Node.js](https://nodejs.org/)、[discord.js](https://discord.js.org/) 和 [Commando](https://discord.js.org/#/docs/commando/master/general/welcome) 驱动。

**特别感谢**：[DragonFire 的 Xiao 机器人](https://github.com/dragonfire535/xiao/) 是 RABot 中许多酷炫命令的重要灵感来源，如 [`!bulbapedia`](#bulbapedia)、[`!manga`](#manga)、[`!translate`](#translate)、[`!define`](#define) 等。

## 获取帮助

### `!help`

此命令让 RABot 发送包含可用命令列表的私信。

如需特定命令的帮助，使用 `!help command_name`。

### `!docs`

提供 RetroAchievements 文档链接。

![docs](/rabot-docs.png)

![docs1](/rabot-docs1.png)

### `!rarch`

提供 RetroArch 的基本信息。

![rarch](/rabot-rarch.png)

### `!rules`

显示规则或特定规则。

![rules](/rabot-rules.png)

### `!about`

显示 RABot 的信息。

![about](/rabot-about.png)

### `!panic`

网站宕机时该怎么办。

![panic](/rabot-panic.png)

## 创建投票

### `!poll`

创建简单投票。人们可以通过添加反应来投票，也可以使用未列出的反应投票。若你对更高级、正式的投票感兴趣，请参阅 [`!tpoll`](#tpoll)。

![poll](/rabot-poll.png)

### `!tpoll`

创建限时投票。在此类投票中，只有第一个反应被视为投票，若人们使用未列出的反应投票则作废。

![tpoll](/rabot-tpoll.png)

## 数字处理

### `!hex`

将非负整数从十进制（或二进制）转换为十六进制（或反之）。

![hex](/rabot-hex.png)

### `!bin`

将非负整数从十进制（或十六进制）转换为二进制（或反之）。

![bin](/rabot-bin.png)

### `!calculator`

**别名**：`!calc`

计算给定的数学表达式并返回结果。

![calculator](/rabot-calculator.png)

## 获取 RetroAchievements.org 信息/链接

### `!ragame`

**别名**：`!game`

在 RetroAchievements.org 上搜索游戏并显示链接。

![ragame](/rabot-ragame.png)

### `!tickets`

返回给定游戏名称的未解决工单页面 URL。

![tickets](/rabot-tickets.png)

### `!whatgame`

**别名**：`!wg`

随机返回一个有成就的游戏。

![whatgame](/rabot-whatgame.png)

![whatgame1](/rabot-whatgame1.png)

### `!whatcheevo`

随机返回一个成就。

## 随机趣闻

### `!funfact`

返回复古游戏趣闻。

**注意**：你可以[在此](https://github.com/RetroAchievements/RABot/issues/2)建议更多趣闻条目。

![funfact](/rabot-funfact.png)

### `!memefact`

**别名**：`!meme`

返回 RetroAchievements 梗趣闻。

**注意**：你可以[在此](https://github.com/RetroAchievements/RABot/issues/6)建议更多梗趣闻条目，但请牢记这两条简单规则 **1)** 你不能建议自己的引用；**2)** 建议引用时，务必获得作者和/或被提及者的同意。

![memefact](/rabot-memefact.png)

## 获取游戏相关信息

### `!gamefaqs`

**别名**：`!gamefaq`、`!gfaq`

在 GameFAQs 上搜索游戏并显示链接。

![gamefaqs](/rabot-gamefaqs.png)

### `!longplay`

**别名**：`!lplay`、`!lp`

在 YouTube 上搜索长流程视频并发布链接。

![longplay](/rabot-longplay.png)

### `!vgmaps`

**别名**：`!vgmap`

在 vgmaps.com 上搜索电子游戏地图。

![vgmaps](/rabot-vgmaps.png)

### `!howlongtobeat`

**别名**：`!hltb`

在 howlongtobeat.com 上搜索游戏并显示链接。

![howlongtobeat](/rabot-howlongtobeat.png)

## 杂项

### `!define`

**别名**：`!dictionary`、`!dict`

定义单词。

![define](/rabot-define.png)

### `!translate`

**别名**：`!tr`

将文本翻译成特定语言。**由 <https://translate.yandex.com/> 提供支持**

![translate](/rabot-translate.png)

![translate1](/rabot-translate1.png)

### `!urban`

使用 Urban Dictionary 定义单词。

![urban](/rabot-urban.png)

### `!wikipedia`

**别名**：`!wp`

在 Wikipedia 上搜索你的查询。

![wikipedia](/rabot-wikipedia.png)

### `!youtube`

**别名**：`!yt`

在 YouTube 上搜索视频并发布找到的第一个。

![youtube](/rabot-youtube.png)

### `!bulbapedia`

在 Bulbapedia 上搜索你的查询。

![bulbapedia](/rabot-bulbapedia.png)

### `!movie`

在 TMDB 上搜索你的查询，获取电影结果。

![movie](/rabot-movie.png)

### `!manga`

在 AniList 上搜索你的查询，获取漫画结果。

![manga](/rabot-manga.png)

### `!anime`

在 AniList 上搜索你的查询，获取动漫结果。

![anime](/rabot-anime.png)
