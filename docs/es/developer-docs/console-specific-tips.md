Cuando escavamos en memoria en estas viejas consolas ayuda saber que los creadores originales de estos juegos trabajaron en ellos alguna vez. Si te familiarizas bien en la manera en la que trabaja tu consola favorita entonces hacer un set va a resultar mas sencillo y preciso.

## NES (RANes)

### Duplicado de Direcciones

![NES memory mirror](/nes-memory-mirroring.png)

Cuando utilices el inspector de memoria para encontrar variables en juegos de NES, va a ver 4 copias de todo lo que encuentres. Si te estas preguntando "cual debería de utilizar?" o "deberia probar cada una de ellas?" no es tan complicado como parece.

Esta es una característica que el NES le da a los desarrolladores para encontrar mas maneras para buscar en memoria. Porque el NES en si solo tiene 2KB de RAM, el primer resultado (el que va abajo de 0x800) tiene que ser usado para consistencia, y aplicar condiciones adicionales en los otros realmente no hace nada.

Esto también aplica para RPS y tablas clasificatorias también.

## Game Boy (RAVBA)

### Mapa de Memoria

Algunos rangos de valores significan diferentes cosas en el contexto del hardware del Game Boy, así que tener un mapa de lo que te puede resultar útil puede ayudar a eliminar esos valores que no sirven. Así es como se desplaya:

- ❌ **0x0000 - 0x7FFF: Información del ROM** (No hay razón para utilizarlo. Esta área contiene información del header que solamente la leen algunos emuladores.)
- ❌ **0x8000 - 0x9FFF: Información de Gráficos** (Algunas veces algunas cosas tal vez tengan sentido si lo que estas buscando es el ID de mapa o animación , pero siempre va a ver otras maneras mejores de hacer las cosas así intenta evitar el uso de cualquiera de estas)
- ✔️ **0xA000 - 0xBFFF: RAM del Cartucho** (Ej. archivos de guardado. Algunas veces utilizar estas direcciones puede ser inevitable porque entonces tu set seria vulnerable a trampas cargando archivos de guardado de 100%. Mas información de como proteger tus logros contra archivos de guardado mas adelante)
- ✔️ **0xC000 - 0xDFFF: RAM de trabajo** (Aquí esta la bueno; casi todo lo que necesitas se encuentra en este rango)
- ❌ **0xE000 - 0xFDFF: ECHO RAM** (No la utilices, mira mas abajo)
- ❌ **0xFE00 - 0xFE9F: Mas Información de Gráficos** (lo mismo que información de gráficos de arriba)
- ❌ **0xFEA0 - 0xFFFF: Variado** (No lo utilices)

Para mas información mira: http://gameboy.mongenel.com/dmg/asmmemmap.html

### ECHO RAM

![Echo RAM](/game-boy-echo-ram.png)

Similar que el NES, algunas variables tal vez se muestren mas de una vez cuando te encuentres buscando en el inspector de memoria. El segundo resultado es lo que se le conoce como ECHO RAM, que es un espejo de la memoria actual. Aunque algunos emuladores tienden a ignorar esta área o a emularla incorrectamente, se recomienda NO utilizarla para nada y siempre utilizar el primer resultado.

El Game Boy tiene 8KB de RAM empezando en 0xC000. La ECHO RAM empieza en 0xE000, así que si tus direcciones empiezan con una E vas a tener que remplazar el primer carácter que no tenga un cero con una C. Recuerda: C es lo correcto, E es la echo!

### GBC

En el GBC, los 4KB de memoria de 0xD000-0xDFFF son un banco para un bloque de memoria mas grande de 32kb que no es directamente accesible por el procesador. Los Bits 0-2 de 0xFF70 indican cual banco esta cargado en el bloque de memoria 0xD000-0xDFFF. Es una "función" utilizada para expandir el almacenamiento de los ROMs del GBC mientras aun se tiene el soporte para ROMs del GB original.

Cambiar de Banco (cambiar el valor de 0xFF70) provoca que la memoria en el rango 0xD000-0xDFFF se actualice. Esto aparece como un flickering/parpadeando en el Visor de Memoria y provoca que la búsqueda de memoria sea mas complicada. Si estas escribiendo condiciones dependiendo de la memoria que se encuentra en ese bloque, también vas a requerir que 0xFF70 tenga un valor en especifico para asegurarte que estas utilizando el banco correcto. Los 4KB de memoria de 0xC000-0xCFFF no se cambian como el banco y pueden ser utilizados sin preocupaciones sin condiciones adicionales.

No es muy recomendable que utilices estas direcciones en tus logros si es que cuentas con al menos una alternativa para no utilizarnos. Desde Enero del 2018, RALibretro solamente muestra el banco de 0x00 a 0xFF70. RetroArch a estado fluctuando los bancos de memoria, pero algunos valores no funcionan de la misma manera que en RAVisualBoyAdvance. Al menos asta que RetroArch reciba una inspector de memoria, logros que utilicen direcciones en 0xD000-0xDFFF solamente van a funcionar en RAVisualBoyAdvance.

### GB/GBC BIOS

RALibRetro y RetroArch cuenta con soporte para el BIOS de GB/GBC, que muestra los logos de "Nintendo" y "GameBoy" antes de empezar el juego. Esto provee aproximadamente cuatro segundo donde la memoria principal ($C000-$DFFF) aun no a sido inicializada, y podría provocar que algunos logros se disparen cuando se cargue el juego por algunos usuarios que tienen el BIOS habilitado.

