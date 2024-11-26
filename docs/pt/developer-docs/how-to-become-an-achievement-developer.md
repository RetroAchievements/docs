---
title: How to Become an Achievement Developer
description: A step-by-step guide on how to become a RetroAchievements developer, including required knowledge, planning, and best practices.
---

# How to Become an Achievement Developer

This document describes all the steps that any aspiring achievement developer must follow before getting Developer status. These requirement are also a checklist for Code Reviewers (developers who inspect the code of new developers).

**Anyone can become a RetroAchievements developer if they put in the effort.**

**Strongly recommended**: join our Discord server so you can get in contact with other achievement developers who can show you the ropes and help you along. If you already know what game you want to work on, go ahead and ask for the `Jr-Dev` role in `#role-request` forum by creating a post tagged as `Jr-Dev`, posting your set plan for the game (you can use one of these [templates](https://docs.google.com/spreadsheets/d/1VC2phJ9AUcZK5Ll4bVuMpJXED8QdM_nw8OdSAuLc3bI/edit)), and pinging `@QA-Maintainer` (Make sure to first get your account verified by following instructions in `#welcome` if you haven't already). This gives you access to the `#jr-devs` channel, where you can talk to code reviewers and ask any development related questions.

## Finding a Game to Work on

Follow the [guidelines on the Developer's Code of Conduct](/guidelines/developers/code-of-conduct#working-on-empty-sets) to find a game. Ensure the game complies with the [Rules and Restrictions](/developer-docs/jr-dev-rules#rules-and-restrictions) before working on achievements. To claim a game, it must have a forum topic. If it doesn't have one already, you can ask a Code Reviewer to make one in the `#jr-dev-forum` in our Discord server. Feel free to declare your plans to work on the game in the topic, and post updates as you proceed.

**Tip**: for your first achievement set it's recommended to choose a game that doesn't yet have achievements **and** is not very popular.

## Planning your Achievement Set

Once you find a game to work on you need to plan your Achievement Set.

Be sure you know enough about the game to make a good set. Check the GameFAQs or something, try to learn more about the game, its secrets and details. Here is a good guide to help you with this: [Set Development Roadmap](/developer-docs/set-development-roadmap).

It's recommended that you post your plans on the official game's forum topic, so the community can leave suggestions and provide feedback.

**IMPORTANT!: be open to receive feedback and suggestions.**

**See also**: [Achievement Design](/developer-docs/achievement-design), it's an extensive guide on how to design good and interesting achievements. It's not about the technical side but the conceptual.

## Required Knowledge

Every developer must know at least the basic concepts and techniques shown in these two docs:

1. [Getting Started as an Achievement Developer](/developer-docs/getting-started-as-an-achievement-developer)
2. [Achievement Logic Features](/orphaned/achievement-logic-features)

Any aspiring dev must demonstrate understanding of the following concepts:

- Basic RAM digging (be familiar with the [Memory Inspector](/developer-docs/memory-inspector))
- [Hexadecimal notation](/developer-docs/memory-inspector#decimal-binary-and-hexadecimal-notations)
- [Delta values](/developer-docs/delta-values)
- [Hit counts](/developer-docs/hit-counts)
- [`PauseIf`](/developer-docs/flags/pauseif)
- [`ResetIf`](/developer-docs/flags/resetif)
- [Alt Groups](/developer-docs/alt-groups)
- Memory sizes: [8-bit](/developer-docs/memory-inspector#8-bit-mode) and [single bit](/developer-docs/memory-inspector#single-bits)
- Achievement logic comparisons besides `=`, such as `>`, `<`, `!=`
- [Adding badges to an achievement](/general/ways-to-contribute)
- [Creating accurate descriptions for achievements](/guidelines/developers/code-of-conduct#basic-achievement-design-guidelines)
- Add appropriate [protections](/developer-docs/getting-started-as-an-achievement-developer#important-tips)
- Make a [stable achievement set](/developer-docs/getting-started-as-an-achievement-developer#important-tips)

**Note**: You do not need mastery of all these concepts to have a set published, but you do need them to have the full Developer role.

### Advanced Concepts

Here is a list of some advanced concepts/techniques. **They are not required to become a Developer**, but are listed here to let the jr-dev know the possibilities of the Achievement's logic.

- Hit count as timer (like in [this example](/developer-docs/real-examples/using-hit-counts-as-a-timer) and [this one](/developer-docs/real-examples/creating-a-timer-with-reset-if-hits-based-on-the-speed-of-the-game))
- [ResetIf Checkpoints](/developer-docs/achievement-templates#finish-level-n-without-dying)
- [ResetIf with Hitcount](/developer-docs/flags/resetif#resetif-with-hit-counts)
- [PauseIf with Hitcount](/developer-docs/flags/pauseif#pauseif-with-hit-counts)
- [AddSource](/developer-docs/flags/addsource) and [SubSource](/developer-docs/flags/subsource) Flags
- [AddHits and SubHits Flag](/developer-docs/flags/addhits-subhits)
- [Increment counter (`Mem > Delta` Counter)](/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)
- [Delta Hit Counter, pause technique](/developer-docs/achievement-templates#check-for-a-specific-value-changing-to-another-specific-value-ten-times)
- [Little endianness](/developer-docs/memory-inspector#endianness)
- Memory size: [Lower4, Upper4](/developer-docs/memory-inspector#upper4-and-lower4), and [16-bit, 32-bit](/developer-docs/memory-inspector#_16-and-32-bit-mode)
- Dynamic [Rich Presence](/developer-docs/rich-presence)
- [Leaderboards](/developer-docs/leaderboards)
- [Pausable Resets](/developer-docs/achievement-templates#conditional-resets)
- [SubSource increment counter](/developer-docs/flags/subsource#using-subsource-to-count-specific-increments)

The [Real Examples](/developer-docs/real-examples) and [Achievement Templates](/developer-docs/achievement-templates) pages are useful resources to see how those techniques work.

## Code Notes

Junior developers can create and delete code notes that they have created, but they cannot delete or edit any notes created by others. Developers CAN edit and remove notes by other users, and these changes are site-wide.

## Practicing

In order to become familiar to those techniques you must practice. **You can use any game to practice**, even those that already have achievements. Just be aware about these rules:

- Do **NOT** delete/overwrite any existing Code Note.

- On this **practicing** phase, keep your work in local and do **NOT** upload any achievement. You'll do it later when you find a game to actually work on.

## Get your work reviewed

After creating some achievements, upload them to Unofficial and then create a post in `#jr-dev-forum` on our Discord server (if you don't use Discord, send a message to [RAdmin](http://retroachievements.org/user/RAdmin)) and ask them to find someone to review your work.

Do **NOT** ask another developer to promote your achievements to the Core without a proper review.

Again, **it's extremely important that you are open to receive constructive criticism and helpful advice from the community at any time**.

## Am I ready to get the Developer status?

Once the Code Reviewers have inspected your achievement's code and concepts, they and the admin will use the ["Required Knowledge" checklist above](#required-knowledge) to determine if you're ready. If you're not fully qualified to be a developer yet, but your set is complete and stable, the set will get published. You can then ask which concepts you still need to demonstrate proficiency in to be given developer status.

The merit of a jr-dev receiving developer status depends on:

- their ability to publish work that meets the standards of the [Developer's Code of Conduct](/guidelines/developers/code-of-conduct);
- demonstration of [required knowledge](#required-knowledge) and [advanced concepts](#advanced-techniques);
- the quality and complexity of their work;
- the time and thought they put into planning and working on achievements;
- showing the will to use the Developer status with care and responsibility;
- the extent to which the points above reflect their capabilities as a developer.

## Developer's Code of Conduct

Once you get your Developer status, you **MUST** adhere to the [Developer's Code of Conduct](/guidelines/developers/code-of-conduct). That is extremely important to create a fair environment between the Achievement Developers.
