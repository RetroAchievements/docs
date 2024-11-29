---
title: Code Notes
description: A guide for developers on creating clear and consistent code notes in RetroAchievements. Learn how to document memory addresses, specify address sizes, and ensure future developers can easily understand and use your notes.
---

# Code Notes

[[toc]]

Code notes are a vital part of achievement development. They provide valuable context to memory addresses used in achievement creation. Good code notes can make future achievement troubleshooting a breeze for developers, while bad code notes can make it a nightmare. This guide will help developers create clear, helpful, and consistent code notes that can be used by any developer looking at their sets in the future.

## How to Make Code Notes

Code notes are made by the developer in the Memory Inspector as they are RAM digging a game. This allows for easily seeing where sizes of notable addresses as well as areas in the RAM that hold important values. Code notes can be added, deleted and updated from the Memory Inspector. Code notes that are already created can be updated or deleted from the games' "Code Notes" page on the website. This is intended for quick fixes to notes and not intended as the main form of code note modification.

- Developers are free to add any code notes to any game without declaring intentions to work on the game. Just be careful to not delete previous notes added by someone else unless you are certain they are incorrect.
- Junior Developers shall limit their code notes to the game they have claimed. Juniors are unable to delete or overwrite notes made by other users.

## Recommendations

- **Be Clear and Informative**: Code notes should clearly document what the address represents such that it can easily be understood by other developers.
- **Specify the Address Size**: Code notes should specify the size of the address being noted. This helps to easily know the address size during achievement logic creation and also to correctly color the address values within the Memory Inspector.
- **Include Important Values**: Code notes should include all values that are used within the achievement logic. Undocumented values make debugging much more complicated, especially if you didn't create the note.
- **Document Extensively**: It's better to document any useful addresses that you find, even if you know you won't need them in the achievement logic. You never know what addresses may be needed later on if the set is revised.

::: tip WHO ARE CODE NOTES FOR
Write your code notes for someone else looking at them in the far future. Will they be able to understand what this address means and how it should be used? Is the value or values of the address able to be understood?
:::

## Specifying Memory Addresses Size

There are multiple ways to specify a memory address that will be recognized by the Memory Inspector highlighting. Any code note that does not specify a valid size will cause the Memory Inspector to highlight the byte the note is for. Any number of bit and byte lengths will be recognized by the Memory Inspector highlighting. Many developers will enclose the address size in square brackets (`[]`) to make it more noticeable in the full note.

- `[Lower4]`, `[Upper4]`
- `[8-bit]`, `[16-bit]`, `[24-bit BE]`, `[32-bit]`, `[Float]`
- `[1 byte]`, `[2 bytes]`, `[4 bytes]`, `[8-bytes]`
- `[128 bits]`, `[78 bytes]`, `[428 bits]`, `[1024 bytes]`

### Bit Fields and Bit Flags

Very often you will run into an address that uses each bit within the address to store data. Noting the individual bits won't affect any Memory Inspector highlighting, though each bit should be properly noted in the code note. Some people choose to mark the size for these as [Bitfield] or [Bitflags] instead of [8-Bit].

## Adding values and labels.

When you need to label specific values or bit meanings in a note, here are some things to keep in mind.

- Always prefix hexadecimal values with `0x` so that it is clear the value is in hex. This is especially important if none of your values use characters A-F.
- If values are in decimal, consider putting a note in the description to this effect: `(Values below are decimal)`
- Put each value on a separate line - This is usually the easiest way to visually distinguish each value. You should usually use this when there are more than two values to label.
- If there are only two values (Example: Yes/No), consider placing them inline with the description, if the description and labels are short.
- Put a separator between the value and its label. This can be an equals sign, a colon, or a dash, and you may put whitespace as needed. Tip: Using an equals sign without spaces lets you easily copy the value list into a [Rich Presence](/developer-docs/rich-presence) lookup.

## Examples

### Simple Types

Simple address types cover the very basic address that are needed for nearly every achievement set and are often the some of first addresses noted when RAM digging. Often easily described in a line or two. These may include health, lives, in game currency, level, X/Y positions, etc...

#### Good Examples

Good examples here include size, description, and different values or affects on the values.

```
[8-bit] Difficulty
0x01 - Easy
0x02 - Normal
0x03 - Hard
```

```
[16-bit] Player Health
Max health is 0x1200, each hit reduces it by 0x8
```

#### Bad Examples

```
Difficulty
```

```
health
```

### Map or Screen ID Types

Map and Screen ID type code notes are very often used to determine location within the game and commonly used in level completion or item collection achievements.

#### Good Example

Good examples here include the various values that the address can take throughout the game. All addresses used in the achievement logic are noted in detail.

```
[8-bit] Screen ID
Chapter I
0x36 - Initial Screen with woman's face
0x0b - Taxi ride opening scene
0x07 - Outside of apartment (Day 1)
0x04 - Apartment main hall (Day 1)
0x16 - Apartment main hall (Day 2)

Chapter II
0x37 - Driving intro cutscene
0x2b - Outside of Inn (Day 1)
0x2c - Inn main room (Day 1)
```

#### Bad Example

```
screen id
```

### Scores

There are numerous way a game can store the players scores with memory, as such there are numerous ways to write the score code note out.

