---
title: Métodos de Identificação de Jogos por Console
description: Guia detalhado sobre os métodos de hash usados para identificação de jogos em vários consoles de jogos, incluindo Nintendo, Sega, Sony e outros.
---

# Identificação de Jogos

Esta página detalha o método de hash usado para cada sistema suportado.

## The 3DO Company

- **3DO Interactive Multiplayer** usa um hash personalizado.
  - O cabeçalho do volume (primeiros 132 bytes do setor 0) e o conteúdo do arquivo LaunchMe são submetidos ao hash.

## Amstrad

- **Amstrad CPC** usa os checksums MD5 de cada disco.
  - Como o salvamento e outras manipulações podem alterar os dados do disco, cópias locais das imagens carregadas são necessárias para garantir que seus hashes não mudem entre as sessões.

## Apple

- **Apple II** usa os checksums MD5 de cada disco.
  - Como o salvamento e outras manipulações podem alterar os dados do disco, cópias locais das imagens carregadas são necessárias para garantir que seus hashes não mudem entre as sessões.

## Arcade

- **Arcade** usa um hash personalizado.
  - A string do nome do arquivo sem a extensão (`path/galaga.zip` -> `galaga`) é submetida ao hash. É sensível a maiúsculas e minúsculas.

## Arduboy Inc.

- **Arduboy** usa um hash personalizado.
  - Os arquivos .hex do Arduboy contêm texto ASCII. Normalizamos para terminações de linha Unix e depois realizamos um hash do arquivo completo.

## Atari

- **Atari 2600** usa o checksum MD5.

- **Atari 7800** usa o checksum MD5, a menos que a ROM tenha um cabeçalho.

  - Se a ROM começa com `\1ATARI7800`, os primeiros 128 bytes são ignorados e conteúdo restante do arquivo é submetido ao hash. Se a ROM não começa com `\1ATARI7800`, todo o arquivo é submetido ao hash.

- **Atari Jaguar** usa o checksum MD5.

- **Atari Jaguar CD** usa um hash personalizado.

  - Um bloco de cabeçalho está localizado dentro do primeiro setor do disco. Este bloco indica a localização e o tamanho do código de inicialização, que é carregado e submetido ao hash.
  - Se o hash resultante for `254487b59ab21bc005338e85cbf9fd2f`, é um bootloader comum para jogos homebrew e o código real do jogo está localizado na faixa 2. Se um bloco de cabeçalho separado contendo uma nova localização e tamanho for encontrado na faixa 2, então esses dados são carregados e submetidos ao hash.

- **Atari Lynx** usa o checksum MD5, a menos que a ROM tenha um cabeçalho.
  - Se a ROM começa com `LYNX\0`, os primeiros 64 bytes são ignorados e o conteúdo restante do arquivo é submetido ao hash. Se a ROM não começa com `LYNX\0`, o arquivo inteiro é submetido ao hash.

## Bandai

- **WonderSwan** usa o checksum MD5.

- **WonderSwan Color** usa o checksum MD5.

## Coleco

- **ColecoVision** usa o checksum MD5.

## Fairchild

- **Channel F** usa o checksum MD5.

## GCE

- **Vectrex** usa o checksum MD5.

## Magnavox

- **Odyssey2** usa o checksum MD5.

## Mattell

- **Intellivision** usa o checksum MD5.

## Microsoft

- **MSX / MSX2** usa os checksums MD5 de cada disco.
  - Como o salvamento altera os dados do disco, cópias locais das imagens carregadas são necessárias para garantir que seus hashes não mudem entre as sessões. Não acreditamos que isso esteja funcionando, mas ainda havemos de encontrar um jogo onde o salvamento em disco realmente funcione.

## NEC

- **PC-8001/PC-8801** usa os checksums MD5 de cada disco.

  - Como o salvamento e outras manipulações podem alterar os dados do disco, cópias locais das imagens carregadas são necessárias para garantir que seus hashes não mudem entre as sessões.

- **PC Engine / TurboGrafx 16 / SuperGrafx** usa o checksum MD5, a menos que a ROM tenha um cabeçalho.

  - Se o tamanho do arquivo for 512 bytes maior que um múltiplo de 128KB, os primeiros 512 bytes são ignorados e o conteúdo restante do arquivo é submetido ao hash. Se o tamanho do arquivo não for 512 bytes maior que um múltiplo de 128KB, todo o arquivo é submetido ao hash.

