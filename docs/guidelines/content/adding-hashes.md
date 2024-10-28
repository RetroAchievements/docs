---
title: Adding Hashes
description: Describes the process for adding hashes to primary achievement sets on RetroAchievements.
---

# Additional Hashes

Adding hashes to a set can allow for a more enjoyable experience for players by adding translations, graphic improvements, or more regional support, however, this comes with risks that must be understood and properly mitigated. This document will explain the requirements for adding hashes to primary achievement sets.

Players interested in doing compatibility testing for new hashes should reference [Player Compatibilty Testing](/guidelines/content/player-compatibility-testing)

[[toc]]

## Approval Process
Approval from QA is required to add a hash to a set that contains any achievements which were not authored by the hash-adding developer. Contact the QATeam site account with plan details for approval consideration.

## Restrictions
If a set has any active authors, only they, as set maintainers, may add additional hashes to the set.

## Logic Back Up, Code Note Requirements, and Tickets
If approved, the hash-adding developer must back up all logic that is changed in the set’s official forum topic.  All code notes must be updated to specify for which hashes they pertain.  Any tickets that are created after a hash has been added are the sole responsibility of the hash-adding developer and subject to Developer Code of Conduct maintenance requirements.

## Testing Requirements
Different types of hashes require different levels of compatibility testing and rigor.  Stability is more important than compatibility and will be prioritized as such.  The following procedures are mandatory when adding additional hashes.

### Translation or Graphical Patches for Already Supported Hashes:

- Ensure all addresses used in existing logic are consistent with addresses in the translation hash.
- Check every achievement, leaderboard and RP for any use of text based or sprite based addresses.  If found, must play through the new hash to the point where the text based or sprite based addresses are used for logic, verify the values and update appropriate logic and code notes.
- In most cases, translation patches for supported sets are compatible without any logic changes.
- Set shall be added to appropriate translation hubs.

### Different Versions of Already Support Regional Hashes:

- New versions must not contain differences that make achievements significantly easier than they were intended to be.  For questions, consult Developer Compliance.
- Ensure all addresses used in existing logic are consistent with addresses in the new version hash.
- Post a synopsis in the official forum of what the differences between versions are and play through all parts of the new version to test all existing logic in sections of the game that were changed in the new version.


### Different Regional Format Hashes:

- Validate addresses for all used logic in new regional patch.  Addresses may simply be offset by a particular distance.  That distance may or may not be consistent through all memory.  Each used address must be validated.
- Individual address values, most commonly IDs or sprite animations may differ between regions.  All address values used in logic that reference a potential ID address must be validated in the new hash.
- Achievements and leaderboards that use frames as timers must have additional logic added to account for frame rate differences between PAL and NTSC.  https://docs.retroachievements.org/Leaderboards/#value-format

### Other Types of Hashes:

Contact the QATeam site account with for guidance.

## Reverting In Case of Issues

QA may direct hash adding developer to restore the set to its original state if unresolved compatibility issues are introduced by a new hash.  The hash adding developer will given a time frame in which they must revert the set.