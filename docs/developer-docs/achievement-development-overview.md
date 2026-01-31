---
title: Comprehensive Achievement Development Guide
description: Dive deep into the craft of achievement creation with this detailed guide covering basic concepts, editor tools, protection methods, logic tips, lesser-known features, and more.
---

# Achievement Development Overview

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

![achievement_editor](/achievement-editor.png)

### Flags

- <a name="pauseif"></a>[`PauseIf` Flag](/developer-docs/flags/pauseif)

  - <a name="pauseif-with-hit-counts"></a>[`PauseIf` with hit counts](/developer-docs/flags/pauseif#pauseif-with-hit-counts)

- <a name="resetif"></a>[`ResetIf` Flag](/developer-docs/flags/resetif)

  - <a name="resetif-with-hit-counts"></a>[`ResetIf` with hit counts](/developer-docs/flags/resetif#resetif-with-hit-counts)

- <a name="resetnextif"></a>[`ResetNextIf` Flag](/developer-docs/flags/resetnextif)

- <a name="addsource"></a>[`AddSource` Flag](/developer-docs/flags/addsource)

- <a name="subsource"></a>[`SubSource` Flag](/developer-docs/flags/subsource)

  - <a name="checking-for-a-negative-result"></a>[Checking for a negative result](/developer-docs/flags/subsource#checking-for-a-negative-result)

- <a name="addhits"></a>[`AddHits` and `SubHits` Flag](/developer-docs/flags/addhits-subhits)

- <a name="addaddress"></a>[`AddAddress` Flag](/developer-docs/flags/addaddress)

- <a name="andnext"></a>[`AndNext` and `OrNext` Flags](/developer-docs/flags/andnext-ornext)

- <a name="measured"></a>[`Measured` and `MeasuredIf` Flags](/developer-docs/flags/measured)

- <a name="trigger"></a>[`Trigger` Flag](/developer-docs/flags/trigger)

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
  - Using with `ResetIf`
  - Using with `PauseIf`
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
- When to use `ResetIf` or `PauseIf`
- When to use Delta or Prior
- Using BitCount for collectables
- Using `AddSource` with `Mem / Mem` comparisons
- Creating a Timer with `ResetIf` hits based on the speed of the game
- Using `bit0` to include or exclude odd-numbered values

## Lesser-Known Features

- Double-Clicking bitflags while in 8-bit view
- Right-Clicking addresses in the editor to jump to them in the Memory Inspector (also works with offsets to jump to the current address)
- Highlighting conditions and holding CTRL while clicking to change a field in multiple conditions at once

## Workflow Tips

- Using Google Sheets and Notepad++
- Editing local file

## Things to Avoid and Why

- Redundant `ResetIf`s
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
