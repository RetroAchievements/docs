In this example, you'll see how hit counts can be used as a timer and award an achievement if a condition is true for 10 seconds.

Let's see what [Super Hang-On (Mega Drive)](http://retroachievements.org/Game/16)'s achievement [Speed Freak - Maintain at least 300kph for 10 seconds](http://retroachievements.org/Achievement/71) looks like in the Achievement Editor dialog:

**Addresses**

- `0x0055a`: is the speed.
- `0x0c757`: is 0x00 when the game is unpaused.

![speedfreak-example](https://user-images.githubusercontent.com/8508804/33312584-77f7fb0e-d40f-11e7-9daf-827c0f8d7dc6.png)

For this achievement, we are looking for a condition that is met 600 times consecutively. The reason why is that the genesis is locked into processing 60 frames of logic per second (NTSC at least?). And the condition we're checking is "speed is over 300". Also, we want the player to keep the speed above 300 without pausing the game.

**Conditions**

1. player's speed is above 300 for 600 frames (or 10 seconds have passed).

2. reset the hit counter if the speed goes under 300.

3. reset the hit counter if the player pauses the game.
