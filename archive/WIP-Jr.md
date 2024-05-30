WIP Page - Combining "Getting started as an achievement developer," "How to Become an Achievement Developer," and "Set Development Roadmap" into a sort-of Junior Dev doc.

This document covers the basics of how achievements work and the steps one must take to get started with achievement development.

**Anyone can become a RetroAchievements developer if they put in the effort!**

- [Basic-Concepts](#basic-concepts)
- [Becoming a Junior Developer](#becoming-a-junior-developer)
- [Choosing a Game to Work On](#choosing-a-game-to-work-on)
- [Set Development Roadmap](#set-development-roadmap)
  - [Initial Research](#initial-research)
  - [Conceptual Design](#conceptual-design)
  - [RAM Digging](#ram-digging)
  - [Achievement Design](#achievement-design)
  - [Pre-Release Steps](#pre-release-steps)
  - [Release](#release)
  - [Post-Release](#post-release)

## Basic Concepts

So how do RetroAchievements work? Technically, an achievement consists of a series of conditions that make up what we refer to as the `achievement logic`. When a game with an achievement set is launched in an emulator that supports RetroAchievements, the emulator constantly checks if the conditions of each achievement are met in the current frame of gameplay. When all conditions for a particular achievement are met, the emulator will stop checking the conditions of that achievement and award it to the player.

The barebones process of creating achievement logic involves 3 steps:

1. Finding a place in the game's RAM where the information needed for an achievement is stored. Some examples: current level or stage, health, timer, coins, points, ammo, holding a weapon, etc.
2. Creating conditions that must be met in order to award an achievement.
3. Test if the achievement is working as expected.

However, this is often much easier said than done. There is a good chance that those steps will need to be repeated many times in order to refine the achievement logic to make it stable enough for players.

## Becoming a Junior Developer

If you would like to start developing achievements, the first thing you will need to do is read up on our Developer and Content Guidelines. It is also important to read the various pages in the Achievement Development category, but that can be done as you go.

It is **strongly recommended** to join our Discord server so you can quickly and easily contact other achievement developers who can show you the ropes and help you along. Once you have joined the server, make sure you get verified by following the instructions in the `#welcome` channel. If you already know what game you'd like to make achievements for, you can go ahead and ask for the `jr-dev` role in the `#tech-support` forum channel by creating a post tagged as `Join Team` and pinging `QA-Maintainer`. Once you have the `jr-dev` role, you will have access to the `#jr-devs` channel, where you can talk to code reviewers and ask any development-related questions.

## Choosing a Game to Work On

After you have become a Junior Developer, you can decide on a game to work on. If you need an entry made for it, you can ask code reviewers to do so. They will need to open a forum topic for you anyway, assuming it doesn't already have one. You can now [claim it for achievement development](Claims-System).

## Set Development Roadmap

Once you have chosen your game and have claimed it for development, you need to plan your achievement set. You should know enough about the game to give it justice. The following are some tips on coming up with a plan:

### Initial Research

- **Read through the game manual:** Remember those? Game manuals often give insight into the game's story and mechanics.
- **GameFAQs**: Check the guides, FAQs, cheats, boards, etc. Soak up the info.
- **Longplays and Speedruns**: Seeing others play the game may give you ideas or show you something new.
- **Similar Sets**: Does a different port of the game have a set? What's it like? What would you change?

### Conceptual Design

- Start brainstorming your achievement list. How will you split up the progression achievements? What are the notable events in the game? Are there collectibles? Are there score benchmarks? What secrets/easter eggs are notable enough? Does the game have an internal reward system?
- Check our guide about [Achievement Design](Achievement-Design)
- Check and test if your designs are possible.
- Figure out what data you will need to make the achievements. For example: achievements for collectibles will require the RAM addresses where their data is stored.

## RAM Digging

Once you have a plan, it is recommended that you post it in the game's forum topic. This will allow the community to give feedback and will give code reviewers an idea of where you're at from a design standpoint. **It is important to be open to receive feedback and suggestions!**
