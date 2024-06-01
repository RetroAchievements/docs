# Condition Syntax

### Memory sizes

|                   Size                    | Prefix |  Example   |
| :---------------------------------------: | :----: | :--------: |
|                   Bit0                    | `0xM`  | `0xM01234` |
|                   Bit1                    | `0xN`  | `0xN01234` |
|                   Bit2                    | `0xO`  | `0xO01234` |
|                   Bit3                    | `0xP`  | `0xP01234` |
|                   Bit4                    | `0xQ`  | `0xQ01234` |
|                   Bit5                    | `0xR`  | `0xR01234` |
|                   Bit6                    | `0xS`  | `0xS01234` |
|                   Bit7                    | `0xT`  | `0xT01234` |
|                  Lower4                   | `0xL`  | `0xL01234` |
|                  Upper4                   | `0xU`  | `0xU01234` |
|                   8bit                    | `0xH`  | `0xH01234` |
|                   16bit                   | `0x `  | `0x 01234` |
|                   24bit                   | `0xW`  | `0xW01234` |
|                   32bit                   | `0xX`  | `0xX01234` |
|                 16bit BE                  | `0xI`  | `0xI01234` |
|                 24bit BE                  | `0xJ`  | `0xJ01234` |
|                 32bit BE                  | `0xG`  | `0xG01234` |
| [BitCount](/developer-docs/bitcount-size) | `0xK`  | `0xK01234` |
|                   Float                   |  `fF`  | `fF01234`  |
|                 Float BE                  |  `fB`  | `fB01234`  |
|                   MBF32                   |  `fM`  | `fM01234`  |
|                 MBF32 LE                  |  `fL`  | `fL01234`  |
|                 Double32                  |  `fH`  | `fH01234`  |
|                Double32 BE                |  `fI`  | `fI01234`  |

### Prefixes

|                           Modifier                           | Prefix |  Example   |
| :----------------------------------------------------------: | :----: | :--------: |
|            [Delta](/developer-docs/delta-values)             |  `d`   | `d0xH1234` |
|            [Prior](/developer-docs/prior-values)             |  `p`   | `p0xH1234` |
| [BCD](/developer-docs/value-definition#binary-coded-decimal) |  `b`   | `b0xH1234` |
| [Invert](/developer-docs/value-definition#binary-inversion)  |  `~`   | `~0xH1234` |

### Logical Flags

|                        Flag                        | Prefix |    Example    |
| :------------------------------------------------: | :----: | :-----------: |
|     [`ResetIf`](/developer-docs/flags/resetif)     |  `R:`  | `R:0xH1234=1` |
| [`ResetNextIf`](/developer-docs/flags/resetnextif) |  `Z:`  | `Z:0xH1234=1` |
|     [`PauseIf`](/developer-docs/flags/pauseif)     |  `P:`  | `P:0xH1234=1` |
| [`AndNext`](/developer-docs/flags/andnext-ornext)  |  `N:`  | `N:0xH1234=1` |
|  [`OrNext`](/developer-docs/flags/andnext-ornext)  |  `O:`  | `O:0xH1234=1` |
|   [`AddSource`](/developer-docs/flags/addsource)   |  `A:`  | `A:0xH1234=1` |
|   [`SubSource`](/developer-docs/flags/subsource)   |  `B:`  | `B:0xH1234=1` |
| [`AddHits`](/developer-docs/flags/addhits-subhits) |  `C:`  | `C:0xH1234=1` |
| [`SubHits`](/developer-docs/flags/addhits-subhits) |  `D:`  | `D:0xH1234=1` |
|  [`AddAddress`](/developer-docs/flags/addaddress)  |  `I:`  | `I:0xH1234=1` |
|    [`Measured`](/developer-docs/flags/measured)    |  `M:`  | `M:0xH1234=1` |
|   [`Measured`%](/developer-docs/flags/measured)    |  `G:`  | `G:0xH1234=1` |
|   [`MeasuredIf`](/developer-docs/flags/measured)   |  `Q:`  | `Q:0xH1234=1` |
|     [`Trigger`](/developer-docs/flags/trigger)     |  `T:`  | `T:0xH1234=1` |
