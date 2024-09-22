---
title: Memory Inspector Overview
description: Learn how to use the Memory Inspector tool for RetroAchievements to find and analyze game memory addresses.
---

# Memory Inspector Overview

Here is an overview of the **Memory Inspector** and its features. This tool can be found on "RetroAchievements" menu on any emulator integrated with RA.

**See also**: [Memory Digging Tips](/developer-docs/tips-and-tricks#memory-digging-tips).

[[toc]]

## Memory Inspector Dialog

![memoryinspector-num](https://user-images.githubusercontent.com/32680403/82169863-05dfa480-9880-11ea-8bb0-7873ef2f9d53.png)

### 1. New Search

This is the first thing you must do when you're looking for something in memory.

The first drop down allows you to quick select All memory, System RAM, or Cartridge RAM. The field below the first drop down lets you type in a custom range (i.e. 0x10000-0x100FF).

The second drop down specifies the size of the data you're interested in finding.

The `Reset` button clears out any previously captured results (part 3 of the dialog) and captures the current memory state.

### 2. Filter

Filters the memory state in an attempt to locate a specific memory address.

The first drop down allows you to specify the comparison to use. The second drop down is what you're comparing against. Most of the time you're going to be filtering on `!= Last Value`, which eliminates any results where the memory has not changed.

The available comparisons are:

- `Constant` - comparison is made against the value entered in the field below the drop down.
- `Last Value` - comparison is made against the value captured by the last applied filter, or the initial value if no filter has been applied
- `Last Value Plus` - comparison is made against the Last Value plus the value entered in the field below the drop down. If the value were 3, the comparison would me made against a number which is three higher than the Last Value for each value captured by the last applied filter.
- `Last Value Minus` - the same as Last Value Plus, except the value entered in the field below the drop down is subtracted from each value captured by the last applied filter.
- `Initial Value` - comparison is made against the value captured when the New Search was begun.

The `Filter Once` button immediately applies the selected filter and updates the Results.

The `Continuous Filter` button applies the selected filter repeatedly until stopped. The fewer the results, the more frequently the filter is applied. The filter is only applied once every N ms, where N is the number of results / 1000. If there are less than 1000 results, it's applied every frame. If there are 50000 results, it's applied every 500ms (twice a second). If there are 1000000 results, it's only applied every 10 seconds.

### 3. Results

As filtering is applied, the list of potential matches will appear here.

On the left side is information about the results, including the number of matches, the filter applied, and how many filters have been applied. If you believe you have applied a filter incorrectly, or the filter results in no matches, you can use the `<<` button to return to the previous set of results. You can do this all the way back to the initial results. Similarly, you can use the `>>` button to return to results you have backed out of. Once you apply a new filter, the forward filters are discarded and the `>>` button is disabled.

Below the result information are two buttons. The first allows you to manually remove the selected items from the result set. You can use Ctrl and Shift to select multiple items. The second lets you create a bookmark for an item in the result set. It will appear in the Bookmarks dialog.

![memoryinspector-filter jpg](https://user-images.githubusercontent.com/32680403/82170020-7f779280-9880-11ea-84aa-ab2435f294e2.png)

The items in the result set show the address of the match, the current value, and a brief description of the memory at the address. If a code note exists for the address, it will be shown. Otherwise, a general classification of the address will be shown.

Additionally, items in the result set can be colored.

- Red - the item does not currently match the filter
- Grey - the item does currently match the filter, but at some point since the filter was applied it did not match.
- Green - the item is bookmarked
- Blue - the item has a code note

Clicking on a row will set the selected address to the associated item.

### 4. Code Notes

Provides detailed information about the selected address, and allows the user to annotate addresses found by the search process. Try to keep your descriptions simple and clear, so they can be easily understood. Clear notes are important for debugging if a problem with an achievement occurs.

The text field shows the currently selected address from the memory view (part 5 of the dialog). You can manually type in any address, or use the up and down arrows to jump to the next or previous address that have a code note.

Just to the right of the text field is a button that opens the Code Notes dialog, which allows you to browse and search through the code notes.

Below the text field is a button that will create a bookmark from the selected address.

The large text area is where you can modify the code note for the selected address. NOTE: the changes are not saved unless you press the Save Note button. If you change the selected address without saving, the changes will be lost.

`Save Note` and `Delete` immediately attempt to update the server - either with the modified note text, or by clearing out the note text.

### 5. Memory View

Allows direct browsing of the memory. The memory updates once per frame as the emulator runs.

The currently selected address appears in red. Addresses with code notes show up blue, and addresses associated to bookmarks show up green.

You can click on any piece of data in the memory viewer to jump to the associated address. You can also use the keyboard to navigation around in memory (up/down/left/right/pgup/pgdn/home/end).

When the memory viewer is focused, a cursor will be visible. You can type any hexadecimal character to change the character at the cursor to another value. This immediately changes the value for the emulator, and may cause unexpected behavior, so use at your own risk. Additionally, modifying memory (through any of the tools) prevents achievements from being unlocked on the server as an anti-cheat mechanism.

### Memory Bookmarks

You can open the Memory Bookmarks dialog from the RetroAchievements menu. It will also automatically open when adding a bookmark from either of the buttons on the Memory Inspector dialog.

![memoryinspector-bookmark jpg](https://user-images.githubusercontent.com/32680403/82172473-7fc75c00-9887-11ea-82f0-f1d9c7814180.png)

With this, you can view multiple designated addresses at once instead of having to shuffle around in the Inspector. Bookmarked addresses will show in the Memory Inspector as green.

If you double-click on an address, you can move straight to that address in the Memory Inspector.

The bookmarks can be renamed by clicking their description. This does not update the code note for the associated address.

You can change the size or format of a bookmark by clicking on the field and selecting a new value from the dropdown. Clicking on the value field will allow you to enter a new value for the bookmark. It will automatically be written to the memory.

From here you can also Freeze any bookmarks. This is helpful for things like health or consumables. Keep in mind, freezing occurs **1 frame after gameplay.** This means that even when frozen, the value will change for at least one frame before returning to the frozen value. Frozen bookmarks will be displayed as yellow.

## Reading Data in the Memory Viewer

### Decimal, Binary, and Hexadecimal Notations

To work well with the Memory Viewer, it's important to understand at least the basics of binary and hexadecimal numeral notations. Here are good sources of information about this matter without going into extreme details:

- https://simple.wikipedia.org/wiki/Binary_number
- https://simple.wikipedia.org/wiki/Hexadecimal_numeral_system

The digits used in **binary system** are `0` and `1`. A _binary digit_ is also known as **bit**. Eight bits is also known as one **byte**.

The digits used in **hexadecimal system** are `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `A`, `B`, `C`, `D`, `E` and `F`. The _hexadecimal notation_ is also known as **hex**.

The main reasons for the existence of these 2 notations, besides the traditional decimal notation, are:

- Decimal notation is what humans understand.
- Binary notation is what computers "understand".
- Hexadecimal notation can be seen as a middle ground between binary and decimal. Because a single hexadecimal digit represents 4 bits, then a shorter and more understandable notation for humans to work in a way that the computer "understands".

The table below shows the different notations for equivalent values.

| Decimal | Hexadecimal | Binary |
| ------- | ----------- | ------ |
| `0`     | `0x0`       | `0000` |
| `1`     | `0x1`       | `0001` |
| `2`     | `0x2`       | `0010` |
| `3`     | `0x3`       | `0011` |
| `4`     | `0x4`       | `0100` |
| `5`     | `0x5`       | `0101` |
| `6`     | `0x6`       | `0110` |
| `7`     | `0x7`       | `0111` |
| `8`     | `0x8`       | `1000` |
| `9`     | `0x9`       | `1001` |
| `10`    | `0xA`       | `1010` |
| `11`    | `0xB`       | `1011` |
| `12`    | `0xC`       | `1100` |
| `13`    | `0xD`       | `1101` |
| `14`    | `0xE`       | `1110` |
| `15`    | `0xF`       | `1111` |

More facts about the different number notations:

- To indicate a value is written in hexadecimal, the prefix `0x` is used: `0x10 = 16`, `10 = 10`.
- Two hex digits represent 8 bits and can range from `0` to `255`.
- Four hex digits represent 16 bits and can range `0` to `65535`.
- Eight hex digits represent 32 bits and can range from `0`to `4294967295`.

### Memory Viewer Modes

The bottom part of the Memory Inspector is what we call the Memory Viewer:

![memviewer](https://user-images.githubusercontent.com/8508804/52494138-59127400-2bb4-11e9-9a1f-6172bba6ee9f.png)

You can see data in Memory Viewer using 8, 16 or 32-bit modes.

#### 8-Bit Mode

By default, the Memory Viewer shows data in 8-bit mode. This displays each byte of memory as a separate two-character hexadecimal value. And each byte has its own address.

Sixteen bytes are shown per line. The address of a byte can be determined by adding the row index (displayed to the left of the viewer) to the column index (displayed above the viewer). Using the [image above](#memory-viewer-modes) as an example, the cursor is at `0x002a7` (`0x002a0` + `7`).

#### 16 and 32-bit Mode

Before we talk about 16-bit mode and 32-bit mode, it's important to know about endianness:

> #### Endianness
>
> Endianness describes the order in which a sequence of bytes are stored in computer systems memory. The two most common types are: **Big-Endian** (also known as BE) and **Little-Endian** (also known as LE).
>
> In the **Big-Endian** order the "big end" of the number (most significant value in the sequence) is stored first (placed at the lowest address). In the image below you see the number `0x12345678` stored at the address `0x100` in the big-endian order. Notice that the most significant byte `0x12` is at the address `0x100`:
>
> ![bigendian](https://user-images.githubusercontent.com/8508804/52626678-db43b680-2e9a-11e9-89e2-19d379359226.png)
>
> In the **Little-Endian** order the "little end" of the number (least significant value in the sequence) is stored first. In the image below you see the number `0x12345678` stored at the address `0x100` in the little-endian order. Notice that the least significant byte `0x78` is at the address `0x100`:
>
> ![littleendian](https://user-images.githubusercontent.com/8508804/52626680-db43b680-2e9a-11e9-83f2-432fd46dc608.png)

Values that need more than 8-bits (in other words: larger than 255) have to be stored in multiple bytes. However, the emulated systems we use store multi-byte values in little-endian order.

In the [image of the Memory Viewer above](#memory-viewer-modes) you can see that at address `0x0002c0` we have the hex value `ce` and in `0x0002c1` the value is `39`. When you switch the viewer to 16-bit mode, the `ce` and `39` values are grouped at `0x0002c0` and get displayed as `39ce`. This happens because it automatically groups every two bytes and displays them as 16-bit hex values.

**NOTE**: While 16-bit values are usually aligned to even addresses, that's not always the case. There's actually a non-displayed 16-bit value at `0x0002c1`. Since the value at `0x0002c1` is `39` and the value at `0x0002c2` is `29`, the 16-bit value at `0x0002c1` address is `0x2939`.

Similarly, in 32-bit mode, the four bytes from `0x0002c0` to `0x0002c3` are displayed as a single 32-bit value `0x252939ce` at address `0x0002c0`, but there are also 32-bit values at `0x0002c1`, `0x0002c2`, and `0x0002c3`.

### Working with Sizes Smaller Than 8-Bit

In addition to the 8-bit, 16-bit and 32-bit sizes described above, there are additional sizes that can be used when writing achievements (in the Achievement Editor).

#### Single Bits

In the memory viewer when an 8-bit address is selected you will see something like the image below (in the image: a byte with the value `6f` is selected; the bits are highlighted with an orange circle):

![bitfields](https://user-images.githubusercontent.com/8508804/52825269-39db8100-30a3-11e9-85b0-f2a2da109954.png)

It is very common in games to store important information as a single bit. As a bit can only have two possible values (`1` or `0`), sometimes it's used to mean "yes" or "no", "on" or "off", "have item" or "no item", etc. Some games, specially those with limited memory space, use bit switches a lot.

**NOTE:** Double-clicking an individual bit's value will toggle it between 0 and 1.

**Important:** You can refer to each one of those bits individually in the Achievement Editor.

Common meaning of bit switches in a game memory:

- have an item
- button pressed (very common)
- area explored
- in game trigger activated
- cheat activated
- in demo mode

In the memory viewer you can only input hex values, then it's important to know equivalence of values between hex and binary notations. You can see the table in the "[Decimal, Binary and Hexadecimal notations](#decimal-binary-and-hexadecimal-notations)" section, but the usual is to use a calculator (the default calculator on MS Windows on the programmer view can do the job).

#### Upper4 and Lower4

**Upper4** is the upper four bits of a byte (bit: 7, 6, 5, 4), displayed as a single hexadecimal character. **Lower4** is the lower four bits of a byte (bit: 3, 2, 1, 0), displayed as a single hexadecimal character.

Looking at the [memory size diagram](#memory-sizes-diagram) below, a byte at address `0x00a274` is selected (value `0x23`). The first character, `2` is the Upper4 value. The second character `3` is the Lower4 value.

Occasionally you will only be interested working with a single hexadecimal digit. Using the [memory size diagram](#memory-sizes-diagram) as an example, an achievement condition where `Upper4 0x00a274 = 0x2` would be true. A condition where `Lower4 0x00a274 = 0x3` would be true.

### Memory Sizes Diagram

![memsizes](/public/mem-inspector-size-diagram.png)
