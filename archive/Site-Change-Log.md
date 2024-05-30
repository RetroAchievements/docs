## 22-December-2017

### Site update

1. Untracked status has been added as a possible user status. Untracked players do not show up in the global ranking. Instead of banning players who are found to be cheating they can be given the status of untracked. Also players who don't want to show up in the global rankings can also request this status, given by admin.

## 16-December-2017

### Emulators Update [v0.068]

_For RANes, RAGens, RAVBA, and RASnes9x_

#### General Changes

1. Game Titles with special characters such as `~` or `[` no long appear at the start of the entry database but at the end.

**Rich Presence:**

1. Parse Rich Presence has been changed into Rich Presence monitor. This will actively display rich presence
2. The Rich Presence Monitor also supports much more unicode
3. Rich presence is displayed every 2 minutes instead of every 10.

**Linking:**

1. Only Developers and Admin are allowed to link ROMs to game entries. This is to prevent unsupported ROM versions which will cause achievement errors and to prevent some forms of cheating.

#### Developer Changes

##### Achievement Sets Window:

1. Button layout reworked and compressed
2. Activate All has been added to Local Achievements
3. Buttons removed: Vote Up, Vote Down, Goto Web page, Close

###### Renames:

1. Fetch Latest ⇒ Refresh from Server
2. Reset Achieved Status, Activate ⇒ Activate Selected
3. Save Local ⇒ Save All Local
4. Achievement Processing Active? ⇒ Processing Active
5. Achievements found ⇒ Num Achievements Found
6. In local Commit Selected ⇒ Promote to Unofficial

###### Bugs Fixes:

1. Changing the points value of an achievement even after it's been updated the points value in the Achievements window does not update.
2. Activating an achievement and then making changes to it changes it's active status display from Yes to No even though it is still active.
3. After committing a change and then fetching latest or reloading the rom the changes made are no longer visible.
4. Other "under the hood" bug fixes.

## 1-December-2017

### Emulators Update [v0.067]

_For RANes, RAGens, RAVBA, and RASnes9x_

#### Developer Changes

**Memory Inspector:**

1. You can now scroll with your mouse-wheel in the memory viewport.
2. The memory viewer cursor no longer defaults to line 5, instead you are allowed to move it within a current viewport freely.
   When you move past the top or bottom the view will scroll up or down and keep the cursor position on the top most or bottom most line.
3. In the memory viewport hitting page down will go down 1 page depending on how many addresses you have in view. Previously it would only go down 5 lines.
4. In the memory viewport while selecting an address from the "Watching" it will put the selected address in focus on the center of the viewport relative to the length of the viewport.
5. While putting values into the Mem Viewport you can wrap around the right side instead of getting stopped at 0xf of that line. This allows for quicker corrupting, which can sometimes be useful for finding addresses.
6. When deleting a note in the Mem Viewport the selected stays at current address instead of going to 0x0.
7. Notes window has been extended to 5 from 3 lines.
8. Notes window now has word wrap and accept line returns greater than 3.
9. View Notes Button has been added below Delete.
10. Memory Search Range has been added allowing for Custom Range System RAM and Game RAM.
11. Searching for hex values in Given Value is allowed with the prefix 0x.

**Achievement Editor:**

1. "Clone selected" achievement has been replaced with "Copy" and "Paste" buttons.
   You are now able to copy and paste multiple selected requirements within an achievement, to an alt group or to another achievement!
2. "Delete Selected" will now delete ALL selected achievements instead of just one at a time.(edited)

**Rich Presence:**

1. No longer displays "Unknown". It just leaves a blank non-space. Devs this means you don't need to sweat as much about about those knowing every value state of an address in RPS.
2. If someone is playing a set without achievement or a Rich Presence script it the Rich Presence will say "Playing [game name]".

## 7-November-2017

### Site Update

Time stamps on user, game pages and in many places now show the year.

### Emulators Update [v0.066]

_For RANes, RAGens, RAVBA, and RASnes9x_

#### General Changes

- More anti-cheat measures were included.
- Soft IPS patching is removed in the listed emulators. Caused some incompatibilities.
- Issue with leaderboards popping twice is resolved.

#### Developer Changes

- Achievement Editor window is slightly extended.
- Scroll bar retains position when editing longer achievements.
- Issue with uploading broken badges is fixed.

## 30-October-2017

### Site Update

1. Password Reset is fixed and working.
   Now if you forget your password you can have a password reset link emailed to you: [http://retroachievements.org/resetPassword.php](http://retroachievements.org/resetPassword.php)

## 6-October-2017

### Site Update

**Started the log**

1. Rich Presence has been fixed:
   Now online shows all online players. Developers are able to create, edit and save rich presence. Number of currently online is no long visible by online players. Active players shows a time stamp of last updated.
