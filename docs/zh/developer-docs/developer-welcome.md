---
title: 欢迎加入开发者团队
description: 欢迎新晋开发者，介绍如何上传成就集，以及开发者专属的各项权限。
---

# 欢迎加入开发者团队！

成为开发者后，想必你最关心的是如何上传成就集以及还有哪些权限对你开放。你在网站、模拟器和 Discord 服务器上都将拥有许多新功能，我们将在此逐一介绍。

加入团队意味着**新的责任和不活跃标准**，请务必在继续之前阅读 [开发者行为准则](/zh/guidelines/developers/code-of-conduct)。

[[toc]]

## 成就集管理

网站团队正在开发新的管理页面，所有开发者相关活动最终都将迁移至此。可通过 Dev 下拉菜单正上方的「Manage」按钮访问。

此页面用于编辑发布日期以及**拖拽排序**。

![通过管理站点查看的游戏页面示例](/management-site.png)

## 上传你的第一个成就集！

上传第一个成就集最快、最简便的方式是通过成就集的管理页面。在那里可标记要推广的成就，然后点击「Promote selected」即可一键推广全部！

要进入此页面，前往你的游戏页面：

1. 点击 Manage
2. 向下滚动直至看到成就列表
3. 如需重排，可点击 Start Reordering 按钮，然后拖拽成就
4. 勾选要推广的成就（若有不需要或已作废的成就请小心排除，否则直接点「All」）
5. 点击 Bulk promote or demote
6. 点击 Promote selected

![通过管理站点推广成就](/management-achievement-promotion.png)

## 成就新闻公告

成就集上线后，若你在 Discord 上，是时候向大家宣布了！

我们有一个便捷的机器人命令，只要成就集在核心中，即可自动生成模板。前往 #bot-spam 输入「!gan [gameid]」，其中 [gameid] 为游戏 ID。

#devs-chat 的置顶消息中有另一种颜色的模板可供使用。

可复制结果，将 @{AUTHOR_NAME} 替换为你的名字，发布到 #achievement-news 频道并 @Achievement-News 以吸引大家关注刚上线的热门成就集。

## 认领

成为开发者后，认领上限扩展为最多 4 个并发常规认领。只要没有未解决的工单，即可自由认领成就集。更多详情请参阅 [开发者指南的认领部分](/zh/guidelines/developers/claims-system)。

若游戏尚无页面，请参阅 [创建游戏页面与关联哈希](#creating-game-pages-and-linking-hashes) 获取指导。

## 成就集修订

成就集修订是让旧成就集跟上现代标准的重要一环。这是你确保网站质量得以维持的机会。投票通过 Discord 服务器的 #revision-voting 和 #revision-discussion 频道进行。毕业时默认会获得 @Revision-Voting 和 @Rescore 角色。

在考虑是否投票批准修订提案时，请熟悉讨论论坛置顶帖中概述的修订目标标准。修订的目标是将欠缺的成就集转变为高质量、现代化的成就集，理想情况下不再需要后续修订。参与修订提案投票是重要责任，所有开发者都应认真对待并参与，以保障 RetroAchievements 项目的长期健康发展。

提出修订时，需联系相关成就集的所有活跃作者。若希望选择不被联系，请使用[此表单](https://forms.gle/mgzv7RHbJEPCrxc77)。

有关如何提出修订的详情，请参阅 [成就集修订](/zh/guidelines/content/achievement-set-revisions)

若考虑请求重新指定作者，请联系 DevCompliance 获得批准。重新指定作者的请求不应包含在修订提案中。

若希望将部分或全部先前成就的获得者转移过来，需联系 RAdmin 或 Discord 的 #cleanup-admin 寻求协助。

请求需包含游戏及完整的成就转移列表，格式为 旧 ID -> 新 ID

示例：

https://retroachievements.org/game/990

转移游戏 990 的获得者：

11702 -> 175183

11709 -> 175184

以此类推...

## 模拟器更新

你现在将拥有模拟器中的若干新权限。

### 创建游戏页面与关联哈希

最大的新权限是现在可以通过在 RA 模拟器中加载游戏来将新哈希关联到游戏。

若创建新页面，选择「New Title」并在文本框中输入适当名称。检查是否有可回收的标为「~Z~ No Hash」的垃圾页面。

::: info
延伸阅读：

[游戏标题指南](/zh/guidelines/content/game-info-and-hub-guidelines#game-titles)

[ROM 改版成就](/zh/guidelines/content/achievements-for-rom-hacks)

[子集](/zh/guidelines/content/subsets)

[使用正确的 ROM](/zh/guidelines/content/working-with-the-right-rom)
:::

![使用未识别哈希创建游戏页面](/game-page-creation.png)

### 代码注释

你现在可以覆盖和删除任何现有代码注释。注意不要无故覆盖他人的注释，若在改进或修正注释，则属于可接受的理由。

### 成就

开发者可直接在核心中发布成就变更，无需先降级到 Unofficial。

你现在可以自由通过模拟器将成就从 Unofficial 和 Core 之间推广或降级，但通过网站操作会更方便。

## 网站更新

你现在可以访问网站上更多工具来辅助开发工作。

### 想要开发的游戏

开发者可将游戏添加到「想要开发」列表。可通过游戏页面上的 Dev 下拉框添加成就集。

![Want to Develop Games 按钮](/want-to-develop.png)

### 游戏页面

#### 创建论坛主题

认领成就集时，不再需要单独创建论坛主题。Make Claim 按钮会自动为你创建论坛主题（若尚不存在）。

请注意，不应在没有正当理由（如认领成就集）的情况下创建论坛主题。否则，除管理员外，只有你能编辑顶帖，而顶帖通常放置重要信息，如支持的游戏文件或成就集说明。

#### Dev 菜单

你现在拥有 Dev 下拉菜单的完整访问权限。

- **Manage Core/Unofficial Achievements**：成就的推广/降级、类型和排序

- **Manage Leaderboards**：排行榜条目的重置、排序和删除

  - 在编辑或重置非自己成就集的排行榜条目前，请阅读 [编辑排行榜](/zh/guidelines/content/editing-leaderboards)

- **Manage Hashes**：编辑哈希标签、编辑 RAPatches URL、解除哈希关联

- **Subscribe to Tickets**：若决定处理不活跃开发者的成就集并希望跟踪未来工单，很有用

- **Want to Develop**：在「想要开发」列表中添加/移除游戏

![Dev 菜单](/dev-menu.png)

#### 添加 Hub 和关联游戏

可通过输入页面 ID 并点击「Add」将 Hub 和关联游戏添加到游戏页面。由 DevCompliance、QA 和 Art 团队管理的 Hub 不应自行添加/移除，请向相应团队发送消息。

![关联的 Hub 和关联游戏](/add-related-games.png)

## Discord 频道

你现在可以访问若干新 Discord 频道：

- **#developer-news**

- **#devs-chat**

- **#devs-help**

- **#ticket-discussion**

- **#ratools**

- **#revision-voting**

- **#revision-discussion**

## 开发者活动！

有若干仅限开发者参与的活动，各有专属 Discord 频道：

- [Rollouts](/zh/developer-docs/rollouts)

- [DevQuests](/zh/developer-docs/devquests)

- [DevJam](/zh/developer-docs/devjam)：为未获得 Rollout 的系统发布成就集

- [Beaten Into Completion](https://retroachievements.org/viewtopic.php?t=23062)：为缺少 Beat 标准的成就集添加进度成就

- [House Cleaning](https://retroachievements.org/viewtopic.php?t=20882)：解决或关闭不活跃开发者工单
