---
title: Subconjuntos
description: Saiba mais sobre a criação e gestão de subconjuntos no RetroAchievements, incluindo tipos como Demonstrações de Glitches, Desafios, e DLC. Este guia cobre convenções de nomenclatura, processos de aprovação e exemplos de diferentes categorias de subconjuntos.
---

# Subconjuntos

_Tópico Avançado para Desenvolvedores_

[[toc]]

## O que são Subconjuntos?

Ao navegar pela [lista de jogos](http://retroachievements.org/gameList.php), você verá que alguns jogos possuem a tag `[Subset]` no título. Cada um desses subconjuntos contém conquistas que, por algum motivo, não estão disponíveis no conjunto base de um jogo. Subconjuntos geralmente incluem tipos específicos de desafios.

Os métodos para criar um subconjunto e os meios para jogá-los mudarão à medida que se tornarem um recurso mais integrado. Atualmente, eles exigem um patch para gerar um hash único e são entradas separadas do conjunto base, o que significa que as conquistas devem ser obtidas separadamente. Informações sobre como criar esses patches podem ser encontradas [aqui](https://github.com/RetroAchievements/RAPatches).

## Um Lembrete

Conquistas de desafios fazem parte do conjunto base por padrão. Apenas desafios de natureza extrema, como completar um jogo inteiro sem sofrer dano, devem ser considerados para subconjuntos. Subconjuntos não devem ser usados como um "depósito" para desafios que não se encaixam perfeitamente no conjunto base.

## Tipos de Subconjuntos

### Desafios

Enquanto muitos conjuntos base incluem desafios, desenvolvedores têm a opção de adicionar desafios que duram toda a jogabilidade a um subconjunto. Esses desafios geralmente vão contra a forma como o jogo é normalmente jogado. Exemplos:

- [Chrono Trigger - No Level Up](https://retroachievements.org/game/9966): completar o jogo sem subir de nível.
- [EarthBound - Rare Drops](https://retroachievements.org/game/18280): obter todos os itens raros de inimigos.
- [Final Fantasy - Solo Class](https://retroachievements.org/game/17996): completar o jogo usando apenas uma classe de personagem por vez, repetindo com cada classe para dominar o conjunto.
- [Super Mario Bros. - 5-Minute Speedrun](https://retroachievements.org/game/23910): completar o jogo em menos de 5 minutos.
- [Pokemon - Professor Oak Challenge](https://retroachievements.org/searchresults.php?s=Professor+Oak+Challenge): capturar e/ou evoluir todos os Pokémon possíveis entre pontos-chave da história.

### Desafios Extremos ou Brutais

Se geralmente é amplamente considerado que um desafio é **muito difícil**, ele é um bom candidato para um subconjunto. No entanto, apenas porque a(s) conquista(s) são possíveis de codificar, isso não significa que sejam possíveis de obter; portanto, a conquista ainda deve ser alcançável. Quão difícil é "muito difícil"? Algo que poucos jogadores de um conjunto seriam capazes de realizar. Se você espera uma taxa de obtenção inferior a 1%, provavelmente é extremo. Se parecer irracional exigir que alguém conquiste um feito, provavelmente é brutal.

- Um bom exemplo de uma única conquista que pode ser considerada extrema ou brutal é a infame [Mr. Perfect de Mega Man (NES)](https://retroachievements.org/achievement/53290), que exige que o jogador complete o _jogo inteiro_ sem sofrer dano.
- Um bom exemplo de um subconjunto completo é [Ninja Gaiden | Shadow Warriors (NES) [Subset - Full Game Damageless]](https://retroachievements.org/game/25303).
- Não é necessário chamar o subconjunto de "Desafio Brutal", mas esse tipo de subconjunto deve ser referenciado no plano de subconjunto ou em qualquer votação de subconjunto. Se houver dúvidas sobre se os desafios se enquadram nesta categoria, entre em contato com a Developer Compliance para um julgamento rápido.

### Subconjuntos Cooperativos Multijogador

Se uma conquista _exigir_ a entrada de mais de um jogador para ser desbloqueada, ela não pode estar no conjunto base. Subconjuntos cooperativos para múltiplos jogadores devem exigir que dois ou mais jogadores estejam controlando o jogo. Conquistas devem obrigatoriamente envolver múltiplos jogadores para serem apropriadas a esse tipo de subconjunto. Não é aceitável que conquistas possam ser obtidas por um único jogador enquanto estiver no modo multiplayer.

Se o título do jogo base for longo, o nome desse subconjunto pode ser abreviado. Se for necessário usar um nome abreviado, a seguinte lista de prioridades deve ser usada para encontrar uma opção que se encaixe: "Multiplayer Co-op," "Multi Co-op," ou "Co-op".

### DLC e Expansões

Não é muito comum, mas se tornará mais frequente à medida que o suporte a consoles se expandir. Conquistas nesses conjuntos são exclusivas para o conteúdo adicional ou pacotes de expansão de um jogo. Exemplos:

- [Arc the Lad 2 - Arc Arena: Monster Tournament](https://retroachievements.org/game/17001) foi lançado como um disco bônus na coleção Arc the Lad. Ele exige dados salvos de Arc the Lad 2 para ser jogado.
- [F-Zero X - Expansion Kit](https://retroachievements.org/game/10962) - as conquistas são para conteúdos exclusivos da expansão 64DD do jogo.
- [Return Fire - Maps o' Death](https://retroachievements.org/game/16851) é um lançamento separado que fornece mapas adicionais para o jogo. Ele exige dados salvos do jogo original para ser jogado.

### Diferenças Regionais

Se uma variante regional de um jogo não tem diferenças suficientes para justificar um conjunto completo, mas interfere com desafios do conjunto base, pode-se criar um subconjunto para destacar as diferenças.

### Conteúdo Gerado por Usuários

Se um jogo possui um recurso que permite aos jogadores criar seu próprio conteúdo, como fases personalizadas, então um subset seria um lugar adequado para incluir esse conteúdo. Exemplos:

- [Irritating Stick - IrRAtating Custom Courses](https://retroachievements.org/game/20084) apresenta fases personalizadas criadas por vários membros da comunidade RA.
- [Tony Hawk's Underground - RAdical Custom Goals/Gaps](https://retroachievements.org/game/20476) apresenta objetivos e lacunas personalizados criados por vários membros da comunidade RA.

### Sessões de Grind

Se conquistas envolvem grinds excessivamente longos e frustrantes que não têm um propósito significativo, elas são mais adequadas para subsets. Isso inclui elevar personagens ao nível máximo, maximizar estatísticas, realizar uma tarefa um número absurdo de vezes, etc., quando nenhuma dessas ações recompensa o jogador. Um subset de sessões de grind deve ter um tema forte e coeso.

- Por favor, note que um grind não significa automaticamente que ele é inadequado para o conjunto base: Um bom exemplo de algo grindy que recompensa o jogador, tornando-o adequado para o conjunto base, é [One of a Kind de Final Fantasy IV (SNES)](https://retroachievements.org/achievement/108720), que requer um grind altamente dependente de RNG para obter um item a ser trocado por uma armadura específica.

### Demonstrações de Glitches

Glitches podem ter efeitos imprevisíveis na memória de um jogo, o que pode resultar em comportamentos indesejados para algumas conquistas, tornando-as inadequadas para um conjunto base. No entanto, muitos glitches podem adicionar jogabilidade divertida ou interessante, efeitos curiosos ou simplesmente ações engraçadas que podem valer a pena serem destacadas fora do conjunto base. Alguns exemplos disso são [Replica de Final Fantasy VII (PlayStation)](https://retroachievements.org/achievement/83776), [Rare Candy Addiction de Pokemon - Red and Blue Versions (Game Boy)](https://retroachievements.org/achievement/57643) e [Lock-Off the Lock-On de Sonic 3 & Knuckles (Genesis)](https://retroachievements.org/achievement/228498).

### Desafios com Checkpoints

Um subset onde você precisa coletar ou realizar um longo grind antes de cada ponto de verificação, com checkpoints claros e distribuídos ao longo do jogo. Esses subsets não devem ser excessivamente concentrados no início, ou seja, se a maioria das conquistas precisar ser concluída antes do primeiro checkpoint, provavelmente é um candidato ruim para subset. Um bom exemplo é a maioria dos subsets principais do desafio Professor Oak em jogos de Pokémon ou [Zelda II: The Adventure of Link - Level-1 Runs](https://retroachievements.org/game/10311).

### Desafios de Perma-Death

Desafios restritivos onde unidades do jogador ou equivalentes nunca podem ser usadas novamente se morrerem, expirarem ou de alguma forma falharem durante o jogo. (Exemplos: desafios Nuzlocke de Pokémon ou RPGs de estratégia onde a permadeath não é uma característica já existente no jogo). Nota: Esses desafios podem precisar de suporte no próprio jogo ou em um hack para serem possíveis com as ferramentas atuais.

### Bônus

Um conjunto bônus é um conjunto com uma variedade de conquistas que não se encaixam no conjunto principal de um jogo por vários motivos. Essas podem ser conquistas extremamente difíceis que vão além do esperado, tarefas repetitivas dolorosas que não têm nenhum propósito significativo além de fortalecer ou coletar tudo, uma exibição de glitches, ou muitos outros tipos de coisas que não seriam consideradas boas conquistas para o conjunto principal.

- Um bom exemplo da natureza diversificada de um conjunto bônus é o **Suikoden Bonus Set**, que contém várias corridas de desafio, drops raros e desafios extremos em um único subconjunto.

## Convenção de Nomes

Para evitar confusão entre os jogadores, existe um esquema de nomenclatura específico exigido para todos os subconjuntos:

- **Conjuntos Cooperativos Multijogador**: Devem ter `[Subset - Multiplayer Cooperative]` após o título do jogo base. Por exemplo: `Contra [Subset - Multiplayer Cooperative]`.
- **Corridas de Desafio**: Devem ter `[Subset - Challenge Name/Type]` após o título do jogo base. Por exemplo: `Chrono Trigger [Subset - No Level Up]` e `Pocket Monsters Midori [Subset - Monotype Challenge]`.
- **DLCs e Expansões**: Devem ter `[Subset - DLC/Expansion Name]` após o título do jogo base. Por exemplo: `Return Fire - [Subset - Maps o' Death]` e `F-Zero X [Subset - Expansion Kit]`.
- **Conteúdo Gerado pelo Usuário**: Embora não seja realmente obrigatório, incluir `RA` no título do subconjunto tem sido uma forma divertida de nomear o conteúdo.
- **Conjuntos Bônus**: Devem ter `[Subset - Bonus]` após o título do jogo base. Por exemplo: `Castlevania - [Subset - Bonus]` e `Darkwing Duck - [Subset - Bonus]`.

## Aprovação e Reivindicação

O processo de aprovação e reivindicação de um subconjunto varia dependendo se o tipo de subconjunto é pré-aprovado, seu envolvimento com o conjunto base e se você é um desenvolvedor pleno ou um desenvolvedor júnior:

|Autoria¹|Processo de Aprovação e Reivindicação|
|:--|:--|
|Autor Único do Conjunto Base|• O subconjunto deve ser aprovado pelo [Developer Compliance](https://retroachievements.org/createmessage.php?t=DevCompliance&s=Subset%20Approval%20Request%20-%20[Game%20Name]%20-%20[Subset%20Name]) ²³<br> • Não exige plano ou votação de revisão<br> • Considerado uma reivindicação gratuita ⁴
|Autor Colaborativo do Conjunto Base|• O subconjunto deve ser aprovado pelo [Developer Compliance](https://retroachievements.org/createmessage.php?t=DevCompliance&s=Subset%20Approval%20Request%20-%20[Game%20Name]%20-%20[Subset%20Name]) ²³<br> • Exige plano e votação de revisão?<br> &nbsp;&nbsp;&nbsp;◦ Não, se todos os autores ativos do conjunto aprovarem<br> &nbsp;&nbsp;&nbsp;◦ Sim, caso contrário<br> • Considerado uma reivindicação gratuita ⁴
|Sem Autoria no Conjunto Base|• O subconjunto deve ser aprovado pelo [Developer Compliance](https://retroachievements.org/createmessage.php?t=DevCompliance&s=Subset%20Approval%20Request%20-%20[Game%20Name]%20-%20[Subset%20Name]) ²³<br> • Se aprovado, um plano de conjunto deve ser postado no tópico do fórum do conjunto base e deve passar por votação de revisão<br> • **Não** é considerado uma reivindicação gratuita<br> • No caso de uma revisão e um plano de subconjunto serem feitos para um conjunto, ambas as reivindicações contarão como uma
|Desenvolvedor Júnior|• Além dos casos acima, deve ser aprovado primeiro pelos Revisores de Código e estar em conformidade com quaisquer restrições adicionais do [Programa de Desenvolvedores Juniores](https://docs.retroachievements.org/developer-docs/jr-dev-rules.html#rules-and-restrictions)

¹ No caso de múltiplos autores de revisão, utilize as regras mais restritivas da tabela. Exemplo: Se houver uma colaboração de subconjunto e qualquer autor do subconjunto não for autor do conjunto base, utilize as regras de `Sem Autoria no Conjunto Base`.

² Para Contatar o Developer Compliance, envie uma mensagem no site [aqui](https://retroachievements.org/createmessage.php?t=DevCompliance&s=Subset%20Approval%20Request%20-%20[Game%20Name]%20-%20[Subset%20Name]) e substitua `[Game Name]` e `[Subset Name]` no assunto com o nome do jogo e o nome desejado do subconjunto. **Solicitações de aprovação _devem_ explicar detalhadamente por que o conteúdo proposto do subconjunto não é apropriado para o conjunto base.** Isso deve ser descrito de forma que alguém que não esteja familiarizado com o jogo consiga entender clara e facilmente.

³ Os seguintes tipos de subconjunto são pré-aprovados e, portanto, não requerem contato com o Developer Compliance:

- Cooperativo Multijogador
- Exibições de Glitches
- Conteúdo Gerado pelo Usuário
- Corrida de Desafio: Jogo de Nível Baixo/Execuções sem Nivelamento
- Corrida de Desafio: Classe Solo/Execuções Monotípicas
- Corrida de Desafio: Desafios do Professor Oak para os lançamentos oficiais da série principal de Pokémon

⁴ Por enquanto, um administrador deve ser contatado via Discord ou por meio de [mensagem para o RAdmin](https://retroachievements.org/user/RAdmin) para marcar uma reivindicação como gratuita. Como cortesia, solicite isso apenas se você realmente precisar do espaço de reivindicação ou se esperar um longo período de desenvolvimento.

### Notas

No caso de múltiplos autores de revisão, utilize as regras mais restritivas da tabela. Exemplo: Se houver uma colaboração de subconjunto e qualquer autor do subconjunto não for autor do conjunto base, utilize as regras de `Sem Autoria no Conjunto Base`.
