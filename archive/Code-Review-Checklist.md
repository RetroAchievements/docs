This is a list of things that code reviewers usually check when someone submits a set to be reviewed.

## Code Notes

- [ ] Clearly written. [Example](https://i.imgur.com/y6VAiK1.png)
- [ ] For all addresses used in logic
- [ ] Describing appropriate values used where applicable

## Achievement Logic

- [ ] No achievements with only one condition.
- [ ] Demo mode protection (when applicable).
- [ ] Cheat codes protection (when applicable).
- [ ] No redundant logic (like `0xADDRESS = 1` and `ResetIf 0xADDRESS != 1`).
- [ ] Understanding the difference and the right use of PauseIf and ResetIf.
- [ ] On a "get 100 coins" like achievement, use `>= 100` rather than `= 100`.

## Achievement Design

- [ ] No [unwelcome concepts](https://github.com/RetroAchievements/docs/wiki/Developers-Code-of-Conduct#unwelcome-concepts).
- [ ] Achievements for "Finish level N" rather than "Reach level N+1".
- [ ] No "two for one" achievements (like one for defeating a boss and another one for getting the dropped item).
