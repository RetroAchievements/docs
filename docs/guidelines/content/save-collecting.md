---
title: Save State Collecting
description: This guide covers the requirements for gathering save files and states to be archived for future maintenance needs.
---

# Save File Archive

[[toc]]


**THIS IS A DRAFT DOCUMENT THAT MUST BE UPDATED AS THE ARCHIVE ARCHITECTURE IS BUILT. IT SHOULD NOT BE MERGED UNTIL IT IS COMPLETE**


# Purpose of the Save Archive Program

The goal of the save archive program is to create and store a complete set of a game's save files and states to be stored on RetroAchievements that can be accessed by developers at any time and is comprised of saves that allow developers near immediate access to all relevant parts of a game so that they can quickly and easily reproduce and fix reported achievement set issues. The most significant barrier to maintaining inactive developer sets is the time required to reproduce a reported issue. This barrier can be removed by providing easy access to a thorough archive of save files, primarily save states, that adequately cover a game's general progression content as well as states relevant to RetroAchievements sets.

Each game only ever needs one complete set of properly collected, organized, and retained states to ensure simple the easiest possible future maintainence of that set. This document explains the process that was created to ensure the save archive is standardized, consistent, and as easy to access as possible in the future.

# Submission Requirements and Save Archive Management

QA manages the save archive program and is responsible for developing policy and requirements. Players and developers may submit saves directly to the archive for validation. Once validated, submitted saves will be retained in the archive in perpetuity, providing permanent accessibility to all relevant aspects of a game necessary to easily reproduce and address reported future issues.

Each complete set of saves shall contain the following:
- A full set of properly named states and save files as described below to provide full access to all aspects of a game needed to maintain its achievement set
- **May be replaced by on site save notes** Accompanying documentation that provides amplifying information needed to guide a unfamiliar developer through easily unlocking achievements or reproducing reported issues. The standardized template must be used for this documentation.
- **Subject to removal** A copy of the core file used to collect the states

When a game's save archive meets the aforementioned requirements, it is considered complete and will be retained indefinitely.

# Save File Requirements

## Type of Save Files

Save states are the default type of save file to be stored in the repository because they can be created at any time in any game in order to provide the highest accessibility. States are usually incompatible between different versions of cores and emulators, so it is imperative that states be carefully gathered with specific attention to maximizing compatibility as later described.

Organic game save files and memory card files have much higher compatibility, but are typically much more restrictive in terms of where they can be made.

Both states and game save files are useful and should be collected and submitted per the following guidelines to be part of a complete set of saves:

### Save State Requirements

A complete set of states would have a state for each of the following situations, game dependent:

- Throughout the game at logical progression points, such as just prior to the end of a stage to ensure access to memory changes when a stage transitions from one to another
- Prior to entering a boss room/battle even if the set does not have boss challenges
- Prior to each achievement unlock or initial checkpoint hit if possible to determine. When an achievement has a challenge indicator, the state should be taken prior to it appearing

#### File Naming

Saves must follow a standard file naming convention.

- File names must adhere to the following format depending on what type of state they are:
    - Progress files: "ProgXX - general part of game - additional info as needed"
        - Example: "Prog01 - End of 1-1 - Luigi" would be a save state at the end of Stage 1-1, playing as Luigi in Super Mario Bros. 2
    - Boss files: "BossXX - Boss name - general part of game - additional info as needed"
        - Example: "Boss02 - Triclyde - Stage 2-3 - Toad" would be a save state prior to entering the Triclyde's room in stage 2-3 while playing as Toad in Super Mario Bros. 2
    - Achievement states: "Achievement number - achievement name"
        - Example: "41351 - Break Time" would be a save state prior to unlocking the Super Mario Bros. 2 achievement "Break Time"

Standardized file names will make it easy for developers to quickly understand which file they need for a particular purpose. Referencing specific achievement ID is key for states when relevant.

### Save File Documentation

Each complete set of saves will be accompanied by **yet to be determined** documentation that clearly and obviously depicts relevant information to simply guide developers to the appropriate saves they may need. It must also provide any game or achievement context they would need to understand what to do after loading the state in order to unlock an achievement or begin/end a challenge. In most cases, amplifying information is not necessary for things such as finishing a stage, scoring some number of points, defeating a boss, opening a final chest, but many games are unintuitive if jumping straight into the middle of them and should be briefly explained in clear, simple terms as appropriate.

### Core and Emulator Version Control

All states using cores must use the following versions for their respective consoles. States for cores not listed **will not be accepted**:

**Insert table of acceptable cores and versions**

All states using standalone emulators must use the following emulator version. States for different versions **will not be accepted**:

**Insert table of acceptable standalone versions**

# How to Submit Save Files

**TBD**