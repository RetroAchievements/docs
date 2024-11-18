---
title: Sistema X Quando?
description: Aprenda sobre as etapas técnicas necessárias para adicionar suporte do RetroAchievements para novos sistemas, incluindo emulação, identificação de jogos e configuração do servidor. Este artigo explica o que é necessário antes que um novo sistema possa ser suportado.
---

# Sistema X Quando?

::: warning Você é um desenvolvedor de emulador?

[rcheevos](https://github.com/RetroAchievements/rcheevos) é nossa biblioteca de integração de emuladores. Temos um útil [guia de integração](https://github.com/RetroAchievements/rcheevos/wiki/rc_client-integration) que pode ser útil se você deseja adicionar suporte ao RetroAchievements ao seu emulador.

:::

_Este artigo foi originalmente publicado no [RANews - Novembro/2020](https://news.retroachievements.org/issues/2020-11/nerd-corner)_

## Introdução

Há muita especulação sobre quais serão os próximos sistemas disponíveis para suportar conquistas. Com o [anúncio recente de um core de PS2](https://twitter.com/libretro/status/1322711254826471424), surgiram muitas perguntas sobre se/quando ele será suportado. Se você está interessado apenas na resposta a essa pergunta, pule para o [final deste artigo](#when-will-ra-support-playstation-2). Mas se você quer entender exatamente o que é necessário para adicionar suporte a um novo sistema, continue lendo.

## Requisitos

Estas são as coisas necessárias para adicionar suporte do RetroAchievements para um novo sistema:

1. Emulação (preferencialmente um core libretro).
   - O core deve expor a memória.
   - O core deve funcionar no RALibretro.
2. Identificação única de jogos.
3. Suporte do servidor.

### Etapa 1: Emulação

A primeira etapa é, obviamente, ter um emulador para o sistema a ser suportado.

No início do RetroAchievements, usávamos emuladores independentes - um para cada sistema. Manter todos esses emuladores livres de bugs e atualizados requer muito esforço e não temos programadores suficientes envolvidos nessa frente.

Atualmente, é preferível usar um [core libretro](https://www.retroarch.com/?page=cores) para emulação. Dessa forma, os desenvolvedores do core podem implementar novos recursos e podemos focar apenas na funcionalidade das conquistas. Os cores podem ser atualizados e lançados sem esforço adicional para nós.

Outra grande vantagem é que os cores libretro também funcionam no [RetroArch](https://www.retroarch.com/), o que permite que as conquistas do RetroAchievements sejam obtidas em várias plataformas (os emuladores independentes eram todos aplicativos apenas para Windows).

**Gerenciado por**: desenvolvedores do core libretro.

#### Etapa 1a: Memória Exposta

Como os gatilhos de conquistas são uma série de condições que monitoram eventos na RAM emulada,
outro requisito é o acesso à RAM do sistema.

Sem memória exposta, o [Inspetor de Memória](/developer-docs/memory-inspector) aparece em branco e os criadores de conquistas não conseguem criar conquistas.

Além disso, como o RetroAchievements lê a memória apenas uma vez por quadro, alguns sistemas que utilizam intensamente [memória paginada](https://en.wikipedia.org/wiki/Paging) precisam fornecer alguma maneira de acessar toda a memória, não apenas a página atual.

**Gerenciado por**: desenvolvedores do core libretro com alguma interação com desenvolvedores do RetroAchievements.

#### Etapa 1b: RALibretro

O core deve funcionar no RALibretro, pois é onde os desenvolvedores de conquistas identificarão as partes importantes da memória e criarão as conquistas.

Isso geralmente só é um problema se o core depender de alguma funcionalidade ainda não implementada no RALibretro (como o suporte recentemente adicionado para teclado e OpenGL 3D), mas alguns problemas são causados pela implementação do RALibretro ser suficientemente diferente da implementação do RetroArch. A menos que o core possa ser modificado para não exigir a funcionalidade ausente, ele não pode ser suportado até que o RALibretro seja atualizado.

[Esta página](/pt/general/emulator-support-and-issues) lista o status de cada core na última vez em que foram testados.

**Gerenciado por**: RetroAchievements

### Etapa 2: Identificação de Jogos

Precisamos ser capazes de identificar exclusivamente os jogos para o sistema.

Usamos um método chamado [MD5](https://en.wikipedia.org/wiki/MD5), que escaneia o arquivo do jogo e gera um número que geralmente chamamos de "hash". Com este número, é possível confirmar se duas cópias de um arquivo são idênticas, o que torna possível garantir que o jogador está usando uma ROM com a qual as conquistas foram projetadas ou testadas.

Para a maioria dos sistemas, podemos simplesmente fazer o hash do arquivo ROM inteiro, menos qualquer informação de cabeçalho. Para jogos maiores (particularmente aqueles em CD ou DVD), fazemos hash apenas do que consideramos ser os dados mais importantes para minimizar os tempos de carregamento. Mais informações sobre como identificamos jogos podem ser encontradas [aqui](/developer-docs/game-identification).

Para sistemas com mídia gravável (principalmente computadores domésticos), precisamos garantir que não façamos hash de arquivos que possam ser modificados pelo próprio jogo. Sistemas que escrevem no arquivo do jogo devem tratar o arquivo de disco original como somente leitura e escrever alterações apenas em uma cópia do disco. Se o core/emulador modificar o arquivo do disco, ele não pode mais ser identificado e não pode ser considerado viável para conquistas.

**Gerenciado por**: RetroAchievements

### Etapa 3: Configurar o Servidor Web

Para suportar um novo sistema, o servidor web do RetroAchievements deve ser configurado adequadamente para aceitar novas entradas de jogos e conquistas para esse sistema.

**Gerenciado por**: RetroAchievements

### Quando o RA vai suportar o Sistema X?

[Esta página](/pt/general/emulator-support-and-issues) lista o status de cada core na última vez em que foram testados.
