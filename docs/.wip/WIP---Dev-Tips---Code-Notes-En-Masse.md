When RAM digging, you may find yourself wishing for a way to do code notes en masse. Unfortunately, there's not a convenient or simple way to do this, but it is possible and can save a ton of time if you are patient enough to learn how.

First, we'll look at how local code notes work:<br>

- Open the Memory Inspector and the Code Notes windows.<br>
- Go to a random address and type something in as a note, but do not publish it.<br>
- Check that address in the Code Notes window. You'll notice that your note is red.<br>
- Go to the emulator's RACache directory and open the `GameID-User.txt` file of the game you have running.<br>
- Lines that start with `N0:` are local code notes. Once you publish a note, it will disappear from the `GameID-User.txt` file.

`N0:address of the note:"text of the code note"`

- `N0:` is how the server knows this is a code note.<br>
- `address of the note` the memory address, obviously. This will be in hex, not decimal.<br>
- `:` it's just a separator<br>
- `"text of the code note"` - the contents of the code note, and yes, the quotes are required. Line breaks can be used with `\r\n` and quotes within the note can be used with `\"`

Now, the next part requires some general know-how with spreadsheets. It will vary per game, so you'll need to figure out the formula for a lot of things yourself. We will use an example, though.

Let's say we want to have notes for all character stats. You will need the following:<br>

- Character 1's stat addresses.<br>
- An offset for Character 1 and Character 2's first stats.

We will use Trails in the Sky SC as an example.

Character 1 is Estelle, and her stat addresses are as followed:

| Address  |        "Character and Stat"        |
| :------: | :--------------------------------: |
| 0xc5bbcc | "[16-bit] Estelle - Current Level" |
| 0xc5bbd0 |    "[16-bit] Estelle - Max HP"     |
| 0xc5bbd4 |  "[16-bit] Estelle - Current HP"   |
| 0xc5bbd8 |    "[16-bit] Estelle - Max EP"     |
| 0xc5bbda |  "[16-bit] Estelle - Current EP"   |
| 0xc5bbdc |  "[16-bit] Estelle - Current CP"   |
| 0xc5bbe0 |  "[32-bit] Estelle - Current EXP"  |
| 0xc5bbe4 |   "[16-bit] Estelle - STR Stat"    |
| 0xc5bbe6 |   "[16-bit] Estelle - DEF Stat"    |
| 0xc5bbe8 |   "[16-bit] Estelle - ATS Stat"    |
| 0xc5bbea |   "[16-bit] Estelle - ADF Stat"    |
| 0xc5bbec |   "[16-bit] Estelle - DEX Stat"    |
| 0xc5bbee |   "[16-bit] Estelle - AGL Stat"    |
| 0xc5bbf0 |   "[16-bit] Estelle - MOV Stat"    |
| 0xc5bbf2 |   "[16-bit] Estelle - SPD Stat"    |
| 0xc5bbfa |   "[16-bit] Estelle - RNG Stat"    |

Character 2 is Joshua. His first stat (Current Level) is at the address 0xc5bc08.

0xc5bc08 minus 0xc5bbcc is 0x3c, or 60 in decimal. We can confirm this by checking his last stat (RNG), which is 0xc5bc36, also 0x3c/60 from Estelle's last stat.

We'll start by putting Estelle's stats into a spreadsheet and adding a column between the addresses and stats. It will look like this (column numbers in parenthesis):

| Address (A) | Blank Column (B) |      "Character and Stat" (C)      |
| :---------: | :--------------: | :--------------------------------: |
|  0xc5bbcc   |                  | "[16-bit] Estelle - Current Level" |
|  0xc5bbd0   |                  |    "[16-bit] Estelle - Max HP"     |
|  0xc5bbd4   |                  |  "[16-bit] Estelle - Current HP"   |
|  0xc5bbd8   |                  |    "[16-bit] Estelle - Max EP"     |
|  0xc5bbda   |                  |  "[16-bit] Estelle - Current EP"   |
|  0xc5bbdc   |                  |  "[16-bit] Estelle - Current CP"   |
|  0xc5bbe0   |                  |  "[32-bit] Estelle - Current EXP"  |
|  0xc5bbe4   |                  |   "[16-bit] Estelle - STR Stat"    |
|  0xc5bbe6   |                  |   "[16-bit] Estelle - DEF Stat"    |
|  0xc5bbe8   |                  |   "[16-bit] Estelle - ATS Stat"    |
|  0xc5bbea   |                  |   "[16-bit] Estelle - ADF Stat"    |
|  0xc5bbec   |                  |   "[16-bit] Estelle - DEX Stat"    |
|  0xc5bbee   |                  |   "[16-bit] Estelle - AGL Stat"    |
|  0xc5bbf0   |                  |   "[16-bit] Estelle - MOV Stat"    |
|  0xc5bbf2   |                  |   "[16-bit] Estelle - SPD Stat"    |
|  0xc5bbfa   |                  |   "[16-bit] Estelle - RNG Stat"    |

