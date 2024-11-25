---
title: Contornando o Problema de um Contador Incrementando Duas Vezes no Mesmo Frame
description: Aprenda como lidar com o problema de um contador incrementando duas vezes no mesmo frame usando SubSource e flags AddHits, garantindo uma lógica precisa de conquistas em jogos com coleta simultânea de itens.
---

# Contornando o Problema de um Contador Incrementando Duas Vezes no Mesmo Frame

Neste exemplo, você verá como contornar o problema de um contador incrementando duas vezes no mesmo frame combinando [SubSource](/developer-docs/flags/subsource) e [AddHits](/developer-docs/flags/addhits-subhits).

Na biblioteca do Game Boy Advance, existe um jogo de plataforma natalino chamado [Santa Claus Jr. Advance](http://retroachievements.org/Game/7152). Existem algumas conquistas para coletar todas as bengalas de doce em cada um dos estágios bônus.

Essas conquistas deveriam ser bem simples, desta maneira:

| ID  | Special? | Memory    | Cmp | Type  | Mem/Val   | Hits |
| --- | -------- | --------- | --- | ----- | --------- | ---- |
| 1   |          | 0xCANDIES | !=  | Delta | 0xCANDIES | (N)  |
| 2   | ResetIf  | 0xSTAGE   | !=  | Value | 0xBONUS   |      |

Isso se traduz em "verificar se o contador de bengalas de doce mudou `N` vezes no estágio bônus".

**Nota**: estamos usando `0xCANDIES != Delta 0xCANDIES` (usando `!=` e não `>`) porque quando o jogador tem 99 doces e coleta mais um, o contador vai para zero.

No entanto, existe um aspecto neste jogo (e em muitos outros) onde se o jogador coletar 2 bengalas de doce simultaneamente, o contador é aumentado em 2 no mesmo frame. Quando isso acontece, o contador de hits é aumentado em um enquanto o contador de doces é aumentado em dois. Isso, obviamente, arruína a lógica usada acima.

Para contornar esse problema, precisamos usar aquela técnica de [usar `SubSource` para contar incrementos específicos](/developer-docs/flags/subsource#using-subsource-to-count-specific-increments) combinada com a [flag `AddHits`](/developer-docs/flags/addhits-subhits).

Vamos dar uma olhada na lógica da conquista e depois veremos a explicação:

## Endereços

- `0x80dc`: Contador de Bengalas de Doce.
- `0x809c`: ID do Estágio.

Agora a estrutura da conquista será assim:

![](https://i.imgur.com/sDtPpX9.png)

## Condições

1. Junto com a condição 2, é um truque usado para verificar se `0xCANDIES - Delta 0xCANDIES = 2`. Em outras palavras, o contador de doces foi incrementado em dois.

2. Usado junto com a condição 1 (como explicado acima) e 3. Como explicado em [sua respectiva página](/developer-docs/flags/addhits-subhits), quando a condição `AddHits` é verdadeira, o contador de hits na próxima condição é incrementado. Portanto, em nosso exemplo aqui, quando a condição 2 é verdadeira, o contador de hits na condição 3 é incrementado.

3. Conta quando o contador de doces muda.

4. Reseta o contador se não estiver no estágio Bônus.

Todas essas condições podem ser traduzidas como "enquanto estiver no estágio bônus, ativar a conquista se o contador de doces mudar 99 vezes, e se o contador de doces for incrementado em 2 no mesmo frame, contar uma mudança extra no contador de doces."

Então, agora está 100% resolvido, certo? Bem, na verdade, quase. Ainda existe uma exceção muito pequena. Lembra que foi dito antes que `!=` estava sendo usado em vez de `>` porque **quando o jogador tem 99 doces e coleta mais um, o contador vai para zero**?

Isso significa que, se pegarmos duas bengalas no mesmo frame (o que já é raro), existe uma possibilidade muito pequena de que essa mudança seja de `98 -> 00` ou de `99 -> 01`. Nesses dois únicos casos, nosso código não funcionará, porque `00 - 98` não é 2, é `-98`. O mesmo vale para `01 - 99`, não é 2, também é `-98`.

Apesar de ser uma possibilidade muito improvável, devemos tratar esse caso também. Então vamos adicionar mais dois requisitos ao código, e ele ficará assim:

![](https://i.imgur.com/6wePK8N.png)

É o mesmo que antes, com as únicas mudanças sendo as linhas 3 e 4, que representam um `SubSource + AddHits` extra para verificar se `0xCANDIES - Delta 0xCANDIES = -98`, apenas para cuidar dessa exceção muito pequena que acabamos de mencionar.

E agora está resolvido!
