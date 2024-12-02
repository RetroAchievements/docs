---
title: Criando Entradas
description: Diretrizes sobre convenções de nomenclatura para títulos de entradas do RA, incluindo o tratamento de títulos regionais, tags e separadores de barra vertical, além de regras para criação de hubs e vinculação de jogos bootleg.
---

# Criando Entradas

Página em Desenvolvimento (WIP)

- [Convenções de Nomenclatura](#convenções-de-nomenclatura)
  - [Títulos Regionais](#títulos-regionais)
  - [Tags](#tags)
    - [Múltiplas Tags](#múltiplas-tags)
    - [Não Licenciado vs Hack](#não-licenciado-vs-hack)
  - [Artigos e Separadores de Barra Vertical](#artigos-e-separadores-de-barra-vertical)
- [Hubs](#hubs)
  - [Vinculando Bootlegs](#vinculando-bootlegs)

## Convenções de Nomenclatura

### Títulos Regionais

Quando títulos em inglês e japonês são usados no título de uma entrada do RA, o título japonês deve aparecer primeiro apenas se o jogo nunca foi lançado oficialmente em inglês, tornando qualquer título em inglês usado um título não oficial.

- Exemplo: `Trials of Mana | Seiken Densetsu 3`, que é aceitável porque o lançamento oficial em inglês veio muito mais tarde. Antes disso, todos usavam Secret of Mana 2 como o título em inglês, caso em que o título da entrada do RA seria `Seiken Densetsu 3 | Secret of Mana 2`.

### Tags

- `~Demo~`
- `~Hack~`
- `~Homebrew~`
- `~Prototype~`
- `~Test Kit~`
- `~Unlicensed~`

### Múltiplas Tags

Nos casos em que `~Demo~` ou `~Prototype~` são usados junto com `~Hack~` ou `~Homebrew~`, eles devem ser listados após os últimos.

- Exemplo: `~Homebrew~ ~Demo~ Bob's Game` em vez de `~Demo~ ~Homebrew~ Bob's Game`.  
  O motivo é que, independentemente do estágio em que o jogo está, ele sempre será um homebrew ou um hack; portanto, essas tags devem ter prioridade.

### Não Licenciado vs Hack

Nos casos em que um jogo não é licenciado e, na verdade, é apenas um hack de outro jogo, então `~Hack~` deve ser usado em vez de `~Unlicensed~`.

- Exemplo: Final Fantasy VII no NES, que é uma versão bootleg/pirata, mas na verdade é apenas um hack de Final Fantasy III colocado em um cartucho. Assim, a entrada no RA seria Hack Final Fantasy VII.

### Artigos e Separadores de Barra Vertical

Como os artigos A/An/The são movidos para o final de um título (mas ANTES de um subtítulo), também devemos fazer isso quando há um separador de barra vertical entre títulos regionais.

- Exemplo: em vez de `Garfield Labyrinth | The Real Ghostbusters | Mickey Mouse IV`, que é o que está atualmente, usamos `Garfield Labyrinth | Real Ghostbusters, The | Mickey Mouse IV`. O motivo é que eventualmente podemos ter uma forma de definir quais títulos queremos visualizar por padrão.

## Hubs

### Vinculando Bootlegs

Jogos Bootleg/Pirata NÃO devem ser vinculados aos hubs da série que estão copiando.
