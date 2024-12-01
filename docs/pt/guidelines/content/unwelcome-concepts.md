---
title: Conceitos Indesejados
description: Diretrizes que descrevem conceitos desencorajados ou proibidos no design de conquistas, como dependência excessiva de RNG, grinding sem sentido e conquistas que exigem glitches, com exceções aplicáveis.
---

# Conceitos Indesejados

Os desenvolvedores são incentivados a serem criativos no design de suas conquistas, mas existem alguns conceitos que **NÃO** são desejáveis para conquistas. Abaixo está uma lista do que foi considerado como conceitos indesejados. Por favor, note que existem algumas exceções, que são descritas nas diretrizes. Em caso de dúvidas, consulte o [Developer Compliance](https://retroachievements.org/createmessage.php?t=DevCompliance).

[[toc]]

## Como Reportar uma Conquista como Conceito Indesejado

Se você encontrar uma conquista que se enquadre em um ou mais critérios listados abaixo, você pode reportá-la como um conceito indesejado acessando a página da conquista no site e clicando no link `Reportar um Problema`, localizado abaixo da descrição e informações do autor. Siga as instruções na página que aparecer.

- Navegue até a Página da Conquista.
- Clique em `Reportar um Problema`.
- Clique no botão `Mensagem para o DevCompliance` ao lado de "*A conquista contém um conceito indesejado.*". Um DM para a equipe do Developer Compliance será aberto.
- Preencha a mensagem com detalhes sobre o conceito indesejado. Seja específico e detalhado. Relatórios com poucos detalhes ou que falhem em descrever por que atende aos critérios não serão considerados.
- Clique no botão `Enviar` quando estiver pronto.

## Spam de Conquistas

É considerado um mau design ter conquistas sendo desbloqueadas com muita frequência. Um exemplo disso é desbloquear conquistas tanto por derrotar um chefe quanto por obter um item específico após a luta.

Quando isso é aceitável:

- Usando o exemplo acima: Se a conquista por derrotar o chefe for baseada em um desafio, como derrotá-lo sem sofrer danos. Isso não é um desbloqueio garantido apenas jogando.
- Se as conquistas forem empilháveis.
  - Derrotar um chefe na dificuldade normal ou superior + derrotar o mesmo chefe na dificuldade difícil.
  - Abrir o último baú em uma área + abrir todos os baús no jogo.

## Jogar Mal Sem Propósito

Conquistas por morrer, obter um game over ou falhar repetidamente em uma tarefa apenas por isso são desnecessárias.

Quando isso é aceitável:

- Muitos jogos de aventura point-and-click e visual novels frequentemente atrelam a morte do jogador à história, o que pode resultar em cenas únicas que um jogador não testemunharia de outra forma.
- Se jogar mal resultar em um reconhecimento humorístico ou interessante no jogo, como receber um capacete por levar muitos golpes na cabeça.

## Esforço Zero Sem Propósito

Exemplos disso são conquistas por simplesmente iniciar um jogo, coletar uma única moeda, assistir a um vídeo, etc.

Quando isso é aceitável:

- Conquistas "disclaimer" destinadas a informar o jogador sobre restrições no conjunto de conquistas. Estas só devem existir quando o jogador pode se bloquear de múltiplas conquistas sem perceber.
- Não pular uma cinemática de abertura que tenha sido considerada significativa na época.
- Abordar algo divertido, histórico ou interessante.

## Requer Glitches

Conquistas por realizar tarefas que só são possíveis usando glitches, bugs, etc., não são permitidas em conjuntos básicos. Glitches/Bugs são erros no código do jogo que frequentemente causam comportamentos não intencionais. Exemplos incluem estouro de memória, níveis carregados incorretamente e atravessar objetos.

Quando isso é aceitável:

- Glitches historicamente significativos e bem conhecidos, de fácil execução e importantes para a comunidade do jogo são permitidos com a aprovação do [Developer Compliance](https://retroachievements.org/createmessage.php?t=DevCompliance&s=Glitch%20Approval%20Request%20-%20[Game%20Name]%20-%20[Glitch%20Name%20or%20Description]). Deve estar claro que o glitch é necessário para a conquista e destacar sua importância ou significado.
  - Conquistas que incluam glitches aprovados devem exigir que o jogador realize algum feito usando o glitch. Simplesmente ativar o glitch sem propósito não é suficiente, a menos que ativá-lo seja uma tarefa significativa.
- Um `[Subset - Glitch Showcase]` ou `[Subset - Bonus]`.

## Requer Dois Jogadores

Conquistas que exigem a entrada de pelo menos outro jogador não são permitidas em conjuntos básicos.

Quando isso é aceitável:

- Conjuntos `[Subset - Multi]`.

## Requer Perfeição Completa

Conquistas que exigem uma **tarefa longa** onde o menor erro resultará em falha no desafio. Especialmente desafios onde a aleatoriedade e outras variações no comportamento do jogo tornam as ações imprevisíveis.

Quando isso é aceitável:

- Subsets para Desafios Extremos ou um conjunto Bonus típico.
- Jogos onde o comportamento de inimigos ou obstáculos é altamente determinístico ou baseado em padrões.
- Jogos onde esse desafio é um objetivo comum entre os jogadores ou não é visto como um desafio extremo pela comunidade do jogo.

## Grinding Excessivo Sem Propósito

Conquistas que exigem tarefas longas e repetitivas, que não oferecem recompensas únicas no jogo, reconhecimento ou não são necessárias para completar todo o conteúdo de um jogo.

Exemplos comuns de Tarefas Repetitivas Excessivas e Sem Propósito:

- Subir de nível em um RPG além do necessário para completar o jogo, sem recompensas no jogo, como uma habilidade ou magia.
- Adquirir várias cópias de itens ou dinheiro além do que seria acumulado normalmente em uma jogada padrão.
- Coletar um número arbitrário de vidas extras, quando elas não estão associadas a uma recompensa ou desafio, como quando podem ser obtidas de inimigos.

Quando essas conquistas são aceitáveis:

- Subconjuntos bônus ou subconjuntos especificamente aprovados para tarefas de grind são uma exceção a essa política e podem ser implementados.

## Excessivamente Dependente de RNG

Conquistas que dependem inteiramente de aleatoriedade, especialmente quando as probabilidades são extremamente baixas.

Quando essas conquistas são aceitáveis:

- Jogos ou minijogos onde a aleatoriedade é um aspecto principal.

## "Conquistas Secretas"

Quando o jogador não tem indicação do que precisa fazer para alcançar a conquista.

Quando essas conquistas são aceitáveis:

- Descrições secretas ou intencionalmente vagas podem ser usadas para evitar grandes spoilers, desde que as conquistas sejam de progressão imperdível.

## Requisitos Excessivamente Complicados

Conquistas com restrições ou requisitos que não podem ser totalmente expressos dentro do limite de caracteres da descrição. O jogador deve ser capaz de visualizar os requisitos diretamente no emulador, sem precisar acessar o site do RetroAchievements.

- Comentários nas conquistas que incluam restrições ou requisitos adicionais não são permitidos.
- Recursos externos necessários, como links do pastebin, não são permitidos.
- Abreviações excessivas na descrição, que tornam o texto incompreensível, não são permitidas.
- Comentários podem ser usados para adicionar *esclarecimentos* sobre termos do jogo.
  - Exemplo: Uma conquista que especifica "sem habilidades opcionais" pode listar quais habilidades são opcionais nos comentários ou no fórum.
  - Exemplo: "com configurações padrão" para DIP em um jogo de Arcade é aceitável.

Quando essas conquistas são aceitáveis:

- Para um subconjunto aprovado com um tema envolvendo requisitos complicados, as conquistas não precisam duplicar esses requisitos em suas descrições.
  - Exemplo: Um desafio de RPG com várias restrições não exigiria que todas fossem listadas em cada conquista.
  - Certifique-se de incluir essa possibilidade ao enviar uma solicitação de aprovação de subconjunto, caso acredite que será aplicável.
  - As conquistas devem ter alguma indicação sobre o tema dessas restrições sempre que possível.
- Um jogo com modos altamente personalizáveis pode ter dificuldade em especificar claramente as configurações necessárias para conquistas comuns e pode recorrer a meios abreviados para expressar essas restrições.
  - Dica: Solicite assistência da equipe de redação para apresentar essas situações da melhor forma possível.

## Tipos de Jogos Indesejados

Vamos encarar a realidade. Existem alguns jogos, ou "jogos", que não são adequados para conquistas. Abaixo está uma lista desses tipos de jogos que geralmente não são permitidos.

- [Jogos Que Não Possuem Jogabilidade](#jogos-que-não-possuem-jogabilidade)
- [Compilações e Multi-Carts](#compilações-e-multi-carts)
- [Betas, Demos e Protótipos](#betas-demos-e-protótipos)

## Jogos Que Não Possuem Jogabilidade

- Vídeos, visualizadores de música, jukeboxes, etc.
  - Estes não serão aceitos sem aprovação explícita. A aprovação será feita através de votação pela Equipe de Conformidade de Desenvolvedores e exige a implementação de conceitos criativos. Por exemplo: [Game Boy Advance Video Series](https://retroachievements.org/game/11843) foi apresentado com a ideia de incluir um quiz no placar ao final de cada episódio. Esse plano único envolvia jogabilidade além de simplesmente apertar start e foi aprovado.
- Conjuntos de livros ainda são permitidos, mas devem valer 0 pontos.

## Compilações e Multi-Carts

Se uma compilação ou multi-cart apresenta jogos que compartilham o mesmo console, então eles não são permitidos. Um exemplo disso é o 6-Pak para Genesis/Mega Drive, que contém seis jogos do Genesis/Mega Drive.

## Betas, Demos e Protótipos

Se o jogo teve um lançamento oficial, esses geralmente não são permitidos, a menos que haja conteúdo exclusivo. Jogos que existiram apenas como betas, demos ou protótipos geralmente são aceitáveis, desde que sejam jogáveis (alguns protótipos mal se qualificam).

## Restrição de Nome Personalizado no Rich Presence

Rich Presence que exibe diretamente texto personalizado inserido pelo jogador é proibido. O exemplo mais comum é mostrar o que um jogador insere como nome de personagem ou arquivo diretamente no Rich Presence.

Essa restrição ajuda a prevenir conteúdo impróprio ou ofensivo de ser exibido em várias páginas do site, além de tornar a moderação do Rich Presence mais gerenciável, além de proteger a privacidade do jogador, já que eles podem não perceber que seu texto está sendo exibido publicamente.

## Títulos Banidos

Embora nós, no RetroAchievements, reconheçamos que o conteúdo de jogos retro pode ser divisivo ou desatualizado com o desenvolvimento cultural global ao longo do tempo, acreditamos que é necessário apoiar conteúdos de todos os lados da história dos jogos e desempenhar nosso papel na preservação dessa era nos videogames, seja ela boa ou ruim. Dependendo da gravidade, a equipe administrativa pode optar por remover os valores de pontos ou tomar outras ações para evitar que conteúdos problemáticos sejam incentivados, mas, como política, banimos jogos comerciais do site apenas com base na prevenção de problemas legais. Abaixo está uma lista incompleta desses títulos, a ser atualizada conforme necessário.

|                     Título                    | Ano  |      Plataforma     |
| :-------------------------------------------: | :--: | :-----------------: |
| • Lolita Syndrome<br>• ロリータ・シンドローム | 1983 |    FM-7, PC-88      |
|        • My Lolita<br>• マイ・ロリータ        | 1984 |    FM-7, PC-88      |
|                • The Guy Game                 | 2004 | PS2, Xbox, Windows  |
