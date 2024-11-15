---
title: Am I Ready for Code Review?
description: Comprehensive guidelines for the Junior Developer Program, including rules, guidelines, and clarifications.
---

# Am I Ready for Code Review?

[[toc]]

Now that you have submitted your set for review (or perhaps you are still trying to decide if you are ready to do so), you may be wondering what you can do while waiting or while deciding.

Go through this list and check all your conditions to make sure you are doing these best practices and avoiding these common mistakes.  Please do all of this while you are waiting for your review to be picked up (or before submitting), making any changes necessary.  That way when your review is picked up, you’ll have far fewer issues to resolve and your review will be quicker.

Does this seem like a lot? Well, most developers are going to be doing these things as they develop achievements, or before they promote their set to core.  Tackle each part one at a time and go through it slowly. Feel free to ask us questions in `#jr-devs` about any of the topics if you have trouble with them.

## Use the `#jr-dev-forum`

- All interaction with your set creation, approval, and maintenance should be handled by yourself or through Code-Reviewers through the forum.
- Non-Code Reviewer developers may not demote/promote your work or resolve tickets for you.

## Check your titles and descriptions for good formatting and grammar.

Read over the [Writing Policy](/guidelines/content/writing-policy) and be sure your titles, descriptions, and other written features are in compliance.

::: tip WRITING ASSISTENCE IS AVAILABLE
Is grammar and capitalization not your strong suit? Having trouble coming up with a concise description? Hop by the `#writing-requests-forum` on discord and have them look over your achievements while you await your review. They’ll be happy to help you out.
:::

## Do you have badges?

- Your achievements will need badges before it is added to the queue..
- They should not be temporary badges.

## Do you have good code notes?

Read over the [Code Notes](/guidelines/content/code-notes) guidelines and ensure you are following all the advice.

- Check that you have sizes and specific values noted (where appropriate).
- Make sure all addresses used in achievements and leaderboards have a code note.

## Have you set up the order of your achievements?

- Under the Dev dropdown on the game page, select Unofficial Achievements, then from there select Manage Unofficial Achievements from the Dev dropdown. You can set up the order there.
- Having achievements in the desired order often helps reviewers look through your achievements more quickly, and also helps us better see the strengths of your set design.

## What Hubs does your game belong in?

There are a variety of Genre, Subgenre, Publisher, Developer, Series, Language, and other metadata hubs that can be linked to the set. Think about which ones belong.

- A code reviewer can add them for you. Your Publisher, Developer, and Genre entries should match the hub names, so make any edits to match the hubs now.
- Be prepared to discuss any other possible hubs during your review.

## Does your set have Rich Presence?

**If it does not**, add some! We expect Junior Developers to get experience with Rich Presence from their first set.

- Read the [Rich Presence ](/developer-docs/rich-presence) document to learn more.
- [Condition Syntax](/developer-docs/condition-syntax.html) will also be of help.

### Does it have both lookup macros and conditionals?**

- If not, you will want to use at least one of each to gain basic RP skills.
- Macros are used to turn address values into text based on the value of an address and are the basic building block of good dynamic RP.
- Conditionals are used to display different kinds of RP display strings based on game context.
   - The most simple is for when a user is on the title screen; you can use a conditional to display this; usually in-game data is invalid when on the title screen and can make it look odd.
   - If a game has multiple gameplay modes, you might want to display completely different data per mode. Conditionals let you do this.
   
### Have you tested your Rich Presence?

Make sure you test it under all game contexts (menus, title, in-game, in different game modes, early game, late game) to see if it ever displays something odd.

## Do any of your conditions use one single address (or even one total condition)?

Having a single address can make your achievement prone to false triggers, especially if an emulator initializes memory oddly, or if the memory has some flicker. As a result, we want to avoid overly simple logic.

- **Always** have more than one condition. Find a valid game state to pair with logic, such as “In game” or “player has control” You want to make sure the player is actually at a point where the other conditions are valid.
- If you have more than one condition, but only one address is being used, be wary of *"on to off"* transitions. `Delta < X` followed by `Mem >= X` is effectively going from "on to off" with X being treated as the threshold.
  - Find some other conditions to add to it to make these kinds of things more robust and ensure the player is actually in a good game state when they happen.
  
## Are you using Stored Hits (Sometimes called Target Hits)? Do you have a way to Reset those stored hits?

### What stored hits are and are not

**Stored hits are**: when you specify a specific amount of hits on a condition (or chain) and the condition is not considered true until that target amount of hits has been reached.

**Stored hits are not**: the rolling number of hits in the achievement editor that show up on conditions without a target.  Those are for tracking how many frames a condition has ever been true and are purely informative.

