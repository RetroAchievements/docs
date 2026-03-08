---
title: 如何游玩子集
description: 子集的简要说明以及如何为子集打补丁 ROM 的简单教程。
---

# 如何游玩子集

## 什么是子集？

子集是游戏的补充成就集，包含可能不太适合主（核心）成就集的成就。有[多种类型的子集](/zh/guidelines/content/subsets#types-of-subsets)。子集通常需要额外的补丁，有时需要游戏的其他修订版/版本。

## 入门

当你想游玩的子集需要补丁时，请按以下步骤操作。这些步骤也可用于为 hack 打补丁 ROM。

**步骤 1：** 下载所选子集的补丁。我们以[此子集](https://retroachievements.org/game/7596)为例（本例为 Super Mario Land [Subset - Bonus]）。补丁托管在 [RAPatches](https://github.com/RetroAchievements/RAPatches)。

![RetroAchievements hashes](/retroachievements-hashes.png)

**步骤 2：** 前往 [ROM Patcher JS](https://www.marcrobledo.com/RomPatcher.js/)，一个免费的在线 ROM 打补丁工具。

![Rom Patcher JS](/rom-patcher-js.png)

**步骤 3：** 在上方字段选择你的 ROM，在下方选择补丁文件。确保你使用的是补丁对应的正确 ROM（参见补丁通常附带的 readme 文件）。检查两个字段之间的 CRC32、MD5 和 SHA-1 哈希也有帮助（本例中，子集为原版未修改的 Super Mario Land 和 Super Mario Land DX hack 都提供补丁。本教程中我们使用未修改游戏的补丁）。Rom Patcher JS 也会告诉你补丁工作所需的 CRC32 哈希。

![ROM field](/rom-field.png)

![Patch field](/patch-field.png)

**步骤 4：** 点击/点击「Apply patch」并下载打补丁后的 ROM。

![Apply patch](/apply-patch.png)

**步骤 5：** 打开你选择的模拟器，然后加载打补丁后的 ROM，看看是否出现弹窗告诉你正在使用「X Game [Subset - X]」。如果是，恭喜！你已正确打补丁 ROM！否则，请重复上述所有步骤。

![RetroArch Bonus set](/retroarch-bonus-set.png)

要查看可以尝试的子集完整列表，请查看[此中心](https://retroachievements.org/game/20156)。
