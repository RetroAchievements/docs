---
title: Notas de Código
description: Um guia para desenvolvedores sobre como criar notas de código claras e consistentes no RetroAchievements. Aprenda a documentar endereços de memória, especificar tamanhos de endereço e garantir que desenvolvedores futuros possam facilmente entender e usar suas notas.
---

# Notas de Código

[[toc]]

As notas de código são uma parte essencial do desenvolvimento de conquistas. Elas fornecem um contexto valioso para os endereços de memória usados na criação de conquistas. Boas notas de código podem facilitar muito a solução de problemas futuros, enquanto notas ruins podem transformar isso em um pesadelo. Este guia ajudará os desenvolvedores a criar notas de código claras, úteis e consistentes, que poderão ser usadas por qualquer desenvolvedor no futuro.

## Como Criar Notas de Código

As notas de código são criadas pelo desenvolvedor no **Memory Inspector** enquanto exploram a RAM de um jogo. Isso permite visualizar facilmente os tamanhos de endereços notáveis, bem como áreas da RAM que armazenam valores importantes. As notas de código podem ser adicionadas, deletadas e atualizadas diretamente no **Memory Inspector**. Notas já criadas também podem ser editadas ou apagadas na página "Code Notes" do jogo no site, mas isso é destinado apenas para correções rápidas.

- Os desenvolvedores podem adicionar quaisquer notas de código a qualquer jogo sem declarar intenção de trabalhar no jogo. Apenas tome cuidado para não apagar notas anteriores de outros desenvolvedores, a menos que você tenha certeza de que estão incorretas.
- **Desenvolvedores Júnior** devem limitar suas notas ao jogo que reivindicaram. Eles não podem apagar ou sobrescrever notas criadas por outros usuários.

## Recomendações

- **Seja Claro e Informativo**: As notas de código devem documentar claramente o que o endereço representa, de forma que outros desenvolvedores possam entendê-las facilmente.
- **Especifique o Tamanho do Endereço**: Notas de código devem especificar o tamanho do endereço documentado. Isso ajuda a identificar rapidamente o tamanho ao criar lógica de conquistas e a colorir os valores corretamente no **Memory Inspector**.
- **Inclua Valores Importantes**: Documente todos os valores usados na lógica das conquistas. Valores não documentados dificultam a depuração, especialmente se você não criou a nota original.
- **Documente Extensivamente**: É melhor documentar quaisquer endereços úteis encontrados, mesmo que você saiba que não precisará deles na lógica da conquista. Nunca se sabe quais endereços podem ser úteis em revisões futuras.

::: tip PARA QUEM SÃO AS NOTAS DE CÓDIGO?
Daqui a cinco anos, alguém pode precisar ler suas notas de código para resolver um problema. Escreva notas para ajudar futuros desenvolvedores a entender os endereços de memória e a lógica das conquistas. Documentação clara facilita o trabalho de manutenção. Outro desenvolvedor entenderá o que um endereço representa e como usá-lo?
:::

## Especificando o Tamanho dos Endereços de Memória

Existem várias maneiras de especificar um endereço de memória que serão reconhecidas pelo destaque do **Memory Inspector**. Qualquer nota de código que não especifique um tamanho válido destacará apenas o byte ao qual se refere. Muitos desenvolvedores colocam o tamanho do endereço entre colchetes (`[]`) para torná-lo mais visível.

- `[Lower4]`, `[Upper4]`
- `[8-bit]`, `[16-bit]`, `[24-bit BE]`, `[32-bit]`, `[Float]`
- `[1 byte]`, `[2 bytes]`, `[4 bytes]`, `[8 bytes]`
- `[128 bits]`, `[78 bytes]`, `[428 bits]`, `[1024 bytes]`

### Campos e Flags de Bits

Frequentemente, você encontrará endereços que utilizam cada bit individualmente para armazenar dados. Embora marcar os bits individualmente não altere o destaque no **Memory Inspector**, cada bit deve ser claramente documentado na nota. Algumas pessoas optam por marcar o tamanho deles como [Bitfield] ou [Bitflags] em vez de [8-bits].

## Adicionando Valores e Rótulos

Ao rotular valores específicos ou significados de bits, considere o seguinte:

