---
title: Diretrizes para Badges e Ícones
description: Diretrizes para criar e fazer upload de badges de conquistas e ícones de jogos no RetroAchievements. Saiba mais sobre os requisitos de tamanho, melhores práticas de design e o processo de aprovação para novas imagens ou imagens revisadas.
---

# Diretrizes para Badges e Ícones

[[toc]]

## Visão Geral

Quando alguém menciona badges, podem estar falando sobre um de dois itens:

- Badges de conquistas, que são imagens criadas pelos usuários associadas às conquistas individuais de um conjunto.
  - _Primeiro Badge de Sonic the Hedgehog - #00199)_
    - ![Amateur Collector Badge](https://s3-eu-west-1.amazonaws.com/i.retroachievements.org/Badge/00199.png)
- Ícones de jogos, também conhecidos como badges de maestria, que são imagens únicas usadas para representar um conjunto de conquistas.
  - _Ícone de jogo de Sonic the Hedgehog_
    - ![Sonic the Hedgehog Icon](/public/badge-016743.png)

## Formato e Tamanhos de Badges

- Para melhores resultados, ícones de jogos e badges de conquistas devem estar no formato PNG de 32 bits sem entrelaçamento.
  - JPG e GIF também são suportados.
- Evite usar transparência na camada de fundo, pois ela não será exibida corretamente no site e nos emuladores.
- Badges de conquistas devem ter 64x64 pixels.
- Ícones de jogos devem ter 96x96 pixels.
- Os badges devem ser criados de forma que o tema seja claro mesmo quando reduzidos para 48x48 ou 32x32 pixels, pois frequentemente são exibidos nesses tamanhos em várias páginas do site.

## Criando Novos Badges

Os badges de conquistas devem se referir, de alguma forma, ao tema da conquista - por exemplo, uma imagem do chefe, nível ou item colecionável que a conquista exige.

## Criando Novos Ícones de Jogos

### Ícones de Maestria devem representar o jogo associado utilizando apenas arte "Oficial".

- Sprites do jogo (ou modelos)
- Box Art / Box Art Regional
- Arte Conceitual
- Arte do CD / OST
- Arte de Manuais
- Arte de Guias
- Anúncios
- Ou qualquer outra fonte oficial de arte.

### Ícones de Maestria não devem:

- Usar arte de uma versão diferente do jogo.
- Usar arte criada por fãs de fontes externas.
- Conter conteúdo vulgar, ofensivo ou pornográfico.

### Ícones de Maestria podem:

- Adicionar bordas personalizadas ou outros adornos.
- Estilizar arte oficial ou combinar diferentes fontes de arte oficial.
- Usar arte oficial de uma versão regional diferente no mesmo console, desde que essa versão regional não tenha sua própria entrada de página de jogo.
- Usar arte criada pelo próprio criador do ícone, desde que aprovada pela equipe de arte antes de ser carregada ou submetida a uma votação de gauntlet.

### Exceções

- Se duas versões de um jogo utilizarem a mesma arte principal, essa arte pode ser usada para qualquer uma das versões.
- Hacks - A maioria dos hacks utiliza os mesmos sprites do jogo original. Outras artes que representem o jogo de forma significativa podem ser usadas, desde que não estejam na lista de exclusão acima (como arte de fãs externa). Arte criada pelo desenvolvedor do hack também pode ser utilizada.
- Jogos licenciados por filmes ou vinculados a filmes podem usar arte que tenha sido usada para promover o filme.

![mario time](/public/mario-time.png)

## Fazendo Upload de Ícones de Jogos

**Desenvolvedores:**

- Desenvolvedores de conquistas podem alterar ícones de jogos livremente para entradas que ainda não possuem conquistas. Como desenvolvedor, você pode optar por postar um backup da imagem anterior no fórum, se houver uma, ou salvar sua própria imagem. Isso não é obrigatório. Ao criar um novo conjunto de conquistas, você pode criar ou escolher a imagem que deseja usar como ícone do jogo.
  - Para alterar um ícone de jogo, vá para a página do jogo e clique nas ferramentas de desenvolvimento:  
    ![change game icon 1](/public/change-game-icon1.png)  
    - Em seguida, clique no botão "escolher arquivo" destacado. Encontre o arquivo no seu PC e pressione o botão de envio destacado:  
    ![change game icon 2](/public/change-game-icon2.png)

Se um jogo já tiver conquistas, mudanças no ícone do jogo precisam passar pelo [processo de revisão](/guidelines/content/achievement-set-revisions).

**Não desenvolvedores:**

- Sim, você pode, mas as alterações estão sujeitas às [revisões](/guidelines/content/achievement-set-revisions). Também é bom revisar as diretrizes para [criação de novos ícones de jogos](#designing-new-game-icons---styling-guide).

### Fazendo Upload de Badges

**Para Desenvolvedores:**

Se você está criando novas conquistas, pode fazer upload de badges para elas.

Os badges podem ser enviados nas ferramentas de desenvolvedor do emulador, enquanto estiver no editor de conquistas:  
![Upload Badge](/public/alt-groups-add.png)

Ou você pode selecionar uma imagem pré-fabricada ou encontrar outras imagens que você já enviou no menu suspenso:  
![Badge dropdown](/public/badge-dropdown.png)

## Arquivos no Servidor de Badges

- Ícones de jogos são armazenados no site da seguinte maneira e local: `i.retroachievements.org/Images/000705.png`. Eles estão na mesma pasta do servidor que outras imagens de jogos, como capas e capturas de tela.
- Badges de conquistas são armazenados no site da seguinte maneira e local: `i.retroachievements.org/Badge/00136.png`; o número corresponde ao ID do badge encontrado no Editor de Conquistas.

## Criando Novos Badges para Conquistas Existentes

Se você deseja criar badges aprimorados para conquistas existentes, pode fazê-lo. Suas imagens passarão pelo [processo de revisão](/guidelines/content/achievement-set-revisions), que submeterá suas criações a uma votação da comunidade.

Poste todas as novas imagens que você deseja substituir pelas atuais no [Tópico do Fórum Icon Gauntlet](http://retroachievements.org/viewtopic.php?t=8064&o=0). Poste também todos os badges que as novas imagens devem substituir. Eles serão submetidos à revisão da comunidade por meio de uma única votação. Após a conclusão da votação, se você for um desenvolvedor, poderá substituir os badges, ou, se não for, peça ajuda no canal #help-me no Discord ou no [Tópico do Fórum Icon Gauntlet](http://retroachievements.org/viewtopic.php?t=8064&o=0).

É mais fácil referenciar os badges antigos e novos como links de `img`:

- Exemplo: `[img=https://retroachievements.org/Badge/01234.png] -> [img=https://retroachievements.org/badge/56789.png]`
- (Dev) Certifique-se de capturar o ID do badge antigo no Editor de Conquistas antes de fazer upload do novo badge.
- O novo ID do badge aparecerá no Editor de Conquistas após o upload.
- Ambos os valores também podem ser capturados no site, mas você deve copiar os links das imagens, pois o link ao passar o mouse é para a conquista.

Aqui está um exemplo perfeito de [como postar badges novos e antigos de maneira eficaz](https://retroachievements.org/viewtopic.php?t=612&o=17).

## A Fazer

- Necessita de informações sobre como adicionar badges de conquistas pelo site.
- Adicionar informações sobre o "collager".
