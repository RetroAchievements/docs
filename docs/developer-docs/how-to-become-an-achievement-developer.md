---
title: How to Become an Achievement Developer
description: A step-by-step guide on how to become a RetroAchievements developer, including required knowledge, planning, and best practices.
---

# How to Become an Achievement Developer

The purpose of this document is to provide guidance on how to [join the Junior Developer program](/developer-docs/jr-dev-rules) and explain some helpful information to assist in development of an achievement set.

**Anyone can become a RetroAchievements developer if they put in the effort.**

Junior Developers are **required** to join the RetroAchievements Discord server. The server is where the Junior Developer program is administered. If you already know what game you want to work on, go ahead and ask for the `Jr-Dev` role in `#role-request` forum by creating a post tagged as `Jr-Dev`, posting your set plan for the game (you can use one of these [templates](https://docs.google.com/spreadsheets/d/1VC2phJ9AUcZK5Ll4bVuMpJXED8QdM_nw8OdSAuLc3bI/edit)), and pinging `@Code-Reviewer` role for set plan approval and Junior Developer program indoc.

Make sure to first get your account verified by following instructions in `#welcome` if you haven't already.

## Finding a Game to Work on

Follow the [guidelines on the Developer's Code of Conduct](/guidelines/developers/code-of-conduct#working-on-empty-sets) to find a game. Ensure the game complies with the [Rules and Restrictions](/developer-docs/jr-dev-rules#rules-and-restrictions) before working on achievements.

## Planning your Achievement Set

Once you find a game to work on you need to plan your Achievement Set. Before claiming a game on site, Junior Developers must submit a set plan for approval in the `#jr-dev-forum`. 

Be sure you know enough about the game to make a good set. Check the GameFAQs or something, try to learn more about the game, its secrets and details. Here is a good guide to help you with this: [Set Development Roadmap](/developer-docs/set-development-roadmap).

It's recommended that you post your plans on the official game's forum topic, so the community can leave suggestions and provide feedback.

**IMPORTANT!: be open to receive feedback and suggestions.**

**See also**: [Achievement Design](/developer-docs/achievement-design). It's an extensive guide on how to design good and interesting achievements. It's not about the technical side but the conceptual.

## Claiming a Game and Beginning Development

Once a set plan has been approved by a Code Reviewer, Junior Developers may claim the game and begin development. To claim a game, it must have a forum topic. If it doesn't have one already, you can ask a Code Reviewer to make one in the `#jr-dev-forum` in our Discord server.

For your first achievement set it's recommended to choose a game that is less popular. First set tends to be the weakest that developers produce due to their lack of experience. Additionally, an unpopular game will likely not attract as many player initially and prevent a situation where a significant amount of tickets are quickly generated which can often be overwhelming.

## Required Knowledge

Every developer must know at least the basic concepts and techniques shown in these two docs:

1. [Getting Started as an Achievement Developer](/developer-docs/getting-started-as-an-achievement-developer)
2. [Achievement Logic Features](/orphaned/achievement-logic-features)

Junior Developer program graduates must demonstrate proficiency in the following concepts:

- Strong [set design](/developer-docs/achievement-design)
- RAM digging with the [Memory Inspector](/developer-docs/memory-inspector)
- Proper set presentation and [writing](/guidelines/content/writing-policy)
- Producing high quality, stable sets with limited supervision

Helpful initial topics to study:
- [Hexadecimal notation](/developer-docs/memory-inspector#decimal-binary-and-hexadecimal-notations)
- [Mem/Delta relationships](/developer-docs/delta-values)
- Various memory sizes
- [Hit counts](/developer-docs/hit-counts)
- [`ResetIf`](/developer-docs/flags/resetif)
- [Alt Groups](/developer-docs/alt-groups)
- [`PauseIf`](/developer-docs/flags/pauseif)
- Achievement logic comparisons besides `=`, such as `>`, `<`, `!=`
- [Creating accurate descriptions for achievements](/guidelines/developers/code-of-conduct#basic-achievement-design-guidelines)
- Add appropriate [protections](/developer-docs/getting-started-as-an-achievement-developer#important-tips)
- Hit count as a timer (like in [this example](/developer-docs/real-examples/using-hit-counts-as-a-timer) and [this one](/developer-docs/real-examples/creating-a-timer-with-reset-if-hits-based-on-the-speed-of-the-game))
- [ResetIf checkpoints](/developer-docs/achievement-templates#finish-level-n-without-dying)
- [AddSource](/developer-docs/flags/addsource) and [SubSource](/developer-docs/flags/subsource) Flags
- [AddHits and SubHits Flag](/developer-docs/flags/addhits-subhits)
- [Increment counter (`Mem > Delta` counter)](/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)
- [Delta Hit Counter, pause technique](/developer-docs/achievement-templates#check-for-a-specific-value-changing-to-another-specific-value-ten-times)
- [Little endianness](/developer-docs/memory-inspector#endianness)
- Memory size: [Lower4, Upper4](/developer-docs/memory-inspector#upper4-and-lower4), and [16-bit, 32-bit](/developer-docs/memory-inspector#_16-and-32-bit-mode)
- Dynamic [Rich Presence](/developer-docs/rich-presence)
- [Leaderboards](/developer-docs/leaderboards)

The [Real Examples](/developer-docs/real-examples) and [Achievement Templates](/developer-docs/achievement-templates) pages are useful resources to see how those techniques work.

## Requesting a Code Review

After creating the achievement set, publish it to Unofficial and then create a post in `#jr-dev-forum`. Follow all of the requirements for [requesting a Code Review.](/developer-docs/jr-dev-rules.html#code-review-requests)

## When Will I Be Promoted to Developer?

Code Reviewers are charged with ensuring that graduates of the Junior Developer program will be value-added RetroAchievements developers. Being a developer is not a right nor an entitlement. It is important for the health of the project that developers be skilled, trustworthy, good teammates, and able to produce high quality achievement sets with little to no supervision.

The Code Reviewer team will consider a Junior Developer for graduation largely based on their assessment of the following criteria:

- Their ability to publish work that meets or exceeds the standards of the [Developer's Code of Conduct](/guidelines/developers/code-of-conduct)
- The quality and complexity of their work
    - High quality is defined as strong set design, writing, badges, code notes and achievement logic
- The time and thought they put into planning and working on achievements
- Showing the will to use the Developer status with care and responsibility
