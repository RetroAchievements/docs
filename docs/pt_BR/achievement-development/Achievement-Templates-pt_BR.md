# Modelos de Conquistas

**Link para o texto em inglês:** [Achievement Templates](Achievement-Templates)

## **ATENÇÃO: TODO JOGO É DIFERENTE!**

Aqui você irá ver exemplos de algumas conquistas tipícas. Você pode usar elas como inspiração para criar suas conquistas. Mas mantenha em mente o seguinte:

**TODO O JOGO É DIFERENTE! A memória tem uma diferença de comportamento de jogo para jogo.**

Então **NÃO** faça desses exemplos como regras. Elas estão aqui apenas para fins educacionais.

Nesses exemplos nós usamos a seguinte convenção **0xNIVEL** é o endereço de memória (memory address) com o ID de nível; **0xVIDA** é o endereço usado para a vida do personagem; **0xTEMPO** para obter um item, etc...

## Termine Nível N

Neste exemplo nós queremos premiar quando o jogador terminar o nível `N` e vá para o nível `N+1`

| ID  | Special? | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | -------- | ------- | --- | ----- | ------- | ---- |
| 1   |          | 0xNIVEL | =   | Value | N       | (1)  |
| 2   |          | 0xNIVEL | =   | Value | N+1     |
| 3   |          | 0xNIVEL | >   | Delta | 0xNIVEL |
| 4   | ResetIf  | 0xNIVEL | =   | Value | TITULO  |

**Requerimentos**

- 1: No nível `N` pelo menos uma vez
- 2: Atualmente no nível `N+1`
- 3: O nível foi aumentado
- 4: Resete o contador de hits quando voltar para a tela de titulo

O valor **0xTITULO** significa "na tela de título do jogo". Você precisa do `ResetIf` indo para a tela de título para evitar uma premiação na hora errada

Aqui está um exemplo do fluxo de jogo que poderia fazer a conquista ser ativada em uma hora errada se não fosse pelo ResetIf:

1. Inicie o jogo e chegue ao nível 2 (isso fará o contador de hits ir para 1)
2. Obtenha um game over enquanto estiver no nível 2
3. Volte para a tela de título
4. Use um password para o nível 3

Se não estiver usando o ResetIf, teremos estas condições:

1. Nível de Hit 2: VERDADEIRO
2. Nível Atual = nível 3: VERDADEIRO
3. Nível aumentado (Do titulo/tela de password para o nível 3): VERDADEIRO

E seria o suficiente para ativar a conquista (no momento errado). É por isso que nos estamos usando o `ResetIf` neste exemplo

## Termine Nível N antes que o Tempo atinja T

Neste exemplo vamos considerar um jogo quando o tempo diminuir (ex: Super Mario Bros). Adaptar-lo de acordo com o tempo no seu jogo tem um comportamento diferente.

Nós queremos premiar se o jogardor finalizar o nível `N` enquanto o tempo for maior que `T`

| ID  | Special? | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | -------- | ------- | --- | ----- | ------- | ---- |
| 1   |          | 0xNIVEL | =   | Value | N       | (1)  |
| 2   |          | 0xNIVEL | =   | Value | N+1     |
| 3   |          | 0xNIVEL | >   | Delta | 0xNIVEL |
| 4   | ResetIf  | 0xNIVEL | =   | Value | TITULO  |
| 5   |          | 0xNIVEL | >=  | Value | T       |

**Requerimentos**

