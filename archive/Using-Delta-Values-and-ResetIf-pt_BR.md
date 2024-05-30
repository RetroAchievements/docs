# Usando Valores Deltas e ResetIf

**Link para o texto em inglês:** [Using Delta Values and Hit Counts to Detect an Increment](Using-Delta-Values-and-Hit-Counts-to-Detect-an-Increment)

Vamos pegar [Streets of Rage 2 (Mega Drive)](http://retroachievements.org/Game/3)
como um caso de estudo, e o achievement [Steel Grip - Defeat 10 enemies without dropping your weapon](http://retroachievements.org/Achievement/55). Isso depende de quatro condições:

**Endereços**

- `0xef33`: arma em mão
- `0xef37`: tipo de arma
- `0xef4e`: número de KOs (player 1)

![steelgrip-example](https://user-images.githubusercontent.com/8508804/33313210-32f5451e-d411-11e7-8042-2b9007a5cffb.png)

**Condições**

1. o jogador está segurando uma arma. Isso deve ser verdadeiro, ao menos uma vez. Isso na verdade não é necessário, mas é útil mostrar a progressão. Estamos dizendo que exigem que o jogador mantenha uma arma, pelo menos uma vez.

2. número de KOs que o jogador fez. É 16 bits (o que significa que o valor pode ser superior a 255), e usando os símbolos delta e 'maior que', estamos dizendo que exigimos que o número de KOs seja maior do que o valor anterior, e precisamos disso para aconteça 10 unicas vezes. Toda vez que o valor atual é maior do que o valor anterior, a contagem de hits aumentará em um. No próximo quadro, o valor 'delta' aumentará para ser o mesmo que o valor atual, isso garante que depois de cada morte, o contador KO irá subir de um, e a contagem de batidas aumentará em um. **LIMITAÇÃO**: se o número de KOs aumentar em dois no mesmo quadro, a contagem de batidas aumentará apenas em um.. É uma pequena falha que acontece um pouco mais frequentemente do que o esperado ... não é tão preciso, mas é uma estimativa bastante próxima do seu número de mortes

3. resete todo o seu progresso, se o **tipo de arma** for diferente do último tipo de arma conhecida.

4. resete **todo** seu progresso, se o jogador já não estiver carregando uma arma.
