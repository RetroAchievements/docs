---
title: Usando `AddSource` e Deltas para Colecionáveis e Conquistas Similares
description: Aprenda a usar efetivamente a flag AddSource e Deltas para criar conquistas para colecionáveis, garantindo rastreamento preciso e prevenindo disparos prematuros nos jogos.
---

# Usando `AddSource` e Deltas para Colecionáveis e Conquistas Similares

Neste exemplo, veremos uma maneira simples de utilizar a flag `AddSource` na lógica de suas conquistas.

Vamos analisar uma conquista de [Suikoden (PlayStation)](https://retroachievements.org/game/11255) intitulada [Treasure Hunter - Dragon Knights' Domain](http://retroachievements.org/Achievement/80100):

## Endereços Utilizados

- `0x1b8244`: bit0-bit4 são tesouros em Soniere, bit5 é um tesouro no Checkpoint Norte, e bit6-bit7 são tesouros no Covil do Dragão.
- `0x1b8245`: bit0 é um tesouro no Covil do Dragão, bit1-bit5 são tesouros no Vale Seek, e bit6-7 são tesouros em Kalekka.
- `0x1b824b`: bit0-bit1 são tesouros na Vila da Runa Escondida, bit2 não é usado, bit3-4 são tesouros na Fortaleza dos Cavaleiros do Dragão, bit5-6 são tesouros em Teien, e bit7 é um tesouro na Casa de Luiken.

![addsource-example1](https://u.cubeupload.com/televandalist/docssuikotreasure.png)

Esta conquista específica requer apenas tesouros da Fortaleza dos Cavaleiros do Dragão, Covil do Dragão e Vale Seek; portanto, só precisamos dos bit6-7 de `0x1b8244`, bit0-bit5 de `0x1b8245`, e bit3-bit4 de `0x1b824b`.

## Detalhamento da Lógica

- Existem dois grupos de dez condições com as principais diferenças sendo o tipo Delta e o total. Isso é para garantir que o jogador passe de nove desses tesouros obtidos para ter todos os dez tesouros obtidos. _Nota: Lembre-se de usar hexadecimal para totais `AddSource`!_
- Como estamos usando bitflags aqui, os totais para condições individuais sempre serão apenas 0x00 ou 0x01. Obviamente, queremos que todos sejam 0x01 para o disparo, mas não queremos que alguém ganhe a conquista simplesmente carregando um save com todos os dez tesouros já encontrados.
- O disparo ocorre no primeiro frame em que o jogador passa de nove para dez tesouros obtidos. Isso ajuda a evitar que a conquista seja ativada quando não deveria.
- A flag `Measured` está na última condição para que o jogador possa verificar o quanto falta para seu objetivo. Se eles tiverem oito de dez tesouros, a conquista mostrará que está 80% completa na sobreposição (RAEmus) ou menu de conquistas (RetroArch).

Este método é principalmente útil para quando os totais entre o tipo Delta e o tipo Mem têm apenas uma diferença de 0x01, mas pode ser usado em vários tipos de conquistas: colecionáveis que só podem ser obtidos um por vez, conclusão de mapas (como em jogos dungeon-crawler com mapas visíveis que são revelados conforme você entra em novas áreas), habilidades que podem ser aprendidas, bestiários, completar um certo número de missões secundárias e muitos outros.

Se você encontrar uma situação onde mais de uma bitflag em uma cadeia `AddSource` alterna ao mesmo tempo, você ainda pode utilizar este modelo. No entanto, você vai querer clonar as condições Delta e fazer com que ambos os totais criem um intervalo. Ainda usando a conquista acima como exemplo, o total existente poderia ser alterado para `<= 0x09` e o total para o segundo grupo poderia ser `>= 0x05`. Isso faria com que a conquista fosse ativada se o total passasse de 5-9 tesouros para 10 tesouros.

---

A Fazer:

- Fornecer um exemplo separado para o intervalo Delta.
- Abordar o uso de BitCount em uma conquista similar.
- Abordar o uso de `/` quando você precisa de pelo menos uma de múltiplas coisas.
