---
title: 成就开发者模拟器配置
description: 了解如何为 RetroAchievements 成就开发配置模拟器。
---

# 成就开发者模拟器配置

成就开发需要名为 [RAIntegration](https://github.com/RetroAchievements/RAIntegration) 的仅限 Windows 的 DLL 文件。在大多数情况下，该文件会随 [兼容模拟器](https://retroachievements.org/download.php) 捆绑提供，或在启动时自动下载，包括以下模拟器：

- RALibRetro
- RAMeka
- RANes
- RAP64
- RAppleWin
- RAQUASI88
- RASnes9x
- RAVBA
- WinArcadia

![RALibRetro 中的 RAIntegration 下载提示](/ralibretro-raintegration-download.png)

在其他情况下，可能需要手动配置。RAIntegration 的最新版本可从此处下载：

- **https://retroachievements.org/bin/RA_Integration-x64.dll**

不同模拟器的配置说明如下。

## BizHawk

对于 BizHawk，请确保文件命名为 `RA_Integration-x64.dll` 并将其放置在 `BizHawk/dll` 文件夹中。

![BizHawk 文件夹中的 RAIntegration](/bizhawk-raintegration-folder.png)

完成上述操作后，启动 `EmuHawk.exe`，然后进入 工具 -> RetroAchievements -> 启动 RetroAchievements。您将收到有关 BizHawk 向 RetroAchievements 发送信息的通知；如果接受，系统将要求您登录账户。然后您可以在 工具 -> RetroAchievements 下找到开发者工具，以及每次打开 BizHawk 时自动启动 RetroAchievements 的选项。

![BizHawk 中的 RAIntegration 菜单](/bizhawk-raintegration-menu.png)

## DuckStation

对于 DuckStation，文件可命名为 `RA_Integration-x64.dll` 或 `RA_Integration.dll`。将其放置在 DuckStation 的主文件夹中。

![DuckStation 文件夹中的 RAIntegration](/duckstation-raintegration-folder.png)

首次运行模拟器时，设置向导将引导您完成各种选项，包括启用和登录 RetroAchievements。否则，您可以在 工具 -> 成就 下找到这些选项。

![DuckStation 中的成就设置](/duckstation-achievement-settings.png)

启用 RetroAchievements 并登录后，勾选“Enable RAIntegration (Development Only)”。随后将出现带有 RAIntegration 工具的菜单。

![DuckStation 中的 RAIntegration 菜单](/duckstation-raintegration-menu.png)

注意：如果登录时遇到问题（例如 DuckStation 卡住），请尝试在禁用 RAIntegration 的情况下登录。等待登录完成后再启用它。

## PCSX2

PCSX2 自 v2.0.0 起在其稳定版本中支持 RetroAchievements。

请确保文件命名为 `RA_Integration.dll`（不含 `-x64` 部分）并将其放置在 PCSX2 的主文件夹中。

![PCSX2 文件夹中的 RAIntegration](/pcsx2-raintegration-folder.png)

有两种方式可以启用 RAIntegration 启动 PCSX2。

### 添加参数

第一种方式是使用参数 `-raintegration` 启动 `pcsx2-qt.exe`。在 Windows 中，一种便捷方式是右键点击 .exe 并创建快捷方式。然后右键点击快捷方式并进入属性。在快捷方式选项卡下的目标字段中，在文件名后输入 `-raintegration`，然后点击确定。

![PCSX2 快捷方式中的 RAIntegration 参数](/pcsx2-raintegration-shortcut.png)

然后您可以使用此快捷方式启用 RAIntegration 启动模拟器。

### 编辑配置文件

此方法涉及编辑 `C:\Users\YourUsername\Documents\PCSX2\inis` 中的 `PCSX2.ini` 文件。如果看不到这些目录，您可能需要先启动模拟器以生成它们。如果您希望将这些目录保留在 PCSX2 的主文件夹中而不是文档文件夹中，可以在 PCSX2 的主文件夹中创建一个名为 `portable.txt` 的空文件。

在记事本等文本编辑器中打开 `PCSX2.ini`。向下滚动到 `[Achievements]` 部分并添加行 `UseRAIntegration = true`。保存文件。

![PCSX2 配置文件中的 RAIntegration](/pcsx2-raintegration-config.png)

RAIntegration 将在启动 `pcsx2-qt.exe` 时启用。

### 开发者工具

使用 RAIntegration 启用启动模拟器并登录账户后，开发者工具可在 工具 -> RAIntegration 下找到。

![PCSX2 中的 RAIntegration 菜单](/pcsx2-raintegration-menu.png)

当 RAIntegration 有更新时，打开模拟器时会询问您是否要升级。但是，请注意 PCSX2 不支持此自动升级——点击是会出现错误。您必须在更新时手动替换 `RAIntegration.dll`。

## PPSSPP

PPSSPP 自 1.18 版本起在其主版本中支持 RAIntegration。您可以在此处获取最新版本：

- **https://www.ppsspp.org/download/**

如果您想将 PPSSPP 下载为便携式应用程序，绕过安装需求，可以从此处获取开发版本之一：

- **https://www.ppsspp.org/devbuilds/**

运行安装程序或解压到您选择的位置后，启动 PPSSPP 并进入 设置 -> 工具 -> RetroAchievements。您可以在此处的账户选项卡下登录。在开发者工具选项卡下，您可以启用 RAIntegration。可能还需要启用非官方成就才能使用开发者工具查看它们。

![PPSSPP 中的 RAIntegration 设置](/ppsspp-raintegration-setting.png)

之后，退出 PPSSPP 并重新打开以加载 RAIntegration。RetroAchievements 将拥有自己的菜单和开发者工具。

![PPSSPP 中的 RAIntegration 菜单](/ppsspp-raintegration-menu.png)

如果您获取的是开发版本，可能需要手动将 RA_Integration.dll 的副本放入文件夹。请确保其命名为 `RA_Integration.dll` 并将其放置在 PPSSPP 的主文件夹中。

![PPSSPP 文件夹中的 RAIntegration](/ppsspp-raintegration-folder.png)

完成上述操作后，重启 PPSSPP，它应该能成功识别 RAIntegration。

## Dolphin

Dolphin 自 2503-251 版本起在其开发版本中支持 RAIntegration。

文件可命名为 `RA_Integration-x64.dll` 或 `RA_Integration.dll`。将其放置在 Dolphin 的主文件夹中。

![Dolphin 文件夹中的 RAIntegration](/dolphin-raintegration-folder.png)

选项可在 工具 -> 成就 下找到。您可以在此处启用 RetroAchievements 并登录。

![Dolphin 中的成就设置](/dolphin-achievement-settings.png)

当 RAIntegration 文件存在于 Dolphin 的主文件夹中时，带有开发工具的菜单将自动出现在 工具 -> RetroAchievements Development 下。

![Dolphin 中的 RAIntegration 菜单](/dolphin-raintegration-menu.png)

## 其他资源

要熟悉每个模拟器的快捷键，请参阅此页面：

- [成就开发者模拟器快捷键](/zh/developer-docs/emulator-hotkeys-for-developers)
