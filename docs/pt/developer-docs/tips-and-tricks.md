# Dicas e Truques

**Link para o texto em inglês:** [Tips and Tricks](/developer-docs/tips-and-tricks)

---

## Dicas para Convenção de Nomes

- **Sem símbolos**: Não use caracteres acentuados / especiais como o "é" no Pokémon, pois eles vão bagunçar algumas coisas (como o _feed_). Eles também não serão visíveis na pesquisa sem o caracter especial.

- **Sem Emojis**: Não utilize os Universal Emoji codes da UTF-8 no nome das suas conquistas, pois a exibição desses códigos é totalmente dependente da plataforma (i. E .: Mac OSX, Windows, Linux, iOS, Android e navegador).

- **Preocupe-se com a gramática**: evite erros de gramática. Como o RetroAchievements é uma comunidade internacional, usar o inglês para Code Notes é uma boa prática, pois outro desenvolvedor pode usar suas anotações no futuro. Se o inglês não for o seu primeiro idioma, passar seus títulos, nomes e notas de código através de um corretor ortográfico ajudará. É um passo extra para aqueles que têm dificuldade com a língua inglesa, mas o cuidado e a atenção refletem nas suas qualidades positivas como desenvolvedor.

## Dicas de seleção de ROM

- **Seleção de região**: Escolha as ROM lançadas como `NTSC USA` se disponíveis, pois 60 FPS (**F**rames **P**er **S**econd) é uma experiência de jogo mais suave. As ROMs lançadas como `PAL European` são executados em 50 FPS, e devem ser evitados na maioria dos casos. As ROMs lançadas como `NTSC Japan` também são executados em 60 FPS, mas só é a melhor opção se o jogo for uma versão exclusiva do Japão. Recorrer a um jogo lançado como `PAL European` deve ser apenas em último caso (exclusivo para a Europa) e normalmente é um número muito seleto de jogos _únicos_ da biblioteca inteira do console.

- **Sem Mods**: Não use uma ROM com uma tela de inicialização modificada / personalizada, como Mode7 e RisingSun, porque ela bagunça a RAM.

- **Sem _trainers_**: Não use uma ROM que inclua um recurso cheat integrado. Elas são frequentemente referidas com "ROM trainers". Elas não são oficiais e, de forma alguma são suportados pelo RetroAchievements.

## Dicas de escavação de memória

- Você pode inserir valores no Memory Inspector para ver se ele afeta algo no jogo.

- Se você encontrar um endereço, procure também a mesma região que o rodeia e você pode encontrar muitos outros endereços úteis.

- Mesmo que algo esteja visivelmente decrescente no jogo, como a saúde, o valor não está necessariamente diminuindo. É possível que ele esteja aumentando, então, como é incomum para você saber com certeza, você deve apenas filtrar `!=` E `==`.

- Se você absolutamente não consegue reduzir os resultados de um filtro, você pode tentar adivinhar alguns valores ou pelo menos como o valor está atuando (`>` ou `<`). Por exemplo, geralmente nenhuma barra de energia é `0`, o estágio 1 geralmente é o valor `0`, o estágio 2 geralmente é o valor `1`, dependendo do tipo de jogo. Outro exemplo, talvez cada segmento da sua energia tenha 4 barrinhas - Você deve procurar quando "4" vai para "3" quando você perde uma barrinha?

### Dicas por nível de habilidade

#### Nível 1 - Fácil

Comece com a visualização de 8 bits no Memory Inspector. Olhar para grandes partes de memória irá complicar as coisas, mas isso facilitará o trabalho de um desenvolvedor experiente. Se você está apenas começando e desconhece termos como **endianess** e **bit ordering** (ou quando o cansaço bate), é melhor fazer suas observações na visão de 8 bits. É mais fácil!

#### Nível 2 - Médio

Big data (vista de 16 ou 32 bits): lembre-se de que ao adicionar um endereço de 16 bits o endereço à direita vem primeiro.

Exemplo: `AB CD WX YZ` em 8 bits torna-se `CDAB YZWX` em 16 bits e torna-se `YZWXCDAB` em 32 bits.

