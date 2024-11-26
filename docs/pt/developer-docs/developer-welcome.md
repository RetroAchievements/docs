---
title: Bem-vindo à Equipe de Desenvolvimento
description: Dá as boas-vindas aos desenvolvedores recém-formados, ensina como enviar um conjunto e informa sobre todos os privilégios exclusivos para desenvolvedores.
---

# Bem-vindo à Equipe de Desenvolvimento!

**Link para o texto em inglês:** [Welcome to the Dev Team](/developer-docs/developer-welcome)

Agora que você é um desenvolvedor, tenho certeza que a primeira coisa que você quer saber é como enviar seu conjunto e quais outros privilégios estão disponíveis para você. Você terá vários novos recursos no site, emulador e servidor Discord, que veremos aqui.

Entrar para a equipe vem com **novas responsabilidades e critérios de inatividade**, então reserve um tempo para revisar o [Código de Conduta dos Desenvolvedores](/guidelines/developers/code-of-conduct) antes de continuar.

[[toc]]

## Gerenciamento de Conjuntos

A equipe web está trabalhando em uma nova página de Gerenciamento, que é onde todas as atividades relacionadas ao desenvolvimento acabarão sendo movidas. Ela pode ser acessada através do botão "Gerenciar" logo acima do menu suspenso Dev.

Esta página é usada para editar datas de lançamento e também para **reordenação por arrastar e soltar**.

![Exemplo de uma página de jogo vista através do site de Gerenciamento](/public/management-site.png)

## Enviando seu Primeiro Conjunto!

A maneira mais rápida e fácil de enviar seu primeiro conjunto é através da página de gerenciamento do seu conjunto. A partir daí, você pode marcar as conquistas que deseja promover e clicar em "Promover selecionados" para promover todas em alguns cliques!

Para chegar a esta página, vá até a página do seu jogo:
1. Clique em Gerenciar
2. Role para baixo até ver a lista de conquistas
3. Se desejar, você pode reordená-las clicando no botão Iniciar Reordenação e depois arrastando e soltando as conquistas
4. Marque as conquistas que deseja promover (Tenha cuidado para excluir quaisquer conquistas indesejadas ou anuladas, se houver, caso contrário apenas clique em "Todas")
5. Clique em Promoção ou demoção em massa
6. Clique em Promover selecionados

![Conquistas sendo promovidas através do site de Gerenciamento](/public/management-achievement-promotion.png)

## Anúncio Achievement-News

Agora que seu conjunto está ativo, é hora de anunciá-lo para todos se você estiver no Discord!

Temos um comando de bot útil que você pode usar para gerar automaticamente um modelo *desde que seu conjunto esteja como Principal*. Vá para #bot-spam e digite "!gan [gameid]" onde [gameid] é o id do seu jogo.

As mensagens fixadas em #devs-chat têm um modelo colorido alternativo que também pode ser usado.

Você pode copiar os resultados, substituir o @{AUTHOR_NAME} pelo seu nome e postar no canal #achievement-news com uma marcação @Achievement-News para chamar a atenção de todos para o conjunto mais recente que acabou de chegar ao RA.

## Reivindicações

Agora que você é um desenvolvedor, o limite de reivindicações foi expandido para um total de 4 reivindicações regulares simultâneas. Desde que você não tenha tickets ativos, você está livre para reivindicar conjuntos. Para detalhes mais específicos, consulte a [seção de reivindicações das Diretrizes do Desenvolvedor](/guidelines/developers/claims-system).

