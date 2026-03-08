---
title: 不支持的模拟器和核心
description: 关于 RetroAchievements 不支持的模拟器和核心的信息。
---

# 不支持的模拟器和核心

## Amiga

- ❓ libretro 核心：**FS-UAE**
- ❌ libretro 核心：**P-UAE**
  - 需要内存映射以查看暴露的内存
  - 锁定磁盘文件，无法打开进行哈希
  - 硬盘支持？
- ❓ libretro 核心：**PUAE 2021**
- ❓ libretro 核心：**UAE4ARM**

## Amstrad CPC

- ❌ libretro 核心：**CrocoDS**

## Apple II

- ⌛ BizHawk 核心：**Virtu**
  - 测试中
  - 2023 年 6 月 4 日 - woz 文件不支持
  - 2023 年 6 月 4 日 - 摇杆不支持。键盘需手动映射。
  - 2023 年 6 月 4 日 - 多磁盘游戏需手动创建并加载多磁盘包。磁盘仅按索引通用标注。

## Arcade

- ❌ libretro 核心：**FB Alpha**
  - 已弃用
- ❌ libretro 核心：**MAME**
- ❌ BizHawk 核心：**MAME**

## Atari 2600

- ❓ libretro 核心：**Stella 2014**

## Atari 5200

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**atari800**
  - 似乎运行正常，但核心使用起来有些头疼。
    - BIOS 需在核心内配置（F1 > Emulator Configuration > System ROM settings）
    - 无法弄清控制 - 摇杆是否也需要在核心内配置？
    - 允许从内部菜单加载任意文件，这会绕过哈希
- ❌ libretro 核心：**a5200**
  - 不暴露内存

## Atari ST

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**Hatari**
  - 内存未暴露

## Casette Vision

- ❌ _不支持_ - 需要哈希方法和内存映射

## CHIP-8

- ❌ _不支持_ - 需要主机 ID、哈希方法和内存映射
- ❌ libretro 核心：**Emux CHIP-8**
- ❌ libretro 核心：**JAXE**
  - 2022 年 4 月 16 日 - 我们准备好时似乎就绪
  - 可能需要设置黑名单以防止降低速度

## Commodore 128

- ❌ _不支持_
- ❌ libretro 核心：**VICE x128**

## Commodore 64

- ❌ libretro 核心：**vice_x64**
  - 注意：摇杆默认在端口 2。使用虚拟键盘上的 JOY 按钮（select）切换到端口 1。
  - 2022 年 5 月 1 日 - 重置不会自动运行游戏
- ⌛ BizHawk 核心：C64Hawk
  - 测试中
- ❓ libretro 核心：**Frodo**

## ColecoVision

- ❌ libretro 核心：**Gearcoleco**

## Elektronika BK-0010/0011

- ❌ _不支持_
- ❌ libretro 核心：**M**

## Enterprise 128

- ❌ _不支持_
- ❌ libretro 核心：**ep128emu**

## Fairchild Channel-F

- ❓ BizHawk 核心：**ChannelFHawk**

## FM Towns

- ❌ _不支持_ - 需要哈希方法和内存映射

## Game & Watch

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**gw**
  - 不暴露内存

## Game Boy

- ❌ libretro 核心：**DoubleCherryGB**
  - 不暴露所有内存，部分成就会显示为不支持
- ❓ libretro 核心：**Emux GB**
- ❓ libretro 核心：**fixGB**
- ❓ libretro 核心：**SameBoy**
- ❓ libretro 核心：**TGB Dual**

## Game Boy Color

- ❓ libretro 核心：**DoubleCherryGB**
  - 不暴露所有内存，部分成就会显示为不支持。
- ❓ libretro 核心：**Emux GB**
- ❓ libretro 核心：**fixGB**
- ❓ libretro 核心：**SameBoy**
- ❓ libretro 核心：**TGB Dual**

## Game Boy Advance

- ❓ libretro 核心：**gpSP**
- ❓ libretro 核心：**Meteor**
- ❓ libretro 核心：**TempGBA**

## GameCube

- ⌛ libretro 核心：**Dolphin**
  - 测试中

## J2ME

- ❌ _不支持_ - 需要主机 ID、哈希方法和内存映射
- ❌ libretro 核心：**freej2me**

