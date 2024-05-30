# Welcome

::: warning Are you an emulator developer?

This documentation is for the web API. [rcheevos](https://github.com/RetroAchievements/rcheevos) is our emulator integration library. We have a handy [integration guide](https://github.com/RetroAchievements/rcheevos/wiki/rc_client-integration) that you may find useful if you're looking to add RetroAchievements support to your emulator.

:::

The RetroAchievements API provides a massive amount of data from RetroAchievements in JSON format. You can fetch information on all sorts of platform content, including game, user, and achievement data.

In addition to making raw HTTP requests, you can also use a client library which directly integrates with your tech stack.

[[toc]]

## Keeping up to date

The API is driven directly from the [RAWeb](https://github.com/retroachievements/RAWeb) project.

**If there is data you require that is not currently exposed by the API, you can request that we build an enhancement [in this GitHub Discussion thread](https://github.com/RetroAchievements/RAWeb/discussions/2081).**

It is your responsibility to maintain your usage of the API. Much care is taken to avoid breaking changes, however these _can_ happen and we will try to communicate them in our release notes. Please ensure you're part of [our Discord](https://discord.gg/dq2E4hE) and following updates happening to the RetroAchievements website, especially when we publish new [releases](https://github.com/RetroAchievements/RAWeb/releases).

## API Access

The API can be fully accessed at any time by hitting any of the endpoints we've published in this documentation. Rate limiting is enabled.

Retrieving data from an API endpoint requires your RetroAchievement account's API key, which can be retrieved on [your account's control panel](https://retroachievements.org/controlpanel.php).

::: danger Rate Limiting and Usage Guidelines

**Just because you _can_ hit the API for N requests a second does not mean that you should.**

Our rate limit is intended to provide a fair amount of burst requests to each user. The API is used by many fellow RetroAchievements partners and it is expected of you to be reasonable about your usage and consider how often you really need to hit the site, as well as if it's possible to cache/preload data.

Some content data, such as game data, tends to be very static. Be wise with regards to your usage.

:::

If your individual rate limit is not enough for your use case, then please reach out to us on the RetroAchievements Discord in the `#coders` channel! We would be happy to look into your use case. Before doing this, consider what you're trying to achieve and if you can optimize your code.

### Using your key

Provide your username to the `z` query param and your API key to the `y` query param.

```
https://retroachievements.org/API/API_GetAchievementOfTheWeek.php?z=[your_username]&y=[your_key]
```

## Client Libraries

| Platform / Language | Repo                                                                              |
| :------------------ | :-------------------------------------------------------------------------------- |
| NodeJS (JavaScript) | [`RetroAchievements/api-js`](https://github.com/RetroAchievements/api-js)         |
| JVM (Kotlin)        | [`RetroAchievements/api-kotlin`](https://github.com/RetroAchievements/api-kotlin) |
