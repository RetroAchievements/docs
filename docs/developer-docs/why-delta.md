---
title: Do I Really Need to Use `Delta`?
description: A deep dive into why Delta conditions are almost always a good idea to add to any achievement.
---

# Do I _Really_ Need to Use `Delta`?

Recently, and especially with the introduction of the [AutoCR tool](https://authorblues.github.io/retroachievements/AutoCR/), a lot of people have been asking questions about [`Delta` conditions](/developer-docs/delta-values) and whether they’re really as necessary as people say they are.

**Short answer: Yes.**

The `Delta` type is just like the `Mem` type, except it checks that memory’s value on the previous frame instead of the current one. Its main use is to make sure your achievement conditions weren’t true on the last frame, along with your other conditions that check if they are true now. This is one of the **only ways** to restrict your logic to a single frame, as depicted below:

![A graph showing achievement trigger conditions when using and not using `Delta`. When not using `Delta`, the conditions remain true for each frame after the conditions become true. With `Delta`, the achievement conditions are only true on the single frame the value changes.](https://i.imgur.com/nTlzpFB.png)

Conceptually, you should be thinking about achievement logic as a way to define _the moment when_ your conditions become true. This mindset will help you avoid false triggers and allow you to precisely control your players’ experience.

## Practical Reasons for `Delta`

### False Triggers

This is the number one reason that `Delta` is important. If you take away one thing from this article, let it be this: **Restricting your achievements to trigger only on a single frame prevents false triggers in so many cases that it’s always a good idea.**

Games have boot sequences, games have flickery or unpredictable memory; it’s very possible and quite common that some of your achievement conditions will become true when you don’t want it to trigger. Those conditions becoming true _on the same frame_ is a lot less likely. If you have an achievement that should pop when you beat a level, restricting it to pop when the level _becomes beaten_ is a huge help when all kinds of other stuff happens in the game’s memory during other parts of the game. It’s impossible to account for all possible situations, but `Delta` is a big way to mitigate false triggers in unforeseen circumstances.

### Save Protection

_See also: [Save and Password Protection](/developer-docs/save-and-password-protection)_

It’s usually not actually enough to say “are these conditions true now?” to trigger an achievement. Often there are many ways to reach those conditions in a way that shouldn’t trigger the achievement, and loading a save file is one of them. A `Delta` condition _alone_ may not be sufficient for save protection, since the values in memory are still changing whenever you load a save, but they will often be a part of it.

Even if your game doesn’t have save files or passwords, keep in mind that a lot of people play in Softcore where they can save and load states at any time, and ideally you’ll protect against that as well. So even games that you might not think benefit from this still can!

_(Note: If the above paragraph makes you ask, “how could `Delta` prevent save states from triggering achievements, when those memory addresses would still be changing when you load a state?”, the technical answer is that save states also save the `Delta` state for conditions that read it, so loading a save state will not activate `Delta` conditions based on the pre-load state.)_

### Testing/Development

If you activate or edit an achievement while its conditions are already true, it will be stuck in a “Waiting” state until it becomes false again. In this state, none of the conditions are processed or highlighted, even when it can be beneficial for you to see what’s going on. Rather than having to load an earlier state or back out of an end screen or something to reactivate it, having a `Delta` that restricts the conditions to a single frame would avoid the issue entirely.

## Frequent Concerns

### A `Delta` condition will make my achievement trigger when it’s not supposed to.

You should be adding a `Delta` condition _alongside_ your conditions that check the memory on the current frame. Since that’s an extra restriction on your achievement conditions, it should never cause extra triggers that wouldn’t happen without it.

### A `Delta` condition will stop my achievement from triggering when I want.

Under normal conditions, your achievement will always fire when its conditions go from being false to true. If you correctly identify _which_ specific condition becomes true at the moment you want it to trigger, adding a `Delta` check for that condition should not stop it from triggering at that moment.

### I don’t know what the previous state will be when my achievement triggers.

That’s okay! A `Delta` check doesn’t have to check for a specific state. In general, your conditions should be as specific as they can be without preventing triggers you want (that goes for achievement logic in general, not just `Delta`). Here are some examples:

- I want my achievement to trigger when the player collects 5 thingies. You can only collect one at a time.

```
Delta 8-bit 0x<thingies> = 0x04
Mem   8-bit 0x<thingies> = 0x05
```

- I want my achievement to trigger when the player kills the boss. There are lots of different weapons that do different amounts of damage.

```
Delta 8-bit 0x<bosshealth> > 0x00
Mem   8-bit 0x<bosshealth> = 0x00
```

- I want my achievement to trigger when the player enters room 3. There are two entrances to room 3, from room 1 and room 2.

```
OrNext Delta 8-bit 0x<room> = 0x01
       Delta 8-bit 0x<room> = 0x02
       Mem   8-bit 0x<room> = 0x03
```

- I want my achievement to trigger when the game state becomes 0xFF, corresponding to “game won”. The game state is complicated and the previous value could be almost any other value.

```
Delta 8-bit 0x<state> != 0xFF
Mem   8-bit 0x<state> =  0xFF
```

### I don’t need `Delta` because there is no situation where the current frame conditions are true and the achievement shouldn’t trigger.

First of all, this can never be true - see the above paragraph about save protection. Even games that don’t have a save system can be save stated in Softcore.

Even if you think you have the one achievement that doesn’t benefit at all from using `Delta` - well, even if that were true, adding it couldn’t hurt. It’s important to get into the habit of using it everywhere - it prevents false triggers often enough that it’s always a good decision to add, just in case.
