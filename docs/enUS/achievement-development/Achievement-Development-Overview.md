## Intro

Page is heavily WIP, but the goal is to dive deep into achievement creation. Will probably end up merging the "Real Examples" into this section somehow. Each flag, type, size, comparison, etc. will have its own page to show the various ways they can be used. Will also include several tips, case studies, etc.

## Basics

- Adding Games to the Database
  - Everything you ever wanted to know (but were too scared to ask) about hashes
  - Patch Guide
- RAM digging
  - Utilizing Game Genie, Game Shark, Codebreaker, Action Replay, etc. codes
- Code Notes
  - Formatting conventions

## Achievement Editor

There are several tools and options available to a developer. Knowing how to properly utilize them will improve the quality of your sets. These tools/options can be used in the Achievement Editor:

![achievement_editor](https://user-images.githubusercontent.com/45054151/128662028-74e64baf-46ff-4c9f-9837-3684bfb42ad8.png)

### Flags

- <a name="pauseif"></a>[`PauseIf` Flag](PauseIf-Flag)

  - <a name="pauseif-with-hit-counts"></a>[`PauseIf` with hit counts](PauseIf-Flag#pauseif-with-hit-counts)

- <a name="resetif"></a>[`ResetIf` Flag](ResetIf-Flag)

  - <a name="resetif-with-hit-counts"></a>[`ResetIf` with hit counts](ResetIf-Flag#resetif-with-hit-counts)

- <a name="resetnextif"></a>[`ResetNextIf` Flag](ResetNextIf-Flag)

- <a name="addsource"></a>[`AddSource` Flag](AddSource-Flag)

- <a name="subsource"></a>[`SubSource` Flag](SubSource-Flag)

  - <a name="checking-for-a-negative-result"></a>[Checking for a negative result](SubSource-Flag#checking-for-a-negative-result)

- <a name="addhits"></a>[`AddHits` and `SubHits` Flag](AddHits-and-SubHits-Flag)

- <a name="addaddress"></a>[`AddAddress` Flag](AddAddress-Flag)

- <a name="andnext"></a>[`AndNext` and `OrNext` Flags](AndNext-and-OrNext-Flags)

- <a name="measured"></a>[`Measured` and `MeasuredIf` Flags](Measured-Flag)

- <a name="trigger"></a>[`Trigger` Flag](Trigger-Flag)

### Types

- Mem
- Value
- Delta
  - `Mem > Delta` Comparisons
- Prior
- BCD
- Float

### Sizes

- bit0 - bit7
- 8-Bit
- 16-Bit
- 24-Bit
- 32-Bit
- Lower4 and Upper4
- 16-Bit BE
- 24-Bit BE
- 32-Bit BE
- BitCount
- Float
- MBF32

### General Comparisons

- `=`
- `<`
- `<=`
- `>`
- `>=`
- `!=`

### Flag Specific Comparisons

- `*`
- `/`
- `&`

### Other Toolkit Features

- Hit Counts
  - Using with Reset If
  - Using with Pause If
- Alt Groups

## Protections

- Demo Protection
  - Finding and testing demo addresses
- Save Protection
  - Delta and Prior
  - Using in-game timers
  - Using event flags
- Password Protection
- Cheat Protection
- Multiplayer Protection
- Other
  - Dipswitch
  - BIOS (PlayStation and Saturn)

## Logic Tips and Tricks

- Checkpoints hits
- Pause Locks
- Using Hit Counts as a timer
- Using Delta Values and Hit Counts to Detect an Increment
- Circumvent the Problem of a Counter Incrementing Twice in the Same Frame
  - `note: need to add something about how the toolkit still uses hex even if the value is in BCD`
- Various types of chains
- When to use Reset If or Pause If
- When to use Delta or Prior
- Using BitCount for collectables
- Using Add Source with `Mem / Mem` comparisons
- Creating a Timer with Reset If hits based on the speed of the game
- Using `bit0` to include or exclude odd-numbered values

## Lesser-Known Features

- Double-Clicking bitflags while in 8-bit view
- Right-Clicking addresses in the editor to jump to them in the Memory Inspector (also works with offsets to jump to the current address)
- Highlighting conditions and holding CTRL while clicking to change a field in multiple conditions at once

## Workflow Tips

- Using Google Sheets and Notepad++
- Editing local file

## Things to Avoid and Why

- Redundant Reset Ifs
- Single-Condition achievements
- Text-Based addresses

## See Also

- Point Distribution
- Badge Creation
- Rich Presence
- Leaderboards
- RATools
- Making Tutorial Videos
- Syntax Table
