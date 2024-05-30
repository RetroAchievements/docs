Esta pagina detalla los métodos de hashing para cada consola soportada en RA:

## NES

Si el ROM empieza con `NES\1a`($4E $45 $53 $1A), los primeros 16 bytes son ignorados y lo que queda del archivo es linkeado/hashed. Si el ROM no empieza con `NES\1a` ($4E $45 $53 $1A), el archivo entero es linkeado/hashed.

## Famicom Disk System

El archivo entero es linkeado/hashed.

**NOTA**: Como salvar muta la data de los discos, copias locales de las imágenes cargadas son necesarias para asegurarte que los hashes no cambien entre cesiones de juego.

## SNES

Si el tamaño del archivo es de 512 bytes mas que un multiplo de 8K, los primeros 512 bytes son ignorados y lo que queda del archivos es linkeado/hashed. Si el tamaño del archivo no es de 512 bytes mas que un multiplo de 8K, el archivo entero es linkeado/hashed.

## N64

El archivo entero es es agregado al hash.

Esto talvez pueda resultar en tres diferentes hashes para cada juego. La extensión z64 es big endian (ABCD). La extensión n64 es little endian (DCBA). Y la extensión v64 es middle endian (BADC).

## GB

El archivo entero es agregado al hash.

_NOTA_: Parece que RAVBA hace 0-pad la información si el tamaño especifico del ROM (address $148) es mas grande que el archivo. Aun tengo que encontrar un caso donde esto ocurra.

## GBC

El archivo entero es agregado al hash.

_NOTA_: Parece que RAVBA hace 0-pad la información si el tamaño especifico del ROM (address $148) es mas grande que el archivo. Aun tengo que encontrar un caso donde esto ocurra.

## GBA

El archivo entero es agregado al hash.

## VirtualBoy

El archivo entero es agregado al hash.

## Master System

El archivo entero es agregado al hash.

## MegaDrive (Genesis)

El archivo entero es agregado al hash.

## Sega 32X

El archivo entero es agregado al hash.

## Sega CD

_Cosas que hacer_: Se necesita investigar esto mas a fondo. Este sistema es incluso soportado?

Un buffer de 1KB es agregado al hash. Lo primeros 512 bytes del buffer estan en los primeros 512 bytes del track 0. No estoy seguro de lo que se encuentra en los segundos 512 bytes.

## GameGear

El archivo entero es agregado al hash.

## Atari 2600

El archivo entero es agregado al hash.

## Atari 7800

El archivo entero es agregado al hash.

## Atari Lynx

Si el ROM empieza con `LYNX\0`, los primeros 64 bytes son ignorados y el contenido restante del archivo es agregado al hash. Si el ROM no empieza con `LYNX\0`, el archivo entero es agregado al hash.

## ColecoVision

El archivo entero es agregado al hash.

## NeoGeo Pocket

El archivo entero es agregado al hash.

## PCEngine (TurboGrafx16)

El archivo entero es agregado al hash.

## PCEngine CD

_Tareas que hacer_: No estoy completamente seguro de ocmo trabaja este. RAPCE linkea/hashes la "Placa Madre del ROM principal", pero no puedo lograr que funcione. RALibRetro parece que no linkea nada, y no hay ningun codigo especial en RetroArch, así que por lo que parece esta linkeando/hashing el archivo entero, pero cual archivo pero cual archivo? El zup es un bin/cue con múltiples archivos.

## FBA (Arcade)

El string del nombre del archivo sin la extensión es linkeado/hashed (xxx.zip). Detecta minúsculas y mayúsculas.

## PC-8001 / PC-8801

Imágenes de cintas y discos cargadas en el drive 1 (program disk data) son completamente linkeadas/hashed.

**NOTA**: Como salvar y otras manipulaciones pueden mutar la información del disco, copias locales del disco son requeridas para asegurar que los hashes no han cambiado entre cesiones de juego.

## Apple II

Imágenes de Disco (las dos, disquete y disco duro) cargadas en el drive 1 son completamente linkeadas/hashed.

**NOTA**: Como salvar y otras manipulaciones pueden mutar la información del disco, copias locales del disco son requeridas para asegurar que los hashes no han cambiado entre cesiones de juego.
