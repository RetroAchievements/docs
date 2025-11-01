---
title: Rótulos de Hash
description: Este guia abrange a rotulação de ROMs vinculadas a conjuntos de conquistas, incluindo tipos de rótulos, rótulos de imagem, exemplos e como vincular patches no fórum.
---

# Rótulos de Hash

Toda ROM vinculada a um conjunto de conquistas deve ser claramente identificada e rotulada. Esses rótulos ajudam os jogadores a saber quais versões de um jogo são compatíveis, bem como se há patches de tradução, correções de bugs, hacks cosméticos, melhorias de qualidade de vida, etc., que podem ser usados.

[[toc]]

## Informações para Hashes Vinculados

- **Hash RA**: Consulte [Identificação de Jogos](/developer-docs/game-identification) para saber mais. Eles aparecem automaticamente em `Manage Hashes`.
- **Nome do Arquivo**: O nome do arquivo deve ser inserido como descrição. Isso geralmente é automático, mas pode precisar de ajustes.
- **Rótulos**: Você pode usar os rótulos listados abaixo usando o nome do arquivo da imagem (sem extensão).

## Imagens

| Imagem                                                                                   | Rótulo para Usar | Nota                                                                 |
| --------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------- |
| ![main-label](https://retroachievements.org/assets/images/labels/main.png)                     | `main`              | Usado para mostrar a ROM principal usada pelo(s) desenvolvedor(es) do conjunto |
| ![RAPatches](https://retroachievements.org/assets/images/labels/rapatches.png)                 | `rapatches`         | Usado quando o hash requer um patch hospedado no RAPatches          |
| ![no-intro-label](https://retroachievements.org/assets/images/labels/nointro.png)              | `nointro`           | O mais comum para jogos baseados em cartuchos                        |
| ![redump-label](https://retroachievements.org/assets/images/labels/redump.png)                 | `redump`            | O mais comum para jogos baseados em discos                          |
| ![wozaday-label](https://retroachievements.org/assets/assets/images/labels/wozaday.png) | `wozaday`           | Grupo de preservação do Apple II                                    |
| ![tosec-label](https://retroachievements.org/assets/images/labels/tosec.png)                   | `tosec`             |                                                                     |
| ![fb-neo-label](https://retroachievements.org/assets/images/labels/fbneo.png)                  | `fbneo`             | Usado principalmente para Arcade                                    |
| ![clean-cpc](https://retroachievements.org/assets/images/labels/cleancpc.png)                  | `cleancpc`          | Projeto de preservação do Amstrad                                  |
| ![4am-crack](https://retroachievements.org/assets/images/labels/4amcrack.png)                  | `4amcrack`          | Usado para Apple II                                                 |
| ![neo-kobe-label](https://retroachievements.org/assets/images/labels/neokobe.png)              | `neokobe`           | Usado principalmente para PC-8001 e PC-8801                         |
| ![homebrew](https://retroachievements.org/assets/images/labels/homebrew.png)                   | `homebrew`          | Usado para Homebrews                                                |
| ![atari-age-label](https://retroachievements.org/assets/images/labels/atariage.png)            | `atariage`          | Site popular para Homebrews                                         |
| ![itch-io-label](https://retroachievements.org/assets/images/labels/itchio.png)                | `itchio`            | Site popular para Homebrews                                         |
| ![msu-1-label](https://retroachievements.org/assets/images/labels/msu1.png)                    | `msu1`              | Usado para marcar ROMs do SNES com patches MSU-1                    |
| ![snes-mini](https://retroachievements.org/assets/images/labels/snesmini.png)                  | `snesmini`          |                                                                     |
| ![project-egg-label](https://retroachievements.org/assets/images/labels/egg.png)               | `egg`               | ROMs adquiridas no Project Egg, geralmente jogos de PC japoneses    |
| ![steam-label](https://retroachievements.org/assets/images/labels/steam.png)                   | `steam`             | ROMs adquiridas na Steam                                            |
| ![mamesl-label](https://retroachievements.org/assets/images/labels/mamesl.png)                 | `mamesl`            | Lista de Software MAME                                              |
| ![smwcentral-label](https://retroachievements.org/assets/images/labels/smwcentral.png)         | `smwcentral`        | Repositório popular de hacks do Super Mario World                   |
| ![rhdn-label](https://retroachievements.org/assets/images/labels/rhdn.png)                     | `rhdn`              | Repositório popular para hacks de ROM                               |
| ![goodtools-label](https://retroachievements.org/assets/images/labels/goodtools.png)           | `goodtools`         |                                                                     |
| ![nongood-label](https://retroachievements.org/assets/images/labels/nongood.png)               | `nongood`           |                                                                     |
| ![offline-list-label](https://retroachievements.org/assets/images/labels/offlinelist.png)      | `offlinelist`       |                                                                     |

## Exemplos

### Deja Vu (NES)

![manage-hashes-dejavu](/public/manage-hashes-dejavu.png)

- O primeiro hash é a versão dos EUA do jogo com um patch Uncensored aplicado. O texto completo da descrição é `Deja Vu (USA) (Uncensored) (v1.0) (usertheloset).nes`, que segue o [esquema de nomenclatura do RAPatches](https://github.com/RetroAchievements/RAPatches#naming-scheme). Os rótulos usados são `nointro` e `rapatches`.
- O segundo hash é a versão verificada pelo No Intro dos EUA.
- O terceiro hash é a versão verificada pelo No Intro do Japão.

Para ver como isso aparecerá para a maioria dos usuários, acesse a página de entrada do jogo e clique em "Linked Hashes."

![links-dejavu](/public/links-dejavu.png)

Como você pode ver abaixo, `nointro` tornou-se ![no-intro-label](https://retroachievements.org/Images/labels/nointro.png) e `rapatches` tornou-se ![rapatches-label](https://retroachievements.org/Images/labels/rapatches.png).

![linked-hashes-dejavu](/public/supported-game-files-dejavu.png)

### Suikoden (PlayStation)

Vamos pular o exemplo de gerenciamento de hashes para este caso. Vamos direto para "Linked Hashes" na página de entrada do jogo:

![links-suikoden](/public/links-suikoden.png)

Os hashes rotulados como `redump`, `rhdn` e `rapatches` exigem patches que estão disponíveis tanto no romhacking.net quanto no repositório RAPatches.

![linked-hashes-suikoden](/public/supported-game-files-suikoden.png)

## Vinculando a Patches

- O primeiro post no tópico do fórum de um jogo é o melhor lugar para incluir links para os patches necessários.
- Esses links não precisam seguir um formato específico, mas as informações devem ser claras.
- Aqui está um exemplo de como formatar o texto no fórum:

Texto de entrada:

```
[b]Suikoden (Europe) (De) (v1.01) (Twisted Phoenix Game Translation)[/b]
[b]Suikoden (Europe) + [url=https://www.romhacking.net/translations/5736/]German Patch[/url][/b] [img=Images/labels/rhdn.png]
ou
[b]Suikoden (Europe) + [url=https://github.com/RetroAchievements/RAPatches/raw/main/PS1/Translation/German/11255-Suikoden-GermanTranslation.7z]German Patch[/url][/b] [img=Images/labels/rapatches.png]
[i]Checksum RA: [/i]f0c5ec0696aa2ec2d6e5b731fbe07491
```

![forum-label-01-suikoden](/public/forum-label-01-suikoden.png)

- Um segundo exemplo:
  Texto de entrada:

```
[img=Images/labels/rapatches.png] [img=Images/labels/rhdn.png]
Baixe o patch do RHDN [url=https://www.romhacking.net/translations/5736/]aqui[/url].
Espelho RAPatches [url=https://github.com/RetroAchievements/RAPatches/raw/main/PS1/Translation/German/11255-Suikoden-GermanTranslation.7z]aqui[/url].
```

![forum-label-02-suikoden](/public/forum-label-02-suikoden.png)
