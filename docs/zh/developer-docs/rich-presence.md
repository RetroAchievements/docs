---
title: Rich Presence
description: Rich Presence (RP) 功能概述，展示玩家在游戏中的活动状态。了解如何创建、监控和理解报告游戏进度和关键信息的 RP 脚本。
---

# Rich Presence

[[toc]]

## 简介

Rich Presence (RP) 是对活跃玩家当前在游戏中活动状态的**简要**概述。要让游戏拥有 RP，需要开发者创建 Rich Presence 脚本。该脚本会检查玩家的游戏内存，并报告开发者指定的某些地址的值，例如玩家所在的关卡、剩余生命数、游戏模式、玩家完成的内容等。这些信息每两分钟向网站报告一次。

良好的 Rich Presence 应告知其他用户你在游戏中的进度（关卡/城镇/地下城），并大致反映玩家的表现（分数/剩余生命/角色等级）。根据游戏上下文，其他细节可能也有用。但不要过度添加细节。其他玩家不关心你剩余多少子弹或计时器还剩多少时间，尤其是 RP 每两分钟才更新一次。此外，在 Rich Presence 显示中添加的冗余信息越多，重要信息就越容易被稀释。

## 目标受众

Rich Presence 是为网站浏览者编写的，**而非**正在玩游戏的玩家本人。其目的是回答“这位玩家在做什么？”这一问题。设计 RP 时不要假设上下文，它应仅报告简要说明玩家在游戏中活动的事实数据。

强烈建议保持 RP 清晰、简洁，并考虑到浏览者可能对游戏知之甚少。Rich Presence 简单易懂很重要。表情符号往往含义不清，且在不同平台上显示不一致。仅在非常明显的情况下谨慎使用，或干脆不用。

**RP 实际效果示例：**

![Example of RP in action](/rp-sample.png)

### 工作原理

游戏的 Rich Presence 脚本会与成就和排行榜数据一起下载。模拟器验证数据后，会立即为用户启动会话。这会将用户的“最后出现于”设置为“正在玩 [游戏]”。30 秒后，Rich Presence 脚本会被评估，结果发送到服务器。这将更新玩家的“最后出现于”，该信息也用于首页的“活跃玩家”列表。此后每两分钟，Rich Presence 脚本会再次评估，“最后出现于”会再次更新。该过程持续到用户关闭模拟器为止。

如果游戏没有 Rich Presence 脚本、用户已禁用 Rich Presence，或用户修改了 Rich Presence 脚本，文本将保持为“正在玩 [游戏]”。

如果用户打开了任何工具窗口，其“最后出现于”也可能显示“修复成就”或“开发成就”。若该游戏已有已发布的成就，则显示前者；若尚无已发布的成就，则显示后者。

游戏的 Rich Presence 脚本可在每个游戏页面的开发部分找到：

![Dev click](/rp-dev-menu.png)

![RP shown](/rp-site-update.png)

## 示例（超级马里奥兄弟）

```
Format:Digit
FormatType=VALUE

Lookup:Mode
0=[Demo]
2=[World Complete]

Lookup:Paused
0x81=▌▌
0x80=▌▌
1=▌▌

Lookup:Star
5=🌟
4=🌟
3=🌟
2=🌟
1=🌟

Lookup:Powerup
0=Small
1=Super
2=Fire

Lookup:Swimming
1= swimming

Lookup:Status
0= [Loading]
1= taking a vine warp
2= entering a warp pipe
3= entering a warp pipe
4= 🚩
5= [Stage Complete]
6= [Game Over]
7= [Entering Area]
9= growing
0xA= shrinking
0xB= 💀
0xC= powering up

Lookup:Quest
0x0=1st
0x1=2nd

Display:
@Mode(0xh770)@Paused(0xh776)@Star(0xM79f_0xN79f_0xo79f_0xP79f_0xQ79f_0xR79f)@Powerup(0xh0756) Mario in @Digit(0xh75f_v1)-@Digit(0xh75c_v1)@Swimming(0xh704)@Status(0xhe), 🚶:@Digit(0xh75a_v1), @Quest(0xh7fc) Quest
```

