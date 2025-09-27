---
title: Começando como Desenvolvedor de Conquistas
description: Aprenda o básico sobre criar conquistas para jogos, incluindo encontrar endereços de memória, criar condições e testar suas conquistas
---

# Começando como Desenvolvedor de Conquistas

**Link para o texto em inglês:** [Getting Started as an Achievement Developer](/developer-docs/getting-started-as-an-achievement-developer)

**Bem-vindo ao mundo da Criação de Conquistas!**

## Conceitos básicos

Tecnicamente, **uma conquista é um grupo de condições que devem ser atendidas em um _frame_ (quadro) específico do videogame**.

Quando você inicia um jogo em um emulador com o recurso RetroAchievements, o emulador sempre verifica se essas condições são atendidas no _frame_ atual. Quando todas as condições para uma conquista particular são atendidas, esta conquista é ativada e o emulador deixa de verificar as condições para essa conquista.

O processo de criação de uma conquista envolve basicamente 3 etapas:

1. Encontrar um lugar na RAM do jogo onde a informação que você deseja é armazenada (exemplos: nível, barra de vida, tempo, moedas, segurando uma arma, obter um item, etc.).

2. Criar condições que devem ser cumpridas para ativar uma conquista.

3. Testar se a sua conquista está funcionando como esperado.

Provavelmente você voltará para os passos 2 e 3 muitas vezes para refinar a lógica de sua conquista.

Neste documento, veremos como realizar as etapas acima.

Depois de ter certeza de que sua conquista está funcionando nas condições desejadas, você pode enviá-la para o servidor. Veremos mais sobre isso adiante.

