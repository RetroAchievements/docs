# Primeiros Passos como um Desenvolvedor de Conquistas

**Link para o texto em inglês:** [Getting Started as an Achievement Developer](Getting-Started-as-an-Achievement-Developer)

---

**Bem-vindo ao mundo do desenvolvimento de conquisttas!**

## Conceitos básicos

Tecnicamente, **uma conquista (no contexto de RetroAchievements) é um grupo de condições que devem ser cumpridas em um determinado _frame_ do jogo.**

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

Para começar, execute o RAGens e faça o login quando solicitado. Em seguida, use File -> Open e selecione qualquer ROM que você deseja encontrar conquistas.

## Memory Inspector

Agora você deve ter sua janela principal executando o Sonic. Existem 3 outros diálogos que usaremos, que podem ser encontrados em RetroAchievements no menu. Em primeiro lugar, tratamos primeiro o Memory Inspector:

![memory_inspector](https://user-images.githubusercontent.com/8508804/33128665-55ae87e2-cf74-11e7-8085-17b3dd528b64.png)

O Memory Inspector pode ser usado para encontrar endereços na RAM para que possamos usar. Essencialmente, você está em uma caçada ao tesouro para locais de memória - este diálogo irá ajudá-lo a examinar e filtrar a RAM do jogo enquanto o jogo está sendo executado.

**NOTA: Se você quer uma explicação passo a passo de vídeo para encontrar endereços de memória, [este video](https://www.youtube.com/watch?v=8nYb_5cgQHY) esse vídeo pode ser muito útil**. `Vídeo em inglês`

Para iniciar ou reiniciar um teste, clique em **New 8-bit Test** perto do meio na parte superior.

Para manter as coisas simples, começaremos procurando pelo endereço de memória que contenha o número de anéis que coletamos. Nossas etapas serão as seguintes:

1. Carregue a ROM e comece um novo jogo.

2. Redefinir a caixa de diálogo de memória: clique em **New 8-bit Test**.

3. Retorne ao jogo e altere o número de anéis na memória. Por exemplo, colete um anel.

Na caixa de diálogo de memória, agora queremos filtrar por valores que sejam "maiores do que valores anteriores" (símbolo>). Selecionamos isso, então, clique em **Filter**.

Cada vez que você executa 3 e 4, o número de possibilidades ou 'candidatos' diminuirá. Continuaremos a fazê-lo até que o número de candidatos alcance um número muito pequeno (o menor possível), pode demorar 4-5 tentativas. Em seguida, podemos clicar na janela de resultados e monitorar o endereço de memória no visor de memória na parte inferior. Continue usando o jogo e você deve ver os valores em mudança de memória à medida que você coleciona anéis. Se você não, ou se algo não parece direito, tente outro valor. Com o primeiro Sonic the Hedgehog, o endereço da memória para o número de anéis deve ser 0xfe20.

- **Nota**: Usando estados de salvamento (F5 para salvar o estado, F8 para carregar o estado, F6-F7 para alternar o estado a ser usado), você pode alternar entre estados diferentes, permitindo alterar o que está na RAM e usar isso para filtrar fora candidatos ruins. Você pode procurar por valores que permanecem os mesmos (ou seja, se você sabe que o valor não mudou, use =) ou valores diferentes (use 'not equal', symbol! =).

- **Nota**: Infelizmente nenhuma garantia de jogo para jogo sobre como os desenvolvedores armazenaram seus dados (decimais de codigo binário de 4 bits, 8 bits, 16 bits, negativos / invertidos, ou seja, usando 0xff / 0xffff para representar 'set' , ou simples, aleatoriamente), mas, eventualmente, você deve encontrar um bom endereço. Observe se você está lutando para encontrar bons valores, postar o fórum de Ajuda de desenvolvimento [RetroAchievements.org Development Help forum ](http://retroachievements.org/viewforum.php?f=15)ou o servidor [ RetroAchievements Discord server](https://discord.gg/dq2E4hE). Há muitas pessoas que ficarão muito felizes em ajudar!

- **Dica**: se você quiser experimentar a memória, tente inserir novos valores diretamente no visualizador de RAM. Isso pode ter efeitos devastadores no jogo, ou pode fazer exatamente o que você espera, (ou nada!) Pode ser útil, para ver se você pode inserir um valor e obter o resultado esperado. Use com cuidado!

Quando você encontrou um endereço com o qual você está feliz, você pode escrever uma nota curta para o que é e clicar em Salvar nota, isso irá armazená-lo no banco de dados e será restaurado automaticamente na próxima vez que você carregar o visor de memória para isso jogo onde quer que esteja! Note que depois de clicar em "Salvar nota", a nota será armazenada automaticamente no banco de dados, e compartilhada para que todos os desenvolvedores compartilhem o acesso a essas notas de memória. Todos serão baixados de novo quando você carregar uma ROM. Se você tentar substituir uma nota, verificará com você primeiro antes de enviar.

Você pode encontrar [Dicas de Escavação de Memória aqui](Tips-and-Tricks#memory-digging-tips).

## Achievement Sets

OK para que a localização da memória para o número de anéis seja armazenada em `0xfe20` - nota para um não programador, estamos lidando com um [sistema de numeração hexadecimal](https://simple.wikipedia.org/wiki/Hexadecimal_numeral_system) que pode ser assustador, mas não se preocupe, essencialmente são apenas números e letras em vez de apenas números, e não esquecendo `0x` no início para mostrar que é uma localização de memória em hexadecimal. Encontramos um endereço em que nos interessamos e armazenamos usando **Save Note**. Agora queremos criar uma nova conquista.

Vá para o **RetroAchievements** no menu, escolha **Achievement Sets** e você verá esta caixa de diálogo:

![achievement_sets](https://user-images.githubusercontent.com/8508804/33129271-7d562cbc-cf76-11e7-8346-c19400975d40.png)

Aqui agrupamos todas as conquistas que conhecemos em três conjuntos:

1. Core Achievements (o principal, conjunto de conquistas público),

2. Unofficial/User Achievements (público, mas não irá premiar pontos, é apenas para outros desenvolvedores revisarem),

3. Local Achievements (pessoais no seu PC).

Na caixa de diálogo Conquistas, clique em **Local Achievements** (canto superior esquerdo), depois em **Add New Achievement** (inferior esquerda). Isso irá adicionar uma entrada em branco à lista no centro. Clique duas vezes nele: se ainda não está aberto, isso deve selecioná-lo e abrir a caixa de diálogo Editor de conquista (**Achievement Editor**).

## Achievement Editor

O Achievement Editor se parece com isso:

![achievement_editor](https://user-images.githubusercontent.com/8508804/33130013-0eb07d96-cf79-11e7-8f73-6d737dfe5e16.png)

Esta é a última caixa de diálogo onde reunimos todos os dados juntos. A maioria dos principais campos são auto-explicativos, ou seja, Title, Description, Points. A principal é a parte de 'Requirements' (Requisitos).

Digamos que queremos adicionar uma conquista para colecionar um certo número de anéis. Digamos 15 anéis para simplificar. Depois de preencher os campos na parte superior e selecionar um ícone adequado (neste exemplo, usamos o distintivo de troféu de ouro (00136), mas você pode carregar um novo), precisamos preencher os Requisitos. Temos um requisito, **que o número de anéis é pelo menos 15**. O próximo clique é **Add New Requirement**.

Ao clicar neste botão, serão adicionados vários valores padrão à lista Requisitos. Esses padrões apenas garantem que algo relativamente sensível seja adicionado à lista. Por enquanto, ignorando o campo 'Special?'. Quando clicamos em criar, o valor de memória padrão será o valor que você deixou pela última vez na caixa de diálogo de memória.

Em seguida, alteraremos esses valores para o seguinte:

- **Size**: `16 bits`.

- **Memory**: `0xfe20`.

- **Cmp:** `>=` - esta é a comparação a fazer. Podemos ter alguma comparação aqui, mas é sensato ter "maior ou igual". Isso é importante porque, se conseguimos 10 anéis, então uma caixa de super anel para ter 20, perderíamos exatamente 15 anéis.

- **Type**: `Value` - estamos comparando esse valor de memória com um valor fixo: 15.

- **Size**: `Empty` - isso só é relevante ao comparar a memória com a memória.

- **Mem/Val**: `15` - o número de anéis necessários: o valor com o qual estamos comparando a memória

- **Hit Count**: `0` - ignore isso por enquanto, é útil para quando algo precisa acontecer um certo número de vezes.

Com esse conjunto, não temos mais condições para adicionar, então retornamos à caixa de diálogo **Achievements**. Para estar seguro, devemos salvar nosso progresso ao clicar em **Save Local**! Isso salva tudo para arquivar localmente para garantir que não perderemos nenhum progresso.

- **Nota**: geralmente as conquistas têm mais de um requisito para evitar que ele acione em um momento errado (ou seja, jogando o modo de demonstração). Neste exemplo, estamos usando apenas um requisito apenas para simplificar a explicação. Veja mais dicas de [criação de conquistas aqui](Tips-and-Tricks#achivement-creation-tips).

## Testando a conquista

Agora podemos "ativar" essa conquista localmente ao clicar **Activate** no lado direito. Isso começará a monitorar esses locais de memória e atribuirá a conquista uma vez que todas as condições são verdadeiras. Agora, podemos prosseguir e testar para ver se essa conquista funciona!

![testing_achievements](https://user-images.githubusercontent.com/8508804/32601362-83dcb788-c529-11e7-8df9-b79038408909.png)

Se pressionarmos no jogo Esc, você verá a conquista aparecer como uma demonstração do que seria semelhante à sobreposição no jogo!

![testing_achievements2](https://user-images.githubusercontent.com/8508804/32601363-83fced8c-c529-11e7-885f-97d64b0384e5.png)

## Evitando bugs

O cheevo (**achievement**) que criamos neste tutorial é muito simples, tem apenas uma condição: "anéis coletados" >= 15 ". Mas o endereço para gravar o número de anéis coletados também é usado quando o jogo é executado em "modo de demonstração" (AI jogando o jogo depois de esperar um pouco na tela de título). Então, se Sonic coletar 15 anéis no modo de demonstração, essa conquista irá desencadear, o que é indesejável.

Então, aqui estão algumas dicas que você sempre deve ter em mente ao criar suas conquistas:

- **Nunca use/Evite ao máximo usar apenas uma condição**. Caso contrário, a conquista provavelmente irá aparecer na hora errada. Este é o erro mais comum cometido por um desenvolvedor.

- **Use `PauseIf` demo mode (modo demonstração)**: Se o jogo tiver um modo de demonstração, certifique-se de encontrar o endereço para ele e adicionar o modo! = Demo ou algo semelhante em suas conquistas. Mais informações sobre PauseIf na página Características da lógica de conquista.

- **Use `PauseIf` usando macetes (cheat codes)**: se o jogo tiver um código secreto de macete para aumentar vidas, selecionar fases, etc. Certifique-se de encontrar os endereços para isso e adicionar algum tipo de proteção em suas conquistas. OK, talvez não seja um tópico muito básico, mas você deve ter em mente ao criar um conjunto de conquistas real.

## OK, o achievement funciona. E agora?

Depois de testarmos que a conquista funciona localmente, há um processo de confirmação em duas etapas:

1. Primeiro, na caixa de diálogo Conquistas, selecionamos nossa conquista e pressione **Commit Selected** e concordamos com a caixa de diálogo. Isso irá empurrar nossa conquista para o servidor e armazená-lo em **Unofficial User-submitted Achievements**

2. Para que a conquista seja apreciada por muitos, ela deve ser empurrada para o conjunto Core Achievement (**Core Achievement set**). Para as suas poucas primeiras conquistas, ele deve ser revisado por um membro da equipe antes que possa ser empurrado para o Core. Depois de ter carregado um conjunto de conquistas para o Unofficial, você precisa entrar em contato com um administrador que, usando seu julgamento e padrões pessoais de qualidade, aprovará o conjunto e lhe dará um status de desenvolvedor no site (**Developer status**). Nesse caso, você pode empurrar qualquer conquista para o Core você mesmo.

Naturalmente, é melhor enviar apenas conquistas únicas e interessantes no grupo de conquistas principais. Se houver duplicatas no grupo Core, as duplicatas adicionadas mais recentemente serão manualmente moderadas e excluídas. Se você não quer sua conquista no grupo Core, ou você acha que pode não ser apropriado para o grupo Core (ou seja, se está incompleto, ou se às vezes ele parece se desencadear quando não é suposto, como quando o jogo está mostrando um demo), deixe-o na seção Não oficial / Seção submetida pelo usuário.

## Próximos passos

Agora que você sabe como usar o Memory Inspector e o Editor de Conquistas. É hora de aprender novas técnicas e práticas:

- Para refinar a lógica de sua conquista, você pode ver quais recursos você possui na página [Achievement Logic Features](Achievement-Logic-Features-pt_BR).

- Você pode aprender observando as conquistas existentes que outros desenvolvedores fizeram com uma explicação extra na página [Real Examples](Real-Examples-pt_BR).

- Você também pode ver alguns exemplos genéricos na página [Achievement Templates](Achievement-Templates-pt_BR).

Diverta-se! Obrigado pela leitura!
