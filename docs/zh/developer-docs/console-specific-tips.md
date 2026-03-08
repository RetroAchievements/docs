---
title: 各平台成就开发技巧
description: 针对 NES、Game Boy、GBA、N64、DS、Neo Geo、PlayStation、PSP 等复古主机的内存查看与成就开发必备技巧与指南。
---

# 各平台技巧

在挖掘这些老主机的内存时，了解游戏原开发者当时的工作环境会很有帮助。熟悉你喜爱主机的特性后，制作成就集会更容易、更准确。

[[toc]]

## NES

### 内存镜像

![nes_mem_mirror](/nes-memory-mirroring.png)

使用内存查看器查找 NES 游戏变量时，会发现每个变量都有 4 份副本。如果你在纠结「该用哪一个？」或「是否要检查全部？」，其实没那么复杂。

这是 NES 的特性，为开发者提供了更多查看内存的方式。由于 NES 本身只有 2KB RAM，为保持一致性应使用第一个结果（0x800 以下的那个），对其它副本添加额外条件没有意义。

这也适用于 RPS 和排行榜。

## Game Boy

### 内存映射

某些地址范围在 Game Boy 硬件上下文中代表不同含义，了解内存布局有助于排除无用地址。概况如下：

- ❌ **0x0000 - 0x7FFF: ROM 数据**（无使用理由。此区域包含仅在部分模拟器中读取的头部信息。）
- ❌ **0x8000 - 0x9FFF: 图形数据**（若在查找地图 ID 或动画，这里可能有关联内容，但总有比使用这些地址更好的方法）
- ✔️ **0xA000 - 0xBFFF: 卡带 RAM**（即存档数据。有时无法避免使用这些地址，但你的成就集可能因加载 100% 存档而容易被作弊。更多防存档作弊信息将后续补充）
- ✔️ **0xC000 - 0xDFFF: 工作 RAM**（核心区域；几乎所有应使用的地址都在此范围内）
- ❌ **0xE000 - 0xFDFF: ECHO RAM**（请勿使用，见下文）
- ❌ **0xFE00 - 0xFE9F: 更多图形数据**（同上）
- ❌ **0xFEA0 - 0xFF7F: 杂项**（请勿使用）
- ✔️ **0xFF80 - 0xFFFF: 杂项**（可使用）

更多信息见：http://gameboy.mongenel.com/dmg/asmmemmap.html

### ECHO RAM

![gb_echo_ram](/game-boy-echo-ram.png)

与 NES 类似，在内存查看器中搜索时，某些变量可能出现两次。第二个结果位于所谓的 ECHO RAM，即实际内存的镜像。由于部分模拟器会忽略此区域或模拟不正确，建议完全不要使用，始终使用第一个结果。

Game Boy 的 8KB RAM 从 0xC000 开始。ECHO RAM 从 0xE000 开始，因此若地址以 E 开头，应将第一个非零字符替换为 C。记住：C 正确，E 是镜像！

### GBC

在 GBC 上，0xD000-0xDFFF 的 4KB 内存来自处理器无法直接访问的更大 32KB 内存块中的某个存储体。0xFF70 的 bit0-2 指示哪个存储体被加载到 0xD000-0xDFFF 内存块。这是用于扩展 GBC ROM 可用存储同时兼容 GB ROM 的「特性」。

存储体切换（改变 0xFF70 的值）会导致 0xD000-0xDFFF 范围内的内存更新。这在内存查看器中表现为闪烁，使追踪该范围内的值变得困难。若编写依赖该块内存的条件，还应要求 0xFF70 具有特定值以确保查看的是正确存储体。0xC000-0xCFFF 的 4KB 内存不进行存储体切换，可安全使用而无需额外条件。

若有替代方案，不建议将这些地址用于成就。截至 2018 年 1 月，RALibretro 在 0xFF70 处仅显示存储体 0x00。RetroArch 的内存存储体会波动，且各地址的行为与 RAVisualBoyAdvance 不同。至少在 RetroArch 获得内存查看器之前，使用 0xD000-0xDFFF 地址的成就仅在 RAVisualBoyAdvance 中有效。

### GB 和 GBC BIOS

RALibRetro 和 RetroArch 支持 GB/GBC BIOS，会在游戏启动前显示「Nintendo」和「GameBoy」标志。这提供约四秒时间，期间主内存（$C000-$DFFF）尚未初始化且不可信，可能对启用 BIOS 的子集用户造成成就于加载游戏时触发。

要启用此功能，将 bios 文件（命名为 `gb_bios.bin` 或 `gbc_bios.bin`）放入 RALibRetro 或 RetroArch 的 system 目录。启动游戏时，会先看到「Nintendo」和「GameBoy」标志再进入实际游戏。

若造成问题，可能需要添加逻辑以在 BIOS 执行期间阻止成就触发，但若可能，优先使用游戏内逻辑（例如检查是否显示特定画面）。