它由一系列 Lookup 对象、Format 对象和一个 Display 对象组成。

## 宏

宏将值转换为用户友好的字符串。宏放在显示字符串中，在评估显示字符串时会被替换。宏以 `@` 开头，后跟宏名称、左括号、要评估的值和右括号。

`@Macro(0xh1234)` 表示读取 $1234 处的字节，使用 `Macro` 宏进行转换，并将结果放入宏所在的显示字符串中。

每个宏的参数使用[值定义](/zh/developer-docs/value-definition)构建。

### Lookup

Lookup 定义如下：

```
Lookup:NameOfLookup
1=Text When 1
2=Text When 2
...
```

当显示字符串引用 Lookup 时，其值会在表中查找，并显示关联的文本。

**注意**：Lookup 中的值应为十进制。若要使用十六进制值，请添加 `0x` 前缀。（例如 `0x12=Eighteen`）

你也可以为单个文本字符串指定多个值：

```
1-5,10=Text When These Values
*=Text For All Other Values
```

在此示例中，值 1、2、3、4、5 和 10 都映射到第一个文本字符串。

任何与 Lookup 表中定义项不匹配的内容将返回与 `*` 关联的文本。如果 Lookup 表中没有 `*`，则没有条目的值将不返回任何文本。

### Format

Format 表定义如下：

```
Format:Score
FormatType=VALUE
```

以 `Format:` 开头，后跟 Format 转换器的名称。下一行给出 `FormatType=`，然后选择以下之一：

|   FormatType   |        Name         |    0     |    1     |    12345     | Description                                                                  |
| :------------: | :-----------------: | :------: | :------: | :----------: | ---------------------------------------------------------------------------- |
|    `SCORE`     |        Score        |  000000  |  000001  |    012345    | Generic value, padded with leading 0s to 6 digits                            |
|    `FRAMES`    |    Time (Frames)    | 0:00.00  | 0:00.01  |   3:25.75    | Number of frames elapsed (assuming 60 fps). Will be turned into MIN:SEC.CENT |
|  `MILLISECS`   | Time (Centiseconds) | 0:00.00  | 0:00.01  |   2:03.45    | Number of hundredths of a second elapsed. Will be turned into MIN:SEC.CENT   |
|     `SECS`     |   Time (Seconds)    |   0:00   |   0:01   |   3h25:45    | Number of seconds elapsed. Will be turned into MIN:SEC                       |
|   `MINUTES`    |   Time (Minutes)    |   0h00   |   0h01   |    205h45    | Number of minutes elapsed. Will be turned into HRShMIN                       |
| `SECS_AS_MINS` |   Time (Seconds)    |   0h00   |   0h00   |   3h25:45    | Number of seconds elapsed. Will be turned into HRShMIN                       |
|    `VALUE`     |        Value        |    0     |    1     |    12345     | Generic value (signed)                                                       |
|   `UNSIGNED`   |  Value (Unsigned)   |    0     |    1     |    12345     | Generic value (unsigned)                                                     |
|     `TENS`     |    Value (Tens)     |    0     |    10    |    123450    | Generic value with an appended 0 (if non-zero)                               |
|   `HUNDREDS`   |  Value (Hundreds)   |    0     |   100    |   1234500    | Generic value with two appended 0s (if non-zero)                             |
|  `THOUSANDS`   |  Value (Thousands)  |    0     |   1000   |   12345000   | Generic value with three appended 0s (if non-zero)                          |
|    `FIXED1`    |   Value (Fixed1)    |   0.0    |   0.1    |    1234.5    | Generic value with a decimal point inserted one character from the end       |
|    `FIXED2`    |   Value (Fixed2)    |   0.00   |   0.01   |    123.45    | Generic value with a decimal point inserted two characters from the end        |
|    `FIXED3`    |   Value (Fixed3)    |  0.000   |  0.001   |    12.345    | Generic value with a decimal point inserted three characters from the end      |
|    `FLOAT1`    |   Value (Float1)    |   0.0    |   1.0    |   12345.0    | Decimal value with one digit after the decimal (Rich Presence only)          |
|    `FLOAT2`    |   Value (Float2)    |   0.00   |   1.00   |   12345.00   | Decimal value with two digits after the decimal (Rich Presence only)         |
|    `FLOAT3`    |   Value (Float3)    |  0.000   |  1.000   |  12345.000   | Decimal value with three digits after the decimal (Rich Presence only)      |
|    `FLOAT4`    |   Value (Float4)    |  0.0000  |  1.0000  | 12345.0000   | Decimal value with four digits after the decimal (Rich Presence only)         |
|    `FLOAT5`    |   Value (Float5)    | 0.00000  | 1.00000  | 12345.00000  | Decimal value with five digits after the decimal (Rich Presence only)         |
|    `FLOAT6`    |   Value (Float6)    | 0.000000 | 1.000000 | 12345.000000 | Decimal value with six digits after the decimal (Rich Presence only)          |

