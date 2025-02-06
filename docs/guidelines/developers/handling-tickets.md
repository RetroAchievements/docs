---
title: Handling Tickets
description: Guidelines for managing and resolving achievement tickets, including steps for addressing one's own tickets, handling tickets for others, and protocols for closing tickets based on various criteria.
---

# Handling Tickets

[[toc]]

## Handling Own Tickets

**After a developer has published achievements, they should be prepared for bug reports.**
A developer's top priority on RetroAchievements is to keep their work bug free by appropriately resolving tickets. A developer shall respond to all tickets as soon as possible. The sooner the response, the better, because the problem is fresh in the player's mind and their knowledge can be used to help resolve the problem.

## New Set Claims With Open Tickets?

To be allowed to make a primary or collaboration claim on a set, developers must not have any _unaddressed_ tickets.

- An open ticket is considered addressed when a developer, who may be unable to immediately resolve an issue, leaves a comment requesting a save file, state or additional information from the reporter.
- Tickets that have been properly closed or resolved are, of course, considered addressed.

## Steps to Resolve Tickets

1. Do due diligence to investigate the cause of the issue.
2. Ask detailed questions from the reporter to narrow down possible causes if the initial report is lacking in detail.
3. If not provided, or if a provided save state is not at a point helpful to diagnose the issue, ask for one or more save states. Be clear about where in the game the saves should be made. Help the user know what to capture.
4. Attempt to reproduce the issue on the same core used by the user.
   - You may need to edit `cores.json` in RALibretro to remove the `"platforms": "none"` line from a core’s definition in order to download and use the core.
5. If resolving a ticket for another developer’s achievement, make a backup of the old logic and leave it in a comment on the ticket. That way if your fix has a further issue, you or another developer will be able to reference the previous logic.
6. When you have found the issue, develop and test your changes.

- Note: For achievements that triggered at the wrong time make sure you test that your changes work to resolve the false trigger and that they still work to trigger the achievement in the correct method.

7. Leave a summary of what you did to fix the ticket. If possible, explain why the issue occurred, what fixed it, and why the fix works.

## Steps to Close Tickets

1. Perform due diligence in attempting to reproduce the problem.
2. Do not close tickets without leaving a comment about why closing the ticket is the correct action.
3. Close with the most appropriate reason

- **Unable to Reproduce** should be done only after gathering as much information about the context of the ticket as possible, attempting to reproduce it on the core by approaching the triggering conditions as many ways as you can, and still being unable to reproduce the results.
- **Not Enough Information** should be done only after attempting to reproduce the issue as much as possible, but without further information from the reporter are unable to come up with the same result.
  - Give several days for new information to be given before closing in this fashion.
- **Network Problems** should be the close reason if it becomes clear that the issue was caused by the user not having a connection to the server.
- A **Mistaken Report** should be used only if it becomes clear that the user did not perform the correct actions to unlock the ticket or reported a ticket for non-ticketable reasons.
- **Other Reason** can be used if some other reason for closing a ticket exists. Be sure to properly justify the closure in a ticket comment.

## Handling Tickets for Other Developers

You may resolve tickets for another developer under the following guidelines:

### Active Developer Tickets

You may assist them in the resolution. The developer should still implement any code changes needed, but you are allowed to suggest logic and help find the causes.

Tickets belonging to active Junior Developers should only be handled by members of the Code Reviewer team. If you are asked by a Junior Developer to close or resolve their ticket, please refer them to a Code Reviewer.

### Inactive Developer Tickets

Tickets on inactive developer achievements are by far the most common open tickets on RetroAchievements. Developers are highly encouraged to consider resolving inactive developer tickets any time they are able. This is an extremely beneficial thing for the community and is greatly appreciated!

Updates to descriptions and/or logic may be made to resolve issues with inactive developer achievements. When a description conflicts with logic, a developer must use their best judgement to determine what the achievement is intended to require and make adjustments as appropriate. If in doubt, [DevCompliance](https://retroachievements.org/user/DevCompliance) should be contacted for guidance.

If a developer updates inactive developer achievement logic and they notice or are made aware that the achievement is subsequently ticketed, it is highly preferred they attempt to address the new ticket. QA may reach out to a developer who has resolved an inactive developer ticket requesting assistance with resolving a current issue.

If a developer no longer desires to be associated with a particular achievement after having attempted to fix it, they may request QA no longer contact them regarding the achievement. Sometimes it may make sense to restore the achievement to previous logic or in some cases, despite an achievement not being completely fixed, some improvement may have been made. QA will coordinate with the developer to ensure the most stable logic is in place when a developer disassociates from an inactive developer achievement they tried to fix.

### Claiming a Ticket

Developers may place a soft claim on ticket investigation and resolution by commenting their intent in a ticket comment.

- Claims are not required for resolving inactive developer tickets.
- If someone else has stated their intent to resolve a ticket, you may provide additional insight in a ticket comment.
- The developer working on a ticket may choose to work with another developer or user for assistance in resolving the ticket.
- After seven days without action toward a resolution, the ticket will be considered unclaimed, to allow other developers to provide a solution.

## If a Developer Becomes Active Again

_Who handles tickets for achievements edited while the developer is Inactive?_

If an inactive developer becomes active again, they are still responsible for their achievements that have been fixed by other developers.

- It is strongly recommended that the newly active dev review any tickets that were resolved during their inactivity period so they can understand the changes made to their achievements.
- If necessary, reach out to the developer who made the updates that resolved the tickets.
- If the newly active developer no longer wants to be the owner of the achievements, they can reach out to the Developer Compliance team to inquire about a reauthor of said achievements.
  - Note that an accepted reauthor will be handled on a case-by-case basis, depending on the developers in question as well as the changes made to the achievements. This rule will be reevaluated if the implementation of a set or achievement maintainer is introduced.