- Sempre prefixe valores hexadecimais com `0x` para deixar claro que estão em hexadecimal.
- Se os valores estiverem em decimal, considere adicionar uma observação na descrição: `(Os valores abaixo estão em decimal)`.
- Coloque cada valor em uma linha separada para facilitar a leitura visual, especialmente se houver mais de dois valores.
- Se houver apenas dois valores (exemplo: Sim/Não), você pode colocá-los na mesma linha, junto com a descrição.
- Coloque um separador entre o valor e seu rótulo. Pode ser um sinal de igual, dois pontos ou um traço, e você pode colocar espaços em branco conforme necessário. Dica: Usar um sinal de igual sem espaços permite que você copie facilmente a lista de valores em uma pesquisa [Rich Presence](/developer-docs/rich-presence).

## Exemplos

### Tipos Simples

Tipos simples de endereços cobrem os endereços básicos necessários para quase todos os conjuntos de conquistas e geralmente são alguns dos primeiros endereços identificados durante a análise da RAM. Frequentemente, podem ser descritos de forma simples, em uma ou duas linhas. Estes podem incluir saúde, vidas, moeda no jogo, nível, posições X/Y, etc...

#### Bons Exemplos

Bons exemplos aqui incluem o tamanho, a descrição e os diferentes valores ou efeitos sobre os valores.

```
[8-bit] Dificuldade
0x01 - Fácil
0x02 - Normal
0x03 - Difícil
```

```
[16-bit] Saúde do Jogador
Saúde máxima é 0x1200, cada golpe reduz 0x8
```

#### Maus Exemplos

```
Dificuldade
```

```
Saúde
```

### Tipos de Mapas ou IDs de Tela

Usados para determinar a localização no jogo, comuns em conquistas de conclusão de nível ou coleta de itens.

#### Bom Exemplo

Bons exemplos aqui incluem os vários valores que o endereço pode assumir ao longo do jogo. Todos os endereços usados na lógica das conquistas são anotados em detalhes.

```
[8-bit] ID de Tela
Capítulo I
0x36 - Tela inicial com rosto da mulher
0x0b - Cena de táxi
0x07 - Fora do apartamento (Dia 1)
0x04 - Corredor principal do apartamento (Dia 1)
0x16 - Corredor principal (Dia 2)

Capítulo II
0x37 - Cena de introdução ao dirigir
0x2b - Fora da pousada (Dia 1)
0x2c - Sala principal da pousada (Dia 1)
```

#### Mau Exemplo

```
ID da tela
```

### Pontuações

Existem várias maneiras pelas quais um jogo pode armazenar as pontuações dos jogadores na memória. Por isso, há diversas formas de escrever uma nota de código para pontuações.

#### Bons Exemplos

Bons exemplos aqui especificarão o tamanho, quais dígitos da pontuação estão sendo representados, como a pontuação exibida na tela é calculada a partir do valor na memória, notação Decimal Codificado em Binário (BCD), se aplicável, bem como outros detalhes importantes.

```
[1 byte] Pontuação exibida do jogador 1, dígitos 0000XX00 em BCD
```

```
[16bit][DEC] Pontuação do jogador 2 XXXX0000
```

```
Pontuação [24-Bit BE BCD] (Determina o Rank)
0-9=Pobre
0-99=Camponês
100-999=Próspero
1000+=Profissional
```

#### Mau Exemplo

```
Pontuação do jogador 1
```

### Bits

É muito comum encontrar jogos que precisam armazenar flags de eventos ou itens. Frequentemente, essas flags são armazenadas como bits individuais, em vez de ocupar um byte inteiro por flag. Assume-se que um valor de bit igual a 0 significa desligado/não/falso; caso contrário, isso deve ser especificado.

#### Bons Exemplos

Bons exemplos aqui especificarão cada bit, bem como o que eles representam.

```
[Bitflags] Solicitações concluídas
Bit1 = Nº 01 - Recuperar 1 Carapaça de Besouro.
Bit2 = Nº 02 - Recuperar o primeiro documento antigo.
Bit3 = Nº 03 - Gostaria de tomar uma Bebida Muscular.
Bit4 = Nº 04 - Recuperar 3 Lanternas Velhas.
Bit5 = Nº 05 - Recuperar o segundo documento antigo.
Bit6 = Nº 06 - Criar Jack Frost com Dia.
Bit7 = Nº 07 - Recuperar 1 Metal de Chumbo.
```

```
Bônus Desbloqueados
bit0 - Todos os Itens de Replay
bit1 - Munição Ilimitada (Missão 1)
bit2 - Balas de Prata (Missão 3)
bit3 - Escudo de Bala (Missão 4)
bit4 - Granadas de Borracha
bit5 - Homens com Chapéus (Missão 5)
bit6 - Sempre Sniper
bit7 - Cabeça de Aquiles (Missão 6)
```

