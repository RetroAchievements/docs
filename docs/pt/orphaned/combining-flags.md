---
title: Combinando Flags
---

# Combinando Flags

`ResetIf` e `PauseIf` podem ser aplicados a uma condição após qualquer número de condições `AddHits`, `AddSource` ou `SubSource`.

Voltando ao [exemplo `AddSource`](/developer-docs/flags/addsource) acima, se `ResetIf` fosse aplicado à condição 2, a conquista seria reiniciada porque `1 + 2 > 0`.
