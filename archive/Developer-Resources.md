## Helpful Website Links

- https://datacrystal.romhacking.net/wiki/Main_Page - Defined RAM maps of many games.

- http://www.thealmightyguru.com/Games/Hacking/Wiki/index.php?title=Category:Games - Defined RAM maps of many NES games.

- https://gamehacking.org/ - Action Replay codes can be used to get defined memory address:

Y – Address, X – Value
1-2 digit value will always be 8 bit – use 2 in front – 22YYYYYY 000000XX
3-4 digit value will always be 16 bit – use 1 in front – 12YYYYYY 0000XXXX
5-8 digit value will always be 32 bit – use 0 in front – 02YYYYYY XXXXXXXX
This will work for Action replay codes.

For getting addresses out of GameGenie codes use this: (**outdated link, getting 404**)
http://www.d.umn.edu/~bold0070/projects/game_genie_codes/javascript_game_genie_encoders-decoders.html

- https://www.romhacking.net/ - biggest repository of hacked roms.

- https://tcrf.net/The_Cutting_Room_Floor - Great place to find Easter Eggs for your set plans.

- https://www.gamefaqs.com/ - Great place to find game guides, finding almost all you could want to know about game content, find cheat codes, for development utility and also for making proper protections against the codes.

- https://wiki.nesdev.com/w/index.php/CPU_memory_map - Shows sections of the NES memory so you'll know what area of the memory you're examining. For nes most useful addresses will be between 0x0000--0x07FF.

- https://datacrystal.romhacking.net/wiki/Hashes - Explains what hashes are. If you don't know what they are you should probably read this.

- https://emn178.github.io/online-tools/crc32_checksum.html - Drag and drop checksum checker utility. You can also get the checksum from the rom you have loaded from the retroachievements menu in the emulators.

- https://www.getpaint.net/ - Excellent freeware image editor. You can use it for making badges and icons.

- https://www.marcrobledo.com/RomPatcher.js/ - An online ROM patcher utility.

- https://gregstoll.dyndns.org/~gregstoll/floattohex/ - Floating point to decimal converter

- http://jsonviewer.stack.hu/ - Excellent for viewing raw achievements

Turns this:  
![before](https://i.imgur.com/aetGpCd.png)

Into this:  
![after](https://i.imgur.com/prwO5C6.png)

Or get a plugin for Notepad++:

- http://jsminnpp.sourceforge.net/ to do similar

Speaking of Notepad++

- https://notepad-plus-plus.org/download/ - One of the best text editors and it's freeware (Windows only).

## Achievement Syntax

This is a good reference sheet, it's especially useful for Rich Presence and Leaderboards, getting your deltas and bit labels right.
![achievement syntax](https://i.imgur.com/WKNo3MJ.png)
For full size, right click an save image.

A 32bit requires the prefix "X" as in 0xX63
