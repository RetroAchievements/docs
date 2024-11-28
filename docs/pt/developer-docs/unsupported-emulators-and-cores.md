---
title: Emuladores e cores sem suporte
description: Informação sobre emuladores e cores para o RetroAchievements
---

#  Emuladores e Cores sem suporte

## Amiga

- ❓ libretro core: **FS-UAE**
- ❌ libretro core: **P-UAE**
  - Precisa de um memory map para acessar a memória exposta
  - Trava arquivos do disco, impedindo que eles sejam aberto sem hashing
  - Suporte para hard disk?
- ❓ libretro core: **PUAE 2021**
- ❓ libretro core: **UAE4ARM**

## Amstrad CPC

- ❌ libretro core: **CrocoDS**

## Apple II

- ⌛ BizHawk core: **Virtu**
  - Testing
  - 4 Jun 2023 - arquivos do tipo woz não são suportados
  - 4 Jun 2023 - sem suporte para joystick. teclado tem que ser mapeado manualmente
  - 4 Jun 2023 - precisa manualmente criar e carregar bundles multi-disco para jogos com mais de um disco. discos são genéricamente identificados apenas pelo índice.
## Arcade

- ❌ libretro core: **FB Alpha**
  - Deprecado
- ❌ libretro core: **MAME**
- ❌ BizHawk core: **MAME**

## Atari 2600

- ❓ libretro core: **Stella 2014**

## Atari 5200

- ❌ _Não suportado_ - precisa do método de hashing e mapa de memória
- ❌ libretro core: **atari800**
  - Aparentemente funciona, mas o core causa dores de cabeça para usar.
    - A bio tem que ser configurada dentro do core (F1 > Emulator Configuration > System ROM settings)
    - Não consegui fazer os controles funcionar -  O joystick tem que ser configurado no core também?
    - Permite carregar arquivos arbitrários pelo menu interno, o que ignora o hashing
    - ❌ libretro core: **a5200**
  - Não expõe a memória

## Atari ST

- ❌ _Não Suportado_ - preciso de um ID do console, método de hashing e mapa de memória
- ❌ libretro core: **Hatari**
  - Memória não é exposta

## Casette Vision

- ❌ _Não suportado_ - precisa do método de hashing e mapa de memória


## CHIP-8

- ❌ _Não Suportado_ - preciso de um ID do console, método de hashing e mapa de memória
- ❌ libretro core: **Emux CHIP-8**
- ❌ libretro core: **JAXE**
  - 16 Apr 22 - Parece pronto quando estivermos prontos
  - Talvez precise de blacklist de configurações pra previnir que a velocidade diminua

## Commodore 128

- ❌ _Não suportado_
- ❌ libretro core: **VICE x128**

## Commodore 64

- ❌ libretro core: **vice_x64**
  - NOTE: Joystick está no port 2 por padrão. Use o botão JOY no teclado virtual (select) para trocar para o port 1.
  - 1 May 2022 - Reset não autoroda o jogo.
- ⌛ BizHawk core: C64Hawk
  - Testando
- ❓ libretro core: **Frodo**

## ColecoVision

- ❌ libretro core: **Gearcoleco**

## Elektronika BK-0010/0011

- ❌ _Não suportado_
- ❌ libretro core: **M**

## Enterprise 128

- ❌ _Não suportado_
- ❌ libretro core: **ep128emu**

## Fairchild Channel-F

- ❓ BizHawk core: **ChannelFHawk**

## FM Towns

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória

## Game & Watch

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **gw**
  - Não expõe a memória

## Game Boy

- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**

## Game Boy Color

- ❌ Standalone emulator: **Pizza Boy GBC**
  - Não está mais sendo desenvolvido. Problemas de compatibilidade podem causar problemas com desbloqueios. Os devs não tem meios para resolver esse problema.
- ❓ libretro core: **DoubleCherryGB**
- ❓ libretro core: **Emux GB**
- ❓ libretro core: **fixGB**
- ❓ libretro core: **SameBoy**
- ❓ libretro core: **TGB Dual**

## Game Boy Advance

- ❌ Standalone emulator: **Pizza Boy GBA**
  - Não está mais sendo desenvolvido. Problemas de compatibilidade podem causar problemas com desbloqueios. Os devs não tem meios para resolver esse problema. 
- ❓ libretro core: **gpSP**
- ❓ libretro core: **Meteor**
- ❓ libretro core: **TempGBA**

## GameCube

