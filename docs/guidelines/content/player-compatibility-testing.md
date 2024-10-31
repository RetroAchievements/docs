---
title: Player Compatibility Testing
description: Describes the process for players to conduct compatibility testing for additional hashes to primary achievement sets on RetroAchievements.
---

# Player Compatibility Testing
The biggest barrier to adding additional hash support to sets is the time required to thoroughly test existing achievement sets against new hashes. This document explains the process by which players may request approval to conduct hash compatibility testing.

## Process Overview
If approved for a compatibility test, the requested hash will be linked with a **COMPATIBILITY TEST - NOT FOR PLAYER USE** label. The compatibility tester will then be required to master or complete the set within a specified, reasonable time frame. The tester will make save states prior to as many achievements as possible. The tester will report issues directly to the set maintainer via site message and shall not open tickets if using the test hash. If the tester is able to validate that the set is fully compatible through mastery/completion, the hash will be renamed to its appropriate title and its patch will be added to RAPatches. The hash will be considered supported at this point.

## Benefits
Because the test hashes will be linked to the set during testing, testers will keep any achievements they unlock. They will also earn beaten, completion and mastery credit as appropriate.

## Restrictions and Limitations
The following restrictions and limitations apply:

- Different regional hashes must approved by [DevCompliance](https://retroachievements.org/user/DevCompliance) before a testing request is made
- Set maintainers may deny any request at their discretion
- Set maintainer may terminate a compatibility test at their discretion
- Testers must use the specified emulator and core specified by the set maintainer to conduct all testing
- Depending on how long a set is likely to take to master, a reasonable time limit will be determined by the set maintainer for the tester to complete the set
- Test hashes that are not actively being tested will be unlinked and associated tests terminated
- Only one tester will be approved per test hash
- Set maintainer may set additional requirements at their discretion

# Request, Approval, and Testing Process
Players interested in conducting new hash testing will contact the set maintainer via site direct message and request to conduct compatibility testing. A set maintainer is any active developer who is an author on a set. If all set authors are inactive, [QATeam](https://retroachievements.org/user/QATeam) is the set maintainer.

### Step 1 - The Player's Request
Players must include the following in their initial compatibility test request message:

- A brief explanation of why they think a particular hash should be added to the set
- A link to the patch's source
- Explicit commitment that the player intends to master/complete the set

### Step 2 - The Set Maintainer's Conditions
If a set maintainer is interested in supporting the test, they should respond to the player with the following information:
 
- Confirmation that they are willing to permit the compatibility test
- A date by which the test must be completed. This may be adjusted as necessary by the set maintainer at their discretion

### Step 3 - The Player's Agreement
If a player agrees to the terms set forth by the set maintainer, they must respond and acknowledge such. Once a player agrees to the compatibility test, they must actively show progress in the set.

### Step 4 - The Set Maintainer Links the Test Hash
The set maintainer will link the hash and label it **COMPATIBILITY TEST - NOT FOR PLAYER USE** and inform the tester.

### Step 5 - Testing the Hash
The player will do the following during the compatibility test:

- Make the compatibility testing their #1 priority on RetroAchievements by dedicating the majority of their play time to the test
- Make a save state prior to each achievement to the maximum extent possible
- Attempt to earn every achievement in the set that is required by the set maintainer. Sets may require full mastery/completion at the set maintainer's discretion.
- Immediately inform the set maintainer via site message when an incompatible achievement is discovered. The player will be responsible for providing the set maintainer whatever save states they request in order to modify achievement logic necessary for compatibility.
- The set maintainer may direct additional tests after adjusting logic at their discretion. Testers are required to comply in order for the test to continue

### Step 6 - Test Completion
When the tester masters/completes the set, the test will be considered concluded. At this time, the set maintainer will make the decision whether or not to officially support the test hash. If supported, the set maintainer must submit the patch via the RAPatches forum on the Discord server or by opening a pull request on the RAPatches GitHub repository. Once the patch is added to the repository, the hash description, label, and patch URL must be updated.