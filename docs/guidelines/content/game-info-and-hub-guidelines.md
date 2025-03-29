---
title: Game Info and Hub Guidelines
description: Guidelines for contributing and editing game metadata, images, and hubs on RetroAchievements. Learn about the best practices for entering game titles, developers, publishers, genres, and release date information, as well as screenshots, box art, and categorization via the hub system.
---

# Game Info and Hub Guidelines

[[toc]]

## Game Info

Game info refers to the metadata on each page, including the game title, developer, publisher, genre, and release date.

### Game Titles

- Do not use special characters, emojis, or accented letters like the `é` in Pokemon.
- Subtitles are usually divided by a colon rather than a hyphen. If there are multiple subtitles, a colon is used first, followed by hyphens.
	- Atlantis - The Lost Empire -> Atlantis: The Lost Empire
	- Yu Yu Hakusho - Ghost Files - Tournament Tactics -> Yu Yu Hakusho: Ghost Files - Tournament Tactics
- The North American title should typically be prioritized, if it exists. European titles that differ but are well-known or helpful for searching can also be added, divided by a pipe (`|`). Japanese titles may occasionally be added for the same reason, but usually this should be avoided since the titles aren't well-known and RetroAchievements does not have a significant Japanese userbase.
	- An exception: [Dragon Quest | Dragon Warrior](https://retroachievements.org/game/1471) puts the Japanese title first because Dragon Quest is the well-known and later official title of the games internationally. This also sorts the games more conveniently in lists.
- Japanese games with fan translations may add the translated title, but the original Japanese title should still come first before any unofficial title. Example: [Hataraku Chocobo | Working Chocobo](https://retroachievements.org/game/17766).
- If a Japan-exclusive game later received an official translation, even if it was many years later, that English title should come first, followed by the original title. Examples: [EarthBound Beginnings | Mother](https://retroachievements.org/game/3814) and [Trials of Mana | Seiken Densetsu 3](https://retroachievements.org/game/1391).
- If a title is very long, it may be preferred to drop the alternate piped titles.
- Hacks, homebrews, demos, prototypes, test kits, and unlicensed games are signified by prefixing the game title with `~Hack~`, `~Homebrew~`, `~Demo~`, `~Prototype~`, `~Test Kit~`, or `~Unlicensed~`. This is a technical limitation that may change in the future.
- Some deprecated game pages that remain on the site are prefixed with `~Z~` so they sort to the bottom of lists.

### Developers and Publishers

- Ports and conversions should have the developer of the specific port entered. The developer of the original game may also be included.
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
- Listed below are the standard image dimensions for each console ID:
1. Genesis/Mega Drive - 320x224
2. Nintendo 64 - 320x240
3. SNES/Super Famicom - 256x224
4. Game Boy - 
5. Game Boy Advance -
6. Game Boy Color -
7. NES/Famicom -
8. PC Engine/TurboGrafx-16 -
9. Sega CD -
10. 32X - 
11. Master System -
12. PlayStation -
13. Atari Lynx -
14. Neo Geo Pocket -
15. Game Gear -
16. GameCube -
17. Atari Jaguar -
18. Nintendo DS -
19. Wii -
20. Wii U - ?
21. PlayStation 2 -
22. Xbox - ?
23. Magnavox Odyssey 2 - 320x235
24. Pokemon Mini -
25. Atari 2600 -
26. DOS - 320x200 is common for CGA, EGA, and VGA games. 640x400 is typical for text games. SVGA games may be 640x400, 640x480, or even higher.
27. Arcade - Varies entirely depending on the game.
28. Virtual Boy -
29. MSX -
30. Commodore 64 -
31. ZX81 - ?
32. Oric - ?
33. SG-1000 -
34. VIC-10 - ?
35. Amiga - ?
36. Atari ST - ?
37. Amstrad CPC -
38. Apple II -
39. Saturn -
40. Dreamcast -
41. PlayStation Portable -
42. Philips CD-i - ?
43. 3DO Interactive Multiplayer -
44. ColecoVision -
45. Intellivision -
46. Vectrex -
47. PC-8000/8800 -
48. PC-9800 -
49. PC-FX -
50. Atari 5200 -
51. Atari 7800 -
52. Sharp X68000 -
53. WonderSwan -
54. Cassette Vision -
55. Super Cassette Vision -
56. Neo Geo CD -
57. Fairchild Channel F -
58. FM Towns -
59. ZX Spectrum -
60. Game & Watch -
61. Nokia N-Gage -
62. Nintendo 3DS -
63. Watara Supervision -
64. Sharp X1 - ?
65. TIC-80 - ?
66. Thomson TO8 - ?
67. PC-6000 - ?
68. Sega Pico - ?
69. Mega Duck -
70. Zeebo - ?
71. Arduboy -
72. WASM-4 -
73. Arcadia 2001 -
74. Interton VC 4000 -
75. Elektor TV Games Computer -
76. PC Engine CD/TurboGrafx-CD -
77. Atari Jaguar CD -
78. Nintendo DSi - 160x240
79. TI-83 -
80. Uzebox -

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
- Hacks should be added to their respective [Hacks](https://retroachievements.org/hub/5987) hub, should one exist. This hub will automatically be displayed in the publisher field at the top of a game page.
	- If a game doesn't have a Hacks hub, it should be added to [Uncategorized Hacks](https://retroachievements.org/hub/8018).
	- Hacks hubs are intended to apply to one specific game. Series Hacks hubs can be used to categorize games within a broader series. These hubs do not appear in the publisher field.
- Homebrews, demos, prototypes, and unlicensed games should always be added to [Central - Homebrew](https://retroachievements.org/hub/2469), [Central - Demo](https://retroachievements.org/hub/5901), [Central - Prototypes](https://retroachievements.org/hub/7824), or [Central - Unlicensed](https://retroachievements.org/hub/5751).
- Subsets should always be added to a [Subsets](https://retroachievements.org/hub/18903) hub. Note that there are specialized hubs for subset types such as Bonus and Multi.
- Many other hubs exist - you can browse them [here](https://retroachievements.org/hubs).

### Special Hubs

- [Meta|QA](https://retroachievements.org/hub/7582) hubs may only be managed by [QATeam](https://retroachievements.org/user/QATeam). Please send them a message if you wish to request an update to these hubs.
	- [Misc. - LGBTQ+ Representation](https://retroachievements.org/hub/9970) is also specially managed by QATeam. Please message them for any requests.
- Meta|Art hubs are managed by [RAArtTeam](https://retroachievements.org/user/RAArtTeam).
- [Meta|DevComp](https://retroachievements.org/hub/13591) hubs are managed by [DevCompliance](https://retroachievements.org/user/DevCompliance).

### Related Games

- The list of related games should not be too long.
- If a Series hub is linked, there shouldn't be too many games from the same series added as related games, as it would be somewhat redundant. A few can still be helpful if they're more directly related than others in the series, or if they're on the same system.
- Related games can also include games with similar gameplay or other interesting connections, particularly if they're on the same system or in the same console generation, or if they share staff.
- Different versions or ports of the same game are also commonly linked together, but don't link them all if there are too many ports of the game.

## Contributing game info

Users may help submit game info, images, and hubs in the **Site Cleanup Forum**, one of the channels in our [Discord server](https://discord.gg/dq2E4hE).

### Tagging your posts

- When creating a post, you have the choice of choosing between a few tags to label your request. Each tag will indicate the type of request being made.
	- Game Info - For editing game titles, developers, publishers, genres, and release dates. Refer to the [Game Info](/guidelines/content/game-info-and-hub-guidelines#game-info) section above.
	- Game Images - For editing icons, box art, and screenshots. Refer to the [Game Images](/guidelines/content/game-info-and-hub-guidelines#game-images) section.
	- Hub Updates - For editing hubs and related games. Refer to the [Hubs and Related Games](/guidelines/content/game-info-and-hub-guidelines#hubs-and-related-games) section.
	- Achievement Type - For submitting progression plans for games that lack it, allowing the   game to grant beaten awards. Refer to the [Achievement Type](/guidelines/content/game-info-and-hub-guidelines#achievement-type) section below.
	- Challenge League - For submissions related to the Challenge League event.
- Meta tags:
	- Open - Indicates that the post is still ongoing and that the request hasn’t been fulfilled yet.
	- Complete - Indicates that the post has been approved and that the changes have been made to the site.
	- Denied - Indicates that the post has been declined, either due to false information, lack of quality or if the post is something unrelated.
	- Closed - Indicates that the post has been closed - you will be unable to comment on these posts.
	- Discussion - Indicates a thread with ongoing discussion that is not expected to be closed soon.

### Making a post

- Provide a link to the game page.
- When submitting developer, publisher, and genre info, remember to link the hubs as well, if they exist.
- Also link any additional hub or related game requests instead of simply naming them.
- In addition to listing links to the hubs, you can provide a comma-separated list of the hub IDs (the number seen in the URL of the page).
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