```
[Bandeiras de Tesouro 03]
Bit0=[Altair - Esconderijo Rebelde] Poção
Bit1=[Fynn - Porão do Pub] Anel de Scott
Bit2=[Castelo Deist 1F - Sala do Tesouro Sul] Tomo de Paralisia
Bit3=[Castelo Deist 1F - Sala do Tesouro Sul] Tomo de Paralisação
Bit4=[Castelo Deist 1F - Sala do Tesouro Sul] Tomo de Maldição
Bit5=[Caverna de Mysidia B4 - Sala do Tesouro] Sino do Silêncio
Bit6=[Castelo Deist 1F] Phoenix Down
Bit7=[Castelo Deist 1F - Sala do Tesouro NO] Agulha de Ouro
```

#### Mau Exemplo

```
Bits representam bônus desbloqueados
```

### Pointers

# Ponteiros

Os ponteiros são mais comumente encontrados em consoles mais modernos, e suas anotações geralmente incluem informações sobre vários endereços que o ponteiro pode apontar. As anotações de ponteiro normalmente incluem diversos valores de deslocamento para os endereços importantes usados pelo desenvolvedor.

- Se os deslocamentos com rótulos forem escritos corretamente, o inspetor de memória e o editor de ativos gerarão anotações de código indiretas no _endereço do ponteiro + deslocamento_ com o tamanho correto.
- Use um sinal de mais `+` antes do valor do deslocamento.
  - Para ponteiros com várias camadas, muitas pessoas usam sinais de mais adicionais para indicar que é um deslocamento de um ponteiro apontado pelo ponteiro original. No entanto, isso interromperá todas as anotações de código indiretas para esse ponteiro. Considere usar uma barra vertical antes desses deslocamentos em camadas para permitir que a camada superior gere anotações de código indiretas.
- Use `0x` para indicar um valor de deslocamento hexadecimal; o inspetor de memória tratará como um deslocamento decimal se isso não estiver presente.
- Você pode separar o valor do deslocamento e seu rótulo com qualquer número de espaços e um caractere separador, como um sinal de igual, dois pontos ou uma barra vertical.
- Você deve especificar o tamanho dos dados no deslocamento como qualquer anotação de código normal. As anotações indiretas e o realce usarão essa informação.
- Se várias linhas estiverem presentes após o valor de deslocamento, todas farão parte da anotação indireta para aquele endereço.

#### Bons Exemplos

Bons exemplos aqui incluirão vários deslocamentos de endereço, cada um com detalhes e o tamanho do endereço apontado.

```
Ponteiro para Dados P1 [16-Bit]
+0x68 ID do Personagem P1 [8-Bit]
+0xba Saúde do P1 [8-Bit]
+0xc4 ID de Movimento do P1 [16-Bit]
```

```
[32-bit] Ponteiro de Dados
+0x638 | Ponteiro para ponteiro do ponteiro de cheiros
++0x6d0 | Ponteiro para latidos
+++0xb8 | Total de Latidos [32-bit]
+++0x380 | Nível de Farejo [32-bit]
0x00 = Aprendiz do Farejo
0x01 = Artesão do Farejo
0x02 = Especialista do Farejo
0x03 = Mestre do Farejo
0x04 = Grande Mestre do Farejo
+++0x3c8 | Ponteiro para Dados de Corrida [32-bit]
++++0x15a8 | Contagem de Checkpoints [32-bit]
++++0x15ac | Temporizador de Quadro [32-bit]
++0x13d8 | Ponteiro para ponteiro de cheiros
+++0x04 | Total de Cheiros [32-bit]
```

```
*US* Ponteiro [32-bits]

--Jogador Kratos--
+0x97898=Saúde [Float]
+0x6f570=Combo [32-bits]
+0x977a0=Coordenadas Y [Float]
+0x977a4=Coordenadas Z [Float]
+0x977a8=Coordenadas X [Float]

--Desbloqueáveis (Alternativo)--
+0x6f594=Tridente de Poseidon [Bit0]
+0x6f598=Fúria de Poseidon [Bit0]
+0x6f59c=Olhar de Medusa [Bit0]
+0x6f5a0=Fúria de Zeus [Bit0]
+0x6f5a4=Exército de Hades [Bit0]
+0x6f5a8=Lâmina de Artemis [Bit0]
```

#### Mau Exemplo

```
Pointer para informações do jogador. Inclui dados e desbloqueáveis.
```
