---
title: Requisitos para Conjuntos de Conquistas
description: Este guia descreve os requisitos essenciais para criar e enviar um conjunto de conquistas, incluindo cobertura de conclusão do jogo, proteção contra desbloqueios fáceis e informações adequadas do jogo.
---

# Requisitos para Conjuntos de Conquistas

[[toc]]

## Todo Conjunto de Conquistas DEVE Ter

- **Todas as informações da página do jogo preenchidas**
   - Não apenas vincule os hubs de Publicador, Desenvolvedor e Gênero: preencha os campos no painel de desenvolvimento ou no gerenciador de aplicativos para que essas informações apareçam em todas as listas que as exibem.
- **Todas as imagens do jogo carregadas**
   - A arte da caixa para homebrews e hacks está isenta quando o criador do jogo ou hack não a fornece.
- **Badges para cada conquista**
   - Eles não precisam ser distintos entre si, mas não devem ser deixados em branco.
- **Conteúdo cobrindo até a conclusão**, desde que o jogo possa ser terminado. Seja derrotando o chefe final, completando o primeiro loop ou resolvendo todos os quebra-cabeças, conjuntos de conquistas que não cobrem pelo menos a conclusão do jogo são considerados inacabados e, portanto, sujeitos à despromoção.
  - Jogos infinitos, cujo foco está em pontuações altas (como Pac-Man e Crystal Castles), estão isentos dessa regra.
  - Em relação a jogos de compilação, como [Intellivision Classic Games (PlayStation)](https://retroachievements.org/game/13908), não é necessário que todos os jogos da compilação tenham conquistas. No entanto, os que possuem conquistas devem aderir à política acima.
- **Rich Presence Dinâmico**
   - Rich Presence dinâmico possui saídas que mudam dependendo do que está acontecendo no jogo.
   - Conjuntos legados com Rich Presence não dinâmico são adicionados ao hub [No Dynamic RP](https://retroachievements.org/game/3083). Atualize-o quando possível.
- **Condições de Progressão e Vitória marcadas** nas conquistas aplicáveis. Veja [Diretrizes de Progressão e Condições de Vitória](/guidelines/content/progression-and-win-condition-guidelines) para orientações completas.
- **Proteção** para situações em que os jogadores podem obter conquistas sem esforço, como:
  - Modo de demonstração;
  - Códigos de trapaça no jogo;
  - Saves com bateria;
  - Senhas.
  - **Veja também**: [Modelos de Conquistas](/developer-docs/achievement-templates) e [Exemplos Reais](/developer-docs/real-examples) para algumas técnicas conhecidas de proteção.
- **Suporte para desbloquear conquistas em *todos* os slots de save**
   - Os jogadores não devem ser obrigados a jogar em um slot de save específico.
   - Isso geralmente pode ser feito por meio de grupos alternativos ou ponteiros de índice.
   - Conjuntos legados que suportam apenas um slot de save são adicionados ao hub [Single Save Support](https://retroachievements.org/game/28449), e qualquer ticket criado em um conjunto por esse motivo será considerado válido e não poderá ser fechado sem resolver o problema.
- **Suporte para desbloquear conquistas em todos os idiomas incluídos nos hashes vinculados**
   - Alterar o idioma do jogo não deve impedir que uma conquista seja obtida.
   - Embora nem todos os hashes precisem ser vinculados a um conjunto, os hashes que estão vinculados ao conjunto devem ter suporte para todos os idiomas incluídos nesses hashes.
   - Qualquer ticket criado em um conjunto por esse motivo será considerado válido e não poderá ser fechado sem resolver o problema.
   
**Nota:
 Pode haver, raramente, razões legítimas para não ser possível dar suporte a todos os idiomas vinculados e slots de save, como quando o comprimento da lógica excederia o limite de caracteres. Se você acredita que isso se aplica a você, entre em contato com a Conformidade de Desenvolvedores para solicitar uma exceção.**

## Recomendado, mas Não Obrigatório

- Placares para pontuações e desafios de tempo.
- Adicionar o Tipo Missable às conquistas aplicáveis, especialmente para RPGs e jogos longos.
  - Evite uso excessivo. Se a maior parte de um conjunto de conquistas for marcada como missable, a marcação perde o significado para aquele conjunto.
  - Antes da adição do Tipo Missable, o uso de `[m]` no final do título da conquista era o formato padrão para marcar conquistas perdíveis. **Não** marque conquistas perdíveis dessa forma. Use o sistema de tipos de conquistas em vez disso.
- Um guia de conquistas. Guias podem ser criados e publicados [aqui](https://github.com/RetroAchievements/guides/wiki).
- Para jogos com conquistas acionadas por texto (especialmente RPGs), recomenda-se encontrar uma flag de evento em vez de depender de texto ou ID de texto. A apresentação de texto varia entre versões regionais, dificultando o suporte a várias regiões.
