# Leaderboards

**Link para o texto em inglês:** [Leaderboards](/developer-docs/leaderboards)

Atualmente Leaderboards podem ser editadas por desenvolvedores no site. É uma interface bastante confusa e um trabalho difícil para fazer com que uma leaderboard funcione corretamente. É realmente necessário cuidado e atenção para obter uma boa leaderboard, então, neste documento nós vamos tentar entender como isto funciona.

## Visão Geral

Isto é como uma lista de Leaderboard de um jogo aparece no site

![leaderboard_list](/leaderboard-list.png)

No centro você pode ver todas as Leaderboard feitas, e na coluna direita você pode ver as **Code Notes (Notas de Código)**. As Code Notes estão aqui para ajudar com algumas condições que veremos abaixo.

Aqui está uma breve explicação de cada campo de uma Leaderboard:

- **Title (Título)**: O título de uma Leaderboard
- **Description (Descrição)**: A descrição de uma Leaderboard
- **Format (Formato)**: Isto pode ser `Score`, `Time (Frames)`, `Time (Milliseconds)` ou `Value`. É usado para distinguir que tipo de leaderboard é (já vamos falar disso abaixo)
- **"LowerIsBetter" checkbox (MenorÉMelhor)** : Quando marcado, isso quer dizer, um valor baixo é a melhor coisa. É geralmente usando em casos de leaderboards baseadas em tempo, enquanto uma pontuação maior geralmente é melhor.
- **Start (Iniciar)**: Condições de início, aka **STA**
- **Cancel (Cancelar)**: Condições de cancelamento, aka **CAN**
- **Submit (Submeter)**: Condições para envio, aka **SUB**
- **Value (Valor)**: Como interpretar os valores, aka **VAL**

**Nota**: Uma leaderboard válida **NECESSITA** ter todas as quatro condições.

Esses 4 últimos campos são realmente importantes e _MUITOS_ cuidados devem ser tomados na entrada de qualquer caracter dentro dessas linhas. É por isso que eles merecem uma explicação mais na frente:

A condição **STA** ou **Start** é uma série de condições, como uma conquista, que devem ser verdadeiras para começar a a Leaderboard. Uma vez que o **STA** for verdadeiro, o jogo irá começar a monitorar as condições CAN, SUB e VAL.

Se a condição **Cancel** (**CAN**) for verdadeira, ela irá cancelar todo o progresso relativo ao envio da leaderboard. Se no entanto a condição **Submit** (**SUB**) for verdadeira, então, o placar gerado na leaderboard será enviado

Finalmente, o **Valor** (**VAL**) é um caso especial, e irá ser obtido da memória usando a fórmula iniciada na caixa de memória (memory box)

## Formato do Endereço

O Endereço de memória para STA/CAN/SUB/VAL tem o segunte formato:

| localização/tamanho | prefixo (pode ser minúsculo) |  exemplo   |
| :-----------------: | :--------------------------: | :--------: |
|        bit0         |            `0xM`             | `0xM01234` |
|        bit1         |            `0xN`             | `0xN01234` |
|        bit2         |            `0xO`             | `0xO01234` |
|        bit3         |            `0xP`             | `0xP01234` |
|        bit4         |            `0xQ`             | `0xQ01234` |
|        bit5         |            `0xR`             | `0xR01234` |
|        bit6         |            `0xS`             | `0xS01234` |
|        bit7         |            `0xT`             | `0xT01234` |
|       Lower4        |            `0xL`             | `0xL01234` |
|       Upper4        |            `0xU`             | `0xU01234` |
|        8bit         |            `0xH`             | `0xH01234` |
|        16bit        |             `0x`             | `0x01234`  |
|        32bit        |            `0xX`             | `0xX01234` |

## Exemplo

