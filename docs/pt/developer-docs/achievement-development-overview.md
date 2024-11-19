---
title: Guia Abrangente de Desenvolvimento de Conquistas
description: Mergulhe profundamente na arte da criação de conquistas com este guia detalhado cobrindo conceitos básicos, ferramentas do editor, métodos de proteção, dicas de lógica, recursos menos conhecidos e muito mais.
---

# Visão Geral do Desenvolvimento de Conquistas

## Introdução

A página está em intenso desenvolvimento (WIP), mas o objetivo é mergulhar profundamente na criação de conquistas. Provavelmente acabaremos mesclando os "Exemplos Reais" nesta seção de alguma forma. Cada flag, tipo, tamanho, comparação, etc. terá sua própria página para mostrar as várias maneiras como podem ser usados. Também incluirá várias dicas, estudos de caso, etc.

## Conceitos Básicos

- Adicionando Jogos ao Banco de Dados
  - Tudo o que você sempre quis saber (mas tinha medo de perguntar) sobre hashes
  - Guia de Patches
- Mineração de RAM
  - Utilizando códigos do Game Genie, Game Shark, Codebreaker, Action Replay, etc.
- Notas de Código
  - Convenções de formatação

## Editor de Conquistas

Existem várias ferramentas e opções disponíveis para um desenvolvedor. Saber como utilizá-las adequadamente melhorará a qualidade dos seus conjuntos. Estas ferramentas/opções podem ser usadas no Editor de Conquistas:

![editor_de_conquistas](https://user-images.githubusercontent.com/45054151/128662028-74e64baf-46ff-4c9f-9837-3684bfb42ad8.png)

### Flags

- <a name="pauseif"></a>[Flag `PauseIf`](/developer-docs/flags/pauseif)

  - <a name="pauseif-with-hit-counts"></a>[`PauseIf` com contadores de acertos](/developer-docs/flags/pauseif#pauseif-with-hit-counts)

- <a name="resetif"></a>[Flag `ResetIf`](/developer-docs/flags/resetif)

  - <a name="resetif-with-hit-counts"></a>[`ResetIf` com contadores de acertos](/developer-docs/flags/resetif#resetif-with-hit-counts)

- <a name="resetnextif"></a>[Flag `ResetNextIf`](/developer-docs/flags/resetnextif)

- <a name="addsource"></a>[Flag `AddSource`](/developer-docs/flags/addsource)

- <a name="subsource"></a>[Flag `SubSource`](/developer-docs/flags/subsource)

  - <a name="checking-for-a-negative-result"></a>[Verificando um resultado negativo](/developer-docs/flags/subsource#checking-for-a-negative-result)

- <a name="addhits"></a>[Flags `AddHits` e `SubHits`](/developer-docs/flags/addhits-subhits)

- <a name="addaddress"></a>[Flag `AddAddress`](/developer-docs/flags/addaddress)

- <a name="andnext"></a>[Flags `AndNext` e `OrNext`](/developer-docs/flags/andnext-ornext)

- <a name="measured"></a>[Flags `Measured` e `MeasuredIf`](/developer-docs/flags/measured)

- <a name="trigger"></a>[Flag `Trigger`](/developer-docs/flags/trigger)

### Tipos

- Mem
- Value
- Delta
  - Comparações `Mem > Delta`
- Prior
- BCD
- Float

### Tamanhos

- bit0 - bit7
- 8-Bit
- 16-Bit
- 24-Bit
- 32-Bit
- Lower4 e Upper4
- 16-Bit BE
- 24-Bit BE
- 32-Bit BE
- BitCount
- Float
- MBF32

### Comparações Gerais

- `=`
- `<`
- `<=`
- `>`
- `>=`
- `!=`

### Comparações Específicas de Flags

- `*`
- `/`
- `&`

### Outros Recursos do Kit de Ferramentas

- Contadores de Acertos
  - Usando com `ResetIf`
  - Usando com `PauseIf`
- Grupos Alt

## Proteções

- Proteção contra Demo
  - Encontrando e testando endereços de demo
- Proteção de Save
  - Delta e Prior
  - Usando temporizadores in-game
  - Usando flags de eventos
- Proteção contra Senhas
- Proteção contra Trapaças
- Proteção para Multiplayer
- Outros
  - Dipswitch
  - BIOS (PlayStation e Saturn)

## Dicas e Truques de Lógica

- Hits de checkpoints
- Travas de Pausa
- Usando Contadores de Acertos como temporizador
- Usando Valores Delta e Contadores de Acertos para Detectar um Incremento
- Contornando o Problema de um Contador Incrementando Duas Vezes no Mesmo Frame
  - `nota: precisa adicionar algo sobre como o kit de ferramentas ainda usa hex mesmo se o valor estiver em BCD`
- Vários tipos de cadeias
- Quando usar `ResetIf` ou `PauseIf`
- Quando usar Delta ou Prior
- Usando BitCount para colecionáveis
- Usando `AddSource` com comparações `Mem / Mem`
- Criando um Temporizador com hits do `ResetIf` baseado na velocidade do jogo
- Usando `bit0` para incluir ou excluir valores ímpares

## Recursos Menos Conhecidos

- Duplo clique em bitflags enquanto estiver na visualização de 8 bits
- Clique com o botão direito em endereços no editor para pular para eles no Inspetor de Memória (também funciona com offsets para pular para o endereço atual)
- Destacar condições e segurar CTRL enquanto clica para alterar um campo em várias condições de uma vez

## Dicas de Fluxo de Trabalho

- Usando Google Sheets e Notepad++
- Editando arquivo local

## Coisas a Evitar e Por Quê

- `ResetIf`s redundantes
- Conquistas com condição única
- Endereços baseados em texto

## Veja Também

- Distribuição de Pontos
- Criação de Badges
- Rich Presence
- Tabelas de Classificação
- RATools
- Fazendo Vídeos Tutoriais
- Tabela de Sintaxe
