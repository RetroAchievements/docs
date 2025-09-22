---
title: DevQuest Team
description: Lists responsibilities of and instructions for the RetroAchievements DevQuest Team. 
---

# DevQuest Team

The DevQuest team is responsible for processing DevQuest requests from developers, determining what games, sets, and other actions are appropriate for the various DevQuests, voting on cases related to this, and for planning new DevQuests and the rules for all DevQuests.

[[toc]]


## DevQuest Team Responsibilities

Everything related to DevQuests is the responsibility of the team:

- Answering questions by developers
- Voting on decisions related to DevQuests, which may include set eligibility, new quests, adding games to lists, etc.
- Adding Wish This Set games to the DQ16 games list
- Verifying games, sets, and other work for credit towards a DevQuest when pinged by a developer asking for credit.

## Voting Policy

For most decisions that need group input, create a new thread in the team channel on discord. It is best to have a discussion first except for simple decisions where not much information is needed. Ping @DevQuest to ensure the team is added to the thread.

After any needed discussion, voting should be done using a 3-day duration discord poll.  If the poll reaches a 60% majority of the entire team before the end, then the majority action may be taken immediately.  For close votes (1 vote difference), it is recommended that further discussion take place and another follow-up vote be taken.

## Adding Games to Lists

Some DevQuests keep a list of eligible games and will have games added by the DevQuest team:

- DevQuest 002: Retro Renovator
- DevQuest 013: complete.me
- DevQuest 016: Wish This Set
- DevQuest 022: This Belonged in a Museum!

### How to Choose DQ2, DQ13, DQ22 ?

1. If a set requires a "repair" such as adding or fixing protection (cheat, save, password, etc.), fixing an exploit that renders the set trivial, or fixing widespread ticket-causing issues, this set should be assigned to DevQuest 002 - Retro Renovator
2. If the set is missing some content that would render the set "incomplete" (missing progression, missing notable side content, etc.), this set should be assigned to DevQuest 013 - complete.me.
3. If a set needs code note clean up, rich presence improvements, and logic updates, but is otherwise stable and not missing notable content, that set should be assigned to DevQuest 022 if the amount of effort needed is significant to warrant full credit.
   - Sets that need repairs should not be assigned to DevQuest 022; a user may only use such sets for this quest if they have fully completed DevQuest 002 and then only if the non-repair-related work matches the DevQuest 022 dust-off goal.

::: tip DUAL CREDIT
If a set requires repairs that are appropriate for DQ2 and also has notable missing content that is appropriate for DQ13, it may appear in both lists. A developer could then do both actions and receive credit towards both. This is not considered "double-dipping" since the actions involved are distinct (repair as one action, completion as a separate action).
:::

### Approving additions to DQ2, DQ13, DQ22

For most cases, follow the voting policy above.

**Exceptions**:

- If the QA Team demotes a set, it can be added directly to the appropriate DevQuest without discussion (usually DQ2 or DQ13). Contact QAM for details so that you may form a repair/completion plan.

## Creating New DevQuests

### Ideas for DevQuests