Para habilitar esta característica, pon el archivo del bios (de nombre `gb_bios.bin` o `gbc_bios.bin`) en el folder del directorio del sistema ya sea el de RALibRetro o RetroArch. Cuando empieces el juego, vas a ver los logos de "Nintendo" y "GameBoy" antes de proceder al juego actual.

Si esto te esta causando problemas, tal vez necesites agregar un poco de lógica para prevenir que los logros salten cuando se encuentre el jugador en el BIOS, pero seria preferible que agregues lógica del juego si es posible (ej. cuando se muestra una pantalla en especifico).

El código del BIOS es cargado en $0000-$00FF, así que identifica ese pedazo de memoria cuando estés en el BIOS y haz que lo ignore tu logro. Por ejemplo, los últimos cuatro bytes del bloque del BIOS del GBC son `3E 11 E0 50`, asi que podrías agregar esta condición al logro para prevenir que el logro salte cuando el BIOS se encuentra corriendo.

```
32-bit 0x00FC != 0x50E0113E
```

Después de que el BIOS se termina, el bloque es rellenado con puras FF's, y es re-asignado para vectores de interrupción. Para mas detalles, mira [Un vistazo a la pantalla de inicio del GameBoy](https://realboyemulator.wordpress.com/2013/01/03/a-look-at-the-game-boy-bootstrap-let-the-fun-begin/).

**NOTA**: Los últimos cuatro bytes del BIOS del GB son `3E 01 E0 50`. Así que la condición para el BIOS seria:

```
32-bit 0x00FC != 0x50E0013E
```

## Nintendo 64 (RAP64)

### Utilizando códigos GameShark para Direcciones

Los códigos de GameShark pueden ser un valioso recurso para encontrar direcciones que no puedes o sientes que no las puedes encontrar. Estos cuentan con 12 caracteres por linea y son sencillamente fáciles de compilar.

`[AA][BBBBBB] [CCCC]`

[AA] es el tipo de código. Esta es una pequeña instrucción para el GameShark que define que hacer con el siguiente valor. Si entiendes que es lo que hace ese código GameShark puedes utilizar como ayuda para crear una condición.

- **80, 88:** La dirección es de 8-bit. Pone el valor en [00CC] en la dirección [BBBBBB].
- **81, 89:** La dirección es de 16-bit. Pone el valor en [CCCC] en la dirección [BBBBBB].
- **D0:** La dirección es de 8-bit. Checa si [00CC] es igual al valor en la dirección [BBBBBB] entonces ejecuta la siguiente linea si así lo es.
- **D2:** La dirección es de 8-bit. Checa si [00CC] es DIFERENTE al valor en la dirección [BBBBBB] entonces ejecuta la siguiente linea si así lo es.
- **D1:** La dirección es de 16-bit. Checa si [CCCC] es igual al valor en la dirección [BBBBBB] entonces ejecuta la siguiente linea si así lo es.
- **D3:** La dirección es de 16-bit. Checa si [CCCC] es DIFERENTE al valor en la dirección [BBBBBB] entonces ejecuta la siguiente linea si así lo es.

Aquí están algunos ejemplos:

- Paper Mario: HP Infinito:

`[80][10F292] [0032]`

Cambia el valor de 8-bit en 0x10F292 a 0x32 (50). Entonces esto significa que el HP de Mario es un valor de 8-bit en 0x10F292.

- Donkey Kong 64: Juega como Rambi:

`[80][74E77C] [0006]`

Cambia el valor de 8-bit en 0x74E77C a 6. Entonces esto significa que el personaje el cual estas utilizando ahora es un valor de 8-bit en 0x74E77C.

- Chameleon Twist 2: Deja presionado L para hacer el Moon Jump:

`[D0][18BAB5] [0020] <- Estamos revisando este`

`[81][18B9E0] [4200]`

Checa si el valor de 8-bit en 0x18BAB5 es igual a 0x20. Esto significa que 0x18BAB5 contiene una variable de presionado de botón y el Bit5 (0x20) corresponde a la L.

[Anti-GSC](http://viper.shadowflareindustries.com/antigsc/index.php?codes&dev=gs&system=n64) y [GameHacking](https://gamehacking.org/system/n64) los dos son buenos recursos para encontrar códigos de GameShark.

## Neo Geo

### Protección Obligatoria del UniBIOS

UniBIOS permite severas opciones de desarrollador, y también accesa a la base de datos de cheats de cada juego. Por eso mismo todos los logros para Neo Geo necesitan estar protegidos de esto. La solución mas simple para hacer esto es desabilitar el uso del UniBIOS completamente, directamente desde el código de logro.

Afortunadamente la parte de la data del UniBIOS parece ser reflejada en dos cadenas de direcciones en la RAM: `0x00fe30` y `0x00fe50`. Mientras el UniBIOS este activo `0x00fe30` en 32-bit parece mostrar siempre el mismo valor (para cada uno de los juegos de Neo Geo game) que es `80025632`, y no parece que cambie después que el ROM ya fue cargado. Para cualquier otro BIOS, el valor siempre es 0, (excepto en el momento en el que la RAM es cargada de nuevo en el programa de diagnostico, después de haber cargado el ROM).

Para proteger tus logros del uso completo del UniBIOS lo único que necesitamos hacer es incluir una simple protección que se va resetear cuando el valor de 32-bit en `0x00fe30` no sea igual a `0`. Esto adicionalmente protege, al logro de que salte durante el proceso de diagnostico de RAM.

**Así es como se debería de ver la protección (seleccionada en el Editor de Logros):**
![unineo1](/unibiosprotection.png)

**Así es como se ve la misma región de la RAM cuando se utilizan otros BIOS (utilizando MSV):**
![unineo2](/unibiosp2.png)
