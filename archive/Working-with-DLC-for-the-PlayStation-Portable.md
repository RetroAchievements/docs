Various games for the PlayStation Portable support DLC content. Depending on the game, this may come in different formats with different processes for installation.

## Standard

Traditional (generally paid) DLC was installed by the Playstation Store into game directories. Most of the time this will consist of one or more edat files and a param.pbp. Sometimes more files or directories are needed as well. If you already have decrypted DLC in this format, place it in saves/PSP/GAME/<game_id\>/ in the exact format it came in. The game ID -must- match the region of the game you're playing. For example, Dissidia 012 will use ULUS10566 for the US version and ULES01505 for the EU version. For users dumping data from real hardware, you'll need to use custom firmware and the npdecrypter plugin to decrypt your DLC to a format usable by PPSSPP. Further information can be found in the plugin's readme.

## Save File

A number of games distributed (generally free) DLC as extra save files for the games. These will have their own specifically-named directories which are placed alongside your game savedata in saves/PSP/SAVEDATA/. In a few rare cases, there may be multiple sets of DLC that cannot be installed simultaneously for games using this method. For users dumping data from real hardware, just copy it to the same location from the memory stick. Nice and simple. Despite the free nature of this DLC, we don't believe we have the legal rights to distribute it ourselves, so please don't ask.

## Updates

These can be a bit complicated. Currently the only way to apply updates tends to be by patching the update into the iso itself, after decrypting it on real hardware. This is messy and suboptimal, but there isn't a way around it right now. You'll need to open the iso in a tool like UMDGen and insert/replace the updated files in usrdir. Exact per-game instructions on doing so are outside the scope of this guide. Of note, this will be required to be able to use the DLC for Little Big Planet and Bleach: Heat the Soul 7, and may be necessary for other games as well. In the future, this step hopefully can be skipped.

Further information: https://github.com/hrydgard/ppsspp/issues/12344

## Killzone Liberation

This game's final chapter is only available as DLC. This specific game had a very strange DLC configuration, requiring downloading a free "game" through the PSP's browser, running it to unpack the DLC file, then leaving the second "game" present while playing the real one. Unfortunately, it uses a wide variety of kernel calls unique to this game that aren't emulated yet. Even with the DLC in its post-extraction state, it just causes the game to freeze when present. There's no way to emulate the game's final chapter at this time.

Further information: https://github.com/hrydgard/ppsspp/issues/12343

#### Note

While links to github issues are provided here, please refrain from commenting on them unless you have constructive information to provide about the issues at hand. A simple supportive thumbs up to indicate interest in an issue is sufficient.