O melhor lugar para iniciar é olhando uma das leaderboards existentes [http://retroachievements.org/leaderboardList.php](http://retroachievements.org/leaderboardList.php) e desmontar para ver como funciona. Nós iremos usar o [Green Hill Act 1 (Sonic the Hedgehog) Leaderboard](http://retroachievements.org/leaderboardinfo.php?i=2) para este propósito. Vamos ver como fica:

![new_leaderboard2](/new-leaderboard2.png)

Os campos **Title** e **Description** são um pouco óbvios.

O **Type** é "Time (Frame)". Em Sonic cada 60 frames equivale a 1 segundo, então vamos monitorar o tempo usando os frames.

A checkbox **Lower Is Better** está marcada, entao aquele que fizer o tempo mais curto será o #1.

Agora nos vamos explicar as partes mais importantes.

### Condições de Início

**STA**: `0xfe10=h0000_0xhf601=h0c_d0xhf601!=h0c_0xfff0=0`

- `0xfe10=h0000`: Se o endereço da RAM 0xfe10 é equivalente hex 0000,
- `_`: E,
- `0xhf601=h0c`: Se o endereço da RAM 8-bits 0xf601 é equivalente para hex 0c,
- `_`: E,
- `d0xhf601!=h0c`: Se o endereço da RAM 8-bits anterior 0xf601 NÃO é equivalente ao 0c,
- `_`: E,
- `0xfff0=0` Se o endereço da RAM 0xfff0 é equivalente ao 0.

Esto parece ser intimidador, porque nos não sabemos o que esse endereço diz. É por isso que o **Code Note** na coluna direita é de bastante ajuda! Você pode ser como esses endereços estão classificados na memória. Em nosso exemplo nos temos:

- `0xfe10` é o nivel, e espera-se que seja `0` (o primeiro nivel).
- `0xf601` é um endereço de memória de 8 bits, e nos usamos o prefixo `0xh` em vez de `0x` para significar isso. `0xf601` é o modo de tela. A segunda e a terceira parte desta Condição de Início está dizendo "o modo atual deve ser _ingame_ (`0c`), e o modo no frame anterior NÃO deve ser _ingame_". **Nota**: O prefixo "d" no endereço representa delta, ou "o valor do frame anterior". **Resumindo**: ative o leaderboard imediatamente após iniciar uma fase (a partir daí vamos começar a medir o tempo).
- Finalmente nós além de esperar que `0xfff0` seja aquivalente a `0`, porque `0xfff0` é o modo de demonstração e nós não queremos enviar pontuações para a leaderboard quando a demo estiver ativa!

### Condições de Cancelamento

**CAN**: `0xhfe13<d0xhfe13`

- `0xfe13` é o numero de vidas.

A seção de cancelamento checa se o contador de VIDAS do jogador se tormar menor. Literalmente, isto diz "Cancela se o ATUAL valor em 0xfe13 é menor que o valor ANTERIOR em 0xfe13. Nós queremos que faça isso porque voce pode alcançar o checkpoint final e correr fora do tempo, resetando seu contador para 0:00. Nos não queremos permitir isso, porque isto não é a forma correta de completar o nivel. Então, se o jogardor morrer, nós resetamos o progresso do leaderboard dele.

### Condições de envio

**SUB**: `0xf7cc!=0_d0xf7cc=0`

- `0xf7cc` isto é a bandeira de final de fase, não-interativo.

A seção de envio checa se o frame atual tem o marcador de 'endlevel' (fim de fase) for para verdadeiro (ou `!=0`, 'naozero'), e o frame anterior (delta) tem isto para ser falso (ou `=0`, 'zero'). Isto sugere que o jogador chegou ao fim do nivel, e provou ser um benchmark bastante robusto

**Dica**: isto pode ser útil para observar estes valores na memória para ver como eles executam, e que tipo de valores eles terminam em diferentes circunstâncias.

### Interpretador de Valores

**VAL**: `0xhfe24*1_0xhfe25*60_0xhfe22*3600`

Finalmente, valores. Uma vez que o jogador chegou ao inicio da condição, eles irão ser mostrados em uma caixa quue permanece na tela, aparecendo o progresso deles até agora. Se é uma leaderboard de tempo, será um relógio, e se for uma pontuação, será apenas o valor. Se eles cumprirem a condição de cancelamento, eles serão informados de que eles falharam, e o pop-up será removido. Se caso o jogador chegar com sucesso à condição de envio, o valor atual será pego e submetido como pontuação. o pop-up ingame irá informar o jogador o tão longe da leaderboard, e a posição deles na leaderboard.

A condição de valor é especial em poucas maneiras. Ele é avaliado constantemente e exibido na tela o tempo todo quando a leaderboard está ativa. Isto não funciona como as outras condições. Isto espera endereços da seguinte maneira:

`endereço*modificador` (endereço tempo modificador)

e usa o `_` sublinhado como um 'plus'. O `*` asterisco significa 'múltiplo', então no valor

`0xhfe24*1_0xhfe25*60_0xhfe22*3600`

representa:

8-bit `0xfe24` vezes 1, MAIS
8-bit `0xfe25` vezes 60, MAIS
8-bit `0xfe22` vezes 3600

A razão para isso é que os valores em cada um desses endereços significam frames, segundos e minutos respectivamentes. Quando nos adicionamos esses valores juntos, nós conseguimos um grande total em frames que vamos enviar para o "Banco de dados".

Lembre que o campo 'Formato' pode ser **Pontuação**, **Tempo (Frames)**, **Tempo (Milisegundos)** ou **Valor**. **Tempo(Frames)** é o mais comum, e representa 'frames'. **Tempo (Milisegundos)** espera um valor que nos podemos converter diretamente para milisegundos. (Super Mario Kart usa isso). No entanto, para converter um valor em frame dentro de um formato "para ser lidos por humanos", nos devemos dividiu o valor por 60 para uma representação de segundos correta, e um valor em milisegundos deve ser dividido por 100 para conseguir o numero de segundos. Isso é usado no site e no aplicativo para exibir o valor apropriadamente, e é importante para distinguir, para que possamos ter certeza de obter o valor mais preciso do emulador, usando qualquer formato que eles usem para registrar o tempo.

## Ajuda Adicional

Infelizmente há _MUITAS_ maneiras de este processo dar errado, então, se voce tiver algum problema, sinta-se livre pra pedir ajuda em nosso [servidor do Discord](https://discord.gg/TdfC3r7).

Se você quer praticar, é altamente recomendado criar sua própria leaderboard e tentar alguma coisa em um novo jogo, melhor que usar uma leaderboard existente

Por favor, lembre-se que esses arquivos são puxados diretamente para o jogo de alguém se eles decidirem jogá-lo, e uma má formação de endereço de memória ou linha pode causar um crash no emulador, então por favor, teste seu código da leaderboard!
