---
title: Teste de Compatibilidade de Jogadores
description: Descreve o processo para os jogadores realizarem testes de compatibilidade de hashes adicionais com conjuntos de conquistas primárias no RetroAchievements.
---

# Teste de Compatibilidade de Jogadores

A maior barreira para adicionar suporte a hashes adicionais em conjuntos é o tempo necessário para testá-los. Este documento explica como os jogadores podem solicitar aprovação para realizar testes de compatibilidade de hashes.

## Visão Geral do Processo

Jogadores interessados em realizar testes de novos hashes devem entrar em contato com o responsável pelo conjunto via mensagem direta no site e solicitar permissão para conduzir o teste de compatibilidade. O responsável pelo conjunto é qualquer desenvolvedor ativo que seja autor do conjunto. Caso todos os autores estejam inativos, o [QATeam](https://retroachievements.org/user/QATeam) será o responsável pelo conjunto.

Se o responsável pelo conjunto concordar com o teste de compatibilidade, ele fornecerá o hash de teste. Será responsabilidade do testador realizar os testes exigidos pelo responsável.

Se aprovado para um teste de compatibilidade, o hash solicitado será vinculado com o rótulo **COMPATIBILITY TEST - NOT FOR PLAYER USE**. O testador será obrigado a concluir ou dominar o conjunto dentro de um prazo determinado pelo responsável. O testador deverá criar estados de salvamento antes de tantas conquistas quanto possível. Problemas deverão ser relatados diretamente ao responsável pelo conjunto via mensagem no site, e nenhum ticket deverá ser aberto durante o uso do hash de teste. Quando o testador dominar ou concluir o conjunto, o hash de teste será renomeado com o título apropriado, e seu patch será adicionado ao RAPatches. O hash será então considerado suportado.

## Benefícios

Como os hashes de teste serão vinculados ao conjunto durante o teste, os testadores manterão quaisquer conquistas que desbloquearem. Eles também podem ganhar créditos por concluir ou dominar o conjunto.

## Restrições e Limitações

As seguintes restrições e limitações se aplicam:

- O responsável pelo conjunto pode negar qualquer solicitação a seu critério.
- O responsável pelo conjunto pode encerrar um teste de compatibilidade a seu critério.
- Os testadores devem usar o emulador e núcleo especificados pelo responsável pelo conjunto.
- O responsável pelo conjunto definirá um prazo razoável para que o testador conclua o conjunto.
- Hashes de teste que não estiverem sendo testados ativamente serão desvinculados, e os testes serão encerrados.
- Apenas um testador será aprovado por hash de teste.
- O responsável pelo conjunto pode definir requisitos adicionais a seu critério.

### Passo 1 - Solicitação do Jogador

Os jogadores devem incluir as seguintes informações em sua primeira mensagem ao solicitar um teste de compatibilidade:

- Uma breve explicação do motivo pelo qual acreditam que o hash deve ser adicionado ao conjunto.
- Um link para a fonte do patch.
- Informar ao responsável pelo conjunto que pretendem concluir ou dominar o conjunto.

### Passo 2 - Condições do Responsável pelo Conjunto

Se o responsável pelo conjunto estiver interessado em apoiar o teste, ele deve responder ao jogador com as seguintes informações:

- Confirmação de que permitirá o teste de compatibilidade.
- Uma data limite para a conclusão do teste. Esta data pode ser atualizada pelo responsável a seu critério.
- Quaisquer outras restrições ou requisitos que desejar impor, não explicados neste documento.

### Passo 3 - Acordo do Jogador

Se o jogador aceitar os termos do responsável pelo conjunto, deverá informar que aceita a responsabilidade pelo teste.

### Passo 4 - Vinculação do Hash de Teste pelo Responsável

O responsável pelo conjunto vinculará o hash e o rotulará como **COMPATIBILITY TEST - NOT FOR PLAYER USE**. Ele informará ao testador que pode iniciar os testes.

### Passo 5 - Testando o Hash

Os testadores devem seguir as diretrizes abaixo durante o teste de compatibilidade:

- Priorizar o teste de compatibilidade no RetroAchievements, dedicando a maior parte de seu tempo de jogo ao teste.
- Criar um estado de salvamento antes de cada conquista sempre que possível.
- Tentar obter todas as conquistas do conjunto conforme exigido pelo responsável. O responsável pode exigir domínio ou conclusão.
- Informar imediatamente ao responsável via mensagem no site sobre conquistas incompatíveis. O jogador será responsável por fornecer quaisquer estados de salvamento solicitados pelo responsável para modificar a lógica das conquistas necessárias para compatibilidade.
- O responsável pode exigir mais testes após atualizar a lógica, a seu critério. Os testadores devem seguir as orientações do responsável ao longo do teste.

### Passo 6 - Conclusão do Teste

Quando o testador concluir todos os requisitos estabelecidos pelo responsável, o teste será considerado concluído. O responsável decidirá se o hash de teste será oficialmente suportado. Se aprovado, o responsável deverá submeter o patch pelo fórum RAPatches no servidor Discord ou abrindo uma solicitação de pull no repositório GitHub do RAPatches. Após o patch ser adicionado ao repositório, a descrição do hash, o rótulo e a URL do patch deverão ser atualizados.
