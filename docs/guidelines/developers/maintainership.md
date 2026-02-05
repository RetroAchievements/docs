---
title: Maintainership
description: Description of maintainer role, role request, and approval process.
---

# Maintainer Role Purpose and Qualification
The achievement Maintainer role allows a developer to assume responsibility for an achievement. Future tickets and unlock credit will be assigned to achievement maintainers and maintainership is effectively a transfer of ownership. The original author does not lose authorship credit, ticket history, or unlock credit that occurred prior to the assignment of a new maintainer. If a maintainer loses or relinquishes the role, new tickets and unlocks will return to being given to the author. A maintainer can be assigned to an entire set or a portion of the achievements depending on the scope of work that was done. The maintainer role may only be approved and assigned by the QA team.

Maintainership requests will be considered for significant repairs on a case by case basis. Correcting set-significant instability issues is the primary factor when considering approval of the maintainer role. Because the Maintainer role grants future credit to the maintainer, the work done to receive the role must amount to fixing significant instability. Poorly coded, but otherwise stable achievements are generally not good candidates for maintainership consideration.

[[toc]]

## What May Qualify for Maintainership?
A good candidate for maintainership will meet many of the following criteria:

- Set demoted for necessary repairs by QA-Maintainers.
- Existing logic was fundamentally flawed for the set or for a category of achievements and needed to be replaced in all of the affected achievements.
- Problems in the set were causing regular tickets or other problematic quality issues.
- Significant New RAM digging needed to be done to find replacement addresses or better addresses to use to accomplish the goals.
- Significant logic re-work was necessary for proper functionality and stability.
- Very few, if any logic conditions were retained in the new logic.
- Any retained logic conditions were not the most important piece of data for functionality.
- One-condition achievements where the final product is vastly changed.
- Requestor has a history of fixing tickets in the set.
- All tickets in the set have been resolved or closed.
 
## What Shall Not Qualify for Maintainership?
Writing new logic for previously stable achievements is not sufficient to warrant maintainership.  Poor candidates include, but are not limited to:

- Logic reworked that did not exhibit any issues (i.e. not prone to tickets or exploits).
- A main change was simply adding Delta checks.
- A main change was simply adding an in-game/in-stage, or other similar guarding condition.
- Only added protection such as save protection, demo protection, or cheat protection.
- Updating outdated logic of otherwise functional achievements to be in line with modern toolkit features and standards.
- Relatively simple "drive-by" ticket fixes.