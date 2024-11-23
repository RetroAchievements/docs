---
title: Usando Valores Delta para Desenvolvimento de Conquistas Development
description: Aprenda a usar valores Delta no desenvolvimento de conquistas para detectar mudanças entre frames, como aumento de nível e detecção de dano.
---

# Valores `Delta`

Um valor `Delta` é o valor do frame anterior. **Nota**: quando você usa `Delta`, é implícito que você está se referindo a um endereço e não a um valor.

Exemplos de como pode ser usado:

- Detectar se o nível aumentou: `mem level > delta level`. Significa "o nível atual é maior que o nível do frame anterior".
- Detectar dano: `mem health < delta health`. Significa "a vida atual é menor que a vida do frame anterior". Ou você pode simplesmente fazer do valor do frame anterior um requisito. `delta health = 1` significa "o valor de vida do frame anterior deve ser 1 quando a conquista aparecer."

Na seção [Exemplos Reais](/pt/developer-docs/real-examples) existem alguns bons exemplos:

- [Usando Contadores de Hits como Temporizador](/pt/developer-docs/real-examples/using-hit-counts-as-a-timer)
- [Usando Valores Delta e Contadores de Hits para Detectar um Incremento](/pt/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)
