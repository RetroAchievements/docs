---
title: Detecting Increments with Delta Values and Hit Counts
description: Learn how to use Delta values and hit counts to accurately detect increments for achievements, with a detailed example from Streets of Rage 2.
---

# Using Delta Values and Hit Counts to Detect an Increment

Let's take [Streets of Rage 2 (Mega Drive)](http://retroachievements.org/Game/3)
as a case study, and [Steel Grip - Defeat 10 enemies without dropping your weapon](http://retroachievements.org/Achievement/55) achievement. This relies on four conditions:

**Addresses**

- `0xef33`: holding weapon
- `0xef37`: weapon type
- `0xef4e`: number of KOs (player 1)

![Streets of Rage 2 steel grip achievement configuration](/sor2-steel-grip-achievement-editor.png)

**Conditions**

1. the player is holding a weapon. We require this to be true, once. This is actually not necessary, but it's useful to show the progression. We are requiring the player to hold a weapon, at least once.

2. number of KOs that the player has made. It's 16-bit (meaning the value can be more than 255), and by using the delta and 'greater than' symbols, we are saying that we require the number of KOs to be bigger than the previous value, and we need this to happen 10 unique times. Every time the current value is bigger than the previous value, the hit count will go up by one. The next frame, the 'delta' value will have increased to be the same as the current value, this ensures that after every kill, the KO counter will go up by one, and the hit count will go up by one. **LIMITATION**: if the number of KOs goes up by two in the same frame, the hit count will only go up by one. It's a slight flaw that does happen a little more often than expected... it's not so accurate but it's a fairly close estimate to your number of kills.

3. reset all our progress, if the **weapon type** is different than the last known weapon type.

4. reset **all** our progress, if the player is no longer carrying a weapon.
