**Note**: currently the issue described here happens only on DuckStation standalone and RetroArch versions older than 1.9.1.

## Hardcore/Softcore

Some users like to use the save/load state feature to save their progress in a game. As you may know, this feature isn't allowed when playing with hardcore mode. But some users aren't hardcore gamers and prefer to keep hardcore mode disabled (let's call this mode softcore).

From time to time some users [report](FAQ#how-do-i-report-a-broken-achievement) that an achievement isn't triggering, and when asked they say they were playing in softcore.

One thing you all have to keep in mind is:

---

**If you use the load state feature expect to have issues of cheevos not triggering when they are expected to trigger.**

---

Here we'll try to explain to those who don't know the details of achievements development why this kind of issue happens.

## Basic concept behind an achievement

**Technically an achievement is a group of conditions that must be met in a particular frame of the video game.**

When you launch a game using an emulator with the RetroAchievements feature, the emulator is always checking if those conditions are met in the current frame. When all conditions for a particular achievement are met, it is awarded and the emulator stops checking the conditions for that achievement.

Examples of conditions:

- health bar is full
- health bar decreased
- have 9 lives
- currently on stage 3
- at the title screen of the game
- starting the boss fight
- the game is paused

The problem with softcore is that when you load a saved state you can ruin the logic behind an achievement.

## Examples

### Example 1: Beat the game without passwords

Imagine a game with 5 stages and with the password feature.

Some probable conditions to trigger the "Beat the game without passwords" achievement are (in a real cheevo there will be more conditions, but for this explanation let's consider only these ones):

- be at stage 1 (and memorize this event as something that happened)
- be at stage 2 (memorize it)
- be at stage 3 (memorize it)
- be at stage 4 (memorize it)
- be at stage 5 (memorize it)
- finish stage 5

So to get this achievement you have to pass through all stages and then beat the game.

When you are at stage 1, the emulator memorizes it, the same thing for all other stages. And when you finish stage 5 (beat the game) you get the achievement.

Now imagine this scenario:

- a softcore player started the game and played stages 1, 2 and 3
- they needed to stop playing when at stage 4 and then they saved a state to continue later
- they closed the emulator
- later they could play again, started the game, and loaded the state they saved
- played stages 4, 5 and beat the game

In this scenario, the achievement won't trigger.

After closing the emulator it "forgets" that you passed through stages 1, 2, and 3. When you run the emulator/game again and load the state being on stage 4, the emulator won't detect that you passed through the previous stages. Then the achievement won't trigger.

### Example 2: Defeat boss X without taking damage

Most likely the conditions to be met in a frame to make this achievement trigger are:

1. entered the boss room (and memorize this event as something that happened).
2. if the player takes any damage, forget they entered the boss room.
3. beat the boss.

In other words: to get this achievement the emulator must "know" that you entered the boss room, didn't take any damage, and beat the boss.

The important detail to pay attention to here: when you take any damage, the emulator "forgets" that you entered the boss room. Then even if you load a state to a point where you didn't take any damage but already entered the room, the emulator won't detect that you entered the room. And then the achievement won't trigger.

## Final Words

When [reporting a broken achievement](FAQ#how-do-i-report-a-broken-achievement) give as many details as possible, **and don't forget to mention if you are playing on hardcore mode or not**.

If you want to request an admin to manually award you an achievement that didn't trigger, be sure to provide qualified proof. Especially for achievements like those in the examples above (no damage, no passwords, no death, etc).
