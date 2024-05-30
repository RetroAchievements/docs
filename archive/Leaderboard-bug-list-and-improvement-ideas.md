## Bugs

- Leaderboards only show the top 5 during the popup submit results, not your position (if you're not in the top 5). Show the player rank seems to be the right thing to do.
- Cancel only takes action on the first condition, everything else is ignored.
- Fix leaderboard order bug, the order specified by the dev is ignored instead displaying order of creation.
- Submission dates are not updating when an improved score is submitted. (The rank is updating)

## Improvement Ideas

### General

- Make all leaderboard submits hardcore only.
- Always cancel on reset.
- Add clone leaderboard button.
- Usurp leaderboard: Change it so when a player matches a score the most recent entry goes on top.

### Math and Syntax

- Add syntax for hits/add reset?
- Exponents syntax especially x^0.
- Order of operation calculation.
- Multiple start/submit conditions ie alts/ORs for start/cancel/submit
- Allow for the multiplication of two or more addresses

### Hidden Leaderboards and overlay

- Add an option to have hidden leaderboards - choose if visible.
- Add an option to hide cancel popup.
- Make submit box smaller?
- Add an option to be able to choose location in overlay.
- Add an option to display popup text that's not for any leaderboard. Allow for control of how long the popup will stay?
- Able to change overlay color.

Idea for on screen notification and an expansion on the idea: "Add an option to display popup text that's not for any leaderboard. Allow for control of how long the popup will stay"

The point is to help the player track their progress on certain types of achievements.

Using something similar to the leaderboard, when selected by the developer, allow hits to be displayed on screen. It could perhaps show hits, or the sum of hits from multiple conditions.

Also, maybe with a similar text info as rich presence, where on screen it would display 4/9 Goomba's stomped. or 20/100 seconds survived or 9 items collected, etc.

Beyond that, achievements with this type OSD info built in, they could either be turned on and off individually from the overlay. )Where they would always be off if the achievement was complete.) OR
have a manual start and stop similar to leaderboards.

This could be used to display failed attempts. For example a ResetIf could be marked as a failstate, when the reset happens OSD would show Escaping the cave without being seen: failed.
