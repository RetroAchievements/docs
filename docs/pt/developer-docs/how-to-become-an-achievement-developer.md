---
title: Como se Tornar um Desenvolvedor de Conquistas
description: Um guia passo a passo para se tornar um desenvolvedor RetroAchievements, incluindo conhecimentos necessários, planejamento e melhores práticas.
---

# Como se Tornar um Desenvolvedor de Conquistas

Este documento descreve todos os passos que qualquer aspirante a desenvolvedor de conquistas deve seguir antes de obter o status de Desenvolvedor. Esses requisitos também são uma lista de verificação para os Revisores de Código (desenvolvedores que inspecionam o código de novos desenvolvedores).

**Qualquer pessoa pode se tornar um desenvolvedor do RetroAchievements se se dedicar.**

**Fortemente recomendado**: entre em nosso servidor Discord para entrar em contato com outros desenvolvedores de conquistas que podem mostrar os caminhos e ajudá-lo. Se você já sabe qual jogo quer trabalhar, vá em frente e solicite a função `Jr-Dev` no fórum `#role-request` criando uma postagem marcada como `Jr-Dev`, postando seu plano de conjunto para o jogo (você pode usar um desses [modelos](https://docs.google.com/spreadsheets/d/1VC2phJ9AUcZK5Ll4bVuMpJXED8QdM_nw8OdSAuLc3bI/edit)), e marcando `@QA-Maintainer` (Certifique-se de primeiro verificar sua conta seguindo as instruções em `#welcome` se ainda não o fez). Isso lhe dá acesso ao canal `#jr-devs`, onde você pode conversar com revisores de código e fazer quaisquer perguntas relacionadas ao desenvolvimento.

## Encontrando um Jogo para Trabalhar

Siga as [diretrizes no Código de Conduta dos Desenvolvedores](/guidelines/developers/code-of-conduct#working-on-empty-sets) para encontrar um jogo. Certifique-se de que o jogo esteja em conformidade com as [Regras e Restrições](/developer-docs/jr-dev-rules#rules-and-restrictions) antes de trabalhar nas conquistas. Para reivindicar um jogo, ele deve ter um tópico no fórum. Se ainda não tiver um, você pode pedir a um Revisor de Código para criar um no `#jr-dev-forum` em nosso servidor Discord. Sinta-se à vontade para declarar seus planos de trabalhar no jogo no tópico e postar atualizações conforme prossegue.

**Dica**: para seu primeiro conjunto de conquistas, é recomendado escolher um jogo que ainda não tenha conquistas **e** não seja muito popular.

## Planejando seu Conjunto de Conquistas

Depois de encontrar um jogo para trabalhar, você precisa planejar seu Conjunto de Conquistas.

Certifique-se de que conhece o suficiente sobre o jogo para fazer um bom conjunto. Verifique o GameFAQs ou algo assim, tente aprender mais sobre o jogo, seus segredos e detalhes. Aqui está um bom guia para ajudá-lo com isso: [Roteiro de Desenvolvimento de Conjunto](/pt/developer-docs/set-development-roadmap).

É recomendado que você poste seus planos no tópico oficial do fórum do jogo, para que a comunidade possa deixar sugestões e fornecer feedback.

**IMPORTANTE!: esteja aberto para receber feedback e sugestões.**

**Veja também**: [Design de Conquistas](/pt/developer-docs/achievement-design), é um guia extenso sobre como projetar conquistas boas e interessantes. Não é sobre o lado técnico, mas o conceitual.

## Conhecimento Necessário

Todo desenvolvedor deve conhecer pelo menos os conceitos e técnicas básicos mostrados nestes dois documentos:

1. [Começando como Desenvolvedor de Conquistas](/pt/developer-docs/getting-started-as-an-achievement-developer)
2. [Recursos de Lógica de Conquistas](/pt/orphaned/achievement-logic-features)

Qualquer aspirante a desenvolvedor deve demonstrar compreensão dos seguintes conceitos:

- Exploração básica de RAM (estar familiarizado com o [Inspetor de Memória](/pt/developer-docs/memory-inspector))
- [Notação hexadecimal](/pt/developer-docs/memory-inspector#notacoes-decimal-binaria-e-hexadecimal)
- [Valores Delta](/pt/developer-docs/delta-values)
- [Contagem de Hits](/developer-docs/hit-counts)
- [`PauseIf`](/developer-docs/flags/pauseif)
- [`ResetIf`](/developer-docs/flags/resetif)
- [Grupos Alt](/pt/developer-docs/alt-groups)
- Tamanhos de memória: [8-bit](/pt/developer-docs/memory-inspector#modo-8-bit) e [bit único](/pt/developer-docs/memory-inspector#bits-individuais)
- Comparações de lógica de conquistas além de `=`, como `>`, `<`, `!=`
- [Adicionando emblemas a uma conquista](/pt/general/ways-to-contribute)
- [Criando descrições precisas para conquistas](/guidelines/developers/code-of-conduct#basic-achievement-design-guidelines)
- Adicionar [proteções](/pt/developer-docs/getting-started-as-an-achievement-developer#dicas-importantes) apropriadas
- Fazer um [conjunto de conquistas estável](/developer-docs/getting-started-as-an-achievement-developer#dicas-importantes)

**Nota**: Você não precisa dominar todos esses conceitos para ter um conjunto publicado, mas precisa deles para ter a função completa de Desenvolvedor.

### Conceitos Avançados

Aqui está uma lista de alguns conceitos/técnicas avançados. **Eles não são necessários para se tornar um Desenvolvedor**, mas estão listados aqui para deixar o jr-dev conhecer as possibilidades da lógica das Conquistas.

- Contagem de hits como timer (como neste [exemplo](/pt/developer-docs/real-examples/using-hit-counts-as-a-timer) e [neste](/developer-docs/real-examples/creating-a-timer-with-reset-if-hits-based-on-the-speed-of-the-game))
- [Checkpoints ResetIf](/pt/developer-docs/achievement-templates#termine-nível-n-sem-morrer)
- [ResetIf com Hitcount](/developer-docs/flags/resetif#resetif-with-hit-counts)
- [PauseIf com Hitcount](/developer-docs/flags/pauseif#pauseif-with-hit-counts)
- Flags [AddSource](/developer-docs/flags/addsource) e [SubSource](/developer-docs/flags/subsource)
- [Flag AddHits e SubHits](/developer-docs/flags/addhits-subhits)
- [Contador de incremento (`Mem > Delta` Counter)](/pt/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)
- [Contador de Delta Hit, técnica de pausa](/pt/developer-docs/achievement-templates#cheque-por-um-valor-específico-mudando-para-outro-valor-específico-dez-vezes)
- [Little endianness](/pt/developer-docs/memory-inspector#endianness)
- Tamanho de memória: [Lower4, Upper4](/pt/developer-docs/memory-inspector#upper4-e-lower4), e [16-bit, 32-bit](/pt/developer-docs/memory-inspector#modo-16-e-32-bit)
- [Rich Presence](/pt/developer-docs/rich-presence) dinâmico
- [Tabelas de Classificação](/pt/developer-docs/leaderboards)
- [Resets Pausáveis](/pt/developer-docs/achievement-templates#resets-condicionais)
- [Contador de incremento SubSource](/developer-docs/flags/subsource#using-subsource-to-count-specific-increments)

As páginas de [Exemplos Reais](/pt/developer-docs/real-examples) e [Modelos de Conquistas](/pt/developer-docs/achievement-templates) são recursos úteis para ver como essas técnicas funcionam.

## Notas de Código

Desenvolvedores juniores podem criar e excluir notas de código que eles criaram, mas não podem excluir ou editar notas criadas por outros. Desenvolvedores PODEM editar e remover notas de outros usuários, e essas alterações são em todo o site.

## Praticando

Para se familiarizar com essas técnicas, você deve praticar. **Você pode usar qualquer jogo para praticar**, mesmo aqueles que já têm conquistas. Apenas fique atento a estas regras:

- **NÃO** exclua/sobrescreva nenhuma Nota de Código existente.

- Nesta fase de **prática**, mantenha seu trabalho local e **NÃO** faça upload de nenhuma conquista. Você fará isso mais tarde quando encontrar um jogo para realmente trabalhar.

## Faça seu trabalho ser revisado

Depois de criar algumas conquistas, faça o upload delas para Não oficial e então crie uma postagem em `#jr-dev-forum` em nosso servidor Discord (se você não usa Discord, envie uma mensagem para [RAdmin](http://retroachievements.org/user/RAdmin)) e peça para encontrarem alguém para revisar seu trabalho.

**NÃO** peça a outro desenvolvedor para promover suas conquistas para o Core sem uma revisão adequada.

Novamente, **é extremamente importante que você esteja aberto para receber críticas construtivas e conselhos úteis da comunidade a qualquer momento**.

## Estou pronto para receber o status de Desenvolvedor?

Depois que os Revisores de Código tiverem inspecionado o código e conceitos de suas conquistas, eles e o admin usarão a [lista de verificação "Conhecimento Necessário" acima](#conhecimento-necessário) para determinar se você está pronto. Se você ainda não estiver totalmente qualificado para ser um desenvolvedor, mas seu conjunto estiver completo e estável, o conjunto será publicado. Você pode então perguntar quais conceitos ainda precisa demonstrar proficiência para receber o status de desenvolvedor.

O mérito de um jr-dev receber o status de desenvolvedor depende de:

- sua capacidade de publicar trabalho que atenda aos padrões do [Código de Conduta dos Desenvolvedores](/guidelines/developers/code-of-conduct);
- demonstração de [conhecimento necessário](#conhecimento-necessário) e [conceitos avançados](#conceitos-avançados);
- a qualidade e complexidade de seu trabalho;
- o tempo e pensamento que dedicaram ao planejamento e trabalho nas conquistas;
- mostrar a vontade de usar o status de Desenvolvedor com cuidado e responsabilidade;
- a extensão em que os pontos acima refletem suas capacidades como desenvolvedor.

## Código de Conduta dos Desenvolvedores

Uma vez que você receba seu status de Desenvolvedor, você **DEVE** aderir ao [Código de Conduta dos Desenvolvedores](/guidelines/developers/code-of-conduct). Isso é extremamente importante para criar um ambiente justo entre os Desenvolvedores de Conquistas.
