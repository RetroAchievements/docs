---
title: RABot
description: Learn about RABot, the official RetroAchievements Discord bot, and explore the useful commands it offers.
---

# RABot, the RA Discord Robot

RABot is the official RetroAchievements Discord robot. 
Therefore, to interact with it, you need to be a member of the [RA Discord server](https://discord.gg/retroachievements).

RABot has many cool and useful commands, and on this page you'll see some examples of how some of them can be used.

RABot is powered by [Bun](https://bun.sh/), [TypeScript](https://www.typescriptlang.org/), [discord.js](https://discord.js.org/), and [Drizzle ORM](https://orm.drizzle.team/).

RABot is open source! You can view its code on GitHub at [RetroAchievements/RABot-Next](https://github.com/RetroAchievements/RABot-Next).
Contributions are welcome!

## General Commands

### `/topic`

Displays the current channel topic.

![topic command usage](/rabot-topic.png)

### `!rule`

Note: This command has not yet been converted to a slash command yet!

Displays server rules, or a specific rule if specified.

![rule command usage](/rabot-rule.png)

![rule command usage](/rabot-rule-2.png)

### `/contact`

Shows contact information for various RA teams.

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

Note that a native Discord poll might be easier and more intuitive to use, and also closed automatically.

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

### `!mem`

Note: This command has not yet been converted to a slash command yet!

Parses MemAddr strings and show achievement logic.
Supply either an achievement id, achievement url, or a memaddr.

![mem command usage](/rabot-mem.png)

## Fun & Tool Commands

### `/dadjoke`

Gets a random dad joke.

![dadjoke command usage](/rabot-dadjoke.png)

### `/frames`

Converts between time and frames at different frame rates.

![frames command usage](/rabot-frames.png)