说明：

- `FRAMES` 计算将值乘以 100 再除以 60。若帧率不是 60，需自行转换并使用 `MILLISECS`。
- `TIME` 是 `FRAMES` 的有效别名，但推荐使用 `FRAMES`。
- `POINTS` 是 `SCORE` 的有效别名，但推荐使用 `SCORE`。
- `MILLISECS` 是传统格式，一直表示百分之一秒（非毫秒）。该别名容易误导。
- 若 `FRAMES`、`MILLISECS` 或 `SECS` 超过 59 分钟，格式将变为包含 HRSh

### 内置宏

自 DLL 1.0 版本起，可使用预定义宏表示最常见格式。以下宏现已隐式可用：

|       Macro       | FormatType  | Description                                                                                                           |
| :---------------: | :---------: | --------------------------------------------------------------------------------------------------------------------- |
|    `@Number()`    |   `VALUE`   | A generic value with no leading zeroes (-2147483648 - 2147483647)                                                     |
|   `@Unsigned()`   | `UNSIGNED`  | A generic value with no leading zeroes (0 - 4294967295)                                                               |
|    `@Score()`     |   `SCORE`   | A generic value, padded with leading zeroes to six digits                                                             |
| `@Centiseconds()` | `MILLISECS` | The number of hundredths of a second elapsed, and will be formatted as `00:00.00`                                     |
|   `@Seconds()`    |   `SECS`    | The number of seconds elapsed, and will be formatted as `00:00`                                                       |
|   `@Minutes()`    |  `MINUTES`  | The number of minutes elapsed, and will be formatted as `0h00`                                                        |
|    `@Fixed1()`    |  `FIXED1`   | A number with a decimal inserted one character before the end                                                         |
|    `@Fixed2()`    |  `FIXED2`   | A number with a decimal inserted two characters before the end                                                        |
|    `@Fixed3()`    |  `FIXED3`   | A number with a decimal inserted three characters before the end                                                      |
|    `@Float1()`    |  `FLOAT1`   | A floating point number, formatted with one digit after the decimal                                                   |
|    `@Float2()`    |  `FLOAT2`   | A floating point number, formatted with two digits after the decimal                                                |
|    `@Float3()`    |  `FLOAT3`   | A floating point number, formatted with three digits after the decimal                                                |
|    `@Float4()`    |  `FLOAT4`   | A floating point number, formatted with four digits after the decimal                                                 |
|    `@Float5()`    |  `FLOAT5`   | A floating point number, formatted with five digits after the decimal                                                 |
|    `@Float6()`    |  `FLOAT6`   | A floating point number, formatted with six digits after the decimal                                                  |
|  `@ASCIIChar()`   |     n/a     | Converts a value from 0x20-0x7F into a character using the ASCII character map. Other values will be converted to `?` |
| `@UnicodeChar()`  |     n/a     | Converts a value into a character using the 16-bit Unicode character map. Unknown values will be converted to `�`     |

