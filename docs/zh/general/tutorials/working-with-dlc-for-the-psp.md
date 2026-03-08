---
title: 处理 PlayStation Portable 的 DLC
description: 学习如何在 PPSSPP 中安装和管理 PlayStation Portable 游戏的 DLC，包括标准、基于存档的 DLC 和更新。
---

# 处理 PlayStation Portable 的 DLC

各种 PlayStation Portable 游戏支持 DLC 内容。根据游戏不同，可能以不同格式提供，安装流程也不同。

## 标准

传统（通常为付费）DLC 由 PlayStation Store 安装到游戏目录中。大多数情况下，这包括一个或多个 edat 文件和一个 param.pbp。有时还需要更多文件或目录。如果你已有此格式的解密 DLC，请按原格式放置在 saves/PSP/GAME/<game_id\>/ 中。游戏 ID 必须与你游玩的游戏区域匹配。例如，Dissidia 012 美版使用 ULUS10566，欧版使用 ULES01505。对于从真机转储数据的用户，需要使用自制固件和 npdecrypter 插件来解密 DLC 为 PPSSPP 可用的格式。更多信息请参阅插件的 readme。

## 存档文件

许多游戏以游戏的额外存档文件形式分发（通常为免费）DLC。这些有各自特定命名的目录，放置在 saves/PSP/SAVEDATA/ 中你的游戏存档旁边。在少数罕见情况下，使用此方法的游戏可能有多组无法同时安装的 DLC。对于从真机转储数据的用户，只需从记忆棒复制到相同位置即可。简单明了。尽管此类 DLC 是免费的，我们认为我们没有合法权利自行分发，所以请不要询问。

## 更新

这可能有点复杂。目前应用更新的唯一方式往往是在真机上解密后，将更新打补丁到 iso 本身。这很麻烦且不理想，但目前没有其他办法。你需要使用 UMDGen 等工具打开 iso，在 usrdir 中插入/替换更新的文件。具体的每款游戏操作说明超出本指南范围。值得注意的是，Little Big Planet 和 Bleach: Heat the Soul 7 的 DLC 需要此步骤才能使用，其他游戏可能也需要。希望未来可以跳过此步骤。

更多信息：https://github.com/hrydgard/ppsspp/issues/12344

## Killzone Liberation

此游戏的最终章节仅作为 DLC 提供。此游戏有非常奇怪的 DLC 配置，需要通过 PSP 浏览器下载一个免费的「游戏」，运行它以解包 DLC 文件，然后在玩真正的游戏时保留第二个「游戏」。不幸的是，它使用了多种此游戏独有的内核调用，目前尚未被模拟。即使 DLC 处于解包后的状态，也会导致游戏在存在时冻结。目前无法模拟游戏的最终章节。

更多信息：https://github.com/hrydgard/ppsspp/issues/12343

#### 注意

虽然此处提供了 github 问题链接，但除非你有关于所涉问题的建设性信息，否则请不要在问题上评论。简单的支持性点赞表示对问题的兴趣即可。
