---
title: Subsets
description: Learn about creating and managing subsets for RetroAchievements, including types like Glitch Showcases, Challenge Runs, and DLC. This guide covers naming conventions, approval processes, and examples of different subset categories.
---

# Subsets

_Advanced Developer Topic_

[[toc]]

## What are Subsets?

When browsing the [list of games](http://retroachievements.org/gameList.php), you will see that some games have a `[Subset]` tag in the title. Each of these contain achievements that for some reason or another, are not available in a game's base set. Subsets are typically home to specific types of challenge runs.

The methods to create a subset and means to play them will change once they become a more integrated feature. As of now, they require a patch to generate a unique hash and are separate entries from the base set, so achievements must be obtained separately as well. Information on creating these patches can be obtained [here](https://github.com/RetroAchievements/RAPatches).

## A Reminder

Challenge achievements are base set content by default. Challenges only become appropriate for subsets when they are of an extreme nature that is far beyond what a typical challenge might be such as a full game damageless challenge. Subsets should not be used as a dumping ground for challenges that for whatever reason are not perfect fits into the base set.

## Types of Subsets

### Challenge Runs

While many base sets include plenty of challenges, developers have the option to add challenges that last the duration of a game's playthrough to a Subset. These are typically self-imposed challenges that go against how a game is normally played. Examples:

- [Chrono Trigger - No Level Up](https://retroachievements.org/game/9966) requires players to complete the game without ever leveling up their characters.
- [EarthBound - Rare Drops](https://retroachievements.org/game/18280) requires players to obtain all the rare drops from enemies.
- [Final Fantasy - Solo Class](https://retroachievements.org/game/17996) requires players to complete the game using only one character class, but they need to do it with every class to master the set.
- [Super Mario Bros. - 5-Minute Speedrun](https://retroachievements.org/game/23910) requires players to complete the game in under a widely recognized threshold that is considered a significant accomplishment by the speedrunning community.
- [Pokemon - Professor Oak Challenge](https://retroachievements.org/searchresults.php?s=Professor+Oak+Challenge) There are several of these so far! This challenge requires players to catch and/or evolve every Pokemon possible between major story points in the game.
- [Trails in the Sky FC - NG Nightmare](https://retroachievements.org/game/11115) requires players to obtain 100% completion in a single, NG (New Game) playthrough on the Nightmare difficulty setting, as opposed to doing it on NG+ with carryovers.

### Extreme or Brutal Challenges

If it's generally voiced that a challenge is **too difficult**, it's a good candidate for a subset. However, just because the achievement(s) are possible to code does not mean they are possible to obtain; therefore, the achievement must still be obtainable. How difficult is too difficult? Something that few players of a set would be able to accomplish. If you expect under a 1% earn rate, it is probably extreme. If it feels unreasonable to require anyone to do an achievement, it is probably brutal.

- A good example of a single achievement that could be considered extreme or brutal is the infamous [Mr. Perfect from Mega Man (NES)](https://retroachievements.org/achievement/53290), which requires the player to complete the _entire_ game without taking damage.
- A good example of a full subset is [Ninja Gaiden | Shadow Warriors (NES) [Subset - Full Game Damageless]](https://retroachievements.org/game/25303).
- Does not have to be named Brutal Challenge, but that subset type should be referenced in subset plan/any subset vote. If there are any doubts about whether challenges fall into this category, contact Developer Compliance for a quick judgement.

### Multiplayer Cooperative Sets

If an achievement _requires_ input from more than one player in order to unlock it, then it cannot be in the base set. Multiplayer Cooperative sets must require two or more players to be inputting controls. Achievements must require multiple players in order to be appropriate for this type of subset. It is not acceptable to be able to simply earn achievements with a single player while in a multiplayer mode.

If the base game title is long, this subset type may be shortened. If a shortened name is required, the following prioritized list shall be used to find an option that fits: "Multiplayer Co-op," "Multi Co-op," or "Co-op".

### DLC and Expansions

Not very common, but will become more common as our console support expands. Achievements in these sets are exclusive to a game's downloadable content or expansion pack(s). Examples:

- [Arc the Lad 2 - Arc Arena: Monster Tournament](https://retroachievements.org/game/17001) was released as a bonus disc in the Arc the Lad Collection, this requires save data from Arc the Lad 2 in order to play.
- [F-Zero X - Expansion Kit](https://retroachievements.org/game/10962) - achievements are for content exclusive to the 64DD expansion of the game.
- [Return Fire - Maps o' Death](https://retroachievements.org/game/16851) is a separate release that provides additional maps to the game. It requires save data from the original game in order to play.

### Regional Differences

If a regional variant of a game does not have enough differences to warrant a "full" set, but you don't want to include it with the base set due to interference with base challenges, a subset may be an option to showcase the differences.

### User-Generated Content

If a game has a feature that allows players to make their own content such as custom levels, then a subset would be an acceptable place to include said content. Examples:

- [Irritating Stick - IrRAtating Custom Courses](https://retroachievements.org/game/20084) features custom stages made by various RA community members.
- [Tony Hawk's Underground - RAdical Custom Goals/Gaps](https://retroachievements.org/game/20476) features custom goals and gaps made by various RA community members.

### Grind Sessions

If achievements involve overly long and frustrating grinds that have no meaningful purpose, they're better suited for subsets. These include leveling characters to the maximum level, maxing out stats, performing a task an absurd amount of times, etc. when none of those things award the player. A good grind session subset will have a strong, cohesive theme.

- Please note that a grind does not automatically mean it's unsuitable for a base set: A good example of something grindy that awards the player, thus making it suitable for a base set, is [One of a Kind from Final Fantasy IV (SNES)](https://retroachievements.org/achievement/108720), which requires a highly RNG-reliant grind for an item to trade for said armor.

### Glitch Showcases

Glitching can have unpredictable effects in a game's memory, which can result in unwanted behavior for some achievements, thus making them not suitable for a base set. However many glitches can add fun or interesting gameplay, effects, or just silly actions and may be worth highlighting outside of the base set. Some examples of this are [Replica from Final Fantasy VII (PlayStation)](https://retroachievements.org/achievement/83776), [Rare Candy Addiction from Pokemon - Red and Blue Versions (Game Boy)](https://retroachievements.org/achievement/57643) and [Lock-Off the Lock-On from Sonic 3 & Knuckles (Genesis)](https://retroachievements.org/achievement/228498).

### Checkpoint Challenges

A subset where you have to collect or perform a lengthy grind prior each checkpoints, where checkpoints are clear and distributed throughout the game. Such subsets should not be heavily front-loaded, meaning that if most of the achievements are to be done before the first checkpoint, it is likely a poor subset candidate. A good example is most main game Pokemon Professor Oak Challenge subsets or [Zelda II: The Adventure of Link - Level-1 Runs](https://retroachievements.org/game/10311).

### Perma-Death Challenges

Restrictive challenges where player units or equivalent must never be used again if the die, expire, or otherwise lose in some way during play. (Examples: Pokemon Nuzlocke challenges or Strategy RPGs where perma-death isn't already a characteristic of the game). Note: These challenges may need support within the game or hack to be possible with the current toolkit.

### Bonus

A bonus set is a set with a variety of achievements that do not fit into the base set of a game for various reasons. These may be extremely difficult challenges that go beyond what is welcome, painful grinds that serve no particular purpose beyond getting stronger or collecting everything, a showcase of glitches, or many other kinds of things that wouldn't be considered good achievements for the base set.

- A good example of the variety pack nature of a bonus set is the Suikoden Bonus Set, which contains various challenge runs, rare drops, and extreme challenges within a single subset.

## Naming Scheme

To prevent players from getting confused, there is a specific naming scheme required for all Subsets:

- **Multiplayer Cooperative Sets**: Must have `[Subset - Multiplayer Cooperative]` following the base game title. For example: `Contra [Subset - Multiplayer Cooperative]`.
- **Challenge Runs**: Must have `[Subset - Challenge Name/Type]` following the base game title. For example: `Chrono Trigger [Subset - No Level Up]` and `Pocket Monsters Midori [Subset - Monotype Challenge]`.
- **DLC and Expansions**: Must have `[Subset - DLC/Expansion Name` following the base game title. For example: `Return Fire - [Subset - Maps o' Death]` and `F-Zero X [Subset - Expansion Kit]`.
- **User-Generated Content**: While not actually required, including `RA` in the subset title has been a fun way to name the content.
- **Bonus Sets**: Must have `[Subset - Bonus]` folowing the base game title. For example: `Castlevania - [Subset - Bonus]` and `Darkwing Duck - [Subset - Bonus]`

## Approval and Claims

The approval process and claiming of a subset will vary depending on if the subset type is pre-approved, your involvement with the base set, and whether or not you're a full developer or a junior developer:

|Authorship¹|Approval and Claiming Process|
|:--|:--|
|Sole Author of Core Set|• Subset must be approved by [Developer Compliance](https://retroachievements.org/createmessage.php?t=DevCompliance&s=Subset%20Approval%20Request%20-%20[Game%20Name]%20-%20[Subset%20Name]) ²³<br> • Does not require a plan and revision vote<br> • Considered a free claim ⁴
|Collaborative Author of Core Set |• Subset must be approved by [Developer Compliance](https://retroachievements.org/createmessage.php?t=DevCompliance&s=Subset%20Approval%20Request%20-%20[Game%20Name]%20-%20[Subset%20Name]) ²³<br> • Requires a plan and revision vote?<br> &nbsp;&nbsp;&nbsp;◦ No, if all active authors of the set approve<br> &nbsp;&nbsp;&nbsp;◦ Yes, otherwise<br> • Considered a free claim ⁴
|No Core Set Authorship|• Subset must be approved by [Developer Compliance](https://retroachievements.org/createmessage.php?t=DevCompliance&s=Subset%20Approval%20Request%20-%20[Game%20Name]%20-%20[Subset%20Name]) ²³<br> • If approved, a set plan must be posted in the base set's forum topic and must go through revision voting<br> • Is **not** considered a free claim<br> • In the event that both a revision and subset plan are made for a set, both claims will count as one
|Junior Developer|• In addition to the above cases, must first be approved by Code Reviewers and in accordance with any additional restrictions in the [Junior Developer Program](https://docs.retroachievements.org/developer-docs/jr-dev-rules.html#rules-and-restrictions)

¹ In the case of multiple revision authors, use the most restrictive ruleset in the table. Example: If there is a subset collaboration and any subset author is not a core set author, use the `No Core Set Authorship` rules.

² To Contact Developer Compliance, send them a site message [here](https://retroachievements.org/createmessage.php?t=DevCompliance&s=Subset%20Approval%20Request%20-%20[Game%20Name]%20-%20[Subset%20Name]) and replace the `[Game Name]` and `[Subset Name]` in the subject line with the game name and desired subset name. **Approval requests _must_ thoroughly explain why the proposed subset content is not appropriate for the base set.** This must be described in a way that someone who is not familiar with the game can clearly and easily understand.

³ The following are pre-approved subset types and therefore do not require contacting Developer Compliance:

- Multiplayer Cooperative
- Glitch Showcases
- User-Generated Content
- Challenge Run: Low Level Game/No Leveling Runs
- Challenge Run: Solo Class/Monotype Runs
- Challenge Run: Professor Oak Challenges for official Pokemon main series releases


⁴ For now, an admin must be contacted via Discord or by [messaging RAdmin](https://retroachievements.org/user/RAdmin) to mark a claim as free. As a courtesy, please only request this if you actually need the claim slot or if you expect a long development period.

### Notes

In the case of multiple revision authors, use the most restrictive ruleset in the table. Example: If there is a subset collaboration and any subset author is not a core set author, use the `No Core Set Authorship` rules.
