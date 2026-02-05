---
title: Am I Ready for Code Review?
description: Comprehensive guidelines for the Junior Developer Program, including rules, guidelines, and clarifications.
---

# Am I Ready for Code Review?
Now that your set is shaping up, you feel it's getting closer to publication.  A couple things are left to do, namely testing, debugging and adjusting things to avoid bad practices and improve your set.

Tips for testing:
- If you aren’t skilled enough to do the challenge, you can test individual pieces by creating dummy achievements for pieces of them, such as level completion, starting the challenge, taking damage. Often times you can freeze invincibility frames or other things to help test too.
- Always make sure that your achievement can pop, and always make sure your failure conditions (ResetIf, Pauselocks, etc) only happen when you expect.
- Try to approach your challenges and achievements from wrong directions and goofy actions. Players do all kinds of weird things. Maybe a player does something in a different order than usual. Maybe they shoot something you didn’t realize could be shot and the achievement fails unexpectedly. In short: **Try to break your achievements.**
- Test your Rich Presence in all game contexts (menus, title, in-game, in different game modes, early game, late game) to see if it ever displays something odd.

# Requesting a Review

Before you request a review on your set, it must be clear of bad practices. In particular, you must use [AutoCR](https://authorblues.github.io/retroachievements/AutoCR/) and go through every issue it flags. As with any automatic feedback tool, it is not perfect, and flags can sometimes be ignored. It is still invaluable to identify issues with your set, especially while you are still learning. In your Ready for Review post on #jr-devs-request, you must:
- Have an approved Set Plan for at least 7 days
- Explain your testing process
- Link to the Unpublished achievement page for your game
- Include a link to Set Plan Review thread
- Link to the AutoCR page for the set (using the Load by Game ID feature)
- Explain why any issue flagged by AutoCR has been ignored
  
Review requests deemed incomplete will simply be denied and you will have to make another one later. Take your time to get your set as close to publishable as you can before making that request; there's no rush! Don't hesitate to ask for help from your fellow juniors and code reviewers. Below is a list of absolute requirements before getting on the backlog:

[[toc]]

## The set is clear from bad practices in logic
Everything below should be **avoided**. If you need to make an exception, explain why.
- Achievements without a Delta-Mem pair
- Achievements using only a single address (even if it uses it for multiple conditions)
- Having a hit count target of (1) or higher without a way to reset hits
- Using ResetIf or PauseIf for negation instead of managing hits
- Using text based addresses in general
- Using addresses without code notes
- Comparing an address with a value not described in the corresponding code note
- Redundant AndNext
- Redundant Alt groups
- Using a Pauselock without a way to reset it
  
## Code notes are clear and concise

Read over the [Code Notes](/guidelines/content/code-notes) guidelines and ensure you are following all the advice.

- Check that you have a size tag on every note
- Check that every note has specific values noted, where appropriate
- Make sure *all* addresses used in achievements and leaderboards have a code note

## Assets have clear descriptions and unique titles with proper grammar

Read over the [Writing Policy](/guidelines/content/writing-policy) and be sure your titles, descriptions, and other written features are in compliance.

::: tip WRITING ASSISTANCE IS AVAILABLE
Are grammar and capitalization not your strong suit? Having trouble coming up with a concise description? Hop by the `#writing-requests` on discord and have them look over your achievements while you await your review. They’ll be happy to help you out.
:::

## Achievements have unique badges

- Badges cannot be temporary before getting into the backlog
- [The use of image generators is prohibited](https://docs.retroachievements.org/guidelines/content/badge-and-icon-guidelines.html#ai-generated-art-policy)

## The set has an appropriate Rich Presence

- Read the [Rich Presence ](/developer-docs/rich-presence) document to learn more.
- [Condition Syntax](/developer-docs/condition-syntax.html) will also be of help.
- It's a good opportunity to learn to use macros and conditionals.

## Achievements are ordered logically

- Under the Manage tab, you can set up the order through drag and drop or manually writing values.
- This is an important part of set presentation. Grouping things up thematically or chronologically makes it much more readable for players.
- Having achievements in the desired order also helps reviewers look through your achievements more quickly, and also helps us better see the strengths of your set design.

## Progression achievements and Win Conditions are properly idenfitied

- Achievements for beating a game are marked as Win Condition.
- Achievements that must be earned before earning any Win Condition are marked as Progression

## Achievements are save protected or password protected

Test that loading a save file (especially an end game save file) or loading from a password does not trigger any achievements.
  1.  Load up the game, then activate all achievements.
  2.  Load your save file or enter your password.
  3.  Does anything trigger?
      - If yes, you’ll need to add code to block them from triggering on save load.
      - Make sure to test that they still pop normally
      - Generally, loading a save file or password should not lock someone out of earning achievements. We are only looking for the save load/password load to not cause achievements to trigger.
- If there are save files, have you tested that your logic works with all save slots? That is a requirement for an achievement set.
  - If not, do so now.
  - If it does not work with all save slots, you will need to revise your logic so that it does so. Usually there is at least an "active save slot" address, and often the active save data gets copied to a common location. Either case should be handled.
- If the system uses a save on a memory card, have you tested that your logic works if the player has no memory card "inserted" in the emulator?
Note: This **does not** mean that achievements have to disallow passwords. It just means that achievements cannot be earned as a result of entering a password, which would happen if an achievement only checks that you are on a given stage, for example.

## Achievements are protected against cheats when appropriate

In most cases, cheat codes provide a benefit that makes achievements easier. And then are you really achieving anything?

- Add logic to your achievements to block the use of cheat codes if you are not already doing so.
- Sometimes a cheat code such as a level select makes sense to allow, especially for challenges. Examples: "Beat Level 3 without taking damage." Level select should generally be blocked for progression achievements where the game expects a normal playthrough to start at the beginning.

## Games have appropriate hubs and meta information

There are a variety of Genre, Subgenre, Publisher, Developer, Series, Language, and other metadata hubs that can be linked to the set. Think about which ones belong.

- A code reviewer can add them for you. Your Publisher, Developer, and Genre entries should match the hub names, so make any edits to match the hubs now.
- Be prepared to discuss any other possible hubs during your review.
- Add every known Release in the Manage tab.
