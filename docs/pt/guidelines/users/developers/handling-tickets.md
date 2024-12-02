---
title: Gerenciando Tickets
description: Diretrizes para gerenciar e resolver tickets de conquistas, incluindo etapas para tratar seus próprios tickets, lidar com tickets de outros desenvolvedores e protocolos para fechar tickets com base em vários critérios.
---

# Gerenciando Tickets

[[toc]]

## Lidando com Seus Próprios Tickets

**Após publicar suas conquistas, esteja preparado para relatórios de bugs.**  
É esperado que você mantenha seu trabalho livre de bugs, resolvendo os tickets adequadamente. Responda a todos os tickets o mais rápido possível. Quanto antes você responder, melhor, pois o problema ainda estará fresco na mente do jogador, e você poderá usá-lo para ajudar a resolver o problema.

## Posso Reivindicar um Conjunto se Eu Tiver um Ticket Aberto?

Para poder fazer uma reivindicação primária ou em colaboração de um conjunto, você não deve ter nenhum ticket _não tratado_.

- Um ticket aberto é considerado tratado quando um desenvolvedor, que pode não conseguir resolver o problema imediatamente, deixa um comentário solicitando um arquivo de salvamento, estado ou informações adicionais do autor do relatório.
- Tickets que foram devidamente fechados ou resolvidos são, obviamente, considerados tratados.

## Etapas para Resolver Tickets

1. Realize uma investigação detalhada para identificar a causa do problema.
2. Faça perguntas detalhadas ao autor do relatório para restringir as possíveis causas se o relatório inicial for insuficiente.
3. Se não for fornecido, ou se o estado salvo fornecido não for útil para diagnosticar o problema, solicite um ou mais estados salvos. Seja claro sobre onde no jogo os salvamentos devem ser feitos. Ajude o usuário a saber o que capturar.
4. Tente reproduzir o problema no mesmo núcleo usado pelo usuário.
   - Talvez seja necessário editar o arquivo `cores.json` no RALibretro para remover a linha `"platforms": "none"` da definição de um núcleo para poder baixá-lo e usá-lo.
5. Se estiver resolvendo um ticket de uma conquista de outro desenvolvedor, faça um backup da lógica antiga e deixe-a em um comentário no ticket. Dessa forma, se sua correção apresentar outro problema, você ou outro desenvolvedor poderão consultar a lógica anterior.
6. Quando encontrar o problema, desenvolva e teste suas alterações.
   - Nota: Para conquistas que foram acionadas na hora errada, certifique-se de que suas alterações resolvam o gatilho falso e que ainda funcionem para acionar a conquista corretamente.
7. Deixe um resumo do que você fez para corrigir o ticket. Se possível, explique por que o problema ocorreu, o que corrigiu e por que a correção funciona.

## Etapas para Fechar Tickets

1. Realize uma investigação detalhada ao tentar reproduzir o problema.
2. Não feche tickets sem deixar um comentário explicando por que fechar o ticket é a ação correta.
3. Feche com o motivo mais apropriado:

- **Não Foi Possível Reproduzir** deve ser usado apenas após reunir o máximo de informações sobre o contexto do ticket, tentar reproduzi-lo no núcleo, abordando as condições de gatilho de várias maneiras, e ainda assim não conseguir reproduzir os resultados.
- **Informações Insuficientes** deve ser usado apenas após tentar reproduzir o problema o máximo possível, mas sem mais informações do autor do relatório, você não conseguiu chegar ao mesmo resultado.
  - Dê vários dias para que novas informações sejam fornecidas antes de fechar por este motivo.
- **Problemas de Rede** deve ser o motivo de fechamento se ficar claro que o problema foi causado pelo usuário não ter conexão com o servidor.
- Um **Relatório Equivocado** deve ser usado apenas se ficar claro que o usuário não realizou as ações corretas para desbloquear o ticket ou relatou um problema por razões não passíveis de ticket.
- **Outro Motivo** pode ser usado se houver outro motivo para fechar o ticket. Certifique-se de justificar adequadamente o fechamento em um comentário no ticket.

## Lidando com Tickets de Outros Desenvolvedores

Você pode resolver tickets de outro desenvolvedor sob as seguintes diretrizes:

### Se o Desenvolvedor Está Ativo

Você pode ajudá-lo na resolução. O desenvolvedor ainda deve implementar quaisquer alterações no código necessárias, mas você pode sugerir lógica e ajudar a encontrar as causas.

Tickets pertencentes a Desenvolvedores Juniores ativos devem ser tratados apenas por membros da equipe de Revisores de Código. Se um Desenvolvedor Júnior solicitar que você feche ou resolva o ticket deles, encaminhe-o a um Revisor de Código.

### Se o Desenvolvedor Está Inativo

Você pode trabalhar nos tickets deles por conta própria.

- Um **desenvolvedor inativo** é alguém que possui **10 ou mais tickets abertos com mais de dois meses de idade** (você pode ver os tickets abertos no Gerenciador de Tickets).
  - Entre em contato com um membro da equipe de Conformidade de Desenvolvedores para garantir que este seja o caso antes de tomar a decisão por conta própria, caso o desenvolvedor ainda tenha o papel de Desenvolvedor.
- Se o desenvolvedor estiver inativo, você pode resolver os tickets deles livremente pelos processos normais de resolução mencionados acima.
- Você pode alterar a descrição da conquista para esclarecer o objetivo ou para corresponder à lógica presente, esclarecendo a intenção da conquista.  
  Não desvie do conceito ou objetivo de uma conquista de forma alguma sem uma votação de revisão aprovada.
- Siga as etapas para resolver ou fechar um ticket como se fosse seu.

### Reivindicando um Ticket

Você pode fazer uma reivindicação temporária de investigação e resolução de um ticket comentando sua intenção em um comentário no ticket.

- Se outra pessoa declarou sua intenção de resolver um ticket, você pode fornecer informações adicionais em um comentário.
- O desenvolvedor que está trabalhando em um ticket pode escolher trabalhar com outro desenvolvedor ou usuário para obter assistência na resolução.
- Após sete dias sem ações em direção a uma resolução, o ticket será considerado não reivindicado, permitindo que outros desenvolvedores forneçam uma solução.

## Se um Desenvolvedor Voltar a Ficar Ativo

_Quem lida com tickets de conquistas editadas enquanto o desenvolvedor estava inativo?_

Se um desenvolvedor inativo voltar a ficar ativo, ele ainda é responsável por suas conquistas que foram corrigidas por outros desenvolvedores.

- Recomenda-se fortemente que o desenvolvedor recém-ativo revise quaisquer tickets que foram resolvidos durante o período de inatividade para entender as mudanças feitas em suas conquistas.
- Se necessário, entre em contato com o desenvolvedor que realizou as atualizações que resolveram os tickets.
- Se o desenvolvedor recém-ativo não quiser mais ser o proprietário das conquistas, ele pode entrar em contato com a equipe de Conformidade de Desenvolvedores para solicitar a reatribuição das conquistas.
  - Observe que uma reatribuição aceita será tratada caso a caso, dependendo dos desenvolvedores envolvidos, bem como das alterações feitas nas conquistas. Esta regra será reavaliada caso seja implementado um mantenedor de conjunto ou conquista.