In cell B1, we'll use the following formula: `=hex2dec(A1)` to turn the address to decimal. Then we'll drag it down to populate the other cells. It should now look like this (also, added the row column since we'll need it):

| Row | Address (A) | Address in Decimal (B) |      "Character and Stat" (C)      |
| :-: | :---------: | :--------------------: | :--------------------------------: |
| 01  |  0xc5bbcc   |        12958668        | "[16-bit] Estelle - Current Level" |
| 02  |  0xc5bbd0   |        12958672        |    "[16-bit] Estelle - Max HP"     |
| 03  |  0xc5bbd4   |        12958676        |  "[16-bit] Estelle - Current HP"   |
| 04  |  0xc5bbd8   |        12958680        |    "[16-bit] Estelle - Max EP"     |
| 05  |  0xc5bbda   |        12958682        |  "[16-bit] Estelle - Current EP"   |
| 06  |  0xc5bbdc   |        12958684        |  "[16-bit] Estelle - Current CP"   |
| 07  |  0xc5bbe0   |        12958688        |  "[32-bit] Estelle - Current EXP"  |
| 08  |  0xc5bbe4   |        12958692        |   "[16-bit] Estelle - STR Stat"    |
| 09  |  0xc5bbe6   |        12958694        |   "[16-bit] Estelle - DEF Stat"    |
| 10  |  0xc5bbe8   |        12958696        |   "[16-bit] Estelle - ATS Stat"    |
| 11  |  0xc5bbea   |        12958698        |   "[16-bit] Estelle - ADF Stat"    |
| 12  |  0xc5bbec   |        12958700        |   "[16-bit] Estelle - DEX Stat"    |
| 13  |  0xc5bbee   |        12958702        |   "[16-bit] Estelle - AGL Stat"    |
| 14  |  0xc5bbf0   |        12958704        |   "[16-bit] Estelle - MOV Stat"    |
| 15  |  0xc5bbf2   |        12958706        |   "[16-bit] Estelle - SPD Stat"    |
| 16  |  0xc5bbfa   |        12958714        |   "[16-bit] Estelle - RNG Stat"    |

Now, we'll populate the cells with Joshua's stats using the offset. In cell B17, we will use the formula `=B1+60`, which will give us `12958728`. Drag cell B17 to B32. In cell A17, use the formula `=dec2hex` and drag that down to A32. It should now look like this:

| Row | Address (A) | Address in Decimal (B) |      "Character and Stat" (C)      |
| :-: | :---------: | :--------------------: | :--------------------------------: |
| 01  |  0xc5bbcc   |        12958668        | "[16-bit] Estelle - Current Level" |
| 02  |  0xc5bbd0   |        12958672        |    "[16-bit] Estelle - Max HP"     |
| 03  |  0xc5bbd4   |        12958676        |  "[16-bit] Estelle - Current HP"   |
| 04  |  0xc5bbd8   |        12958680        |    "[16-bit] Estelle - Max EP"     |
| 05  |  0xc5bbda   |        12958682        |  "[16-bit] Estelle - Current EP"   |
| 06  |  0xc5bbdc   |        12958684        |  "[16-bit] Estelle - Current CP"   |
| 07  |  0xc5bbe0   |        12958688        |  "[32-bit] Estelle - Current EXP"  |
| 08  |  0xc5bbe4   |        12958692        |   "[16-bit] Estelle - STR Stat"    |
| 09  |  0xc5bbe6   |        12958694        |   "[16-bit] Estelle - DEF Stat"    |
| 10  |  0xc5bbe8   |        12958696        |   "[16-bit] Estelle - ATS Stat"    |
| 11  |  0xc5bbea   |        12958698        |   "[16-bit] Estelle - ADF Stat"    |
| 12  |  0xc5bbec   |        12958700        |   "[16-bit] Estelle - DEX Stat"    |
| 13  |  0xc5bbee   |        12958702        |   "[16-bit] Estelle - AGL Stat"    |
| 14  |  0xc5bbf0   |        12958704        |   "[16-bit] Estelle - MOV Stat"    |
| 15  |  0xc5bbf2   |        12958706        |   "[16-bit] Estelle - SPD Stat"    |
| 16  |  0xc5bbfa   |        12958714        |   "[16-bit] Estelle - RNG Stat"    |
| 17  |  0xc5bc08   |        12958728        |                                    |
| 18  |  0xc5bc0c   |        12958732        |                                    |
| 19  |  0xc5bc10   |        12958736        |                                    |
| 20  |  0xc5bc14   |        12958740        |                                    |
| 21  |  0xc5bc16   |        12958742        |                                    |
| 22  |  0xc5bc18   |        12958744        |                                    |
| 23  |  0xc5bc1c   |        12958748        |                                    |
| 24  |  0xc5bc20   |        12958752        |                                    |
| 25  |  0xc5bc22   |        12958754        |                                    |
| 26  |  0xc5bc24   |        12958756        |                                    |
| 27  |  0xc5bc26   |        12958758        |                                    |
| 28  |  0xc5bc28   |        12958760        |                                    |
| 29  |  0xc5bc2a   |        12958762        |                                    |
| 30  |  0xc5bc2c   |        12958764        |                                    |
| 31  |  0xc5bc2e   |        12958766        |                                    |
| 32  |  0xc5bc36   |        12958774        |                                    |

Now, we'll copy cells C1:C16 and paste them to cells C17:C32. We'll highlight C17:C32 and use the Find & Replace tool (CTRL+H for Google Sheets) to change instances of `Estelle` to `Joshua`, but only for that cell range. It will look like this:

| Row | Address (A) | Address in Decimal (B) |      "Character and Stat" (C)      |
| :-: | :---------: | :--------------------: | :--------------------------------: |
| 01  |  0xc5bbcc   |        12958668        | "[16-bit] Estelle - Current Level" |
| 02  |  0xc5bbd0   |        12958672        |    "[16-bit] Estelle - Max HP"     |
| 03  |  0xc5bbd4   |        12958676        |  "[16-bit] Estelle - Current HP"   |
| 04  |  0xc5bbd8   |        12958680        |    "[16-bit] Estelle - Max EP"     |
| 05  |  0xc5bbda   |        12958682        |  "[16-bit] Estelle - Current EP"   |
| 06  |  0xc5bbdc   |        12958684        |  "[16-bit] Estelle - Current CP"   |
| 07  |  0xc5bbe0   |        12958688        |  "[32-bit] Estelle - Current EXP"  |
| 08  |  0xc5bbe4   |        12958692        |   "[16-bit] Estelle - STR Stat"    |
| 09  |  0xc5bbe6   |        12958694        |   "[16-bit] Estelle - DEF Stat"    |
| 10  |  0xc5bbe8   |        12958696        |   "[16-bit] Estelle - ATS Stat"    |
| 11  |  0xc5bbea   |        12958698        |   "[16-bit] Estelle - ADF Stat"    |
| 12  |  0xc5bbec   |        12958700        |   "[16-bit] Estelle - DEX Stat"    |
| 13  |  0xc5bbee   |        12958702        |   "[16-bit] Estelle - AGL Stat"    |
| 14  |  0xc5bbf0   |        12958704        |   "[16-bit] Estelle - MOV Stat"    |
| 15  |  0xc5bbf2   |        12958706        |   "[16-bit] Estelle - SPD Stat"    |
| 16  |  0xc5bbfa   |        12958714        |   "[16-bit] Estelle - RNG Stat"    |
| 17  |  0xc5bc08   |        12958728        | "[16-bit] Joshua - Current Level"  |
| 18  |  0xc5bc0c   |        12958732        |     "[16-bit] Joshua - Max HP"     |
| 19  |  0xc5bc10   |        12958736        |   "[16-bit] Joshua - Current HP"   |
| 20  |  0xc5bc14   |        12958740        |     "[16-bit] Joshua - Max EP"     |
| 21  |  0xc5bc16   |        12958742        |   "[16-bit] Joshua - Current EP"   |
| 22  |  0xc5bc18   |        12958744        |   "[16-bit] Joshua - Current CP"   |
| 23  |  0xc5bc1c   |        12958748        |  "[32-bit] Joshua - Current EXP"   |
| 24  |  0xc5bc20   |        12958752        |    "[16-bit] Joshua - STR Stat"    |
| 25  |  0xc5bc22   |        12958754        |    "[16-bit] Joshua - DEF Stat"    |
| 26  |  0xc5bc24   |        12958756        |    "[16-bit] Joshua - ATS Stat"    |
| 27  |  0xc5bc26   |        12958758        |    "[16-bit] Joshua - ADF Stat"    |
| 28  |  0xc5bc28   |        12958760        |    "[16-bit] Joshua - DEX Stat"    |
| 29  |  0xc5bc2a   |        12958762        |    "[16-bit] Joshua - AGL Stat"    |
| 30  |  0xc5bc2c   |        12958764        |    "[16-bit] Joshua - MOV Stat"    |
| 31  |  0xc5bc2e   |        12958766        |    "[16-bit] Joshua - SPD Stat"    |
| 32  |  0xc5bc36   |        12958774        |    "[16-bit] Joshua - RNG Stat"    |

We can repeat this for the remaining characters, but we'll leave it as is to keep it simple.

Remember the syntax: `N0:address of the note:"text of the code note"`. This is how we'll set up the spreadsheet:<br>

- Add a column to the left of column A and fill that column with `N0:`.<br>
- Copy cells B1:B32 (which are now the hex addresses).<br>
- Right-click on B1 and go to Paste Special -> Values only, or simply press CTRL+SHIFT+V. If you don't do this, the next step will mess everything up.<br>
- Clear Column C (which were the decimal addresses) and fill C1:C32 with `:`.<br>
- The sheet should now look like this:

| Row | N0: (A) | Address (B) | : (C) |      "Character and Stat" (D)      |
| :-: | :-----: | :---------: | :---: | :--------------------------------: |
| 01  |   N0:   |  0xc5bbcc   |   :   | "[16-bit] Estelle - Current Level" |
| 02  |   N0:   |  0xc5bbd0   |   :   |    "[16-bit] Estelle - Max HP"     |
| 03  |   N0:   |  0xc5bbd4   |   :   |  "[16-bit] Estelle - Current HP"   |
| 04  |   N0:   |  0xc5bbd8   |   :   |    "[16-bit] Estelle - Max EP"     |
| 05  |   N0:   |  0xc5bbda   |   :   |  "[16-bit] Estelle - Current EP"   |
| 06  |   N0:   |  0xc5bbdc   |   :   |  "[16-bit] Estelle - Current CP"   |
| 07  |   N0:   |  0xc5bbe0   |   :   |  "[32-bit] Estelle - Current EXP"  |
| 08  |   N0:   |  0xc5bbe4   |   :   |   "[16-bit] Estelle - STR Stat"    |
| 09  |   N0:   |  0xc5bbe6   |   :   |   "[16-bit] Estelle - DEF Stat"    |
| 10  |   N0:   |  0xc5bbe8   |   :   |   "[16-bit] Estelle - ATS Stat"    |
| 11  |   N0:   |  0xc5bbea   |   :   |   "[16-bit] Estelle - ADF Stat"    |
| 12  |   N0:   |  0xc5bbec   |   :   |   "[16-bit] Estelle - DEX Stat"    |
| 13  |   N0:   |  0xc5bbee   |   :   |   "[16-bit] Estelle - AGL Stat"    |
| 14  |   N0:   |  0xc5bbf0   |   :   |   "[16-bit] Estelle - MOV Stat"    |
| 15  |   N0:   |  0xc5bbf2   |   :   |   "[16-bit] Estelle - SPD Stat"    |
| 16  |   N0:   |  0xc5bbfa   |   :   |   "[16-bit] Estelle - RNG Stat"    |
| 17  |   N0:   |  0xc5bc08   |   :   | "[16-bit] Joshua - Current Level"  |
| 18  |   N0:   |  0xc5bc0c   |   :   |     "[16-bit] Joshua - Max HP"     |
| 19  |   N0:   |  0xc5bc10   |   :   |   "[16-bit] Joshua - Current HP"   |
| 20  |   N0:   |  0xc5bc14   |   :   |     "[16-bit] Joshua - Max EP"     |
| 21  |   N0:   |  0xc5bc16   |   :   |   "[16-bit] Joshua - Current EP"   |
| 22  |   N0:   |  0xc5bc18   |   :   |   "[16-bit] Joshua - Current CP"   |
| 23  |   N0:   |  0xc5bc1c   |   :   |  "[32-bit] Joshua - Current EXP"   |
| 24  |   N0:   |  0xc5bc20   |   :   |    "[16-bit] Joshua - STR Stat"    |
| 25  |   N0:   |  0xc5bc22   |   :   |    "[16-bit] Joshua - DEF Stat"    |
| 26  |   N0:   |  0xc5bc24   |   :   |    "[16-bit] Joshua - ATS Stat"    |
| 27  |   N0:   |  0xc5bc26   |   :   |    "[16-bit] Joshua - ADF Stat"    |
| 28  |   N0:   |  0xc5bc28   |   :   |    "[16-bit] Joshua - DEX Stat"    |
| 29  |   N0:   |  0xc5bc2a   |   :   |    "[16-bit] Joshua - AGL Stat"    |
| 30  |   N0:   |  0xc5bc2c   |   :   |    "[16-bit] Joshua - MOV Stat"    |
| 31  |   N0:   |  0xc5bc2e   |   :   |    "[16-bit] Joshua - SPD Stat"    |
| 32  |   N0:   |  0xc5bc36   |   :   |    "[16-bit] Joshua - RNG Stat"    |

- Copy cells A1:D32 and paste them into the `GameID-User.txt` file.<br>
- Use Find and Replace to change tabs to an empty space/nothing/blank.

The `GameID-User.txt` contents now look like this:

```
#.#.#.#
Trails in the Sky SC
N0:0xc5bbcc:"[16-bit] Estelle - Current Level"
N0:0xc5bbd0:"[16-bit] Estelle - Max HP"
N0:0xc5bbd4:"[16-bit] Estelle - Current HP"
N0:0xc5bbd8:"[16-bit] Estelle - Max EP"
N0:0xc5bbda:"[16-bit] Estelle - Current EP"
N0:0xc5bbdc:"[16-bit] Estelle - Current CP"
N0:0xc5bbe0:"[32-bit] Estelle - Current EXP"
N0:0xc5bbe4:"[16-bit] Estelle - STR Stat"
N0:0xc5bbe6:"[16-bit] Estelle - DEF Stat"
N0:0xc5bbe8:"[16-bit] Estelle - ATS Stat"
N0:0xc5bbea:"[16-bit] Estelle - ADF Stat"
N0:0xc5bbec:"[16-bit] Estelle - DEX Stat"
N0:0xc5bbee:"[16-bit] Estelle - AGL Stat"
N0:0xc5bbf0:"[16-bit] Estelle - MOV Stat"
N0:0xc5bbf2:"[16-bit] Estelle - SPD Stat"
N0:0xc5bbfa:"[16-bit] Estelle - RNG Stat"
N0:0xc5bc08:"[16-bit] Joshua - Current Level"
N0:0xc5bc0c:"[16-bit] Joshua - Max HP"
N0:0xc5bc10:"[16-bit] Joshua - Current HP"
N0:0xc5bc14:"[16-bit] Joshua - Max EP"
N0:0xc5bc16:"[16-bit] Joshua - Current EP"
N0:0xc5bc18:"[16-bit] Joshua - Current CP"
N0:0xc5bc1c:"[32-bit] Joshua - Current EXP"
N0:0xc5bc20:"[16-bit] Joshua - STR Stat"
N0:0xc5bc22:"[16-bit] Joshua - DEF Stat"
N0:0xc5bc24:"[16-bit] Joshua - ATS Stat"
N0:0xc5bc26:"[16-bit] Joshua - ADF Stat"
N0:0xc5bc28:"[16-bit] Joshua - DEX Stat"
N0:0xc5bc2a:"[16-bit] Joshua - AGL Stat"
N0:0xc5bc2c:"[16-bit] Joshua - MOV Stat"
N0:0xc5bc2e:"[16-bit] Joshua - SPD Stat"
N0:0xc5bc36:"[16-bit] Joshua - RNG Stat"
```

- Save it.<br>
- Next time the game is loaded and the Code Notes window is opened, all of those notes will appear in red.<br>
- If we click Publish at the bottom of the Code Notes window, all of the notes will publish at once.

That's all, folks. Learn some spreadsheet formulas and Regular Expressions and you will become a Code Note guru. Please use responsibly and don't actually save over my Trails in the Sky SC notes. Always spot-check addresses here and there to make sure your formulas stay consistent. I added over 500 code notes to the wrong game using an older method, which was much easier to make mistakes. <3 - tele.
