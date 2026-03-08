---
title: 成就开发中的 BitCount 大小使用
description: 学习如何使用 BitCount 大小来统计字节中置位比特的数量，以创建高效有效的成就条件。
---

# `BitCount` 大小

`BitCount` 是统计字节中置位比特数量的快捷方式。

```
BitCount Mem 0x1234 == Value 6
```

等同于

```
AddSource Bit0 Mem 0x1234
AddSource Bit1 Mem 0x1234
AddSource Bit2 Mem 0x1234
AddSource Bit3 Mem 0x1234
AddSource Bit4 Mem 0x1234
AddSource Bit5 Mem 0x1234
AddSource Bit6 Mem 0x1234
          Bit7 Mem 0x1234 == Value 6
```

对于 `0x3F` (00111111)、`0xDB` (11011011)、`0xEE` (11101110) 等值将为真。

其最常见的用途是为 [`Measured`](/zh/developer-docs/flags/measured) 条件统计可收集物品数量。

它可以与其他标志如 [Delta](/zh/developer-docs/delta-values) 组合使用。

```
BitCount Mem 0x1234 != BitCount Delta 0x1234
```

如果您只想确保所有比特都已置位，而不需要担心部分比特子集是否置位，应检查具体值（即 `Eight Bit 0x1234 = 0xFF` 或 `Lower4 0x1234 = 0x0F`）。

**警告**：BitCount 始终统计字节中的全部 8 个比特。如果您只需要 6 或 7 个比特，应使用 AddSource 链，因为其他比特可能用于其他用途。
