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

![how to report](/public/how-to-report.webp)

2. For [RetroArch](#retroarch-emulators) users you can submit the report directly via website. On every achievement's page you'll see a link saying `Report an issue for this achievement`, like in the image below:

![open-ticket-on-site](/public/report-an-issue.png)

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

#### For Discord Users (Recommended Method):

Post your request in the [#unlock-requests](https://discord.com/channels/310192285306454017/1029858289221116104) channel following the format in [this stickied thread](https://discord.com/channels/310192285306454017/1029858289221116104/threads/1029875838327463966). This method allows for faster communication or updates when needed as well as easier ways to upload video and images for proof.

#### For Website Requests:

There are two ways you can send the request through the website.

- Directly send a message to the [RAdmin](https://retroachievements.org/user/RAdmin) user with the title: **Manual Unlock Request**
- On an individual achievements page follow the `Report an issue` link and then click the `Request Manual Unlock` button which will automatically format a message to [RAdmin](https://retroachievements.org/user/RAdmin) for you to edit and send.

When sending a manual unlock request via the website your message <ins>must</ins> include all of the following details. Requests missing any of these items will be automatically denied without any follow-up:

1. Achievement Identification:

   - Provide a direct link to the Achievement ID(s) of the unlock(s) you’re requesting.
     - If your request contains more than three achievements then please also include a list of just the IDs is comma delimited format, ex. `123, 456, 789`.
   - State whether the request is for softcore or hardcore unlocks.

2. Broken Achievement Ticket:

   - If the issue relates to a broken achievement, include a link to the ticket you have created.
     - Exception: If the achievement was triggered correctly in the emulator but did not sync to your profile due to a network issue, do not create a ticket. Instead, clearly state that a network issue is the culprit.
     - Read [The Anatomy Of A Good Ticket](https://news.retroachievements.org/issues/2022-06/goodticket.html) for a better idea of what makes tickets helpful.

3. Proof of Completion:

   - General Proof Requirements:
     - Supply a direct, plain-text link (do not use website markdowns or embedded images) to your proof.
     - Use external hosting services (e.g., imgur, YouTube, or a cloud service) for screenshots or videos. Local file links or embedded images are not accepted.
   - Proof by Achievement Type:
     - Progression Achievements: A link to another unlocked progression achievement later in the game is acceptable. Otherwise an appropriate screenshot will likely suffice.
     - Challenge Achievements: Full video evidence is required from the start of the challenge to the end. Even if the achievement has a challenge icon showing, you must provide video proof. Evidence needs to capture the triggering moment, show the active challenge icon (or when it falsely disappears), and confirm that Hardcore mode was active if it is a Hardcore request.
     - Other Achievements: A clear screenshot or a link to another related achievement (only possible if the requested achievement was already done) is usually sufficient. Use your best judgment if a video might be warranted.
     - Network Issues: A clear screenshot showing the achievement unlocked in your emulator is the best proof if you notice before closing your emulator. Otherwise the above types still apply.

4. Link Verification:
   - Before sending your request, use the Preview function to verify that all your links work correctly. We do not have the capacity to fix or follow up on broken/mis formatted links, and any invalid links will result in an immediate denial.

#### A Few Important Reminders:

- These guidelines are in place because we receive a high volume of manual unlock requests, and many are incomplete or improperly formatted. Missing or invalid information leads to denial without response.
- Even if your submission meets all the requirements, the RA team reserves the right to deny the request if the provided proof is deemed insufficient.
- Manual unlocks are intended for players with proof of earning achievements that did not trigger on site due to a bug or network issue. They are **not** intended for, and will not be awarded to players who have played the game prior to a set being available, or on an another inherently unsupported platform (original hardware for example), or before you started playing on RetroAchievements.
- If you haven’t received an unlock after several days, double-check that your request adhered to these guidelines. For further clarification or if you believe your request was handled in error, please feel free to contact the Moderation team.

#### In summary how to request a manual unlock

1. **Open a Ticket (When Applicable):**

   - Report the issue by opening a ticket that clearly describes the problem with the achievement.
     - Note: If the achievement was triggered correctly except for a network sync issue, you do not need to open a ticket—just explain the network issue in your manual unlock request.

2. **Gather Adequate Proof:**

   - Provide evidence that you met all the achievement requirements. Acceptable forms of proof include:
     - **Screenshots:** Showing you were playing in HARDCORE mode and that you met the achievement requirements.
     - **Videos:** Capture the critical moment when the achievement should trigger. (Especially necessary for challenge achievements and hardcore submissions.)
     - **Comparative Achievement Evidence:** For example, if you received a higher-tier achievement (such as a 10k points achievement) but missed out on a required lower-tier one (like 5k points).

3. **Submit Your Request:**
   - **Discord Users:** Post a message in [#unlock-requests](https://discord.com/channels/310192285306454017/1029858289221116104) following [this stickied thread](https://discord.com/channels/310192285306454017/1029858289221116104/threads/1029875838327463966)
   - **Website Users:** While signed into RetroAchievements.org, send a request to the RAdmin user with the required information listed above

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

![reset password](/public/reset_password.png)

### Will I have any privilege if I become a patron?

On the website you'll have a badge to mean "I helped fund RA!". On the discord server you'll have access to a dedicated channel. Although **we are all immensely grateful for the contributions of the patrons**, there is no other bonus besides those ones.

Thanks to the [Patreon contributions](https://www.patreon.com/bePatron?u=5403777) the RetroAchievements project can pay for a decent server to run the website, run the discord bot and also have periodic backups (to recover data in the event of a disaster), and all this with an ad-free experience. The whole community owe a big thank you to the patrons.
