---
title: Mastering AndNext and OrNext for Complex Achievement Conditions
description: Learn how to use the AndNext and OrNext flags to create complex conditional logic for ResetIf, PauseIf, and hit counts in achievement conditions, enabling intricate and flexible achievement requirements.
---

# `AndNext` and `OrNext`

`AndNext` and `OrNext` are used to associate more than one condition to a [ResetIf](/developer-docs/flags/resetif), [PauseIf](/developer-docs/flags/pauseif), or [Hit Count](/developer-docs/hit-counts).

`AndNext` and `OrNext` can be chosen in the Flag column of the Achievement Editor

When a condition has the `AndNext` flag, the condition must be true _in addition to the following condition_ for the following condition to be considered true.

When a condition has the `OrNext` flag, the condition _or the following condition_ must be true for the following condition to be considered true.

You can chain multiple `AndNext` and `OrNext` conditions to create complex requirements for a single `ResetIf`, `PauseIf`, or `Hit Count`.

When evaluating a combination of `AndNext` and `OrNext` conditions, each line is evaluated individually.

```
AndNext A = 1
OrNext  B = 1
AndNext C = 1
OrNext  D = 1
AndNext E = 1
ResetIf F = 1
```

Represents the following logical statement:

```
reset if (((((A = 1 and B = 1) or C = 1) and D = 1) or E = 1) and F = 1)
```

[Alt Groups](/developer-docs/alt-groups) are still preferred over `OrNext` for most use cases. They allow for multiple conditions to be present in each clause of the OR, and support more than two clauses.

`AndNext` is not required for simple logic. All conditions in a group are automatically AND'd together. `AndNext` just allows for two or more conditions to affect a single `PauseIf`, `ResetIf`, or `Hit Count`.
