---
title: Adicionando Hashes
description: Descreve o processo de adicionar hashes a conjuntos principais de conquistas no RetroAchievements.
---

# Hashes Adicionais

Adicionar hashes a um conjunto pode proporcionar uma experiência mais agradável para os jogadores ao incluir traduções, melhorias gráficas ou maior suporte regional. No entanto, isso envolve riscos que devem ser compreendidos e adequadamente mitigados. Este documento explicará os requisitos para adicionar hashes a conjuntos principais de conquistas.

Jogadores interessados em realizar testes de compatibilidade para novos hashes devem consultar [Testes de Compatibilidade para Jogadores](/guidelines/content/player-compatibility-testing).

[[toc]]

## Processo de Aprovação

A aprovação da equipe de QA é necessária para adicionar um hash a um conjunto que contenha quaisquer conquistas que não tenham sido criadas pelo desenvolvedor que está adicionando o hash. Entre em contato com a conta do site QATeam com os detalhes do plano para consideração de aprovação.

## Restrições

Se um conjunto tiver autores ativos, apenas eles, como mantenedores do conjunto, podem adicionar hashes adicionais ao conjunto.

## Backup da Lógica, Requisitos de Notas de Código e Tickets

Se aprovado, o desenvolvedor que está adicionando o hash deve fazer backup de toda a lógica alterada no tópico oficial do fórum do conjunto. Todas as notas de código devem ser atualizadas para especificar a quais hashes elas se referem. Quaisquer tickets criados após a adição de um hash são de responsabilidade exclusiva do desenvolvedor que adicionou o hash e estão sujeitos aos requisitos de manutenção do Código de Conduta do Desenvolvedor.

## Requisitos de Teste

Diferentes tipos de hashes exigem diferentes níveis de testes de compatibilidade e rigor. A estabilidade é mais importante do que a compatibilidade e será priorizada como tal. Os seguintes procedimentos são obrigatórios ao adicionar hashes adicionais.

### Traduções ou Patches Gráficos para Hashes Já Suportados:

- Certifique-se de que todos os endereços usados na lógica existente são consistentes com os endereços no hash de tradução.
- Verifique todas as conquistas, leaderboards e Rich Presence para qualquer uso de endereços baseados em texto ou sprites. Caso encontrados, jogue o hash novo até o ponto onde os endereços baseados em texto ou sprites são usados na lógica, verifique os valores e atualize a lógica e as notas de código apropriadas.
- Na maioria dos casos, patches de tradução para conjuntos suportados são compatíveis sem alterações na lógica.
- O conjunto deve ser adicionado aos hubs de tradução apropriados.

### Diferentes Versões de Hashes Regionais Já Suportados:

- Novas versões não devem conter diferenças que tornem as conquistas significativamente mais fáceis do que o pretendido. Para dúvidas, consulte a Developer Compliance.
- Certifique-se de que todos os endereços usados na lógica existente são consistentes com os endereços no hash da nova versão.
- Publique um resumo no fórum oficial sobre as diferenças entre as versões e jogue todas as partes da nova versão para testar toda a lógica existente nas seções do jogo que foram alteradas na nova versão.

### Diferentes Hashes de Formatos Regionais:

- Valide os endereços para toda a lógica usada no novo patch regional. Os endereços podem ser simplesmente deslocados por uma distância particular, que pode ou não ser consistente em toda a memória. Cada endereço usado deve ser validado.
- Os valores individuais dos endereços, mais comumente IDs ou animações de sprites, podem variar entre regiões. Todos os valores de endereços usados na lógica que fazem referência a um potencial endereço de ID devem ser validados no novo hash.
- Conquistas e leaderboards que usam frames como contadores de tempo devem ter lógica adicional para considerar as diferenças de taxa de quadros entre PAL e NTSC. [Documentação sobre Leaderboards e formatos de valor](https://docs.retroachievements.org/Leaderboards/#value-format)

### Outros Tipos de Hashes:

Entre em contato com a conta do site QATeam para orientação.

## Reversão em Caso de Problemas

A equipe de QA pode instruir o desenvolvedor que adicionou o hash a restaurar o conjunto ao seu estado original se problemas de compatibilidade não resolvidos forem introduzidos por um novo hash. O desenvolvedor terá um prazo determinado para reverter o conjunto.
