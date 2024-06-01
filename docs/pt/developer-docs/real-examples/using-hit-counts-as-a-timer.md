# Usando o Contador de Hits e o ResetIf

**Link para o texto em inglês:** [Using Hit Counts as a Timer](/developer-docs/real-examples/using-hit-counts-as-a-timer.html)

Vamos ver como o achievement [Super Hang-On (Mega Drive)](http://retroachievements.org/Game/16) [Speed Freak - Maintain at least 300kph for 10 seconds](http://retroachievements.org/Achievement/71) aparece no Achievement Editor dialog:

**Addresses**
(endereços)

- `0x0055a`: é a velocidade.
- `0x0c757`: é 0x00 quando o jogo é sem compensação (sem pausar).

![speedfreak-example](https://user-images.githubusercontent.com/8508804/33312584-77f7fb0e-d40f-11e7-9daf-827c0f8d7dc6.png)

Nesse achievement, desejamos que haja um fato ou condição que seja verdadeira 600 vezes consecutivamente. A razão para isso é que o Genesis/Mega Drive está travado no processamento de 60 frames de lógica por segundo (NTSC pelo menos?). E o fato que estamos procurando é que "a velocidade é mais de 300". Além disso, queremos que o jogador mantenha a velocidade acima de 300 sem pausar o jogo.

**Condições**

1. A velocidade do jogador está acima de 300 para 600 frames (ou 10 segundos se passaram).

2. reset o contador de hit (hit counter) se a velocidade for menor que 300.

3. reset o contador de hit se o jogador pausa o jogo.