## Display

Display 是显示在首页“活跃玩家”框和玩家资料“最后出现于”部分的字符串。

它通过将显示字符串中的宏替换为 Lookup 的文本或 Format 转换器的格式化值来构建。每个宏由单个 `@` 标识，后跟 Lookup 或 Format 的名称（区分大小写！），紧接着括号内是要发送给该 Lookup 或 Format 对象的值。

`Using @Powerup(0xh756)!`

这表示使用名为 `Powerup` 的 Lookup 或 Format，并传入地址 0x756 的 8 位值。转换后，将结果放在 "Using " 和 "!" 之间。

**注意**：Lookup/Format 名称区分大小写，必须与 Display 字符串中的用法完全匹配：`@test(0x1234)` 找不到 `Format:Test`

**注意**：Lookup/Format 定义中名称前后不能包含空格。`@test(0x1234)` 找不到 `Format:test   ` 或 `Format:   test`

### Lookup 解析示例

- `@Mode(0xh770)` - 显示游戏是否处于演示模式或世界已完成的地址的 Lookup。
- `@Paused(0xh776)` - 显示游戏是否暂停的地址的 Lookup（使用 3 个值，其中两个用于暂停和取消暂停）。
- `@Star(0xM79f_0xN79f_0xo79f_0xP79f_0xQ79f_0xR79f)` - 马里奥是否有星星无敌的地址的 Lookup。稍后详述。
- `@Powerup(0xh756)` - 显示马里奥是小、大还是有火焰能力的地址的 Lookup。
- `Mario in` - 用于将 Lookup 和 Format 对象串联的静态文本。
- `@Digit(0xh75f_v1)` - `Digit` 是定义为值的 Format 对象。地址 0xh75f 是 World 减 1（因为从 0 开始计数）。`_v1` 表示 + 值 1。`_v+1` 也正确。
- `-` - 分隔 World 和 Level 的更多静态文本，如 World 1-1 中的连字符。
- `@Digit(0xh75c_v1)` - `Digit` Format 对象的另一用法。这次查找关卡。World 1-X。
- `@Swimming(0xh704)` - 显示玩家是否在游泳的地址的 Lookup。
- `@Status(0xhe)` - 显示马里奥状态的地址的 Lookup，例如穿过管道。
- `, 🚶:` - 更多静态文本。🚶 是生命数的符号。
- `@Digit(0xh75a_v1)` - `Digit` Format 对象的第三次使用。这次检查玩家生命地址。
- `, ` - 静态文本。
- `@Quest(0xh7fc)` 用于查看玩家处于普通模式还是第二关（硬核模式）的 Lookup。
- ` Quest` - 静态文本。

### 条件显示字符串

```
Display:
?0x 000085=0?Title Screen
?0xT00007c=1?Custom Map in @Landscape(0xH00016c)
Playing Battle @Battle(0x 00007c*0.2) in @Landscape(0xH00016c)
```

现有的 `Display:` 标记仍用于指示显示块的开始。若下一行以问号开头，则视为条件显示字符串。两个问号之间的部分为条件子句。若条件子句评估为真，则使用该行剩余部分作为显示字符串。若评估不为真，则继续处理下一行。若以问号开头，则重复相同过程。若不以问号开头，则整行用作默认显示字符串。

**注意**：需要默认显示字符串，以防所有条件显示字符串都不匹配。若仅有条件显示字符串，脚本将看似无任何效果。

看此示例，若 $0085 的 16 位值为 0，显示字符串为 `Title Screen`。否则检查下一行。若 $007C 的第 7 位为 1，显示字符串为 `Custom Map in @Landscape(0xH00016c)`。否则，最后一行没有条件子句，直接使用。

