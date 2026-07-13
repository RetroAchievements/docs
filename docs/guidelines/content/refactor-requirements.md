---
title: Refactoring Requirements
description: This guide covers the requirements for refactoring a substandard, inactive developer's set.
---

# Refactoring Substandard Sets

[[toc]]

# Refactoring Overview

Refactoring a set on RetroAchievements is the act of bringing a substandard, inactive developer set up to modern standards. Ridding the library of poorly noted, coded, and implemented sets is the only way RetroAchievements can attain longterm stability. This doc provides guidance on what is required to bring a set up to modern standards and consider it no longer an instability risk to the project. Once a refactor is completed in accordance with these guidelines, the set can be marked by QA as "refactored" and should be considered stable in perpetuity.

**A refactored set should be able to pass a code review without needing corrections.**

# Finding a Set to Refactor

Only sets that are in the [Needs Refactoring hub](https://retroachievements.org/hub/3389) are eligible to be refactored.

# The Refactoring Process

The following aspects of a set must all be up to modern standards in order to be considered refactored and no longer in need of additional improvement:
- Code Notes
- Achievement Logic
- Leaderboard Function and Logic
- Title and Description Writing
- Rich Presence

## Code Notes

Refactored sets will follow a strict format standard that must be adhered to. Code notes must, at a minimum, contain the address's size, a description of what the address does or why it is used in the achievement code, and enumerated bit, hex, or float values only and their associated definitions.

**Static addresses**

Static addresses shall be formatted as follows:

- Bracketed size at the beginning of every note, may include BE or BCD as appropriate [16-bit BE], [16-bit BCD], [16-bit BE BCD]
- Bitflags shall not be bracketed, but may be included in the note description, not required though as seeing values as bits makes it clear that the address contains bitflags
- Address description in clear, concise verbiage - may expand as needed, but should not unnecessarily expand description
- Values listed either in hex or float depending on address type. BCD addresses may use decimal to describe values. Should be increasing in order unless out of order makes sense for something like Map ID progression where the IDs are not ordered sequentially
- Values must use an = sign, however spacing is optional: no spaces, space before/after =, or on both sides

```
[16-bit BE BCD] Description
1=Value 1
2=Value 2
...
XXX=Value X
```
```
[8-bit] Event bitflags
Bit0 = Something occurred
...
Bit7 = Something else occurred
```

## Achievement Logic

Achievement logic must be free of bad practices such as lack of Mem/Delta checks, unnecessary use of hits, resets, and pauses, and unnecessarily complex or extraneous logic.
- Many older sets were inadequately RAM dug and will likely benefit from or require additional RAM digging in order to ensure proper addresses are used

## Leaderboard Function and Logic

Any leaderboard that submits a value tracked in-game should be instantaneous, not primed, unless there is an exceptionally compelling reason. Instantaneous leaderboards reduce screen clutter and are much more simple to code and maintain. Leaderboard logic is held to the same expectations as achievement logic.

## Title and Description Writing

At a minimum, gross errors such as miscapitalization, unnecessary parentheticals, and grammar mistakes should be corrected. If writing is generally poor, the set should be referred to the [WritingTeam](https://retroachievements.org/user/WritingTeam) so they can put it into the [Noncompliant Writing hub](https://retroachievements.org/hub/24397).

## Rich Presence

Rich Presence must be dynamic and free of useless information. Unclear emojis and superfluous language should be removed to ensure RP is clear, concise, and understandable by site viewers who may not be particularly familiar with the game.

# Save States

While conducting a refactor, if an achievement set does not already have a complete set of save states archived, the refactoring developer should collect a full set of states and submit them to the repository in accordance with INSERT LINK TO FUTURE SAVE DOC.

# Refactor Notification

Upon fully completing a refactoring, developers should notify [QATeam](https://retroachievements.org/user/QATeam) via site message. QA will confirm the set meets full refactor criteria and remove it from the Needs Refactoring hub.