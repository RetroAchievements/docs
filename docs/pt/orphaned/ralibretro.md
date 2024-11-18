---
title: RALibretro
description: RALibretro é um multi-emulador que pode ser usado para desenvolver RetroAchievements e, claro, conquistá-las.
---

# RALibretro

!! Esta página está extremamente desatualizada

RALibretro é um multi-emulador que pode ser usado para desenvolver RetroAchievements.

O recurso de "multi-emulação" só é possível porque utiliza os núcleos [libretro](https://github.com/libretro/) para realizar a emulação. O que o RALibretro faz é conectar a emulação às ferramentas usadas para criar RetroAchievements.

## AVISO

**RALibretro é um Trabalho em Andamento!!!**

Atualmente o desenvolvimento está acontecendo neste repositório: [https://github.com/RetroAchievements/RALibretro](https://github.com/RetroAchievements/RALibretro)

Aqui está uma lista de problemas conhecidos (fique à vontade para relatar novos problemas se encontrar algum): [https://github.com/RetroAchievements/RALibretro/issues](https://github.com/RetroAchievements/RALibretro/issues)

## Instruções de Instalação

Basta baixar o RALibretro na página de [Downloads](https://retroachievements.org/download.php) e descompactá-lo.

## Uso Básico

1. Execute RALibretro.exe
2. Clique em `Arquivo` > `Carregar Sistema` e clique no sistema que deseja emular
3. Agora vá para `Arquivo` > `Carregar Jogo` e escolha sua ROM. **Nota**: RALibretro atualmente não aceita arquivos compactados!
4. Agora você pode criar suas conquistas ou apenas ganhar algumas!

## Sistemas Suportados

**NOTA**: alguns sistemas podem exigir arquivos de sistema (BIOS) no diretório `System` para carregar jogos corretamente.

Aqui está uma lista dos sistemas atualmente suportados:

- SNES
- NES
- Nintendo 64
- Mega Drive
- Master System
- Gameboy
- Gameboy Color
- Gameboy Advance
- PC Engine (TurboGrafx-16/TurboGrafx-CD)
- Atari Lynx
- Game Gear
- Neo Geo Pocket
- Atari 2600
- Atari 7800
- Virtual Boy
- Neo Geo (Arcade) - novo. **NOTA**: você precisa colocar o arquivo BIOS `neogeo.zip` no mesmo diretório das ROMs.
- Capcom Play System 1, 2 and 3 (Arcade) - novo

## Keyboard Input

| Keyboard        |  a  |  s  |  z  |  x  |          d           |            c            |       f        |       v        | Enter |  Tab   |  g  |  h  |
| --------------- | :-: | :-: | :-: | :-: | :------------------: | :---------------------: | :------------: | :------------: | :---: | :----: | :-: | :-: |
| RetroPad        |  Y  |  X  |  B  |  A  |          L           |            R            |       L2       |       R2       | Start | Select | L3  | R3  |
| SNES            |  Y  |  X  |  B  |  A  |          L           |            R            |                |                | Start | Select |     |
| NES             |     |     |  B  |  A  | Trocar lado do disco (FDS) | Inserir/Ejetar disco (FDS) |                |                | Start | Select |     |
| Mega Drive      |  A  |  Y  |  B  |  C  |          X           |            Z            |                |                | Start |        |     |
| Master System   |     |     |  B  |  A  |                      |                         |                |                | Start |        |     |
| GameGear        |     |     |  B  |  A  |                      |                         |                |                | Start |        |     |
| Gameboy [Color] |     |     |  B  |  A  |                      |                         |                |                | Start | Select |     |
| Gameboy Advance |     |     |  B  |  A  |          L           |            R            |                |                | Start | Select |     |
| PC Engine       |     |     | II  |  I  |                      |                         |                |                |  Run  | Select |     |
| Atari Lynx      |     |     |  B  |  A  |       Opção 1       |        Opção 2         |                |                | Start |        |     |
| Neo Geo Pocket  |     |     |  B  |  A  |                      |                         |                |                | Start |        |     |
| Atari 2600      |     |     |  o  |     |    Dificuldade L b    |     Dificuldade R b      | Dificuldade L a | Dificuldade R a | Start | Select |     |
| Neo Geo         |  C  |  D  |  A  |  B  |                      |                         |                |                | Start |  Ficha  |     |
| CPS1/2/3\*      | \*  | \*  | \*  | \*  |          \*          |           \*            |                |                | Start |  Ficha  |     |

**Note**: os botões para jogos CPS1/2/3 variam para cada jogo.

## Atalhos do Teclado

- **ver sobreposição**: `Esc`
- **pausar emulação**: `p`
- **avançar um quadro por vez**: `;` (pausa automaticamente a emulação)
- **avanço rápido**: `=`
- **alternar avanço rápido**: `-` (sinal de menos)
- **Captura de Tela**: `PrintScreen`

### Teclas de Salvar/Carregar estado

- **Salvar estado slot atual**: `Backspace`
- **Carregar estado slot atual**: `F11`
- **Carregar estado do slot 1, 2, .., 9, 0**: `F1`, `F2`, ..., `F9`, `F10`
- **Salvar estado no slot 1, 2, .., 9, 10**: `shift`+`F1`, `shift`+`F2`, ..., `shift`+`F9`, `shift`+`F10`
- **Slot anterior**: `shift`+`-`
- **Próximo slot**: `shift`+`+`
- **Trocar slot**: `0`, `1`, `2`,..., `9`

## Recursos Ausentes

- feedback ao usuário ao salvar/carregar estado, pausar, etc.
- suporte ao N64
- carregar ROMs compactadas
- configuração de controles
- mais problemas listados aqui: [https://github.com/RetroAchievements/RALibretro/issues](https://github.com/RetroAchievements/RALibretro/issues)

## Como fazer o BIOS AES funcionar no RALibretro ou RetroArch

Para fazer o modo de emulação AES BIOS funcionar em seu emulador:

1. Certifique-se de que seu emulador funciona corretamente.

2. Coloque `neogeo.zip` no diretório `System` (RALibretro) ou uma pasta onde você mantém suas ROMs NeoGeo (RetroArch).

3. Certifique-se de que o `neogeo.zip` contenha pelo menos os arquivos que você pode ver aqui:

![](https://dl.dropboxusercontent.com/s/68l37qbt8myts82/aesminimum.png)

Se você mantiver apenas esses arquivos, o modo AES será automaticamente forçado para qualquer jogo NeoGeo (recomendado).

**Importante!** Os arquivos destacados nesta imagem (`neo-epo.bin` e `neo-po.bin`) são os únicos realmente relacionados ao modo AES, e você provavelmente precisará incluí-los em seu arquivo para fazer o modo AES funcionar. `neo-po.bin` é necessário para títulos exclusivos japoneses ou para fazer as versões japonesas funcionarem, mas devido a um problema de emulação, também força o idioma japonês como padrão, por isso você precisará removê-lo para exibir inglês em alguns jogos.

4. Carregue qualquer ROM neo geo compatível com FBA. Um arquivo mais completo (incluindo arquivos necessários para executar modos MVS e UniBIOS) pode precisar de configuração adicional para forçar o modo AES:

No RaLibretro: Configurações->Emulação->Forçar Modo Neo Geo->AES

No RetroArch: Comando->Alternar Menu->Opções->Forçar Modo Neo Geo->AES
