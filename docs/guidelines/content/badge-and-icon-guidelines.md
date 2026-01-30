---
title: Badge and Icon Guidelines
description: Guidelines for creating and uploading achievement badges and game icons on RetroAchievements. Learn about size requirements, design best practices, and the approval process for new or revised images.
---

# Badge and Icon Guidelines

[[toc]]

## Overview

When someone mentions badges, they could be talking about one of two things:

- Achievement badges, which are user-created images associated with the individual achievements of a set.
  - _Sonic the Hedgehog's first Badge - #00199)_
    - ![Amateur Collector Badge](https://s3-eu-west-1.amazonaws.com/i.retroachievements.org/Badge/00199.png)
- Game icons, also known as mastery badges, which is a single image used to represent an achievement set.
  - _Sonic the Hedgehog's game icon_
    - ![Sonic the Hedgehog Icon](https://retroachievements.org/Images/016743.png)

## Badge Format and Sizes

- For best results, game icons and achievement badges should be in 32-bit non-interlaced PNG format.
  - JPG and GIF are also supported.
- Avoid using transparency in the background layer since it will not display properly on the site and emulators.
- Achievement badges must be 64x64.
- Game icons must be 96x96.
- Badges should be made in a way that the subject is clear even when scaled down to 48x48 or 32x32, as they often are on various pages on the site.

## Designing New Badges

Achievement badges should refer in some way to what the achievement is about - i.e. a picture of the boss, level or collectible that the achievement requires the player to get to.

## Designing New Game Icons

### Game Mastery Icons must represent the associated game by using 'Official' art only.

- Sprites from the game (or models)
- Box Art / Regional Box Art
- Concept Art
- CD / OST Art
- Manual Art
- Guidebook Art
- Advertisements
- Or any other 'Official' Source of artwork.

### Mastery Icons must not

- Use art from a different port
- Use fan art sourced from external sources
- Use AI-generated artwork created from scratch
- Contain anything vulgar, offensive or pornographic

### Mastery Icons may

- Add in custom borders or other adornments
- Stylize official art or combine different official art sources
- Use official art from a different regional release on the same console, unless that regional release has its own game page entry
- Use fan art created by the icon creator, but it must be approved by the art team prior to uploading or any icon gauntlet vote.

### Exceptions

- If two different ports use the same key art, that art may be used for either port.
- Hacks - Most hacks use the same sprites from its source game. Other art that represents the game in a meaningful way may be used as long as it is not on the excluded list above (such as external fan art or AI-generated art). Art by the developer of the hack may also be used.
- Movie-Licensed/Movie Tie-In Games may use artwork that was used to promote the movie.

![mario time](https://user-images.githubusercontent.com/32706333/52103977-93bd5080-25a5-11e9-9226-4f1af1bbfa81.png)

## Game Page Banners

Banners are wide images used to represent games on certain pages of the site. All existing guidelines for game icons apply to banners as well, with the following additional restrictions:

### Banners must not

- Include game logos
- Include text of any kind

### Credit Requirements

- If a banner is sourced from SteamGridDB, credit must be given to the "SteamGridDB" user.

## AI-Generated Art Policy

### Overview

AI-generated artwork created from scratch is **prohibited** for all game badges and achievement icons on RetroAchievements. This blanket policy promotes artwork quality and respect for the artistic community that supports the site.

### Why This Policy Exists

- We have a dedicated team of artists willing to create artwork for game badges and achievement icons.
- Artists on RA receive incentives for completing art requests, similar to DevQuests.
- Video games are an inherently visual medium, and most games contain rich assets that can be creatively used for badges and icons.

### Enforcement Process

If you believe art for game badges or achievement icons is AI-generated, you can send an on-site DM to RAArtTeam detailing your report.

If there are concerns that artwork may be AI-generated, RAArtTeam will reach out privately with whomever created the asset(s) to clarify the situation. This process is designed to be respectful and avoid public accusations.

RAArtTeam may ask questions such as:

- What was the source of this artwork?
- What editing tool did you use to create this image?

Reports of suspected AI-generated art in public channels will be addressed promptly to prevent harassment of developers or artists.

## Uploading Game Icons

**Developers:**

- Achievement Developers are allowed to change game icons freely for entries that do not have achievements. As a Developer if you'd like to post a backup of the previous image there, if there is one, or backup yours in the forum you're free to but not required. As you create a new set of achievements you are free to create or choose the image you'd like to use as the game icon.
  - To change a game icon first go to the game page and click on the Dev tools:  
    ![change game icon 1](https://camo.githubusercontent.com/cc05291f1f0da98ef8fd429fbdd6f201735c3edb/68747470733a2f2f692e696d6775722e636f6d2f7371784f6a794c2e706e67) - Then click the choose file button highlighted. Find the file on your PC, and then press the submit button highlighted:  
    ![change game icon 2](https://user-images.githubusercontent.com/32706333/52103542-62438580-25a3-11e9-8ede-ce5857abd7ce.png)

If a game has existing achievements, game icon changes need to go through [revision process](/guidelines/content/achievement-set-revisions).

**Non-Developers:**

- Yes, you absolutely can, but they are subject to [revisions](/guidelines/content/achievement-set-revisions). It will also be good to review the guidelines for [designing new game icons](#designing-new-game-icons---styling-guide).

### Uploading Badges

**For Developers:**

If you are creating new achievements you are free to upload badges for them.

Badges are uploaded from within the emulator developer tools while in the achievement editor:  
![image](https://user-images.githubusercontent.com/32706333/52097132-c73cb280-2586-11e9-95ec-ea5e4dc8f9cd.png)

Or you can select a prefabricated image or find other images you've uploaded in the drop down box:  
![image](https://user-images.githubusercontent.com/32706333/52097145-d1f74780-2586-11e9-8a22-06ceeeb82fe8.png)

## Badge Server Files

- Game icons are stored on the site in the following manner and place: `i.retroachievements.org/Images/000705.png`. They are stored in the same server folder as other game images such as the game box and game screenshots.
- Achievement badges are stored on site in the following manner and place: `i.retroachievements.org/Badge/00136.png`; the number coincidences with the badge ID found in the Achievement.

## Making New Badges for Existing Achievements

If you'd like to make improved badges for existing achievements, you can. Your images will go through the [revision process](/guidelines/content/achievement-set-revisions), which will put your creations to a community vote.

Post all the new images you'd like to replace current ones in the [Icon Gauntlet Forum Topic](http://retroachievements.org/viewtopic.php?t=8064&o=0). Also post all the badges that the new images are meant to replace. They will be placed for a community review by as a single vote. After a community vote is complete if you are a dev you can replace the Badges or if you are not, ask for help in the #help-me channel on Discord or in the [Icon Gauntlet Forum Topic](http://retroachievements.org/viewtopic.php?t=8064&o=0).

It's easiest to just reference the old and new Badges as `img` links:

- Example: `[img=https://retroachievements.org/Badge/01234.png] -> [img=https://retroachievements.org/badge/56789.png]`
- (Dev) Make sure to capture the old Badge ID from the Achievement Editor before uploading the new Badge
- The new Badge ID will appear in the Achievement Editor after uploading it.
- Both values can also be captured from the web site, but you have to copy the image links as the hover link is for the achievement.

Here is a perfect example of [how to effectively post new and old Badges](https://retroachievements.org/viewtopic.php?t=612&o=17).

## To Do

- Needs info on adding achievement badges via the website.
- Add "collager" info.