与条件子句关联的显示字符串支持与默认显示字符串相同的语法。在此示例中，`@Landscape` Lookup 在条件显示字符串和默认显示字符串中均有使用。Lookup 本身只需定义一次。

条件短语支持前述所有地址访问器，以及 AND (\_) 和 OR (S) 逻辑，其中 S 标记 Alt 组的开始。注意 OR 子句仍需要“核心”组，[与成就相同](/zh/developer-docs/alt-groups)。

- `?0xH1234=32_0xH2345=0?and example`

  若 $1234 的 8 位值为 32 **且** $2345 的 8 位值为 0，则显示 `and example`

- `?0xH1234=32S0xH2345=1S0xH2345=2?or example`

  若 $1234 的 8 位值为 32（核心组）**且** $2345 的 8 位值为 1 **或** 2（Alt 组），则显示 `or example`

- `?0xH1234=32_0xH5678=33S0xH2345=1S0xH2345=2?and/or example`

  若 $1234 的 8 位值为 32 **且** $5678 的 8 位值为 33（核心组）**且** $2345 的 8 位值为 1 **或** 2（Alt 组），则显示 `and/or example`

**技巧**：可使用[成就编辑器](/orphaned/achievement-logic-features)创建条件。定义好条件后，使用 `Copy Def` 按钮将成就定义复制到剪贴板，以便粘贴到 Rich Presence 脚本中。

## 限制

- 脚本 60,000 字符限制
- 脚本 65,535 字节限制（非 ASCII 字符占用超过一字节）
- 显示内容 255 字节限制（非 ASCII 字符占用超过一字节）

## Rich Presence 自定义名称限制

禁止在 Rich Presence 中直接显示玩家输入的自定义文本。最常见的例子是直接将玩家输入的角色名或存档名显示在 Rich Presence 中。

此限制有助于防止不当或冒犯性内容出现在网站各页面，使 Rich Presence 的审核更易管理，并保护玩家隐私，因为玩家可能不知道其文本会被公开显示。

## 技巧与窍门

- 可在脚本任意位置添加注释。双斜杠 (`//`) 表示处理脚本时应忽略该行剩余部分。注意：注释仍计入脚本大小限制。
- 若需节省几个字符，Lookup 名称可短至单个字符。
- 可从地址中移除前导零（`0xh0001` 可简写为 `0xh1`）。
- 将所有值从十六进制转为十进制可占用更少字符。
- Unicode 字符并不总是“占用更少空间”。它们通常占用最多四个系统字符。
- 每个 `Lookup` 或 `Format` 命名映射可用相同或不同地址多次引用。可定义单个 `Format:Number FormatType=VALUE`，而不必为生命、分数、等级等分别定义。
- 在 Lookup 中适当添加空格有时可在不需要时隐藏某些 Lookup，如 `@Pause`、`@Star`、`@Swimming` 和 `@Mode` 所示。

### 值属性

使用 Lookup 和 Format 对象 `@object()` 时，可组合并执行计算。宏参数是[值定义](/zh/developer-docs/value-definition)，因此可使用乘法、加法甚至部分逻辑来生成内存中不直接可用的值。

**示例**
`@Score(0xh28*10_0xh29*1000_0xh26*100000) points`

这表示使用 Lookup 或 Format `Score`，并传入以下总和：

- 0x28 处的 8 位值乘以 10，加上
- 0x29 处的 8 位值乘以 1000，加上
- 0x26 处的 8 位值乘以 100000

## Unicode 标准符号

你可以在 Rich Presence 中使用以下符号：

▌▌=暂停  
🔁=续关  
⏰=游戏内时间/游戏时钟  
🔑=钥匙  
💣=炸弹  
❤️ 或 ❤=有心形生命值的游戏（如塞尔达）  
💰=金钱  
🚩=关卡/阶段

