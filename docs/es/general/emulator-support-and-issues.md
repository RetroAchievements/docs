---
title: Soporte de emuladores
description: Guía completa de compatibilidad y soporte de emuladores para RetroAchievements, incluidos problemas específicos de cada consola y recomendaciones para distintos núcleos y emuladores.
---

# Soporte y problemas de los emuladores

### 32X

- ✅ Núcleo de libretro: **PicoDrive**
  - Varios juegos son problemáticos, usa BizHawk si un logro aparece como no soportado.
  - Parece que aún tiene RAM sin mapear.
- ✅ Núcleo de BizHawk: **PicoDrive**
  - El más recomendado.

### 3DO Interactive Multiplayer

- ✅ Núcleo de libretro: **Opera**
  - Puede tener algunos problemas dependiendo de la BIOS.

### Amiga

- ❌ _No soportado_.

### Amstrad CPC

- ✅ Núcleo de libretro: **Caprice32**
  - El núcleo actualmente no soporta la escritura en disco, lo que puede afectar el hashing cuando se implemente.

### Apple II

- ✅ Emulador independiente: **[RAppleWin](https://retroachievements.org/download.php#rapplewin)**

### Arcade

- ✅ Núcleo de libretro: **FinalBurn Neo**
  - Algunas placas pueden no estar completamente expuestas.
- ✅ Núcleo de libretro: **Flycast**
  - Usado para Atomiswave y NAOMI 1/2.

### Arcadia 2001

- ✅ Emulador independiente: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Arduboy

- ✅ Núcleo de libretro: **Ardens**
- ✅ Núcleo de libretro: **Arduous**
  - No puede emular el Arduboy FX.

### Atari 2600

- ✅ Núcleo de libretro: **Stella**
- ✅ Núcleo de BizHawk: **Atari2600Hawk**
  - Los logros que requieren reinicios del emulador no funcionan. Si ves alguno, abre un ticket para que se pueda arreglar el logro.

### Atari 5200

- ❌ _No soportado_.

### Atari 7800

- ✅ Núcleo de libretro: **ProSystem**
- ✅ Núcleo de BizHawk: **A7800Hawk**

### Atari Jaguar

- ✅ Núcleo de libretro: **Virtual Jaguar**
  - Sin soporte para estados guardados.
  - [Muchos problemas con la emulación](https://github.com/libretro/virtualjaguar-libretro/issues/38).
  - No emula Jaguar CD.
- ✅ Núcleo de BizHawk: **Virtual Jaguar**

### Atari Jaguar CD

- ✅ Núcleo de BizHawk: **Virtual Jaguar**

### Atari Lynx

- ✅ Núcleo de libretro: **Handy**
  - El más recomendado.
- ✅ Núcleo de libretro: **Beetle Lynx**
- ✅ Núcleo de BizHawk: **Handy** (fork de Mednafen)

### Atari ST

- ❌ _No soportado_.

### Cassette Vision

- ❌ _No soportado_.

### CHIP-8

- ❌ _No soportado_.

### Commodore 128

- ❌ _No soportado_.

### Commodore 64

- ❌ _No soportado_.

### ColecoVision

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ Núcleo de libretro: **blueMSX**
- ✅ Núcleo de BizHawk: **ColecoHawk**

### Dreamcast

- ✅ Núcleo de libretro: **Flycast**
  - Desactiva el renderizado en hilos para usar estados guardados correctamente.

### Elektronika BK-0010/11

- ❌ _No soportado_.

### Elektor TV Games Computer

- ✅ Emulador independiente: **[WinArcadia](https://amigan.1emu.net/releases/)**

### Enterprise 64/128

- ❌ _No soportado_.

### Fairchild Channel F

- ✅ Núcleo de libretro: **FreeChaF**.

### Famicom Disk System

- ✅ Emulador independiente: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ Núcleo de libretro: **FCEUmm**
- ✅ Núcleo de libretro: **Mesen**

### FM Towns

- ❌ _No soportado_.

### Game & Watch

- ❌ _No soportado_.

### Game Boy

- ✅ Emulador independiente: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Núcleo de libretro: **Gambatte**
  - El más recomendado.
- ✅ Núcleo de libretro: **Gearboy**
- ✅ Núcleo de libretro: **mGBA**
- ✅ Núcleo de libretro: **VBA-M**
- ✅ Núcleo de BizHawk: **Gambatte** (fork de speedrunning de Pokémon)
- ✅ Núcleo de BizHawk: **GBHawk**

### Game Boy Color

- ✅ Emulador independiente: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Núcleo de libretro: **Gambatte**
  - El más recomendado.
- ✅ Núcleo de libretro: **Gearboy**
- ✅ Núcleo de libretro: **mGBA**
- ✅ Núcleo de libretro: **VBA-M**
- ✅ Núcleo de BizHawk: **Gambatte** (fork de speedrunning de Pokémon)
- ✅ Núcleo de BizHawk: **GBHawk**

### Game Boy Advance

- ✅ Emulador independiente: **[RAVBA](https://retroachievements.org/download.php#ravba)**
- ✅ Núcleo de libretro: **VBA-M**
- ✅ Núcleo de libretro: **Beetle GBA**
- ✅ Núcleo de libretro: **VBA Next**
- ✅ Núcleo de libretro: **mGBA**
  - El más recomendado.
- ✅ Núcleo de BizHawk: **mGBA**

### GameCube

- ✅ Emulador independiente: **[Dolphin](https://retroachievements.org/download.php#dolphin)**
  - Se debe usar la versión 2407-68 o mayor.
  - Verifique que "Activar renderizado de doble núcleo (aumento de velocidad)" esté desactivado ya que no está soportado.

### Game Gear

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ Núcleo de libretro: **Genesis Plus GX**
- ✅ Núcleo de libretro: **Gearsystem**

### Genesis/Mega Drive

- ✅ Núcleo de libretro: **Genesis Plus GX**
  - El más recomendado.
- ✅ Núcleo de libretro: **PicoDrive**
- ✅ Núcleo de BizHawk: **Genplus-gx** (Genesis Plus GX)

### Intellivision

- ✅ Núcleo de libretro: **FreeIntv**
  - Se bloquea cuando se reinicia el juego.
  - Algunos crasheos podrían estar relacionados con el Intellivoice no siendo emulado.
- ✅ Núcleo de BizHawk: **IntelliHawk**

### Interton VC 4000

- ✅ Emulador independiente: **[WinArcadia](https://amigan.1emu.net/releases/)**

### J2ME

- ❌ _No soportado_.

### Magnavox Odyssey 2

- ✅ Núcleo de libretro: **O2EM**

### Master System/Mark III

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ Núcleo de libretro: **Gearsystem**
- ✅ Núcleo de libretro: **Genesis Plus GX**
- ✅ Núcleo de libretro: **PicoDrive**

### Mega Duck

- ✅ Núcleo de libretro: **SameDuck**

### MicroW8

- ❌ _No soportado_.

### MS-DOS

- ❌ _No soportado_.

### MSX

- ✅ Núcleo de libretro: **blueMSX**

### Neo Geo CD

- ✅ Núcleo de libretro: **NeoCD**

### Neo Geo Pocket (Color)

- ✅ Núcleo de libretro: **Beetle NeoPop**
- ✅ Núcleo de BizHawk: **NeoPop** (Mednafen)

### NES/Famicom

- ✅ Emulador independiente: **[RANes](https://retroachievements.org/download.php#ranes)**
- ✅ Núcleo de libretro: **FCEUmm**
  - El más recomendado.
- ✅ Núcleo de libretro: **Mesen**
- ✅ Núcleo de libretro: **QuickNES**

### Nintendo 3DS

- ❌ _No soportado_.

### Nintendo 64

- ✅ Emulador independiente: **[RAProject64](https://retroachievements.org/download.php#rap64)**
- ✅ Núcleo de libretro: **ParaLLEl N64**
- ✅ Núcleo de libretro: **Mupen64Plus-Next**
  - Separado en núcleos para OpenGL ES 2 y 3.
  - El más recomendado.

### Nintendo DS

- Soporte limitado para micrófono.
- ✅ Núcleo de libretro: **DeSmuME**
  - No emula DSi.
- ✅ Núcleo de libretro: **DeSmuME 2015**
  - No emula DSi.
- ✅ Núcleo de libretro: **melonDS**
- ✅ Núcleo de BizHawk: **melonDS**

### Nintendo DSi

- ✅ Núcleo de libretro: **melonDS DS**
  - No soporta los estados guardados en este momento.
- ✅ Núcleo de BizHawk: **melonDS**

### Nokia N-Gage

- ❌ _No soportado_.

### Oric

- ❌ _No soportado_.

### Palm OS

- ❌ _No soportado_.

### PC Engine/TurboGrafx-16/SuperGrafx

- ✅ Núcleo de libretro: **Beetle PCE Fast**
  - Los juegos de SuperGrafx no funcionan en el núcleo rápido de Beetle PCE.
- ✅ Núcleo de libretro: **Beetle SuperGrafx**
  - El más recomendado.
- ✅ Núcleo de BizHawk: **PCEHawk**

### PC Engine CD/TurboGrafx-CD

- ✅ Núcleo de libretro: **Beetle PCE Fast**
- ✅ Núcleo de libretro: **Beetle SuperGrafx**
  - El más recomendado.
- ✅ Núcleo de BizHawk: **PCEHawk**

### PC-6001

- ❌ _No soportado_.

### PC-8000/8800

- ✅ Emulador independiente: **[RAQUASI88](https://retroachievements.org/download.php#raquasi88)**

### PC-9800

- ❌ _No soportado_.

### PC-FX

- ✅ Núcleo de libretro: **Beetle PC-FX**
- ✅ Núcleo de BizHawk: **T.S.T.** (Mednafen)

### Philips CD-i

- ❌ _No soportado_.

### Philips P2000T

- ❌ _No soportado_.

### Pico

- ❌ _No soportado_.

### Pico-8

- ❌ _No soportado_.

### PlayStation

- ✅ Emulador independiente: **[DuckStation](https://www.duckstation.org/wiki/Main_Page)**
  - Puede haber pérdida de memoria y/o quemado al usar estados guardados.
- ✅ Núcleo de libretro: **Beetle PSX HW**
  - El más recomendado.
- ✅ Núcleo de libretro: **Beetle PSX**
- ✅ Núcleo de libretro: **SwanStation**

### PlayStation 2

- ✅ Emulador independiente: **[PCSX2](https://pcsx2.net/)**

### PlayStation 3

- ❌ _No soportado_.

### PlayStation Portable

- ✅ Emulador independiente: **[PPSSPP](https://www.ppsspp.org/download/)**
  - No soporta RAIntegration en este momento, por lo que los desarrolladores de logros no pueden solucionar problemas potenciales.
- ✅ Núcleo de libretro: **PPSSPP**
  - Cargar estados guardados demasiado rápido puede hacer que se bloquee.
  - Algunos juegos tienen problemas gráficos.

### PocketStation

- ❌ _No soportado_.

### Pokémon Mini

- ✅ Núcleo de libretro: **PokeMini**

### SAM Coupé

- ❌ _No soportado_.

### Saturn

- ✅ Núcleo de libretro: **Beetle Saturn**

### Sega CD

- Parece que aún tiene RAM sin mapear.
- ✅ Núcleo de libretro: **Genesis Plus GX**
- ✅ Núcleo de libretro: **PicoDrive**

### SG-1000

- ✅ Emulador independiente: **[RAMeka](https://retroachievements.org/download.php#rameka)**
- ✅ Núcleo de libretro: **Genesis Plus GX**
  - El más recomendado.
- ✅ Núcleo de libretro: **blueMSX**

### Sharp X1

- ❌ _No soportado_.

### Sharp X68000

- ❌ _No soportado_.

### SNES/Super Famicom/Satellaview/Sufami Turbo

- ✅ Emulador independiente: **[RASnes9x](https://retroachievements.org/download.php#rasnes9x)**
- ✅ Núcleo de libretro: **Snes9x**
  - El más recomendado.
- ✅ Núcleo de libretro: **Mesen-S**

### SpectraVideo SVI 318/328

- ❌ _No soportado_.

### Super Cassette Vision

- ❌ _No soportado_.

### Thomson MO/TO

- ❌ _No soportado_.

### TI-83

- ❌ _No soportado_.

### TIC-80

- ❌ _No soportado_.

### Uzebox

- ✅ Núcleo de BizHawk: **Uzem**
- ✅ Núcleo de libretro: **Uzebox**

### Vectrex

- ✅ Núcleo de libretro: **vecx**

### VIC-20

- ❌ _No soportado_.

### Virtual Boy

- ✅ Núcleo de libretro: **Beetle VB**
- ✅ Núcleo de BizHawk: **Virtual Boyee** (Mednafen)

### VMU/VMS

- ❌ _No soportado_.

### WASM-4

- ✅ Núcleo de libretro: **WASM-4**

### Watara Supervision

- ✅ Núcleo de libretro: **Potator**

### Wii

- ❌ _No soportado_.

### Wii U

- ❌ _No soportado_.

### WonderSwan (Color)

- ✅ Núcleo de libretro: **Beetle Cygne**
- ✅ Núcleo de BizHawk: **Cygne** (Mednafen)

### Xbox

- ❌ _No soportado_.

### Xbox 360

- ❌ _No soportado_.

### Zeebo

- ❌ _No soportado_.

### ZX81

- ❌ _No soportado_.

### ZX Spectrum

- ❌ _No soportado_.

Más detalles sobre los núcleos de BizHawk se pueden encontrar [aquí](https://tasvideos.org/BizHawk).
