---
title: Achievement Set Requirements
description: This guide outlines the essential requirements for creating and submitting an achievement set, including game completion coverage, protection against easy unlocks, and proper game information.
---

# Achievement Set Requirements

[[toc]]

## Every Achievement Set MUST Have

- **All game page information filled out** 
   - Do not just link Publisher, Developer, and Genre hubs: fill out the fields in the dev panel or manage app so that this information appears on all lists that display it.
- **All game images uploaded**
   - Box art for homebrew and hacks are exempt when the game or hack's creator does not provide any.
- **Game Badges for each achievement**
   - They don't need to be distinct from each other, just don't leave them blank.
- **Content covering up to completion** so long as the game can be beaten. Whether it be defeating the final boss, completing a first loop, or completing all puzzles, achievement sets that do not cover at least beating the game are deemed unfinished and therefore subject to demotion.
  - Endless games where the focus is on high scores (such as Pac-Man and Crystal Castles) are exempt from this rule.
  - Regarding compilation games, such as [Intellivision Classic Games (PlayStation)](https://retroachievements.org/game/13908), it is not required for every game in the compilation to have achievements. However, those that do have achievements must adhere to the above policy.
- **Dynamic Rich Presence**
   - Dynamic Rich Presence has output that changes depending on things happening in the game.
   - Legacy sets with non-dynamic Rich Presence are added to the [No Dynamic RP](https://retroachievements.org/game/3083) hub. Please update when possible.
- **Progression and Win Conditions marked** on applicable achievements. See [Progression and Win Condition Typing](/guidelines/content/progression-and-win-condition-guidelines) for full guidelines
- **Protection** for situations where the players can get achievements without effort, such as:
  - Demo mode;
  - In-game cheat codes;
  - Battery saves;
  - Passwords.
  - **See also**: [Achievement Templates](/developer-docs/achievement-templates) and [Real Examples](/developer-docs/real-examples) for some well known protection techniques.
- **Support for unlocking achievements on *every* save slot**
   - Players must not be required to play on a specific save slot.
   - This can typically be done either through alt groups or index pointers.
   - Legacy sets that only support a single save are added to the [Single Save Support](https://retroachievements.org/game/28449) hub, and any ticket made on a set for this reason shall be considered valid and may not be closed without resolving the issue.
- **Support for unlocking achievements on every language included on linked hashes**
   - Changing the game's language must not prevent an achievement from being earned.
   - While not every hash must be linked to a set, the hashes that are linked to the set must have every language included in those hashes supported.
   - Any ticket made on a set for this reason shall be considered valid and may not be closed without resolving this issue.
   
 ::: info NOTE
 There may infrequently be legitimate reasons for not being able to support all linked languages and save slots, such as when the logic length would exceed the character limit. If you believe this applies to you, reach out to Developer Compliance to request an exception.
 :::

## Recommended but Not Required

- Basic [Rich Presence](/developer-docs/rich-presence).
- Leaderboards for scores and time challenges.
- Adding the Missable Type to applicable achievements, especially for RPGs and long games.
  - Avoid overuse. If most of an achievement set is marked as missable, the mark becomes meaningless for that set.
  - Prior to the addition of Missable-Typing, the use of `[m]` in the end of achievement's title was the standard format to mark missables. **Do Not** mark missable achievements in this way. Use the achievement-type system instead.
- An achievement guide. Guides can be created and posted [here](https://github.com/RetroAchievements/guides/wiki).
- For games with text-triggered achievements (especially RPGs) it's recommend to find an event flag instead of hooking onto text or text ID. Text presentation varies between regional versions making multi-region support difficult.