Requerimentos 1-4 são os mesmos como o modelo [Terminar o Nível N](#termine-nível-n).

- 5: O tempo é maior que `T`.

**Mantenha em mente que por trás de além saber como o tempo se comporta no jogo, além disso você precisa pesqusar como se comporta na memória**

## Terminar Nível N sem Morrer (ou ser atingido, usando uma arma, etc.)

| ID  | Special? | Memory  | Cmp | Type  | Mem/Val      | Hits |
| --- | -------- | ------- | --- | ----- | ------------ | ---- |
| 1   |          | 0xNIVEL | =   | Value | N            | (1)  |
| 2   |          | 0xNIVEL | =   | Value | N+1          |
| 3   |          | 0xNIVEL | >   | Delta | 0xNIVEL      |
| 4   | ResetIf  | 0xNIVEL | =   | Value | TITLE        |
| 5   |          | 0xTELA  | =   | Value | NVL_CM_INTRO | (1)  |
| 6   | ResetIf  | 0xVIDA  | <   | Delta | 0xVIDA       |

**Requerimentos**

Requerimentos 1-4 são os mesmos como o modelo [Terminar o Nível N](#termine-nível-n).

- 5: um checkpoint para representar o ponto de onde o jogador supostamente iniciará o desafio de não perder uma vida. Se o jogo tem um nível na tela de introdução, isto pode ser um bom checkpoint.
- 6: resete o contador de hits se a vida diminuir.

O requerimento 6 pode também ser usando para resetar o contador de hits se uma arma for usada, tomado dano, ou qualquer coisa além daquilo que você não quer que o jogador faça

## Termine o Nível N com Item

| ID  | Special? | Memory  | Cmp | Type  | Mem/Val    | Hits |
| --- | -------- | ------- | --- | ----- | ---------- | ---- |
| 1   |          | 0xNIVEL | =   | Value | N          | (1)  |
| 2   |          | 0xNIVEL | =   | Value | N+1        |
| 3   |          | 0xNIVEL | >   | Delta | 0xNIVEL    |
| 4   | ResetIf  | 0xNIVEL | =   | Value | TITULO     |
| 5   |          | 0xITEM  | =   | Value | VERDADEIRO |

**Requerimentos**

Requerimentos 1-4 são os mesmos como o modelo [Terminar o Nível N](#termine-nível-n).

- 5: o jogador tem o item

## Colete o Item em um nível específico

Aqui está uma forma de checar se o item foi coletado em um nível/sala que deve ser coletado. Isto evita a premiação à "consiga item X" por carregando um savestate onde o jogador já tem o item.

| ID  | Special? | Memory  | Cmp | Type  | Mem/Val        | Hits |
| --- | -------- | ------- | --- | ----- | -------------- | ---- |
| 1   |          | 0xITEM  | =   | Value | FALSO          | (1)  |
| 2   |          | 0xITEM  | =   | Value | VERDADEIRO     |
| 3   | ResetIf  | 0xNIVEL | !=  | Value | nivl de coleta |

**Requerimentos**

- 1: Não tenha o item quando entrou no nível de coleta, o hit é um checkpoint então o 1&2 podem ser verdadeiro ao mesmo tempo
- 2: Tenha o item
- 3: Reseta o contador de hits se estiver em uma fase diferente daquela que o item deve ser obtido

Requerimentos 1 e 3 juntos significa "chegou ao nível/sala sem o item"

Mesmo se o jogador carregar um savestave e for para o nível requerido eles não poderão adicionar hits para a condição 1, portanto eles não podem conseguir exceto em gameplay normal

Não precisa ser necessariamente nível/sala. Há outras maneiras de abordar esse problema, por exemplo uma única Memória/Valor que apenas ocorre na coletagem. Etc

## Cheque por um valor específico mudando para outro valor específico dez vezes

Neste exemplo nós queremos para detectar uma mudança de valor de `V1` para `V2` dez vezes:

| ID  | Special? | Type  | Memory     | Cmp | Type  | Mem/Val    | Hits |
| --- | -------- | ----- | ---------- | --- | ----- | ---------- | ---- |
| 1   |          | Mem   | 0xENDEREÇO | =   | Value | 0xV1       | (10) |
| 2   |          | Delta | 0xENDEREÇO | =   | Value | 0xV2       | (10) |
| 3   | PauseIf  | Mem   | 0xENDEREÇO | =   | Delta | 0xENDEREÇO |

## Resets Condicionais

Resets Condicionais podem ser usado para muitas coisas.

Vamos dizer que você quer para resetar se um jogador entrar ema certa zona X e Y de um nível:

**CORE**

- O Core é qualquer condição que voce precisa para a sua conquista ser verdadeira. Isto pode tambem incluir comportamentos normais de resets

**ALT1**

| ID  | Special? | Type | Memory     | Cmp | Type  | Mem/Val      |
| --- | -------- | ---- | ---------- | --- | ----- | ------------ |
| 1   | ResetIf  | Mem  | 0xNIVEL    | =   | Value | NIVELID      |
| 2   | PauseIf  | Mem  | 0xX-COORDS | >   | Value | RESET-X-ZONA |
| 3   | PauseIf  | Mem  | 0xX-COORDS | <   | Value | RESET-X-ZONA |
| 4   | PauseIf  | Mem  | 0xY-COORDS | >   | Value | RESET-Y-ZONA |
| 5   | PauseIf  | Mem  | 0xY-COORDS | <   | Value | RESET-Y-ZONA |

- O reset irá acontecer apenas se todas as condições Pauseif não forem verdadeiras.
- O pause é local para o alt mas o reset reseta a conquista inteira.

**ALT2**

| ID  | Special? | Type | Memory | Cmp | Type | Mem/Val |
| --- | -------- | ---- | ------ | --- | ---- | ------- |
| 1   |          | Mem  | 0x1    | =   | Mem  | 0x1     |

- Qualquer condição que seja sempre verdadeira (isso é necessário para que o Alt1 tenha o comportamento que desejamos)

- **Nota:** Você pode usar multiplos resets condicionais, cada um em seu próprio grupo alt para ter um controle muito maior do comportamento de reset.