BIOS 代码从 $0000-$00FF 加载，因此找出 BIOS 运行期间该内存中唯一的片段并忽略它。例如，GBC BIOS 块的最后四个字节为 `3E 11 E0 50`，可添加此条件以在 BIOS 运行期间阻止成就触发：

```
32-bit 0x00FC != 0x50E0113E
```

BIOS 完成后，该块会被 FF 清空并重新用作中断向量。更多详情见 [A Look at the GameBoy bootstrap](https://realboyemulator.wordpress.com/2013/01/03/a-look-at-the-game-boy-bootstrap-let-the-fun-begin/)。

**注意**：GB BIOS 的最后四个字节为 `3E 01 E0 50`。因此 GB 条件应为：

```
32-bit 0x00FC != 0x50E0013E
```

## Game Boy Advance

### GBA 内存映射

| 名称                         | 物理地址范围            | 虚拟地址范围            | 偏移（虚拟到物理） |
| ---------------------------- | ----------------------- | ----------------------- | ------------------ |
| On-chip Working RAM (WRAMC)  | 0x00000000 - 0x00007fff | 0x03000000 - 0x03007fff | -0x03000000        |
| On-board Working RAM (WRAMB) | 0x00008000 - 0x00047fff | 0x02000000 - 0x0203ffff | -0x01ff8000        |
| Game Pak SRAM (SRAM)         | 0x00048000 - 0x00057fff | 0x0e000000 - 0x0e00ffff | -0x0dfb8000        |

## Virtual Boy

Virtual Boy 对 IEEE-754 单精度浮点运算有硬件支持。若难以定位数值数据，可尝试使用 `Float` 数据类型进行过滤。

## Nintendo 64

### 使用 GameShark 码查找地址

GameShark 码是查找难以或不愿手动查找的地址的宝贵资源。每行 12 个字符，解析较为简单。

`[AA][BBBBBB] [CCCC]`

[AA] 为代码类型。这是对 GameShark 的简短指令，定义对下一个值的操作。若理解 GameShark 码的作用，可用于辅助编写条件。

- **80, 88:** 地址为 8 位。将值 [00CC] 写入地址 [BBBBBB]。
- **81, 89:** 地址为 16 位。将值 [CCCC] 写入地址 [BBBBBB]。
- **D0:** 地址为 8 位。检查 [00CC] 是否等于地址 [BBBBBB] 处的值，若相等则执行下一行。
- **D2:** 地址为 8 位。检查 [00CC] 是否与地址 [BBBBBB] 处的值**不同**，若不同则执行下一行。
- **D1:** 地址为 16 位。检查 [CCCC] 是否等于地址 [BBBBBB] 处的值，若相等则执行下一行。
- **D3:** 地址为 16 位。检查 [CCCC] 是否与地址 [BBBBBB] 处的值**不同**，若不同则执行下一行。

示例：

- 纸片马里奥：无限 HP：

`[80][10F292] [0032]`

将 0x10F292 处的 8 位值设为 0x32（50）。即马里奥的 HP 为 0x10F292 处的 8 位值。

- 大金刚 64：以 Rambi 游玩：

`[80][74E77C] [0006]`

将 0x74E77C 处的 8 位值设为 6。即当前角色为 0x74E77C 处的 8 位值。

- 变色龙扭扭 2：按住 L 月跳：

`[D0][18BAB5] [0020] <- 看这个`

`[81][18B9E0] [4200]`

检查 0x18BAB5 处的 8 位值是否等于 0x20。即 0x18BAB5 包含按键变量，Bit5（0x20）对应 L 键。

[Anti-GSC](http://viper.shadowflareindustries.com/antigsc/index.php?codes&dev=gs&system=n64) 和 [GameHacking](https://gamehacking.org/system/n64) 均为查找 GameShark 码的好资源。

## Nintendo DS

- **0x3ffa8c: DS 游戏 ID** 标识正在运行的 DS 游戏的 ASCII 字符串。可用于检查加载的游戏版本（如多区域支持等）
- 指针始终以 `0x02` 开头。例如，指向 `0x13f944` 的指针为 `0x0213f944`。
- 当 0x400 处 bit0 与 bit1 均为 1 时可检测到 DSi 模式。已知在某些游戏中会轻微偏移内存，因此若需要可用于防止该模式。

## Nintendo DSi

- **0xfffe00: DSi 模式字符串** 标识正在运行的 DSi 游戏的 ASCII 字符串。可用于检查是否在游戏中而非 DSi 主屏幕等。

## GameCube

- 游戏/光盘识别：
  - 序列号位于 **0x00000000**，为 ASCII 字符串。
  - 光盘编号（多碟游戏）存储在 **0x80000006**。（0 = 光盘 1）
  - 修订版号存储在 **0x00000007**。
  - 可用这些确定加载的具体光盘。
- GameCube 使用 PowerPC 芯片组，数据为大端序。对于超过 1 字节（8 位）的数据类型，使用 `16-Bit BE`、`32-Bit BE`、`Float BE` 和 `Double32 BE` 过滤。GameCube 上数据通常对齐，因此 16 位数据始终在偶地址，32 位数据地址为 4 的倍数等。
- GameCube 有一块 24MB RAM，位于 `0x80000000-0x817FFFFF`，在 RA 工具包中映射为 `0x00000000-0x017FFFFF`。
  - 因此，找到的指针以 0x8 开头，使用时可用 `0x1fffffff` 掩码转换为 RA 寻址。
  - `Add Address 32-Bit BE Pointer & 0x1fffffff`
  - RAM 的非缓存镜像也存在于 `0xC0000000`。若找到以 0xC 开头的指针，同样可用该掩码方案转换为 RA 寻址。

## Wii

- 零售游戏/光盘识别：
  - 序列号位于 **0x00000000**，为 ASCII 字符串。
  - 光盘编号（多碟游戏）存储在 **0x80000006**。（0 = 光盘 1）
  - 修订版号存储在 **0x00000007**。
  - 可用这些确定加载的具体光盘。
- WiiWare 游戏 ID 位于 **0x00003180**，为 4 字节 ASCII 字符串。
- Wii 使用 PowerPC 芯片组，数据为大端序。对于超过 1 字节（8 位）的数据类型，使用 `16-Bit BE`、`32-Bit BE`、`Float BE` 和 `Double32 BE` 过滤。Wii 上数据通常对齐，因此 16 位数据始终在偶地址，32 位数据地址为 4 的倍数等。
- Wii 有两块 RAM：24MB 的「MEM1」位于 `0x80000000-0x817FFFFF`，在 RA 工具包中映射为 `0x00000000-0x017FFFFF`；64MB 的「MEM2」位于 `0x90000000-0x93FFFFFF`，在 RA 工具包中映射为 `0x10000000-0x13FFFFFF`。
  - 因此，找到的指针以 0x8 或 0x9 开头，使用时可用 `0x1fffffff` 掩码转换为 RA 寻址。
  - `Add Address 32-Bit BE Pointer & 0x1fffffff`
  - MEM1 和 MEM2 的非缓存镜像分别位于 `0xC0000000` 和 `0xD0000000`。若找到以 0xC 或 0xD 开头的指针，同样可用该掩码方案转换为 RA 寻址。

## Neo Geo

### 强制 UniBIOS 保护

UniBIOS 提供多种调试选项，并可访问每款游戏的单独作弊数据库。因此所有 Neo Geo 成就均需防止滥用。最简单的解决方案是直接在成就代码层面完全禁止使用 UniBIOS。

幸运的是，UniBIOS 的部分数据似乎反映在 RAM 的两个地址字符串中：`0x00fe30` 和 `0x00fe50`。UniBIOS 激活时，32 位大小的 `0x00fe30` 似乎始终为相同值（对每款 Neo Geo 游戏），即 `0x80025632`，且 ROM 加载后似乎不会改变。对任何其它 BIOS，该值始终为 0（ROM 加载后 RAM 被诊断程序占满的瞬间除外）。

要保护成就免受 UniBIOS 影响，只需添加简单保护：当 32 位大小的 `0x00fe30` 不等于 `0` 时重置。这还能防止成就于 RAM 诊断过程中解锁。

**保护在成就编辑器中的效果：**
![unineo1](/unibiosprotection.png)

**使用其它 BIOS 时（此处为 MSV）同一 RAM 区域的效果：**
![unineo2](/unibiosp2.png)

## PlayStation

注意：若核心不需要 BIOS，此内存可能未初始化。

$0000-$FFFF 的 RAM 保留给内核。启动可执行文件名似乎可靠地放置在 $9E18 和 $B8B0。启动可执行文件名几乎总是包含光盘序列号，每个区域唯一，因此常可用于确定玩家使用的游戏版本。

```
Spyro the Dragon                         SCUS_942.28

9E18 5C 53 43 55 53 5F 39 34 32 2E 32 38 3B 31
      \  S  C  U  S  _  9  4  2  .  2  8  ;  1

B8B0 63 64 72 6F 6D 3A 5C 53 43 55 53 5F 39 34 32 2E 32 38 3B 31
      c  d  r  o  m  :  \  S  C  U  S  _  9  4  2  .  2  8  ;  1
```

## PlayStation Portable

处理 PSP 时务必检查游戏是否有 DLC，因为此类内容可被玩家在未修改存档或未打补丁的情况下访问，需要纳入考虑，若提供你不希望玩家利用的优势，某些情况下还需加以保护。

## Amstrad CPC

用 BASIC 编写的游戏常使用 Microsoft Binary Format 存储数值。这是浮点数据。可在此系统上使用 `MBF32 LE` 数据类型过滤以查找这些值。

## Apple II

用 BASIC 编写的游戏常使用 Microsoft Binary Format 存储数值。这是浮点数据。可在此系统上使用 `MBF32` 数据类型过滤以查找这些值。

## PC-8000 / PC-8800

游戏可能使用 Microsoft Binary Format 存储数值。这是浮点数据。可在此系统上使用 `MBF32` 数据类型过滤以查找这些值。
