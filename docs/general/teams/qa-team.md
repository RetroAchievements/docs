---
title: Quality Assurance Team
description: Lists responsibilities and authorities of the RetroAchievements Quality Assurance Team.
---

# Quality Assurance Team

The Quality Assurance (QA) team is responsible for ensuring RetroAchievements sets function properly, present well, and are organized in accordance with the Content Guidelines in the [Code of Conduct](/guidelines/users/code-of-conduct).

[[toc]]

## Who Is On the QA Team?

The QA team is comprised of experienced developers who have demonstrated a commitment to producing high quality achievement sets and repairing and improving other existing achievement sets.

Current team members can be found on the [About Us](/general/about-us#quality-assurance-team) page.

## QA's Responsibilties and Authorities

QA's responsibilities include maintaining inactive developer sets, ensuring all sets conform to the writing policy, add necessary achievement protections, repairing malfunctioning leaderboards, managing unstable sets, overseeing several sub-teams, managing hashes, and maintaining content guidelines.

QA has the authority to fix any issues in sets with no active developers. QA may also fix issues in sets with active developers under the following processes:

No advance coordination required:

- Set-wide exploitation. QA must immediately contact the developer to hand off repair and repromotion responsibility
- Remove custom player input from rich presence to follow [the current policy](/developer-docs/rich-presence#rich-presence-custom-name-restriction)

Developer must be contacted, QA may remediate if no response is received within 7 days for:

- Demote set due to instability (generally 10 or more tickets)
- Fix achievement title or description grammar, spelling, capitalization, or wording error
- Demote achievement due to lack of protection or exploit
- Adjust set progression types
- Fix leaderboard or rich presence grammar, spelling, capitalization, or wording error
- Repair leaderboard or rich presence malfunction

# QA Operating Instructions

### Team Member Activity Requirements

Maintenance issues consistently arise and require an active QA team to respond and address them. Members of QA must meet the following minimum activity to remain on the team. Members who are unable to meet activity requirements are encouraged to step down or may be removed in order to ensure the team is staffed by active members.

QA members must either accumulate 10 points in the previous month or meet 3-month lookback of 30 points to be considered active. Because some tasks requirement more time and effort, the following weighted task matrix is used to measure activity. 

10 point tasks:
- Repair a full set that lacks save/exploit/cheat protection
- Removing a set from the Outdated Version hub
- Fix set-wide instability issues on a set

3 point tasks:
- Set up and complete a Player Compatibility Test request
- Removing a set from the No Dynamic RP hub
- Removing a set from the Missing Progression Typing hub
- Making minor repairs to set's leaderboard(s) per a reported problem
- An unspecified maintenance task commensurate with other 3 point tasks

2 point tasks:
- Resolve an inactive developer ticket
- Removing a set from the Player-Input RP
- An unspecified maintenance task commensurate with other 2 point tasks

1 point tasks:
- Close out a missable/progression tag report that requires updates to a set

Members will track activity points as they close out issues in the #qa-log channel using the following format:

```
[action] [effected set] per [forum thread if applicable] [additional information as required] [activity point total for current month]
```

Example: "Updated progression markings in https://retroachievements.org/game/1391 per ⁠Trials of Mana Progression (discord link) 6 points in August"

When a member reaches 10 points, subsequent issue closeouts may simply state "10+ points in [month]"

## Task Processes
For issues not codified in these operating instructions, open a thread in the QA forum to discuss the issue and potential solutions. Do not act unilaterally.

### Noncompliant Writing
- **Action if active dev** - Add the set to the [Meta|QA - Noncompliant Writing hub](https://retroachievements.org/hub/24397) for the Writing Team to track and update
- **Action if inactive dev** - Same as active dev
- **Authority** - Individual QA member

### Confirmed Achievement Exploit
- **Action if active dev** - Notify via site message from QATeam account
- **Action if inactive dev** - Fix achievement and log in #qa-log or open thread and ping QA members to see if volunteer is available. If no available volunteer within 48 hours, demote achievement, log in #qa-log, and make post in official forum thread with QATeam account stating which achievement(s) were demoted and why
- **Authority** - Individual QA member

### Rich Presence Maintenance
- **Action if active dev** - Notify via site message from QATeam account
- **Action if inactive dev** - Make required fixes, remove from Meta|QA hubs as appropriate, and log action and post backup of original RP in #qa-log
- **Authority** - Individual QA member

### Leaderboard Issues
- **Action if active dev** - Notify via site message from QATeam account
- **Action if inactive dev** - Make required fixes, log action and back up logic in #qa-log. If leaderboard is unsalvagable, open thread to discuss deletion
- **Authority** - Individual QA member

### Set-wide Exploit or Lack of Save Protection
- **Action if active dev** - Notify via site message from QATeam account and open a thread. May be accomplished by individual QA member
- **Action if inactive dev** - Open a thread, make fixes and post backup logic if able. See if other QA members are available to make repairs. If not, start vote to consider set demotion. If set is demoted, demote set, post notice in official forum topic with QATeam account and log action in #qa-log
- **Authority** - QA team majority vote to demote inactive developer set

### Update to Content Guidelines
- **Action** - Make a thread with proposed update to discuss among QA team. Consider opening dev team discussion. Open a draft PR and post it in the thread for QA team proofreading. When ready to finalize, hold QA vote to approve adoption/merging of PR.
- **Authority** - QA team majority vote, usually informed by dev team inputs/poll

### Conduct a Player Compatibility Test
- **Action if active dev** - Transfer request from QATeam account and offer to conduct test for active dev if desired
- **Action if inactive dev** - Link test hash to set, set to "Untested", and assign requestor the "tester" role. Confirm the tester has not unlocked any achievements and if so, direct them to reset the entire set before the test can commence. Inform tester that they must master or complete the set in softcore using only the test hash within a reasonable timeframe, usually 2 months, and to notify the QATeam account when the test is complete. Encourage tester to provide save states prior the unlock point for any incompatible achievements for potential updates. Validate that they mastered the set, then update the hash to "Compatible" or "Incompatible" if appropriate.

    In the event of incompatible achievements, QA may update achievements that were incompatible with save states provided by the tester at QA's discretion.

    If tester fails to complete the test for whatever reason, QA member who set up the compatibility test may terminate it at their discretion.
- **Authority** - Individual QA member

### Progression, Win Condition, and Missable Tag Updates
- **Action if active dev** - Notify via site message from QATeam account
- **Action if inactive dev** - Make required fixes, log action in #qa-log
- **Authority** - Individual QA member

### Other Issues Not Defined in this Operating Instruction
- **Action** - Open thread and discuss with QA team
- **Authority** - Individual QA member

## Voting Process
Voting may be initiated by any QA member when required by these operating instructions or when desired to seek consensus. Votes should be conducted in respective discussion threads and the QA role shall be pinged upon creation of poll to inform all members.

Members are encouraged to comment on their position if they have not already shared their perspective prior to voting.

Voting duration shall be set to 3-days unless an exceptional circumstance as determined by the vote initiating member is determined.