- **PC Engine CD / TurboGrafx-CD** - usa um hash personalizado. O código de inicialização e o título do disco são submetidos ao hash da seguinte forma:

  - Lê 128 bytes do setor 1 da faixa de dados (PCE é anterior ao ISO-9660, então não há sistema de arquivos para ler).
  - Se `"PC Engine CD-ROM SYSTEM"` não existir em 32 bytes nos dados, descarta como inválido.
  - Copia os últimos 22 bytes dos dados para um buffer. Este é o título do disco e _geralmente_ identifica o jogo.
  - Os primeiros três bytes dos dados são um índice de setor little-endian para o código de inicialização.
  - O quarto byte é o número de setores que o código de inicialização ocupa.
  - O código de inicialização é anexado ao buffer (N setores, começando no setor X)
  - O buffer é submetido ao hash.

- **PC-FX** usa um hash personalizado. O código de inicialização e o título do disco são submetidos ao hash da seguinte forma:
  - Lê 32 bytes do setor 0 da faixa de dados (PC-FX é anterior ao ISO-9660, então não há sistema de arquivos para ler).
  - Se `"PC-FX:Hu_CD-ROM"` não foi lido, descarta como inválido.
  - Lê 128 bytes do setor 1 da faixa de dados para um buffer. Este é o cabeçalho do volume e inclui o título do disco.
  - O valor de 32 bits em 32 bytes no buffer é o primeiro setor do código de inicialização.
  - O valor de 32 bits em 36 bytes no buffer é o número de setores que o código de inicialização ocupa.
  - O código de inicialização é anexado ao buffer (N setores, começando no setor X)
  - O buffer é submetido ao hash.

## Nintendo

- **Famicom Disk System** usa o checksum MD5, a menos que o arquivo tenha um cabeçalho.

  - Se a ROM começa com `FDS\1a`, os primeiros 16 bytes são ignorados e o conteúdo restante do arquivo é submetido ao hash.
  - Se a ROM não começa com `FDS\1a`, todo o arquivo é submetido ao hash.
  - Como o salvamento altera os dados do disco, cópias locais das imagens carregadas são necessárias para garantir que seus hashes não mudem entre as sessões.

- **Game Boy** usa o checksum MD5.

- **Game Boy Advance** usa o checksum MD5.

- **Game Boy Color** usa o checksum MD5.

- **GameCube** usa um hash personalizado. O código do programa inicialmente carregado é submetido ao hash da seguinte forma:

  - O Apploader é carregado e adicionado a um buffer.
  - Cada segmento DOL (código e dados) referenciado no Apploader é carregado e adicionado ao buffer.
  - O buffer é submetido ao hash.

- **Nintendo 64** usa o checksum MD5 para ROMs Big Endian (`.z64`).

  - ByteSwapped (`.v64`) e Little Endian (`.n64`) usam o checksum MD5 para sua contraparte Big Endian.

- **Nintendo DS** usa um hash personalizado.

  - Uma ROM NDS tem um cabeçalho de 0x160 bytes. Neste cabeçalho estão ponteiros para informações de ícone/título e para o código de inicialização para ambos os processadores. O método de hash combina o cabeçalho, os dois pedaços de código de inicialização e as informações de ícone/título e submete o resultado ao hash.
  - As informações de ícone/título são 0xA00 bytes começando no endereço armazenado no cabeçalho em $68
  - O endereço do código arm9 é armazenado em $20 no cabeçalho, e o tamanho é armazenado em $2C no cabeçalho
  - O endereço do código arm7 é armazenado em $30 no cabeçalho, e o tamanho é armazenado em $3C no cabeçalho

- **Nintendo Entertainment System / Famicom** usa um hash personalizado.

  - Se a ROM começa com `NES\1a`, os primeiros 16 bytes são ignorados e o conteúdo restante do arquivo é submetido ao hash.
  - Se a ROM não começa com `NES\1a`, todo o arquivo é submetido ao hash.

- **Pokemon Mini** usa o checksum MD5.

- **Super Nintendo Entertainment System / Super Famicom / Satellaview / Sufami Turbo** usa o MD5, a menos que a ROM tenha um cabeçalho.
  - Se o tamanho do arquivo for 512 bytes maior que um múltiplo de 8KB, os primeiros 512 bytes são ignorados e o conteúdo restante do arquivo é submetido ao hash.
  - Se o tamanho do arquivo não for 512 bytes maior que um múltiplo de 8KB, todo o arquivo é submetido ao hash.
