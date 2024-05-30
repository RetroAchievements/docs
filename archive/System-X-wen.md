_This article was originally published in the [RANews - November/2020](https://news.retroachievements.org/issues/2020-11/nerd-corner.html)_

## Intro

There seems to be a lot of speculation on what the next available systems to support achievements will be. With the [recent announcement of a PS2 core](https://twitter.com/libretro/status/1322711254826471424), there have been a lot of questions regarding if/when it will be supported. If you're only interested in the answer to that question, skip to the [end of this article](#when-will-ra-support-playstation-2). But if you want to understand what exactly is needed to add support for a new system, keep reading.

## Requirements

These are the things that are required in order to add RetroAchievements support for a new system:

1. Emulation (preferably a libretro core).
   - The core must expose memory.
   - The core must function in RALibretro.
2. Unique identification of games.
3. Server support.

### Step 1: Emulation

The first step is, obviously, to have an emulator for the system to be supported.

In the early days of RetroAchievements we used standalone emulators - one for each system. Keeping all those emulators bug-free and up-to-date requires a lot of effort and we don't have enough programmers involved on this front.

It's currently preferred to use a [libretro core](https://www.retroarch.com/?page=cores) for emulation. This way the core developers can push new features and we can focus only on the achievement functionality. Cores can be updated and released without any additional effort for us.

Another big advantage is that libretro cores also function in [RetroArch](https://www.retroarch.com/), which allows RetroAchievements to be earned on many platforms (the standalone emulators were all Windows-only applications).

**Managed by**: libretro core developers.

#### Step 1a: Exposed Memory

As achievement triggers are a series of conditions that watch for things that happen in the emulated RAM,
another requirement is access to the system's RAM.

Without exposed memory, the [Memory Inspector](https://docs.retroachievements.org/Memory-Inspector-Overview/) appears blank and achievement creators are unable to create achievements.

Additionally, as RetroAchievements only reads the memory once per frame, some systems which heavily leverage [paged memory](https://en.wikipedia.org/wiki/Paging) have to provide some way to access the entire memory, not just the current page of memory.

**Managed by**: libretro core developers with some interaction with RetroAchievements developers.

#### Step 1b: RALibretro

The core must function in RALibretro, as that is where the achievement developers will identify the important pieces of memory and create the achievements.

This is usually only an issue if the core relies on some functionality not yet implemented in RALibretro (like the recently added keyboard and OpenGL 3D support), but some issues are caused by the RALibretro implementation being sufficiently different from the RetroArch implementation. Unless the core can be modified to not require the missing functionality, it cannot be supported until RALibretro is updated.

[This page](http://docs.retroachievements.org/Emulator-Support-and-Issues/) lists the status of each core the last time they were tested.

**Managed by**: RetroAchievements

### Step 2: Game Identification

We must be able to uniquely identify the games for the system.

We use a method called [MD5](https://en.wikipedia.org/wiki/MD5), which scans the game's file and generates a number that we usually call as "hash". With this number it's possible to confirm if two copies of a file are identical, which makes it possible to ensure the player is using a ROM that the achievements were designed or tested against.

For most systems, we are able to just hash the entire ROM file, minus any header information. For larger games (particularly those on CD or DVD) we only hash what we consider to be the most important data to minimize load times. More information on how we identify games can be found [here](https://docs.retroachievements.org/Game-Identification/).

For systems with writable media (mostly home computers), we have to make sure that we don't hash any files that may be modified by the game itself. Systems that write to the game file must treat the original disk file as readonly and only write changes to a copy of the disk. If the core/emulator modifies the disk file, it can no longer be identified and cannot be considered viable for achievements.

**Managed by**: RetroAchievements

### Step 3: Configure the Web Server

In order to support a new system, the RetroAchievements web server must be properly configured to accept new game and achievement entries for that system.

**Managed by**: RetroAchievements

### When will RA support System X?

[This page](http://docs.retroachievements.org/Emulator-Support-and-Issues/) lists the status of each core the last time they were tested.
