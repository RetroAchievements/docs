---
title: 如何成为成就开发者
description: 成为 RetroAchievements 开发者的分步指南，包括所需知识、规划和最佳实践。
---

# 如何成为成就开发者

本文档旨在提供有关如何[加入初级开发者计划](/zh/developer-docs/jr-dev-rules)的指导，并解释一些有助于成就集开发的有用信息。

**只要付出努力，任何人都可以成为 RetroAchievements 开发者。**

初级开发者**必须**加入 RetroAchievements Discord 服务器。该服务器是初级开发者计划的管理所在地。如果你已经知道要开发哪款游戏，可以在 `#role-request` 论坛中创建标记为 `Jr-Dev` 的帖子，发布你的游戏成就集计划（可使用这些[模板](https://docs.google.com/spreadsheets/d/1VC2phJ9AUcZK5Ll4bVuMpJXED8QdM_nw8OdSAuLc3bI/edit)之一），并 @Code-Reviewer 以申请成就集计划批准和初级开发者计划入门。

如果尚未完成，请务必先按照 `#welcome` 中的说明验证你的账户。

## 寻找要开发的游戏

遵循[开发者行为准则](/zh/guidelines/developers/code-of-conduct#working-on-empty-sets)中的指南寻找游戏。在开发成就之前，确保游戏符合[规则与限制](/zh/developer-docs/jr-dev-rules#rules-and-restrictions)。

## 规划你的成就集

找到要开发的游戏后，你需要规划成就集。在网站上认领游戏之前，初级开发者必须在 `#jr-devs-requests` 中提交成就集计划以供批准。

确保你对游戏有足够了解以制定良好的成就集。查阅 GameFAQs、维基，观看长流程视频，尝试了解更多关于游戏、其秘密和细节的信息。

建议将你的计划发布在游戏官方论坛主题中，以便社区留下建议和反馈。

**重要！：保持开放心态接受反馈和建议。**

**另见**：[成就设计](/zh/developer-docs/achievement-design)。这是关于如何设计优秀且有趣成就的详尽指南。它不涉及技术方面，而是概念方面。

## 认领游戏并开始开发

一旦成就集计划获得代码审查者批准，初级开发者即可认领游戏并开始开发。要认领游戏，该游戏必须有论坛主题。如果还没有，你可以在 Discord 服务器的 `#jr-devs-requests` 中请代码审查者创建一个。

我们建议使用请求数不超过 10 个的游戏开发你的第一个成就集。这使你能够专注于学习过程并提升技能，因为初始成就集通常需要迭代改进。较小的受众也有助于管理初始支持请求，避免工单突然激增。

## 所需知识

每位开发者至少必须了解以下两份文档中展示的基本概念和技巧：

1. [作为成就开发者入门](/zh/developer-docs/getting-started-as-an-achievement-developer)
2. [Achievement Logic Features](/orphaned/achievement-logic-features)

初级开发者计划毕业生必须证明在以下概念方面具备熟练度：

- 扎实的[成就集设计](/zh/developer-docs/achievement-design)
- 使用[内存检查器](/zh/developer-docs/memory-inspector)进行 RAM 挖掘
- 适当的成就集呈现和[写作](/zh/guidelines/content/writing-policy)
- 在有限监督下制作高质量、稳定的成就集

建议学习的初始主题：

- [十六进制表示法](/zh/developer-docs/memory-inspector#decimal-binary-and-hexadecimal-notations)
- [Mem/Delta 关系](/zh/developer-docs/delta-values)
- 各种内存大小
- [命中次数](/zh/developer-docs/hit-counts)
- [`ResetIf`](/zh/developer-docs/flags/resetif)
- [备选组](/zh/developer-docs/alt-groups)
- [`PauseIf`](/zh/developer-docs/flags/pauseif)
- 除 `=` 之外的成就逻辑比较，如 `>`、`<`、`!=`
- [为成就创建准确的描述](/zh/guidelines/developers/code-of-conduct#basic-achievement-design-guidelines)
- 添加适当的[保护](/zh/developer-docs/getting-started-as-an-achievement-developer#important-tips)
- 将命中次数用作计时器（如[此示例](/zh/developer-docs/real-examples/using-hit-counts-as-a-timer)和[此示例](/zh/developer-docs/real-examples/creating-a-timer-with-reset-if-hits-based-on-the-speed-of-the-game)）
- [ResetIf 检查点](/zh/developer-docs/achievement-templates#finish-level-n-without-dying)
- [AddSource](/zh/developer-docs/flags/addsource) 和 [SubSource](/zh/developer-docs/flags/subsource) 标志
- [AddHits 和 SubHits 标志](/zh/developer-docs/flags/addhits-subhits)
- [递增计数器（Mem > Delta 计数器）](/zh/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)
- [Delta 命中计数器，暂停技巧](/zh/developer-docs/achievement-templates#check-for-a-specific-value-changing-to-another-specific-value-ten-times)
- [小端序](/zh/developer-docs/memory-inspector#endianness)
- 内存大小：[Lower4、Upper4](/zh/developer-docs/memory-inspector#upper4-and-lower4) 和 [16 位、32 位](/zh/developer-docs/memory-inspector#_16-and-32-bit-mode)
- 动态 [Rich Presence](/zh/developer-docs/rich-presence)
- [排行榜](/zh/developer-docs/leaderboards)

[实际示例](/zh/developer-docs/real-examples)和[成就模板](/zh/developer-docs/achievement-templates)页面是了解这些技巧如何运作的有用资源。

## 请求代码审查

创建成就集后，将其发布到 Unofficial，然后在 `#jr-devs-requests` 中创建帖子。遵循[请求代码审查](/zh/developer-docs/jr-dev-rules.html#code-review-requests)的所有要求。

## 我何时会被晋升为开发者？

代码审查者负责确保初级开发者计划的毕业生将成为有价值的 RetroAchievements 开发者。成为开发者不是权利也不是资格。对于项目的健康发展而言，开发者需要技能娴熟、值得信赖、善于团队合作，并能在很少或无需监督的情况下制作高质量成就集，这一点很重要。

代码审查团队将主要根据以下标准的评估来决定是否让初级开发者毕业：

- 其发布的作品达到或超过[开发者行为准则](/zh/guidelines/developers/code-of-conduct)标准的能力
- 作品的质量和复杂度
  - 高质量定义为扎实的成就集设计、写作、徽章、代码注释和成就逻辑
- 他们在规划和开发成就方面投入的时间和思考
- 表现出谨慎和负责任地使用开发者身份的意愿
