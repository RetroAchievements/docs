# FAQ

[[toc]]

## RetroAchievements FAQ

### What is HARDCORE mode?

If you want to have a one-to-one replication of how you used to play retro games in the distant past, then HARDCORE mode is what you are looking for. This feature restricts the player from ever loading save states (creating them is allowed for practice/ticket purposes when not playing on HARDCORE), using cheats, and any speed-altering features like rewinding, slow-motion, and advancing the game one frame at a time by using the emulator's built-in functions. Note that the only exception to altering speed is fast-forward which IS allowed. Basically, you are playing the game without the game-altering enhancements emulators come with.

While you will still be able to get achievements in Softcore, playing on HARDCORE mode is the only way to earn a Mastery for a game, displaying your skill- and prowess to your fellow retro achievers and competitors by showing up on the game's page as a master of the game, as well as on the main leaderboard. Playing on HARDCORE will also allow you to set times, scores or participate in miscellaneous challenges on game-specific leaderboards.

**Note**: If you want to play with the HARDCORE mode disabled (also known as "Softcore"), expect to have some issues. Read in [this link Why you shouldn't use the load state feature](/orphaned/load-state-feature).

### What are the white points?

White points, known as RetroPoints, are secondary points based on how rare an achievement is, **however this feature is not very accurate currently**. Explained [here in detail](https://retroachievements.org/viewtopic.php?t=1015).

### Will RetroAchievements support this or that console?

**Short answer:** Yes, it will.

**Long answer:** The only correct answer to this question is "Whenever someone with the skills and desire to code support, does just that." - Everyone here is a volunteer so additional support and features happen when they happen. In many cases support for a console is dictated by the emulator(core) developer and is outside of Retroachievement's control.

For more information on specific consoles you can check here:
[System X When?](/orphaned/system-x-wen)

### How do I request an achievement set?

On each game's page there is a link to "Request Set".

![request1](https://user-images.githubusercontent.com/45054151/233339422-299490ba-58bc-45bb-a424-734d66030666.png)

Clicking this will add your name to the list of users who have requested a set for the game. Clicking again will withdraw the request. To see other users who have requested the set, click on the "Set Requestors" link below the game's box art.

![request2](https://user-images.githubusercontent.com/45054151/233339469-eeefcb42-12d7-40b2-80d3-cd4bd9b37568.png)

![request3](https://user-images.githubusercontent.com/45054151/233339567-3df2606a-9407-4d24-beff-1d1ad2aa035c.PNG)

The total number of requests are tallied and displayed on the [Most Requested Sets](https://retroachievements.org/setRequestList.php) page which can also be sorted by console. If and when a set is created the user request will be automatically returned to use for another game.

The number of requests available to a user is determined as follows:

- 1 for every year you've had your account
- 1 for every event badge you have earned
- 1 for reaching 1250, 2500, 5k, 7500, 10k
- 1 for every 5k from 10k-100k
- 1 for every 10k thereafter

**Note**: All achievement developers are volunteers, requesting a set gives no guarantee that achievements will be made. The purpose of the request feature is to give developers visibility to what players want most. You might also consider making achievement suggestions on a game's forum page to help get a set off the ground.

---

## Emulation FAQ

### Where can I find ROMs?

Not here. It is illegal to host or distribute copyrighted ROMs. However we have a page about [Free Games](/orphaned/free-games) where you can find some really cool homebrews.

### Why do I get a message that some achievements are unsupported?

![RetroArch Unsupported](https://user-images.githubusercontent.com/42773860/105667518-60b6aa80-5ea9-11eb-84a7-f024985c1b5a.png)

![RALibretro Unsupported](https://user-images.githubusercontent.com/32680403/105637785-72a63800-5e2c-11eb-9b88-5df51986075b.png)

This message informs the user that some achievements cannot be activated either because their version of RetroArch and/or the core being used does not support some newer logic features, or because required areas of the RAM are not exposed for achievement processing.

In most cases updating to the latest version of RetroArch will correct the problem, alternately updating or using a different [supported core](#which-retroarch-core-should-i-use) will resolve the problem.

### What do I do when the achievement isn't working right?

When problems with achievements occur, either where the achievement wasn't awarded to you or it was awarded at the wrong time, there are solutions to get the problems fixed and for proper credit to be given to you! First you'll want to [report the broken achievement](#how-do-i-report-a-broken-achievement). (This is an excellent way to contribute to the betterment of the community!) It creates a ticket report for the achievement developers who will then review the problem and look for a solution.

If the achievement wasn't awarded, you can request a [manual-unlock](#how-do-i-request-a-manual-unlock). You'll need to [report the broken achievement](#how-do-i-report-a-broken-achievement) and provide [proof of completion](#in-detail-how-to-request-a-manual-unlock).

### How do I report a broken achievement?

There are two ways to report broken achievements. In the emulator title bar go to **RetroAchievements** ⇒ **Report Broken Achievements**:

1. For [Official RetroAchievements emulators](#official-retroachievementsorg-emulators) only:

![how to report](https://media.giphy.com/media/5R2Pn8983YVpcmGWgk/giphy.gif).

2. For [RetroArch](#retroarch-emulators) users you can submit the report directly via website. On every achievement's page you'll see a link saying `Report an issue for this achievement`, like in the image below:

![open-ticket-on-site](https://cdn.discordapp.com/attachments/484977989470126081/533009389490012171/unknown.png)

If you use the [Official RetroAchievements emulators](#official-retroachievementsorg-emulators) you can also report problems from the website achievement page, but it is preferred that you use the method built into the emulators.

#### What details _I have to add_ to a broken achievement report?

You have to add the following information in order for a developer to recognize an issue:

- Type of issue (doesn't trigger or triggers at the wrong time)
- Emulator you were using (and core if using RALib/Retroarch)
- RA hash (checksum) to recognize a version of the game

#### What details should I add to a broken achievement report?

If possible, in the broken achievement report **Comment** paste a link to a screenshot or video (even better) of where the problem occurred. It's recommended to post screenshots on [imgur](https://imgur.com/) and videos on [YouTube](https://www.youtube.com).

Also add details like:

- when it was/wasn't awarded;
- what game mode (HARDCORE/softcore);
- what difficulty level or other settings you've selected;
- how long you were playing;
- when you most recently died or continued;
- what you think the problem might be or any details you think could be helpful.

This is necessary so the achievement developers know where the problem is.

### What is an RA hash?

RA hash is an unique string of 32 hexadecimal numbers, to distinguish different games and versions of them, all of them have one.

#### How do I check the RA hash of the game I'm playing?

- For Retroarch - Quick Menu ⇒ Information, then at the bottom there is "RetroAchievements Hash" which is, in fact an RA hash
- For Standalones/RaLibretro - RetroAchievement tab at the top ⇒ Get ROM Checksum, and it shows the RA hash

### How do I request a manual unlock?

- If you use [Discord](https://discord.gg/dq2E4hE), post in the [#manual-unlock](https://discord.com/channels/310192285306454017/1029858289221116104) channel a request that follows the format of [this stickied thread](https://discord.com/channels/310192285306454017/1029858289221116104/threads/1029875838327463966).

- If you don't use [Discord](https://discord.gg/dq2E4hE), while signed into **RetroAchievements.org** [send a private message](https://retroachievements.org/createmessage.php?t=RAdmin) to the [RAdmin](https://retroachievements.org/user/RAdmin) user with the title: **Manual Unlock Request**
  and a description that looks similar to this:


  ```
  Hi. I'm requesting a manual unlock. http://retroachievements.org/ticketmanager.php?i=9577 HARDCORE Proof: https://youtu.be/uqD-GTkZbLo
  ```

#### In detail how to request a manual unlock

1. Open a ticket describing with details the problem you had with the achievement. ([How do I report a broken achievement?](#how-do-i-report-a-broken-achievement))
   1. If the achievement wasn't registered on the site due to a network problem, you don't need to open a ticket.
2. <a name="qualified-proof"></a>Get a proof/evidence that you completed the achievement. **Acceptable proofs**:
   1. Screenshots that show that one is playing in HARDCORE and have completed the achievement.
   2. **Video of such (even better)** ([perfect example of ideal proof provided by gr1nya](https://youtu.be/uqD-GTkZbLo)).
   3. Examples of achievements you've earned that prove you've earned this achievement. Example: You got the achievement for 10k points but the one for 5k points wasn't awarded to you.
3. If you're on our discord server, send a message on the [`#manual-unlock` channel](https://discord.gg/FswPDnu) tagging the **@manual-unlock** role; if you're not on Discord, [send a private message message](https://retroachievements.org/createmessage.php?t=RAdmin) to the [RAdmin](https://retroachievements.org/user/RAdmin) user. Your message must have:
   1. The link to the ticket url. You can find the ticket here: http://retroachievements.org/ticketmanager.php
   2. What mode you were playing (HARDCORE/softcore)
   3. Link to your [qualified proof](#qualified-proof) of completion. Include proof that the achievement was earned in HARDCORE, if you were playing in HARDCORE.

**Note:** Manual unlocks are intended for players with proof of earning achievements that did not trigger on site due to a bug or network issue.

They are **not** indented for, and will not be awarded to players who have played the game prior to a set being available, or on an another inherently unsupported platform (original hardware for example).

### What if I got an achievement I didn't earn?

Same with not getting it when you should in most cases you'll want to [create a ticket report](#how-do-i-report-a-broken-achievement), leaving an explanation of what went wrong. You'll also want to reset these achievements from your earn history so you can get the satisfaction of truly earning them.

### How do I reset achievements?

There are three ways to do this:

- On the achievement page:<br>
  ![reset-achievements-1](https://user-images.githubusercontent.com/45054151/113181800-cc095980-9217-11eb-8553-0f7a882d1b3e.png)

- On the game page (when you want or need to reset all earns in a game):<br>
  ![reset-achievements-2](https://user-images.githubusercontent.com/45054151/113181807-cd3a8680-9217-11eb-9f14-b6dad7077332.png)

- Near the bottom of your user settings page:<br>
  ![reset-achievements-3](https://user-images.githubusercontent.com/45054151/113181815-cf044a00-9217-11eb-8825-c327a35fa47c.PNG)

### Am I the only one with an issue?

If an achievement doesn't work correctly for you, there is a very good chance it doesn't work for other people. You can check in the achievement's page and look for where it says 'The achievement has 'X' open tickets':

![open-tickets-picture](https://user-images.githubusercontent.com/9311410/41203540-8f55d26e-6ca6-11e8-8683-a16e98394c18.png)

If the game has tickets, click on the 'open tickets' link. There will be a list to show any reports of broken achievements. You can comment on these to add helpful details or say you have a problem with this achievement too.

---

## Account FAQ

### Why can't I see my new profile picture?

Press `Ctrl + F5` (on most browsers). Sometimes after you've changed your profile picture (also known as avatar or user pic) and you need to refresh your browser cache; in most browsers `Ctrl + F5` is the quickest way to do it.

### My welcome email has gone missing!

Unfortunately sometimes the welcome email has been known to go missing. If this happens, please log in with your username/password you registered with, then visit your settings page. At the top you'll find the option to resend your registration email.

### How do I reset my password? (If I don't remember my password)

Right Here:
[https://retroachievements.org/resetPassword.php](https://retroachievements.org/resetPassword.php)

On Site, front page, while not logged in:

![reset password](https://i.imgur.com/3AxGYWe.png)

### Will I have any privilege if I become a patron?

On the website you'll have a badge to mean "I helped fund RA!". On the discord server you'll have access to a dedicated channel. Although **we are all immensely grateful for the contributions of the patrons**, there is no other bonus besides those ones.

Thanks to the [Patreon contributions](https://www.patreon.com/bePatron?u=5403777) the RetroAchievements project can pay for a decent server to run the website, run the discord bot and also have periodic backups (to recover data in the event of a disaster), and all this with an ad-free experience. The whole community owe a big thank you to the patrons.
