---
title: Utilizing AddHits and SubHits for Achievement Conditions
description: Master the use of AddHits and SubHits flags to manage hit counts in achievement conditions, understand their chaining effects, and optimize achievement logic for complex scenarios.
---

# `AddHits` and `SubHits`

**NOTE**: This technique is not needed for simple games, so it is not mandatory for jr-devs.

`AddHits` and `SubHits` can be chosen in the Flag column of the Achievement Editor.

The `AddHits`/`SubHits` conditions do not have to be true for the achievement to trigger. They modify the [hit count](/developer-docs/hit-counts) of another condition, which does have to be true for the achievement to trigger. The sequence of conditions is referred to as a `AddHits` chain (even if it contains `SubHits`).

When a condition with the `AddHits`/`SubHits` flag is true, the hit count for that condition is incremented. A hit target may be placed on the condition to keep it from tallying too many times.

The total hit count of the final condition in a chain is incremented by the hit counts of any `AddHits` conditions in the chain, and decremented by any `SubHits` conditions in the chain. If the total hit count meets or exceeds the target hit count of the final condition, it's considered true.

If the final condition of the chain does not have a hit target, the `AddHits`/`SubHits` conditions have no effect on the achievement. The final condition will be true if, and only if, it is true by itself.

**NOTE**: The hit target on the final condition of the chain serves as both the overall target hit count and the maximum hit count for that condition. As a result, it is impossible to use `SubHits` without `AddHits`, as any hits subtracted by the `SubHits` could not be recovered without a separate `AddHits`. Similarly, if you need to put a condition-specific limit on the final condition of the chain, you should pull it out as an `AddHits` condition with the appropriate limit and use a dummy final condition with the overall hit target (i.e. `0=1 (10)`). The dummy condition would never accumulate any hits of its own, and only serve to tally the other values in the chain.
