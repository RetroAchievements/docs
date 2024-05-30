# Achievement Set Requirements

## Every Achievement Set MUST Have

- All game page information filled out, and game images uploaded (if you're not a full-dev, send the images to the code-reviewers).
- Game Badges for each achievement (they don't need to be distinct from each other, just don't leave them blank).
- Content covering up to completion so long as the game can be beaten. Whether it be defeating the final boss, completing a first loop, or completing all puzzles, achievement sets that do not cover at least beating the game are deemed unfinished and therefore subject to demotion. **Arcade-style games where the focus is on high scores (such as Pac-Man and Crystal Castles) are exempt from this rule.**
  - Regarding compilation games, such as [Intellivision Classic Games (PlayStation)](https://retroachievements.org/game/13908), it is not required for every game in the compilation to have achievements. However, those that do have achievements must adhere to the above policy.
- Progression and Win Conditions marked on applicable achievements. See [Progression and Win Condition Typing](Progression-and-Win-Condition-Guidelines) for full guidelines
- **Protection** for situations where the players can get achievements without effort, such as:
  - Demo mode;
  - In-game cheat codes;
  - Battery saves;
  - Passwords.
  - **See also**: [Achievement Templates](Achievement-Templates) and [Real Examples](Real-Examples) for some well known protection techniques.

## Recommended but Not Required

- Basic [Rich Presence](Rich-Presence) (only available for full-devs).
- Leaderboards for scores and time challenges.
- Adding the Missable Type to applicable achievements, especially for RPGs and long games.
  - Avoid overuse. If most of an achievement set is marked as missable, the mark becomes meaningless for that set.
  - Prior to the addition of Missable-Typing, the use of `[m]` in the end of achievement's title was the standard format to mark missables. **Do Not** mark missable achievements in this way. Use the achievement-type system instead.
- An achievement guide. Guides can be created and posted [here](https://github.com/RetroAchievements/guides/wiki).
- For games with text-triggered achievements (especially RPGs) it's recommend to find an event flag instead of hooking onto text or text ID. Text presentation varies between regional versions making multi-region support difficult.
