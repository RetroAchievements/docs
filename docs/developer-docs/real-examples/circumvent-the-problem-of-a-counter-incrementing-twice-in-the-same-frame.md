# Circumvent the Problem of a Counter Incrementing Twice in the Same Frame

In this example you'll see how to circumvent the problem of a counter incrementing twice in the same frame by combining [SubSource](/developer-docs/flags/subsource) and [AddHits](/developer-docs/flags/addhits-subhits).

In the Game Boy Advance library there's a Christmas platformer game called [Santa Claus Jr. Advance](http://retroachievements.org/Game/7152). There are some achievements for collecting all candy canes in each one of the bonus stages.

Such achievements were supposed to be quite simple, like this:

| ID  | Special? | Memory    | Cmp | Type  | Mem/Val   | Hits |
| --- | -------- | --------- | --- | ----- | --------- | ---- |
| 1   |          | 0xCANDIES | !=  | Delta | 0xCANDIES | (N)  |
| 2   | ResetIf  | 0xSTAGE   | !=  | Value | 0xBONUS   |

This translates into "check if the candy canes counter changed `N` times in the bonus stage".

**Note**: we're using `0xCANDIES != Delta 0xCANDIES` (using `!=`, and not `>`) cause when the player has 99 candies and collect one more, the counter goes to zero.

However, there is an aspect in this game (and many others) where if the player collect 2 candy canes simultaneously the counter is increased by 2 in the same frame. When it happens the hit counter is increased by one while the candy counter is increased by two. This, obviously, ruins the logic used above.

In order to circumvent this issue we have to use that technique of [using `SubSource` to count specific increments](/developer-docs/flags/subsource#using-subsource-to-count-specific-increments) combined with the [`AddHits` flag](/developer-docs/flags/addhits-subhits).

Let's take a look at the achievement logic and then we'll see the explanation:

**Addresses**

- `0x80dc`: Candy Canes counter.
- `0x809c`: Stage ID.

So now the structure of the achievement is going to be like this:

![](https://i.imgur.com/sDtPpX9.png)

**Conditions**

1. Together with condition 2, is a trick used to check if `0xCANDIES - Delta 0xCANDIES = 2`. In other words, the candy counter was incremented by two.

2. Used together with condition 1 (as explained above) and 3. As explained in [its respective page](/developer-docs/flags/addhits-subhits), when the `AddHits` condition is true, the hit counter in the next condition is incremented. Therefore, in our example here, when condition 2 is true, the hitcounter in condition 3 is incremented.

3. Count when the candy counter changes.

4. Reset the counter if not in the Bonus stage.

All these conditions could be translated as "while in the bonus stage, trigger the achievement if the candy counter changes 99 times, and if the candy counter is incremented by 2 in the same frame, count an extra change in the candy counter."

So, now it is 100% solved, right? Well, actually, almost. There is still a very minor exception. Remember it was said before that `!=` was being used instead of `>` because `when the player has 99 candies and collect one more, the counter goes to zero`?

This means that, if we get two canes in the same frame (which is already rare), there's a very small possibility that this change will be from `98 -> 00` or from `99 -> 01`. In these only two cases our code won't work, because `00 - 98` is not 2, it is `-98`. Same thing for `01 - 99`, it is not 2, it is also `-98`.

Despite being a very unlikely possibility, we should treat this case too. So we're gonna add two more requirements to the code, and it will end up looking like this:

![](https://i.imgur.com/6wePK8N.png)

It is the same as before, with the only changes being lines 3 and 4, which represents an extra `SubSource + `AddHits``to check if`0xCANDIES - Delta 0xCANDIES = -98`, only to take care of this very minor exception just mentioned.

And now it is solved!