## Magnavox Odyssey 2

- ❓ BizHawk 核心：**O2Hawk**

## Master System / Mark III

- ❓ BizHawk 核心：**SMSHawk**
- ❓ libretro 核心：**Emux SMS**

## MicroW8

- ❌ _不支持_
- ❌ libretro 核心：**MicroW8**

## MS-DOS

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**dosbox-core**
- ❌ libretro 核心：**dosbox-SVN**
- ❌ libretro 核心：**dosbox-pure**
  - 需要一种方法防止使用用户指定的命令行参数启动
  - 需要一种方法防止 TSR
  - 需要一种方法在游戏返回命令提示符时停用成就

## MSX

- ❓ libretro 核心：**fMSX**

## Neo Geo Pocket

- ❓ libretro 核心：**RACE**

## Neo Geo Pocket Color

- ❓ libretro 核心：**RACE**

## NES / Famicom

- ❌ libretro 核心：**NEStopia**
  - 不映射 SRAM
- ❓ libretro 核心：**Emux NES**
- ❓ libretro 核心：**fixNES**

## Nintendo 3DS

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**Citra**
  - 仅暴露 64MB 内存 - 文档显示应有 128MB。
  - 不支持存档状态
- ❌ libretro 核心：**Citra 2018**
- ❌ libretro 核心：**Citra Canary**

## Nintendo 64

- ⌛ BizHawk 核心：**Mupen64Plus**
  - 测试中（使用 angrylion 插件可修复一些图形问题）

## Nintendo DS

- ❌ libretro 核心：**DeSmuME 2015**

## Nintendo DSi

- ❌ libretro 核心：**DeSmuME**
- ❌ libretro 核心：**melonDS**

## Nokia N-Gage

- ❌ _不支持_ - 需要哈希方法和内存映射

## Oric

- ❌ _不支持_

## Palm OS

- ❌ _不支持_
- ❌ libretro 核心：**Mu**

## PC Engine CD / TurboGrafx-CD

- ❌ libretro 核心：**Beetle PCE**
  - 不暴露 PC Engine CD 所需的 RAM

## PC-6001

- ❌ _不支持_ - 需要哈希方法和内存映射

## PC-8800

## PC-9800

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**Neko Project II Kai**
  - 内存未暴露。
    - 根据所选 RAM 大小，某些游戏中似乎会暴露，但似乎是机器 RAM 而非实际与游戏相关。
- ❌ libretro 核心：**Neko Project II**

## Philips CD-i

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**CDi 2015**
- ❌ libretro 核心：**SAME CDi**

## Philips P2000

- ❌ _不支持_
- ❌ libretro 核心：**M2000**

## Pico-8

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**FAKE-08**
- ❌ libretro 核心：**Retro8**

## PlayStation

- ❌ libretro 核心：**PCSX ReARMed**
  - 此核心不需要 BIOS，会将 Kernel RAM 清零。
- ❓ BizHawk 核心：**Octoshock** (Mednafen)
- ❓ BizHawk 核心：**Nymashock** (Mednafen)
- ❓ libretro 核心：**Rustation**

## PlayStation 2

- ❌ 独立模拟器：**AetherSX2**
  - 不再开发，存在已知不兼容性。开发者无法解决问题。
- ❌ libretro 核心：**LRPS2**
  - 仍处于 alpha 状态
  - 不暴露内存
- ❌ libretro 核心：**Play!**
  - 与大多数商业游戏兼容性低
  - 黑屏伴卡顿音效

## PocketStation

- ❌ _不支持_ - 需要主机 ID、哈希方法和内存映射
- ❌ libretro 核心：**pockystation**
  - 核心似乎无法运行，即使在 RetroArch 中

## SAM Coupé

- ❌ _不支持_
- ❌ libretro 核心：**SimCoupe**
  - 仍处于 alpha 状态

## Sega Dreamcast

- ❓ libretro 核心：**Flycast GLES2**

## Sega Genesis / Mega Drive

- ❌ libretro 核心：**Blastem**
  - 虽然部分成就可能有效，但核心在内存的 Game RAM 部分存在问题。

## Sega Pico

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**picodrive**
  - 需要与附加书籍翻页相关的控制