- ⌛ libretro core: **Dolphin**
  - Testando

## J2ME

- ❌ _Não suportado_ - precisa do ID do console, método de hashing e mapa de memória
- ❌ libretro core: **freej2me**

## Magnavox Odyssey 2

- ❓ BizHawk core: **O2Hawk**

## Master System / Mark III

- ❓ BizHawk core: **SMSHawk**
- ❓ libretro core: **Emux SMS**

## MicroW8

- ❌ _Não suportado_
- ❌ libretro core: **MicroW8**

## MS-DOS

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **dosbox-core**
- ❌ libretro core: **dosbox-SVN**
- ❌ libretro core: **dosbox-pure**
  - Precisa de um jeito de previnir iniciar com parâmetros da linha de comando especificados pelo usuário.
  - Precisa de um jeito de previnir TSRs
  - Precisa de um jeito de desabilitar os achievements se o jogo sai para a linha de comandos.

## MSX

- ❓ libretro core: **fMSX**

## Neo Geo Pocket

- ❓ libretro core: **RACE**

## Neo Geo Pocket Color

- ❓ libretro core: **RACE**

## NES / Famicom

- ❌ libretro core: **NEStopia**
  - Não mapeia SRAM
- ❓ libretro core: **Emux NES**
- ❓ libretro core: **fixNES**

## Nintendo 3DS

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **Citra**
  - Só expõe 64MB da memória - Documentação sugere que deveria expor 128MB.
  - Não suporta save states.
- ❌ libretro core: **Citra 2018**
- ❌ libretro core: **Citra Canary**

## Nintendo 64

- ⌛ BizHawk core: **Mupen64Plus**
  - Testando (existem problemas gráficos que podem ser arrumados usando o plugin angrylion)
 
## Nintendo DS

- ❌ Standalone Emulator: **melonDS Android**
  - Causa uma série de problemas com os achievements.
  - Devs não tem meios para resolver problemas que os jogadores tem.

## Nintendo DSi

- ❌ libretro core: **DeSmuME**
- ❌ libretro core: **melonDS**

## Nokia N-Gage

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória

## Oric

- ❌ _Não suportado_

## Palm OS

- ❌ _Não suportado_
- ❌ libretro core: **Mu**

## PC Engine CD / TurboGrafx-CD

- ❌ libretro core: **Beetle PCE**
  - Não expõe a RAM necessária para o PC Engine CD

## PC-6001

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória

## PC-8800

- ✅ libretro core: **QUASI88**
  - PC-88VA não suportado

## PC-9800

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **Neko Project II Kai**
  - Memoria não é exposta
    - Aparenta ser exposta em alguns jogos dependendo do tamanho de RAM selecionado, mas parece a RAM da máquina, e não algo relácionado ao jogo.
- ❌ libretro core: **Neko Project II**

## Philips CD-i

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **CDi 2015**
- ❌ libretro core: **SAME CDi**

## Philips P2000

- ❌ _Não suportado_
- ❌ libretro core: **M2000**

## Pico-8

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **FAKE-08**
- ❌ libretro core: **Retro8**

## PlayStation

- ❌ libretro core: **PCSX ReARMed**
  - BIOS não é necessária para esse core, e irá zerar a RAM do Kernel
  - Tecnicamente suportado; não recomendado.
- ❓ BizHawk core: **Octoshock** (Mednafen)
- ❓ BizHawk core: **Nymashock** (Mednafen)
- ❓ libretro core: **Rustation**

## PlayStation 2

- ❌ Standalone emulator: **AetherSX2**
  - Não está mais endo desenvolvido, e tem incompatibilidades conhecidas. Devs não tem meios para resolver eventuais problemas.
- ❌ Standalone emulator: **NetherSX2**
- ❌ libretro core: **LRPS2**
  - Ainda em alfa.
  - Não expõe a memória
- ❌ libretro core: **Play!**
  - Baixa compatibilidade com a maioria dos jogos comercalmente disponíveis.
  - Tela preta e problemas de em que o som "gagueja"

## PocketStation

- ❌ _Não suportado_ - precisa do ID do console, método de hashing e mapa de memória
- ❌ libretro core: **pockystation**
  - Core não aparenta ser funcional, mesmo no RetroArch

## SAM Coupé

- ❌ _Não suportado_
- ❌ libretro core: **SimCoupe**
  - Ainda em alfa

## Sega Dreamcast

