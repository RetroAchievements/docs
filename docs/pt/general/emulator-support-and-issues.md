# Suporte e Problemas do Emulador

## Suporte de Consoles

### 3DO Interactive Multiplayer

- ✅ núcleo libretro: **Opera**
  - Alguns problemas dependendo do BIOS

### Amiga

- ❓ núcleo libretro: **FS-UAE**
- ❌ núcleo libretro: **P-UAE**
  - Precisa de um mapa de memória para ver a memória exposta
  - Bloqueia arquivos de disco para que não possam ser abertos para hashing
  - Suporte a disco rígido?
- ❓ núcleo libretro: **PUAE 2021**
- ❓ núcleo libretro: **UAE4ARM**

### Amstrad CPC

- ✅ núcleo libretro: **Caprice32**
  - O núcleo atualmente não suporta gravação em disco, o que pode afetar o hashing quando implementado
- ❌ núcleo libretro: **CrocoDS**

### Apple II

- ✅ Emulador standalone: **[RAppleWin](https://retroachievements.org/download.php#rapplewin)**
- ⌛ núcleo BizHawk: **Virtu**
  - Testando
  - 4 Jun 2023 - arquivos woz não são suportados
  - 4 Jun 2023 - joystick não suportado. o teclado deve ser mapeado manualmente.
  - 4 Jun 2023 - é necessário criar e carregar manualmente um pacote multi-disco para jogos com múltiplos discos. os discos são rotulados genericamente apenas pelo índice.

### Arcade

- ✅ núcleo libretro: **FinalBurn Neo**
  - Algumas placas podem não estar totalmente expostas
- ✅ núcleo libretro: **flycast**
  - Usado para Atomiswave, NAOMI e NAOMI2
- ❌ núcleo libretro: **FB Alpha**
  - Descontinuado
- ❌ núcleo libretro: **MAME**
- ❌ núcleo BizHawk: **MAME**

### Arcadia 2001

- ✅ Emulador standalone: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Arduboy

- ✅ núcleo libretro: **Arduous**

### Atari 2600

- ✅ núcleo libretro: **Stella**
- ❓ núcleo libretro: **Stella 2014**
- ✅ núcleo BizHawk: **Atari2600Hawk**
  - Conquistas que exigem reinicializações do emulador não funcionam - se você encontrar uma, por favor, abra um ticket para que a conquista possa ser corrigida.

#### Atari 5200

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **atari800**
  - Parece funcionar bem, mas o núcleo é um pouco complicado de usar.
    - O BIOS deve ser configurado dentro do núcleo (F1 > Emulator Configuration > System ROM settings)
    - Não consegui descobrir os controles - o joystick precisa ser configurado dentro do núcleo também?
    - Permite carregar arquivos arbitrários do menu interno, o que ignora o hashing
- ❌ núcleo libretro: **a5200**
  - Não expõe memória

#### Atari 7800

- ✅ núcleo libretro: **ProSystem**
- ✅ núcleo BizHawk: **A7800Hawk**

#### Atari Jaguar

- ✅ núcleo libretro: **Virtual Jaguar**
  - Sem suporte a save states
  - [Muitos problemas de emulação](https://github.com/libretro/virtualjaguar-libretro/issues/38)
- ✅ núcleo BizHawk: **Virtual Jaguar**

#### Atari Jaguar CD

- ✅ núcleo BizHawk: **Virtual Jaguar**

#### Atari Lynx

- ✅ núcleo libretro: **Handy**
  - Mais recomendado
- ✅ núcleo libretro: **Beetle Lynx**
- ✅ núcleo BizHawk: **Handy** (fork do Mednafen)

#### Atari ST

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **Hatari**
  - Memória não exposta

#### Cassette Vision

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória

#### CHIP-8

- ❌ _Não suportado_ - precisa de ID do console, método de hashing e mapa de memória
- ❌ núcleo libretro: **Emux CHIP-8**
- ❌ núcleo libretro: **JAXE**
  - 16 Abr 2022 - Parece pronto quando estivermos
  - Pode precisar de uma lista negra de configurações para evitar a redução da velocidade

#### Commodore 128

- ❌ _Não suportado_
- ❌ núcleo libretro: **VICE x128**

#### Commodore 64

- ❌ núcleo libretro: **vice_x64**
  - NOTA: Joystick está na porta 2 por padrão. Use o botão JOY no teclado virtual (select) para trocá-lo para a porta 1.
  - 1 Maio 2022 - Reset não executa o jogo automaticamente
- ⌛ núcleo BizHawk: **C64Hawk**
  - Testando
- ❓ núcleo libretro: **Frodo**

#### ColecoVision

- ✅ Emulador standalone: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ núcleo libretro: **blueMSX**
- ✅ núcleo BizHawk: **ColecoHawk**
- ❌ núcleo libretro: **Gearcoleco**

#### Elektronika BK-0010/0011

- ❌ _Não suportado_
- ❌ núcleo libretro: **M**

#### Elektor TV Games Computer

- ✅ Emulador standalone: **[WinArcadia](https://amigan.1emu.net/releases/)**

#### Enterprise 128

- ❌ _Não suportado_
- ❌ núcleo libretro: **ep128emu**

#### Fairchild Channel-F

- ✅ núcleo libretro: **FreeChaF**
- ❓ núcleo BizHawk: **ChannelFHawk**

#### Famicom Disk System

- ✅ Emulador standalone: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ núcleo libretro: **FCEUmm**
- ✅ núcleo libretro: **Mesen**

#### FM Towns

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória

#### Game & Watch

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **gw**
  - Não expõe memória

#### Game Boy

- ✅ Emulador standalone: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ núcleo libretro: **Gambatte**
  - Mais recomendado
- ✅ núcleo libretro: **Gearboy**
- ✅ núcleo libretro: **mGBA**
- ✅ núcleo libretro: **VBA-M**
- ❓ núcleo libretro: **DoubleCherryGB**
- ❓ núcleo libretro: **Emux GB**
- ❓ núcleo libretro: **fixGB**
- ❓ núcleo libretro: **SameBoy**
- ❓ núcleo libretro: **TGB Dual**

#### Game Boy Color

- ✅ Emulador standalone: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Emulador standalone: **[Pizza Boy GBC](https://play.google.com/store/apps/details?id=it.dbtecno.pizzaboy)**
  - Apenas dispositivos Android
  - Não suporta RAIntegration no momento, então os desenvolvedores de conquistas não conseguem solucionar possíveis problemas.
- ✅ núcleo libretro: **Gambatte**
  - Mais recomendado
- ✅ núcleo libretro: **Gearboy**
- ✅ núcleo libretro: **mGBA**
- ✅ núcleo libretro: **VBA-M**
- ✅ núcleo BizHawk: **Gambatte** (fork de speedrunning de Pokémon)
- ✅ núcleo BizHawk: **GBHawk**
- ❓ núcleo libretro: **DoubleCherryGB**
- ❓ núcleo libretro: **Emux GB**
- ❓ núcleo libretro: **fixGB**
- ❓ núcleo libretro: **SameBoy**
- ❓ núcleo libretro: **TGB Dual**

#### Game Boy Advance

- ✅ Emulador standalone: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Emulador standalone: **[Pizza Boy GBA](https://play.google.com/store/apps/details?id=it.dbtecno.pizzaboygba)**
  - Apenas dispositivos Android
  - Não suporta RAIntegration no momento, então os desenvolvedores de conquistas não conseguem solucionar possíveis problemas.
- ✅ núcleo libretro: **VBA-M**
- ✅ núcleo libretro: **Beetle GBA**
- ✅ núcleo libretro: **VBA Next**
- ✅ núcleo libretro: **mGBA**
  - Mais recomendado
- ✅ núcleo BizHawk: **mGBA**
- ❓ núcleo libretro: **gpSP**
- ❓ núcleo libretro: **Meteor**
- ❓ núcleo libretro: **TempGBA**

#### GameCube

- ⌛ Emulador standalone: **Dolphin**
  - Testando
- ⌛ núcleo libretro: **Dolphin**
  - Testando

#### Game Gear

- ✅ Emulador standalone: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ núcleo libretro: **Genesis Plus GX**
- ✅ núcleo libretro: **GearSystem**

#### Genesis / Mega Drive

- ✅ núcleo libretro: **Genesis Plus GX**
  - Mais recomendado
- ✅ núcleo libretro: **Picodrive**
- ❌ núcleo libretro: **Blastem**
  - Embora algumas conquistas possam funcionar, o núcleo tem problemas com a porção da memória Game RAM.
- ✅ núcleo BizHawk: **Genplus-gx** (Genesis Plus GX)

#### Intellivision

- ✅ núcleo libretro: **FreeIntV**
  - Travamentos ao reiniciar o jogo
  - Alguns travamentos que podem estar relacionados ao Intellivoice
- ✅ núcleo BizHawk: **IntelliHawk**

#### Interton VC 4000

- ✅ Emulador standalone: **[WinArcadia](https://amigan.1emu.net/releases/)**

#### J2ME

- ❌ _Não suportado_ - precisa de ID do console, método de hashing e mapa de memória
- ❌ núcleo libretro: **freej2me**

#### Magnavox Odyssey 2

- ✅ núcleo libretro: **O2EM**
- ❓ núcleo BizHawk: **O2Hawk**

#### Master System | Mark III

- ✅ Emulador standalone: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ núcleo libretro: **Gearsystem**
- ✅ núcleo libretro: **Genesis Plus GX**
- ✅ núcleo libretro: **Picodrive**
- ❓ núcleo BizHawk: **SMSHawk**
- ❓ núcleo libretro: **Emux SMS**

#### Mega Duck

- ✅ núcleo libretro: **SameDuck**

#### MicroW8

- ❌ _Não suportado_
- ❌ núcleo libretro: **MicroW8**

#### MS-DOS

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **dosbox-core**
- ❌ núcleo libretro: **dosbox-SVN**
- ❌ núcleo libretro: **dosbox-pure**
  - Precisa de uma maneira de impedir o lançamento com parâmetros de linha de comando especificados pelo usuário
  - Precisa de uma maneira de impedir TSRs
  - Precisa de uma maneira de desativar conquistas se o jogo retornar ao prompt de comando

#### MSX

- ✅ núcleo libretro: **blueMSX**
  - O hash depende do arquivo .DSK não ser modificado
  - Arquivos .DSK parecem não ser suportados se também exigirem um cartucho. Existe uma opção de núcleo para isso, mas não parece funcionar corretamente. Veja "SD Snatcher", que usava um cartucho de 'som'.
- ❓ núcleo libretro: **fMSX**

#### Neo Geo CD

- ✅ núcleo libretro: **NeoCD**

#### Neo Geo Pocket

- ✅ núcleo libretro: **Beetle NeoPop**
- ❓ núcleo libretro: **RACE**
- ✅ núcleo BizHawk: **NeoPop** (Mednafen)

#### Neo Geo Pocket Color

- ✅ núcleo libretro: **Beetle NeoPop**
- ❓ núcleo libretro: **RACE**
- ✅ núcleo BizHawk: **NeoPop** (Mednafen)

#### NES / Famicom

- ✅ Emulador standalone: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ núcleo libretro: **FCEUmm**
  - Mais recomendado
- ✅ núcleo libretro: **Mesen**
- ✅ núcleo libretro: **QuickNES**
- ❌ núcleo libretro: **NEStopia**
  - Não mapeia SRAM
  - POR FAVOR, PARE DE USAR ISSO PARA CONQUISTAS
- ❓ núcleo libretro: **Emux NES**
- ❓ núcleo libretro: **fixNES**

#### Nintendo 3DS

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **Citra**
  - Apenas expõe 64MB de memória - a documentação sugere que deveria haver 128MB.
  - Não suporta save states
- ❌ núcleo libretro: **Citra 2018**
- ❌ núcleo libretro: **Citra Canary**

#### Nintendo 64

- ✅ Emulador standalone: **[RAProject64](https://retroachievements.org/download.php#rap64)**
- ✅ núcleo libretro: **ParaLLEl N64**
- ✅ núcleo libretro: **Mupen64Plus-Next**
  - Mais recomendado
- ⌛ núcleo BizHawk: **Mupen64Plus**
  - Testando (existem alguns problemas gráficos que podem ser corrigidos usando o plugin angrylion)

#### Nintendo DS

- Suporte limitado a microfone
- ✅ núcleo libretro: **DeSmuME**
- ✅ núcleo libretro: **DeSmuME 2015**
- ✅ núcleo libretro: **melonDS**
- ✅ núcleo libretro: **melonDS DS**
- ✅ núcleo BizHawk: **melonDS**

#### Nintendo DSi

- ✅ núcleo libretro: **melonDS DS**
  - Não suporta save states no momento
- ✅ núcleo BizHawk: **melonDS**
- ❌ núcleo libretro: **DeSmuME**
- ❌ núcleo libretro: **melonDS**

#### Nokia N-Gage

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória

#### Oric

- ❌ _Não suportado_

#### Palm OS

- ❌ _Não suportado_
- ❌ núcleo libretro: **Mu**

#### PC Engine | TurboGrafx-16 | SuperGrafx

- ✅ núcleo libretro: **Beetle PCE Fast**
  - Jogos do SuperGrafx não funcionam no núcleo Beetle PCE Fast
- ✅ núcleo libretro: **Beetle SuperGrafx**
  - Mais recomendado
- ✅ núcleo BizHawk: **PCEHawk**

#### PC Engine CD | TurboGrafx-CD

- ✅ núcleo libretro: **Beetle PCE Fast**
- ✅ núcleo libretro: **Beetle SuperGrafx**
  - Mais recomendado
- ✅ núcleo BizHawk: **PCEHawk**
- ❌ núcleo libretro: **Beetle PCE**
  - Não expõe a RAM necessária para PC Engine CD

#### PC-6001

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória

#### PC-8800

- ✅ Emulador standalone: **[RAQuasi88](https://retroachievements.org/download.php#raquasi88)**
  - Mais recomendado
- ❌ núcleo libretro: **quasi88**
  - NÃO RECOMENDADO
  - PC-88VA não suportado
  - 16 Abr 2022 - Não é possível carregar m3u. O hash falha porque o núcleo bloqueia o arquivo de disco.
  - 16 Abr 2022 - Tentar carregar um jogo de disco único no RALibretro leva ao prompt "Quantos discos?". Parece funcionar no RetroArch
  - 16 Abr 2022 - O RALibretro não fornece a interface de subsistema para carregar jogos multi-disco

#### PC-9800

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **Neko Project II Kai**
  - Memória não exposta.
    - Parece estar exposta em alguns jogos dependendo do tamanho da RAM selecionada, mas parece ser a RAM da máquina e não relacionada ao jogo.
- ❌ núcleo libretro: **Neko Project II**

#### PC-FX

- ✅ núcleo libretro: **Beetle PC-FX**
- ✅ núcleo BizHawk: **T.S.T.** (Mednafen)

#### Philips CD-I

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **CDi 2015**
- ❌ núcleo libretro: **SAME CDi**

#### Philips P2000

- ❌ _Não suportado_
- ❌ núcleo libretro: **M2000**

#### Pico-8

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **FAKE-08**
- ❌ núcleo libretro: **Retro8**

#### PlayStation

- ✅ Emulador standalone: **[DuckStation](https://www.duckstation.org/wiki/Main_Page)**
  - Pode haver vazamento de memória e/ou burn-in ao usar save states. Jogadores Softcore, cuidado!
- ✅ núcleo libretro: **Beetle PSX HW**
  - Mais recomendado
- ✅ núcleo libretro: **Beetle PSX**
- ✅ núcleo libretro: **SwanStation**
- ❌ núcleo libretro: **PCSX ReARMed**
  - BIOS não são necessários para este núcleo e irão zerar a RAM do Kernel.
  - Tecnicamente suportado; não recomendado.
- ❓ núcleo BizHawk: **Octoshock** (Mednafen)
- ❓ núcleo BizHawk: **Nymashock** (Mednafen)
- ❓ núcleo libretro: **Rustation**

#### PlayStation 2

- ✅ Emulador standalone: **[PCSX2](https://pcsx2.net/)**
  - PCSX2 é atualmente **a única opção oficialmente suportada** para ganhar conquistas.
- ❌ Emulador standalone: **AetherSX2**
  - Não está mais sendo desenvolvido, tem incompatibilidades conhecidas
- ❌ Emulador standalone: **NetherSX2**
- ❌ núcleo libretro: **LRPS2**
  - Ainda em estado alfa
  - Não expõe memória
- ❌ núcleo libretro: **Play!**
  - Baixa compatibilidade com a maioria dos jogos comerciais
  - Tela preta com som gaguejante

#### PlayStation Portable

- ✅ Emulador standalone: **[PPSSPP](https://www.ppsspp.org/download/)**
  - Não suporta RAIntegration no momento, então os desenvolvedores de conquistas não conseguem solucionar possíveis problemas.
- ✅ núcleo libretro: **PPSSPP**
  - Carregar save states muito rápido pode causar travamentos
  - Alguns jogos têm problemas gráficos

#### PocketStation

- ❌ _Não suportado_ - precisa de ID do console, método de hashing e mapa de memória
- ❌ núcleo libretro: **pockystation**
  - O núcleo não parece funcional, mesmo no RetroArch

#### Pokemon Mini

- ✅ núcleo libretro: **PokeMini**

#### SAM Coupé

- ❌ _Não suportado_
- ❌ núcleo libretro: **SimCoupe**
  - Ainda em estado alfa

#### Sega 32X

- ✅ núcleo libretro: **PicoDrive**
  - Vários jogos são problemáticos, use BizHawk se uma conquista aparecer como Não Suportada
  - Parece ainda ter RAM não mapeada
- ✅ núcleo BizHawk: **PicoDrive**
  - Mais recomendado

#### Sega CD

- Parece ainda ter RAM não mapeada
- ✅ núcleo libretro: **Genesis Plus GX**
- ✅ núcleo libretro: **Picodrive**

#### Sega Dreamcast

- ✅ núcleo libretro: **flycast**
  - Deve desativar a renderização encadeada para usar save states
- ❓ núcleo libretro: **Flycast GLES2**

#### Sega Pico

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **picodrive**
  - Precisa de controles relacionados a virar páginas nos livros anexados

#### Sega Saturn

- ✅ núcleo libretro: **Beetle Saturn**
  - O único núcleo _recomendado_
- ❌ núcleo libretro: **Yabause**
  - Tecnicamente suportado; não recomendado.
- ❌ núcleo libretro: **Kronos**
  - Salvar e carregar estados frequentemente trava a interface do usuário no RALibretro
  - Tecnicamente suportado; não recomendado.
- ❓ núcleo libretro: **YabaSanshiro**
- ⌛ núcleo BizHawk: **Saturnus** (Mednafen)
  - Testando

#### SG-1000

- ✅ Emulador standalone: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ núcleo libretro: **Genesis Plus GX**
  - Mais recomendado
- ✅ núcleo libretro: **blueMSX**
- ❌ núcleo libretro: **Gearsystem**
  - Tem memória significativa não exposta

#### Sharp X1

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **X1 Millennium**
  - 16 Abr 2022 - Gravações em disco modificam a mídia original, o que quebra o hashing

#### Sharp X68K

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **px68k**
  - Travamentos no RALibretro ao carregar um jogo

#### SNES | Super Famicom | Satellaview | Sufami Turbo

- ✅ Emulador standalone: **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)**
- ✅ núcleo libretro: **Snes9x (Current)**
  - Mais recomendado
- ✅ núcleo libretro: **Mesen-S**
- ❓ núcleo libretro: **Beetle bsnes**
- ❓ núcleo libretro: **Beetle Supafaust**
- ❓ núcleo libretro: **bsnes**
- ❓ núcleo libretro: **bsnes 2014 Accuracy**
- ❓ núcleo libretro: **bsnes 2014 Balanced**
- ❓ núcleo libretro: **bsnes 2014 Performance**
- ❓ núcleo libretro: **bsnes C++98 (v085)**
- ❓ núcleo libretro: **bsnes-hd beta**
- ❓ núcleo libretro: **bsnes-mercury Accuracy**
- ❓ núcleo libretro: **bsnes-mercury Balanced**
- ❓ núcleo libretro: **bsnes-mercury Performance**
- ❓ núcleo libretro: **higan Accuracy**
- ❓ núcleo libretro: **nSide Balanced**
- ❓ núcleo libretro: **Snes9x 2002**
- ❓ núcleo libretro: **Snes9x 2005**
- ❓ núcleo libretro: **Snes9x 2005+**
- ❌ núcleo libretro: **Snes9x 2010**
  - POR FAVOR, PARE DE USAR ISSO PARA CONQUISTAS!!!!
- ❓ núcleo BizHawk: **BSNES**
- ❓ núcleo BizHawk: **BSNESv115+**

#### SpectraVideo SVI 318/328

- ❌ _Não suportado_
- ❌ núcleo libretro: **blueMSX**

#### Super Cassette Vision

- ❌ núcleo libretro: **EmuSCV**
  - Inacabado de acordo com [docs do libretro](https://docs.libretro.com/library/emuscv/).
  - Não expõe memória. Parece [exportar um save state](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229) via a interface RETRO_MEMORY_SAVE_RAM, que tentamos encaixar em $E000, pois é o que está sinalizado como RAM de Cartucho para o sistema.

#### Thomson TO8/TO8D

- ❌ _Não suportado_ - precisa de método de hashing
- ❌ núcleo libretro: **Theodore**
  - Parece funcionar
  - Incerto como o núcleo lida com gravação em disco/fita. Pode afetar o hashing.

#### TI-83

- ⌛ núcleo libretro: **Numero**
  - Testando
- ⌛ núcleo BizHawk: **TI83Hawk**
  - Testando

#### TIC-80

- ❌ _Não suportado_ - precisa de método de hashing
- ❌ núcleo libretro: **TIC-80**
  - Não exporta memória corretamente. Só é possível ver 8 bytes.

#### Uzebox

- ✅ núcleo BizHawk: **Uzem**
- ✅ núcleo libretro: **Uzebox**

#### Vectrex

- ✅ núcleo libretro: **VecX**

#### VIC-20

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **VICE xvic**

#### Virtual Boy

- ✅ núcleo libretro: **Beetle VB**
- ✅ núcleo BizHawk: **Virtual Boyee** (Mednafen)

#### VMU

- ❌ _Não suportado_ - precisa de ID do console, método de hashing e mapa de memória
- ❌ núcleo libretro: **VeMUlator**

#### WASM-4

- ✅ núcleo libretro: **wasm4**

#### Watara Supervision

- ✅ núcleo libretro: **potator**

#### Wii

- ⌛ Emulador standalone: **Dolphin**
  - Testando
- ⌛ núcleo libretro: **Dolphin**
  - Testando

#### Wii U

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória

#### WonderSwan

- ✅ núcleo libretro: **Beetle Cygne**
- ✅ núcleo BizHawk: **Cygne** (Mednafen)

#### WonderSwan Color

- ✅ núcleo libretro: **Beetle Cygne**
- ✅ núcleo BizHawk: **Cygne** (Mednafen)

#### XBOX

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **DirectXbox**
  - Ainda em estado alfa

#### Zeebo

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória

#### ZX81

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **EightyOne**
  - Memória não exposta

#### ZX Spectrum

- ❌ _Não suportado_ - precisa de método de hashing e mapa de memória
- ❌ núcleo libretro: **FUSE**
  - Requer capacidade de mapear o teclado para a porta 3
  - Incerto sobre o suporte a save. Não é possível inserir disco de gravação
- ⌛ núcleo BizHawk: **ZXHawk**
  - O hashing precisa ser corrigido
  - Testando

Mais detalhes sobre os núcleos BizHawk podem ser encontrados [aqui](https://tasvideos.org/BizHawk).
