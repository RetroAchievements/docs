---
title: Visão Geral do Inspetor de Memória
description: Aprenda a usar a ferramenta Inspetor de Memória para o RetroAchievements para encontrar e analisar endereços de memória do jogo.
---

# Visão Geral do Inspetor de Memória

Aqui está uma visão geral do **Inspetor de Memória**  e suas funcionalidades. Esta ferramenta pode ser encontrada no menu "RetroAchievements" em qualquer emulador integrado ao RA.

**Veja também**: [Dicas para Exploração de Memória](/pt/developer-docs/#dicas-de-escavacao-de-memoria).

[[toc]]

## Diálogo do Inspetor de Memória

![memoryinspector-num](/public/memoryinspector-num.png)

### 1. Nova Pesquisa

Esta é a primeira coisa que você deve fazer quando estiver procurando algo na memória.

O primeiro menu suspenso permite que você selecione rapidamente Toda a memória, RAM do Sistema ou RAM do Cartucho. O campo abaixo do primeiro menu suspenso permite que você digite um intervalo personalizado (por exemplo, 0x10000-0x100FF).

O segundo menu suspenso especifica o tamanho dos dados que você está interessado em encontrar.

O botão `Reset` limpa quaisquer resultados capturados anteriormente (parte 3 do diálogo) e captura o estado atual da memória.

### 2. Filtro

Filtra o estado da memória em uma tentativa de localizar um endereço de memória específico.

O primeiro menu suspenso permite que você especifique a comparação a ser usada. O segundo menu suspenso é aquilo com o que você está comparando. Na maioria das vezes, você vai estar filtrando por `!= Last Value`, que elimina quaisquer resultados onde a memória não mudou.

As comparações disponíveis são:

- `Constante` - a comparação é feita contra o valor inserido no campo abaixo do menu suspenso.
- `Último Valor` - a comparação é feita contra o valor capturado pelo último filtro aplicado, ou o valor inicial se nenhum filtro foi aplicado
- `Último Valor Mais` - a comparação é feita contra o Último Valor mais o valor inserido no campo abaixo do menu suspenso. Se o valor fosse 3, a comparação seria feita contra um número que é três unidades maior que o Último Valor para cada valor capturado pelo último filtro aplicado.
- `Último Valor Menos` - o mesmo que Último Valor Mais, exceto que o valor inserido no campo abaixo do menu suspenso é subtraído de cada valor capturado pelo último filtro aplicado.
- `Valor Inicial` - a comparação é feita contra o valor capturado quando a Nova Pesquisa foi iniciada.

O botão `Filtrar Uma Vez` aplica imediatamente o filtro selecionado e atualiza os Resultados.

O botão `Filtro Contínuo` aplica o filtro selecionado repetidamente até ser interrompido. Quanto menos resultados houver, mais frequentemente o filtro é aplicado. O filtro é aplicado apenas uma vez a cada N ms, onde N é o número de resultados / 1000. Se houver menos de 1000 resultados, ele é aplicado a cada frame. Se houver 50000 resultados, é aplicado a cada 500ms (duas vezes por segundo). Se houver 1000000 resultados, é aplicado apenas a cada 10 segundos.

### 3. Resultados

Conforme os filtros são aplicados, a lista de possíveis correspondências aparecerá aqui.

No lado esquerdo estão as informações sobre os resultados, incluindo o número de correspondências, o filtro aplicado e quantos filtros foram aplicados. Se você acredita que aplicou um filtro incorretamente, ou se o filtro resulta em nenhuma correspondência, você pode usar o botão `<<` para retornar ao conjunto anterior de resultados. Você pode fazer isso até voltar aos resultados iniciais. Da mesma forma, você pode usar o botão `>>` para retornar aos resultados dos quais você saiu. Uma vez que você aplica um novo filtro, os filtros posteriores são descartados e o botão `>>` é desativado.

Abaixo das informações de resultado estão dois botões. O primeiro permite que você remova manualmente os itens selecionados do conjunto de resultados. Você pode usar Ctrl e Shift para selecionar múltiplos itens. O segundo permite criar um favorito para um item no conjunto de resultados. Ele aparecerá no diálogo de Favoritos.

![memoryinspector-filter](/public/memoryinspector-filter.png)

Os itens no conjunto de resultados mostram o endereço da correspondência, o valor atual e uma breve descrição da memória no endereço. Se existir uma nota de código para o endereço, ela será mostrada. Caso contrário, uma classificação geral do endereço será mostrada.

Além disso, os itens no conjunto de resultados podem ser coloridos.

- Vermelho - o item atualmente não corresponde ao filtro
- Cinza - o item atualmente corresponde ao filtro, mas em algum momento desde que o filtro foi aplicado ele não correspondia.
- Verde - o item está marcado como favorito
- Azul - o item tem uma nota de código

Clicar em uma linha definirá o endereço selecionado para o item associado.

### 4. Notas de Código

Fornece informações detalhadas sobre o endereço selecionado e permite que o usuário anote endereços encontrados pelo processo de busca. Tente manter suas descrições simples e claras, para que possam ser facilmente compreendidas. Notas claras são importantes para depuração se ocorrer um problema com uma conquista.

O campo de texto mostra o endereço atualmente selecionado na visualização de memória (parte 5 do diálogo). Você pode digitar manualmente qualquer endereço, ou usar as setas para cima e para baixo para pular para o próximo ou anterior endereço que tenha uma nota de código.

Logo à direita do campo de texto há um botão que abre o diálogo de Notas de Código, que permite que você navegue e pesquise através das notas de código.

Abaixo do campo de texto há um botão que criará um favorito a partir do endereço selecionado.

A área de texto grande é onde você pode modificar a nota de código para o endereço selecionado. NOTA: as alterações não são salvas a menos que você pressione o botão Salvar Nota. Se você mudar o endereço selecionado sem salvar, as alterações serão perdidas.

`Salvar Nota` e `Excluir` tentam imediatamente atualizar o servidor - seja com o texto da nota modificado, ou limpando o texto da nota.

### 5. Visualização de Memória

Permite a navegação direta da memória. A memória é atualizada uma vez por frame conforme o emulador é executado.

O endereço atualmente selecionado aparece em vermelho. Endereços com notas de código aparecem em azul, e endereços associados a favoritos aparecem em verde.

Você pode clicar em qualquer parte dos dados no visualizador de memória para pular para o endereço associado. Você também pode usar o teclado para navegar pela memória (cima/baixo/esquerda/direita/pgup/pgdn/home/end).

Quando o visualizador de memória está focado, um cursor estará visível. Você pode digitar qualquer caractere hexadecimal para mudar o caractere no cursor para outro valor. Isso muda imediatamente o valor para o emulador e pode causar comportamento inesperado, então use por sua própria conta e risco. Além disso, modificar a memória (através de qualquer uma das ferramentas) impede que as conquistas sejam desbloqueadas no servidor como um mecanismo anti-trapaça.

### Favoritos de Memória

Você pode abrir o diálogo de Favoritos de Memória no menu RetroAchievements. Ele também abrirá automaticamente ao adicionar um favorito a partir de qualquer um dos botões no diálogo do Inspetor de Memória.

![memoryinspector-bookmark](/public/memoryinspector-bookmark.png)

Com isso, você pode visualizar múltiplos endereços designados de uma vez, em vez de ter que navegar pelo Inspetor. Endereços favoritados aparecerão em verde no Inspetor de Memória.

Se você der um duplo clique em um endereço, você pode ir direto para esse endereço no Inspetor de Memória.

Os favoritos podem ser renomeados clicando em sua descrição. Isso não atualiza a nota de código para o endereço associado.

Você pode mudar o tamanho ou formato de um favorito clicando no campo e selecionando um novo valor no menu suspenso. Clicar no campo de valor permitirá que você insira um novo valor para o favorito. Ele será automaticamente escrito na memória.

A partir daqui você também pode Congelar quaisquer favoritos. Isso é útil para coisas como saúde ou consumíveis. Tenha em mente que o congelamento ocorre **1 frame após a jogabilidade.** Isso significa que mesmo quando congelado, o valor mudará por pelo menos um frame antes de retornar ao valor congelado. Favoritos congelados serão exibidos em amarelo.

## Lendo Dados no Visualizador de Memória

### Notações Decimal, Binária e Hexadecimal

Para trabalhar bem com o Visualizador de Memória, é importante entender pelo menos o básico das notações numéricas binárias e hexadecimais. Aqui estão boas fontes de informação sobre este assunto sem entrar em detalhes extremos:

- https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_bin%C3%A1rio
- https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_hexadecimal

Os dígitos usados no **sistema binário** são `0` e `1`. Um _dígito binário_ também é conhecido como um **bit**. Oito bits também são conhecidos como um **byte**.

Os dígitos usados no **sistema hexadecimal** são `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `A`, `B`, `C`, `D`, `E` e `F`. A _notação hexadecimal_ também é conhecida como **hex**.

As principais razões para a existência dessas 2 notações, além da notação decimal tradicional, são:

- Notação decimal é o que os humanos entendem.
- Notação binária é o que os computadores "entendem".
- Notação hexadecimal pode ser vista como um meio termo entre binário e decimal. Como um único dígito hexadecimal representa 4 bits, então é uma notação mais curta e mais compreensível para humanos trabalharem de uma forma que o computador "entende".

A tabela abaixo mostra as diferentes notações para valores equivalentes.

| Decimal | Hexadecimal | Binário |
| ------- | ----------- | ------- |
| `0`     | `0x0`       | `0000`  |
| `1`     | `0x1`       | `0001`  |
| `2`     | `0x2`       | `0010`  |
| `3`     | `0x3`       | `0011`  |
| `4`     | `0x4`       | `0100`  |
| `5`     | `0x5`       | `0101`  |
| `6`     | `0x6`       | `0110`  |
| `7`     | `0x7`       | `0111`  |
| `8`     | `0x8`       | `1000`  |
| `9`     | `0x9`       | `1001`  |
| `10`    | `0xA`       | `1010`  |
| `11`    | `0xB`       | `1011`  |
| `12`    | `0xC`       | `1100`  |
| `13`    | `0xD`       | `1101`  |
| `14`    | `0xE`       | `1110`  |
| `15`    | `0xF`       | `1111`  |

Mais fatos sobre as diferentes notações numéricas:

- Para indicar que um valor está escrito em hexadecimal, o prefixo `0x` é usado: `0x10 = 16`, `10 = 10`.
- Dois dígitos hex representam 8 bits e podem variar de `0` a `255`.
- Quatro dígitos hex representam 16 bits e podem variar de `0` a `65535`.
- Oito dígitos hex representam 32 bits e podem variar de `0`a `4294967295`.

### Modos do Visualizador de Memória

A parte inferior do Inspetor de Memória é o que chamamos de Visualizador de Memória:

![memviewer](/public/memviewer.png)

Você pode ver dados no Visualizador de Memória usando modos de 8, 16 ou 32 bits.

#### Modo 8-Bit

Por padrão, o Visualizador de Memória mostra dados no modo 8-bit. Isso exibe cada byte de memória como um valor hexadecimal separado de dois caracteres. E cada byte tem seu próprio endereço.

Dezesseis bytes são mostrados por linha. O endereço de um byte pode ser determinado adicionando o índice da linha (exibido à esquerda do visualizador) ao índice da coluna (exibido acima do visualizador). Usando a [imagem acima](#modos-do-visualizador-de-memoria) como exemplo, o cursor está em `0x002a7` (`0x002a0` + `7`).

#### Modo 16 e 32-bit

Antes de falarmos sobre o modo 16-bit e modo 32-bit, é importante saber sobre endianness:

> #### Endianness
>
> Endianness descreve a ordem em que uma sequência de bytes é armazenada na memória dos sistemas de computador. Os dois tipos mais comuns são: **Big-Endian** (também conhecido como BE) e **Little-Endian** (também conhecido como LE).
>
> Na ordem **Big-Endian**, o "big end" do número (valor mais significativo na sequência) é armazenado primeiro (colocado no endereço mais baixo). Na imagem abaixo, você vê o número `0x12345678` armazenado no endereço `0x100` na ordem big-endian. Observe que o byte mais significativo `0x12` está no endereço `0x100`:
>
> ![bigendian](/public/bigendian.png)
>
> Na ordem **Little-Endian**, o "little end" do número (valor menos significativo na sequência) é armazenado primeiro. Na imagem abaixo, você vê o número `0x12345678` armazenado no endereço `0x100` na ordem little-endian. Observe que o byte menos significativo `0x78` está no endereço `0x100`:
>
> ![littleendian](/public/littleendian.png)

Valores que precisam de mais de 8-bits (em outras palavras: maiores que 255) precisam ser armazenados em múltiplos bytes. No entanto, os sistemas emulados que usamos armazenam valores multi-byte na ordem little-endian.

Na [imagem do Visualizador de Memória acima](#modos-do-visualizador-de-memoria), você pode ver que no endereço `0x0002c0` temos o valor hex `ce` e em `0x0002c1` o valor é `39`. Quando você muda o visualizador para o modo 16-bit, os valores `ce` e `39` são agrupados em `0x0002c0` e são exibidos como `39ce`. Isso acontece porque ele automaticamente agrupa cada dois bytes e os exibe como valores hex de 16 bits.

NOTA: Embora os valores de 16 bits geralmente estejam alinhados a endereços pares, isso nem sempre é o caso. Na verdade, há um valor de 16 bits não exibido em `0x0002c1`. Como o valor em `0x0002c1` é `39` e o valor em `0x0002c2` é `29`, o valor de 16 bits no endereço `0x0002c1` é `0x2939`.

De forma similar, no modo 32-bit, os quatro bytes de `0x0002c0` a `0x0002c3` são exibidos como um único valor de 32 bits `0x252939ce` no endereço `0x0002c0`, mas também há valores de 32 bits em `0x0002c1`, `0x0002c2` e `0x0002c3`.

### Trabalhando com Tamanhos Menores que 8-Bit

Além dos tamanhos de 8-bit, 16-bit e 32-bit descritos acima, existem tamanhos adicionais que podem ser usados ao escrever conquistas (no Editor de Conquistas).

#### Bits Individuais

No visualizador de memória, quando um endereço de 8-bit é selecionado, você verá algo como a imagem abaixo (na imagem: um byte com o valor `6f` está selecionado; os bits estão destacados com um círculo laranja):

![bitfields](/public/bitfields.png)

É muito comum em jogos armazenar informações importantes como um único bit. Como um bit só pode ter dois valores possíveis (`1` ou `0`), às vezes é usado para significar "sim" ou "não", "ligado" ou "desligado", "tem item" ou "não tem item", etc. Alguns jogos, especialmente aqueles com espaço de memória limitado, usam muito os switches de bits.

**NOTA:** Dar duplo clique no valor de um bit individual alternará entre 0 e 1.

**Importante:** Você pode se referir a cada um desses bits individualmente no Editor de Conquistas.

Significados comuns de switches de bits na memória de um jogo:

- possui um item
- botão pressionado (muito comum)
- área explorada
- gatilho do jogo ativado
- trapaça ativada
- em modo demonstração

No visualizador de memória, você só pode inserir valores hex, então é importante conhecer a equivalência de valores entre as notações hex e binária. Você pode ver a tabela na seção "[Notações Decimal, Binária e Hexadecimal](#notacoes-decimal-binaria-e-hexadecimal)" mas o usual é usar uma calculadora (a calculadora padrão do Windows na visão de programador pode fazer o trabalho).

#### Upper4 e Lower4

**Upper4** são os quatro bits superiores de um byte (bits: 7, 6, 5, 4), exibidos como um único caractere hexadecimal. **Lower4** são os quatro bits inferiores de um byte (bits: 3, 2, 1, 0), exibidos como um único caractere hexadecimal.

Olhando para o [diagrama de tamanhos de memória](#diagrama-de-tamanhos-de-memoria) abaixo, um byte no endereço `0x00a274` está selecionado (valor `0x23`). O primeiro caractere `2` é o valor Upper4. O segundo caractere `3` é o valor Lower4.

Ocasionalmente você estará interessado em trabalhar apenas com um único dígito hexadecimal. Usando o [diagrama de tamanhos de memória](#diagrama-de-tamanhos-de-memoria) como exemplo, uma condição de conquista onde `Upper4 0x00a274 = 0x2` seria verdadeira. Uma condição onde `Lower4 0x00a274 = 0x3` seria verdadeira.

### Diagrama de Tamanhos de Memória

![memsizes](/public/mem-inspector-size-diagram.png)
