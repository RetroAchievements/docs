<p align="center" dir="auto"><a href="https://retroachievements.org" rel="nofollow"><img src="https://raw.githubusercontent.com/RetroAchievements/RAWeb/master/public/assets/images/ra-icon.webp" width="200" alt="RetroAchievements Logo" style="max-width: 100%;"></a></p>

<h1 align="center">RetroAchievements API</h1>

<p align="center">
  <i>Easily retrieve achievement, user, and game data from RetroAchievements.</i>
  <br /><br />
</p>

<p align="center">
  <a href="https://api-docs.retroachievements.org/getting-started.html"><strong>Documentation: Get Started</strong></a>
  <br />
</p>

<hr />

## Documentation

Learn how to authenticate and start pulling data from RetroAchievements on our documentation website.

- [Get started](https://api-docs.retroachievements.org/getting-started.html)
- [Get a user's profile information](https://api-docs.retroachievements.org/v1/get-user-profile.html)
- [Look up games a user has completed](https://api-docs.retroachievements.org/v1/get-user-progress.html)
- [Get a game's metadata](https://api-docs.retroachievements.org/v1/get-game-extended.html)

## API

Click the function names to open their complete docs on the docs site.

### User

- [Profile](https://api-docs.retroachievements.org/v1/get-user-profile.html) - Get a user's basic profile information.
- [Unlocks (most recent)](https://api-docs.retroachievements.org/v1/get-user-recent-achievements.html) - Get a list of achievements recently earned by the user.
- [Unlocks (by date range)](https://api-docs.retroachievements.org/v1/get-achievements-earned-between.html) - Get a list of achievements earned by a user between two dates.
- [Unlocks (on date)](https://api-docs.retroachievements.org/v1/get-achievements-earned-on-day.html) - Get a list of achievements earned by a user on a given date.
- [Game Progress](https://api-docs.retroachievements.org/v1/get-game-info-and-user-progress.html) - Get metadata about a game as well as a user's progress on that game.
- [All Completion Progress](https://api-docs.retroachievements.org/v1/get-user-completion-progress.html) - Get metadata about all the user's played games and any awards associated with them.
- [Awards / Badges](https://api-docs.retroachievements.org/v1/get-user-awards.html) - Get a list of a user's site awards/badges.
- [Set Development Claims](https://api-docs.retroachievements.org/v1/get-user-claims.html) - Get a list of set development claims made over the lifetime of a user.
- [Game Rank and Score](https://api-docs.retroachievements.org/v1/get-user-game-rank-and-score.html) - Get metadata about how a user has performed on a given game.
- [Point Totals](https://api-docs.retroachievements.org/v1/get-user-points.html) - Get a user's total hardcore and softcore points.
- [Specific Games Progress](https://api-docs.retroachievements.org/v1/get-user-progress.html) - Get a user's progress on a list of specified games.
- [Recently Played Games](https://api-docs.retroachievements.org/v1/get-user-recently-played-games.html) - Get a list of games a user has recently played.
- [Summary](https://api-docs.retroachievements.org/v1/get-user-summary.html) - Get a user's profile metadata.
- [Completed Games](https://api-docs.retroachievements.org/v1/get-user-completed-games.html) - Legacy endpoint. Get hardcore and softcore completion metadata about games a user has played.

### Game

- [Summary](https://api-docs.retroachievements.org/v1/get-game.html) - Get basic metadata about a game.
- [Extended Details](https://api-docs.retroachievements.org/v1/get-game-extended.html) - Get extended metadata about a game.
- [Achievement IDs](https://api-docs.retroachievements.org/v1/get-achievement-count.html) - Get the list of achievement IDs for a game.
- [Unlocks Distribution](https://api-docs.retroachievements.org/v1/get-achievement-distribution.html) - Get how many players have unlocked how many achievements for a game.
- [High Scores](https://api-docs.retroachievements.org/v1/get-game-rank-and-score.html) - Get a list of either the latest masters or highest hardcore points earners for a game.

### System

- [Get All Systems](https://api-docs.retroachievements.org/v1/get-console-ids.html) - Get the complete list of system ID and name pairs on the site.
- [Get All Games and Hashes](https://api-docs.retroachievements.org/v1/get-game-list.html) - Get the complete list of games for a console, including their hashes.

### Achievement

- [All Unlocks](https://api-docs.retroachievements.org/v1/get-achievement-unlocks.html) - Get a list of users who have earned an achievement, targeted by achievement ID.

### Feed

- [All Recent Game Awards](https://api-docs.retroachievements.org/v1/get-recent-game-awards.html) - Retrieve all recent game awards granted to players.
- [Active Claims](https://api-docs.retroachievements.org/v1/get-active-claims.html) - Retrieve active achievement set development claims.
- [Inactive Claims](https://api-docs.retroachievements.org/v1/get-claims.html) - Retrieve achievement set development claims that have been completed, dropped, or are expired.
- [Top Ten Ranked Users](https://api-docs.retroachievements.org/v1/get-top-ten-users.html) - Get the list of top ten points earners.

### Event

- [Achievement of the Week](https://api-docs.retroachievements.org/v1/get-achievement-of-the-week.html) - Get comprehensive metadata about the current Achievement of the Week.

### Ticket

- [Get Ticket by ID](https://api-docs.retroachievements.org/v1/get-ticket-data/get-ticket-by-id.html)
- [Get Most Ticketed Games](https://api-docs.retroachievements.org/v1/get-ticket-data/get-most-ticketed-games.html)
- [Get Most Recent Tickets](https://api-docs.retroachievements.org/v1/get-ticket-data/get-most-recent-tickets.html)
- [Get Game Ticket Stats](https://api-docs.retroachievements.org/v1/get-ticket-data/get-game-ticket-stats.html)
- [Get Developer Ticket Stats](https://api-docs.retroachievements.org/v1/get-ticket-data/get-developer-ticket-stats.html)
- [Get Achievement Ticket Stats](https://api-docs.retroachievements.org/v1/get-ticket-data/get-achievement-ticket-stats.html)

## How to Contribute

First, fork this repository and clone your fork. Then, in a terminal, `cd` into the repo directory on your local machine.

### Installation

```bash
pnpm install
```

### Dev Server

```bash
pnpm dev
```

You can now open your local docs site in your browser. By default, this can done by visiting http://localhost:5173/.

Put your work on a branch and push it to your fork. When you are ready to contribute to this repository, open a PR with your branch targeting this repo's `main`.

## Projects Using the RetroAchievements API

Let us know about yours by [opening an issue](https://github.com/RetroAchievements/api-docs/issues/new)!
