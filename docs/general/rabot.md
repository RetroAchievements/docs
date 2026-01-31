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

![docs](/rabot-docs.png)

![docs1](/rabot-docs1.png)

### `!rarch`

Provide basic info about RetroArch.

![rarch](/rabot-rarch.png)

### `!rules`

Show the rules, or a specific one.

![rules](/rabot-rules.png)

### `!about`

Show info about the RABot.

![about](/rabot-about.png)

### `!panic`

What to do when the site is down.

![panic](/rabot-panic.png)

## Creating polls

### `!poll`

Creates a simple poll. People can vote adding reactions, but they can also vote with unlisted reactions. See [`!tpoll`](#tpoll) if you are interested in a more advanced and serious poll.

![poll](/rabot-poll.png)

### `!tpoll`

Creates a timed poll. In this kind of poll only the first reaction is considered a vote, and if people react with an unlisted reaction then the vote is voided.

![tpoll](/rabot-tpoll.png)

## Dealing with numbers

### `!hex`

Converts a non-negative integer from decimal (or binary) to hexadecimal (or vice-versa).

![hex](/rabot-hex.png)

### `!bin`

Converts a non-negative integer from decimal (or hexadecimal) to binary (or vice-versa).

![bin](/rabot-bin.png)

### `!calculator`

**Alias**: `!calc`

Evaluates the given math expression and responds with the result.

![calculator](/rabot-calculator.png)

## Getting RetroAchievements.org info/links

### `!ragame`

**Alias**: `!game`

Google for a game at RetroAchievements.org and show the link.

![ragame](/rabot-ragame.png)

### `!tickets`

Return the URL for the open tickets page of the given game name.

![tickets](/rabot-tickets.png)

### `!whatgame`

**Alias**: `!wg`

Responds with a random game that has achievements.

![whatgame](/rabot-whatgame.png)

![whatgame1](/rabot-whatgame1.png)

### `!whatcheevo`

Responds with a random achievement.

## Random facts

### `!funfact`

Responds with a retrogaming fun fact.

**Note**: you can suggest more fun fact entries [here](https://github.com/RetroAchievements/RABot/issues/2).

![funfact](/rabot-funfact.png)

### `!memefact`

**Alias**: `!meme`

Responds with a RetroAchievements meme fact.

**Note**: you can suggest more meme fact entries [here](https://github.com/RetroAchievements/RABot/issues/6), but keep these 2 simple rules in mind **1)** you can't suggest your own quote; and **2)** when suggesting a quote, be sure to get an approval from the author and/or the person being mentioned.

![memefact](/rabot-memefact.png)

## Getting gaming related info

### `!gamefaqs`

**Aliases**: `!gamefaq`, `!gfaq`

Google for a game at GameFAQs and show the link.

![gamefaqs](/rabot-gamefaqs.png)

### `!longplay`

**Aliases**: `!lplay`, `!lp`

Search for a longplay video on youtube and post the link.

![longplay](/rabot-longplay.png)

### `!vgmaps`

**Alias**: `!vgmap`

Searches vgmaps.com for a video game's map.

![vgmaps](/rabot-vgmaps.png)

### `!howlongtobeat`

**Alias**: `!hltb`

Google for a game at howlongtobeat.com and show the link.

![howlongtobeat](/rabot-howlongtobeat.png)

## Miscellaneous

### `!define`

**Aliases**: `!dictionary`, `!dict`

Defines a word.

![define](/rabot-define.png)

### `!translate`

**Alias**: `!tr`

Translates text to a specific language. **Powered by <https://translate.yandex.com/>**

![translate](/rabot-translate.png)

![translate1](/rabot-translate1.png)

### `!urban`

Defines a word, but with Urban Dictionary.

![urban](/rabot-urban.png)

### `!wikipedia`

**Alias**: `!wp`

Searches Wikipedia for your query.

![wikipedia](/rabot-wikipedia.png)

### `!youtube`

**Alias**: `!yt`

Search for a video on youtube and post the first one found.

![youtube](/rabot-youtube.png)

### `!bulbapedia`

Searches Bulbapedia for your query.

![bulbapedia](/rabot-bulbapedia.png)

### `!movie`

Searches TMDB for your query, getting movie results.

![movie](/rabot-movie.png)

### `!manga`

Searches AniList for your query, getting manga results.

![manga](/rabot-manga.png)

### `!anime`

Searches AniList for your query, getting anime results.

![anime](/rabot-anime.png)
