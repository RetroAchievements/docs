# Exemplo Simples de Como Evitar o Abuso de Load State

**Link para o texto em inglês:** [Simple Example of How to Avoid Load State Abusing](Simple-Example-of-How-to-Avoid-Load-State-Abusing)

Neste exemplo, o jogo é [Zooming Secretary (NES)](http://retroachievements.org/Game/4650), e o Achievement é [Great Job! - Now you can take a rest](http://retroachievements.org/Achievement/55102), por terminar o jogo.

Neste, queremos garantir que o jogador tenha passado por todos os níveis para vencer o jogo para ganhar o achievement. Se o jogador usar um save state para ir diretamente ao último estágio e finalizá-lo, o achievement não aparecerá.

**Endereços**

- `0x06e9`: level ID. Do 0 ao 8. O 8 significa "fim de jogo".

![greatjob-zoomingsecretary](https://user-images.githubusercontent.com/8508804/33465179-6fe458ac-d62d-11e7-8e9a-7be17c73a7a8.png)

**Condições**

1. No "game finished level".
2. O level aumentou 8 vezes.
3. Reset o contador se o level diminuir.

Como este jogo tem 8 leveis, o valor no endereço de identificação (ID address) de nível deve ser aumentado 8 vezes para vencer o jogo. Desta forma, um jogador não pode simplesmente iniciar o jogo, carregar (load game) para ir diretamente ao último nível e depois vencer o jogo. Ele / ela precisa percorrer todos os níveis.

O `ResetIf` está aqui apenas para evitar o caso em que o jogador continua carregando states (load state) indo para frente e para trás entre os níveis fazendo o contador de hits ser 8. Se ele / ela carrega um estado (load) indo para um nível mais baixo, o contador de visitas vai para zero.