Isso é chamado de "[ordenação de bytes little endian](https://pt.wikipedia.org/wiki/Little_endian)". Você pode tranquilamente ignorar esse papo geek apenas lembrando que as coisas estão armazenadas "de trás pra frente" na vista de 16 bits e acima.

Lembre-se de que se você estiver vendo memória em pedaços maiores, quando você destaca um valor, esse valor agora representa um "pedaço" de memória de 16 ou 32 bits e não o endereço de memória de 8 bits que você pode estar procurando. Você precisará voltar para a visão de 8 bits e destacar a endereço que te interessa, se você encontrar algo de 8 bits que pareça interessante.

#### Nível 3 - Avançado

Adicionando suporte para os cores libretro Little Endian: N64-specific, na maioria das vezes, ao adicionar suporte para um core libretro LE ao seu set, os conceitos explicados anteriormente (Nível Intermediário) se aplicam, com ordenação de bytes ligeiramente alteradas. O que é visto como legível em 16 bits muda drasticamente no interior de um core LE.

Exemplo: AB CD WX YZ primeiro pega os bits de A, vira-os como se estivessem olhando em um espelho; bits de B bits e vira-os; bits de C... etc, até Z, e então se torna WXYZ ABCD com os bytes do seu último passo.

Para adicionar o suporte LE, você estará escrevendo uma condição do núcleo falso (Mem 0x000001 = Mem 0x000001), copiando suas condições originais não-LE com um 'PauseIf` na parte superior em uma Alt, copie as mesmas condições para a outra. Ambos os 'PauseIf`s conterão um cheque olhando para um endereço de memória que nunca muda para ver se o seu valor de 16 bits teve o seu pedido de bytes alterado (Pense nisso como " `PauseIf` não estou no núcleo LE" e "`PauseIf` eu sou" nas condições alt).

Um funcionará se o jogador estiver executando em um núcleo LE, o outro não. Em seguida, você executará a matemática que descrevi acima nos valores que você está procurando no "`PauseIf`, não estou no LE core" Alt, e atualizando-o.

Confuso? Sim. É por isso que a maioria dos iniciantes e desenvolvedores intermediários não deve se preocupar.

## Dicas de criação de achievements

- **Nunca use / Evite usar apenas uma condição, tanto quanto você puder**. Ao usar apenas uma condição, o achievement provavelmente irá aparecer na hora errada. Este é o **erro mais comum cometido por um desenvolvedor**, resultando na justificativa "Popped at the Wrong Time" anexada nos Bug Tickets recebidos em RetroAchievements.org. Programe suas conquistas com robustez.

- **PauseIf Demo Mode**: Se o jogo tiver um modo de demonstração (AI joga o jogo depois de esperar um pouco na tela de título), assegure-se de encontrar o endereço para isso e adicione `mode != Demo` ou algo semelhante em suas conquistas.

- **Reiniciar Acontece**: Alguns emuladores enviam um valor específico para a RAM quando reiniciados / recarregados. É apenas para o primeiro quadro, mas pode fazer com que os achievements disparem, então você precisa se preparar para isso. Geralmente, é um valor como o FF. Você pode ver o valor se você usar Frame Advance / Next Frame ao reiniciar o jogo.

- **Limitações**: Há um limite de 100 achievements, um teto de 400 pontos e um limite de caracteres para uma única conquista (tente não colocar mais de 50 condições em uma conquista, isso é mais amor do que o RetroAchievements consegue lidar!).

- **Alt groups** (lado esquerdo do editor) são usados para "ou" condições. O grupo Core está sempre lá e deve sempre ser verdadeiro com pelo menos um grupo Alt sendo completamente verdadeiro para obter um achievement. O grupo inteiro é a sua condição "ou". Mais informações sobre a página [Achievement Logic Features page](/pt/orphaned/achievement-logic-features).

- **Evite o spam de achievement**. Se um jogo tiver 100 níveis, não faça um achievement para cada nível. Faça a cada 25 ou mais. Geralmente, é avaliado pela equipe de desenvolvimento da RA para codificar esses achievements do tipo "Filler". Se você pretende criar alguns desbloqueios progressivos desta maneira - as palavras: ("Fácil", "Médio", "Difícil") ajudarão a colocá-lo em contexto. Considere o segmento de tempo que um jogador casual desbloquearia esses achievements progressivos. Se, em geral, você poderia desbloquear tudo em um conjunto progressivo de achievements desta natureza em menos de meia hora como jogador casual, design de preenchimento e não recomendado.

- **Seja criativo e divertido**: Seja tão criativo quanto possível com achievements. "Beat X sem usar / fazer Y", "Beat X em 5 segundos", "3 heart run". Certifique-se de que os jogadores ocasionais ainda podem obter estes com seu melhor esforço. Não é divertido se for muito difícil para um jogador casual! (Veja: **Dicas de bônus** abaixo para os desafios reais!). Há uma página inteira sobre [Achievement Design](/pt/developer-docs/achievement-design) que pode dar bons conselhos sobre como pensar sobre bons achievements.

- **Glitchless, please!**: Não faça achievements que exijam falhas. As falhas, na maioria dos casos, corrompem e desestabilizam a memória do jogo e a RAM. Eles quebram o resto do conjunto para incluir. No entanto, é aconselhável codificar as paredes do bloco impedindo os jogadores de usá-los para obter um domínio fácil. Este é um tema de muito debate no RA, uma vez que o achievement dá uma falha de quebra do jogo às vezes requer muita habilidade de jogador. Algumas falhas são possíveis apenas no console, algumas apenas em emulador. Por sua inconsistência e instabilidade em relação à memória, é recomendável bloqueá-los para proteger a integridade do seu conjunto e sua reputação. (Este é um problema excepcional em alguns jogos do GameBoy, onde o playground falou em seu caminho para a vitória foi prominente!)

- **Nós amamos arte**: Emblemas bonitos são emblemas gratificantes! Ele deve representar visualmente a realização em si, ou sugerir o local no jogo para os segredos. Corresponder ao estilo de arte do jogo funciona bem. O Google Image busca "Sprite Sheets" é uma dica útil para incluir alguma arte do jogo. Se você é um bom artista gráfico, atualizar emblemas é o seu tempo para brilhar! Mais informações podem ser encontradas na [Badge and Icon Creation page](/guidelines/content/badge-and-icon-guidelines).

- Desmarque "Show Decimal Values" no Achievement Editor para que você possa inserir os valores hexadecimais que você vê no Visualizador de memória. É melhor do que usar a calculadora de um programador!

- **16-bit segredos**: Os requisitos de 16 bits não precisam ser usados em um número par de RAM, eles podem ser usados adequadamente, mesmo que a visualização de 16 bits não o mostre corretamente. Ex: 0 1 2 3 4 5, em 16 bits geralmente é visto como 10 32 54, mas se você começar o endereço no 1 aqui em sua exigência, "21" será lido pela conquista, mesmo que seja de 16 bits A visualização no visor de memória não está mostrando isso. Também funciona se é o último endereço na linha (começando em F, indo para 0). Esteja ciente de que, se você estiver codificando por núcleos LE, você também precisará atualizar isso! Sempre deixe notas de código descritivo para si ou para outra pessoa.

- **Bit field segredos**: Use bits simples (0-7) para coisas que apenas alteram um único bit. No Memory Viewer, quando um endereço é selecionado, haverá "bits 0 1 2 3 4 5 6 7" acima dos endereços, e abaixo desses números serão "0" ou "1" como "0 0 0 0 0 0 0 0 "se bit3 tiver um 1 abaixo dele, bit3 = 1 para esse endereço. O uso de um único bit é muito comum para eventos / desbloqueios de jogos / etc. Você vai querer usar estes em jogos onde você pode fazer coisas em diferentes ordens, diálogos, eventos, desbloqueios .. Se você verificar "8 bits x = 7 "e alguém fez algo diferente, como saltar algo ou obter algo extra, seu valor de 8 bits provavelmente será diferente porque os únicos bits dentro são diferentes e a conquista não será desbloqueada, então neste caso você verifique se há bits específicos dentro o endereço de 8 bits. Agora, se, por exemplo, os desbloqueios de itens usam todos os 8 bits do endereço de 8 bits e você quer fazer "desbloquear todos os itens", você pode apenas fazer "8 bits x = 0xff" Isso pode ser confuso, mas é muito importante para entender. Alguns jogos com espaço de memória limitado usam muito os campos de bits! É uma técnica importante para aprender.
