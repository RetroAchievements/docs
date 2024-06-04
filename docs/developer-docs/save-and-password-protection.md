---
title: Implementing Save Protection and Password Protection
description: Learn why save and password protection should be used, how to implement, and what to test after implementation.
---

# Save and Password Protection

Save and password protection is something that needs to be implemented on any set that is for a game that makes use of save games or has passwords. RPGs are the most common, but especially on newer systems like PS2, save games are often used to store progression, unlocks, collectables found, high scores, and so on.

[[toc]]

## What Is It?

Save and password protection is using conditions to prevent an achivement from unlocking upon loading a save or loading from a password. Since memory will initialize upon loading a save, many achivements could trigger at this time if it isn't present. This is to ensure that players can't go download a save from a website and use it to unlock most of the set.

What save and password protection does not do is prevent players from using their own saves or passwords. It does not mean doing something like blocking the achievement if the player visits the save or load screen (unless the achievement specifically forbids using saves).

For brevity, `save protection` will be used to include both save and password protection for the remainder of this document.

## How to Implement Strong Save Protection

There are many methods to implement solid save protection and some can even be combined with great results. What works best will definitely depend on the game and what is available in its memory along with when saving and loading is available. If a player can swap mid game and save at any time, stronger save protection will be needed than if there are limited locations at which a player can save and events never happen in these locations.

Before even considering how to implement save protection make sure you take note of the following things in regards to the game:

- Where can the player save?
- Where can the player load a save?
- Does the game save in the RAM things for multiple slots?
- What does the game save?
- Is there a specific save/load screen with a way to determine the player is on that screen?
- How/when does the memory initialize for the thing being checked?  

Keep all of this in mind because depending on how these things are handled, certain types of save protection may work better than others.

### What to Test After Implementing Save or Password Protection

After implementing save or password protection, you should test the following:

 - The achievement does not trigger if you load a save after the event. Test multiple points in the game if possible.
 - The achievement triggers at the desired time.
 - The event does indeed happen at the specific location ID! Incorrect location ids can easily result in tickets if not tested.

## Types of Save Protection

Now on to the different types. Keep in mind that this isn't an all inclusive list, this is just the most common and useful forms of save protection. Other forms may also work for a specific achievement or game depending on what is present in the RAM. The first step to good save protection is always going to be having a solid foundation of RAM digging for the game so there is plenty to work with and use. The better understood the game's memory is, the easier good save protection is to implement.

### Location ID Checks 

This is a simple condition checking that the player is in the location where the achievemnt would trigger during normal conditions of play. For example if the achievement is beating a boss, then a check that the player is at the location the boss is found in would be a good addition.

| ID  | Flag | Type  | Memory       | Cmp | Type  | Mem/Val    | Hits |
| ---:|:---- |:----- |:------------ |:---:|:----- |:---------- |:----:|
| 1   |      | Mem   | 0x`LOCATION` |  =  | Value | `BOSSROOM` |  0   |
| 2   |      | Delta | 0x`BOSSDEAD` |  =  | Value | `FALSE`    |  0   |
| 3   |      | Mem   | 0x`BOSSDEAD` |  =  | Value | `TRUE`     |  0   |

**Works well in:**

- Games with limited save locations, like save points
- Achievements where the location is only accessible during that event or the player cannot save in that area.

**Does not work well in:**

- Games where the player can save and load at any point
- Events that happen in the same room as a save point
- Events that happen in a very commonly used location such as a hub world
- Events that can happen in multiple locations such as obtaining collectables.

One of the best things about this form of save protection is that it combines very well with other forms in some instances where it doesn't work as well.

### Game State Checks

This is simply checking that the game state on the previous frame wasn't a loading screen/state. This is effective when the state changes from loading to gameplay on the frame after the data is loaded. By ensuring that we weren't in a loading state, any of the Delta to Mem checks will be blocked.

| ID  | Flag | Type  | Memory        | Cmp | Type  | Mem/Val | Hits |
| ---:|:---- |:----- |:------------- |:---:|:----- |:------- |:----:|
| 1   |      | Delta | 0x`GAMESTATE` | !=  | Value | `LOAD`  |  0   |

If you do not have a game state, you can often check that the location ID is stable and not invalid (often location = 0x00 is not a valid location)

