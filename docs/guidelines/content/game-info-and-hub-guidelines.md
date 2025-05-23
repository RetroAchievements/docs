---
title: Game Info and Hub Guidelines
description: Guidelines for contributing and editing game metadata, images, and hubs on RetroAchievements. Learn about the best practices for entering game titles, developers, publishers, genres, and release date information, as well as screenshots, box art, and categorization via the hub system.
---

# Game Info and Hub Guidelines

[[toc]]

## Game Info

Game info refers to the metadata on a game page, including the game title, release date, developer, publisher, and genre.

### Game Titles and Release Dates

- Titles may use special/accented characters like the `é` in Pokémon. However, emojis should not be used.
- Subtitles are usually divided by a colon rather than a hyphen. If there are multiple subtitles, a colon is used first, followed by hyphens.
	- Atlantis - The Lost Empire -> Atlantis: The Lost Empire
	- Yu Yu Hakusho - Ghost Files - Tournament Tactics -> Yu Yu Hakusho: Ghost Files - Tournament Tactics
- If there's a conflict between two games with the same title on the same platform, the publisher or developer (whichever is more helpful for identifying the game) can be added in parentheses. Example: [Renegade (Ocean Software)](https://retroachievements.org/game/26867) and [Renegade (Kuma Computers)](https://retroachievements.org/game/26732).
- When a regional variation is approved to have a separate page, the region may be added to distinguish it. Example: [Ecco the Dolphin](https://retroachievements.org/game/8) and [Ecco the Dolphin (Japan)](https://retroachievements.org/game/4374).
- For MSX games that have a different MSX2 version, the latter can have (MSX2) added to the title. Example: [Dragon Quest](https://retroachievements.org/game/16399) and [Dragon Quest (MSX2)](https://retroachievements.org/game/16400).
- Games for the Famicom Disk System are currently included under NES/Famicom, but it's a convention to add (FDS) to the title. Example: [All Night Nippon Super Mario Bros. (FDS)](https://retroachievements.org/game/12852).
- Romanization of Japanese titles can be inconsistent. When in doubt, use the most common romanization used by Wikipedia and other sources. Examples: [Yu Yu Hakusho](https://retroachievements.org/hub/7785) instead of "Yuu Yuu Hakusho", [Cho Aniki](https://retroachievements.org/hub/18695) instead of "Chou Aniki", and [Bobobo-bo Bo-bobo](https://retroachievements.org/hub/20736) instead of "Boboboubo Boubobo".
	- Games in the same series should use the same romanization of the main title.

#### Tags

- Hacks, homebrews, demos, prototypes, test kits, and unlicensed games are signified by prefixing the game title with `~Hack~`, `~Homebrew~`, `~Demo~`, `~Prototype~`, `~Test Kit~`, or `~Unlicensed~`. This is a technical limitation that may change in the future.
- In cases where `~Demo~` or `~Prototype~` are used alongside `~Hack~` or `~Homebrew~`, they are to be listed after the latter.
	- Example: `~Homebrew~ ~Demo~ Bob's Game` instead of `~Demo~ ~Homebrew~ Bob's Game`. The reason for this is that no matter what stage the game is in, it will always be a homebrew or a hack; therefore, those tags should take priority.
- In cases where a game is unlicensed and is actually just a hack of another game, then `~Hack~` would be used instead of `~Unlicensed~`.
    - Example: Final Fantasy VII on NES, which is a bootleg/pirate release, but it's actually    just a hack of Final Fantasy III that was put on a cartridge. So the RA entry would be `~Hack~ Final Fantasy VII`.
- Some deprecated game pages that remain on the site are prefixed with `~Z~` so they sort to the bottom of lists.
- Subsets are signified by adding `[Subset - Name of Subset]` after the title.

#### Regional Titles

- Multiple titles may be added for each region.
- The canonical title should be the most recognizable title. When in doubt, the general priority is North American English title > European English title > Non-English title (often Japanese, but depends on the origin of the game). There may be cases where the European title is more helpful than the North American title, or there may be other exceptions.
	- An example of an exception is [Dragon Quest](https://retroachievements.org/game/1471), which uses the well-known and later official title of the games internationally, rather than the original English title "Dragon Warrior". As a bonus, this also sorts the games more conveniently in lists.
- For Japanese titles, the priority should be the romanized title (e.g. "Zelda no Densetsu"), since it would be more readable to most people. This should be the title attached to the Japanese release date.
	- An additional Japanese title may also be added for the kanji/kana title (e.g. ゼルダの伝説). The Japanese release date does not need to be repeated.
- Bootleg titles should not be added, even if they have a hash linked to the page. For example, [Adventure Island II: Aliens in Paradise](https://retroachievements.org/game/4486) has a bootleg hash called "Super Mario World 7" linked, but it would be strange to display this next to the official titles.
- Games with fan translation patches may add the translated title. These titles should not include a region or release date. The original, official title should still be used as the canonical title.
- In some cases, additional titles may be added if they're helpful or commonly used by fans, even if they weren't officially used or don't come from a translation patch. This might include English translations of non-English titles, for example. Like translation patches, these should not include a region or release date, and should not be the canonical title.
- If a non-English game received an official English translation many years later, that English title may be used as the canonical title over the original title. Examples: [EarthBound Beginnings](https://retroachievements.org/game/3814) instead of Mother, and [Trials of Mana](https://retroachievements.org/game/1391) instead of Seiken Densetsu 3.

#### Release Dates

- Multiple release dates may be entered for each region the game was released in.
- For Europe, use the earliest release date. Every release date for every European country doesn't need to be added if they differ.
- Release dates do not need to be repeated. For example, if two Japanese titles are added (romanized and kanji/kana), only the romanized title should have the Japanese release date.
- Release dates should be left blank for fan translation titles.
- With ports and conversions, be sure to use their specific release date, not the release date of the original game.
- Some sources for release dates:
	- https://web.archive.org/web/20140611225644/http://www.nintendo.com/consumer/downloads/nes_games.pdf - North American NES release dates.
	- https://www.famitsu.com/search?type=game-title&q=&max=100&order=desc&platform=alldevice - Japanese Famicom release dates. Requires searching for the Japanese title.
	- https://nescartdb.com/search/browse/a - NES release dates, including Europe.
	- https://archive.gamehistory.org/ - The Video Game History Foundation's Digital Archive.

### Developers and Publishers

- Developer and publisher names should be manually entered into their metadata fields.
	- When linking developer and publisher hubs to a page, they will automatically appear as links in the game info at the top of the page. However, this will not directly record them in the metadata fields. It is still preferred to manually enter them there, since the data in these fields is used for other purposes, such as in the management app. When the text is an exact match for the name of the hub, the link will be overlaid without duplicating the text.
    - This also applies to genres.
    - Be careful when naming a developer, publisher, or genre hub for the first time. If it ever has to be renamed, the corresponding metadata fields on every game in the hub will need to be updated to match with it.
- Ports and conversions should have the developer of the specific port entered. The developer of the original game should not be included unless they were directly involved with creating the port.
- When a development team or subsidiary is owned by another company, that larger company does not need to be included. For example, [Sonic the Hedgehog](https://retroachievements.org/game/1) has Sonic Team entered and does not include Sega.
- For hack developers, it's conventional to enter "Hacker - Name of Hacker" as the developer. The [Central - Hacker](https://retroachievements.org/hub/913) hubs will automatically overlay a link into the developer field.
- Multiple publishers may be entered when they vary by region. This does not need to correspond with the regional versions that are actually linked to the page.
- Hacks use the publisher field to note the game the hack is based on - for example, "Hack - Super Mario World". [Hacks](https://retroachievements.org/hub/5987) hub links will automatically be overlaid here.
- If there is no clear publisher, like with many digitally-released homebrew games, the developer can be repeated in the publisher field.
- Abbreviations like Co, Inc, and Ltd are not included in developer or publisher names.

### Genres

- Multiple genres and subgenres may be entered whenever necessary.
- Certain genres should not actually be used on game pages - instead, the games should always be sorted into one of their subgenres. This applies to [Genre - Fighting](https://retroachievements.org/hub/8346), [Genre - Platforming](https://retroachievements.org/hub/9120), and [Genre - Shooter](https://retroachievements.org/hub/2656).
    - This is also preferred for other genres when possible - for example, if a game is in [Subgenre - Turn-based RPG](https://retroachievements.org/hub/5468), it shouldn't also be included in [Genre - Role-Playing Game](https://retroachievements.org/hub/898). But there are unusual cases such as sports RPGs and fishing RPGs that may not fit in a subgenre.
- Refer to the [Genre Definitions](/guidelines/content/genre-definitions) page for more information on genres.

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
- Game Boy screenshots should be in black-and-white.
- Emulator filters and shaders should be disabled for screenshots. For example, Game Boy Color and Game Boy Advance should not use color correction, and Apple II should not use a scanline filter.

#### Screenshot Dimensions

- Screenshots must have the same standard dimensions whenever possible.
- Listed below are the standard image dimensions for each system.
	- 96x64 - Pokemon Mini (Images are resized by 4x)
	- 128x64 - Arduboy (Images are resized by 2x)
	- 146x240 - Arcadia 2001, Elektor TV Games Computer, Interton VC 4000
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
	- 256x224 - NES/Famicom, Sega CD, SNES/Super Famicom
	- 256x232 - PC Engine/TurboGrafx-16, PC-FX
	- 272x240 - MSX
	- 306x192 - Fairchild Channel F
	- 320x180 - PlayStation Portable
	- 320x186 - Virtual Boy
	- 320x200 - Atari ST, Intellivision, PC-8000/8800
	- 320x219 - Apple II
	- 320x223 - Atari 7800
	- 320x224 - 32X, Genesis/Mega Drive, Neo Geo CD
	- 320x226 - Amstrad CPC
	- 320x228 - Atari 5200
	- 320x235 - Magnavox Odyssey 2
	- 320x240 - 3DO Interactive Multiplayer, Dreamcast, GameCube, Nintendo 64, PlayStation, PlayStation 2, Xbox
	- 326x240 - Atari Jaguar CD (These get scaled down and are blurry as a result)
	- Game Dependent - Arcade, Atari 2600, Atari Jaguar, DOS, Nokia N-Gage, PC Engine CD, Sharp X68000, Uzebox

## Hubs and Similar Games

Hubs are used to categorize game pages in a variety of ways. Links to similar games can also be added to help navigate the site.

### Creating Hubs

- Developers can reuse a hub from [Meta - Available Hubs](https://retroachievements.org/hub/3029) if any are available. Simply rename the hub and unlink it from the Meta hub.
- Certain members of the Site Cleanup Team can create new hubs in the management app.
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
	- Exceptions are made when an unlicensed game is in an unlicensed series hub, such as [Unlicensed - Mario](https://retroachievements.org/hub/29507). The Central hub shouldn't be redundantly added in these cases.
- Subsets should always be added to a [Subsets](https://retroachievements.org/hub/18903) hub. Note that there are specialized hubs for subset types such as Bonus and Multi.
	- Subsets should also inherit all hubs from their base game page.
- Many other hubs exist - you can browse them [here](https://retroachievements.org/hubs).

### Special Hubs

- [Meta|QA](https://retroachievements.org/hub/7582) hubs may only be managed by [QATeam](https://retroachievements.org/user/QATeam). Please send them a message if you wish to request an update to these hubs.
	- [Misc. - LGBTQ+ Representation](https://retroachievements.org/hub/9970) is also specially managed by QATeam. Please message them for any requests.
	- Hubs based on gaming-related influencers and entertainers are not allowed, but [Misc. - AVGN Reviewed](https://retroachievements.org/hub/9093) and [Misc. - GameCenter CX Challenge](https://retroachievements.org/hub/8742) have been permitted as exceptions by QATeam. This decision can only be revisited by QATeam vote.
- Meta|Art hubs are managed by [RAArtTeam](https://retroachievements.org/user/RAArtTeam).
- [Meta|DevComp](https://retroachievements.org/hub/13591) hubs are managed by [DevCompliance](https://retroachievements.org/user/DevCompliance).
- [Theme - Mature](https://retroachievements.org/hub/7869) is to be managed by [RAdmin](https://retroachievements.org/user/RAdmin). This hub will cause a warning about adult content to display when visiting a game page.

### Similar Games

- The list of similar games should be limited to around 5 or 6 entries.
- If a Series hub is linked, there shouldn't be too many games from the same series added as similar games, as it would be somewhat redundant. A few can still be helpful if they're more directly related than others in the series, or if they're on the same system.
- Similar games can also include games that share gameplay or other interesting connections, particularly if they're on the same system or in the same console generation, or if they share staff.
- Different versions or ports of the same game are also commonly linked together, but don't link them all if there are too many ports of the game.

## Contributing Game Info

Users may help submit game info, images, and hubs in the **Cleanup Requests forum**, one of the channels in our [Discord server](https://discord.gg/dq2E4hE).

### Tagging Your Posts

- When creating a post, you have the choice of choosing between a few tags to label your request. Each tag will indicate the type of request being made.
	- Game Info - For editing game titles, release dates, developers, publishers, and genres. Refer to the [Game Info](#game-info) section above.
	- Game Images - For editing icons, box art, and screenshots. Refer to the [Game Images](#game-images) section.
	- Hub Updates - For editing hubs and similar games. Refer to the [Hubs and Similar Games](#hubs-and-similar-games) section.
	- Achievement Type - For submitting progression plans for games that lack it, allowing the game to grant beaten awards. Refer to the [Achievement Type](#achievement-type) section below.
	- Challenge League - For submissions related to the Challenge League event. Refer to the [Challenge League](#challenge-league) section below.
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
- Be very particular about what genre the game is - labelling a Tennis or Wrestling game as just "Sports" isn’t good etiquette when hubs for those sports exist.
- Icons can only be submitted when a game doesn't already have one. If it does, you must use the [Icon Gauntlet](/guidelines/content/achievement-set-revisions#icon-gauntlet) instead.
	- Exceptions can be made if the icon is a simple quality upgrade. But any kind of change in color or composition requires an Icon Gauntlet vote.
- Remember that images should have the proper dimensions - 96x96 for icons, and whenever possible, the standard dimensions for a given system's screenshots, listed above.
- Remember also that images need to be smaller than 1 MB in size.

### Achievement Type

- If a game lacks progression typing, and the developers of the set are inactive (they no longer have the Developer or Jr. Developer role), you may submit a plan to mark the set in the Cleanup Requests forum. A list of such games can be found in the [Missing Progression Typing](https://retroachievements.org/hub/25585) hub.
- Remember to review the [Progression and Win Condition Guidelines](/guidelines/content/progression-and-win-condition-guidelines).
- If you believe a set is incorrectly marked, or if the set's developers are still active, please send a message to [QATeam](https://retroachievements.org/user/QATeam) instead - Site Cleanup cannot handle these reports.
- Requests for missable marking should also be sent to QATeam - Site Cleanup cannot handle these either.

### Challenge League

- The 2023 event Challenge League: The Top 100 included certain challenges for submitting game info and images in the Cleanup Requests forum.
- This event continues to be available as an [Evergreen Event](https://retroachievements.org/viewtopic.php?t=25332).
- The relevant challenges are from KingS1zzle (May) and Soulsderfuchs (August). Refer to the [original topic](https://retroachievements.org/viewtopic.php?t=19615) for more information.