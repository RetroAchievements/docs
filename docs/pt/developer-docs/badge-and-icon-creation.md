# Criação de Ícones e Emblemas

**Link para o texto em inglês:** [Badge and Icon Creation](/guidelines/content/badge-and-icon-guidelines)

## Introdução

Emblemas e ícone são usados em todo o site e são uma boa maneira de representar a conquista no jogo.

Emblemas são as imagens para os achievements de um jogo. Eles são armazenados no site da seguinte maneira e local: `i.retroachievements.org/Badge/00136.png`; o número coincide com o ID do emblema encontrado no Achievement editor.

Os ícones são armazenados no site da seguinte maneira e colocam: `i.retroachievements.org/Images/000705.png`, armazenados na mesma pasta que outras imagens do jogo, como a caixa do jogo (game box) e screenshots do jogo.

## Formato de Emblema

Quando carregado, seu arquivo é convertido no seguinte:

- PNG em cores de 32 bits 64x64. Exemplo:

![](https://user-images.githubusercontent.com/8508804/37221161-b9b0bb02-23a7-11e8-81b2-3d09fa7456af.png)

- 64x64 em escala de cinza e PNG desfocado. Exemplo:

![](https://user-images.githubusercontent.com/8508804/37221162-b9d7a802-23a7-11e8-9b69-3e91594c1ba4.png)

Não é totalmente importante como o arquivo é formatado antes do upload, mas, desde que seja quadrado, o arquivo será carregado e convertido facilmente. Naturalmente, é importante não infringir nenhuma lei de direitos autorais ou fazer upload de algo vulgar, ofensivo ou pornográfico, com as possíveis consequências de ser advertido, potencialmente reportado e potencialmente removido da RetroAchievements.

## Formato de ícone

Quando carregadas, as imagens do seu ícone são reduzidas para um PNG em cores de 32 bits 96x96 no máximo. Se você fizer o upload de um ícone menor que 96x96, a imagem enviada manterá seu tamanho original.

O mesmo vale para os emblemas, exceto que o tamanho máximo dos emblemas é 64x64. (O máximo de imagens do perfil é 128x128.)

Lugares e tamanhos Os ícones são exibidos:

- Nas tabelas de classificação: 96 x 96
- Páginas de Jogo: 64x64
- Páginas de Usuário: 48x48
- Jogando Atualmente e Feed Global: 32x32

A mesma coisa que com os emblemas, a imagem real não está sendo redimensionada apenas o tamanho da tela, se você usar o Android ou aumentar o zoom do seu navegador, você verá as imagens com mais clareza.

## Diretrizes e Dicas

- As imagens enviadas para emblemas devem ser quadradas, como um número igual de x e y, caso contrário, a imagem resultante será distorcida e feia.

- O formato PNG não-entrelaçado (Non-interlaced PNG) recomendado, evite usar uma camada de transparência, pois ela sairá no final com uma caixa branca e plana.

- É recomendado fazer emblemas em 64x64 para maior clareza. Os ícones devem ser feitos de maneira que o tema seja claro mesmo quando dimensionado em 32x32.

- Os emblemas devem se referir de alguma forma ao que é o achievement, ou seja, uma imagem do chefe, nível ou colecionável que o achievement requer que o jogador alcance.

- Nos casos de achievements de jogos de baixa resolução, pode ser difícil conseguir um distintivo com boa aparência sem que ele pareça muito colorido ou embaçado. Nesses casos, o visual de blocos é geralmente preferível, de modo que as imagens tenham uma aparência retrô.

- Você pode fazer com que cada distintivo tenha pequenas bordas arredondadas, como um distintivo real ou alguns cantos pontiagudos extras para dar ênfase ou uma coroa do rei para os mais difíceis. É o seu design. Deve representar visualmente o achievement em si, ou sugerir a localização no jogo em busca de segredos.

- Combinar com o estilo de arte do jogo funciona bem. Pesquisas de imagens do Google para "Sprite Sheets" é outra dica útil para incluir algumas artes do jogo.

## Mudanças e Rebaixamentos

Como o site não tem, na maioria dos casos, um _rollback permanente / estilo git-rollback / estilo wiki_ para todas as ações tomadas em um conjunto, é recomendado que quando um desenvolvedor faz alterações de qualquer tipo em um conjunto dele no fórum para esse jogo.

Em relação aos emblemas, publique na página do fórum do jogo uma das seguintes opções:

- Deixando uma cópia antiga do crachá no tópico do jogo (exemplo: `[img = "https://retroarchievement.org/badge/1234]`)

- Anotação do antigo ID do emblema (número exibido no URL da imagem do emblema)

Aqui está um exemplo perfeito de [como fazer o backup corretamente de emblemas alterados.](https://retroachievements.org/viewtopic.php?t=612&o=17)

é recomendado, para ajudar a manter tudo em ordem, de modo que, nos casos em que as reversões ou alterações sejam adequadas, é muito mais fácil fazê-las.
