# Design de Conquistas

**Link para o texto em inglês:** [Achievement Design](/developer-docs/achievement-design.html)

Este é um guia de como pensar sobre e desenvolver boas conquistas. Não o lado técnico, mas o lado conceitual.

Este conteudo é um resumo do que foi [originalmente escrito pelo usuário cirellio em um forum](http://retroachievements.org/viewtopic.php?t=1235). `texto em inglês`

## Conquistas Baseadas em Progresso

Há 3 tipos de conquistas baseadas em progresso: progresso simples, progresso baseado na história, e conquistas baseadas em progresso/coletagem.

### Progresso Simples

Conquistas baseadas em Progresso são geralmente mais simples, especialmente se o jogo que você está fazendo não passa de fases lineares. Ou não tem muita coisa acontecendo na história. Neste caso, vamos dar uma olhadas em alguns exemplos BONS e RUINS disto:

- Bom: Clear Stage 1. (Conclua o 1 estagio)
- Ruim: Reach Stage 2. (Chegue o 2 estagio)

É preciso um pouco mais de trabalho para codificar uma conquista em que o jogador precisa concluir a fase, em vez de simplesmente chegar a próxima. Mas também é muito mais satisfatório para o jogador, e tem muito mais um olhar profissional. Também é **menos suscetível a problemas com jogadores que carregam save games ou savestates para ganhar conquistas em massa** `Nota do tradutor: Em outras palavras: Evitar Cheats`

- Bom: Complete o jogo.
- Ruim: Inicie o jogo.

Enquanto as conquistas baseadas em progresso são frequentemente brindes, geralmente é concordado aqui que uma conquista para começar o jogo é um pouco fácil demais, e não é nada memorável para o jogador. É apenas uma formalidade. E finalizando o jogo, no entanto, é frequentemente a parte do jogo mais memorável para um jogador, e completar um jogo é definitivamente uma conquista em si. É uma boa prática fazer essas conquistas como "Derrote o ultimo chefe/fase e conclua o jogo"

- Bom: Conclua as fases temáticas de gelo, ou Conclua as cinco primeiras fases, ou Conclua as dez primeiras fases.
- Ruim: Complete a fase 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11-200 (todas as conquistas separadas)

Uma das piores coisas que você pode fazer é criar spams de conquistas. Jogos de Puzzles são notáveis por esses tipos de problemas, porque as fases são curtas e existem centenas delas ou mais. Como um resultado, o feed da página principal fica com muitas micro-atualizações, que "spama" as conquistas das outras pessoas para baixo e pra fora da página principal rapidamente. A maneira de se mostrar mais profissional nessa questão é ampliar um pouco mais as conquistas, em grupos de fases. Por exemplo, se os estágios 1-10 são todas temáticas de fogo, e as fases 11-20 são temáticas de espaço sideral, você pode criar conquistas ao redor desses temas. Seja criativo.

### Progresso Baseado na história:

Os momentos mais memoráveis na história dos jogos muitas vezes não estão relacionados à coleção de itens ou sidequests, mas para cenas específicas relacionadas à história

**Exemplos:**

- O primeiro encontro com Pyramid Head na série Silent Hill
- Encontrar a verdade sobre Darth Revan em Knights of the Old Republic
- Encontrar o que irá acontecer no futuro em Chrono Trigger
- Lançar a vaca em Earthworm Jim.
- Praticamente qualquer morte de personagem.

A coisa que você tem que ter cuidado extra é com os spoilers. Se você pegar uma conquista baseada em progresso que tem um spoiler, contacte um desenvolvedor sobre isso. E os desenvolvedores, por favor, seja receptivo quando vier críticas construtivas! Além disso, o número e até a porcentagem deles irão variar de jogo para jogo--E depende muito de como o jogo é baseado na história.

### Progresso/Coletagem

Progresso/Coletagem é um híbrido comum. Não apenas em você coletar um item, mas também inicia uma cena memorável (e obrigatória).

**Exemplos**

- Obter a Master Sword em Link to the Past, que sustenta a maldição em Lost Woods
- Encontrar a espada na praia em Link's Awakening, na primeira cena em que a coruja sábia fala com você.
- Pegar o seu Pokemon inicial, que acontece durante uma cena inicial, mas é um "ritual de passagem" para a maioria dos jogadores.

Conquistas nesta categoria híbrida podem oferecer muito mais satisfação porquer eles são Conquistas nesta categoria híbrida geralmente são mais satisfatórios pois eles desempenham um papel duplo. O jogador não está apenas pegando um item, mas também assistindo uma cena memorável e farturando uma conquista, tudo de uma vez. Que enxurrada de endorfina!

### Prós e Contras em Progresso

Conquistas em Progresso são garantidos ao jogador em uma jogada normal. Então, por que tê-los?

#### Prós

- Um jogador merece os pontos por jogar! Faça eles! Lembre, um monte de pessoas estarão jogando esses jogos pela primeira vez, e muitos jogos são um pouco dificeis para se zerar. Por que não devemos recompensar os jogadores por uma boa e normal jogada?

- Prêmios de progressão periódicos ajudam a encorajar os jogadores a completar um jogo.

- Alguns jogadores são mais casuais e não pretendem fazer muito mais do que zerar jogos neste site. Nem todo mundo sente a necessidade de platinar todos os jogos no modo Hardcore. Muitos ficam perfeitamente felizes em conseguir qualquer conquista que possam ter durante uma jogada normal, e não há nada de errado com isso.

- Algumas cenas são tão memoráveis que merecem conquistas próprias! As pessoas que cresceram com esses jogos e os amam, tem o costume de procurar essas cenas em listas de conquistas, e isso pode apenas aquecer seu coração quando elas perceberem que isso foi reconhecido.

- Conquistas de progresso ajudam outras pessoas no site a avaliar a distância de um jogador em um jogo, parecido com o [Estado de Presença](/pt/developer-docs/rich-presence.html). Nós podemos "soltar uma linha" para o jogador e dizer: "Boa sorte!" porque sabemos que a próxima parte é bem complicada. Encoraja a comunidade a interagir.

- A ordem importa! Conquistas em Progresso podem nos dizer muito sobre o progresso apenas pela ordem que elas ocorram. Se você ativar aquela conquista de boss opcional e conseguiu um milhão de dolares, então você está fazendo todas as sidequests, isso é muito menos impressionante do que se você conseguir tirá-lo bem antes do meio do jogo. Em outras palavras, conquistas em progresso nos permite mostrar um pouco! Podemos mostrar ao mundo que podemos vencer o chefe final antes de chegarmos ao nível 10, ou que podemos finalizar o Expert Mode antes de ir primeiro no Facil e Normal. **Pode até revelar se usamos falhas ou truques para pular certas partes do jogo**. Então, como você pode ver, conquistas em progresso tem grande SINERGIA com outros tipos de conquistas.

- Esses tipos de conquistas são as mais faceis de codificar e são geralmente livres de erros.

#### Contras

- Muitas Conquistas em Progresso podem saturar um jogo com 'brindes', e isto é uma Coisa Muito Ruim.

- Se todo o seu jogo não é nada alem do que esses tipos de conquistas, entao é apenas uma jogatina chata para os jogadores. Chegue a fase 2, Chegue a fase 3, Chegue a fase 4, Complete o Jogo. Estas as uma grande 'base' para você começar a adicionar conquistas de outras categorias, mas **não deixe que listas apenas com conquistas em progresso** se você pode ajudar com isso. Outra coisa além disso você apenas estará recompensando jogadores por fazer coisa que eles já fizeram um milhão de vezes antes.

## Sidequest/Conquistas Opcionais

Os jogos antigos, por si só, oferecem pouco ou nenhum incentivo para zerar um bonus, além de que é algo para fazer em um dia chuvoso depois de você ter zerado o jogo. Jogos antigos não tinham conectividade com a Internet. E eles não tinham aspectos sociais além de 2 jogadores, e talvez dizendo a seus amigos da escola que você vencesse alguma coisa. Mas agora, com o Retroachievements.org, nos podemos mostrar seus troféis antigos (mesmo que isso nos obrigue a refazer o que provavelmente já fizemos há muitos anos). Estes troféis são emblemas de honra. Você pode olhar as conquistas de outros membros e começar a entender o quão longe eles foram, o quão hábeis eles são. Junto com isso vem o respeito dos outros membros. Nós socializamos, nós parabenizamos uns aos outros por um trabalho bem feito. E nós somos uma boa compania.

### Sidequests

Muitas vezes há coisas que o jogador pode fazer que estão confinados às regras do jogo, mas não são necessárias para completá-lo. Em outras palavras, um desafio contruido para o jogo pelos desenvolvedores originais do jogo. Geralmente elas são divertidos, mas merecem ser ganhos porque elas requerem trabalho duro e pesistencia para ganhar. Você tem que caminhar em uma corda bamba bem entre se jogadores dedicados são propensos a fazer algo, vs. se o objetivo é estupido. As pessoas terão visões diferentes sobre isso, então fortaleça-se.

Muitas vezes, esses tipos de conquistas são até Easter Eggs ou coisas que o jogador nunca soube que existiam em toda a sua vida! Muitos jogadores adoram esses tipos de conquistas. Provavelmente porque eles acabam conhecendo algo novo sobre um jogo que eles cresceram jogando, ou talvez por perceber que aquele segredo do jogo que "só ele conhece" está sendo suportado aqui. **É muito importante para nós desenvolvedores conhecer MUITO BEM o jogo antes de criar um set de conquistas.**

**Exemplos de Sidequests:**

- Entregando caudas para o Coletor de Caudas em Final Fantasy IV.
- Encontrar ao dono do Item Insignificante em Earthbound.
- Entregar o "Jerky" para o Rei em Guardia Castle.
- Fazer a sidequest do Anju em Majora's Mask.
- Aprender sobre o passado de Wrex em Mass Effect
- Escoltar Uma pessoa muito Importante em Flashback: The Quest for Identity.
- Descobrir uma sala secreta.

Sidequests são mais frequentemente encontrados em RPGs, mas especialmente nesses dias, sidequests são encontrandas em quase todos os gêneros. Mantenha seus olhos abertos, jogos de plataforma pode tem uma ou três sidequests. Os jogos da série Kirby por exemplo, tem muitas salas e áreas escondidas. Muitas vezes, sidequests acabam com "ganhando um item" no qual acaba sendo um hibrido: Sidequest/Coletagem.

### Conquitas Opcionais

- Chefes Opcionais
- Concluir o desafio de uma dungeon (Que é um híbrido de Sidequest)
- Completar o Modo Expert (que é um híbrido de progressão)
- Completar um desafio secreto.
- Conseguir a exceção de de conseguir pegar um item de um monstro. (Pegar um item raro)
- Completar o jogo com um personagem opcional.
- Conseguir uma pontuação alta
- Conseguir coisas que apenas são desbloqueadas em uma segunda jogatina
- Modos de jogos que são apenas desbloqueadas em multiplas jogatinas
- Ver finais opcionais
- Colocar códigos para deixar o jogo mais dificil (Passwords e senhas)

Estes são os criadores do jogo esperando que você goste de seu jogo o suficiente para continuar voltando para mais, mesmo depois que esses créditos terminarem. Eles estão tentando recompensar o jogador por completar seu jogo e criar alguma forma de satisfazer uma segunda jogatina. Se os criadores do jogo tem problemas de fazer essas coisas como parte integral do jogo, nos como desenvolvedores de conquistas devemos reconhecer esses desafios e criar conquistas apropriadas para pelo menos alguns deles.

Chrono Trigger, Chrono Cross, and Star Ocean: The Second Story são famosos por isso. De fato, muitos jogos fazem isso. Se você não tem certeza se o seu jogo tem modos extras ou desafios, tenha certeza de fazer alguma pesquisa e chegar alguns FAQs. Ou perguntar na nossa comunidade, muitos de nós somos experts nos jogos que são suportados aqui.

### Prós e Contras de Sidequests/Opcionais

Conquistas de Sidequests/Opcional fazem complementos fantásticos para Conquistas de Progresso.

#### Prós

- Isto é uma mão-na-roda de fazer conquistas. As chances são, uma boa parte das conquistas que você irá fazer serão desta categoria. Todos os jogos tem coisas opcionais para se fazer. Como coletar todas as moedas em uma fase! Ganhar 9 vidas! Criar conquistas com esse tipo de conteúdo é facil, e recompensar o jogar pela sua dedicação.

- Criadores de jogos amam jogadores apreciativos. Eles adoram quando os jogadores se incomodam em procurar fundo em seus jogos, apreciam seu trabalho duro, caso contrário, não veríamos coisas 'divertidas' escondidas em jogos como Easter Eggs, cenas bonus, etc. Se um criador de jogos recompensa os jogadores por fazer isso, por nós não? Nos desenvolvedores devemos reconhecer que o jogador foi além.

- Os jogadores adoram contar aos seus amigos quando encontram algo incomum e fora do comum em um jogo. Neste site, eles podem mostrar aos seus amigos que eles realmente mataram o 'sapo amarelo' raramente visto no pântano, ou encontar o portal para a 'dimensão misteriosa'. Se nos incluimos essas curiosidade em nossa lista de conquistas, nós mostramos aos jogadores que estamos "no conhecimento" que cria confiança de que podemos guiá-los competentemente através do jogo.

- Conquistas de Sidequests/Opcionais dão aos jogadores algo para se esforçar por depois que eles zerarem o jogo.

- Esses tipos de conquistas podem frequentemente serem ganhados em qualquer tempo e não estão em um cronograma programado. Jogadores sentem uma corrida extra de endorfinas quando aparece uma conquista que eles não esperavam, mas foi conquistada.

- Esses tipos de conquistas são geralmente faceis de fazer, segundo, apenas para conquistas de estilo de progresso

#### Contras

- Alguns jogadores não se importam em explorar além de uma jogatina típica do que ofecere, então uma alta porcentagem desses tipos de conquistas em um jogo pode deixar o jogador abaixo da recompensa. (Este tipo de jogador é um pouco raro em um site concentrado em conquistas.)

- Algumas pessoas podem sentir um desafio específico muito difícil, mesmo se é algo que os desenvolvedores do jogo original incluiram no jogo para os jogadores conseguirem.

- Quando você cria uma conquista de Sidequest/Opcional para, digamos, fugir de 999 batalhas (ou outras conquistas de maximizar o status), você corre o risco de que as pessoas neste site não sintam que essa conquista em particular ofereça um desafio e é apenas um grind (grind é quando se há repetição de uma parte para se ganhar experiência). Conquistas como essas podem muito bem acabar sendo envias para o "Não-oficial", a menos que sirvam a um segundo propósito como em Final Fantasy V quando correr de batalhas pode melhor uma arma chamada 'Chicken Knife'. Isto tem SINERGIA com o jogo, ao contrário de criar uma conquista baseada no aumento de nível que não tem utilidade.

## Conquistas baseadas em coletas

A maioria das conquistas baseadas em coleta são opcionais, a menos que os itens em si sejam MacGuffins, que, nesse caso, cairiam diretamente em Progressão / Coleção.

**Exemplos:**

- Encontrar os chapéus de Mickey escondidos no cenário para obter 1 vida em Aladdin (Mega Drive).
- Encontrar itens excepcionalmente bem escondidos
- Bestiários.
- Desbloquear um personagem opcional.
- Maximizar dinheiro / kills / status.
- Encontrar todas as maneiras diferentes de morrer em jogos como Prince of Persia ou Shadowgate.
- Abrindo todos os baús do tesouro em um jogo / encontrando cada powerup.
- Todos os itens / Coletando 99 ou 255 (etc.) de um item.
- Capturando todos os Pokemon (qualquer coleção de monstros, na verdade.)

Se o jogo acompanhar uma estatística, o desenvolvedor do jogo está praticamente desafiando você a maximizá-lo. Agora, você pode ser esse tipo de jogador, e você pode não ser. Você tem que perguntar a si mesmo, como um desenvolvedor, se os outros jogadores provavelmente obterão 9999 mortes de um inimigo, mesmo que você não o faça. As vantagens disso são que as pessoas que normalmente não fazem isso sempre têm algo para voltar e trabalhar quando sentem vontade de jogar novamente. A desvantagem é que outros jogadores que normalmente não irão tão longe e talvez não o faça, mas também sentem que precisam PLATINAR rapidamente todos os jogos (raros de encontrar), vão reclamar. Se você receber reclamações suficientes, você pode querer reduzir 9999 algo mais razoável, como 500. Se ninguém está se divertindo com uma conquista, não é no espírito de jogar ou fazer uma conquista.

Você tem que usar seu melhor julgamento aqui e pensar no que o jogador mais gosta. Como regra geral, é melhor ter algumas conquistas paralelos / opcionais do que nenhuma. Mas com um pouco de esforço extra, essas conquistas podem tornar sua lista muito memorável.

Em seguida, é hora de arregaçar as mangas como desenvolvedores e ser REALMENTE criativos quando os próprios desenvolvedores desafiam o jogador além das regras do jogo.

## Conquistas divertidas

Este tipo de conquistas geralmente vale apenas alguns pontos, mas eles ainda são divertidos

**Exemplos de diversão:**

- Deixando o relógio marcar 99:59 em Valkyrie Profile.
- Fundos interativos, como cutucar o cadáver pendurado no estágio 1 de Castlevania: Bloodlines.
- Cozinhando o hamster no microondas em Maniac Mansion.
- Assistindo o apocalipse em Majora's Mask.
- Encontrando John Romero em Doom 2.
- Às vezes, criadores de jogos adicionam easter eggs (segredos) divertidos. Para entreter o jogador com 'e se isso estivesse ali?'. Mais uma vez, é nosso trabalho, como desenvolvedores, reconhecê-los e apoiá-los o máximo que pudermos.

## Desafios

Uma coisa que você deve lembrar sobre os jogadores retrô - e os jogos que eles jogam - é que a maioria de nós já jogou esses jogos um milhão de vezes antes. Esta é a mesma velha música e dança para a maioria de nós, e muitas vezes precisamos de motivação para fazê-lo novamente. Alguns de nós podem terminar o Contra sem perder uma única vida. Bem, agora é a nossa chance de provar isso!

Quero dizer, pense nisso: antes deste site, a única maneira de provar que você pode fazer uma corrida impecável de Contra era convidar um amigo, sentar e mostrar a ele, ou descobrir software de gravação e fazer um vídeo no YouTube. Mas mesmo assim, muitos desses vídeos são manipulados para se parecer com jogos perfeitos. Este site, no entanto, tem o modo Hardcore, que ajuda a indicar que ninguém está trapaceando.

Você pode ter Conquistas progressivas e Sidequest / Conquistas Opcionais, mas se você quiser criar uma lista de conquistas que seja realmente ótima, você precisa de pelo menos algumas Conquistas de Desafio. Tente pensar em todos os jogos que você jogou aqui neste site. Quais são algumas das realizações mais memoráveis? Eu quase posso garantir que eles eram Conquistas de Desafio. Existem exceções à regra, é claro, mas o jogador típico não vai se lembrar com carinho, Concluir a fase 2-6', ou 'Chegar ao nivel 30'. Eles são mais propensos a se lembrar com carinho de realizações que fizeram de seus jogatinas uma experiência única, como ...

- passar o jogo inteiro sem nunca pegar um powerup ou moeda
- derrotar um chefe sem ser atingido
- terminar um estágio sem perder uma vida

Isso é o que torna este site tão especial, e o que faz das conquistas algo mais do que apenas vencer um jogo.

Mesmo os críticos mais contundentes que odeiam a idéia de realizações podem dizer: "Bem, exceto por este. Esse foi bom". E eu garanto que UM exemplo de que eles estão falando é uma conquista de desafio, algo que desafiou o jogador além do próprio jogo.

Um bom desenvolvedor de realizações manterá seus olhos abertos, sua inteligência sobre eles e seus sentidos afiados ao desenvolver um jogo, procurando por desafios bons e incomuns. Eles podem perceber algo no jogo que é um feito difícil.

### Desafios de Speedrun

Os timers apresentam uma pressão adicional que os jogadores podem nunca ter sentido antes enquanto jogam seus jogos favoritos. Poucas coisas fazem o coração bombear mais do que um relógio imponente. Adicione um elemento de temporizador, e um jogo que anteriormente era tão fácil que eles poderiam vencê-lo de olhos vendados poderia de repente ser transformado no maior desafio de jogo de suas vidas.

**Exemplos de desafios do Speedrun:**

- Concluindo um jogo em menos de uma hora.
- Limpando um estágio específico em menos de três minutos.
- Passe o temporizador em um certo número de segundos.
- Mate 30 morcegos durante a sequência de fuga.
- Colete 99 moedas bônus antes que a tela bônus desapareça.
- Vá do ponto A ao ponto B antes que o dia mude para a noite.
- Leaderboard - Complete o jogo com o menor tempo possível.
- Leaderboard - Complete um determinado estágio com o menor tempo possível.

Um desenvolvedor pode querer ir ao YouTube ou Twitch e ver o quão rápido as pessoas estão terminando um jogo (E, por favor, ignore o TAS - "Tool Assisted Speedruns"). Alguns corredores profissionais de velocidade são tão rápidos que o jogador típico não terá a menor chance de competir, mas você deve ser capaz de encontrar um ponto médio entre o melhor tempo dele e o seu. E se você não consegue descobrir um bom momento para desafiar os jogadores aqui, é para isso que os Leaderboards são - Transforme isso em uma competição! Na verdade, alguns de seus favoritos speed-runners podem vir a este site e colocar seus tempos.

Você saberá quando você está enfrentando uma conquista de pressão quando as palmas das mãos estão suando e você se vê nervosamente olhando para o cronômetro. Como eu disse antes, nada grita: "Atenção!" mais alto que um cronômetro, especialmente quando os desenvolvedores começam a tecer esse tipo de conquista com OUTROS tipos de conquistas (e até placares de líderes) durante uma parte cronometrada de um jogo. Os Desafios Temporizadores têm uma quantidade insana de sinergia com outros tipos de conquistas.

### Desafios de Limitação

**Exemplos de Desafios de Limitação:**

- Limpar uma batalha ou até mesmo um jogo inteiro com todos os personagens de uma classe específica. (Um exemplo famoso disso é terminar o Final Fantasy original com um grupo de White Mages.)
- Derrote um chefe final sem equipamento.
- Conclua um estágio sem nunca saltar.
- Resolva um quebra-cabeça em apenas dois movimentos.
- One-hit KOs.
- Jogos de baixo nível (LLGs).
- Nenhuma conquista de sucesso.
- Nunca aperte em determinado botão durante um desafio.
- Nunca perca a invencibilidade através de uma etapa inteira do Mario 3 encontrando estrelas suficientes.
- Derrote um certo inimigo sem usar um certo movimento.
- Alcançando Ganon em Legend of Zelda, sem espada.
- Derrote um certo inimigo SOMENTE usando um certo movimento.
- Tropeçar no caminho através de um labirinto, enquanto bêbado / confuso.
- Limpe o jogo com uma doença no status.

Os sites da comunidade construídos em torno de determinados jogos são um recurso fantástico para esses tipos de realizações. Eles terão uma boa idéia sobre o que é possível e impossível, e provavelmente escreveram perguntas frequentes discutindo maneiras alternativas e desafiadoras de jogar o jogo inteiro.

Muitas vezes, porém, não haverá comunidade. Não há perguntas frequentes. Nenhum quadro de mensagens. E talvez nem vídeos úteis. Nesses casos, você precisará ser uma pessoa de ideias para criar maneiras novas e interessantes de desafiar o jogador. Esteja ciente de que esse tipo de conquista requer muita prática, tempo e experiência para criar.

O jeito aqui é ser criativo! E lembre-se de mantê-lo divertido!

### Desafios de pontuação

**Exemplos de desafios de pontuação:**

- Completando um jogo ou nível com a menor pontuação possível.
- Complete um minigame com uma pontuação perfeita (não apenas no topo do ranking da CPU).
- Leaderboard - Complete o jogo com a maior pontuação / mais dinheiro / melhor contagem de mortes / etc. possível.
- Leaderboard - Complete um estagio com a maior pontuação / mais dinheiro / melhor contagem de mortes / etc. possível.

### Prós e Contras dos desafios

As conquistas de desafio são a sua chance de mostrar aos jogadores como jogar seus jogos favoritos de maneiras diferentes, únicas e até alucinantes. Embora essas conquistas possam dar vida a um conjunto de realizações que, de outra forma, é monótono, você geralmente quer que apenas um pequeno grupo delas esteja na sua lista final.

**Prós**

- Jogadores hardcore amam deixar suas marcas nesses tipos de conquistas.

- Se alguns jogadores são muito hardcore, você pode encontrar um meio feliz implementando o Leaderboards, que satisfaz tanto os caçadores de conquistas ocasionais quanto os jogadores hardcore de uma só vez.

- Esta é a sua chance de ser muito criativo e criar novos desafios para jogadores que eles nunca esperaram. Isso pode ser uma surpresa agradável e realmente tornar suas listas memoráveis.

**Contras**

- Esses tipos de realizações exigem uma boa quantidade de criatividade, embora haja muitas maneiras de pesquisar, maneiras incomuns de jogar, observando coisas como corridas de velocidade.

- Pode exigir uma pesquisa profunda.

- Estes podem ser notoriamente difíceis de codificar. Eles exigem que você faça muitas anotações de código, faça toneladas de observações mecânicas do jogo e, muitas vezes, eles exigem testes de erros antes mesmo de funcionar. Na verdade, você pode nem estar pronto para enfrentar conquistas como essa até ter alguns jogos em seu currículo com um conjunto de conquistas básicas. Felizmente, as Conquistas do Desafio sempre podem ser adicionadas mais tarde.

## Fontes externas

- [Best practices achievement creation guide](http://www.voidcn.com/article/p-gmokauqn-bgh.html) escrito por Jeff Sullivan, gerente de contas de desenvolvedor do XNA Developer Connection (XDC) sobre Conquistas do XBox 360. `texto em inglês`
- [Make them Work for it ](https://gamedevelopment.tutsplus.com/articles/make-them-work-for-it-designing-achievements-for-your-games--gamedev-3371), um guia de design de conquistas escrito por Darran Jamieson em 1º de janeiro de 2013. `texto em inglês`
- [The Achievement Machine: Understanding Xbox 360 Achievements in Gaming Practices](http://gamestudies.org/1101/articles/jakobsson) - por Mikael Jakobsson `texto em inglês`