| ID  | Flag | Type  | Memory       | Cmp | Type  | Mem/Val    | Hits |
| ---:|:---- |:----- |:------------ |:---:|:----- |:---------- |:----:|
| 1   |      | Mem   | 0x`LOCATION` | !=  | Delta | `LOCATION` |  0   |
| 1   |      | Mem   | 0x`LOCATION` | !=  | Value | `INVALID`  |  0   |

** Works well in:**

- Games that expose a load state in memory
- Games that re-initialize memory before a load
- Achievements that do not have a specific location at which they occur, such as percent item collection.

**Does not work well in:**

- Games where the state changes on different frames from the loaded data, or the data takes multiple frames to load
- Games where you can directly load from one save to the next without being able to detect the load screen

### Delta Checks

This is simply checking that the delta of something is or is not true. Most often this will be used in AddSource chains to check that something is going fron n-1 to n, but also can be used for things like score to check that the delta is greater than 0 and less than the target. One can also check that the delta of the game state isn't the save/load screen for a very simple, but solid form of protection. This also can involve something like checking that a stage goes from complete to incomplete or the player goes from stage 1 to stage 2 or from stage 1 back to the hub world.

| ID  | Flag      | Type  | Memory        | Cmp | Type  | Mem/Val | Hits |
| ---:|:--------- |:----- |:------------- |:---:|:----- |:------- |:----:|
| 1   | AddSource | Delta | 0x`FLAG1`     |     |       |         |  0   |
| 2   | AddSource | Delta | 0x`FLAG2`     |     |       |         |  0   |
| 3   |           | Delta | 0x`FLAG3`     |  =  | Value | 2       |  0   |
| 4   | AddSource | Mem   | 0x`FLAG1`     |     |       |         |  0   |
| 5   | AddSource | Mem   | 0x`FLAG2`     |     |       |         |  0   |
| 6   |           | Mem   | 0x`FLAG3`     |  =  | Value | 3       |  0   |
| 7   |           | Delta | 0x`GAMESTATE` | !=  | Value | `LOAD`  |  0   |

**Works well in:**

- Collectable achievements
- Score achievements

**Does not work well in:**

- Achievements checking for a single thing to happen with a `Mem > Delta` check (unless combined with something else)
- Games where loaded memory may not all initialize in the same frame
- Games where values only populate on a specific screen.

### Prior Checks 

This isn't as commonly used, especially by itself, but is great when dealing with a situation like an event happening in a common location. Here's an example of prior being used as save protection:

In this case, the event happens in a common hub location where players are often going to save. On top of that, the game even prompts the player to save right after the event happens and when they load that save, it will be in the same location as the event.  Plus the game allows the player to save and load at any point outside of battle and cutscenes. That's a big problem since in this case a player could unlock the achievement by loading a save with many other types of save protection.

So a prior is used on the location id in conditon 1 to ensure that the player got to that location via playing the game as normal rather than loading a save. Upon loading a save, the prior would be 0 or the value from another save so that condition would not be true. When playing as normal the prior would be the value in condition 1.

| ID  | Flag | Type  | Memory        | Cmp | Type  | Mem/Val       | Hits |
| ---:|:---- |:----- |:------------- |:---:|:----- |:------------- |:----:|
| 1   |      | Prior | 0x`LOCATION`  |  =  | Value | `PROLOGUE`    |  0   |
| 1   |      | Mem   | 0x`LOCATION`  |  =  | Value | `COMMON_AREA` |  0   |
| 2   |      | Delta | 0x`EVENTFLAG` |  =  | Value | `FALSE`       |  0   |
| 3   |      | Mem   | 0x`EVENTFLAG` |  =  | Value | `TRUE`        |  0   |

Don't forget though that prior does not change until the value itself changes. Most often delta is going to be best, but prior is very useful when a value changes at a different point than when the achievement should trigger and that previous value is necessary to check to ensure the player reached that point via normal gameplay. If the value has not changed, the prior defaults to 0 or if switching to another save it will have the value from the previous save lingering. Be very careful when using prior since used wrongly it can result in things triggering at the wrong time or not at all. For jr devs, expect that when prior is being used for save protection to have to explain to the code reviewer during the review process why prior was used because it is a commonly misused flag and is rarely used in general. However, it does have plenty of use like in the example above.

**Works well in:**
- Events happening in common locations

**Does not work well in:**
- Anything where a delta check or other form of save protection is better
- Anything that could happen before a change occurs in the address
- Games where you can swap saves readily and a prior from a previous save could cause problems with the achievement triggering

### Event Flag Guarding

