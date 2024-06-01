# `Trigger`

`Trigger` marks one or more conditions in an achievement as the logic that is expected to be the final logic to become true which causes the achievement to trigger. This allows the runtime to know when an achievement is about to trigger, so a challenge indicator can be shown on the screen.

When all conditions that must be true for the achievement to trigger are true except those marked with the `Trigger` flag, the achievement will become Primed. It will remain Primed as long as all of the previous conditions remain true, or until the achievement triggers or is deactivated.

This functionality allows putting indicators on the screen to help players know when a challenge is active, or more importantly, when they fail the challenge.

A prime example would be for a damageless boss fight. The `Trigger` flag would be put on the "boss is dead" condition. When all other conditions are true (ex: in boss fight, boss at full hp ([HitCount](/developer-docs/hit-counts) 1), not demo), the challenge indicator would be displayed. If the player takes damage, the HitCount on the "boss at full hp" condition would get reset, and the challenge indicator would go away.

Trigger should not be used if the player is not attempting a challenge. Achievements that would be earned without any additional effort from the player don't need to tell the player they're about to be earned.

Up to eight challenge indicators can be shown at one time (though rarely more than one or two should be). If indicators and leaderboard trackers are both visible, the tracker will appear above the indicators.

### Interaction with PauseIf

If the achievement is Paused while Primed, the indicator will become hidden.

If it is Paused before it is Primed, the indicator will not be shown at all until the achievement is unpaused.

When the achievement becomes unpaused, the indicator may be displayed or hidden depending on the state of the non-Trigger conditions.