- Stored hits must always have a way to be reset, such as when a challenge is failed, when a player is no longer on the relevant level, or the player suffers a game over.  Otherwise these hits may stick around and cause a false trigger in the wrong context.
- Solution: Add a condition or chain of conditions (such as with And Next) marked with the Reset If flag. When the condition(s) are true, the stored hits will be cleared.

### Are you using the stored hits to help check when a value changes from one thing to another thing?

This is a thing you see on old sets from when the toolkit was smaller.  This is almost always the wrong way to do this.

- Solution**: Use the Delta flag!
  - Delta represents the value of an address on the previous frame.
  - You can pair `Delta address = Value originalValue` in one condition, and `Mem address = Value newValue` in the next condition and that will catch the very moment the address changes from *originalValue* to *newValue.*

### Are you using stored hits because you have several conditions you want to be true at the same time in order to trigger the achievement?

- The extra stored hits can lead to false triggers if one of them were to become untrue, leading to tickets.
- All conditions being true at the same time is the default behavior of the achievement logic.
- **Solution**: Remove any target hits unless you absolutely need to remember that something happened previously (before the current or previous frame).

## Are You Using Reset If? Should You?

Reset If is used to clear all stored (target) hits.  It is not needed and should not be used if you are not using hits. Reset If flags can affect emulator performance and so we don't want to have *"Unneeded Usage of Reset If."*

- Using Reset If when you do not have stored (target) makes it harder for the CR team to know if you understand how hits and resets are used.
- If you do not have target hits, you must "stop the achievement from happening if this condition is met" manner and the equivalent is to this is "allow the achievement to happen if the opposite condition is true."
  - **Solution**: Change `Reset If Mem address = Value X` into `Mem address != X`. This is equivalent logic and will work the same way.
  - Other comparisons can be inverted similarly. > becomes <=, etc.
  - Do this always as a best practice. Avoid unneeded Reset If flags!
- If you do have target hits, check to make sure you **are** using Resets to clear them under appropriate conditions.


## Are you using a Pause If condition where the Pause If condition has no target hits?

Pause If is only used to stop target hits in other conditions from increasing. Pause If can affect emulator performance and so we don’t want to have *"Unneeded Usage of Pause If."*

### Do you have any other conditions with target hits?

- Using Pause If when you do not have stored (target) hits in other conditions makes it harder for the CR team to know if you understand how hits and resets are used.
- If you do not have target hits, you must not use Pause If flags.
   - Pause If in this case is used as a "stop the achievement from happening if this condition is met" manner and the equivalent is to this is "allow the achievement to happen if the opposite condition is true."
   - **Solution**: Change `Pause If Mem address = Value X` into `Mem address != X`. This is equivalent logic and will work the same way.
   - Other comparisons can be inverted similarly. > becomes <=, etc.
   - Do this always as a best practice. Avoid unneeded Pause If flags.
- If you do have target hits, check to make sure that your Pause If conditions are being used to prevent stored hits from increasing.

### Is the Pause If part of a block of protection logic used in all your achievements?

You may be using Pause If in one of the following types of protection: save protection, cheat protection, demo protection, etc.

- If some of the achievements do need the Pause If conditions to prevent hits from increasing, then it is okay to leave them in all achievements, for consistency ease of maintenance.
   - If you do need to make a change, it can be applied consistantly to all achievements.
   - However, it is a good idea to consider removing the Pause If flags from achievements where they are not necessary, especially if the set suffers from performance issues in emulation.
- If no achievements use stored (target) hits, then you'll want to remove the Pause If flags.
   - **Solution**: Change `Pause If Mem address = Value X` into `Mem address != X`. This is equivalent logic and will work the same way.
   - Other comparisons can be inverted similarly. > becomes <=, etc.
- If it is not part of a protection block, refer to the earlier parts of this section.

## Are you using a Pause Lock?

### What ’is a Pause Lock?

A Pause Lock is a condition (or chain of conditions) where the Pause If line has a target amount of hits.  When this hit value is locked, the group (Core, Alt1, etc) will no longer increase any target hits and will never be true until the hits on the Pause If line are reset.

### Do you have a way to Reset the Pause Lock?

