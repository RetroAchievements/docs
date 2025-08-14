---
title: Code Review Team Processes
description: Describes standard processes of the RetroAchievements Code Review Team.
---

# Code Review Team

The Code Review team is responsible for training future developers in accordance with the [Junior Developer Program Rules.](/developer-docs/jr-dev-rules) All Code Reviewers must be familiar with the program rules and enforce them.

[[toc]]

# Standard Processes
Below are the standard processes administered by the Code Review Team.
# Onboarding
There are two typical entry points to the Junior Developer Program:
- Players who are interested in joining the developer team will create a thread in the [#role-request](https://discord.com/channels/310192285306454017/1233558070781804585) discord channel. The request must contain a link to their RA profile and the set plan they intend to develop per the [program entry requirements.](developer-docs/jr-dev-rules.html#entry-requirements)
- Former developers who are either returning from hiatus or have been referred to the Code Review Team for remedial training by Developer Compliance.

**Note:** Anyone who is currently banned or suspended from being a developer, muted on site or discord, or has been involuntarily untracked is not eligible to enroll in the Junior Developer Program.

## How to Onboard a Junior Developer
Requests to join the Junior Developer Program are handled by Code Reviewers. When addressing requests, Code Reviewers shall do the following for new applicants:

- Ensure the applicant followed the [program entry requirements.](developer-docs/jr-dev-rules.html#entry-requirements) and has provided all required information.
- Review the set plan to ensure the following:
  - Set plan adequately covers all relevant game content
  - Set plan is free of [Unwelcome Concepts](guidelines/content/unwelcome-concepts.html)
  - Set plan contains a variety of [different types of achievements](developer-docs/achievement-design.html) appropriate for the game
- Provide feedback and discuss concerns with the applicant. Code Reviewers may be directive with changes to the set plan to ensure high quality. Applicants must update set plans to the satisfaction of the Code Reviewer.
- After the Code Reviewer is satisfied with the set plan, ping the Moderator role and request that the applicant be given the junior developer role on site and discord.

**Note:** Former developers will often require specialized retraining plans. These plans shall be discussed in threads in the [#code-reviewers](https://discord.com/channels/310192285306454017/493200466222776342) discord channel. Once a retraining plan has been developed, it must be added in the comments section of the retrainees new gradesheet.

Former developers, including those recently demoted, must request entry to the Junior Developer program and follow the same entry procedures as new applicants. No special treatment is given to former developers by default. Extremely special circumstances may warrant special consideration, however it should be by rare exception.

# Assisting With Typical Junior Developer Requests
Junior developers will utilize the [#jr-devs-requests](https://discord.com/channels/310192285306454017/1038471602901368952) discord channel to request assistance with a myriad of things such as:
- Submitting a set plan for approval
- Submitting a set for Code Review backlog entry
- Requesting demotion/promotion of achievements that need to be repaired
- Requesting ticket closure
- Requesting additional hashes to be linked to their set
- Requesting their set be added to certain hubs
- Requesting permission to claim an [advanced console](/developer-docs/jr-dev-rules#rules-and-restrictions) set
- Requesting assistance with development issues such as RAM digging, logic, pointers, leaderboards, rich presence, and other similar issues

**Note:** The [#jr-devs-requests](https://discord.com/channels/310192285306454017/1038471602901368952) discord channel is the formal way to request Code Reviewer help. If a junior developer requests help in [#jr-devs](https://discord.com/channels/310192285306454017/533411674162593812), tell them to open a thread in [#jr-devs-requests](https://discord.com/channels/310192285306454017/1038471602901368952) and to ping the **Code Reviewer** role.

## Handling Junior Developer Requests
### Set Plan Approvals
- Follow the same requirements outlined in [How to Onboard a Junior Developer](/teams/cr-processes#how-to-onboard-a-junior-developer).
### Code Review Backlog Entry
Prior to entering a set into the code review backlog, a Code Reviewer must validate the set meets all [Code Review Request requirements](/developer-docs/jr-dev-rules#code-review-requests). Sets must be free of basic errors to ensure that the code review can largely focus on logic. The following areas of interest must be in full compliance with content guidelines in order for a set to be entered into the backlog:
- Code Reviewer is satisfied with the junior developer's testing methodology.
- [Code notes](guidelines/content/code-notes) content and formatting - common errors include not using hex prefixes, not listing address sizes, not listing all noninferential values used in logic.
- Title and description [writing](/guidelines/content/writing-policy) - common errors include improper capitalization in titles and descriptions, unnecessary use of parenthesis and brackets, spelling and grammar errors, generally poor conveyance of intent.
- [Artwork](/guidelines/content/badge-and-icon-guidelines) - common errors include image artifacts from improper resizing, overusage of relatively few assets, lack of basic enhancements like strokes, drop shadows, and glows.
- Set design is consistent with approved set plan. Minor deviations are permitted at the discretion of the Code Reviewer, however significant changes that negatively impact set design must be addressed to the satisfaction of the Code Reviewer before the set may be entered into the backlog.
- Progression and Win Condition tags are appropriate
- [Rich Presence](/developer-docs/rich-presence) is dynamic and contains appropriate conditionals to account for game states such as the title screen. Discourage use of non-value added emojis.
- Set contains leaderboards that are appropriate for the game.
- Cursory review of logic reveals no unacceptable practices such as unnecessary use of hits, resets, or pauses and that all achievements contain a Mem/Delta check unless inappropriate for an exceedingly rare reason.

Once a set is ready for the backlog, the Code Reviewer will do so by updating the junior developer's gradesheet.
- Check for the junior developer's gradesheet. If one does not exist yet, create one using the script at the top of the main page.
- Enter the Game ID in the next available row on the junior developer's gradesheet.
- Assess if the set is a simple set and if so, check the Simple Set box. A simple set is one that is contains a relatively simple set design and accompanying logic. If a code review is expected to be quick and easy based on basic logic practices and does not contain a high number of achievements, declaring it a Simple Set is appropriate.
- Update the **Added Date** by double-clicking the cell or manually entering it using the MM/DD/YYYY format only.
- Update the **Review Status** to "0 - Pending Review".
- On the set's page, under the Dev tool drop down, click **Mark Claim for Review** to ensure junior developer does not get demoted for inactivity while awaiting code review.

### Demoting & Promoting Achievements and Ticket Resolution
Junior developer can only update achievement logic for achievements in unofficial status. They may need to update logic to address a ticket or if they become aware of an issue. Upon request, Code Reviewers should demote achievements and inform the junior developer that the achievement has been demoted. After the junior developer updates the achievement, prior to repromoting it, Code Reviewers shall review the logic to ensure it is free of bad practices and appears to make sense. If there are concerns, they should be addressed with the junior developer before the achievement is repromoted.

If there is an associated ticket that needs to be resolved, Code Reviewers shall ensure that the junior developer left an appropriate resolution comment on the ticket prior to resolving the ticket.

In the event of a suspected bad ticket, walk the junior developer through the general process of how to determine if a ticket merits additional investigation or if it can be closed due to reasons such as network issues or unsupported emulators or cores. Junior developers may be inclined to request ticket closure before they have sufficiently investigated. If a Code Reviewer is in doubt, discuss the concerns with the junior developer.

### Adding Additional Hashes to Sets
Some junior developers may wish to support multiple regions or add translation hashes to sets they are developing. A Code Review can assist by linking the hash to the set via the normal process. Ensure junior developers only provide links to patches and not actual game files.

### Adding Sets to Hubs
Junior developers should ensure that their sets are in appropriate hubs. Code Reviewers shall review the requested hubs and ensure that they are appropriate for the set's inclusion before adding any hubs.

### Considering Advanced Console Requests
When a junior developer requests to develop a set for an advanced console, Code Reviewers shall inform the junior developer that their request has been noted and a decision will be rendered in a few days.

Code Reviewers should start a thread in [#code-reviewers](https://discord.com/channels/310192285306454017/493200466222776342) to discuss if there is collective confidence that the junior developer has the proficency needed to likely produce a high quality set despite the challenges of advanced consoles. Junior developers who are good candidates for advanced console developer should have already demonstrated above average proficiency in the following aspects:
- Strong set design - a junior developer may be able to cobble together a weak set on an advanced console, but that is not acceptable
- RAM digging - pointers, arrays, indices, floats, and other memory challenges are typically found on advanced consoles.
- Fundamental tools - must have mastery of basic tools

### Assisting with Basic Developer Issues
Often junior developers will struggle with various aspects of set development. Common challenging areas are RAM digging, pointer finding and handling, intermediate and advanced toolkit features such as Add/SubSource, AddAddress, Trigger, Measured(If), etc.

Code Reviewers should assist junior developers in overcoming their difficulties, not just giving them the answer. The following are helpful instructional techniques:
- Use clear, concise, and correct communication
- Allow junior developer to ask questions at appropriate times during instruction
- Use of image snips of the developer toolkit can add valuable reinforcement to instruction
- Guide the junior developers toward the solution, but allow them to take the steps

# Conducting a Code Review
A code review must consider all aspects of a set, ensuring it meets or exceeds quality standards described in RetroAchievement's content guidelines. The reviewer is the final filter to guarantee that a worthy set is produced. The junior developer **does not** have the right to release a low quality set and it is the Code Reviewer's responsibility to ensure that does not happen.

Code Reviews are one-on-one discussions between Code Reviewers and a junior developer. At times it may be appropriate for another Code Reviewer to provide input, but it should be discussed with the reviewing Code Reviewer first. Do not insert yourself in a Code Review that you did not open. Also, do not permit other junior developers to interject in review threads. If they do, kindly ask them to stop.

## Selecting a Set to Review
When ready to conduct a review, a Code Review should select a set from the list of sets on the **Main Page** of the Code Reviewer sheet. The list of sets awaiting review is prioritized and reviewers should take sets from near the top of the list. Reviewers are not required to take the highest priority set, but should be mindful of wait times and not let a set languish unnecessarily long awaiting review.

When a set has been selected, the reviewer will navigate to the junior developer's gradesheet, update the **Review Status** to "1 - Being Reviewed", and add their name to the **Reviewer** cell. The set is now officially in review.

## Preparing the Review
Code Reviewers should spend some time playing the set as many issues do not reveal themselves until experienced first hand. Code Reviewers shall review the following aspects of the set and take detailed notes of all issues that must be corrected or should be considered prior to set promotion:
- Recheck all things checked in [Code Review backlog entry](/teams/cr-processes#code-review-backlog-entry)
- Assess the set's general point distribution - good rule of thumb for a typical set is an average of about 7-8 points per achievement. Many games will appropriately deviate from this, but it is a good starting point from which to assess the developer's understanding of [achievement scoring](/developer-docs/achievement-scoring)
- Assess the RAM digging done by the junior developer. Determine if addresses noted appear to be correctly identified and appropriate for their usage throughout the set.
- Conduct a thorough evaluation of each achievement's logic
  - Ensure achievements demo, save, exploit, and dip switch protection as needed
  - Ensure achievements use best practices such as Mem/Delta checks for unlock conditions, checkpoint hits for challenges, generally using addresses with sensible values, and other good techniques
  - Emphasize logic simplicity - do not permit unnecessary logic complexity as this scales poorly and often results in unmaintainable achievements that require full rewrites by future maintainers.
- Ensure the [Rich Presence](/developer-docs/rich-presence) presents well and gives a general overview of a player's game state. Consider the following:
  - Avoid unnecessary use of emojis. Emojis are often confusing to site viewers unfamiliar with a game and can significantly detract from the Rich Presence's readability and quality.
  - Avoid too much specificity.  Rich Presence only updates once every two minutes, so having stage timers, ammo counts, or things of that nature are essentially meaningless and clutter up the presentation
- Ensure leaderboards are sensible and utilize best practices:
  - The set should have leaderboards for expected things like high score, fastest completion time, etc as appropriate for the game.
  - Drive junior developers towards instantaneous leaderboards that start and submit on the same frame when the submitted value is stored in memory to reduce screen clutter and player distraction.

## Scoring the Review on the Gradesheet
Prior to posting the review, the reviewer should score the set on the junior developer's gradesheet to ensure the score most accurately reflects the junior developer's current level of proficiency. The following is general scoring guidance:
- **1** = Tool usage was correct in all instances, generally with multiple instances throughout the set. Indicates mastery of tool.
- **0.7-0.9** = Tool usage was mostly correct or used too infrequently to properly gauge mastery, but proficiency is evident.
- **0.4-0.6** = Tool usage exhibited some misunderstanding or misapplication that may or may not have impacted logic functionality. Improvement with tool needed.
- **0.1-0.3** = Tool usage indicated low level of understanding. Misapplication and errors likely.
- **0** = Tool usage was incorrect and demonstrated no proficiency.
- **-** = Tool was not used and therefore is not evaluated. 

## Posting and Discussing the Review
When drafting the review, it is critical to understand that the purpose of the review is to increase the junior developer's proficiency and motivation as much as possible. Reviews must be inspiring and instructional, not harsh or judgemental. RetroAchievements thrives when its developers are motivated to make the best possible sets they can. This happens through experience, effort, and attitude. The support of the Code Review team is a vital part of the process and code reviews are the most direct form of feedback we have with junior developers. Make it count.

Code reviews shall be posted in [#jr-devs-requests](https://discord.com/channels/310192285306454017/1038471602901368952) with the following thread title format:

``Code Review - Game (Console)``

Review formats are at the reviewer's discretion, but it is highly advised that Code Reviewers regularly look at other team member reviews to gain insight and present relatively standardized reviews. Reviews should address all issues in all of the following areas:
- Set Design
- Set Presentation
  - Writing
  - Badges
- Points
- RAM Digging/Code Notes
- Logic
- Leaderboards
- Rich Presence
- Hubs/Meta Data

If a subarea is free of issues, it does not need to be addressed in the review and maybe omitted entirely.

Once drafted, the reviewer will create the review post(s) and select the **Code Review** tag. Ensure to ping the junior developer and encourage them to read through the feedback, make the corrections they can, and ask questions on anything that is unclear or are incapable of doing.

Throughout the course of the code review, remember to communicate as clearly and in as simple terms as possible. Many junior developers have no prior coding experience and will not understand technical terms. Stick to terms present in RAIntegration and the RetroAchievements lexicon.

A review is over when the reviewer determines that the set is in the best condition possible and is fully in accordance with all RetroAchievements content guidelines. A reviewer has the authority to require changes to a set throughout the review process. Ensure junior developers retain the sense of ownership over the set, but do not promote unacceptable or low effort sets without significant remediation.

The desired end state of a code review is that a quality set is promoted to core and a junior developer is proud of the good contribution they made are and motivated to begin work on their next set, ready to employ new lessons and techinques learned from the code review.

## Promoting the Set
When the reviewer is satisfied that a set is ready to be promoted into the RetroAchievements library, but that the junior developer is not ready for graduation, the following steps shall be followed:
- Ensure the achievements are in the correct order
- Delete any VOIDed unofficial achievements that will not be part of the set
- Promote all remaining unofficial achievements
- Remove the set from **In Review** status by clicking **Complete Claim Review** in the Dev drop down menu on the set page
- Instruct the junior developer to complete the claim
- Post the announcement in [#achievement-news](https://discord.com/channels/310192285306454017/310207383542562816)
- Congratulate the junior developer and give them a recommendation on what type of next set could help them demonstrate proficiency that will best help them work toward graduation

## Fast Track Consideration
The Fast Track designation is a way to earmark junior developers who are exceedingly likely to graduate on their next set. The Fast Track designation will give additional priority to the junior developer in the backlog, significantly reducing their review wait time. This is used to move highly likely soon-to-be graduates thorugh the backlog quickly so they do not need to waste time awaiting what is expected to be a very quick review prior to promotion.

The best candidates for the Fast Track are junior developers who create exceptionally high quality sets for the their first or second set. These are people that likely already have the ability to produce high quality sets without oversight. Junior developers should not be graduated after only one set, so Fast Tracking very high, early achievers is the most appropriate usage of the designation.

Bad candidates for Fast Track are junior developers who have been in the program for a long time and have not graduated despite producing many sets. These junior developers likely lack the ability to produce high quality content without oversight and thus should not be given priority for review.

The Fast Track designator may be given by a reviewer at their discretion, however it is appropriate to state intent in [#code-reviewers](https://discord.com/channels/310192285306454017/493200466222776342) to allow other reviews to share their thoughts.

Junior developers may be removed from the Fast Track at the discretion of the Code Review Team. If a Code Reviewer thinks a junior developer does not deserve the Fast Track designator, they should open a thread in [#code-reviewers](https://discord.com/channels/310192285306454017/493200466222776342), provide their argument and hold a discussion. A simple majority consensus among Code Reviewers is needed to remove a junior developer from the Fast Track.

## Promoting a Junior Developer to Full Developer
When a junior developer has independently produced a high quality set and meets the [graduation statement](/developer-docs/jr-dev-rules.html#graduation-consideration) of the Junior Developer Program, a Code Reviewer may promote them to full developer via the following process:
- Ping a **Moderator** in [#code-reviewers](https://discord.com/channels/310192285306454017/493200466222776342) and ask for them to be promoted to **developer** on site and discord, but to not remove their **jr-dev** discord role yet, so they may continue to post messages in the code review thread.
- Reveal to the new developer that they have been promoted
- Walk them through the steps to promote a set
  - Ensure proper achievement order
  - Promote desired achievements to core, delete unwanted unofficial achievements
  - Complete their claim
  - How to use the ``!gan`` command in [#bot-spam](https://discord.com/channels/310192285306454017/510694609622532096)
  - How to post the set announcement in [#achievement-news](https://discord.com/channels/310192285306454017/310207383542562816)
- Explain the new responsibilities and permissions of the **developer** role
  - May have four simultaneous claims
  - May work on any supported console
  - Can edit achievements without demoting them
  - Can link new hashes
  - Can add sets to most hubs, excluding some team hubs
  - Can revise sets via the [revision process](/guidelines/content/achievement-set-revisions)
  - Explain the new channels they have access to;
    - [#devs-chat](https://discord.com/channels/310192285306454017/310195377993416714)
    - [#devs-help](https://discord.com/channels/310192285306454017/962817919698501702)
    - [#dev-requests](https://discord.com/channels/310192285306454017/729746925330366555)
    - [#devquest](https://discord.com/channels/310192285306454017/842845740078334002)
    - [#devjam](https://discord.com/channels/310192285306454017/1124565857645903922)
  - Emphasize the importance of continuing to strive for improvement and raising the bar for all developers through outstanding sets
  - Emphasize value of quality over quantity for the RetroAchievements ecosystem - RA is harmed by spam devs, make sure they are aware of this
  - Remind them that they now represent the developer team and site to a significant number of players. They are required to conduct themselves maturely and professionally
- Provide the following links
  - [Welcome to the Dev Team](/developer-docs/developer-welcome)
  - [Developers Code of Conduct](/guidelines/developers/code-of-conduct)
  - [DevQuest](/teams/devquest-team)
- Welcome them to the dev team in [#devs-chat](https://discord.com/channels/310192285306454017/310195377993416714)
- Add the graduation set to the [Junior Developer Graduate Sets](https://retroachievements.org/hub/7975) hub and update the [forum topic post](https://retroachievements.org/forums/topic/20587?comment=156947#156947)
- Request their Junior Developer Graduate badge in [#dev-requests](https://discord.com/channels/310192285306454017/729746925330366555)

## Junior Developer Remediation or Removal
Junior developers are subject to corrective action removal from the Junior Developer program at the discretion of the Code Review Team. When a junior developer [violation](/developer-docs/jr-dev-rules) that warrants remediation consideration is noted, the observing Code Reviewer should create a thread in [#code-reviewers](https://discord.com/channels/310192285306454017/493200466222776342), present findings, previous infractions, and facilitate a discussion.

The following options are available to the Code Review Team to address problematic junior developers:
- Formal warnings via site message from the CodeReviewTeam account
- Forced claim drops & prevention of specific claims
- Suspension from the Junior Developer program for a period determined by the Code Review Team
- Permanent removal from the Junior Developer program

Punitive actions should be carefully considered and reflect not just the violation, but the likelihood of the junior developer to eventually reaching graduation.  Code reviewer time is a precious resource and should not be wasted on troublesome junior developers who are not likely to graduate from the program.

A formal vote must be conducted by the discord poll feature and set for a 3-day voting period. The punishment is determined by reaching a simple majority at any time during the polling period or by whichever option has the most votes at the end of the polling period. Notification messages will be sent to the junior developers from the CodeReviewTeam account when moderation actions are taken to remove the junior developer role.