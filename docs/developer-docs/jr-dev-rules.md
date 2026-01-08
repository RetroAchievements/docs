---
title: Junior Developer Program Rules
description: Comprehensive guidelines for the Junior Developer Program, including rules, guidelines, and clarifications.
---

# Junior Developer Program Rules

[[toc]]

## Overview

The purpose of the Junior Developer Program is to assist interested people with learning how to create and maintain high quality achievement sets for RetroAchievements.  It is for people who intend to pursue graduation and become full developers. As part of the program, junior developers create sets to show proficiency in set design, set presentation, toolkit usage and implementation. 

Junior Developers are required to understand and abide by the [Developer Code of Conduct](/guidelines/users/code-of-conduct) except where specifically addressed by this document.

### Entry Requirements

To join the Junior Developer Program, the following requirements must be met:

- Must be familiar with how RetroAchievements sets are structured: this means having an account that is at least 3 months old and have at least 3,000 points. As sets must be designed with hardcore in mind, hardcore points are preferred but not obligatory
- Cannot be banned or suspended from achievement development or involuntarily untracked from competitive leaderboards
- Have a Discord account verified on the [RetroAchievements Discord server](https://discord.gg/dq2E4hE)
- Read through all [RetroAchievements Developer Docs](/developer-docs/)

### Developing and Publishing Sets as a Junior Developer

The process to work on sets as a junior follows the roadmap below. In particular, there are 3 steps that require appproval by code reviewers before proceeding, namely the **Set Plan**, **Ready for Review** and **Code Review**:
- Prepare a thorough **Set Plan**. It's recommended to start with one of our [templates](https://docs.google.com/spreadsheets/d/1VC2phJ9AUcZK5Ll4bVuMpJXED8QdM_nw8OdSAuLc3bI/edit#gid=0), but you may adjust one to fit your needs over time.
- Submit your set plan for approval. While the set plan is not a final product, it must show a general outline of the planned set including progression, challenge, and other types of achievements. Brief descriptions and point values must be included as well. If during development significant deviations are made from the set plan, a revised set plan must be submitted for approval.
  - If this is your first set as a junior, you have to submit this set plan in the #role-request forum on the [RetroAchievements Discord server](https://discord.gg/dq2E4hE), along with a link to your RA profile, a link to the page of the game you wish to work on, and a ping to @Code-Reviewer. 
  - If you already are in the junior program, you have to submit this set plan on #jr-devs-requests. As a junior developer with at least one set published, you may claim the game while you work on your set plan, but no work is allowed prior to having your plan approved.
- Once your plan is approved, develop your set. This includes RAM digging, making assets, creating achievement badges, writing clear descriptions and unique titles as well as thoroughly testing your assets. Code reviewers and fellow juniors are available to help in #jr-devs!
- [Request a review](/developer-docs/am-i-ready-for-review) by making a **Ready for Review** post on #jr-devs-requests. Do this only when you think your set is as close to publishable as you can get it.
  - To get approved at this step, your set must be clear of bad practices flagged by AutoCR.
  - Once approved at this step, your set is added to the review backlog, and you wait for an in-depth code review. During that time, it is highly recommended to read the reviews of other juniors and improve your own set awaiting review whenever you read feedback that could equally apply to your work.
- Work through the **Code Review** with your code reviewer. Be ready to rework logic and learn the best practices. This is arguably your best opportunity to learn as well as to show your proficiency and understanding.
- [Potentially graduate](#graduation-consideration) and become a developer. This cannot happen after a first set and depends on multiple factors including proficiency and trust as described below.
- Publish your set for all RA users to enjoy!

### Rules and Restrictions

The following rules apply to all Junior Developers:
- Must stay on RA's Discord server for all communication with code reviewers
- May only create achievements, leaderboards and Rich Presence for a set on which they have an active claim
  - **This includes local work**. This means no working on any sets that are not claimed. Failure to adhere to this rule may result in dismissal from the Junior Developer Program
  - Junior Developers may practice RAM digging games for which they do not have a claim, but shall not publish any code notes
- Will prioritize [resolving open tickets](#ticket-handling) over development of a new set. In particular, no new claim can be made while having any unaddressed tickets
- If a Junior Developer needs to extend their claim beyond 3 months, they need to make a progress report on the official forum for the game in accordance with [Claims System rules for extending a claim](/guidelines/developers/claims-system.html#extending-a-claim). Moreover, prior to a second extension (at the six-month mark) as well as any further extension, a detailed progress report must be sent to the [Code Review Team](https://retroachievements.org/messages/create?to=CodeReviewTeam) for approval before the extension is made. The team may deny the extension in cases where progress is insufficient.

There are restrictions on the type of claims you can make before graduation. You cannot:
- Work on subsets, collaborations or revisions (excluding your own)
- Claim a hack if you already published a set for another hack
- Claim a hack or homebrew you developed yourself
- Claim any Gamecube game 
- Claim a game on any of the following consoles without explicit approval by code reviewers. You can request this approval as part of your set plan approval, and only if you have published another set before:
  - PlayStation 2
  - PlayStation Portable
  - Any future 6th+ generation consoles, unless specifically allowed
  - Dreamcast games using the [Windows CE firmware](https://retroachievements.org/game/24833)

### Ticket Handling

Junior Developers are expected to prioritize resolving open tickets over development of a new set.

- If a ticket is in Request status while waiting for information from the reporter, they may continue work on a new set, but must immediately reprioritize the ticket(s) once the reporter responds
  - To put a ticket into Request status, ask the Code Reviewers, using the #jr-devs-requests, to transfer the ticket to the reporter after you have requested further information by asking the reporter using a comment on the ticket.
- Once you have fully addressed the ticket, leave a comment on the ticket describing what the cause of the issue was and what you did to resolve the issue.
- Contact the Code Reviewers, using the #jr-devs-requests forum channel on Discord, to resolve or close the ticket as appropriate after your comment has been made.

### Removal From Junior Developer Program

Participation in the Junior Developer Program is not an entitlement or right. Junior Developers are expected to take the program seriously, put forth significant effort, seek assistance when unable to figure something out, strive to make the highest quality set possible and maturely accept and apply Code Reviewer feedback. Junior developers may be temporarily or permanently removed from the program for the following reasons:

- Violations of the [RA Developer Code of Conduct](/guidelines/developers/code-of-conduct) or the rules set forth within this document
- 1 month of [inactivity](/guidelines/developers/code-of-conduct#inactivity) in either active development or RA in general
  - This does not apply if your set is in the review backlog or under current review
  - First time inactivity removals may request immediate restoration of Junior Developer role
  - Subsequent inactivity removals may, at Code Reviewer discretion, be subject to a 30-day cooldown (beginning upon demotion action) prior to being able to rejoin the program
- Holding a claim for 1 month without progress
  - This does not apply if your set is in the review backlog or under current review
  - You must push code notes, assets, or game page updates to the website in order for this timer to reset. Simply opening the game will not count
  - If you are removed on this basis and wish to rejoin the program, you will be required to provide a progress report and either push any local work to the website or provide your `GameID-User.txt` file upon role request

### Graduation Consideration

Code Reviewers consider a variety of things when deciding whether a Junior Developer is ready to graduate and become a full developer. The driving question behind this decision is "Can the Junior Developer successfully integrate into the developer team and be trusted to produce and maintain high quality sets in accordance with RetroAchievements' content guidelines?" This question is evaluated by considering a variety of aspects such as:

- Has the Junior Developer demonstrated a consistent level of maturity and professionalism such that they can be trusted with increased site permissions?
- Has the Junior Developer demonstrated technical proficiency with a significant portion of the developer toolkit?
  - The [Junior Developer Graduate set achievements](https://retroachievements.org/game/3046) provide a good overview of the toolkit
- Has the Junior Developer produced a set that meets or exceeds Developer Code of Conduct and Content Guidelines requirements with little to no assistance?
- Does the Junior Developer show a strong desire to learn and actively seek self improvement through asking questions, discussions and self study?
