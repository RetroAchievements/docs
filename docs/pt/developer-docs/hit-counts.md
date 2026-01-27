---
title: Contagem de Acertos
description: Aprenda a usar Contagem de Acertos no Editor de Conquistas para criar condições que precisam ser cumpridas múltiplas vezes antes de engatilhar uma conquista.
---

# Contagem de Acertos

No Editor de Conquistas, o campo no lado mais à direita é a Contagem de Acertos.

![Campo de Contagem de Acertos no Editor](/achievement-editor-hits-column.png)

O padrão é Zero, o que significa que a condição deve ser verdadeira para a conquista ser ativada.

Se você definir uma contagem de acertos alvo, como 5, significa que a condição deve ser verdadeira por pelo menos essa quantidade de frames, e uma vez que essa contagem de acertos alvo é atingida, ela não precisa ser atingida novamente em nenhum outro momento.

**OBSERVE**: se uma condição tem uma contagem de acertos diferente de zero e atinge o número necessário, essa condição não é mais testada. Ela permanece verdadeira, **A MENOS QUE** você tenha um [`ResetIf`](/developer-docs/flags/resetif), que discutiremos abaixo.

Condições com flags [`ResetIf`](/developer-docs/flags/resetif) e [`PauseIf`](/developer-docs/flags/pauseif) também podem ter acertos. Siga os links para detalhes.

Na seção [Exemplos Reais](/pt/developer-docs/real-examples) há dois bons exemplos:

- [Usando Contagem de Acertos como Temporizador](/developer-docs/real-examples/using-hit-counts-as-a-timer)
- [Usando Valores Delta e Contagem de Acertos para Detectar um Incremento](/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)

### Efeito de Reiniciar o Emulador

Quando o emulador é reiniciado, todas as contagens são imediatamente zeradas e a conquista é definida de volta para Aguardando. No entanto, uma reinicialização do emulador não limpa a memória, então é possível que as contagens se reacumulem antes que o jogo reinicialize a memória. Como tal, você não deve confiar que as contagens serão limpas pela reinicialização do emulador.

Da mesma forma, quando o emulador "liga" pela primeira vez, o estado da memória não é garantido que seja consistente, pois o hardware verdadeiro não inicializa sua memória. Em vez disso, o software define algum estado inicial quando reivindica porções de memória. Alguns jogos na verdade dependem da natureza aleatória da memória não inicializada para alimentar seus geradores de números aleatórios.

Para ambos os casos, você deve ter uma reinicialização explícita para alguma parte da lógica conhecível, como o jogador estar na tela de título.
