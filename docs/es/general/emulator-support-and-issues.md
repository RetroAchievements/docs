---
title: Soporte de emuladores
description: Guía completa de compatibilidad y soporte de emuladores para RetroAchievements, incluidos problemas específicos de cada consola y recomendaciones para distintos núcleos y emuladores.
---

# Soporte y problemas de los emuladores

## Soporte para consolas

### 3DO Interactive Multiplayer

- ✅ Núcleo de libretro: **Opera**
  - Algunos problemas dependiendo de la BIOS

### Amiga

- ❓ Núcleo de libretro: **FS-UAE**
- ❌ Núcleo de libretro: **P-UAE**
  - Necesita un mapa de memoria para ver la memoria expuesta
  - Bloquea los archivos de disco para que no se puedan abrir para hashing
  - ¿Soporte para disco duro?
- ❓ Núcleo de libretro: **PUAE 2021**
- ❓ Núcleo de libretro: **UAE4ARM**

### Amstrad CPC

- ✅ Núcleo de libretro: **Caprice32**
  - El núcleo actualmente no soporta escritura en disco, lo que puede afectar el hashing cuando se implemente
- ❌ Núcleo de libretro: **CrocoDS**

### Apple II

- ✅ Emulador independiente: **[RAppleWin](https://retroachievements.org/download.php#rapplewin)**
- ⌛ Núcleo de BizHawk: **Virtu**
  - Probando
  - 4 Jun 2023 - los archivos woz no son soportados
  - 4 Jun 2023 - joystick no soportado. El teclado debe ser mapeado manualmente.
  - 4 Jun 2023 - se deben crear y cargar manualmente el paquete de discos múltiples para poder jugar con varios discos. Los discos están etiquetados genéricamente solo por índice.

### Arcade

- ✅ Núcleo de libretro: **FinalBurn Neo**
  - Algunas placas pueden no estar completamente expuestas
- ✅ Núcleo de libretro: **Flycast**
  - Usado para Atomiswave, NAOMI, y NAOMI2
- ❌ Núcleo de libretro: **FB Alpha**
  - Deprecado
- ❌ Núcleo de libretro: **MAME**
- ❌ núcleo de BizHawk: **MAME**

### Arcadia 2001

- ✅ Emulador independiente: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Arduboy

- ✅ Núcleo de libretro: **Arduous**

### Atari 2600

- ✅ Núcleo de libretro: **Stella**
- ❓ Núcleo de libretro: **Stella 2014**
- ✅ Núcleo de BizHawk: **Atari2600Hawk**
  - Los logros que requieren reinicios del emulador no funcionan - si ves alguno, abre un ticket para que se pueda arreglar el logro.

### Atari 5200

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **atari800**
  - Parece funcionar bien, pero el núcleo es un poco complicado de usar.
    - La BIOS debe configurarse dentro del núcleo (F1 > Emulator Configuration > System ROM settings)
    - No se pudieron determinar los controles - ¿es necesario configurar el joystick dentro del núcleo también?
    - Permite cargar archivos arbitrarios desde el menú interno, lo que evita el hashing
- ❌ Núcleo de libretro: **a5200**
  - No expone la memoria

### Atari 7800

- ✅ Núcleo de libretro: **ProSystem**
- ✅ Núcleo de BizHawk: **A7800Hawk**

### Atari Jaguar

- ✅ Núcleo de libretro: **Virtual Jaguar**
  - Sin soporte para guardar estados
  - [Muchos problemas con la emulación](https://github.com/libretro/virtualjaguar-libretro/issues/38)
- ✅ Núcleo de BizHawk: **Virtual Jaguar**

### Atari Jaguar CD

- ✅ Núcleo de BizHawk: **Virtual Jaguar**

### Atari Lynx

- ✅ Núcleo de libretro: **Handy**
  - El más recomendado
- ✅ Núcleo de libretro: **Beetle Lynx**
- ✅ Núcleo de BizHawk: **Handy** (fork de Mednafen)

### Atari ST

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **Hatari**
  - No expone la memoria

### Cassette Vision

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

### CHIP-8

- ❌ _No soportado_ - necesita una ID de consola, un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **Emux CHIP-8**
- ❌ Núcleo de libretro: **JAXE**
  - 16 Abr 22 - Parece estar listo cuando nosotros lo estemos
  - Puede necesitar una lista negra de configuraciones para evitar la reducción de velocidad

### Commodore 128

- ❌ _No soportado_
- ❌ Núcleo de libretro: **VICE x128**

### Commodore 64

- ❌ núcleo de libretro: **vice_x64**
  - NOTA: El joystick está en el puerto 2 por defecto. Usa el botón JOY en el teclado virtual (select) para cambiarlo al puerto 1.
  - 1 May 2022 - El reinicio no ejecuta automáticamente el juego
- ⌛ Núcleo de BizHawk: **C64Hawk**
  - Probando
- ❓ Núcleo de libretro: **Frodo**

### ColecoVision

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ Núcleo de libretro: **blueMSX**
- ✅ Núcleo de BizHawk: **ColecoHawk**
- ❌ Núcleo de libretro: **Gearcoleco**

### Elektronika BK-0010/0011

- ❌ _No soportado_
- ❌ Núcleo de libretro: **M**

### Elektor TV Games Computer

- ✅ Emulador independiente: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Enterprise 64/128

- ❌ _No soportado_
- ❌ Núcleo de libretro: **ep128emu**

### Fairchild Channel-F

- ✅ Núcleo de libretro: **FreeChaF**
- ❓ Núcleo de BizHawk: **ChannelFHawk**

### Famicom Disk System

- ✅ Emulador independiente: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ Núcleo de libretro: **FCEUmm**
- ✅ Núcleo de libretro: **Mesen**

### FM Towns

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

### Game & Watch

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **gw**
  - No expone la memoria

### Game Boy

- ✅ Emulador independiente: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Núcleo de libretro: **Gambatte**
  - El más recomendado
- ✅ Núcleo de libretro: **Gearboy**
- ✅ Núcleo de libretro: **mGBA**
- ✅ Núcleo de libretro: **VBA-M**
- ❓ Núcleo de libretro: **DoubleCherryGB**
- ❓ Núcleo de libretro: **Emux GB**
- ❓ Núcleo de libretro: **fixGB**
- ❓ Núcleo de libretro: **SameBoy**
- ❓ Núcleo de libretro: **TGB Dual**

### Game Boy Color

- ✅ Emulador independiente: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Núcleo de libretro: **Gambatte**
  - El más recomendado
- ✅ Núcleo de libretro: **Gearboy**
- ✅ Núcleo de libretro: **mGBA**
- ✅ Núcleo de libretro: **VBA-M**
- ✅ Núcleo de BizHawk: **Gambatte** (fork de speedrunning de Pokémon)
- ✅ Núcleo de BizHawk: **GBHawk**
- ❌ Emulador independiente: **Pizza Boy GBC**
  - Ya no está en desarrollo. Los problemas de compatibilidad pueden causar problemas con los desbloqueos.
- ❓ Núcleo de libretro: **DoubleCherryGB**
- ❓ Núcleo de libretro: **Emux GB**
- ❓ Núcleo de libretro: **fixGB**
- ❓ Núcleo de libretro: **SameBoy**
- ❓ Núcleo de libretro: **TGB Dual**

### Game Boy Advance

- ✅ Emulador independiente: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Núcleo de libretro: **VBA-M**
- ✅ Núcleo de libretro: **Beetle GBA**
- ✅ Núcleo de libretro: **VBA Next**
- ✅ Núcleo de libretro: **mGBA**
  - El más recomendado
- ✅ Núcleo de BizHawk: **mGBA**
- ❌ Emulador independiente: **Pizza Boy GBA**
  - Ya no está en desarrollo. Los problemas de compatibilidad pueden causar problemas con los desbloqueos.
- ❓ Núcleo de libretro: **gpSP**
- ❓ Núcleo de libretro: **Meteor**
- ❓ Núcleo de libretro: **TempGBA**

### GameCube

- ✅ Emulador independiente: **[Dolphin](https://retroachievements.org/download.php#dolphin)**
  - DEBES usar la versión 2407-68 o mayor.
  - Por favor asegúrate de que la opción "Enable Dual Core (speedup)" esté desactivada ya que ese modo no está soportado.
- ❌ Núcleo de libretro: **Dolphin**

### Game Gear

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ Núcleo de libretro: **Genesis Plus GX**
- ✅ Núcleo de libretro: **GearSystem**

### Genesis / Mega Drive

- ✅ Núcleo de libretro: **Genesis Plus GX**
  - Más recomendado
- ✅ Núcleo de libretro: **PicoDrive**
- ❌ Núcleo de libretro: **BlastEm**
  - Aunque algunos logros pueden funcionar, el núcleo tiene problemas con la parte de la memoria RAM del juego.
- ✅ Núcleo de BizHawk: **Genplus-gx** (Genesis Plus GX)

### Intellivision

- ✅ Núcleo de libretro: **FreeIntV**
  - Crashea cuando se reinicia el juego
  - Algunos crasheos que podrían estar relacionados con Intellivoice
- ✅ Núcleo de BizHawk: **IntelliHawk**

### Interton VC 4000

- ✅ Emulador independiente: **[WinArcadia](https://amigan.1emu.net/releases/)**

### J2ME

- ❌ _No soportado_ - necesita una ID de consola, un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **freej2me**

### Magnavox Odyssey 2

- ✅ Núcleo de libretro: **O2EM**
- ❓ Núcleo de BizHawk: **O2Hawk**

### Master System | Mark III

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ Núcleo de libretro: **Gearsystem**
- ✅ Núcleo de libretro: **Genesis Plus GX**
- ✅ Núcleo de libretro: **PicoDrive**
- ❓ Núcleo de BizHawk: **SMSHawk**
- ❓ Núcleo de libretro: **Emux SMS**

### Mega Duck

- ✅ Núcleo de libretro: **SameDuck**

### MicroW8

- ❌ _No soportado_
- ❌ Núcleo de libretro: **MicroW8**

### MS-DOS

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **dosbox-core**
- ❌ Núcleo de libretro: **dosbox-SVN**
- ❌ Núcleo de libretro: **dosbox-pure**
  - Necesita una forma de evitar el lanzamiento con parámetros de línea de comando especificados por el usuario
  - Necesita una forma de evitar los TSRs
  - Necesita una forma de desactivar los logros si el juego cae al símbolo del sistema

### MSX

- ✅ Núcleo de libretro: **blueMSX**
  - El hash depende de que el archivo .DSK no sea modificado
  - Los archivos .DSK parecen no ser soportados si también requieren un cartucho. Hay una opción de núcleo para esto, pero no parece funcionar correctamente. Ver "SD Snatcher", que usó un cartucho de 'sonido'.
- ❓ Núcleo de libretro: **fMSX**

### Neo Geo CD

- ✅ Núcleo de libretro: **NeoCD**

### Neo Geo Pocket

- ✅ Núcleo de libretro: **Beetle NeoPop**
- ❓ Núcleo de libretro: **RACE**
- ✅ Núcleo de BizHawk: **NeoPop** (Mednafen)

### Neo Geo Pocket Color

- ✅ Núcleo de libretro: **Beetle NeoPop**
- ❓ Núcleo de libretro: **RACE**
- ✅ Núcleo de BizHawk: **NeoPop** (Mednafen)

### NES / Famicom

- ✅ Emulador independiente: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ Núcleo de libretro: **FCEUmm**
  - El más recomendado
- ✅ Núcleo de libretro: **Mesen**
- ✅ Núcleo de libretro: **QuickNES**
- ❌ Núcleo de libretro: **NEStopia**
  - No mapea la SRAM
  - ¡¡¡POR FAVOR DEJA DE USAR ESTO PARA LOGROS!!!
- ❓ Núcleo de libretro: **Emux NES**
- ❓ Núcleo de libretro: **fixNES**

### Nintendo 3DS

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **Citra**
  - Solo expone 64MB de memoria - la documentación sugiere que deberían ser 128MB.
  - No soporta guardar estados
- ❌ Núcleo de libretro: **Citra 2018**
- ❌ Núcleo de libretro: **Citra Canary**

### Nintendo 64

- ✅ Emulador independiente: **[RAProject64](https://retroachievements.org/download.php#rap64)**
- ✅ Núcleo de libretro: **ParaLLEl N64**
- ✅ Núcleo de libretro: **Mupen64Plus-Next**
  - El más recomendado
- ⌛ Núcleo de BizHawk: **Mupen64Plus**
  - Probando (hay algunos problemas gráficos que pueden ser corregidos usando el plugin de angrylion)

### Nintendo DS

- Soporte limitado para micrófono
- ✅ Núcleo de libretro: **DeSmuME**
- ✅ Núcleo de libretro: **DeSmuME 2015**
- ✅ Núcleo de libretro: **melonDS**
- ✅ Núcleo de BizHawk: **melonDS**

### Nintendo DSi

- ✅ Núcleo de libretro: **melonDS DS**
  - No soporta guardar estados en este momento
- ✅ Núcleo de BizHawk: **melonDS**
- ❌ Núcleo de libretro: **DeSmuME**
  - Probablemente nunca vaya a soportar la emulación de DSi

### Nokia N-Gage

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

### Oric

- ❌ _No soportado_

### Palm OS

- ❌ _No soportado_
- ❌ Núcleo de libretro: **Mu**

### PC Engine | TurboGrafx-16 | SuperGrafx

- ✅ Núcleo de libretro: **Beetle PCE Fast**
  - Los juegos de SuperGrafx no funcionan en el núcleo rápido de Beetle PCE
- ✅ Núcleo de libretro: **Beetle SuperGrafx**
  - El más recomendado
- ✅ Núcleo de BizHawk: **PCEHawk**

### PC Engine CD | TurboGrafx-CD

- ✅ Núcleo de libretro: **Beetle PCE Fast**
- ✅ Núcleo de libretro: **Beetle SuperGrafx**
  - El más recomendado
- ✅ Núcleo de BizHawk: **PCEHawk**
- ❌ Núcleo de libretro: **Beetle PCE**
  - No expone la RAM necesaria para PC Engine CD

### PC-6001

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

### PC-8800

- ✅ Emulador independiente: **[RAQuasi88](https://retroachievements.org/download.php#raquasi88)**
  - El más recomendado
- ❌ Núcleo de libretro: **quasi88**
  - NO RECOMENDADO
  - PC-88VA no soportado
  - 16 Abr 2022 - No se puede cargar m3u. El hash falla porque el núcleo bloquea el archivo de disco.
  - 16 Abr 2022 - Al intentar cargar un juego de un solo disco en RALibretro solo muestra el mensaje "¿Cuántos discos?". Parece funcionar en RetroArch
  - 16 Abr 2022 - RALibretro no proporciona una interfaz de subsistema para cargar juegos de múltiples discos

### PC-9800

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **Neko Project II Kai**
  - No expone la memoria.
    - Parece estar expuesta en algunos juegos dependiendo del tamaño de RAM seleccionado, pero parece ser la RAM de la máquina y no relacionada con el juego.
- ❌ Núcleo de libretro: **Neko Project II**

### PC-FX

- ✅ Núcleo de libretro: **Beetle PC-FX**
- ✅ Núcleo de BizHawk: **T.S.T.** (Mednafen)

### Philips CD-I

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **CDi 2015**
- ❌ Núcleo de libretro: **SAME CDi**

### Philips P2000

- ❌ _No soportado_
- ❌ Núcleo de libretro: **M2000**

### Pico-8

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **FAKE-08**
- ❌ Núcleo de libretro: **Retro8**

### PlayStation

- ✅ Emulador independiente: **[DuckStation](https://www.duckstation.org/wiki/Main_Page)**
  - Puede haber pérdida de memoria y/o quemado al usar estados guardados. ¡Cuidado, jugadores de softcore!
- ✅ Núcleo de libretro: **Beetle PSX HW**
  - El más recomendado
- ✅ Núcleo de libretro: **Beetle PSX**
- ✅ Núcleo de libretro: **SwanStation**
- ❌ Núcleo de libretro: **PCSX ReARMed**
  - Las BIOS no son necesarias para este núcleo y pondrán a cero el Kernel RAM.
  - Técnicamente soportado; no recomendado.
- ❓ Núcleo de BizHawk: **Octoshock** (Mednafen)
- ❓ Núcleo de BizHawk: **Nymashock** (Mednafen)
- ❓ Núcleo de libretro: **Rustation**

### PlayStation 2

- ✅ Emulador independiente: **[PCSX2](https://pcsx2.net/)**
  - PCSX2 es actualmente la **única opción oficialmente soportada** para ganar logros.
- ❌ Emulador independiente: **AetherSX2**
  - Ya no está en desarrollo, tiene incompatibilidades conocidas
- ❌ Emulador independiente: **NetherSX2**
  - Fork de AetherSX2, se conoce que tiene muchos problemas con los logros y el modo hardcore
- ❌ Núcleo de libretro: **LRPS2**
  - Aún en estado alpha
  - No expone la memoria
- ❌ Núcleo de libretro: **Play!**
  - Baja compatibilidad con la mayoría de los juegos comerciales
  - Pantalla negra con sonido entrecortado

### PlayStation Portable

- ✅ Emulador independiente: **[PPSSPP](https://www.ppsspp.org/download/)**
  - No soporta RAIntegration en este momento, por lo que los desarrolladores de logros no pueden solucionar problemas potenciales.
- ✅ Núcleo de libretro: **PPSSPP**
  - Cargar estados guardados demasiado rápido puede hacer que se bloquee
  - Algunos juegos tienen problemas gráficos

### PocketStation

- ❌ _No soportado_ - necesita una ID de consola, un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **pockystation**
  - El núcleo no parece funcional, incluso en RetroArch

### Pokemon Mini

- ✅ Núcleo de libretro: **PokeMini**

### SAM Coupé

- ❌ _No soportado_
- ❌ Núcleo de libretro: **SimCoupe**
  - Aún en estado alpha

### Sega 32X

- ✅ Núcleo de libretro: **PicoDrive**
  - Varios juegos son problemáticos, usa BizHawk si un logro aparece como no soportado
  - Parece que aún tiene RAM sin mapear
- ✅ Núcleo de BizHawk: **PicoDrive**
  - El más recomendado

### Sega CD

- Parece que aún tiene RAM sin mapear
- ✅ Núcleo de libretro: **Genesis Plus GX**
- ✅ Núcleo de libretro: **PicoDrive**

### Sega Dreamcast

- ✅ Núcleo de libretro: **Flycast**
  - Se debe desactivar el renderizado en hilos para usar estados guardados
- ❓ Núcleo de libretro: **Flycast GLES2**

### Sega Pico

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **PicoDrive**
  - Necesita controles relacionados con el cambio de páginas en los libros adjuntos

### Sega Saturn

- ✅ Núcleo de libretro: **Beetle Saturn**
  - El único núcleo **recomendado**
- ❌ Núcleo de libretro: **Yabause**
  - Técnicamente soportado; no recomendado.
- ❌ Núcleo de libretro: **Kronos**
  - Guardar y cargar estados a menudo bloquea la interfaz de usuario en RALibretro
  - Técnicamente soportado; no recomendado.
- ❓ Núcleo de libretro: **YabaSanshiro**
- ⌛ Núcleo de BizHawk: **Saturnus** (Mednafen)
  - Probando

### SG-1000

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ Núcleo de libretro: **Genesis Plus GX**
  - Más recomendado
- ✅ Núcleo de libretro: **blueMSX**
- ❌ Núcleo de libretro: **Gearsystem**
  - Tiene una memoria significativa no expuesta

### Sharp X1

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **X1 Millennium**
  - 16 Abr 2022 - Las escrituras al disco modifican los medios de origen, lo que rompe el hashing

### Sharp X68K

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **px68k**
  - Crashea a RALibretro al cargar un juego

### SNES | Super Famicom | Satellaview | Sufami Turbo

- ✅ Emulador independiente: **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)**
- ✅ Núcleo de libretro: **Snes9x (Actual)**
  - El más recomendado
- ✅ Núcleo de libretro: **Mesen-S**
- ❓ Núcleo de libretro: **Beetle bsnes**
- ❌ Núcleo de libretro: **Beetle Supafaust**
  - 11 Jun 2024: no expone la memoria
- ❓ Núcleo de libretro: **bsnes**
- ❓ Núcleo de libretro: **bsnes 2014 Accuracy**
- ❓ Núcleo de libretro: **bsnes 2014 Balanced**
- ❓ Núcleo de libretro: **bsnes 2014 Performance**
- ❓ Núcleo de libretro: **bsnes C++98 (v085)**
- ❓ Núcleo de libretro: **bsnes-hd beta**
- ❓ Núcleo de libretro: **bsnes-mercury Accuracy**
- ❓ Núcleo de libretro: **bsnes-mercury Balanced**
- ❓ Núcleo de libretro: **bsnes-mercury Performance**
- ❓ Núcleo de libretro: **higan Accuracy**
- ❓ Núcleo de libretro: **nSide Balanced**
- ❓ Núcleo de libretro: **Snes9x 2002**
- ❓ Núcleo de libretro: **Snes9x 2005**
- ❓ Núcleo de libretro: **Snes9x 2005+**
- ❌ Núcleo de libretro: **Snes9x 2010**
  - ¡¡¡POR FAVOR DEJA DE USAR ESTO PARA LOGROS!!!
- ❓ Núcleo de BizHawk: **BSNES**
- ❓ Núcleo de BizHawk: **BSNESv115+**

### SpectraVideo SVI 318/328

- ❌ _No soportado_
- ❌ Núcleo de libretro: **blueMSX**

### Super Cassette Vision

- ❌ Núcleo de libretro: **EmuSCV**
  - Sin terminar según la [documentación de libretro](https://docs.libretro.com/library/emuscv/).
  - No expone memoria. Parece [exportar un estado guardado](https://gitlab.com/MaaaX-EmuSCV/libretro-emuscv/-/blob/master/src/libretro.cpp#L223-229) a través de la interfaz RETRO_MEMORY_SAVE_RAM, que intentamos ajustar en $E000 ya que eso está marcado como RAM de cartucho para el sistema.

### Thomson TO8/TO8D

- ❌ _No soportado_ - necesita un método de hashing
- ❌ Núcleo de libretro: **Theodore**
  - Parece funcionar
  - Incierto cómo el núcleo maneja la escritura en disco/cinta. Puede afectar el hashing.

### TI-83

- ⌛ Núcleo de libretro: **Numero**
  - Probando
- ⌛ Núcleo de BizHawk: **TI83Hawk**
  - Probando

### TIC-80

- ❌ _No soportado_ - necesita un método de hashing
- ❌ Núcleo de libretro: **TIC-80**
  - No exporta la memoria correctamente. Solo puede ver 8 bytes.

### Uzebox

- ✅ Núcleo de BizHawk: **Uzem**
- ✅ Núcleo de libretro: **Uzebox**

### Vectrex

- ✅ Núcleo de libretro: **VecX**

### VIC-20

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **VICE xvic**

### Virtual Boy

- ✅ Núcleo de libretro: **Beetle VB**
- ✅ Núcleo de BizHawk: **Virtual Boyee** (Mednafen)

### VMU

- ❌ _No soportado_ - necesita una ID de consola, un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **VeMUlator**
  - No soporta guardar estados

### WASM-4

- ✅ Núcleo de libretro: **WASM-4**

### Watara Supervision

- ✅ Núcleo de libretro: **Potator**

### Wii

- ⌛ Emulador independiente: **Dolphin**
  - Probando
- ❌ Núcleo de libretro: **Dolphin**

### Wii U

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Emulador independiente: **Cemu**

### WonderSwan

- ✅ Núcleo de libretro: **Beetle Cygne**
- ✅ Núcleo de BizHawk: **Cygne** (Mednafen)

### WonderSwan Color

- ✅ Núcleo de libretro: **Beetle Cygne**
- ✅ Núcleo de BizHawk: **Cygne** (Mednafen)

### Xbox

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Emulador independiente: **xemu**
- ❌ Núcleo de libretro: **DirectXbox**
  - Aún en estado alpha

### Xbox 360
- ❌ _No soportado_ - necesita una ID de consola, un método de hashing y un mapa de memoria
- ❌ Emulador independiente: **Xenia**

### Zeebo

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria

### ZX81

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **EightyOne**
  - No expone la memoria

### ZX Spectrum

- ❌ _No soportado_ - necesita un método de hashing y un mapa de memoria
- ❌ Núcleo de libretro: **FUSE**
  - Requiere la capacidad de mapear el teclado al puerto 3
  - Incierto sobre el soporte para guardar. Parece que no se puede insertar un disco de guardado
- ⌛ Núcleo de BizHawk: **ZXHawk**
  - El hashing necesita ser corregido
  - Probando

Más detalles sobre los núcleos de BizHawk se pueden encontrar [aquí](https://tasvideos.org/BizHawk).