**Tutoriais em Vídeo**: o usuário Thoreau é um criador de conquistas experiente e criou uma série de vídeos mostrando todo o processo de criação de conquistas _em português_. Confira os [vídeos no youtube](https://www.youtube.com/playlist?list=PLWopuYilW8yEWcl53D6h4IBClLilbSqUg).

## Primeiros passos

Antes de começar, certifique-se de ter um emulador RA da página do [RetroAchievements Download Page](http://retroachievements.org/download.php) primeiro e crie uma conta para que você possa fazer login usando o emulador.

Neste guia, estaremos usando RAGens para demonstrar, e o jogo [Sonic the Hedgehog](http://retroachievements.org/Game/1). Estamos usando RAGens, mas o mesmo se aplica aos outros emuladores.

Para começar, execute o RALibRetro e faça login quando solicitado. Se você nunca usou o core Genesis Plus GX antes, você pode instalá-lo indo em Configurações -> Gerenciar Cores -> selecionando Sega Genesis no menu suspenso -> clicando em Download à direita do nome do core. Uma vez que o core esteja instalado, vá para Arquivo -> Selecionar Core -> Sega Genesis -> Genesis Plus GX. Agora que você tem o core selecionado, você precisará carregar o jogo. Vá para Arquivo -> Carregar Jogo e selecione a ROM do Sonic the Hedgehog (recomendamos usar ROMs No Intro por padrão).

## Inspetor de Memória

Agora você deve ter sua janela principal rodando o Sonic. Há 3 outras janelas que usaremos, que podem ser encontradas em **RetroAchievements** no menu. Primeiro vamos lidar com o **Inspetor de Memória**:

![memoryinspector](https://u.cubeupload.com/televandalist/meminspdocs1.png)

O Inspetor de Memória pode ser usado para encontrar endereços na RAM que usaremos. Essencialmente você está em uma caça ao tesouro por locais de memória - esta janela vai ajudá-lo a examinar e filtrar a RAM do jogo enquanto ele está rodando.

**NOTA: Se você quiser uma explicação em vídeo passo a passo sobre como encontrar endereços de memória, você pode [ver este vídeo atualizado](https://www.youtube.com/watch?v=7ZMlBVyHl5M).**
**Para outro recurso em vídeo, você pode [ver este vídeo mais antigo](https://www.youtube.com/watch?v=8nYb_5cgQHY). Ambos vídeos estão em inglês.**

Para iniciar ou reiniciar um teste, clique em **Reset** próximo ao topo à esquerda.

Para manter as coisas simples, começaremos procurando pelo endereço de memória que contém o número de anéis que coletamos. Nossas etapas serão as seguintes:

1. Carregue a ROM e inicie um novo jogo.
2. Resete a janela de memória: clique em **Reset**.
3. Execute o primeiro filtro: clique em **Filter Once**.
4. Retorne ao jogo e mude o número de anéis na memória. Por exemplo, colete um anel.
5. Na janela de memória, agora queremos filtrar por valores que são 'maiores que valores anteriores' (símbolo `>`). Selecionamos isso, então clicamos em **Filter** novamente.

Cada vez que você executa 4 e depois 5, o número de possibilidades ou 'candidatos' ficará menor. Continuaremos fazendo isso até que o número de candidatos chegue a um número muito pequeno (o menor possível), pode levar várias tentativas. Em seguida, podemos clicar na janela de resultados e monitorar o endereço de memória no visualizador de memória na parte inferior. Continue usando o jogo e você deverá ver os valores na memória mudarem conforme você coleta anéis. Se não acontecer, ou se algo não parecer certo, tente outro valor. Com o primeiro Sonic the Hedgehog, o endereço de memória para o número de anéis deve ser `0xfe20`.

### Notas e Dicas:

- **Nota 1**: Usando save states (Shift+F1-F10 para salvar states, F1-F10 para carregar states), você pode alternar entre diferentes estados permitindo alterar o que está na RAM, e usar isso para filtrar candidatos ruins. Você pode procurar por valores que permanecem os mesmos (ou seja, se você sabe que o valor não mudou, use `=`), ou valores que são diferentes (use 'não igual', símbolo `!=`).

- **Nota 2**: Infelizmente não há garantia de jogo para jogo sobre como os desenvolvedores armazenaram seus dados (4-bit, 8-bit, 16-bit, decimais codificados em binário, negativos/invertidos, ou seja, usando 0xff/0xffff para representar 'definido', ou simplesmente aleatoriamente). Se você estiver tendo dificuldade para encontrar bons valores, poste no [fórum de Ajuda ao Desenvolvimento do RetroAchievements.org](http://retroachievements.org/viewforum.php?f=15), ou [servidor Discord do RetroAchievements](https://discord.gg/dq2E4hE).

- **Dica**: Se você quiser experimentar com memória, tente inserir novos valores diretamente no visualizador de RAM. Isso pode ter efeitos devastadores no jogo, ou pode fazer exatamente o que você espera, (ou nada!). Use com cautela!

Quando você encontrar um endereço com o qual está satisfeito, você pode escrever uma breve nota sobre o que é e clicar em **Save Note**, isso o armazenará no banco de dados. Note que a nota será compartilhada com todos os desenvolvedores e será baixada novamente quando você carregar uma ROM. Se você tentar sobrescrever uma nota, ela verificará com você primeiro antes de enviar.

## Conjuntos de Conquistas

O local de memória para o número de anéis está armazenado em `0xfe20` - para um não-programador, estamos lidando com o [sistema numeral hexadecimal](https://simple.wikipedia.org/wiki/Hexadecimal_numeral_system) que pode ser intimidante, mas não se preocupe, são apenas números e letras em vez de só números, e não esqueça do `0x` no início para indicar que é um local de memória em hexadecimal. Encontramos um endereço que nos interessa e o armazenamos usando **Save Note**. Agora vamos criar uma nova conquista.

Vá para **RetroAchievements** no menu, escolha **Achievement Sets** e você verá esta janela:

![achievement_sets](https://u.cubeupload.com/televandalist/achlistdocs1.png)

Aqui agrupamos todas as conquistas que conhecemos em três conjuntos:

1. Conquistas Core (o conjunto principal, público),

2. Conquistas Não Oficiais/Usuário (públicas, mas não dão pontos: para revisão por pares),

3. Conquistas Locais (exclusivas para seu PC).

Na janela de Conquistas, clique em **Local Achievements** (topo à esquerda), depois **Add New Achievement** (topo à direita). Isso adicionará uma entrada em branco à lista no centro. Dê um duplo clique nela: se não estiver aberta, isso deve selecioná-la e abrir a janela do **Editor de Conquistas**.

## Editor de Conquistas

É assim que ele se parece:

![achievement_editor](https://u.cubeupload.com/televandalist/acheditordocs1.png)

Esta é a janela final onde juntamos todos os dados. A maioria dos campos superiores é autoexplicativa, ou seja, Título, Descrição, Pontos. O principal é a parte de 'Requisitos'.

Vamos adicionar uma conquista para coletar 15 anéis. Depois de preencher os campos superiores e selecionar um ícone adequado (neste exemplo usamos o emblema do troféu de ouro (00136), mas você pode fazer upload de um novo), precisamos preencher os Requisitos. Temos um requisito, **que o número de anéis seja pelo menos 15**. Clique em **Add New Requirement**.

Isso adicionará vários valores padrão à lista de Requisitos. Por enquanto, ignore o campo 'Special?'. Quando clicarmos em criar, o valor de memória padrão será o último valor que você deixou na janela de memória.

Em seguida, mudaremos esses valores para:

- **Size**: `16-bit` - usando 16-bit porque o valor pode exceder 255 (que é 0xff em hex)
- **Memory**: `0xfe20`
- **Cmp**: `>=` - esta é a comparação a fazer. É sensato ter "maior ou igual a" para não perder quando passarmos de 10 para 20 anéis com uma caixa super anel
- **Type**: `Value` - comparando este valor de memória com um valor fixo: 15 
- **Size**: `Empty` - só relevante ao comparar memória com memória
- **Mem/Val**: `15` - número de anéis necessários
- **Hit Count**: `0` - ignore por enquanto, útil quando algo precisa acontecer várias vezes

Com isso configurado, não temos mais condições para adicionar, então voltamos à **Janela de Conquistas**. Para segurança, salvamos nosso progresso clicando em **Save Local**!

## Testando a Conquista

Podemos 'ativar' esta conquista localmente marcando a caixa **Active** no Editor ou selecionando a conquista em Achievement Sets e clicando em **Activate Selected**. Isso começará a monitorar esses locais de memória e concederá a conquista quando todas as condições forem verdadeiras.

![testing_achievements](https://u.cubeupload.com/televandalist/achtestdocs1.png)

Se pressionarmos `Esc` no jogo, veremos a conquista aparecer como demonstração de como ficará na sobreposição do jogo!

![testing_achievements2](https://u.cubeupload.com/televandalist/achtestdocs2.png)

Embora a conquista funcione nos testes, uma conquista com essa lógica não está pronta para lançamento oficial. Primeiro, ela tem apenas uma condição: "anéis coletados >= 15". O problema é que o endereço de memória usado também é afetado no "modo demo" (IA jogando após esperar na tela título). Então, se Sonic coletar 15 anéis no modo demo, a conquista será ativada indevidamente.

## Dicas Importantes

Algumas dicas ao criar suas conquistas:

- **~~Nunca~~ Evite fazer conquistas com apenas uma condição**. Caso contrário, provavelmente acionará no momento errado. Este é o **erro mais comum**

- Se o jogo tem **modo demo**, certifique-se de [encontrar seu endereço](/developer-docs/tips-and-tricks#finding-the-address-for-demo-mode) e adicione uma condição para evitar ativação nele. Você precisará usar PauseIf e ResetIf.

- Use **PauseIf** para códigos de trapaça: Se o jogo tem códigos para aumentar vidas, selecionar fases etc., adicione proteções.

- **Evite criar conquistas apenas para entrar em fases**. Prefira conquistas para completar fases, [como neste modelo](/pt/developer-docs/achievement-templates#termine-nível-n).

- Para itens únicos, adicione condições para garantir que o jogador obteve o item no local correto, [como neste modelo](/pt/developer-docs/achievement-templates#colete-um-item-em-um-nível-específico).

- **Evite muitas conquistas simples que requerem esforço mínimo**. Exemplo do que **NÃO** fazer: pegar uma moeda no Super Mario Bros.

- Conheça os [conceitos indesejados no design de conquistas](/guidelines/developers/code-of-conduct#unwelcome-concepts).

- **Seja criativo**. Conquistas que cobrem características únicas do jogo são mais bem-vindas.

## Próximos Passos

Agora que você conhece o básico, aprenda novas técnicas:

- Estude [Exemplos Reais](/pt/developer-docs/real-examples) de outros desenvolvedores

- Veja exemplos genéricos em [Modelos de Conquistas](/pt/developer-docs/achievement-templates)

- Continue sua jornada seguindo os passos em [Como se Tornar um Desenvolvedor de Conquistas](/pt/developer-docs/how-to-become-an-achievement-developer)

Divirta-se!
