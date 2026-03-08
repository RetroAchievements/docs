---
title: 成就开发中的条件语法
description: 全面了解成就开发中的条件语法，包括内存大小、前缀和逻辑标志。
---

# 条件语法

### 内存大小

|                     大小                     | 前缀  |    示例    |
| :------------------------------------------: | :---: | :--------: |
|                     Bit0                     | `0xM` | `0xM01234` |
|                     Bit1                     | `0xN` | `0xN01234` |
|                     Bit2                     | `0xO` | `0xO01234` |
|                     Bit3                     | `0xP` | `0xP01234` |
|                     Bit4                     | `0xQ` | `0xQ01234` |
|                     Bit5                     | `0xR` | `0xR01234` |
|                     Bit6                     | `0xS` | `0xS01234` |
|                     Bit7                     | `0xT` | `0xT01234` |
|                    Lower4                    | `0xL` | `0xL01234` |
|                    Upper4                    | `0xU` | `0xU01234` |
|                     8bit                     | `0xH` | `0xH01234` |
|                    16bit                     | `0x ` | `0x 01234` |
|                    24bit                     | `0xW` | `0xW01234` |
|                    32bit                     | `0xX` | `0xX01234` |
|                   16bit BE                   | `0xI` | `0xI01234` |
|                   24bit BE                   | `0xJ` | `0xJ01234` |
|                   32bit BE                   | `0xG` | `0xG01234` |
| [BitCount](/zh/developer-docs/bitcount-size) | `0xK` | `0xK01234` |
|                    Float                     | `fF`  | `fF01234`  |
|                   Float BE                   | `fB`  | `fB01234`  |
|                   Double32                   | `fH`  | `fH01234`  |
|                 Double32 BE                  | `fI`  | `fI01234`  |
|                    MBF32                     | `fM`  | `fM01234`  |
|                   MBF32 LE                   | `fL`  | `fL01234`  |

### 前缀

|                             修饰符                              | 前缀 |    示例    |
| :-------------------------------------------------------------: | :--: | :--------: |
|            [Delta](/zh/developer-docs/delta-values)             | `d`  | `d0xH1234` |
|            [Prior](/zh/developer-docs/prior-values)             | `p`  | `p0xH1234` |
| [BCD](/zh/developer-docs/value-definition#binary-coded-decimal) | `b`  | `b0xH1234` |
| [Invert](/zh/developer-docs/value-definition#binary-inversion)  | `~`  | `~0xH1234` |

### 特殊操作数

|               修饰符                |    表示    |    示例    |
| :---------------------------------: | :--------: | :--------: |
| [Recall](/zh/developer-docs/recall) | `{recall}` | `{recall}` |

### 逻辑标志

|                         标志                          | 前缀 |     示例      |
| :---------------------------------------------------: | :--: | :-----------: |
|     [`PauseIf`](/zh/developer-docs/flags/pauseif)     | `P:` | `P:0xH1234=1` |
|     [`ResetIf`](/zh/developer-docs/flags/resetif)     | `R:` | `R:0xH1234=1` |
| [`ResetNextIf`](/zh/developer-docs/flags/resetnextif) | `Z:` | `Z:0xH1234=1` |
|   [`AddSource`](/zh/developer-docs/flags/addsource)   | `A:` | `A:0xH1234/2` |
|   [`SubSource`](/zh/developer-docs/flags/subsource)   | `B:` | `B:0xH1234/2` |
| [`AddHits`](/zh/developer-docs/flags/addhits-subhits) | `C:` | `C:0xH1234=1` |
| [`SubHits`](/zh/developer-docs/flags/addhits-subhits) | `D:` | `D:0xH1234=1` |
|  [`AddAddress`](/zh/developer-docs/flags/addaddress)  | `I:` | `I:0xH1234=1` |
| [`AndNext`](/zh/developer-docs/flags/andnext-ornext)  | `N:` | `N:0xH1234=1` |
|  [`OrNext`](/zh/developer-docs/flags/andnext-ornext)  | `O:` | `O:0xH1234=1` |
|    [`Measured`](/zh/developer-docs/flags/measured)    | `M:` | `M:0xH1234=1` |
|   [`Measured`%](/zh/developer-docs/flags/measured)    | `G:` | `G:0xH1234=1` |
|   [`MeasuredIf`](/zh/developer-docs/flags/measured)   | `Q:` | `Q:0xH1234=1` |
|     [`Trigger`](/zh/developer-docs/flags/trigger)     | `T:` | `T:0xH1234=1` |
|    [`Remember`](/zh/developer-docs/flags/remember)    | `K:` | `K:0xH1234*2` |
