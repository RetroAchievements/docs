---
title: Standalone Support
description: Guide to RetroAchievements support for standalone games, including requirements, evaluation criteria, and the proposal process for games that don't use emulators.
---

# Standalone Games

We offer support for Standalone games, which do not use an emulator to connect to RetroAchievements. This is done by directly making HTTP calls to our emulator integration API (the "Connect API"), be it through directly modifying the game or creating a mod that has the code required to connect to the RetroAchievements server. However, all Standalone support must abide strict requirements, as well as approval by the RetroAchievements Admins. Even if all the guidelines below are met, this will not guarantee we will accept your proposal. For the best chances of success, it is vital that you present a highly-detailed plan to the admins.

[[toc]]

## What Are the Requirements to Work on a Standalone

Standalone support for a game has strict non-negotiable requirements that must be met.

- The proposer must either be a Developer on RetroAchievements, or a Junior Developer with at least one published set, as these achievement sets still have to follow our global [Achievement Design](https://docs.retroachievements.org/developer-docs/achievement-design.html) rules. This is not something we can trust anyone with who has not showed us their proficiency in set design before. Note that if you are a Junior Developer and your proposal gets accepted, that your Standalone project will **not** count towards graduation as it does not involve regular achievement development that you are graded on by Code Reviewers. Likewise, you are still expected to work towards graduation.
  - Alternatively, the proposer may suggest a standalone without having developed a set, but must do so with the support of a RetroAchievements Developer who will be in charge of set design.
- You must be able to enforce Hardcore restrictions as shown in the [Global Leaderboard and Achievement Hunting Rules](https://docs.retroachievements.org/guidelines/users/global-leaderboard-and-achievement-hunting-rules.html). Such examples include black/whitelisting other mods and/or cheats that reduce the challenge of achievements, or disallowing multiplayer to prevent unfair advantages. These advantages should only be reserved for Softcore players, if applicable.
- We expect you to have knowledge of the tools required to add Standalone support to a game. This varies depending on the game you are working on, with some games requiring expertise with programming languages such as C#, while other games may require extensive modding tools available which can be leveraged for developing an achievement set. Please also check out the [Standalone Integration guide](https://api-docs.retroachievements.org/connect/standalone.html) to find out how to connect your standalone project to RetroAchievements.

### What Do We Look for in Standalone Support

We will be listing some guidelines below as for what we are looking for. However, do keep in mind that at all times, **the Admin team of RetroAchievements makes the decision as to whether we want to proceed with your proposal.** A good plan- or prototype must therefore always be presented.

- It is allowed to request Standalone support for games that already have achievement sets on other platforms, such as Steam.
  - However, the set on RetroAchievements must be significantly different enough from the existing ones. Plagiarism from other platforms is not allowed, with our sets needing to offer a unique experience not present in the official sets.
- Official support for MMO private servers must be proposed in collaboration with the host(s) of the server, as these will likely have to built within the code of the server, barring rare exceptions.
- Fangames are allowed, but do beware that we will not be hosting these within our own community to prevent potential legality issues. You must ensure that the user has access to everything necessary without being reliant on our community.

### How to Request Standalone Support

Keeping all the guidelines above in mind, you must create a detailed plan that goes into your Standalone proposal. It must include at the very least a full Set Plan for the core set and potential subsets, how you are planning to address concerns about Hardcore restrictions, and how your Standalone project will connect with RetroAchievements. Once you have finished your plan, you can send it to [RAdmin](https://retroachievements.org/user/radmin), where it will be discussed. If approved, we will be in contact with you on how to proceed, including the development of a working prototype so we can gain a good understanding of how viable this Standalone support will be.

We want to stress that the more complete a proof of concept is for a standalone proposal, the more weight it will have in the discussion that will be held between the administrators.