制作 Rich Presence 时，开发者需注意清晰传达信息。若使用非标准符号，可能对你来说有意义，但对他人可能完全令人困惑。**使用非标准符号时，请与他人确认**或让几个人看看你使用的符号是否有意义。若没有，请使用更好的符号、文字或符号与文字结合。

对于自定义 Unicode/表情符号，[ShapeCatcher](http://shapecatcher.com/) 是很好的资源，你可以画出要找的符号，AI 会找到类似匹配。但注意不要使用**过于冷门**的 Unicode，因为它们并非在所有系统上都能显示。

注意社区显示偏好：

![RP community display preferences](/rp-community-display-preferences.png)

## 开发 Rich Presence

工具包目前没有集成的 Rich Presence 编辑器，但可以在上传到服务器之前测试本地修改。启动游戏且当前 Rich Presence 已从服务器下载后，可在 `RACache\Data\XXX-Rich.txt` 中找到，其中 XXX 为游戏 ID。

Rich Presence 监视器（可从 RetroAchievements 菜单打开）会读取此文件，并在窗口打开时每秒显示当前值。

若修改 `XXX-Rich.txt` 文件并重新选择菜单选项，它将读取新修改并允许你立即测试，而无需将修改应用到服务器。继续修改并重新选择菜单选项，直到脚本按预期运行，然后将内容复制到服务器页面供他人使用。

**注意**：每次打开游戏时，`XXX-Rich.txt` 文件都会被当前服务器数据覆盖。只要在编辑器中保持文件打开，重新打开游戏后始终可以保存修改覆盖更新后的文件。

### 条件语法

Rich Presence 文件在引用地址时使用[条件语法](/zh/developer-docs/condition-syntax)。开发 Rich Presence 时应使用此语法，以便 Rich Presence 监视器能按预期读取地址。条件语法涵盖以下引用地址的方式：

- [内存大小](/zh/developer-docs/condition-syntax#memory-sizes)。这允许 Rich Presence 脚本区分 8 位地址和 32 位地址等。
- [前缀](/zh/developer-docs/condition-syntax#prefixes)。这允许 Rich Presence 脚本对地址应用特殊修饰符，例如地址是否为 [BCD 格式](/zh/developer-docs/value-definition#binary-coded-decimal)。
- [逻辑标志](/zh/developer-docs/condition-syntax#logical-flags)。若需在显示可能分布在多个地址的特定值时进行额外操作，这会很有帮助。

### 解析错误

| Code | Enum                     | Description                                                                                                                                                                                           |
| ---- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -2   | `INVALID_MEMORY_OPERAND` | A memory operand was expected and not found. Memory operands start with `0x`, then a size indicator. The most common causes of this are forgetting the `0x` or having an `_S` or `__` in the script.  |
| -3   | `INVALID_CONST_OPERAND`  | A lookup key could not be evaluated. The most common cause of this is using hex without the `0x` prefix. This may also occur on older versions of RetroArch when using CSV or range keys for lookups. |
| -6   | `INVALID_OPERATOR`       | An unknown operator was encountered. The most common cause of this is using `!` instead of `!=`                                                                                                       |
| -16  | `MISSING_VALUE`          | A macro was encountered without providing a value (i.e. `@Points` instead of `@Points(0xh1234)`)                                                                                                      |
| -18  | `MISSING_DISPLAY_STRING` | The rich presence script did not contain a `Display:` element, or contained only conditional display strings                                                                                          |
| -20  | `RC_INVALID_VALUE_FLAG`  | A non-combining flag is used in a non-trigger context. Combining flags are AddSource, SubSource, AddHits, AddAddress and AndNext.                                                                     |

此外，若看到 `[Unknown macro]`，表示无法解析宏名称。例如未定义 `Format:Points` 的 `@Points(0xh1234)` 会生成 `[Unknown macro]Points(0xh1234)`。

此问题有时在 `RACache>Data` 文件夹的 `<GameID>-Rich.txt` 文件中创建 Rich Presence 时发生。这种情况下，可在文件开头添加空行来修复。
