---
title: Game Info and Hub Guidelines
description: Guidelines for contributing and editing game metadata, images, and hubs on RetroAchievements. Learn about the best practices for entering game titles, developers, publishers, genres, and release date information, as well as screenshots, box art, and categorization via the hub system.
---

# Game Info and Hub Guidelines

[[toc]]

## Game Info

Game info refers to the metadata on a game page, including the game title, developer, publisher, genre, and release date.

### Game Titles

- Titles may use special/accented characters like the `é` in Pokemon. However, emojis should not be used.
- Subtitles are usually divided by a colon rather than a hyphen. If there are multiple subtitles, a colon is used first, followed by hyphens.
	- Atlantis - The Lost Empire -> Atlantis: The Lost Empire
	- Yu Yu Hakusho - Ghost Files - Tournament Tactics -> Yu Yu Hakusho: Ghost Files - Tournament Tactics

#### Regional Titles

- The North American title should typically be prioritized, if it exists. European titles that differ but are well-known or helpful for searching can also be added, divided by a pipe (`|`). Japanese titles may occasionally be added for the same reason, but usually this should be avoided since the titles often aren't well-known and RetroAchievements does not have a significant Japanese userbase.
	- An exception: [Dragon Quest | Dragon Warrior](https://retroachievements.org/game/1471) puts the Japanese title first because Dragon Quest is the well-known and later official title of the games internationally. This also sorts the games more conveniently in lists.
- Japanese games with fan translations may add the translated title, but the original Japanese title should still come first before any unofficial title. Example: [Hataraku Chocobo | Working Chocobo](https://retroachievements.org/game/17766).
- If a Japan-exclusive game later received an official translation, even if it was many years later, that English title should come first, followed by the original title. Examples: [EarthBound Beginnings | Mother](https://retroachievements.org/game/3814) and [Trials of Mana | Seiken Densetsu 3](https://retroachievements.org/game/1391).
- If a title is very long, it may be preferred to drop the alternate piped titles.

#### Tags

- Hacks, homebrews, demos, prototypes, test kits, and unlicensed games are signified by prefixing the game title with `~Hack~`, `~Homebrew~`, `~Demo~`, `~Prototype~`, `~Test Kit~`, or `~Unlicensed~`. This is a technical limitation that may change in the future.
- In cases where `~Demo~` or `~Prototype~` are used alongside `~Hack~` or `~Homebrew~`, they are to be listed after the latter.
	- Example: `~Homebrew~ ~Demo~ Bob's Game` instead of `~Demo~ ~Homebrew~ Bob's Game`. The reason for this is that no matter what stage the game is in, it will always be a homebrew or a hack; therefore, those tags should take priority.
- In cases where a game is unlicensed and is actually just a hack of another game, then `~Hack~` would be used instead of `~Unlicensed~`.
    - Example: Final Fantasy VII on NES, which is a bootleg/pirate release, but it's actually    just a hack of Final Fantasy III that was put on a cartridge. So the RA entry would be `~Hack~ Final Fantasy VII`.
- Some deprecated game pages that remain on the site are prefixed with `~Z~` so they sort to the bottom of lists.

### Developers and Publishers

- Ports and conversions should have the developer of the specific port entered. The developer of the original game should not be included unless they were directly involved with creating the port.
- When a development team or subsidiary is owned by another company, that larger company does not need to be included. For example, [Sonic the Hedgehog](https://retroachievements.org/game/1) has Sonic Team entered and does not include Sega.
- Multiple publishers may be entered when they vary by region. This does not need to correspond with the regional versions that are actually linked to the page.
- Abbreviations like Co, Inc, and Ltd are not included in developer or publisher names.
- When linking developer and publisher hubs to a page, they will automatically appear in the game info at the top of the page. However, this will not record them in the metadata fields. It is still preferred to manually enter them there, since the data in these fields is used for other purposes, such as in the management app. When the text is an exact match for the name of the hub, it will be overlaid without duplicating the text.
    - This also applies to genres.
    - Be careful when naming a developer, publisher, or genre hub for the first time. If it ever has to be renamed, the corresponding metadata fields on every game in the hub will need to be updated to match with it.

### Genres

- Multiple genres and subgenres may be entered whenever necessary.
- Certain genres should not actually be used on game pages - instead, the games should always be sorted into one of their subgenres. This applies to [Genre - Fighting](https://retroachievements.org/hub/8346), [Genre - Platforming](https://retroachievements.org/hub/9120), and [Genre - Shooter](https://retroachievements.org/hub/2656).
    - This is also preferred for other genres when possible - for example, if a game is in [Subgenre - Turn-based RPG](https://retroachievements.org/hub/5468), it shouldn't also be included in [Genre - Role-Playing Game](https://retroachievements.org/hub/898). But there are unusual cases such as sports RPGs and fishing RPGs that may not fit in a subgenre.
- Refer to the [Genre Definitions](/guidelines/content/genre-definitions) page for more information on genres.

### Release Dates

- The earliest release date for the game should always be used. It does not need to correspond with the regional version linked to the page - for example, many games will use the Japanese release date even when they typically have the North American version linked.
- With ports and conversions, be sure to use their specific release date, not the release date of the original game.
- Some sources for release dates:
	- https://web.archive.org/web/20140611225644/http://www.nintendo.com/consumer/downloads/nes_games.pdf - North American NES release dates.
	- https://www.famitsu.com/search?type=game-title&q=&max=100&order=desc&platform=alldevice - Japanese Famicom release dates. Requires searching for the Japanese title.
	- https://nescartdb.com/search/browse/a - NES release dates, including Europe.
	- https://archive.org/details/ArcadeGameList1971-2005/page/n13/mode/1up - Japanese arcade release dates.
	- https://archive.gamehistory.org/ - The Video Game History Foundation's Digital Archive.

## Game Images

Game images are the displayed images on the game page, including the icon (aka mastery badge), box art, title screenshot, and gameplay screenshot.

### Icons

- Image dimensions must be 96x96 to upload.
- Refer to the [Badge and Icon Guidelines](/guidelines/content/badge-and-icon-guidelines) for more rules on icons.

### Box Art

- File size must be under 1 MB to upload.
- Check these resources for high-quality box art before resorting to Google Images:
	- https://github.com/libretro-thumbnails/ 
	- https://gamesdb.launchbox-app.com/
	- https://db.hfsplay.fr/
	- https://www.mobygames.com/
- Arcade games may use flyers, since they don't have box art. One source for this is http://adb.arcadeitalia.net/default.php
- Official box art should be used whenever possible. Fan-created box art may be used for hacks and homebrews.
- North American box art is always preferred where it exists, followed by European box art. This is regardless of which regional versions are linked to the page.

### Screenshots

- File size must be under 1 MB to upload.
- English screenshots are encouraged unless they’re from translation patches in which case the original language is preferred.
- No watermarks are to be present on any images.
- Some games lack a typical title screen. In these cases, a screenshot of the title during an opening movie or loading screen may be used. If that doesn't exist, an initial menu screen or gameplay screen may be used.

#### Screenshot Dimensions

- Screenshots must have the same standard dimensions whenever possible.
- Listed below are the standard image dimensions for each system.
	- 96x64 - Pokemon Mini (Images are resized by 4x)
	- 128x64 - Arduboy (Images are resized by 2x)
	- 160x102 - Atari Lynx
	- 160x144 - Game Boy, Game Boy Color, Game Gear, Mega Duck
	- 160x152 - Neo Geo Pocket
	- 160x160 - WASM-4, Watara Supervision
	- 160x240 - Nintendo DS, Nintendo DSi
	- 193x240 - Vectrex
	- 200x234 - VIC-20
	- 224x144 - WonderSwan
	- 240x160 - Game Boy Advance
	- 256x192 - ColecoVision, Master System, SG-1000
	- 256x224 - NES/Famicom, SNES/Super Famicom
	- 256x232 - PC Engine/TurboGrafx-16, PC-FX
	- 272x240 - MSX
	- 306x192 - Fairchild Channel F
	- 320x180 - PlayStation Portable
	- 320x186 - Virtual Boy
	- 320x200 - Atari ST, Intellivision, PC-8000/8800
	- 320x219 - Apple II
	- 320x223 - Atari 7800
	- 320x224 - 32X, Genesis/Mega Drive, Neo Geo CD, Sega CD
	- 320x228 - Atari 5200
	- 320x235 - Magnavox Odyssey 2
	- 320x240 - 3DO Interactive Multiplayer, Dreamcast, GameCube, Nintendo 64, PlayStation, PlayStation 2, Xbox
	- 326x240 - Atari Jaguar CD (These get scaled down and are blurry as a result)
	- Game Dependent - Arcade, Atari 2600, Atari Jaguar, DOS, Nokia N-Gage, PC Engine CD, Sharp X68000, Uzebox

## Hubs and Related Games

Hubs are used to categorize game pages in a variety of ways. Related games can also be added to help navigate the site.

### Creating Hubs

- Developers can reuse a hub from [Meta - Available Hubs](https://retroachievements.org/hub/3029) if any are available. Simply rename the hub and unlink it from the Meta hub.
- Members of the Site Cleanup Team can create new hubs in the management app.
- As a general rule of thumb, hubs should only be made if they include at least 3 games.
- Take care not to create frivolous hubs - hub lists on game pages can already be too long as it is.

### Common Hubs

- All game pages should have their developer, publisher, and genre hubs linked, if they exist.
- [Language](https://retroachievements.org/hub/7885) hubs should be linked whenever applicable.
- [Series](https://retroachievements.org/hub/3) hubs are commonly used whenever a game is part of a broader series.
	- Bootleg/pirate games and fan games should not be added to the Series hub they're based on.
- Hacks should be added to their respective [Hacks](https://retroachievements.org/hub/5987) hub, should one exist. This hub will automatically be displayed in the publisher field at the top of a game page.
	- If a game doesn't have a Hacks hub, it can be added to a Series Hacks hub if one exists. Hacks hubs are intended to apply to one specific game, while Series Hacks hubs can collect different games in the same series. Note that Series Hacks hubs do not appear in the publisher field.
	- If a game doesn't have a Hacks hub or Series Hacks hub, it should be added to [Uncategorized Hacks](https://retroachievements.org/hub/8018).
- Homebrews, demos, prototypes, and unlicensed games should always be added to [Central - Homebrew](https://retroachievements.org/hub/2469), [Central - Demo](https://retroachievements.org/hub/5901), [Central - Prototypes](https://retroachievements.org/hub/7824), or [Central - Unlicensed](https://retroachievements.org/hub/5751).
- Subsets should always be added to a [Subsets](https://retroachievements.org/hub/18903) hub. Note that there are specialized hubs for subset types such as Bonus and Multi.
- Many other hubs exist - you can browse them [here](https://retroachievements.org/hubs).

### Special Hubs

- [Meta|QA](https://retroachievements.org/hub/7582) hubs may only be managed by [QATeam](https://retroachievements.org/user/QATeam). Please send them a message if you wish to request an update to these hubs.
	- [Misc. - LGBTQ+ Representation](https://retroachievements.org/hub/9970) is also specially managed by QATeam. Please message them for any requests.
- Meta|Art hubs are managed by [RAArtTeam](https://retroachievements.org/user/RAArtTeam).
- [Meta|DevComp](https://retroachievements.org/hub/13591) hubs are managed by [DevCompliance](https://retroachievements.org/user/DevCompliance).

### Related Games

- The list of related games should be limited to around 5 or 6 entries.
- If a Series hub is linked, there shouldn't be too many games from the same series added as related games, as it would be somewhat redundant. A few can still be helpful if they're more directly related than others in the series, or if they're on the same system.
- Related games can also include games with similar gameplay or other interesting connections, particularly if they're on the same system or in the same console generation, or if they share staff.
- Different versions or ports of the same game are also commonly linked together, but don't link them all if there are too many ports of the game.

## Contributing Game Info

Users may help submit game info, images, and hubs in the **Site Cleanup Forum**, one of the channels in our [Discord server](https://discord.gg/dq2E4hE).

### Tagging Your Posts

- When creating a post, you have the choice of choosing between a few tags to label your request. Each tag will indicate the type of request being made.
	- Game Info - For editing game titles, developers, publishers, genres, and release dates. Refer to the [Game Info](/guidelines/content/game-info-and-hub-guidelines#game-info) section above.
	- Game Images - For editing icons, box art, and screenshots. Refer to the [Game Images](/guidelines/content/game-info-and-hub-guidelines#game-images) section.
	- Hub Updates - For editing hubs and related games. Refer to the [Hubs and Related Games](/guidelines/content/game-info-and-hub-guidelines#hubs-and-related-games) section.
	- Achievement Type - For submitting progression plans for games that lack it, allowing the   game to grant beaten awards. Refer to the [Achievement Type](/guidelines/content/game-info-and-hub-guidelines#achievement-type) section below.
	- Challenge League - For submissions related to the Challenge League event. Refer to the [Challenge League](/guidelines/content/game-info-and-hub-guidelines#challenge-league) section below.
- Meta tags:
	- Open - Indicates that the post is still ongoing and that the request hasn’t been fulfilled yet.
	- Complete - Indicates that the post has been approved and that the changes have been made to the site.
	- Denied - Indicates that the post has been declined, either due to false information, lack of quality or if the post is something unrelated.
	- Closed - Indicates that the post has been closed - you will be unable to comment on these posts.
	- Discussion - Indicates a thread with ongoing discussion that is not expected to be closed soon.

### Making a Post

- Provide a link to the game page.
- When submitting developer, publisher, and genre info, remember to link the hubs as well, if they exist.
- Also link any additional hub or related game requests instead of simply naming them.
- In addition to listing links to the hubs, you can provide a list of the hub IDs (the number seen in the URL of the page) separated by commas or spaces.
- Be very particular about what genre the game is - labelling a Tennis or Wrestling game as just ‘Sports’ isn’t good etiquette when hubs for those sports exist.
- Icons can only be submitted when a game doesn't already have one. If it does, you must use the [Icon Gauntlet](/guidelines/content/achievement-set-revisions#icon-gauntlet) instead.
	- Exceptions can be made if the icon is a simple quality upgrade. But any kind of change in color or composition requires an Icon Gauntlet vote.
- Remember that images should have the proper dimensions - 96x96 for icons, and whenever possible, the standard dimensions for a given system's screenshots, listed above.
- Remember also that images need to be smaller than 1 MB in size.

### Achievement Type

- If a game lacks progression typing, and the developers of the set are inactive (they no longer have the Developer or Jr. Developer role), you may submit a plan to mark the set in the Site Cleanup Forum. A list of such games can be found in the [Missing Progression Typing](https://retroachievements.org/hub/25585) hub.
- Remember to review the [Progression and Win Condition Guidelines](/guidelines/content/progression-and-win-condition-guidelines).
- If you believe a set is incorrectly marked, or if the set's developers are still active, please send a message to [QATeam](https://retroachievements.org/user/QATeam) instead - Site Cleanup cannot handle these reports.
- Requests for missable marking should also be sent to QATeam - Site Cleanup cannot handle these either.

### Challenge League

- The 2023 event Challenge League: The Top 100 included certain challenges for submitting game info and images in the Site Cleanup Forum.
- This event continues to be available as an [Evergreen Event](https://retroachievements.org/viewtopic.php?t=25332).
- The relevant challenges are from KingS1zzle (May) and Soulsderfuchs (August). Refer to the [original topic](https://retroachievements.org/viewtopic.php?t=19615) for more information.