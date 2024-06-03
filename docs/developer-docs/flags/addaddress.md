---
title: Understanding and Using `AddAddress`
description: Learn how to effectively use the `AddAddress` flag to modify memory addresses for conditions, understand pointer types, calculate offsets, and chain pointers for advanced achievement creation.
---

# `AddAddress`

`AddAddress` modifies the memory address(es) of the following condition by the calculated value. It works similar to [`AddSource`](/developer-docs/flags/addsource), but modifies the address, not the resulting value. Additionally, it affects addresses on both sides of the condition.

`AddAddress` only affects the next condition. If multiple `AddAddress` lines are chained together, each lookup in the chain will be altered; the values won't all be added to the final lookup.

![image](https://user-images.githubusercontent.com/32680403/68913137-9396d780-0717-11ea-871f-150903408d5f.png)

The 32-bit value at 0x0112F8 is a pointer to the data for the first character in the party. When the party order changes, the pointer will point at a different block of memory, but data within the block will have the same structure.

- The value is an address in the actual system representation and differs from the addresses provided by the memory inspector. However, you can rely on the fact that the memory inspector represents the same memory, so while the actual address may differ, the sequence of bytes does not.

To translate the real pointer to a memory inspector address, we compare the two values. For example:

- The 32-bit value at 0x0112F8 is 0x800110B8.
- The memory we're interested in is at 0x011114 in the memory inspector.
- Using a 24-bit read instead of a 32-bit read gives us 0x0110B8
- 0x011114 - 0x0110B8 = 0x00005C, so that becomes the "base address" in the second condition.

## Types of Pointers

`AddAddress` is how RAIntegration handles pointers. There are four major types of pointer support:

**Direct Pointer**: The pointer contains another address that is referenced without modification. These are most commonly used for string pointers. To use a direct pointer, the base address to which the pointer is added would be 0.

**Indirect Pointer**: The pointer contains another address that indicates the start of some block of data. The data of interest is a fixed number of bytes into the block of data. These are commonly used for attributes of a character/object.

For both Direct and Indirect Pointers, the `AddAddress` line should reference the pointer, and the address in the following line should be the offset into the block of data for the information relevant to the condition. While you would typically use 0 for a Direct Pointers, the following line would also contain any value necessary to convert between a real address and a memory inspector address.

The example above is an Indirect Pointer, where the data is 0x5C bytes into a block of data. The conversion from a real address to a memory inspector address is handled by using a 24-bit read instead of a 32-bit read.

**Array Index**: The pointer contains an offset to apply to a fixed pointer.

**Scaled Array Index**: The pointer contains an offset to apply to a fixed pointer after it has been scaled.

For Array Indices, the `AddAddress` line should reference the offset to apply, and the following line should contain the address of the first element of the array (index 0). For example:

```
AddAddress 16-bit Mem 0x1234
           8-bit  Mem 0x4567
```

Would read a 16-bit number from 0x1234 and read the single byte that is that many bytes after 0x4567.

To scale an array index, click on the space in the Cmp column for the array index address and select the `*` symbol. Then enter the size of each array item in the second mem/val column. For example:

```
AddAddress 16-bit Mem 0x1234 * Value 4
           8-bit  Mem 0x4567
```

Would read a 16-bit number from 0x1234, multiply it by 4, and read the single byte that is that many bytes after 0x4567.

## Chaining Pointers

`AddAddress` can be chained to perform multi-step lookups, but only one step at a time. As such, you can reference data pointed at by a pointer that's pointed at by another pointer, but you can't reference data in an array that's pointed at by another pointer unless either the array or the array index is at a fixed address.

#### Using Delta with Chained Pointers

To do a delta check on an `AddAddress` chain, you should only put the delta on the final condition. You want to use the current value for each step of the chain to derive the final result, and you only care about the changes in the final value. Using previous values for the pointers will have you reading invalid memory and will likely cause problems.

```
A) AddAddress Mem   0000
B) AddAddress Mem   0000
C)            Delta 0000
```

Assuming Mem: $0000=0, $0001=2, and $0002=4, this will evaluate to 0 for the first few frames, and when Mem 0 changes to 1, the following happens:

```
Frame N  : A = Mem[0] = 1 (delta[0] = 0), B = Mem[A] = Mem[1] = 2 (delta B = 0), C = Mem[B] = Mem[2] = 4 (delta C = 0)
Frame N+1: A = Mem[0] = 1 (delta[0] = 1), B = Mem[A] = Mem[1] = 2 (delta B = 2), C = Mem[B] = Mem[2] = 4 (delta C = 4)
```

You can see the entire delta chain updates in the same frame (one frame after the change occurs).

If you use Delta for A and B, something different happens:

```
A) AddAddress Delta 0000
B) AddAddress Delta 0000
C)            Delta 0000
```

```
Frame N  : Mem[0] = 1 (delta[0] = 0), B = Mem[deltaA] = Mem[0] = 1 (delta B = 0), C = Mem[deltaB] = Mem[0] = 1 (delta C = 0)
Frame N+1: Mem[0] = 1 (delta[0] = 1), B = Mem[deltaA] = Mem[1] = 2 (delta B = 1), C = Mem[deltaB] = Mem[1] = 2 (delta C = 1)
Frame N+2: Mem[0] = 1 (delta[0] = 1), B = Mem[deltaA] = Mem[1] = 2 (delta B = 2), C = Mem[deltaB] = Mem[2] = 4 (delta C = 2)
Frame N+3: Mem[0] = 1 (delta[0] = 1), B = Mem[deltaA] = Mem[1] = 2 (delta B = 2), C = Mem[deltaB] = Mem[2] = 4 (delta C = 4)
```

Not only does it take two extra frames for delta C to be correct, it has two intermediate values that are not correct. The value went from 0 to 4 in a single frame and never was 1 or 2.

## Calculating your offset

Once you think that you've found your data and something that points at (or near) your data, you need to calculate the offset to use to read that data.

- 32-bit data at `0x821448` (RetroAchievements address)
- Pointer at `0xA1CA14` (RetroAchievements address) (value is `0x8C821440`)

First, determine how much of the pointer you need. For a system with 16MB of RAM, you need 24-bits to address it all (2^24 = 16777216). For 32MB, you'd need 25-bits. For 8MB, you'd only need 23-bits.

For the data provided above, we have 16MB of memory, so we only need 24-bits of the pointer (`0x8C821440` & `0x00FFFFFF` = `0x821440`)

Then, subtract that value from the data address to calculate the offset: `0x821448` - `0x821440` = `0x000008`

Now, you can construct the logic. Place the pointer address and size/mask in the `AddAddress` condition and the offset/logic in the second line:

```
AddAddress Mem 24-bit 0x00A1CA14
           Mem 32-bit 0x00000008 < 1000
```

Executing this example with the provided data:

- Read 24-bit data at `0x00A1CA14`: `0x00821440`
- Add the offset: `0x00821440` + `0x00000008 ` = `0x00821448`
- Read 32-bit data at new address (`0x00821448`)

#### Second example

- 16-bit data at `0x1B385E0` (RetroAchievements address)
- Pointer at `0xE7B054` (RetroAchievements address) (value is `0x09B42F0C`)
- System has 32MB of RAM (25 bits needed) `0x09B42F0C` & `0x01FFFFFF` = `0x1B42F0C`
- Calculate offset: `0x1B385E0` - `0x1B42F0C` = `0xFFFFFFFFFFFF56D4` (truncate to 32-bits: `0xFFFF56D4`)
- Construct the logic:
  ```
  AddAddress Mem 32-bit 0x00E7B054 & 0x1FFFFFF
             Mem 16-bit 0xFFFF56D4 = 0x0E
  ```

In this case, the pointer is actually pointing backwards, so the offset is a really big number. That's how computers represent negative values. Due to the rules of [twos-compliment](https://en.wikipedia.org/wiki/Two's_complement) and overflow, you can add the really big number to perform subtraction. Executing this example with the provided data:

- Read 32-bit data at `0x00E7B054`: `0x09B42F0C`
- Mask off 25-bits: `0x09B42F0C` & `0x01FFFFFF` = `0x01B42F0C`
- Add the offset: `0x1B42F0C` + `0xFFFF56D4` = `0x101B385E0` (truncated to 32-bits: `0x01B385E0`)
- Read 16-bit data at new address (`0x01B385E0`)

## Video Tutorial

The experienced achievement creator [wilhitewarrior](https://retroachievements.org/User/wilhitewarrior) made a nice video showing how to work with pointers and AddAddress flag.

You can check it here: <https://www.youtube.com/watch?v=_gk0vYYlm-E>.
