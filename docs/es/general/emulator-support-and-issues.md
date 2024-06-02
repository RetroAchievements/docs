# Soporte e Incidencias de Emuladores

## Soporte de Consolas

### 3DO Interactive Multiplayer

- ✅ núcleo de libretro: **Opera**
  - Algunos problemas dependiendo del BIOS

### Amiga

- ❓ núcleo de libretro: **FS-UAE**
- ❌ núcleo de libretro: **P-UAE**
  - Necesita un mapa de memoria para ver la memoria expuesta
  - Bloquea los archivos de disco para que no se puedan abrir para hashing
  - ¿Soporte para disco duro?
- ❓ núcleo de libretro: **PUAE 2021**
- ❓ núcleo de libretro: **UAE4ARM**

### Amstrad CPC

- ✅ núcleo de libretro: **Caprice32**
  - El núcleo actualmente no soporta escribir en disco, lo que puede afectar el hashing cuando se implemente
- ❌ núcleo de libretro: **CrocoDS**

### Apple II

- ✅ Emulador independiente: **[RAppleWin](https://retroachievements.org/download.php#rapplewin)**
- ⌛ núcleo de BizHawk: **Virtu**
  - En pruebas
  - 4 Jun 2023 - archivos woz no son soportados
  - 4 Jun 2023 - joystick no soportado. El teclado debe ser mapeado manualmente.
  - 4 Jun 2023 - se debe crear y cargar manualmente un paquete de discos múltiples para juegos con múltiples discos. Los discos están etiquetados genéricamente solo por índice.

### Arcade

- ✅ núcleo de libretro: **FinalBurn Neo**
  - Algunas placas pueden no estar completamente expuestas
- ✅ núcleo de libretro: **flycast**
  - Usado para Atomiswave, NAOMI, y NAOMI2
- ❌ núcleo de libretro: **FB Alpha**
  - Obsoleto
- ❌ núcleo de libretro: **MAME**
- ❌ núcleo de BizHawk: **MAME**

### Arcadia 2001

- ✅ Emulador independiente: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Arduboy

- ✅ núcleo de libretro: **Arduous**

### Atari 2600

- ✅ núcleo de libretro: **Stella**
- ❓ núcleo de libretro: **Stella 2014**
- ✅ núcleo de BizHawk: **Atari2600Hawk**
  - Los logros que requieren reinicios del emulador no funcionan; si ves alguno, abre un ticket para que se pueda arreglar el logro.

#### Atari 5200

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **atari800**
  - Parece funcionar bien, pero el núcleo es un poco complicado de usar.
    - El BIOS debe configurarse dentro del núcleo (F1 > Emulator Configuration > System ROM settings)
    - No se pudieron averiguar los controles; ¿es necesario configurar el joystick dentro del núcleo también?
    - Permite cargar archivos arbitrarios desde el menú interno, lo que evita el hashing
- ❌ núcleo de libretro: **a5200**
  - No expone la memoria

#### Atari 7800

- ✅ núcleo de libretro: **ProSystem**
- ✅ núcleo de BizHawk: **A7800Hawk**

#### Atari Jaguar

- ✅ núcleo de libretro: **Virtual Jaguar**
  - Sin soporte para save states
  - [Muchos problemas con la emulación](https://github.com/libretro/virtualjaguar-libretro/issues/38)
- ✅ núcleo de BizHawk: **Virtual Jaguar**

#### Atari Jaguar CD

- ✅ núcleo de BizHawk: **Virtual Jaguar**

#### Atari Lynx

- ✅ núcleo de libretro: **Handy**
  - Más recomendado
- ✅ núcleo de libretro: **Beetle Lynx**
- ✅ núcleo de BizHawk: **Handy** (fork de Mednafen)

#### Atari ST

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **Hatari**
  - Memoria no expuesta

#### Cassette Vision

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

#### CHIP-8

- ❌ _No soportado_ - necesita una ID de consola, un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **Emux CHIP-8**
- ❌ núcleo de libretro: **JAXE**
  - 16 Abr 22 - Parece estar listo cuando nosotros lo estemos
  - Puede necesitar una lista negra de configuraciones para evitar la reducción de velocidad

#### Commodore 128

- ❌ _No soportado_
- ❌ núcleo de libretro: **VICE x128**

#### Commodore 64

- ❌ núcleo de libretro: **vice_x64**
  - NOTA: El joystick está en el puerto 2 por defecto. Usa el botón JOY en el teclado virtual (select) para cambiarlo al puerto 1.
  - 1 May 2022 - El reinicio no ejecuta automáticamente el juego
- ⌛ núcleo de BizHawk: **C64Hawk**
  - En pruebas
- ❓ núcleo de libretro: **Frodo**

#### ColecoVision

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ núcleo de libretro: **blueMSX**
- ✅ núcleo de BizHawk: **ColecoHawk**
- ❌ núcleo de libretro: **Gearcoleco**

#### Elektronika BK-0010/0011

- ❌ _No soportado_
- ❌ núcleo de libretro: **M**

#### Elektor TV Games Computer

- ✅ Emulador independiente: **[WinArcadia](https://amigan.1emu.net/releases/)**

#### Enterprise 128

- ❌ _No soportado_
- ❌ núcleo de libretro: **ep128emu**

#### Fairchild Channel-F

- ✅ núcleo de libretro: **FreeChaF**
- ❓ núcleo de BizHawk: **ChannelFHawk**

#### Famicom Disk System

- ✅ Emulador independiente: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ núcleo de libretro: **FCEUmm**
- ✅ núcleo de libretro: **Mesen**

#### FM Towns

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

#### Game & Watch

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **gw**
  - No expone memoria

#### Game Boy

- ✅ Emulador independiente: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ núcleo de libretro: **Gambatte**
  - Más recomendado
- ✅ núcleo de libretro: **Gearboy**
- ✅ núcleo de libretro: **mGBA**
- ✅ núcleo de libretro: **VBA-M**
- ❓ núcleo de libretro: **DoubleCherryGB**
- ❓ núcleo de libretro: **Emux GB**
- ❓ núcleo de libretro: **fixGB**
- ❓ núcleo de libretro: **SameBoy**
- ❓ núcleo de libretro: **TGB Dual**

#### Game Boy Color

- ✅ Emulador independiente: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Emulador independiente: **[Pizza Boy GBC](https://play.google.com/store/apps/details?id=it.dbtecno.pizzaboy)**
  - Solo dispositivos Android
  - No soporta RAIntegration en este momento, por lo que los desarrolladores de logros no pueden solucionar problemas potenciales.
- ✅ núcleo de libretro: **Gambatte**
  - Más recomendado
- ✅ núcleo de libretro: **Gearboy**
- ✅ núcleo de libretro: **mGBA**
- ✅ núcleo de libretro: **VBA-M**
- ✅ núcleo de BizHawk: **Gambatte** (fork de Pokémon speedrunning)
- ✅ núcleo de BizHawk: **GBHawk**
- ❓ núcleo de libretro: **DoubleCherryGB**
- ❓ núcleo de libretro: **Emux GB**
- ❓ núcleo de libretro: **fixGB**
- ❓ núcleo de libretro: **SameBoy**
- ❓ núcleo de libretro: **TGB Dual**

#### Game Boy Advance

- ✅ Emulador independiente: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Emulador independiente: **[Pizza Boy GBA](https://play.google.com/store/apps/details?id=it.dbtecno.pizzaboygba)**
  - Solo dispositivos Android
  - No soporta RAIntegration en este momento, por lo que los desarrolladores de logros no pueden solucionar problemas potenciales.
- ✅ núcleo de libretro: **VBA-M**
- ✅ núcleo de libretro: **Beetle GBA**
- ✅ núcleo de libretro: **VBA Next**
- ✅ núcleo de libretro: **mGBA**
  - Más recomendado
- ✅ núcleo de BizHawk: **mGBA**
- ❓ núcleo de libretro: **gpSP**
- ❓ núcleo de libretro: **Meteor**
- ❓ núcleo de libretro: **TempGBA**

#### GameCube

- ⌛ Emulador independiente: **Dolphin**
  - En pruebas
- ⌛ núcleo de libretro: **Dolphin**
  - En pruebas

#### Game Gear

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ núcleo de libretro: **Genesis Plus GX**
- ✅ núcleo de libretro: **GearSystem**

#### Genesis / Mega Drive

- ✅ núcleo de libretro: **Genesis Plus GX**
  - Más recomendado
- ✅ núcleo de libretro: **Picodrive**
- ❌ núcleo de libretro: **Blastem**
  - Aunque algunos logros pueden funcionar, el núcleo tiene problemas con la parte de la memoria Game RAM.
- ✅ núcleo de BizHawk: **Genplus-gx** (Genesis Plus GX)

#### Intellivision

- ✅ núcleo de libretro: **FreeIntV**
  - Se bloquea cuando se reinicia el juego
  - Algunos bloqueos que podrían estar relacionados con Intellivoice
- ✅ núcleo de BizHawk: **IntelliHawk**

#### Interton VC 4000

- ✅ Emulador independiente: **[WinArcadia](https://amigan.1emu.net/releases/)**

#### J2ME

- ❌ _No soportado_ - necesita una ID de consola, un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **freej2me**

#### Magnavox Odyssey 2

- ✅ núcleo de libretro: **O2EM**
- ❓ núcleo de BizHawk: **O2Hawk**

#### Master System | Mark III

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ núcleo de libretro: **Gearsystem**
- ✅ núcleo de libretro: **Genesis Plus GX**
- ✅ núcleo de libretro: **Picodrive**
- ❓ núcleo de BizHawk: **SMSHawk**
- ❓ núcleo de libretro: **Emux SMS**

#### Mega Duck

- ✅ núcleo de libretro: **SameDuck**

#### MicroW8

- ❌ _No soportado_
- ❌ núcleo de libretro: **MicroW8**

#### MS-DOS

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **dosbox-core**
- ❌ núcleo de libretro: **dosbox-SVN**
- ❌ núcleo de libretro: **dosbox-pure**
  - Necesita una forma de evitar el lanzamiento con parámetros de línea de comando especificados por el usuario
  - Necesita una forma de evitar TSRs
  - Necesita una forma de desactivar los logros si el juego cae al símbolo del sistema

#### MSX

- ✅ núcleo de libretro: **blueMSX**
  - El hash depende de que el archivo .DSK no sea modificado
  - Los archivos .DSK parecen no ser soportados si también requieren un cartucho. Hay una opción de núcleo para esto, pero no parece funcionar correctamente. Ver "SD Snatcher", que usó un cartucho de 'sonido'.
- ❓ núcleo de libretro: **fMSX**

#### Neo Geo CD

- ✅ núcleo de libretro: **NeoCD**

#### Neo Geo Pocket

- ✅ núcleo de libretro: **Beetle NeoPop**
- ❓ núcleo de libretro: **RACE**
- ✅ núcleo de BizHawk: **NeoPop** (Mednafen)

#### Neo Geo Pocket Color

- ✅ núcleo de libretro: **Beetle NeoPop**
- ❓ núcleo de libretro: **RACE**
- ✅ núcleo de BizHawk: **NeoPop** (Mednafen)

#### NES / Famicom

- ✅ Emulador independiente: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ núcleo de libretro: **FCEUmm**
  - Más recomendado
- ✅ núcleo de libretro: **Mesen**
- ✅ núcleo de libretro: **QuickNES**
- ❌ núcleo de libretro: **NEStopia**
  - No mapea SRAM
  - POR FAVOR DEJA DE USAR ESTO PARA LOGROS
- ❓ núcleo de libretro: **Emux NES**
- ❓ núcleo de libretro: **fixNES**

#### Nintendo 3DS

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **Citra**
  - Solo expone 64MB de memoria; la documentación sugiere que deberían ser 128MB.
  - No soporta save states
- ❌ núcleo de libretro: **Citra 2018**
- ❌ núcleo de libretro: **Citra Canary**

#### Nintendo 64

- ✅ Emulador independiente: **[RAProject64](https://retroachievements.org/download.php#rap64)**
- ✅ núcleo de libretro: **ParaLLEl N64**
- ✅ núcleo de libretro: **Mupen64Plus-Next**
  - Más recomendado
- ⌛ núcleo de BizHawk: **Mupen64Plus**
  - En pruebas (hay algunos problemas gráficos que pueden ser corregidos usando el plugin de angrylion)

#### Nintendo DS

- Soporte limitado para micrófono
- ✅ núcleo de libretro: **DeSmuME**
- ✅ núcleo de libretro: **DeSmuME 2015**
- ✅ núcleo de libretro: **melonDS**
- ✅ núcleo de libretro: **melonDS DS**
- ✅ núcleo de BizHawk: **melonDS**

#### Nintendo DSi

- ✅ núcleo de libretro: **melonDS DS**
  - No soporta save states en este momento
- ✅ núcleo de BizHawk: **melonDS**
- ❌ núcleo de libretro: **DeSmuME**
- ❌ núcleo de libretro: **melonDS**

#### Nokia N-Gage

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

#### Oric

- ❌ _No soportado_

#### Palm OS

- ❌ _No soportado_
- ❌ núcleo de libretro: **Mu**

#### PC Engine | TurboGrafx-16 | SuperGrafx

- ✅ núcleo de libretro: **Beetle PCE Fast**
  - Los juegos de SuperGrafx no funcionan en el núcleo de Beetle PCE Fast
- ✅ núcleo de libretro: **Beetle SuperGrafx**
  - Más recomendado
- ✅ núcleo de BizHawk: **PCEHawk**

#### PC Engine CD | TurboGrafx-CD

- ✅ núcleo de libretro: **Beetle PCE Fast**
- ✅ núcleo de libretro: **Beetle SuperGrafx**
  - Más recomendado
- ✅ núcleo de BizHawk: **PCEHawk**
- ❌ núcleo de libretro: **Beetle PCE**
  - No expone la RAM necesaria para PC Engine CD

#### PC-6001

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

#### PC-8800

- ✅ Emulador independiente: **[RAQuasi88](https://retroachievements.org/download.php#raquasi88)**
  - Más recomendado
- ❌ núcleo de libretro: **quasi88**
  - NO RECOMENDADO
  - PC-88VA no soportado
  - 16 Abr 2022 - No se puede cargar m3u. El hash falla porque el núcleo bloquea el archivo de disco.
  - 16 Abr 2022 - Intentar cargar un juego de un solo disco en RALibretro solo muestra el mensaje "¿Cuántos discos?". Parece funcionar en RetroArch
  - 16 Abr 2022 - RALibretro no proporciona una interfaz de subsistema para cargar juegos de múltiples discos

#### PC-9800

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **Neko Project II Kai**
  - Memoria no expuesta.
    - Parece estar expuesta en algunos juegos dependiendo del tamaño de RAM seleccionado, pero parece ser la RAM de la máquina y no relacionada con el juego.
- ❌ núcleo de libretro: **Neko Project II**

#### PC-FX

- ✅ núcleo de libretro: **Beetle PC-FX**
- ✅ núcleo de BizHawk: **T.S.T.** (Mednafen)

#### Philips CD-I

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **CDi 2015**
- ❌ núcleo de libretro: **SAME CDi**

#### Philips P2000

- ❌ _No soportado_
- ❌ núcleo de libretro: **M2000**

#### Pico-8

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **FAKE-08**
- ❌ núcleo de libretro: **Retro8**

#### PlayStation

- ✅ Emulador independiente: **[DuckStation](https://www.duckstation.org/wiki/Main_Page)**
  - Puede haber pérdida de memoria y/o quemado al usar save states. ¡Jugadores de softcore, cuidado!
- ✅ núcleo de libretro: **Beetle PSX HW**
  - Más recomendado
- ✅ núcleo de libretro: **Beetle PSX**
- ✅ núcleo de libretro: **SwanStation**
- ❌ núcleo de libretro: **PCSX ReARMed**
  - Los BIOS no son requeridos para este núcleo y pondrán a cero el Kernal RAM.
  - Técnicamente soportado; no recomendado.
- ❓ núcleo de BizHawk: **Octoshock** (Mednafen)
- ❓ núcleo de BizHawk: **Nymashock** (Mednafen)
- ❓ núcleo de libretro: **Rustation**

#### PlayStation 2

- ✅ Emulador independiente: **[PCSX2](https://pcsx2.net/)**
  - PCSX2 es actualmente la **única opción oficialmente soportada** para ganar logros.
- ❌ Emulador independiente: **AetherSX2**
  - Ya no se desarrolla, tiene incompatibilidades conocidas
- ❌ Emulador independiente: **NetherSX2**
- ❌ núcleo de libretro: **LRPS2**
  - Aún en estado alfa
  - No expone memoria
- ❌ núcleo de libretro: **Play!**
  - Baja compatibilidad con la mayoría de los juegos comerciales
  - Pantalla negra con sonido entrecortado

#### PlayStation Portable

- ✅ Emulador independiente: **[PPSSPP](https://www.ppsspp.org/download/)**
  - No soporta RAIntegration en este momento, por lo que los desarrolladores de logros no pueden solucionar problemas potenciales.
- ✅ núcleo de libretro: **PPSSPP**
  - Cargar save states demasiado rápido puede hacer que se bloquee
  - Algunos juegos tienen problemas gráficos

#### PocketStation

- ❌ _No soportado_ - necesita una ID de consola, un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **pockystation**
  - El núcleo no parece funcional, incluso en RetroArch

#### Pokemon Mini

- ✅ núcleo de libretro: **PokeMini**

#### SAM Coupé

- ❌ _No soportado_
- ❌ núcleo de libretro: **SimCoupe**
  - Aún en estado alfa

#### Sega 32X

- ✅ núcleo de libretro: **PicoDrive**
  - Varios juegos son problemáticos, usa BizHawk si un logro aparece como no soportado
  - Parece que aún tiene RAM no mapeada
- ✅ núcleo de BizHawk: **PicoDrive**
  - Más recomendado

#### Sega CD

- Parece que aún tiene RAM no mapeada
- ✅ núcleo de libretro: **Genesis Plus GX**
- ✅ núcleo de libretro: **Picodrive**

#### Sega Dreamcast

- ✅ núcleo de libretro: **flycast**
  - Se debe desactivar el renderizado en hilos para usar save states
- ❓ núcleo de libretro: **Flycast GLES2**

#### Sega Pico

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **picodrive**
  - Necesita controles relacionados con el cambio de páginas en los libros adjuntos

#### Sega Saturn

- ✅ núcleo de libretro: **Beetle Saturn**
  - El único núcleo _recomendado_
- ❌ núcleo de libretro: **Yabause**
  - Técnicamente soportado; no recomendado.
- ❌ núcleo de libretro: **Kronos**
  - Guardar y cargar estados a menudo bloquea la interfaz de usuario en RALibretro
  - Técnicamente soportado; no recomendado.
- ❓ núcleo de libretro: **YabaSanshiro**
- ⌛ núcleo de BizHawk: **Saturnus** (Mednafen)
  - En pruebas

#### SG-1000

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ núcleo de libretro: **Genesis Plus GX**
  - Más recomendado
- ✅ núcleo de libretro: **blueMSX**
- ❌ núcleo de libretro: **Gearsystem**
  - Tiene una memoria significativa no expuesta

#### Sharp X1

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **X1 Millennium**
  - 16 Abr 2022 - Las escrituras en disco modifican los medios de origen, lo que rompe el hashing

#### Sharp X68K

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **px68k**
  - Se bloquea RALibretro al cargar un juego

#### SNES | Super Famicom | Satellaview | Sufami Turbo

- ✅ Emulador independiente: **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)**
- ✅ núcleo de libretro: **Snes9x (Actual)**
  - Más recomendado
- ✅ núcleo de libretro: **Mesen-S**
- ❓ núcleo de libretro: **Beetle bsnes**
- ❓ núcleo de libretro: **Beetle Supafaust**
- ❓ núcleo de libretro: **bsnes**
- ❓ núcleo de libretro: **bsnes 2014 Accuracy**
- ❓ núcleo de libretro: **bsnes 2014 Balanced**
- ❓ núcleo de libretro: **bsnes 2014 Performance**
- ❓ núcleo de libretro: **bsnes C++98 (v085)**
- ❓ núcleo de libretro: **bsnes-hd beta**
- ❓ núcleo de libretro: **bsnes-mercury Accuracy**
- ❓ núcleo de libretro: **bsnes-mercury Balanced**
- ❓ núcleo de libretro: **bsnes-mercury Performance**
- ❓ núcleo de libretro: **higan Accuracy**
- ❓ núcleo de libretro: **nSide Balanced**
- ❓ núcleo de libretro: **Snes9x 2002**
- ❓ núcleo de libretro: **Snes9x 2005**
- ❓ núcleo de libretro: **Snes9x 2005+**
- ❌ núcleo de libretro: **Snes9x 2010**
  - ¡¡¡POR FAVOR DEJA DE USAR ESTO PARA LOGROS!!!!
- ❓ núcleo de BizHawk: **BSNES**
- ❓ núcleo de BizHawk: **BSNESv115+**

#### SpectraVideo SVI 318/328

- ❌ _No soportado_
- ❌ núcleo de libretro: **blueMSX**

#### Super Cassette Vision

- ❌ núcleo de libretro: **EmuSCV**
  - Incompleto según [documentación de libretro](https://docs.libretro.com/library/emuscv/).
  - No expone memoria. Parece [exportar un save state](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229) a través de la interfaz RETRO_MEMORY_SAVE_RAM, que intentamos ajustar en $E000 ya que eso está marcado como RAM de cartucho para el sistema.

#### Thomson TO8/TO8D

- ❌ _No soportado_ - necesita un método de hashing
- ❌ núcleo de libretro: **Theodore**
  - Parece funcionar
  - Incierto cómo el núcleo maneja la escritura en disco/cinta. Puede afectar el hashing.

#### TI-83

- ⌛ núcleo de libretro: **Numero**
  - En pruebas
- ⌛ núcleo de BizHawk: **TI83Hawk**
  - En pruebas

#### TIC-80

- ❌ _No soportado_ - necesita un método de hashing
- ❌ núcleo de libretro: **TIC-80**
  - No exporta memoria correctamente. Solo puede ver 8 bytes.

#### Uzebox

- ✅ núcleo de BizHawk: **Uzem**
- ✅ núcleo de libretro: **Uzebox**

#### Vectrex

- ✅ núcleo de libretro: **VecX**

#### VIC-20

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **VICE xvic**

#### Virtual Boy

- ✅ núcleo de libretro: **Beetle VB**
- ✅ núcleo de BizHawk: **Virtual Boyee** (Mednafen)

#### VMU

- ❌ _No soportado_ - necesita una ID de consola, un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **VeMUlator**

#### WASM-4

- ✅ núcleo de libretro: **wasm4**

#### Watara Supervision

- ✅ núcleo de libretro: **potator**

#### Wii

- ⌛ Emulador independiente: **Dolphin**
  - En pruebas
- ⌛ núcleo de libretro: **Dolphin**
  - En pruebas

#### Wii U

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

#### WonderSwan

- ✅ núcleo de libretro: **Beetle Cygne**
- ✅ núcleo de BizHawk: **Cygne** (Mednafen)

#### WonderSwan Color

- ✅ núcleo de libretro: **Beetle Cygne**
- ✅ núcleo de BizHawk: **Cygne** (Mednafen)

#### XBOX

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **DirectXbox**
  - Aún en estado alfa

#### Zeebo

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

#### ZX81

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **EightyOne**
  - Memoria no expuesta

#### ZX Spectrum

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ núcleo de libretro: **FUSE**
  - Requiere la capacidad de mapear el teclado al puerto 3
  - Incierto sobre el soporte para guardar. Parece que no se puede insertar un disco de guardado
- ⌛ núcleo de BizHawk: **ZXHawk**
  - El hashing necesita ser corregido
  - En pruebas

Más detalles sobre los núcleos de BizHawk se pueden encontrar [aquí](https://tasvideos.org/BizHawk).
