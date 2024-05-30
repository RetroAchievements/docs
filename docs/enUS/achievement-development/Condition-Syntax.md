### Memory sizes

|           Size            | Prefix |  Example   |
| :-----------------------: | :----: | :--------: |
|           Bit0            | `0xM`  | `0xM01234` |
|           Bit1            | `0xN`  | `0xN01234` |
|           Bit2            | `0xO`  | `0xO01234` |
|           Bit3            | `0xP`  | `0xP01234` |
|           Bit4            | `0xQ`  | `0xQ01234` |
|           Bit5            | `0xR`  | `0xR01234` |
|           Bit6            | `0xS`  | `0xS01234` |
|           Bit7            | `0xT`  | `0xT01234` |
|          Lower4           | `0xL`  | `0xL01234` |
|          Upper4           | `0xU`  | `0xU01234` |
|           8bit            | `0xH`  | `0xH01234` |
|           16bit           | `0x `  | `0x 01234` |
|           24bit           | `0xW`  | `0xW01234` |
|           32bit           | `0xX`  | `0xX01234` |
|         16bit BE          | `0xI`  | `0xI01234` |
|         24bit BE          | `0xJ`  | `0xJ01234` |
|         32bit BE          | `0xG`  | `0xG01234` |
| [BitCount](BitCount-Size) | `0xK`  | `0xK01234` |
|           Float           |  `fF`  | `fF01234`  |
|         Float BE          |  `fB`  | `fB01234`  |
|           MBF32           |  `fM`  | `fM01234`  |
|         MBF32 LE          |  `fL`  | `fL01234`  |
|         Double32          |  `fH`  | `fH01234`  |
|        Double32 BE        |  `fI`  | `fI01234`  |

### Prefixes

|                   Modifier                   | Prefix |  Example   |
| :------------------------------------------: | :----: | :--------: |
|            [Delta](Delta-Values)             |  `d`   | `d0xH1234` |
|            [Prior](Prior-Values)             |  `p`   | `p0xH1234` |
| [BCD](Value-Definition#binary-coded-decimal) |  `b`   | `b0xH1234` |
| [Invert](Value-Definition#binary-inversion)  |  `~`   | `~0xH1234` |

### Logical Flags

|                Flag                 | Prefix |    Example    |
| :---------------------------------: | :----: | :-----------: |
|       [ResetIf](ResetIf-Flag)       |  `R:`  | `R:0xH1234=1` |
|   [ResetNextIf](ResetNextIf-Flag)   |  `Z:`  | `Z:0xH1234=1` |
|       [PauseIf](PauseIf-Flag)       |  `P:`  | `P:0xH1234=1` |
| [AndNext](AndNext-and-OrNext-Flags) |  `N:`  | `N:0xH1234=1` |
| [OrNext](AndNext-and-OrNext-Flags)  |  `O:`  | `O:0xH1234=1` |
|     [AddSource](AddSource-Flag)     |  `A:`  | `A:0xH1234=1` |
|     [SubSource](SubSource-Flag)     |  `B:`  | `B:0xH1234=1` |
| [AddHits](AddHits-and-SubHits-Flag) |  `C:`  | `C:0xH1234=1` |
| [SubHits](AddHits-and-SubHits-Flag) |  `D:`  | `D:0xH1234=1` |
|    [AddAddress](AddAddress-Flag)    |  `I:`  | `I:0xH1234=1` |
|      [Measured](Measured-Flag)      |  `M:`  | `M:0xH1234=1` |
|     [Measured%](Measured-Flag)      |  `G:`  | `G:0xH1234=1` |
|     [MeasuredIf](Measured-Flag)     |  `Q:`  | `Q:0xH1234=1` |
|       [Trigger](Trigger-Flag)       |  `T:`  | `T:0xH1234=1` |