Every so often we will vote on new DevQuests. The ideas are stored in the [New DevQuest Idea Megathread](https://discord.com/channels/310192285306454017/971157393813696522). Any team member can post an idea here. Generally, all ideas get pinned.  If a non-team member developer contacts the team with an idea, we will also add those.

### Voting for a New DevQuest

New Quest voting differs from the standard DevQuest team voting policy.

Voting is conducted by a senior member of the team in a new thread.  The conductor of the voting will provide a list of all possible DevQuests with brief descriptions. After this, every team member shall choose their top 3 choices.  1st place is assigned 3 points, 2nd assigned 2 points, and 3rd assigned 1 point. After every member has voted, the choice with the most points is chosen.

### Determining the Parameters of a New Quest

Once a quest is chosen, a member shall open a thread for the new quest in the team channel. Discussion and voting for different aspects shall occur. Voting shall follow the standard voting policy. Once the parameters are determined, a member shall draft up the rules and a team vote will be done on that ruleset.

The team should also provide possible badge art ideas to provide for the art team. Final badge art shall be voted upon if there are multiple possible options.

Finally, the new quest event shall be created and the rules added to the DevQuests document.

## Processing DevQuests

Most sheets have a lot of automatically updated information.  Generally, you need only enter the user's name and the game ID and check some boxes.

### Wheel Spins

- Copy the relevant list of random things to choose from and use a site like wheelofnames.com to build a wheel.
- Record the wheel spin using a tool like ShareX (use Capture > Screen Recording (Gif))
- Enter the results in the DevQuest sheet and log it in #DevQuest-logs
- Share the result with the developer that requested it.
   - Tip: Surround the result item with `||` and `||` to mark it as a spoiler
   - DQ23: Well of Wishes produces very large file sizes that may require Discord Nitro to share. If you are able to edit color mode and resolution, you may be able to fit this into the 10MB limit, but you can also use imgur or a similar site as assistance to share.

### General Process for Set Claims (Creation and Maintenance)

If a user is claiming a set for a creation question of a maintenance quest like DQ2, do the following.

- Update the tracking and claims sheets for the quest
- Ensure the developer's name is entered on the overall tracking sheet for the quest, and on a new row in the claims sheet for the quest.  (Note: DevQuests that only need one set will have a single sheet that functions as both)
- Name should be capitalized and spelled identically to the way it is on the RA website.
- Log the claim entry in the #DevQuest-logs channel on discord.

::: info NOT REQUIRED
Note that this is not a requirement for the developer, but it can help for questions like Most Wanted or Wish This Set where a set can become eligible mid-development.
:::

### General Process for Giving Credit

1. **Verify** the work has been done in the correct timeframe.
   - Most work cannot be credited retroactively and must have been completed within one week of the developer's request for credit.
   - Exception can be given if the user previously notified us that they were claiming the work for the particular DevQuest
   - This applies to Set-Creation DevQuests and Set-Maintenance DevQuests (DQ2, DQ13, and DQ22)
2. **Set-Based DevQuests (Creation and Maintenance)**:
   - Update the tracking and claims sheets for the quest
   - Ensure the developer's name is entered on the overall tracking sheet for the quest, and on a new row in the claims sheet for the quest.  (Note: DevQuests that only need one set will have a single sheet that functions as both)
   - Name should be capitalized and spelled identically to the way it is on the RA website.
   - For set-creation DevQuests, add the set to the Sets hub for that DevQuest and check the box on the sheet.
3. **Achievement/Ticket/Leaderboard DevQuests**
   - Check all entries on the user's column and verify them.
   - Generally, we highlight in green when acceptable, in yellow/tan if there is a question or more information needed, and in red if the work is not valid or inapplicable to the quest.
4. **Badge** If the user has done enough to earn the badge:
   - Log in to the DevQuest account
   - Navigate to the event page for the DevQuest
   - Scroll down to the achievement for the badge
   - Click on the command dots (far right at time of writing) and select Award
   - Enter the developer's name and submit
5. **Log**
   - Enter all actions taken in the #DevQuest-logs channel on discord.
   
### Which Quests can "Stack" ?

- DQ2: Retro Renovator and DQ13: complete.me - As long as the actions required are distinct, a developer could do both of these for a single game.
- DQ14: Laudable Leaderboards could stack with DQ2: Retro Renovator and/or DQ13: complete me. The action of adding leaderboards is a different action from either of those maintenance quests.
- DQ22: This Belonged in a Museum! Cannot stack with other revision quests. If either DQ2 or DQ13 would be applicable, they should be used instead.
- DQ4: Veteran Developer, DQ15: Console Conqueror, and DQ20: Genre and Subgenre Conquerors overlap with everything. Pretend all other DevQuests do not know about these quests.

#### Supplemental Guidance: Things that may not stack
- Tickets resolved as part of DQ2 cannot be used for DQ1: Ticket Massacre. Resolving tickets is required to be done as part of the DQ2 repair.
- DQ3: Singles in your area should not stack with DQ2: Retro Renovator or DQ22: This Belonged in a Museum! because both of those quests should correct one-condition achievements as part of their work.
- DQ14: Laudable leaderboards should not stack with DQ22: This Belonged in a Museum! because improving an old set by adding leaderboards fits with the dust-off theme.

### DevQuest 001: Ticket Massacre

When validating a ticket:
 
- Ensure the issue described by the ticket wasn't caused by a previous edit from the developer claiming credit.
- Ensure the ticket isn't against one of that developer's achievements.
- Ensure the ticket isn't a network issue.
- Ensure the tickets weren't used by this developer for DQ2 (which requires all tickets to be resolved for that quest).

When the column is complete and a badge is earned, mark the badge row for that column with "GIVEN BADGE" and move the column to the right past all the incomplete entries.

### DevQuest 002: Retro Renovator

- Follow the general process.
- Ensure all tickets have been resolved.
- Three total badges each requiring 3 sets to be repaired.
- Check off the Badge Awarded columns as they are earned.
- **DO NOT** forget to fill in the  *Completion Date*. This gets used by RA News to pull the correct three games for a given badge level.

### DevQuest 003: Singles in Your Area

- Verify that the old logic was backed up.
- Verify that the new logic isn't just a single-condition achievement in disguise and that a little extra robustness was added (such as an in-game check in addition to a delta->mem check)

### DevQuest 004: Veteran Developer

Generally, you don't have to worry about this one.  If you request access to the Vet Dev tracking sheet (it is a separate document), you can add in the usernames of developers that opt-in so that `tele` will start tracking them.

- Sweeps are performed by `tele`
- Code Reviews are performed by DevQuest team members who are also Code Review Team members.

### DevQuest 005: Trigger Happy

- Verify that added Triggers add value to a player and aren't just noise.
- Verify that Measured flags are measuring something of value.
- Measured flags should not be measuring things that are easily displayed in-game to the player (such as score, or quantity of widgets held)
- Verify that the developer did not leave a game partially updated. Trigger and Measured should be added to all appropriate achievements in a set touched by this quest, even if that would cause them to exceed 50 achievements updated.

### DevQuest 006: The Unwanted

- Ensure that the set was developed for a retail release (unless no retail releases remain for that system).
- For systems that require less than a full set, verify the conditions were met.
- System is determined by wheel spin.
- 100 sets or 50% of the library complete is the threshold for removal
- Systems must be 6 months past launch before eligible
- Respins are allowed if it has been 3 months since the last spin and the developer has not already used their respin token for this quest. See the DevQuests document for rules about how a developer can earn a new respin.

### DevQuest 007: Most Wanted

- Verify that the set appeared on Most Wanted list that was active at the time of claim, or that the set was less than 50% developed when it appeared on the list.
- This quest benefits when the developer reports the claim at those times. If the claim is already on the sheet when they request credit, it is acceptable to give the credit (even if it might be past the one-week window after claim completion)

### DevQuest 008: World Traveler

- Has both an overall tracking and a claims sheet. Don't forget to update both.
- When adding the claim, you have four options. 1 and 0.5 pt options, both unfinished (not yet credited) and finished (awards the points). Users need 2 points for the badge.
- Verify whether or not there is an English release on another supported system. mobygames.com is helpful for this. If there is, it will be 0.5 pt credit.
- The bar is fairly low. For example, if it's a Japanese game that has a fair bit of English text and no real need to read text to understand things, that still will count! "English release" is based on regions released.
- If it released in Australia, Canada, the UK, or the United States, that is an English release.

### DevQuest 009 : Launch Party!

- After a rollout it's generally a good idea to ask who wants credit for this.
- The 6 month window is from launch.

### DevQuest 010: It Takes Two

- Has both an overall tracking and a claims sheet. Don't forget to update both.
- Devs don't all have to apply the set towards It Takes Two. If one dev could apply it to another quest (rare, but some allow collaboration), they are allowed to choose that other quest instead.
- Ensure a developer seeking credit has done their fair share and has 20 or more achievements (unless it's a compilation, in which case they can have fewer if they've developed a full game in the compilation).

### DevQuest 011: The Genesis of RA

- Allows collaboration
- Does not allow prototypes and hacks

### DevQuest 012: Hacker's Habit & Hack at it Again

- Each "point" in this quest must be earned from a different franchise.
   - This carries across all badges in the quest. At the time of writing there are two badges. All four points must be different franchises
- If a hack is tiny, but larger than a mem hack or trivial hack, award only a half point. Otherwise, it is a full point.

### DevQuest 013: complete.me

- Has both an overall tracking and a claims sheet. Don't forget to update both.
- Three total badges each requiring 3 sets to be updated for completion.
- Check off the Badge Awarded columns as they are earned.
- **DO NOT** forget to fill in the  *Completion Date*. This gets used by RA News to pull the correct three games for a given badge level.

### DevQuest 014: Laudable Leaderboard

When validating a leaderboard:
 
- If the leaderboard is for the developer's own set, it must be from a set release before this quest existed.  These sets award half credit (and two sets get put on a line. This is an increasingly rare occurrence.
- When the column is complete and a badge is earned, mark the badge row for that column with "AWARDED" and move the column to the right past all the incomplete entries.

### DevQuest 015: Console Conquerer

- Sweeps are handled by a senior member (currently `TheMysticalOne` at the time of writing)
   - A specific query is run against the database by an engineering team member at the request of the member doing the sweep
- "Speedrunning" this quest should be discouraged.
- If a user is repeatedly submitting tiny sets for most consoles or repeating an archetypical set (ex: Flappy Bird), may use discretion to deny credit for these.

### DevQuest 016 : Wish This Set

- Has both an overall tracking and a claims sheet. Don't forget to update both.
- Two total badges each requiring 1 set to be created for completion.
- Check off the Badge Awarded columns as they are earned.
- Verify that the set appeared on Wish This Set before the time of claim, or that the set was less than 50% developed when it last appeared on Wish This Set.
- This quest benefits when the developer reports the claim at those times. If the claim is already on the sheet when they request credit, it is acceptable to give the credit (even if it might be past the one-week window after claim completion).
- There is no completion date column at the time of writing. Consider adding the completion date in the notes column.

### DevQuest 017: RA World Cup

- Has both an overall tracking and a claims sheet. Don't forget to update both.
- Both sports must be different.
- One sport must be identifiable as a "physical" sport (i.e. American Football, Golf, Boxing, Volleyball, etc.)
   - Most or all extreme sports would qualify too.
- Motosports are considered sports for this quest. (More realistic car racing and motorcycle racing, etc.)
- Collaborations are allowed

### DevQuest 018: Subset Station

- Has both an overall tracking and a claims sheet. Don't forget to update both.
- Both subsets must be for different games
- Subsets must be different types of subsets from each other
- If the subset was worked on at the same time as the base set, ensure that no other subsets done for this quest were the same situation.

### DevQuest 019: Wheel of Genres

- Verify their set matches the genre assigned.
- Genres assigned are determined by wheel spin.
- Respins are allowed if it has been 3 months since the last spin and the developer has not already used their respin token for this quest. See the DevQuests document for rules about how a developer can earn a new respin.

### DevQuest 020: Genre Conquerer & Subgenre Conqueror

- Sweeps are handled by a senior member (currently `TheMysticalOne` at the time of writing)
   - A specific query is run against the database by an engineering team member at the request of the member doing the sweep
- "Speedrunning" this quest should be discouraged.
- If a user is repeatedly submitting tiny sets for most consoles, may use discretion to deny credit for these.
- Users must opt-in and provide a sheet with all their sets
- Sets are recorded on a set tracking sheet (so we can check against duplicates or make credit adjustments in the future, etc.)
- Any user verifying sets should do some research to ensure the genre matches.
- Disputes are resolved by a team vote following the standard team voting policy.

### DevQuest 021: Homebrew Heaven

- Has both an overall tracking and a claims sheet. Don't forget to update both.
- Sets on the homebrew consoles (WASM, Arduboy, etc) are worth half credit.
- Three sets (or six half-credit sets, or a valid combination equivalent to three sets) are needed for the badge.
- Tiny homebrew is full credit (half credit if a homebrew console). Fun snack-sized games are part of the homebrew culture. This is also why this quest needs three.

### DevQuest 022: This Belonged in a Museum!

- Has both an overall tracking and a claims sheet. Don't forget to update both.
- Before awarding a badge, verify the developer completed at least one full dust off. There is a checkbox to mark this on the overall tracking sheet.

### DevQuest 023: Well of Wishes

- The overall tracking sheet is also the claims sheet.
- Enter the game ID on the tracking sheet and it will validate the game ID against the user's list.
- The main columns filled in here are developer name, the display name of the user owning the assigned list, the game ID, and the colon-separated list of valid games.
- The user whose request list is assigned to the developer is chosen by wheel spin.
- The Query Data sheet is periodically updated by MrOwnership (about once per month)
- Use the Display Name column of the Query Data to build your wheel. Check the date of the last update and build a new wheel if it is different from when you last built your wheel. When in doubt, build a new wheel.
- Find the user spun in the Query Data and copy the colon-separated list of game IDs.
- Paste this into the tracking sheet on the developer's role (be sure to add the developer if needed)
- Also parse it onto the *Eligible Games Lists* sheet's `Games List Generator`. This will generate the specific list of games with links.
- ON the Eligible Games sheet, insert a new column if needed (*please insert it so it is correctly alphebetized*). Copy the generated list and paste it into that user's column.
- Inform the user of their spin (ideally use a screen capture program like ShareX to do a gif recording of the wheel spin).
- Inform the user to verify the list on the *Eligible Games Lists* sheet in case the user has updated their list since the last update.
- When a user claims a game or asks for credit, entering the game ID on the tracking sheet will check it against the game ID list for verification.

### DevQuest 024: She's Got This!

- Has both an overall tracking and a claims sheet. Don't forget to update both.
- We accept trans women/girls as female characters.
- Two sets (or four half-credit sets, or a valid combination equivalent to two sets) are needed for the badge.
- Tiny hacks/homebrew are half credit, as are any collaboration.
- Verify that a hack's base game does **not** have its primary protagonist be female.
- Verify that both "points" of credit have different primary protagonists.
- When a user claims a game or asks for credit, entering the game ID on the tracking sheet will check it against the game ID list for verification.