## Sega Saturn

- ❌ libretro 核心：**Yabause**
  - 技术上支持；不推荐。
- ❌ libretro 核心：**Kronos**
  - 保存和加载状态经常锁定 RALibretro 的 UI
  - 技术上支持；不推荐。
- ❓ libretro 核心：**YabaSanshiro**

## SG-1000

- ❌ libretro 核心：**Gearsystem**
  - 有大量未暴露的内存

## Sharp X1

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**X1 Millennium**
  - 2022 年 4 月 16 日 - 磁盘写入会修改源介质，这会破坏哈希

## Sharp X68K

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**px68k**
  - 加载游戏时使 RALibretro 崩溃

## SNES / Super Famicom / Satellaview / Sufami Turbo

- ❓ libretro 核心：**Beetle bsnes**
- ❌ libretro 核心：**Beetle Supafaust**
  - 2024-06-11 - 不暴露内存
- ❓ libretro 核心：**bsnes**
- ❓ libretro 核心：**bsnes 2014 Accuracy**
- ❓ libretro 核心：**bsnes 2014 Balanced**
- ❓ libretro 核心：**bsnes 2014 Performance**
- ❓ libretro 核心：**bsnes C++98 (v085)**
- ❌ libretro 核心：**bsnes-hd beta**
  - 2025-12-29 - 内存检查器仅显示零。请勿使用。
- ❓ libretro 核心：**bsnes-mercury Accuracy**
- ❓ libretro 核心：**bsnes-mercury Balanced**
- ❓ libretro 核心：**bsnes-mercury Performance**
- ❓ libretro 核心：**higan Accuracy**
- ❓ libretro 核心：**nSide Balanced**
- ❓ libretro 核心：**Snes9x 2002**
- ❓ libretro 核心：**Snes9x 2005**
- ❓ libretro 核心：**Snes9x 2005+**
- ❌ libretro 核心：**Snes9x 2010**
  - 请停止使用此核心制作成就！！！！
- ❓ BizHawk 核心：**BSNES**
- ❓ BizHawk 核心：**BSNESv115+**

## SpectraVideo SVI 318/328

- ❌ _不支持_
- ❌ libretro 核心：**blueMSX**

## Super Casette Vision

- ❌ libretro 核心：**EmuSCV**
  - 根据 [libretro 文档](https://docs.libretro.com/library/emuscv/)未完成。
  - 不暴露内存。似乎通过 RETRO_MEMORY_SAVE_RAM 接口[导出存档状态](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229)，我们尝试将其塞入 $E000，因为该系统标记为 Cartridge RAM。

## Thomson TO8/TO8D

- ❌ _不支持_ - 需要哈希方法
- ❌ libretro 核心：**Theodore**
  - 似乎可以工作
  - 不确定核心如何处理磁盘/磁带写入。可能影响哈希。

## TI-83

- ⌛ libretro 核心：**Numero**
  - 测试中
- ⌛ BizHawk 核心：**TI83Hawk**
  - 测试中

## TIC-80

- ❌ _不支持_ - 需要哈希方法
- ❌ libretro 核心：**TIC-80**
  - 内存导出不正确。只能看到 8 字节。

## VIC-20

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**VICE xvic**

## VMU

- ❌ _不支持_ - 需要主机 ID、哈希方法和内存映射
- ❌ libretro 核心：**VeMUlator**

## Wii

- ⌛ 独立模拟器：**Dolphin**
  - 测试中
- ⌛ libretro 核心：**Dolphin**
  - 测试中

## Wii U

- ❌ _不支持_ - 需要哈希方法和内存映射

## Xbox

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**DirectXbox**
  - 仍处于 alpha 状态

## Zeebo

- ❌ _不支持_ - 需要哈希方法和内存映射

## ZX81

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**EightyOne**
  - 内存未暴露

## ZX Spectrum

- ❌ _不支持_ - 需要哈希方法和内存映射
- ❌ libretro 核心：**FUSE**
  - 需要能够将键盘映射到端口 3
  - 存档支持不确定。似乎无法插入存档磁盘
- ⌛ - BizHawk 核心：**ZXHawk**
  - 哈希需要修正
  - 测试中
