---
title: 如何在 RetroArch 中设置连发键
description: 学习如何在 RetroArch 中设置和配置连发键，以便在游戏中快速输入按键。
---

# 如何设置连发键

连发键，也称为连发、自动开火或快速连按，允许你通过按住按键快速输入。该功能常见于游戏主机的第三方手柄，也常在模拟器中实现。

::: info

RetroAchievements [允许使用连发键](/zh/guidelines/users/global-leaderboard-and-achievement-hunting-rules#_6-turbo-is-allowed)获得成就，包括硬核模式。

RetroAchievements 为经典游戏添加 PlayStation 和 Xbox 风格的成就。[在 RetroAchievements.org 注册](https://retroachievements.org)即可开始。

:::

本教程将说明如何在 RetroArch 中设置连发键，包括全局和游戏特定配置。也会说明其他支持 RetroAchievements 的模拟器。

## RetroArch

### 全局配置

RetroArch 有影响所有模拟器核心的全局连发键设置。默认未分配，可通过以下菜单选项找到：

1. Settings（设置）
2. Input（输入）
3. RetroPad Binds（RetroPad 绑定）
4. Port 1 Controls（端口 1 控制）

连发在列表底部。选择它，然后按住按键直到超时结束以完成分配。

![Turbo button in RetroArch settings](/retroarch-settings-turbo.png)

游戏运行时，可在此处找到更多选项：

1. Settings（设置）
2. Input（输入）
3. Turbo Fire（连发）

或在此处：

1. Main Menu（主菜单）
2. Quick Menu（快速菜单，默认可按 F1 键在游戏运行时直接访问）
3. Controls（控制）
4. Turbo Fire（连发）

可用选项：

- **Turbo Period**（连发周期）：设置连发输入的频率。
- **Turbo Duty Cycle**（连发占空比）：设置每次连发输入的持续时间。
- **Turbo Mode**（连发模式）：
  - Classic（经典）：允许你同时按住连发键和任意其他按键，使该按键连发。
  - Single Button (Toggle)（单键切换）：允许连发键切换一个分配的按键，按住该按键时连发。
  - Single Button (Hold)（单键按住）：允许按住连发键本身使一个分配的按键连发。
- **Turbo Default Button**（连发默认按键）：分配用于 Single Button (Toggle) 和 Single Button (Hold) 模式的单键。
- **Allow Turbo D-Pad Directions**（允许连发方向键）：不言自明。

你可以通过选择以下选项确保 RetroArch 的配置被保存：

1. Main Menu（主菜单）
2. Configuration File（配置文件）
3. Save Current Configuration（保存当前配置）

要在 RetroArch 退出时自动保存配置，在以下菜单下启用该选项：

1. Settings（设置）
2. Configuration（配置）
3. Save Configuration on Quit（退出时保存配置）

在较新版本的 RetroArch 中，这可能已默认启用。

### 游戏特定配置

如果只想在玩某些游戏时使用连发键，可以使用 RetroArch 的覆盖功能。覆盖允许你为每个游戏、每个核心或每个内容目录（例如 NES 游戏文件夹）应用不同版本的全局配置。游戏运行时，可在以下菜单下找到这些选项：

1. Main Menu（主菜单）
2. Quick Menu（快速菜单）
3. Overrides（覆盖）
4. Save Game Overrides（保存游戏覆盖）、Save Content Directory Overrides（保存内容目录覆盖）或 Save Core Overrides（保存核心覆盖）

这在管理不同系统之间的手柄冲突时很有帮助。例如，如果你在玩 NES 游戏时将连发键分配给手柄的 R 键，那么在玩 SNES 游戏时可能会与实际 R 键冲突。如果 NES 和 SNES 游戏分别放在不同文件夹中，可以保存内容目录覆盖，以便为 NES 和 SNES 加载不同的连发键选项。

### 核心特定配置

除了 RetroArch 的全局连发键外，某些核心有自己的选项来分配内置连发键。游戏运行时，可在以下菜单下访问这些选项：

1. Main Menu（主菜单）
2. Quick Menu（快速菜单）
3. Controls（控制）
4. Port 1 Controls（端口 1 控制）

以下列出部分适用核心及其默认 RetroPad 按键：

#### Game Boy - Gambatte

- Turbo A（默认：Y）
- Turbo B（默认：X）

#### Game Boy Advance - mGBA

- Turbo A（默认：Y）
- Turbo B（默认：X）
- Turbo L（默认：左扳机）
- Turbo R（默认：右扳机）

#### NES - FCEUmm

- Turbo A（默认：Y）
- Turbo B（默认：X）
- Turbo A+B（默认：右摇杆）

在 Quick Menu -> Core Options -> Input 下，有选项可为玩家 1 和/或玩家 2 启用这些连发键。也可设置 Turbo Delay。

#### NES - Mesen

- Turbo A（默认：Y）
- Turbo B（默认：X）

在 Quick Menu -> Core Options -> Input 下，有选项可更改连发输入速度。

#### PC Engine - Beetle SuperGrafx

- III（默认：X）
- IV（默认：Y）

在 Quick Menu -> Core Options -> Input 下，Turbo Hotkey Mode 选项可启用 III 和 IV 按键的连发功能。可设置为 Toggle（按一次 III 或 IV 使 II（默认：A）或 I（默认：B）按键在按住时连发）或 Dedicated（按住 III 或 IV 直接使 II 或 I 连发）。还有 Alternate Turbo Hotkey，当 Toggle 设置时，允许 L3（左摇杆）和 R3（右摇杆）输入切换 II 和 I 的连发功能。Turbo Delay 选项可更改连发输入的频率。

## BizHawk

BizHawk 使用 autofire（自动开火）一词表示此功能——turbo 在 BizHawk 中指的是提高模拟速度。游戏运行时，可在此菜单下访问 autofire 配置：

1. Config（配置）
2. Controllers（手柄）
3. Autofire Controls 选项卡（自动开火控制）

Autofire 可分配给当前核心的任意按键。

![Autofire in BizHawk controller settings](/bizhawk-controllers-autofire.png)

或者，可在此菜单下分配切换式 autofire 按键：

1. Config（配置）
2. Hotkeys（热键）
3. General 选项卡（常规）

![Autofire in BizHawk hotkey settings](/bizhawk-hotkeys-autofire.png)

使用方法：按住 autofire 按键的同时按任意其他按键，使该按键快速输入。再次按住 autofire 按键并按按键可禁用。

在 Config -> Autofire 下可找到更改按键按下频率和持续时间的其他选项。可通过选择 Config 菜单底部的选项保存或加载不同配置。

## DuckStation 和 PCSX2

DuckStation 和 PCSX2 中的宏功能可用于此用途。两个模拟器中的用法相同，可在此处访问：

1. Settings（设置）
2. Controllers（手柄）
3. Controller Port 1（手柄端口 1）
4. Macros 选项卡（宏）

![Macros in PCSX2 settings](/pcsx2-settings-macros.png)

选择要快速输入的按键，然后分配触发按键。复选框允许你将其用作切换（如需要）。将页面底部的频率设置为允许宏用作连发键。PCSX2 还有几个与按键压力和死区相关的额外选项。

## PPSSPP

PPSSPP 使用 rapid fire（快速连按）一词表示此功能。默认分配给左 Shift，但可在此菜单下更改：

1. Settings（设置）
2. Controls（控制）
3. Control Mapping（控制映射）
4. 向下滚动到 Control Modifiers 部分（控制修饰键）

![Rapid fire in PPSSPP settings](/ppsspp-settings-rapid-fire.png)

按住此按键的同时按住任意其他按键，使该按键快速输入。在 Settings -> Controls 下，可向下滚动到 Keyboard Control Settings 部分，找到更改快速连按间隔的选项。
