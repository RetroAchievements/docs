# Rich Presence

[[toc]]

## Introduction

Rich Presence (RP) is **brief** overview of what active players are currently doing in their game. To have RP in a game you need a Rich Presence script, which is created by Developers. The script checks the player's game memory and reports the values of certain addresses with definitions assigned by the Developer such as which stage the player is on, how many lives they have, if the game is paused, what game mode they are playing, what the player has accomplished, etc. This information is reported back to the website once every two minutes.

A good rich presence should inform other users how far into the game you are (level/town/dungeon), and give an overall sense of how the player is doing (score/remaining lives/character level). Additional details may be useful, depending on their context within the game. Try not to go overboard with the detail though. Other players don't care what you named your dog, or need to know how many bullets you have left, especially since it only updates every two minutes. Additionally, the more fluff you add to a rich presence display, the more diluted the important information becomes.

**Example of RP in action:**

![Example of RP in action](https://i.imgur.com/E5097sz.png)

To see the RP live in a game click on the RetroAchievements menu in your emulator and then click on Rich Presence Monitor. A small window will show you your active RP. (Good for debugging)

![Rich Presence Monitor](https://i.imgur.com/XkCZoLG.png)

The best way to understand Rich Presence is to look at various examples in game, look at the addresses used and look at how the text is displayed in the Rich Presence Monitor and on site.

### How Does it work?

The game's Rich Presence script is downloaded with the achievement and leaderboard data for a game. As soon as the emulator validates this data, it starts a session for the user. This sets the user's 'Last Seen In' to 'Playing [game]'. 30 seconds later, the Rich Presence script will be evaluated and the result sent to the server. This will update the 'Last Seen In' for the player, which is also used in the 'Active Players' list on the front page. Every two minutes after that, the Rich Presence script will be evaluated again, and the 'Last Seen In' will be updated again. This continues until the user closes the emulator.

If there isn't a Rich Presence script for the game, the user has disabled rich presence, or the user has modified the Rich Presence script, the text will remain 'Playing [game]'.

The user's 'Last Seen In' may also say 'Fixing Achievements' or 'Developing Achievements' if they have any of the tool windows open. The first will display if achievements have been published for the set. The second if achievements have not been published for the set.

The Rich Presence script for a game can be found under the development section on each game's page:

![Dev click](https://i.imgur.com/sqxOjyL.png)

![RP shown](https://i.imgur.com/e7qoaNx.png)

## Example (Super Mario Bros.)

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

It breaks down into a series of Lookup objects, Format objects and one Display object.

## Macros

A macro converts a value into a user-friendly string. Macros are placed within a display string and will be replaced when the display string is evaluated. A macro starts with an `@`, then the name of the macro, an opening parenthesis, the value to evaluate, and a closing parenthesis.

`@Macro(0xh1234)` says read the byte at $1234, transform it using the `Macro` macro, and place the result in the display string where the macro had been.

Parameters for each macro are constructed using a [value definition](/developer-docs/value-definition).

### Lookups

Lookups are defined like this:

```
Lookup:NameOfLookup
1=Text When 1
2=Text When 2
...
```

When a display string references a Lookup, it's value will be located in the table and the associated text will be displayed.

**NOTE**: Values in the Lookup should be in decimal. If you want to use hex values, include a `0x` prefix. (i.e. `0x12=Eighteen`)

You can also specify multiple values for a single text string:

```
1-5,10=Text When These Values
*=Text For All Other Values
```

In this example, the values 1, 2, 3, 4, 5, and 10 all map to the first text string.

Anything that doesn't match an item defined in the lookup table will return the text associated with `*`. If `*` does not appear in the lookup table, no text will be returned if a value doesn't have an entry.

### Format

Format tables are defined like this:

```
Format:Score
FormatType=VALUE
```

Begin with `Format:`, then the name of the Format converter. On the next line, give `FormatType=`, then one of the following:

|   FormatType   |        Name         |     0     |     1     |     12345     | Description                                                                                        |
| :------------: | :-----------------: | :-------: | :-------: | :-----------: | -------------------------------------------------------------------------------------------------- |
|     `SCORE`    |        Score        |   000000  |   000001  |     012345    | Generic value, padded with leading 0s to 6 digits                                                 |
|     `FRAMES`   |    Time (Frames)    |  0:00.00  |  0:00.01  |    3:25.75    | Number of frames elapsed (assuming 60 fps). Will be turned into MIN:SEC.CENT                       |
|   `MILLISECS`  | Time (Centiseconds) |  0:00.00  |  0:00.01  |    2:03.45    | Number of hundredths of a second elapsed. Will be turned into MIN:SEC.CENT                         |
|      `SECS`    |    Time (Seconds)   |    0:00   |    0:01   |    3h25:45    | Number of seconds elapsed. Will be turned into MIN:SEC                                             |
|    `MINUTES`   |    Time (Minutes)   |    0h00   |    0h01   |     205h45    | Number of minutes elapsed. Will be turned into HRShMIN                                             |
| `SECS_AS_MINS` |    Time (Seconds)   |    0h00   |    0h00   |    3h25:45    | Number of seconds elapsed. Will be turned into HRShMIN                                             |
|     `VALUE`    |        Value        |     0     |     1     |     12345     | Generic value (signed)                                                                             |
|   `UNSIGNED`   |   Value (Unsigned)  |     0     |     1     |     12345     | Generic value (unsigned)                                                                           |
|     `TENS`     |     Value (Tens)    |     0     |     10    |     123450    | Generic value with an appended 0 (if non-zero)                                                     |
|   `HUNDREDS`   |   Value (Hundreds)  |     0     |    100    |    1234500    | Generic value with two appended 0s (if non-zero)                                                  |
|  `THOUSANDS`   |  Value (Thousands)  |     0     |    1000   |    12345000   | Generic value with three appended 0s (if non-zero)                                                 |
|    `FIXED1`    |    Value (Fixed1)   |    0.0    |    0.1    |     1234.5    | Generic value with a decimal point inserted one character from the end                             |
|    `FIXED2`    |    Value (Fixed2)   |   0.00    |   0.01    |     123.45    | Generic value with a decimal point inserted two characters from the end                            |
|    `FIXED3`    |    Value (Fixed3)   |   0.000   |   0.001   |     12.345    | Generic value with a decimal point inserted three characters from the end                          |
|    `FLOAT1`    |    Value (Float1)   |    0.0    |    1.0    |     12345.0   | Decimal value with one digit after the decimal (Rich Presence only)                                |
|    `FLOAT2`    |    Value (Float2)   |   0.00    |   1.00    |    12345.00   | Decimal value with two digits after the decimal (Rich Presence only)                               |
|    `FLOAT3`    |    Value (Float3)   |   0.000   |   1.000   |    12345.000  | Decimal value with three digits after the decimal (Rich Presence only)                             |
|    `FLOAT4`    |    Value (Float4)   |  0.0000   |  1.0000   |   12345.0000  | Decimal value with four digits after the decimal (Rich Presence only)                              |
|    `FLOAT5`    |    Value (Float5)   |  0.00000  |  1.00000  |   12345.00000 | Decimal value with five digits after the decimal (Rich Presence only)                              |
|    `FLOAT6`    |    Value (Float6)   | 0.000000  | 1.000000  |  12345.000000 | Decimal value with six digits after the decimal (Rich Presence only)                               |

Notes:
* `FRAMES` calculation takes the value, multiplies it by 100, and divides it by 60. If your framerate is something other than 60, you'll need to do the conversion yourself and use `MILLISECS`.
* `TIME` is a valid alias for `FRAMES`, but `FRAMES` is preferred.
* `POINTS` is a valid alias for `SCORE`, but `SCORE` is preferred.
* `MILLISECS` is a legacy format that has always represented centiseconds (not milliseconds). The alias is misleading.
* If `FRAMES`, `MILLISECS`, or `SECS` exceeds 59 minutes, the format will change to include HRSh

### Built-in macros

As of the 1.0 version of the DLL, you can use predefined macros for the most common formats. The following macros are now implicit:

|       Macro       | FormatType  | Description                                                                                                           |
| :---------------: | :---------: | --------------------------------------------------------------------------------------------------------------------- |
|    `@Number()`    |   `VALUE`   | A generic value with no leading zeroes (-2147483648 - 2147483647)                                                     |
|   `@Unsigned()`   | `UNSIGNED`  | A generic value with no leading zeroes (0 - 4294967295)                                                               |
|    `@Score()`     |   `SCORE`   | A generic value, padded with leading zeroes to six digits                                                             |
| `@Centiseconds()` | `MILLISECS` | The number of hundreths of a second elapsed, and will be formatted as `00:00.00`                                      |
|   `@Seconds()`    |   `SECS`    | The number of seconds elapsed, and will be formatted as `00:00`                                                       |
|   `@Minutes()`    |  `MINUTES`  | The number of minutes elapsed, and will be formatted as `0h00`                                                        |
|    `@Fixed1()`    |  `FIXED1`   | A number with a decimal inserted one character before the end                                                         |
|    `@Fixed2()`    |  `FIXED2`   | A number with a decimal inserted two characters before the end                                                        |
|    `@Fixed3()`    |  `FIXED3`   | A number with a decimal inserted three characters before the end                                                      |
|    `@Float1()`    |  `FLOAT1`   | A floating point number, formatted with one digit after the decimal                                                   |
|    `@Float2()`    |  `FLOAT2`   | A floating point number, formatted with two digits after the decimal                                                  |
|    `@Float3()`    |  `FLOAT3`   | A floating point number, formatted with three digits after the decimal                                                |
|    `@Float4()`    |  `FLOAT4`   | A floating point number, formatted with four digits after the decimal                                                 |
|    `@Float5()`    |  `FLOAT5`   | A floating point number, formatted with five digits after the decimal                                                 |
|    `@Float6()`    |  `FLOAT6`   | A floating point number, formatted with six digits after the decimal                                                  |
|  `@ASCIIChar()`   |     n/a     | Converts a value from 0x20-0x7F into a character using the ASCII character map. Other values will be converted to `?` |
| `@UnicodeChar()`  |     n/a     | Converts a value into a character using the 16-bit Unicode character map. Unknown values will be converted to `�`     |

## Display

Display is a string that gets shown in the 'Active Players' box on the front page and the 'Last Seen In' section of the player's profile.

It is built by replacing any macros in the display string with text from a Lookup or formatted values from a Format converter. Each macro is identified by a single '@', which is followed by the name for the Lookup or Format (case sensitive!), and immediately after, in parenthesis, a value specifying what to send to that Lookup or Format object.

`Using @Powerup(0xh756)!`

This means use the Lookup or Format that's called `Powerup`, and give it whatever 8-bit value is in the address 0x756. After converting, put the result in between "Using " and "!".

**NOTE**: Lookup/Format names are case sensitive and must exactly match the usage in the Display string: `@test(0x1234)` will not find `Format:Test`

**NOTE**: Lookup/Format definitions cannot contain spaces before or after the name. `@test(0x1234)` will not find `Format:test   ` or `Format:   test`

### Example Lookup Breakdown

- `@Mode(0xh770)` - Lookup for the address that shows if the game is in demo mode or a world has been completed.
- `@Paused(0xh776)` - Lookup for the address that shows if the game is paused (3 values are used, two of them are for pausing and unpausing).
- `@Star(0xM79f_0xN79f_0xo79f_0xP79f_0xQ79f_0xR79f)` - Lookup for the address of if Mario has Star invincibility. More on this later.
- `@Powerup(0xh756)` - Lookup for the address that show if Mario is Small, big or has fire power.
- `Mario in` - Static text to string lookup and format objects together.
- `@Digit(0xh75f_v1)` - `Digit` is a format object defined as a value. The address 0xh75f is the World minus 1 (because it is 0 based, as in it starts counting at 0). `_v1` Means + value 1. `_v+1` is also correct.
- `-` - More static text to split World and Level. as in the hyphen in World 1-1.
- `@Digit(0xh75c_v1)` - Another use of the `Digit` format object. This time It's looking up the stage. World 1-X.
- `@Swimming(0xh704)` - Lookup for the address that shows if the player is swimming.
- `@Status(0xhe)` - Lookup for the address that shows Mario's status, such as going through pipes.
- `, 🚶:` - More static text. 🚶 is a symbol for lives.
- `@Digit(0xh75a_v1)` - Third use of the `Digit` format object. This time it's checking the player lives address.
- `, ` - Static text.
- `@Quest(0xh7fc)` A lookup to see if the player is in normal or on the 2nd quest, hardmode.
- ` Quest` - Static Text.

### Conditional Display Strings

```
Display:
?0x 000085=0?Title Screen
?0xT00007c=1?Custom Map in @Landscape(0xH00016c)
Playing Battle @Battle(0x 00007c*0.2) in @Landscape(0xH00016c)
```

The existing `Display:` marker is still used to indicate the start of the display block. If the next line starts with a question mark, it is considered to be a conditional display string. The portion of the line between the two question marks is the conditional clause. If the conditional clause evaluates true, then the remaining portion of the line is used as the display string. If it does not evaluate true, then processing proceeds to the next line. If it starts with a question mark, the same process repeats. If it does not start with a question mark, the entire line is used as the default display string.

**NOTE**: A default display string is required in case none of the conditional display strings match. If you only have conditional display strings, the script will appear to do nothing.

Looking at this example, if the 16-bit value at $0085 is 0, the display string is `Title Screen`. If not, the next line is examined. If the 7th bit of $007C is 1, the display string is `Custom Map in @Landscape(0xH00016c)`. If not, the final line does not have a conditional clause and is used.

Display strings associated with a conditional clause support all of the same syntax as the default display string. In this example, you can see the `@Landscape` lookup is used in both the conditional display string and the default display string. The lookup itself only has to be defined once.

The conditional phrase supports all of the previously mentioned address accessors as well as AND (\_) and OR (S) logic. Note that OR clauses still require a 'core' group, [just like achievements](/developer-docs/alt-groups).

- `?0xH1234=32_0xH2345=0?and example`

  if the 8-bit value at $1234 is 32 _and_ the 8-bit value at $2345 is 0, display `and example`

- `?0xH1234=32S0xH2345=1S0xH2345=2?or example`

  if the 8-bit value at $1234 is 32 _and_ the 8-bit value at $2345 is 1 _or_ 2, display `or example`

- `?0xH1234=32_0xH5678=33S0xH2345=1S0xH2345=2?and/or example`

  if the 8-bit value at $1234 is 32 _and_ the 8-bit value at $5678 is 33 _and_ the 8-bit value at $2345 is 1 _or_ 2, display `and/or example`

**Pro-tip:** Conditions can be created using the [achievement editor](/orphaned/achievement-logic-features). Once you have your condition defined, use the `Copy Def` button to copy the achievement definition to the clipboard so you can paste it into the rich presence script.

## Limits

- 65,535 character limit for script
- 255 character limit for what is displayed
- Unicode characters are allowed, but use count as more than 1 character towards the specified limits.

## Rich Presence Custom Name Restriction

Rich Presence that directly displays custom player input text is prohibited. The most common example being displaying what a player inputs as their character or file name directly into Rich Presence.

This restriction helps in preventing inappropriate or offensive content from showing on various site pages as well as makes the moderation of Rich Presence more manageable, in addition to protecting player privacy as players may not realize their text is being displayed publicly.

## Tips and Tricks

- Comments can be added anywhere in the script. A double slash (`//`) indicates the remaining portion of the line should be ignored when processing the script. Note: comments still apply toward the script size limit.
- Lookup names can be as short as a single character if you need to squeeze in a few extra characters.
- Leading zeros can be removed from addresses (`0xh0001` can be shortened to `0xh1`).
- Turning all your values from hex into decimal will take up less characters.
- Unicode characters don't always "take up less space". They often take up to four system characters.
- Each `Lookup` or `Format` named mapping can be referenced multiple times with the same or different addresses. You can define a single `Format:Number FormatType=VALUE` instead of defining individual ones for Lives, Score, Level, etc.
- Putting spaces in your Lookups sometimes before or after can allow you to hide certain lookups when they are not needed, like how `@Pause`, `@Star`, `@Swimming`, and @Mode do.

### Value Properties

When using lookup and format objects `@object()` it's possible to combine and perform calculations. Macro parameters are [value definitions](/developer-docs/value-definition), so you can use multiplication, addition, and even some logic to generate values that aren't directly available in memory.

**Example**
`@Score(0xh28*10_0xh29*1000_0xh26*100000) points`

This means use the Lookup or Format `Score`, and give it the sum of:

- the 8-bit value at 0x28 times 10, ADD
- the 8-bit value at 0x29 times 1000, ADD
- the 8-bit value at 0x26 times 100000

## Unicode Standard Symbols

You can without doubt use these symbols in rich presence.

▌▌=Paused  
🔁=Continues  
⏰=In Game Time/Game Clock  
🔑=Keys  
💣=Bombs  
❤️ or ❤=In a game with hearts (e.g. Zelda)  
💰=Money  
🚩=Level/Stage

While making Rich Presence, devs need to be careful that they are communicating clearly. If you are using non-standard symbols they will make sense to you but could be entirely confusing to others. **When using non-standard symbols, check them with someone else** or a few people to see if the symbols you use make sense. If they don't, use better symbols, use text or use symbols alongside of text.

For custom unicode/emoji [ShapeCatcher](http://shapecatcher.com/) is an excellent resource, you can draw what you're looking for and an AI will find similar matches. Just be careful to not use unicode that _too obscure_, as they don't all display on all systems.

Take note of community display preference:

![image](https://user-images.githubusercontent.com/32706333/56547116-a65a7c80-6539-11e9-951c-83b4f9930b3e.png)

## Developing Rich Presence

The toolkit does not currently have an integrated Rich Presence editor, but you can test local changes before putting them on the server. Once you've started a game and the current Rich Presence has been downloaded from the server, you can find it in `RACache\Data\XXX-Rich.txt` where XXX is the game ID.

The Rich Presence Monitor (openable from the RetroAchievments menu) reads this file and shows the current value every second while the window is open.

If you make changes to the `XXX-Rich.txt` file, and reselect the menu option, it will read the new changes and allow you to immediate test them without applying the changes to the server. Continue to make changes and reselect the menu option until the script is behaving as you expect, then copy the contents to the server page to make it available to everyone else.

**NOTE**: The `XXX-Rich.txt` file is overwritten with the current server data each time the game is opened. As long as you still have the file open in an editor, you can always save your changes over the updated file after reopening the game.

### Condition Syntax

Rich Presence files utilize [Condition Syntax](/developer-docs/condition-syntax) when referencing addresses. When developing Rich Presence you should use this syntax so that the Rich Presence Monitor can read the address as you expect it to. Condition Syntax covers the following ways to reference addresses:
-  [Memory Sizes](/developer-docs/condition-syntax#memory-sizes). This allows the Rich Presence script to tell the difference between an 8-bit address and a 32-bit address, for example.
- [Prefixes](/developer-docs/condition-syntax#prefixes). This allows the Rich Presence script to apply special modifiers to the address, i.e. if the address is in [BCD format](/developer-docs/value-definition.html#binary-coded-decimal).  
- [Logical Flags](/developer-docs/condition-syntax#logical-flags). This can be helpful if you need to do extra operations when displaying a specific value that may be spread across several addresses. 

### Parse Errors

| Code | Enum                     | Description                                                                                                                                                                                           |
| ---- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -2   | `INVALID_MEMORY_OPERAND` | A memory operand was expected and not found. Memory operands start with `0x`, then a size indicator. The most common causes of this are forgetting the `0x` or having an `_S` or `__` in the script.  |
| -3   | `INVALID_CONST_OPERAND`  | A lookup key could not be evaluated. The most common cause of this is using hex without the `0x` prefix. This may also occur on older versions of RetroArch when using CSV or range keys for lookups. |
| -6   | `INVALID_OPERATOR`       | An unknown operator was encountered. The most common cause of this is using `!` instead of `!=`                                                                                                       |
| -16  | `MISSING_VALUE`          | A macro was encountered without providing a value (i.e. `@Points` instead of `@Points(0xh1234)`)                                                                                                      |
| -18  | `MISSING_DISPLAY_STRING` | The rich presence script did not contain a `Display:` element, or contained only conditional display strings                                                                                          |
| -20  | `RC_INVALID_VALUE_FLAG`  | A non-combining flag is used in a non-trigger context. Combining flags are AddSource, SubSource, AddHits, AddAddress and AndNext.                                                                     |

Additionally, if you see `[Unknown macro]`, that means the macro name could not be resolved. For example `@Points(0xh1234)` without defining `Format:Points` would generate `[Unknown macro]Points(0xh1234)`.

This issue happens sometimes when a Rich Presence is created in the `<GameID>-Rich.txt` file in the `RACache>Data` folder. In this case the issue can be fixed by adding an empty line at the start of the file.
