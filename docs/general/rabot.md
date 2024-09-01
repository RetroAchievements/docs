---
title: RABot
description: Learn about RABot, the official RetroAchievements Discord bot, and explore the useful commands it offers.
---

# RABot, the RA Discord Robot

RABot is the official RetroAchievements Discord robot. Therefore, to interact with him, you need to be a member of the [RA Discord server](https://discord.gg/dq2E4hE).

RABot has many cool and useful commands, and in this page you'll see some examples of how some of them can be used.

RABot is powered by [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Node.js](https://nodejs.org/), [discord.js](https://discord.js.org/) and [Commando](https://discord.js.org/#/docs/commando/master/general/welcome).

**Special thanks**: the [DragonFire's Xiao bot](https://github.com/dragonfire535/xiao/) is a great source of inspiration for many of the cool commands we have in RABot, like [`!bulbapedia`](#bulbapedia), [`!manga`](#manga), [`!translate`](#translate), [`!define`](#define) and others.

## Getting help

### `!help`

This command makes the RABot send a DM with the list of commands available.

If you need help about a specific command use `!help command_name`.

### `!docs`

Provide links to RetroAchievements documentation.

![docs](https://user-images.githubusercontent.com/8508804/51226593-1f44a980-1937-11e9-9a74-1727bebbaba7.png)

![docs1](https://user-images.githubusercontent.com/8508804/51226592-1eac1300-1937-11e9-9eca-3939866f58c4.png)

### `!rarch`

Provide basic info about RetroArch.

![rarch](https://user-images.githubusercontent.com/8508804/51226589-1eac1300-1937-11e9-8673-efe646139654.png)

### `!rules`

Show the rules, or a specific one.

![rules](https://user-images.githubusercontent.com/8508804/51226588-1e137c80-1937-11e9-83dc-65cc2c459e18.png)

### `!about`

Show info about the RABot.

![about](https://user-images.githubusercontent.com/8508804/51226587-1e137c80-1937-11e9-9063-85f23fc92fff.png)

### `!panic`

What to do when the site is down.

![panic](https://user-images.githubusercontent.com/8508804/51226585-1ce24f80-1937-11e9-995b-0c909c2b74f7.png)

## Creating polls

### `!poll`

Creates a simple poll. People can vote adding reactions, but they can also vote with unlisted reactions. See [`!tpoll`](#tpoll) if you are interested in a more advanced and serious poll.

![poll](https://user-images.githubusercontent.com/8508804/51226584-1ce24f80-1937-11e9-896e-4d4ec15c251d.png)

### `!tpoll`

Creates a timed poll. In this kind of poll only the first reaction is considered a vote, and if people react with an unlisted reaction then the vote is voided.

![tpoll](https://user-images.githubusercontent.com/8508804/51226583-1ce24f80-1937-11e9-875d-7508227f4ab2.png)

## Dealing with numbers

### `!hex`

Converts a non-negative integer from decimal (or binary) to hexadecimal (or vice-versa).

![hex](https://user-images.githubusercontent.com/8508804/51226581-1c49b900-1937-11e9-9518-c82deb427e62.png)

### `!bin`

Converts a non-negative integer from decimal (or hexadecimal) to binary (or vice-versa).

![bin](https://user-images.githubusercontent.com/8508804/51226582-1ce24f80-1937-11e9-9ad1-92f73dbeb2f0.png)

### `!calculator`

**Alias**: `!calc`

Evaluates the given math expression and responds with the result.

![calculator](https://user-images.githubusercontent.com/8508804/51320685-ca448880-1a47-11e9-85da-174bd8e2ae99.png)

## Getting RetroAchievements.org info/links

### `!ragame`

**Alias**: `!game`

Google for a game at RetroAchievements.org and show the link.

![ragame](https://user-images.githubusercontent.com/8508804/51226568-1a7ff580-1937-11e9-9eb7-c44d4093e9b9.png)

### `!tickets`

Return the URL for the open tickets page of the given game name.

![tickets](https://user-images.githubusercontent.com/8508804/51226578-1c49b900-1937-11e9-96eb-c4d7c451d43f.png)

### `!whatgame`

**Alias**: `!wg`

Responds with a random game that has achievements.

![whatgame](https://user-images.githubusercontent.com/8508804/51226560-18b63200-1937-11e9-992e-a5290c986a1c.png)

![whatgame1](https://user-images.githubusercontent.com/8508804/51226559-18b63200-1937-11e9-884d-7ee9d2d5ac3a.png)

### `!whatcheevo`

Responds with a random achievement.

## Random facts

### `!funfact`

Responds with a retrogaming fun fact.

**Note**: you can suggest more fun fact entries [here](https://github.com/RetroAchievements/RABot/issues/2).

![funfact](https://user-images.githubusercontent.com/8508804/51226562-194ec880-1937-11e9-87e9-80b1a63f2c3a.png)

### `!memefact`

**Alias**: `!meme`

Responds with a RetroAchievements meme fact.

**Note**: you can suggest more meme fact entries [here](https://github.com/RetroAchievements/RABot/issues/6), but keep these 2 simple rules in mind **1)** you can't suggest your own quote; and **2)** when suggesting a quote, be sure to get an approval from the author and/or the person being mentioned.

![memefact](https://user-images.githubusercontent.com/8508804/51226561-194ec880-1937-11e9-8e7a-4b65ffbc87f5.png)

## Getting gaming related info

### `!gamefaqs`

**Aliases**: `!gamefaq`, `!gfaq`

Google for a game at GameFAQs and show the link.

![gamefaqs](https://user-images.githubusercontent.com/8508804/51226573-1b188c00-1937-11e9-998e-b39cb9b60bd4.png)

### `!longplay`

**Aliases**: `!lplay`, `!lp`

Search for a longplay video on youtube and post the link.

![longplay](https://user-images.githubusercontent.com/8508804/51226571-1a7ff580-1937-11e9-8f54-50a7a9a7c645.png)

### `!vgmaps`

**Alias**: `!vgmap`

Searches vgmaps.com for a video game's map.

![vgmaps](https://user-images.githubusercontent.com/8508804/51319802-35409000-1a45-11e9-8bfc-736b9247fde6.png)

### `!howlongtobeat`

**Alias**: `!hltb`

Google for a game at howlongtobeat.com and show the link.

![howlongtobeat](https://user-images.githubusercontent.com/8508804/51226572-1b188c00-1937-11e9-85f9-ecbe6890246a.png)

## Miscellaneous

### `!define`

**Aliases**: `!dictionary`, `!dict`

Defines a word.

![define](https://user-images.githubusercontent.com/8508804/51226574-1b188c00-1937-11e9-97fc-1d926d7777d0.png)

### `!translate`

**Alias**: `!tr`

Translates text to a specific language. **Powered by <https://translate.yandex.com/>**

![translate](https://user-images.githubusercontent.com/8508804/51320293-81400480-1a46-11e9-9075-738ac91bd7e1.png)

![translate1](https://user-images.githubusercontent.com/8508804/51320291-81400480-1a46-11e9-9b9c-980262a8d276.png)

### `!urban`

Defines a word, but with Urban Dictionary.

![urban](https://user-images.githubusercontent.com/8508804/51226567-19e75f00-1937-11e9-96b6-373ac32da597.png)

### `!wikipedia`

**Alias**: `!wp`

Searches Wikipedia for your query.

![wikipedia](https://user-images.githubusercontent.com/8508804/51226566-19e75f00-1937-11e9-8cd7-ca05ad9c045a.png)

### `!youtube`

**Alias**: `!yt`

Search for a video on youtube and post the first one found.

![youtube](https://user-images.githubusercontent.com/8508804/51226564-194ec880-1937-11e9-8435-c48c3c5552a7.png)

### `!bulbapedia`

Searches Bulbapedia for your query.

![bulbapedia](https://user-images.githubusercontent.com/8508804/51226575-1bb12280-1937-11e9-8c31-58317efca4ce.png)

### `!movie`

Searches TMDB for your query, getting movie results.

![movie](https://user-images.githubusercontent.com/8508804/51226570-1a7ff580-1937-11e9-8693-b570ce538593.png)

### `!manga`

Searches AniList for your query, getting manga results.

![manga](https://user-images.githubusercontent.com/8508804/51226576-1bb12280-1937-11e9-9805-dc51c5e783bf.png)

### `!anime`

Searches AniList for your query, getting anime results.

![anime](https://user-images.githubusercontent.com/8508804/51226577-1bb12280-1937-11e9-880a-8263330199bd.png)
