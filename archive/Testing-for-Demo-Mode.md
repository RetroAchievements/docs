**Link to original post** [on RetroAchievements](http://retroachievements.org/viewtopic.php?t=81)

One of the more annoying things that can happen is if you leave your game running, and the game awards you achievements for reaching levels you haven't reached yet. This is fairly common, as many games of the 16-bit era still had 'attract modes', and is usually a pretty easy thing to fix with the achievements.

We are looking in the game to find something that is set when the game is in a demo mode. Either a small piece of memory set to `0`, or `1`, or `0xff`. It could be anything really.

To start it will help to play through the game a little, and set a few save states throughout different levels of the game. And then to begin finding this 'is demo mode active' memory, we should first reset the game and wait for the demo to play.

During when the game plays the first demo, use the **Memory Inspector** to start a new 8-bit test, (click `New 8-bit test`), and set the filter value to be equal to the last known value (under `Filter values:`, set to `==`), and press `Filter!` a few times. With each press, you should see the number of matches slowly become fewer, but not by much.

Next _wait_ til the game starts playing another demo but on a different level. When the next demo is playing, press Filter a few more times, and you'll see the candidates get smaller again. Continue to do this until you've eliminated as many candidates as you can.

**IMPORTANT**: Don't forget, you only want to press filter when the game is DEFINITELY in the demo. If you press when it's on the title screen, or playing a movie, or even when fading in or out, the value might not be set. There's no real way to know; we are assuming that it will be set (or unset) when the demo itself is playing, which itself is only a fairly likely assumption.

After viewing some or all of the demos, you will probably still have TONS of potential memory values. Here's the juicy part, that should eliminate a ton of candidates at once. Load up one of your save states where you are definitely in-game, playing and NOT in a demo.

Now we will be filtering for "I am NOT in a demo". Set your filter value to not-equal `!=`, and hit `Filter` **ONLY ONCE**.

At this point, the set of candidates now represent memory values that are "values different to when a demo was playing". Switch back to equal (=), and hit `Filter` a few more times (because we are saying 'whatever values we have, they are the same as the ones just now. The 'is demo mode' value will still be equivalent to whatever it was just now). It might help to move the character around the screen, or perform a few actions, between hitting the `Filter` button.

Next, load up your next save state, and perform the same routine. Your number of candidates should reduce further, until you have less than 100 remaining.

By now if you should have only a few candidates remaining. Likely values for the candidate will be 0, 1 or 0xff. If it is something else I'd recommend ignoring it, as it's not likely to be what we're looking for (but still, not impossible). For example, in [Sonic the Hedgehog (Mega Drive)](http://retroachievements.org/Game/1), the address is 0xfff0, and the value is 01 when a demo is active.

Our next step will be to verify our find. Pick one of these values and restart the game, keeping an eye on this value as the game plays the demos. Then load through each of your save states and see if it changes as you expect it to. Perhaps start a brand new game and see if it matches up correctly to the value it is when the other save states are active. Make a note of the value it is when the game is active.

Let's say we are pretty confident we've found the memory used to say 'game is in demo mode'. We'll save this to CodeNotes by adding a description in the Memory Inspector, then clicking `Add Note`.

Next we will use the `Achievements` dialog to find all the achievements that could unlock during the demos (probably all the level-based achievements), and add a new requirement to these achievements. Add it alongside the existing requirements. For this new requirement, set the address to the 'demo mode active' memory we found, set the mem size to 8-bit, and set the value we require to be equal to the value when the game is active.

That's it! Now the achievement will only trigger if the player is on a certain level, AND that the game is not in a demo mode!

Before we commit this back to the server, it's a good idea to test out this to see if it worked. Press ESC on the game to bring up the overlay and pause the game. Then click 'Reset Achieved Status' on this achievement in the 'Achievements' dialog, and confirm the prompt. Finally, click back in the game and press TAB to reset the game, and ESC to dismiss the overlay. Press F4 a few times to increase the speed of the game, and watch to ensure the achievement doesn't trigger. If it still triggers, it sounds like something went wrong. Try and check the requirements are entered correctly ('is demo mode' comparison probably needs to be '8-bit'), check that you reset the right achievement, and finally watch the value of the 'is demo mode' flag in the memory inspector.

If it worked correctly, select the achievement in the Achievements dialog, hit 'Commit Selected', confirm the dialog and you're done!

There are many alternative methods for getting the 'is demo mode' flag, but unfortunately none of them are guarantees. All I can do is suggest methods I've found in existing games. To start with, I'll suggest [Castlevania: Bloodlines (Mega Drive)](http://retroachievements.org/Game/69), and the achievement [Watery Grave (5)](http://retroachievements.org/Achievement/209). There is a mild cheat-protection in these requirements, but I'll just focus on the 'demo mode' part. Castlevania treats every screen as a type of 'screen mode'. To test for this, I started the game, and at the sega logo, I started an 8-bit test. I then assumed that the 'screen mode' would have changed by the time it was playing the 'intro movie', so I did a 'not equal', then an 'equal' filter to suggest that I only want candidates that have changed. I did this again at the 'press start' screen, then at the options screen, then the password screen, character select screen, and finally ingame.

By this point I had 10 matches. I mentally eliminated anything where the surrounding values were very random - this data is likely to be graphic or sound data, and won't be much use for us. After having repeated the test and watching each of these 10 values, I also eliminated a few more, as some of these appeared to change while I was still on the same screen. This left me with three values, `0x9002`, `0x9004` and `0x905e`. After going into game and playing for a few seconds, I could tell that `0x905e` was changing while I was still ingame. I opted to use `0x9002`, as it was located fairly close to clean boundary (`0x9000`). Also values like this are likely to be in the second half of RAM (between `0x8000` and `0xffff`) as they are easier for developers to address.
