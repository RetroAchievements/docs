# Recursos de lógica para achievements

Link para o texto em inglês: [Achievement Logic Features](/orphaned/achievement-logic-features.html)

Existem várias ferramentas e opções disponíveis para o desenvolvedor, saber como utilizá-las adequadamente melhorará a qualidade de seus sets. Essas ferramentas/opções podem ser usadas no Achievement Editor:

![achievement_editor](https://user-images.githubusercontent.com/8508804/33130013-0eb07d96-cf79-11e7-8f73-6d737dfe5e16.png)

Para ajuda sobre esses, o nosso servidor do [Discord](https://discordapp.com/invite/TdfC3r7) estará sempre aberto para ajudar.

## Valores Delta

Um valor `Delta` é o valor do _frame_ anterior.

Exemplos de como ele pode ser usado:

- Detectar se o nível foi aumentado: `level > delta level`. Significa que "o nível atual é maior que o nível do frame anterior".
- Detectar danos: `health < delta health`. Significa que "a saúde atual é menor do que a saúde do frame anterior". Ou você pode apenas tornar o valor do frame anterior um requisito. `delta health = 1` significa que "o valor do frame anterior para a saúde deve ser 1".
  Você pode ver como isso funciona no [Exemplos Reais](/pt/developer-docs/real-examples.html)

## Hit Counts

No Achievement Editor, o campo do lado direito é Hit Count.

Zero é o valor padrão. Isso significa que a condição deve ser verdadeira quando a conquista aparecer.

Se você definir manualmente uma contagem (hit), por exemplo 1, significa que a condição deve ser verdadeira por pelo menos 1 frame e, uma vez que a contagem de _hits_ seja atendida, ela não precisa ser atendida novamente em outro momento.

**ATENÇÃO**: se uma condição tiver uma contagem de hits e atingir o número necessário, esta condição não é mais testada. Ela é verdadeira e permanece verdadeira, **A MENOS** que você tenha um `ResetIf`, o qual discutiremos abaixo.

Você pode ver como isso funciona no [Exemplos Reais](/pt/developer-docs/real-examples.html)

## Special Flags

No Achievement Editor, é o campo intitulado como **Special?**.

Essas flags condicionais só funcionam se você definir uma contagem de hits para uma condição.

### `PauseIf`

Isso pausará a atividade para todas as condições no mesmo grupo.

**Nota**: tenha em mente que isso **não** irá pausar as condições em outros grupos.

O `PauseIf` é usado para pausar a contagem de hits em uma situação específica (como pausar o jogo). É usado quando você deseja manter a contagem de hits previamente conquistada, mas não deseja reiniciá-la quando alguém simplesmente faz uma pausa no jogo, por exemplo.

### `ResetIf`

Isso irá zerar a contagem de hits para todas condições em que você definiu uma contagem de hits. Ele é muito mais comum de usar do que `PauseIf`

**Nota**: Ao contrário do `PauseIf`, le irá zerar as condições em **todos os grupos**

Você pode ver como isso funciona no [Real Examples](/pt/developer-docs/real-examples.html)

### `AddSource`

Quando uma condição tem a flag `AddSource` o valor daquele endereço de memória é adicionado ao valor do endereço na condição logo abaixo, e a comparação é feita na condição abaixo daquela com o `AddSource`. Isso pode soar um pouco confuso, mas o exemplo a seguir vai esclarecer como funciona:

![`AddSource` Example](https://user-images.githubusercontent.com/8508804/42702176-169aaf44-869f-11e8-979c-487a040e0145.png)

Neste exemplo o valor em `0x8010` será adicionado ao valor em `0x8020` e a comparação é se esta soma é maior ou igual a zero.

Se o valor em `0x8010` é `1` e o valor em `0x8020` é `2`, a comparação será `1 + 2 > 0`, ou `3 > 0`.

**Nota**: todos os campos de comparação na condição com a flag `AddSource` são ignorados.

Tentando resumir esta explicação com uma imagem:

![`AddSource` Explained](https://user-images.githubusercontent.com/8508804/42702180-1712bca0-869f-11e8-9949-11021fa891bb.png)

**Nota**: você pode usar `AddSource` para somar mais endereços, como no exempo abaixo:

![addsource1](https://user-images.githubusercontent.com/8508804/42702178-16c6d97a-869f-11e8-9c0d-84ef42ec4867.png)

### `SubSource`

Funciona muito semelhante ao `AddSource`, porém o `SubSource` faz o valor naquele endereço de memória ser negativo.

**Nota 1**: `SubSource` **NÃO** é um flag de subtração. Ele apenas torna o valor negativo.

**Nota 2**: A linha final (sem `AddSource` ou `SubSource`) ainda é **adicionada** para a comparação final.

Usando aquele [exemplo de uso de `AddSource` example](#add-source), se nós o substituíssemos por `SubSource` e com os mesmos valores (`valor(0x8010) = 1` e `valor(0x8020) = 2`), a comparação seria `-1 + 2 > 0`, or `1 > 0`.

### `AddHits`

Também funciona de maneira de similar ao `AddSource`, porém relacionado aos hitcounts.

O `AddHits` adiciona o hitcount da condição atual à próxima condição. O hitcount total a ser checado será aquele definido na condição logo após a última condição com `AddHits`. Se a condição logo após o último `AddHits` não tiver um hitcount definido, todas as condições com `AddHits` serão ignoradas.

Diferentemente do `AddSource`, todos os campos são usados numa condição `AddHits`, inclusive os campos de comparação. Se uma condição é verdadeira, o hitcount para esta condição é incrementada (e parará de incrementar se assim que o número de hitcount definido for atingido).

As condições com `AddHits` não precisam ser verdadeiras para a conquista disparar. Porém primeira condição após o último `AddHits`, sim, precisa ser verdadeira.

## Groups

Os achievements podem ter grupos adicionados a eles que podem atuar como requisitos alternativos para desbloquear um achievement. Estes são chamados de **Alt Groups**.

Uma coisa extremamente importante a notar: para uma conquista desbloquear, deve ter o **Core group E pelo menos um Alt group ser verdadeiro**. Se não houver nenhum grupo Alt presente, apenas as condições do Core group's precisam ser verdadeiras.

**Dica**: devido ao grupo Core sempre precisar ser verdadeiro, normalmente você colocaria lá condições que sejam à todos os requisitos alternativos. No entanto, um truque que você pode usar para basicamente para ignorar a necessidade de um grupo Core é dar-lhe uma condição que é sempre verdadeira, como:

`Mem 0x0001 = Mem 0x0001`

Como o grupo Core agora é sempre verdadeiro, agora você pode se concentrar em diferenciar os grupos Alt.