- **Virtual Boy** usa o checksum MD5.

## SNK

- **Neo Geo CD** usa um hash personalizado. O código do programa inicialmente carregado é submetido ao hash da seguinte forma:

  - O arquivo `IPL.TXT` é carregado e analisado.
  - Cada linha do arquivo são dados para carregar. Arquivos PRG são código executável. Cada arquivo PRG é carregado e adicionado ao buffer.
  - O buffer é submetido ao hash.

- **Neo Geo Pocket** usa o checksum MD5.

- **Neo Geo Pocket Color** usa o checksum MD5.

## Sega

- **32X** usa o checksum MD5.

- **Dreamcast** usa um hash personalizado. Os metadados do disco e o executável principal são submetidos ao hash da seguinte forma:

  - Os primeiros 512 bytes do setor 0 são anexados ao buffer. Isso contém o cabeçalho do volume e o cabeçalho da ROM. Os primeiros 16 bytes devem ser `"SEGA SEGAKATANA "`. Se não, descarta como inválido.
  - O conteúdo do executável principal (conforme identificado pelo cabeçalho do volume) é anexado ao buffer.
  - O buffer é submetido ao hash.

- **Game Gear** usa o checksum MD5.

- **Master System** usa o checksum MD5.

- **Mega Drive / Genesis** usa o checksum MD5.

- **SG-1000** usa o checksum MD5.

- **Saturn** usa um hash personalizado.

  - Os primeiros 512 bytes da faixa 0 são submetidos ao hash. Isso contém o cabeçalho do volume e o cabeçalho da ROM. Os primeiros 16 bytes devem ser `"SEGADISCSYSTEM  "` para Sega CD ou `"SEGA SEGASATURN "` para Sega Saturn. Se não, descarta como inválido.
  - Imediatamente após esses 512 bytes há uma quantidade arbitrária de código que valida a região e carrega o executável principal. Sem processar o código, não podemos determinar quais arquivos adicionais submeter ao hash, então isso foi determinado como suficiente como alternativa a submeter todo o CD ao hash.

- **Sega CD** usa um hash personalizado.
  - Os primeiros 512 bytes da faixa 0 são submetidos ao hash. Isso contém o cabeçalho do volume e o cabeçalho da ROM. Os primeiros 16 bytes devem ser `"SEGADISCSYSTEM  "` para Sega CD ou `"SEGA SEGASATURN "` para Sega Saturn. Se não, descarta como inválido.
  - Imediatamente após esses 512 bytes há uma quantidade arbitrária de código que valida a região e carrega o executável principal. Sem processar o código, não podemos determinar quais arquivos adicionais submeter ao hash, então isso foi determinado como suficiente como alternativa a submeter todo o CD ao hash.

## Sony

- **PlayStation** usa um hash personalizado. O executável principal e seu nome são submetidos ao hash da seguinte forma:
  - O arquivo `SYSTEM.CNF` é carregado e analisado. O executável principal é identificado pela linha BOOT= dentro dele.
  - O nome do executável principal (e seu caminho) são extraídos do `SYSTEM.CNF` e escritos em um buffer.
  - O conteúdo do executável principal é anexado ao buffer.
  - O buffer é submetido ao hash.
- **PlayStation 2** usa um hash personalizado. O executável principal e seu nome são submetidos ao hash da seguinte forma:
  - O arquivo `SYSTEM.CNF` é carregado e analisado. O executável principal é identificado pela linha BOOT2= dentro dele.
  - O nome do executável principal (e seu caminho) são extraídos do `SYSTEM.CNF` e escritos em um buffer.
  - O conteúdo do executável principal é anexado ao buffer.
  - O buffer é submetido ao hash.
- **PlayStation Portable** usa um hash personalizado. Os metadados do disco e o executável principal são submetidos ao hash da seguinte forma:
  - O conteúdo do arquivo `PSP_GAME\PARAMS.SFO` é escrito em um buffer. Isso contém os atributos do jogo exibidos no menu, incluindo o nome e o serial.
  - O conteúdo do executável principal (`PSP_GAME\SYSDIR\EBOOT.BIN`) é anexado ao buffer.
  - O buffer é submetido ao hash.

## WASM-4

- **WASM-4** usa o checksum MD5.

## Watara

- **Supervision** usa o checksum MD5.

## Wellback

- **Mega Duck** usa o checksum MD5.
