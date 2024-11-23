---
title: Usando o Tamanho do BitCount no Desenvolvimento de Conquistas
description: Aprenda a usar o tamanho do BitCount para contar bits definidos em um byte para criar condições de conquistas eficientes e eficazes.
---

# Tamanho do `BitCount`

`BitCount` é um atalho para contar o número de bits definidos em um byte.

```
BitCount Mem 0x1234 == Value 6
```

é o mesmo que

```
AddSource Bit0 Mem 0x1234
AddSource Bit1 Mem 0x1234
AddSource Bit2 Mem 0x1234
AddSource Bit3 Mem 0x1234
AddSource Bit4 Mem 0x1234
AddSource Bit5 Mem 0x1234
AddSource Bit6 Mem 0x1234
          Bit7 Mem 0x1234 == Value 6
```

e seria verdadeiro para `0x3F` (00111111), `0xDB` (11011011), `0xEE` (11101110), etc.

Seu uso mais comum é contar colecionáveis para uma condição [`Measured`](/developer-docs/flags/measured).

Pode ser combinado com outras flags como [Delta](/pt/developer-docs/delta-values).

```
BitCount Mem 0x1234 != BitCount Delta 0x1234
```

Se você apenas quer garantir que todos os bits estão definidos e não precisa se preocupar com algum subconjunto de bits estar definido, você deve verificar valores concretos (ou seja, `Eight Bit 0x1234 = 0xFF` ou `Lower4 0x1234 = 0x0F`).

**ATENÇÃO**: BitCount sempre conta todos os oito bits em um byte. Se você só precisa de 6 ou 7 bits, você deve usar a cadeia AddSource caso os outros bits sejam usados para outra coisa.
