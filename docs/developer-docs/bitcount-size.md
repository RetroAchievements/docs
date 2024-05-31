# `BitCount` Size

`BitCount` is a shortcut for counting the number of bits set in a byte.

```
BitCount Mem 0x1234 == Value 6
```

is the same as

```
AddSource Bit0 Mem 0x1234
AddSource Bit1 Mem 0x1234
AddSource Bit2 Mem 0x1234
AddSource Bit3 Mem 0x1234
AddSource Bit4 Mem 0x1234
AddSource Bit5 Mem 0x1234
AddSource Bit6 Mem 0x1234
          Bit7 Mem 0x1234 == Value 6
```

and would be true for `0x3F` (00111111), `0xDB` (11011011), `0xEE` (11101110), etc.

Its most common use is counting collectibles for a [Measured](Measured-Flag) condition.

It can be combined with other flags like [Delta](Delta-Values).

```
BitCount Mem 0x1234 != BitCount Delta 0x1234
```

If you just want to make sure all the bits are set and don't need to worry about some subset of bits being set, you should check for concrete values (i.e. `Eight Bit 0x1234 = 0xFF` or `Lower4 0x1234 = 0x0F`).

**WARNING**: BitCount always counts all eight bits in a byte. If you only need 6 or 7 bits, you should use the AddSource chain in case the other bits are used for something else.
