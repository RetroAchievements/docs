# Estado de Presença

**link para texto em inglês:** [Rich Presence](Rich-Presence)

## Introdução

O Estado de Presença (**RP - Rich Presence**, pela sigla em inglês), é uma breve visão geral do que os jogadores estão fazendo atualmente em seu jogo. Para ter RP em um jogo, você precisa de um Script do Estado de Presença (ou **Rich Presence Script - RPS** - pela sigla em inglês). O Script verifica a memória do jogo do jogador e como programado relata os valores de certos endereços com definições atribuídas pelo Desenvolvedor, como em qual estágio o jogador está, quantas vidas eles têm, se o jogo está em pausa, que modo de jogo eles estão jogando, o que o jogador realizou, etc. Esta informação é reportada de volta ao site.

**Exemplo de RP em ação:**

![](https://camo.githubusercontent.com/cc1e8cea190f192a5b3beb2e5a700f068615a342/68747470733a2f2f692e696d6775722e636f6d2f4535303937737a2e706e67)

Para ver o RP ao vivo em um jogo, clique no menu RetroAchievements no seu emulador e clique em **Rich Presence Monitor.** Uma pequena janela mostrará seu RP ativo. (Bom para depuração)

![](https://camo.githubusercontent.com/1415c78f7c231279dc6f2ea74f21973195359e96/68747470733a2f2f692e696d6775722e636f6d2f586b435a6f4c472e706e67)

A melhor maneira de entender o Estado de Presença é olhar para vários exemplos no jogo, olhar para os endereços usados e ver como o texto é exibido no Rich Presence Monitor e no site.

## Como funciona?

Toda vez que um jogo é iniciado, ele busca os achievements em um arquivo 'patch' para a ROM, que detalha todos os achievements e endereços de memória (e leaderboards) que podem ser observados. Ele também solicitará um Rich Presence Script para a ROM atualmente carregada. O emulador informará o site a cada 120 segundos. Da mesma forma, a cada 120 segundos mais ou menos, a caixa de 'jogadores ativos' na frontpage será atualizada, detalhando a última atividade conhecida de todos os jogadores ativos. Se não houver um script do estado de presença, o texto estará "ganhando achievements" se estiver jogando um jogo com achievements, "jogando [jogo]" se estiver jogando sem achievements ou "desenvolvendo achievements" se a caixa de diálogo de memória estiver aberta e visível.

O RPS para cada jogo pode ser encontrado na seção de desenvolvimento na página de cada jogo:

![](https://camo.githubusercontent.com/cc05291f1f0da98ef8fd429fbdd6f201735c3edb/68747470733a2f2f692e696d6775722e636f6d2f7371784f6a794c2e706e67)

![](https://camo.githubusercontent.com/5b5837925fd7507fd47f1e25ff000e68d568d980/68747470733a2f2f692e696d6775722e636f6d2f6537716f614e782e706e67)

## Exemplo (Super Mario Bros.)

```
Format:Digit
FormatType=VALUE

Lookup:Mode
0=[Demo]
2=[World Complete]

Lookup:Paused
0x81=▌▌
0x80=▌▌
1=▌▌

Lookup:Star
5=🌟
4=🌟
3=🌟
2=🌟
1=🌟

Lookup:Powerup
0=Small
1=Super
2=Fire

Lookup:Swimming
1= swimming

Lookup:Status
0= [Loading]
1= taking a vine warp
2= entering a warp pipe
3= entering a warp pipe
4= 🚩
5= [Stage Complete]
6= [Game Over]
7= [Entering Area]
9= growing
0xA= shrinking
0xB= 💀
0xC= powering up

Lookup:Quest
0x0=1st
0x1=2nd

Display:
@Mode(0xh770)@Paused(0xh776)@Star(0xM79f_0xN79f_0xo79f_0xP79f_0xQ79f_0xR79f)@Powerup(0xh0756) Mario in @Digit(0xh75f_v1)-@Digit(0xh75c_v1)@Swimming(0xh704)@Status(0xhe), 🚶:@Digit(0xh75a_v1), @Quest(0xh7fc) Quest
```

Ele se divide em uma série de objetos de pesquisa, objetos de formato e um objeto de exibição.

## Pesquisas

Pesquisas são definidas assim:

```
Lookup:NameOfLookup
Value1=Text When This Value
Value2=Text When Another Value
...
```

Nós damos ao Lookup (pesquisa) um valor, consistindo de uma série de endereços de memória e modificadores. Falaremos mais sobre isso depois.

## Formato

Tabelas de formato são definidas assim:

```
Format:Score
FormatType=VALUE
```

Comece com `Format`: e depois o nome do tipo de formato. Na próxima linha, forneça `FormatType =` e, em seguida, um dos seguintes: `VALUE`, `SCORE` (ou `POINTS`), `TIME` (ou `FRAMES`), `SECS`, `MILLISECS` ou `OTHER`.

- `VALUE`: valor genérico, sem zeros à esquerda.
- `SCORE` / `POINTS`: "000130 pontos"
- `TIME / FRAMES`: o valor descreve o número de quadros transcorridos e será transformado em 00: 00.00
- `SECS`: valor descreve o número de segundos decorridos e será transformado em 00:00
- `MILLISECS`: value descreve o número de milissegundos decorridos e será transformado em 00: 00.00

## Exibição

A exibição será uma string exibida na caixa "Players ativos" na primeira página. Refere-se aos objetos Lookup e Format definidos anteriormente usando um único '@'. Em seguida, ele especifica um nome para a pesquisa ou formato (diferencia maiúsculas de minúsculas) e, imediatamente depois, entre colchetes, uma série de valores de memória que especificam o que enviar para esse objeto de pesquisa ou formato.

`@Powerup (0xh756)`

Isso significa usar o Lookup ou o Formato chamado `Powerup`, e dar a ele qualquer valor que esteja em 0xh756.

### Exemplo de análise de pesquisa

- `@Mode (0xh770)` - pesquisa o endereço que mostra se o jogo está no modo de demonstração ou se um mundo foi concluído.
- `@Paused (0xh776)` - pesquisa o endereço que mostra se o jogo está em pausa (são utilizados 3 valores, dois deles são para pausa e pausa).
- `@Star (0xM79f_0xN79f_0xo79f_0xP79f_0xQ79f_0xR79f)` - Procura o endereço de se Mario tem a estrela de invencibilidade. Mais sobre isso depois.
- `@Powerup (0xh756)` - Procura pelo endereço que mostra se o Mairo é Pequeno, grande ou tem poder de fogo.
- `Mario in` - Texto estático para pesquisar string e formatar objetos juntos.
- `@Digit (0xh75f_v1)` - Dígito é um objeto de formato definido como um valor. O endereço 0xh75f é o mundo menos 1 (porque é baseado em 0, já que começa a contar em 0). \_v1 significa + valor 1. \_v + 1 também está correto.
- `-` - Mais texto estático para dividir o mundo e o nível. como no hypen no mundo 1-1.
- `@Digit (0xh75c_v1)` - Outro uso do objeto de formato de dígito. Desta vez está olhando para o estágio. Mundo 1-X.
- `@Swimming (0xh704)` - pesquisa o endereço que mostra se o jogador está nadando.
- `@Status (0xhe)` - pesquisa o endereço que mostra o status de Mario, como passar por canos.
- `, 🚶:` - Mais texto estático. 🚶 é um símbolo para vidas.
- `@Digit (0xh75a_v1)` - Terceiro uso do objeto de formato de dígito. Desta vez, está verificando o endereço do jogador.
- `,`- texto estático.
- `@Quest (0xh7fc)` Uma pesquisa para ver se o jogador está em normal ou na segunda missão, hardmode.
- `Quest` - Texto Estático.

### Tamanho do endereço

Para especificar o tamanho do endereço que você está verificando, existem vários caracteres usados. (capitalização é ignorada)

- Um endereço de 16 bits é padrão e não possui designação de caractere. Em 0x10, o endereço é dois bytes - 16 bits.
- Um caractere de endereço de 8 bits é `h` (ou `H`). Em 0xh10, o endereço é um byte - 8 bits. `xxxx xxxx`
- Um caractere de endereço do upper4 é `u` (ou U). Em 0xu10, o endereço é um nibble - 4 bits. `xxxx 0000`
- Um caractere de endereço do lower4 é `l` (ou L). Em 0xl10 o endereço é um nibble - 4 bits. `0000 xxxx`
- Um caractere de endereço bit0 é `m` (ou `M`). Em 0xm10 o endereço é um bit, o bit mais baixo: `0000 000x`
- Um caractere de endereço bit1 é `n` (ou `N`). Em 0xn10 o endereço é um bit, o segundo bit: `0000 00x0`
- O caractere de um endereço de bit2 é `o` (ou `O`). Em 0xn10 o endereço é um bit, o terceiro bit: `0000 0x00`
- Um caractere de endereço de bit3 é `p` (ou `P`). Em 0xp10 o endereço é um bit, o quarto bit: `0000 x000`
- Um caractere de endereço bit4 é `q` (ou `Q`). Em 0xq10 o endereço é um bit, o quinto bit: `000x 0000`
- Um caractere de endereço bit5 é `r` (ou `R`). Em 0xr10 o endereço é um bit, o sexto bit: `00x0 0000`
- Um caractere de endereço bit6 é `s` (ou `S`). Em 0xs10 o endereço é um bit, o sétimo bit: `0x00 0000`
- Um caractere de endereço bit7 é `t` (ou `T`). Em 0xt10 o endereço é um bit, o bit superior: `x000 0000`
- Um caractere de endereço de 32 bits é `x` (ou `X`). Em 0xx10 o endereço é de quatro bytes e 32 bits.

Resumindo em uma tabela:

![](https://i.imgur.com/8VbvtfJ.png)

### Strings de exibição condicional

```
Display:
?0x 000085=0?Title Screen
?0xT00007c=1?Custom Map in @Landscape(0xH00016c)
Playing Battle @Battle(0x 00007c*0.2) in @Landscape(0xH00016c)
```

O `Display`: marker existente ainda é usado para indicar o início do bloco de exibição. Se a próxima linha começar com um ponto de interrogação, ela será considerada uma sequência de exibição condicional. A parte da linha entre os dois pontos de interrogação é a cláusula condicional. Se a cláusula condicional avaliar que é verdadeiro (true), a parte restante da linha será usada como a sequência de exibição. Se não avaliar true, o processamento prosseguirá para a próxima linha. Se começar com um ponto de interrogação, o mesmo processo será repetido. Se não começar com um ponto de interrogação, a linha inteira será usada como a sequência de exibição padrão.

Olhando para este exemplo, se o valor de 16 bits em $ 0085 for 0, a seqüência de exibição é `Title Screen`. Se não, a próxima linha é examinada. Se o sétimo bit de $ 007C for 1, a cadeia de exibição será Custom `Map em @Landscape (0xH00016c)`. Se não, a linha final não tem uma cláusula condicional e é usada.

As cadeias de exibição associadas a uma cláusula condicional suportam a mesma sintaxe que a cadeia de exibição padrão. Neste exemplo, você pode ver que a pesquisa `@Landscape` é usada na seqüência de exibição condicional e na sequência de exibição padrão. A pesquisa em si só precisa ser definida uma vez.

A frase condicional suporta todos os assessores de endereço mencionados anteriormente, bem como a lógica AND (\_) e OR (S). Note que cláusulas OR ainda requerem um grupo 'core', [da mesma forma que as conquistas.](Achievement-Logic-Features)

- `? 0xH1234 = 32_0xH2345 = 0? and example`

se o valor de 8 bits em $ 1234 for 32 e o valor de 8 bits em $ 2345 for 0, display `and example`

- `? 0xH1234 = 32_0xH2345 = 1S0xH2345 = 2? or example`

se o valor de 8 bits em $ 1234 for 32 e o valor de 8 bits em $ 2345 for 1 ou 2, exibir `or example`

## Decimal Binário Codificado (DBC)

DBC é quando os valores são armazenados em um endereço de 0 a 9 (um dígito) ou 0 a 99 (dois dígitos). Na maioria das vezes os valores são armazenados em hexadecimal, mas em algum momento os jogos irão armazená-los desta maneira e aqui está a melhor maneira de lidar com esses endereços no seu monitor.

Para objetos de valor, você pode usar o prefixo DBC, como em `b0x1`. Um endereço DBC é considerado 8bit, h é desnecessário, mas também não causará problemas. Outros prefixos de caracteres funcionam? (não testado). Quando você usa o prefixo b e o endereço é armazenado como um DBC, sua saída para um endereço de 10 será 10 em vez de 16 (que é 10 em hexadecimal).

Isso é mais comumente usado para pontuação e tempo, mas geralmente outros tipos de valores de exibição.

## Limites

- Limite de 2500 caracteres para script
- Limite de 100 caracteres para o que é exibido
- Caracteres Unicode são permitidos
- Usar `&` no texto cortará o script após o `&`
- Usando o personagem `+` não será exibido

## Detalhes da Sintaxe

- O RPS ignora 0s finais em pesquisas de endereço hexadecimais e os valores `0x00001` == `0x1`, `0xh0000245` == `0xh245, 0x0a` == `0xa`.
- Os valores de pesquisa são Decimal por padrão e hex se você colocar o prefixo de `0x`. Isso significa `1` == `0x1`, `2` == `0x2`, `9` == `0x9`, `10` == `0xa`, `100` == `0x64`, etc.

## Dicas e truques

- As pesquisas devem ser específicas de caso com seus @ correspondentes na exibição e não conter espaços após a pesquisa ser definida.
- Os nomes de pesquisa podem ser tão curtos quanto um único caractere se você precisar incluir alguns caracteres extras.
- Transformar todos os seus valores de hexadecimal em decimal ocupará menos caracteres.
- Caracteres Unicode nem sempre "ocupam menos espaço", eles geralmente ocupam até quatro caracteres do sistema.
- Se você não definir suas pesquisas, elas serão deixadas em branco (sem espaço). Apenas para NES, SNES, Gen, RAVBA. N64, Meka e Lynx deixarão a palavra "Desconhecido" toda vez que você não definir uma pesquisa.
- Você só precisa de um objeto de formato de valor. Você pode referenciá-lo com vários endereços. (isso é sempre verdade?)
- Colocar espaços em suas pesquisas algumas vezes antes ou depois pode permitir que você oculte determinadas pesquisas quando elas não forem necessárias, como fazer `@Pause`, `@Star`, `@Swimming` e `@Mode`.

### Propriedades de valor

Ao usar objetos de pesquisa e formatação `@object ()`, é possível combinar e executar cálculos. Isso pode ser usado para exibir corretamente uma pontuação, em tempo de jogo, etc. ou fazer pesquisas mais avançadas.

Exemplo `@Score (0x28 _ 10_0x29 _ 1000_0x26 \* 100000) points``

Isso significa usar a pesquisa ou pontuação de formato e dar a soma de:

- 0x28 vezes 10, ADD

- 0x29 vezes 1000, ADD

- 0x26 vezes 100000

- `_` adiciona os endereços juntos.

- Ou você pode adicionar um valor estático `0x28_v10`. Isso adiciona 10 ao seu total, como em qualquer que seja o valor de `0x28` + 10 será exibido. Você também pode subtrair `0x28_v-10`.

- Se você quiser subtrair um endereço, multiplique o endereço por -1. `0x29 * -1`. `0x29` agora é negativo.

- Se você gostaria de realizar a divisão, você precisará multiplicar por um decimal. `0x26 * .5`. `0x26` irá gerar 1/2 do valor em `0x26`.

- E você pode amarrar tudo junto: `0x28 * 10_0x29 * -1_0x26 * .625_v-10`.

- Você também pode adicionar endereços juntos para fornecer pesquisas com base nas somas de vários endereços. Isso é usado no exemplo em @Star. Está procurando a soma dos 6 bits mais baixos do endereço 0xh79f. A maneira como esse endereço funciona é que, desde que haja um valor lá, Mario é star Mario invencível e a contagem regressiva do valor hexadecimal 0x23 (35 decimal) para 0. 23 em binário é 0010 0011, significando que a soma máxima desses bits pode ser 5 durante 0001 1111 quando a contagem regressiva alcança o valor hexadecimal 0x1f (31 decimal).

### Símbolos Padrão Unicode

▌▌=em pausa

🔁= número de loop

🚶=vidas. Outros símbolos que representam o jogo claramente também são adequados. 🐰=in a Bugs bunny Game, 🐵=in a Donkey Kong Country game, ✈=In a jet plane game,

💞=Continue

💯=Pontos

⏰=Tempo de jogo/Relógio do game

🔑=Chaves

💣=Bombas ☰=Menu

❤️ ou ❤= Em um jogo com corações (ex. Zelda)

💰=Dinheiro

⚖=Dificuldade
