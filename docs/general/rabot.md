---
title: RABot
description: Learn about RABot, the official RetroAchievements Discord bot, and explore the useful commands it offers.
---

# RABot, the RA Discord Robot

RABot is the official RetroAchievements Discord robot. 
Therefore, to interact with it, you need to be a member of the [RA Discord server](https://discord.gg/retroachievements).

RABot has many cool and useful commands, and on this page you'll see some examples of how some of them can be used.

RABot is powered by [Bun](https://bun.sh/), [TypeScript](https://www.typescriptlang.org/), [discord.js](https://discord.js.org/), and [Drizzle ORM](https://orm.drizzle.team/).

RABot is open source! You can view its code on GitHub at [RetroAchievements/RABot](https://github.com/RetroAchievements/RABot).
Contributions are welcome!

## General Commands

### `/topic`

Displays the current channel topic.

![topic command usage](/rabot-topic.png)

### `/rules`

Displays server rules.

![rule command usage](/rabot-rule.png)

Optionally, provide a specific rule number to display.

![rule command usage](/rabot-rule-usage.png)

![rule command usage](/rabot-rule-2.png)

### `/contact`

Shows contact information for various RA teams.

Note that this response is ephemeral, meaning only you will see it.

![contact command usage](/rabot-contact.png)

### `/status`

Displays bot status and statistics.

![status command usage](/rabot-status.png)

## Poll Commands

### `/poll`

Creates a simple poll (up to 10 options)

![poll command usage](/rabot-poll.png)

### `/tpoll`

Creates a timed poll that automatically closes.

Note that a native Discord poll might be easier and more intuitive to use, and also closes automatically.

![tpoll command usage](/rabot-tpoll.png)

Example when it closes:

![tpoll command usage](/rabot-tpoll-closed.png)

## Developer Commands

Developers, these are for you!

### `/gan <game-id>`

Generates an achievement news template.

![gan command usage](/rabot-gan.png)

### `/gan2 <game-id>`

Generates a pretty achievement news template with colors.

![gan2 command usage](/rabot-gan2.png)

### `/mem <input>`

Parses MemAddr strings and show achievement logic.
Supply either an achievement ID, achievement URL, or a MemAddr string.

![mem command usage](/rabot-mem.png)

## Fun & Tool Commands

### `/dadjoke`

Gets a random dad joke.

![dadjoke command usage](/rabot-dadjoke.png)

### `/frames`

Converts between time and frames at different frame rates.

![frames command usage](/rabot-frames.png)