Se o jogo ainda não tem uma página, veja [Criando Páginas de Jogos e Vinculando Hashes](#criando-paginas-de-jogos-e-vinculando-hashes) para orientação.

## Revisões de Conjuntos

Revisões de conjuntos de conquistas são uma parte importante para manter os conjuntos antigos atualizados com os padrões modernos. Esta é sua chance de garantir que a qualidade seja mantida no site. As votações são feitas através dos canais #revision-voting e #revision-discussion do servidor Discord. Você receberá as funções @Revision-Voting e @Rescore por padrão após a graduação.

Ao considerar se deve votar para aprovar uma proposta de revisão, familiarize-se com os critérios de objetivo de revisão descritos no post fixado do fórum de discussão. O objetivo de uma revisão é transformar um conjunto deficiente em um conjunto de alta qualidade e moderno que idealmente nunca precisará de outra revisão. Votar em propostas de revisão é uma responsabilidade importante que todos os desenvolvedores devem levar a sério e participar para a saúde a longo prazo do projeto RetroAchievements.

Ao propor uma revisão, é necessário contatar todos os autores ativos do conjunto em questão. Se você deseja Opt-Out de ser contatado, use [este formulário](https://forms.gle/mgzv7RHbJEPCrxc77).

Para detalhes sobre como propor uma revisão, veja [Revisões de Conjuntos de Conquistas](/guidelines/content/achievement-set-revisions)

Se você está considerando solicitar uma re-autoria do conjunto, entre em contato com DevCompliance para aprovação. A solicitação de re-autoria não deve ser incluída na proposta de revisão.

Se você quiser transferir os conquistadores de algumas/todas as conquistas anteriores, precisará entrar em contato com RAdmin ou #admin-site-cleanup no Discord para assistência.

A solicitação incluiria o Jogo e uma lista completa de transferências de conquistas no formato ID Antigo -> ID Novo

Exemplo:

https://retroachievements.org/game/990

Transferir conquistadores para o Jogo 990:

11702 -> 175183

11709 -> 175184

E assim por diante...

## Atualizações do Emulador

Agora você terá alguns novos privilégios nos emuladores RA para aproveitar.

### Criando Páginas de Jogos e Vinculando Hashes

O maior novo privilégio é que agora você pode vincular novos hashes a jogos carregando o jogo em um emulador RA e vinculando-o.

Se estiver criando uma nova página, selecione "Novo Título" e escreva um nome apropriado na caixa de texto. Verifique se há páginas inúteis rotuladas como "~Z~ No Hash" que podem ser recicladas.

::: info
Leitura adicional:

[Criando Entradas](/guidelines/developers/creating-entries)

[Conquistas para ROM Hacks](/guidelines/content/achievements-for-rom-hacks)

[Subconjuntos](/guidelines/content/subsets)

[Trabalhando com a ROM Correta](/guidelines/content/working-with-the-right-rom)
:::

![Criando uma página de jogo com um hash não identificado](/public/game-page-creation.png)

### Notas de Código

Agora você pode sobrescrever e excluir quaisquer notas de código existentes. Tenha cuidado para não sobrescrever as notas de outros sem motivo; se você estiver fazendo melhorias ou corrigindo uma nota, isso é um motivo aceitável.

### Conquistas

Os desenvolvedores podem publicar diretamente alterações em conquistas no Principal sem precisar rebaixar para Não oficial.

Agora você pode promover e rebaixar livremente quaisquer conquistas entre Não oficial e Principal através do emulador, mas é muito mais fácil fazer isso através do site.

## Atualizações do Site

Agora você tem acesso a muito mais ferramentas no site para ajudá-lo como desenvolvedor.

### Quero Desenvolver Jogos

Os desenvolvedores têm a capacidade de adicionar jogos a uma lista de Quero Desenvolver. Os conjuntos podem ser adicionados através da caixa suspensa Dev na página do jogo.

![Botão Quero Desenvolver Jogos](/public/want-to-develop.png)

### Página do Jogo

#### Criando Tópicos no Fórum

Quando você vai reivindicar um conjunto, não precisa mais criar um tópico no fórum separadamente. O botão Fazer Reivindicação criará automaticamente um tópico no fórum para você se não existir um.

Lembre-se que você NÃO deve criar tópicos no fórum sem um motivo válido, como reivindicar um conjunto. Caso contrário, você será a única pessoa (além dos administradores) que pode editar o post inicial, que geralmente é onde informações importantes como arquivos de jogo suportados ou notas do conjunto são colocadas.

#### Menu Dev

Agora você tem acesso total ao menu suspenso Dev.

- **Gerenciar Conquistas Principal/Não oficial**: Promoção/rebaixamento, tipagem e ordenação de conquistas.

- **Gerenciar Tabelas de Classificação**: Redefinir entradas, ordenar e excluir tabelas de classificação
    - Por favor, leia [Editando Tabelas de Classificação](/guidelines/content/editing-leaderboards) antes de fazer edições ou redefinir entradas para tabelas de classificação que não são suas.

- **Gerenciar Hashes**: Editar rótulos de hash, Editar URLs de RAPatches e desvincular hashes

- **Inscrever-se em Tickets**: Útil se você decidir trabalhar em conjuntos de desenvolvedores inativos e quiser acompanhar tickets futuros

- **Quero Desenvolver**: Adiciona/Remove o jogo na sua lista de Quero Desenvolver

![Menu Dev](/public/dev-menu.png)

#### Adicionando Hubs e Jogos Relacionados

Hubs e jogos relacionados podem ser adicionados às páginas de jogos inserindo os IDs das páginas e clicando em "Adicionar". Hubs gerenciados pelas equipes DevCompliance, QA e Art não devem ser adicionados/removidos, envie uma mensagem para a equipe correspondente em vez disso.

![Hubs e jogos relacionados vinculados](/public/add-related-games.png)

## Canais do Discord

Agora você terá acesso a vários novos canais do Discord

- **#developer-news**

- **#devs-chat**

- **#devs-help-me**

- **#tickets-cleanup**

- **#ratools**

- **#revision-voting**

- **#revision-discussion**

## Eventos para Desenvolvedores!

Existem alguns eventos limitados a desenvolvedores, cada um com seu próprio canal no Discord:

- [Rollouts](/developer-docs/rollouts)

- [DevQuests](/developer-docs/devquests)

- [DevJam](/developer-docs/devjam): Lançando conjuntos para sistemas que não receberam rollouts

- [Beaten Into Completion](https://retroachievements.org/viewtopic.php?t=23062): Adicionando conquistas de progressão a conjuntos que estão faltando critérios de Zerado

- [House Cleaning](https://retroachievements.org/viewtopic.php?t=20882): Resolvendo ou fechando tickets de desenvolvedores inativos