In RPGs and other games with linear progression with event flags this will be the most useful form of save protection. It's very simple to add. All that is done is check that the next event has not been done yet. So there would be a check that the bitflag is 0 if normal bitflags are used, 1 if reverse bitflags are used.

Be cautious when using this!  It won't work well if the event flag used is actually an optional event. Some games also may untoggle or reuse event flags later on and those should not be used. This also won't work as well if sequence breaking is possible.

Generally, you should combine this with any other form of save protection.

Another great use of event flags for save protection is to check that the delta of a very early event or the event before the achivement = 1 (or 0 with reverse bitflags).

| ID  | Flag | Type  | Memory         | Cmp | Type  | Mem/Val     | Hits |
| ---:|:---- |:----- |:-------------- |:---:|:----- |:----------- |:----:|
| 1   |      | Mem   | 0x`LOCATION`   |  =  | Value | `EVENT_LOC` |  0   |
| 2   |      | Delta | 0x`EARLYEVENT` |  =  | Value | `COMPLETE`  |  0   |
| 3   |      | Delta | 0x`ACHV_EVENT` |  =  | Value | `FALSE`     |  0   |
| 4   |      | Mem   | 0x`ACHV_EVENT` |  =  | Value | `TRUE`      |  0   |
| 5   |      | Mem   | 0x`NEXT_EVENT` |  =  | Value | `FALSE`     |  0   |

**Works well in:**

- Unmissable progression achievements that are linear.

**Does not work well in:**

- Achivements for optional events that aren't missable
- Achievements where sequence breaking is possible
- Games with large spans of time between events (especially if the player can save before the next event)
- Events that can be done in any order.

### In-Game Timer Checks

A solid form of save protection for games where the player can save or load at any time. There are two ways this can be implemented:

1. Checking that the timer is not a default value: Typically this will be a simple delta check on the timer that it is either not 0 or whatever the intial value is for the game.

| ID  | Flag | Type  | Memory       | Cmp | Type  | Mem/Val         | Hits |
| ---:|:---- |:----- |:------------ |:---:|:----- |:--------------- |:----:|
| 1   |      | Mem   | 0x`GAMETIME` |  =  | Value | `NEW_GAME_TIME` |  0   |

**Works well in:**

- Games that can only load from title screen but save at any time
- Games where the timer zeroes out for a frame when loading

**Does not work well in:**

- Games that allow the player to load their save at any time and the timer swaps immediately to the new save's value.

2. Using SubSource to check for large changes in the timer: 

During most of gameplay this will remain true, but when a save is loaded this will not be true for a single frame, which is the most essential frame where the memory initializes. Thus it will prevent the achievements from unlocking when changing to a diffrent save or loading a save from the title screen.

| ID  | Flag      | Type  | Memory       | Cmp | Type  | Mem/Val          | Hits |
| ---:|:--------- |:----- |:------------ |:---:|:----- |:---------------- |:----:|
| 1   | SubSource | Delta | 0x`GAMETIME` |     |       |                  |  0   |
| 1   |           | Mem   | 0x`GAMETIME` |  <  | Value | `TOO_LARGE_INCR` |  0   |

**Works well in:**

- Games that allow the player to save and load freely
- Any game with a frame based timer

** Does not work well in:**

- Games that lack a frame based timer
- Games where the timer initializes before or after the rest of the memory

## Combining Multiple Forms of Save Protection

Combining multiple forms of save protection is not only possible, it is highly recommended to do so. Many times one form of save protection won't work on its own, but when combined with another type becomes very solid and strong protection. In many cases the examples where a form of save protection doesn't work as well can become a solid form when combined with something else. For example a location ID may not work as well in a game where the player can save and load anywhere, but combine it with a timer check or event flag check and it becomes much better.

The only time there is too much save protection is if the save protection prevents a player who met the conditions of the achievement from using their own save to earn the achievement. Always test the save protection both for it preventing an achievement from triggering and for it protecting the achievement from triggering when loading a save beyond that point.

## Save Protection and Save States

It is very common for new jr devs to ask about save states and if those should be protected against. Keep in mind that save states are a snapshot of the memory at the moment the state was created so most save protection will not protect from loading a state where the acheivement would trigger. Also since states are only allowed in softcore where the rules are less strict this isn't as essential. Most forms of save protection will protect against when you need to protect against with states as well. So overall, don't be too concerned about protecting specifically against loading a state. The purpose of save protection is to ensure that when a battery or memory card save is loaded that no achievements trigger.
