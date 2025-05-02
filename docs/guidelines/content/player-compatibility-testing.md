---
title: Player Compatibility Testing
description: Describes the process for players to conduct compatibility testing for additional hashes to primary achievement sets on RetroAchievements.
---

# Player Compatibility Testing
The biggest barrier to adding additional hash support to sets is the time required to test them. This document explains how players may request approval to conduct hash compatibility testing.

## Process Overview
Players interested in conducting new hash testing should contact the set maintainer via site direct message and request to conduct compatibility testing. A set maintainer is any active developer who is an author on a set. If all set authors are inactive, [QATeam](https://retroachievements.org/user/QATeam) is the set maintainer.

If the set maintainer agrees to the compatibility testing, they will link the test hash, mark it "Untested" and assign the requester as a "Tester" so the test may commence. It will then be the tester's responsibility to complete the tests required by the set maintainer.

The tester will be required to master or complete the set within a time frame determined by the set maintainer. The tester should create save states before as many achievements as possible, especially any achievmements that fail to trigger. The tester will report issues directly to the set maintainer via site message and shall not open tickets if using the test hash. If and only when the tester masters or completes the achievement set, the test hash will be marked as "Compatible." Its patch will then be added to RAPatches. The hash will be considered supported.

## Benefits
Testers will keep any achievements they unlock. Testers can also earn beaten, completion and mastery credit.

## Restrictions and Limitations
The following restrictions and limitations apply:

- The set maintainer may deny any request at their discretion.
- The set maintainer may terminate a compatibility test at their discretion.
- Testers must use the emulator and core that they set maintainer tells them to use.
- The set maintainer will set a reasonable time limit for the tester to complete the set.
- The set maintainer has sole discretion to add additional testers.
- The set maintainer may set additional requirements at their discretion.

### Step 1 - The Player's Request
Players must include the following information in their first message to request a compatibility test:

- A brief explanation of why they think the hash should be added to the set.
- A link to the patch's source.
- Tell the set maintainer that they intend to master or complete the set.

### Step 2 - The Set Maintainer's Conditions
If a set maintainer is interested in supporting the test, they should respond to the player with the following information:
 
- Confirmation that they are willing to allow the compatibility test.
- A date by which the test must be completed. This may be updated by the set maintainer at their discretion.
- Any other restrictions or requirements they want not otherwise explained in this doc.

### Step 3 - The Player's Agreement
If a player agrees to the set maintainer's terms, they tell the set maintainer that they accept the testing responsibility.

### Step 4 - The Set Maintainer Links the Test Hash
The set maintainer will link the hash, mark it "Untested", and assign the "Tester" role to the requestor.

### Step 5 - Testing the Hash
Testers will do the following during the compatibility test:

- Make completing the compatibility test their top priority on RetroAchievements by dedicating the majority of their play time to the test.
- Create a save state before each achievement as often as possible.
- Attempt to earn every achievement in the set as required by the set maintainer. Set maintainer's may require mastery or completion.
- Immediately inform the set maintainer via site message when an incompatible achievement is discovered. The player will be responsible for providing the set maintainer whatever save states they request in order to modify achievement logic necessary for compatibility.
- The set maintainer may require more tests after updating the logic at their discretion. Testers must follow the set maintainer's directions throughout the test.

### Step 6 - Test Completion
When the tester finishes everything required by the set maintainer, the test will be considered completed. The set maintainer will decide whether or not to officially support the test hash. If supported, the set maintainer must submit the patch via the RAPatches forum on the Discord server or by opening a pull request on the RAPatches GitHub repository. Once the patch is added to the repository, the hash description, label, and patch URL must be updated.