#### Good Examples

Good examples here will specify the size, which digits of the score are being represented, how the on screen score is calculated from the value in memory, Binary Coded Decimal (BCD) notation if applicable, as well as any other important details.

```
[1 byte] 1P display score, digits 0000XX00 in BCD
```

```
[16bit][DEC] P2 Score XXXX0000
```

```
Score [24-Bit BE BCD] (Determines Rank)
0-9=Pauper
0-99=Peasant
100-999=Prosperous
1000+=Professional
```

#### Bad Example

```
Player 1 score
```

### Bits

It's very common to run into games that need to store event or item flags. Often these will be stored as individual bits rather than taking up an entire byte per flag. It's assumed that a bit value of 0 is off/no/false, if this is not the case then that should be noted.

#### Good Examples

Good examples here will specify each bit as well as what they represent.

```
[Bitflags] Requests completed
Bit1 = No. 01 - Retrieve 1 Beetle Shell.
Bit2 = No. 02 - Retrieve the first old document.
Bit3 = No. 03 - I'd like to sip a Muscle Drink.
Bit4 = No. 04 - Retrieve 3 Old Lanterns.
Bit5 = No. 05 - Retrieve the second old document.
Bit6 = No. 06 - Create Jack Frost with Dia.
Bit7 = No. 07 - Retrieve 1 Lead Metal.
```

```
Bonuses Unlocked
bit0 - All Replay Items
bit1 - Unlimited Ammo (Mission 1)
bit2 - Silver Bullets (Mission 3)
bit3 - Bullet Shield (Mission 4)
bit4 - Rubber Grenades
bit5 - Men With Hats (Mission 5)
bit6 - Always Sniper
bit7 - Achilles Head (Mission 6)
```

```
[Treasure Flags 03]
Bit0=[Altair - Rebel Hideout] Potion
Bit1=[Fynn - Pub Basement] Scott's Ring
Bit2=[Castle Deist 1F - South Treasure Room] Stun Tome
Bit3=[Castle Deist 1F - South Treasure Room] Stop Tome
Bit4=[Castle Deist 1F - South Treasure Room] Curse Tome
Bit5=[Cave of Mysidia B4 - Treasure Room] Bell of Silence
Bit6=[Castle Deist 1F] Phoenix Down
Bit7=[Castle Deist 1F - NW Treasure Room] Gold Needle
```

#### Bad Example

```
The bits here represent the unlocked bonuses
```

### Pointers

Pointers are more commonly found in newer consoles and their notes typically include information for various addresses that the pointer can point to. The pointer notes will typically include numerous offset values to the important addresses used by the developer.

- If offsets with labels are written correctly, the memory inspector and assets editor will generate indirect code notes at the pointer _address + offset_ of the correct size.
- Use a plus sign `+` before the offset value.
  - For pointers with multiple layers, many people will use additional pluses to indicate that it is an offset of a pointer being pointed to by the original pointer. However, this will break all indirect code notes for that pointer. Consider using a vertical pipe before these layered offsets instead to allow for the top layer to generate indirect code notes.
- Use `0x` to indicate a hexadecimal offset value; the memory inspector will treat it as a decimal offset if this is not present.
- You can separate the offset value and its label with any number of spaces, and a separator character like an equals sign, a colon, or a vertical pipe.
- You should specify the size of the data at the offset like any normal code note. Indirect notes and highlighting will use this.
- If multiple lines are present after the offset value, they will all be part of the indirect note for that address.

#### Good Examples

Good examples here will include various address offsets, each of which including details and size of the address being pointed to.

```
Pointer to P1 Data [16-Bit]
+0x68 P1 Character ID [8-Bit]
+0xba P1 Health [8-Bit]
+0xc4 P1 Move ID [16-Bit]
```

```
[32-bit] Data Pointer
+0x638 | Pointer to pointer to smells pointer
++0x6d0 | Pointer to woofs
+++0xb8 | Total Woofs [32-bit]
+++0x380 | Sniff Level [32-bit]
0x00 = Sniff Apprentice
0x01 = Sniff Artisan
0x02 = Sniff Expert
0x03 = Sniff Master
0x04 = Grand Sniff Master
+++0x3c8 | Pointer to Racing Data [32-bit]
++++0x15a8 | Checkpoint Count [32-bit]
++++0x15ac | Frame Timer [32-bit]
++0x13d8 | Pointer to smells pointer
+++0x04 | Total Smells [32-bit]
```

```
*US* Pointer [32-bits]

--Player Kratos--
+0x97898=Health [Float]
+0x6f570=Combo [32-bits]
+0x977a0=Coordinates Y [Float]
+0x977a4=Coordinates Z [Float]
+0x977a8=Coordinates X [Float]

--Unlockables (Alternative)--
+0x6f594=Poseidon's Trident [Bit0]
+0x6f598=Poseidon's Rage [Bit0]
+0x6f59c=Medusa's Gaze [Bit0]
+0x6f5a0=Zeus' Fury [Bit0]
+0x6f5a4=Army of Hades [Bit0]
+0x6f5a8=Blade of Artemis [Bit0]
```

#### Bad Example

```
Pointer for player information. Includes player data and unlockables.
```