1. Yes, I am Resetting it using a Reset If in the same group (Core, Alt1, etc)
   - Unfortunately this will not reset your pause lock. Pause If has a higher priority than Reset If, so the Reset If will never function while the group is locked.
   - Solution A: Move your Reset If condition(s) to an Alt group. If you have no alt groups, you can create a single alt (delete the extra second alt) and put it in there. That alt will always be true while your reset condition is unmet, so the achievement can still trigger as normal.
   - Solution B: Put a Reset Next If condition (or chain of conditions) immediately before your Pause Lock condition (or chain of conditions that ends in a Pause Lock). Reset Next If has a higher priority than the condition (or chain of conditions) and will reset that specific pause lock.
   - Bonus Information: Reset Next If can also reset the hits in other kinds of chains, so you can reset only some hits, but not others.
2. Yes, I do have a way to Reset it, either with a Reset in another group (Core, Alt1, etc) or a Reset Next If before the Pause Lock.
   - Great! Make sure you’ve tested that it resets at the appropriate time.
3. No, I do not have a way to Reset the Pause Lock.
   - Uh oh! If you don’t reset the pause lock, the achievement will forever be unable to be earned unless the user resets the game using the console’s reset or unless they reload the game. That’s almost always bad, so we want to make sure we have a logical time to reset an achievement’s pause lock.  This might simply be on game over, or dying and restarting a level, or on the title screen.
   - Solution A: Put a Reset If condition (or chain of condition) in an Alt group. If you have no alt groups, you can create a single alt (delete the extra second alt) and put it in there. That alt will always be true while your reset condition is unmet, so the achievement can still trigger as normal.
   - Solution B: Put a Reset Next If condition (or chain of conditions) immediately before your Pause Lock condition (or chain of conditions that ends in a Pause Lock). Reset Next If has a higher priority than the condition (or chain of conditions) and will reset that specific pause lock.

## Have you looked for cheat codes and blocked them from being used?

In most cases, cheat codes provide a benefit that makes achievements easier. And then are you really achieving anything?

- Add code to your achievements to block the use of cheat codes if you are not already doing so.
- Sometimes a cheat code such as a level select makes sense to allow, especially for challenges. Examples: "Beat Level 3 without taking damage." Level select should generally be blocked for progression achievements where the game expects a normal playthrough to start at the beginning.

## Do you have achievements for entering a cheat code?

Strongly consider removing them by putting [VOID] at the start of their title. These almost always are poor designs for achievements and your code reviewer will suggest the same.

- Exceptions: a cheat code that causes a cool effect.
   - In these cases, you’ll want to have an achievement trigger off of the cool effect that happens during gameplay and not from entering the code itself.
   - There’s a game boy batman game with a cheat code that causes Robin to appear in boss fights to heal you. A cool achievement was made for Robin doing this.

## Does your game have save files or passwords? Make sure there's protection!

- If so, have you tested that loading a save file (especially an end game save file) or loading from a password does not trigger any achievements?
   1. Load up the game, then activate all achievements.
   2. Load your save file or enter your password.
   3. Does anything trigger?
      - If yes, you’ll need to add code to block them from triggering on save load.
      - Make sure to test that they still pop normally
      - Generally, loading a save file or password should not lock someone out of earning achievements. We are only looking for the save load/password load to not cause achievements to trigger.
- If there are save files, have you tested that your logic works with all save slots? That is a requirement for an achievement set.
   - If not, do so now.
   - If it does not work with all save slots, you will need to revise your logic so that it does so. Usually there is at least an "active save slot" address, and often the active save data gets copied to a common location. Either case should be handled.
- If the system uses a save on a memory card, have you tested that your logic works if the player has no memory card "inserted" in the emulator?

## Do any conditions in your achievements rely on text being a specific value?

If yes, it is strongly recommended you find an alternative. Text can be fickle, and often varies between versions and hashes. It also almost always makes adding translation patch support impossible.

## Are there any achievement ideas that you didn't include due to not knowing how to implement them?

- Take your improved skills with the toolkit and familiarity with the game and consider adding them to your set if it's appropriate.
- It’s alright if you do not publish them to Unofficial, but bring them up during your review if you are still having trouble and we will be happy to help you realize your ideas.

## Have you tested all your achievements?

Always make sure your achievements can pop!

- If you aren’t skilled enough to do the challenge, you can test individual pieces by creating dummy achievements for pieces of them, such as level completion, starting the challenge, taking damage.
  - Often times you can freeze invincibility frames or other things to help test too
- Always make sure your failure conditions (Reset If, Pause Locks, etc) only happen when you expect.
- Try to approach your challenges and achievements from wrong directions and goofy actions. Players do all kinds of weird things. Maybe a player does something in a different order than usual. Maybe they shoot something you didn’t realize could be shot and the achievement fails unexpectedly.
   - Basically: **Try to break your achievements.**
- Until your set is released, it is good to pick a few achievements a day and test them again. The more you test, the less issues there will be when the set goes live.