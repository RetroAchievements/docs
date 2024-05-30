In this example you will learn how to create an ingame Timer based on the framerate speed of the game.

Every game has an address which is constantly increasing, it functions like a engine in a car which is constantly moving despite what you do and starts as soon you start the game, the game itself is your car and some cars are faster than others.

> Please note that PAL Games (50hz) have a lower framerate than NTSC Games (60hz) and aren't compatible with this method. It is recommended to create every Timer based on the NTSC version of the game, unless PAL version is the only version existing and there is no NTSC Patch available.

**Addresses**

- `0x19`: Demo Mode: `01`=Active, `00`=Inactive
- `0x1a`: Game Engine (speed based on framerate)
- `0x25`: Game Paused: `01`=Yes. `00`=No
- `0x2c`: Game Progression: `03`=Before Stage starts, `04`=Stage started, `08`=Stage finished
- `0x30`: Stage ID (in this example, Stage 1)

![Contra-Timer](https://user-images.githubusercontent.com/8508804/57049681-81f45380-6c4f-11e9-9a35-f62c8124498a.jpg)

Link to Cheevo: [Contra Speedrun](https://retroachievements.org/achievement/65443)

YouTube: [ResetIfHits Demo: Contra Stage 1 60 seconds Speedrun ](https://youtu.be/6PpdG04tM4s)

**Conditions**

1. Activates the Cheevo's 'Hit' when entering a Stage (`03`only appears once in each Stage).

2. Triggers the Cheevo when a Stage has been finished.

3. Current Stage (in this example, Stage 1).

4. Paused the Cheevo if the Game is 'Paused' (Stops the Timer in the Cheevo).

5. Resets the Cheevo if `60` seconds `3600` Hits are reached. `1` second = `60Hits` (NTSC 60fps), `50Hits` (PAL 50fps).

6. Resets the Cheevo if `Demo Mode` is active.

7. Resets the Cheevos Timer when entering a new Stage.