- ❓ libretro core: **Flycast GLES2**
- ❌ Standalone Emulator: **Flycast**
    - Não testado
    - Devs nçao tem meios para resolver problemas de usuários.

## Sega Genesis / Mega Drive

- ❌ libretro core: **Blastem**
  - Enquanto alguns achievements talvéz funcionem, o core tem problemas com a porção da memória da Game RAM.

## Sega Pico

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **picodrive**
  - Precisa de controles relacionados à virar páginas nos livros que estão sendo usados.

## Sega Saturn

- ❌ libretro core: **Yabause**
  - Técnicamente suportado; Não recomendado
- ❌ libretro core: **Kronos**
  - Salvar e carregar estados costuma trabar a UI no RALibretro
  - Técnicamente suportado; Não recomendado
- ❓ libretro core: **YabaSanshiro**

## SG-1000

- ❌ libretro core: **Gearsystem**
  - Tem porções significativas da memória não expostas.

## Sharp X1

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **X1 Millennium**
  - 16 Apr 2022 - Escritas em disco modificam a mídia-fonte, o que quebra o hashing.

## Sharp X68K

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **px68k**
  - Crasha RALibretro enquanto carrega o jogo

## SNES / Super Famicom / Satellaview / Sufami Turbo

- ❓ libretro core: **Beetle bsnes**
- ❌ libretro core: **Beetle Supafaust**
  - 11 Jun 2024 - não expõe memória
- ❓ libretro core: **bsnes**
- ❓ libretro core: **bsnes 2014 Accuracy**
- ❓ libretro core: **bsnes 2014 Balanced**
- ❓ libretro core: **bsnes 2014 Performance**
- ❓ libretro core: **bsnes C++98 (v085)**
- ❓ libretro core: **bsnes-hd beta**
- ❓ libretro core: **bsnes-mercury Accuracy**
- ❓ libretro core: **bsnes-mercury Balanced**
- ❓ libretro core: **bsnes-mercury Performance**
- ❓ libretro core: **higan Accuracy**
- ❓ libretro core: **nSide Balanced**
- ❓ libretro core: **Snes9x 2002**
- ❓ libretro core: **Snes9x 2005**
- ❓ libretro core: **Snes9x 2005+**
- ❌ libretro core: **Snes9x 2010**
  - NÃO USE ISSO PARA ACHIEVEMENTS!!!!
- ❓ BizHawk core: **BSNES**
- ❓ BizHawk core: **BSNESv115+**

## SpectraVideo SVI 318/328

- ❌ _Não suportado_
- ❌ libretro core: **blueMSX**

## Super Casette Vision

- ❌ libretro core: **EmuSCV**
  - Não acabado de acordo com [libretro docs](https://docs.libretro.com/library/emuscv/).
  - Não expõe a memória. Aparente [exportar um save state](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229) via the RETRO_MEMORY_SAVE_RAM interface, which we try to shoehorn into $E000 as that's what's flagged as Cartridge RAM for the system.

## Thomson TO8/TO8D

- ❌ _Não suportado_ - precisa de método para hashing
- ❌ libretro core: **Theodore**
  - Parece funcionar
  - Incerto sobre como o core lida com escrever para o disco/fita. Talvez afete hashing.

## TI-83

- ⌛ libretro core: **Numero**
  - Testando
- ⌛ BizHawk core: **TI83Hawk**
  - Testando

## TIC-80

- ❌ _Não suportado_ - precisa de método para hashing
- ❌ libretro core: **TIC-80**
  - Não exporta a memória corretamente. Só dá para ver 8 bits.

## VIC-20

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **VICE xvic**

## VMU

- ❌ _Não suportado_ - precisa do ID do console, método de hashing, e mapa de memória
- ❌ libretro core: **VeMUlator**

## Wii

- ⌛ Standalone emulator: **Dolphin**
  - Testando
- ⌛ libretro core: **Dolphin**
  - Testando

## Wii U

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória

## Xbox

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **DirectXbox**
  - Ainda em alfa

## Zeebo

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória

## ZX81

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **EightyOne**
  - Memoria não é exposta

## ZX Spectrum

- ❌ _Não suportado_ - precisa de método para hashing e mapa de memória
- ❌ libretro core: **FUSE**
  - Precisa conseguir remapear o teclado para o port 3
  - Incerto sobre o suporte para save. Não consigo inserir o save disk
- ⌛ - BizHawk core: **ZXHawk**
  - Hashing precisa ser corrigido
  - Testando
