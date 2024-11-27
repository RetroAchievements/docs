# Definição de Valores

As definições de valores são usadas para [Leaderboards](/pt/developer-docs/leaderboards#value) e [Estado de Presença](/pt/developer-docs/rich-presence#value-properties).

Um valor é calculado avaliando uma ou mais [leituras de memória](/pt/developer-docs/condition-syntax). Os valores lidos podem ser escalados (multiplicação) ou somados (adição) para chegar ao valor final.

**NOTA**: Os cálculos de valores são realizados usando números inteiros de 32 bits com sinal. Assim, o valor máximo é 2147483647 e o valor mínimo é -2147483648. Valores acima do máximo darão a volta e serão registrados como números muito negativos.

## Valor a partir de `Measured`

A partir da DLL 0.77 (e RetroArch 1.8.2), você pode usar a flag [`Measured`](/developer-docs/flags/measured) para gerar um Valor. Isso suporta toda a lógica suportada pelo editor de conquistas, mas cada condição deve ter uma flag que influencie de alguma forma o valor `Measured` (ou seja, [AddSource](/developer-docs/flags/addsource), [AddAddress](/developer-docs/flags/addaddress)). Note que a condição `Measured` não pode ter um multiplicador diretamente nela. Se a cláusula final precisar ser multiplicada, use um AddSource adicional e Measure 0.

**VAL**: `A:0xhfe24_A:0xhfe25*60_A:0xhfe22*3600_M:0`

O exemplo acima pode ser lido como:

```
AddSource 8-bit 0xfe24
AddSource 8-bit 0xfe25 * Value 60
AddSource 8-bit 0xfe22 * Value 3600
Measured  Value   0
```

Os endereços representam frames, segundos e minutos respectivamente, e são individualmente multiplicados e depois somados para criar um número total de frames que pode ser enviado ao banco de dados.

## Valor a partir de `HitCount`

Às vezes você quer contar o número de vezes que algo acontece e enviar isso como valor. Você também pode fazer isso usando a sintaxe `Measured`. Basta adicionar uma comparação à sua condição final. Não inclua um alvo Hit explícito, ou esse será o valor máximo que pode ser enviado.

O [`HitCount`](/developer-docs/hit-counts) na condição será automaticamente definido como 0 quando a tabela de classificação começar, e o `HitCount` será enviado como Valor quando o gatilho de envio de Leaderboard for ativado. Você pode usar [PauseIf](/developer-docs/flags/pauseif) e [ResetIf](/developer-docs/flags/resetif) dentro das condições de Valor para controlar ainda mais o comportamento.

Por exemplo:

```
M:0xH1234!=d0xH1234
```

Enviaria o número de vezes que o byte em $1234 mudou enquanto a tabela de classificação estava ativa.

```
N:0xH1234!=20_M:0xH1234!=d0xH1234
```

Enviaria o número de vezes que o byte em $1234 mudou para algo diferente de 20 enquanto a tabela de classificação estava ativa.

### Sintaxe Legada:

**VAL**: `0xhfe24*1_0xhfe25*60_0xhfe22*3600`

Antes da introdução da flag `Measured`, os Valores eram escritos usando sua própria sintaxe. Algumas pessoas ainda preferem essa sintaxe, pois geralmente é mais fácil de fazer manualmente. Um valor legado é a soma de uma coleção de valores de memória multiplicados por modificadores.

`address*modifier` (endereço vezes modificador)

O operador `_` sublinhado separa os valores individuais e age como 'mais'. Então o exemplo acima representa:

```
8-bit 0xfe24 times 1, PLUS
8-bit 0xfe25 times 60, PLUS
8-bit 0xfe22 times 3600
```

Os endereços representam frames, segundos e minutos respectivamente, e são individualmente multiplicados e depois somados para criar um número total de frames que pode ser enviado ao banco de dados.

Para adicionar uma constante, use `_vN` onde N é a constante em decimal (ou seja, `_v10`) adicionará 10 ao resultado. Você também pode usar valores negativos para N (ou seja, `_v-10` subtrairá 10 do resultado).

**Dica**: o modificador pode ser um valor não inteiro, então se você precisar dividir por dois, pode multiplicar por 0.5: `0xhfe24*0.5`

### Modificadores

### Máximo de

Múltiplos cálculos de valor podem ser unidos com um `$`. Isso é similar a grupos alternativos em um gatilho, mas em vez de qualquer grupo alternativo precisar ser verdadeiro, qualquer "valor alternativo" que for maior será usado como o valor geral para a expressão.

`M:0xH1234$M:0xH1235` retornaria o maior dos valores em $1234 ou $1235.

#### Inversão Binária

Uma única referência de memória pode ser prefixada com um `~` para realizar uma inversão binária nela. Depois de ler o valor da memória, cada bit é trocado (0s se tornam 1s, 1s se tornam 0s).

Tipicamente, isso é usado para adicionar ou subtrair um valor condicionalmente:

`A:0xH1234*~0xM1233_M:0xH1235` adicionará o byte em $1234 ao byte em $1235 se o bit0 de $1233 não estiver definido.

#### Decimal Codificado em Binário (BCD)

Decimal Codificado em Binário (BCD) é quando valores na memória são armazenados como dígitos decimais em cada posição de dígito hexadecimal. Por exemplo, se o inspetor de memória mostrar 86 em um byte na memória, normalmente representaria o valor decimal 134 (0x86 hex = 134 decimal). A decodificação BCD do valor mantém os números decimais individuais e o resultado é 86 (0x86 hex = 86 BCD).

Você pode fazer o runtime decodificar valores BCD colocando um prefixo `b` na frente da referência de memória (ou seja, `b0xW1234`). Você ainda precisa especificar o tamanho do endereço de memória BCD. b0x1234 lê um valor de 16 bits. b0xh1234 lê um valor de 8 bits e b0xX1234 lê um valor de 32 bits. NOTA: O suporte para decodificação BCD de 16 bits e 32 bits é um recurso do toolkit 0.075.
