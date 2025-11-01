## Introducción

Rich Presence **(RP)** es un breve resumen de lo que están haciendo los jugadores activos en su partida. Para tener RP en un juego necesitas un Script de Rich Presence **(RPS)** que este es creador por desarrolladores. El Script checa la memoria del juego y ya sea como esta fue programada reporta los valores de ciertas direcciones con definiciones asignadas por el desarrollador así como en que stage se encuentra el jugador, cuantas vidas tienes, si el juego esta en pausa, que modo de juego se encuentra jugando, lo que a logrado el jugador, etc. Esta informacion es reportada de vuelta al sitio. **Cada juego publicado debería de tener mínimo un RPS básico.**

**Ejemplo de RP en acción:**

![Example of RP in action](/public/rp-sample.png)

Para ver la RP en tiempo real haz clic en el menu de RetroAchievements en tu emulador y después en Rich Presence Monitor. Una pequeña ventana debería de mostrar tu RP actual. (Bueno para realizar pruebas)

![Rich Presence Monitor](/public/rp-window.png)

La mejor manera de entender Rich Presence es observar varios ejemplos de juegos, mira las direcciones que fueron utilizadas a mira como el texto es mostrado en el monitor y en el sitio.

### Como funciona?

Cada vez que un juego es lanzado, guarda los logros del juego en un archivo de 'ruta' donde el ROM detalla todos los logros y valores en memoria (y tablas clasificatorias) que puede llegar a rastrear. También va a solicitar un Script de Rich Presence para el ROM que se encuentre actualmente cargado. El emulador va a reportar al sitio web cada 120 segundos. Similarmente, cada 120 segundos o parecido, la caja de 'active players' en la pagina de inicio se va a refrescar, detallando la ultima actividad conocida por todos los jugadores activos. Si no hay un Script de rich presence entregado, el texto sera 'earning achievements' Si se esta jugando un juego con logros, 'playing [game]' si se juega un juego sin logros, o 'developing achievements' si la ventaba de memoria esta abierta y es visible.

El RPS de cada juego puede ser encontrado en la sección de desarrollo en cada pagina de juego:

![Dev click](/public/dev-click.png)

![RP shown](/public/rp-shown.png)

## Ejemplo (Super Mario Bros.)

```
Format:Digit
FormatType=VALUE

Lookup:Mode
0=[Demo]
2=[World Complete]

Lookup:Paused
0x81=▌▌
0x80=▌▌
1=▌▌

Lookup:Star
5=🌟
4=🌟
3=🌟
2=🌟
1=🌟

Lookup:Powerup
0=Small
1=Super
2=Fire

Lookup:Swimming
1= swimming

Lookup:Status
0= [Loading]
1= taking a vine warp
2= entering a warp pipe
3= entering a warp pipe
4= 🚩
5= [Stage Complete]
6= [Game Over]
7= [Entering Area]
9= growing
0xA= shrinking
0xB= 💀
0xC= powering up

Lookup:Quest
0x0=1st
0x1=2nd

Display:
@Mode(0xh770)@Paused(0xh776)@Star(0xM79f_0xN79f_0xo79f_0xP79f_0xQ79f_0xR79f)@Powerup(0xh0756) Mario in @Digit(0xh75f_v1)-@Digit(0xh75c_v1)@Swimming(0xh704)@Status(0xhe), 🚶:@Digit(0xh75a_v1), @Quest(0xh7fc) Quest
```

El RSP se compone de objetos de Lookup, objectos de Formato y un objeto de Display.

## Lookups

Los Lookups se definen de la siguiente manera:

```
Lookup:NombreDelLockup
Valor1=Texto cuando este valor este activo
Valor2=Texto cuando este otro valor
...
```

Le damos un valor al Lookup, consistiendo de una serie de direcciones de memoria y modificador. Encontraras mas sobre esto mas adelante.

## Formato

Las Tablas de Formato se definen de la siguiente manera:

```
Format:Score
FormatType=VALOR
```

Empezamos con `Formato:`, y después con el nombre del tipo de formato. En la siguiente linea, escribe `FormatType=`, y entonces uno de los siguientes valores: `VALUE`, `SCORE` (o `POINTS`), `TIME` (o `FRAMES`), `SECS`, `MILLISECS`, o `OTHER`.

- `VALUE`: valor genérico, no se agregan ceros.
- `SCORE`/`POINTS`: "000130 puntos"
- `TIME`/`FRAMES`: este valor describe el numero de frames consecuentes, y se va a mostrar como 00:00.00
- `SECS`: este valor describe el numero de segundos que han pasado, y se va a mostrar como 00:00
- `MILLISECS`: este valor describe el numero de centenas de segundo que han pasado, y se va a mostrar como 00:00.00

## Display

Display es la string que se muestra en la caja de 'Active Players' en la pagina de inicio del sitio web. Para referirte a un Lookup o aun Format previamente definidos se utiliza simplemente un '@'. Y entonces se agrega el nombre que le diste al lookup o al format (distingue mayúsculas y minúsculas!), e inmediatamente después de eso, en brackets, sigue la serie de valores en memoria que especifican que sera enviado a ese lookup y format.

`@Powerup(0xh756)`

Eso significa que vas a utilizar el Lookup o Format que se llama `Powerup`, y entrega cualquier valor que se encuentre actualmente en 0xh756.

### Analizando el Lookup de Ejemplo

- `@Mode(0xh770)` - Un Lookup para la dirección que muestra si el juego se encuentra en modo demo o si un mundo a sido completado.
- `@Paused(0xh776)` - Un Lookup para la dirección que muestra si el juego se encuentra en pausa (Se utilizan 3 valores, dos de ellos son para pausar y despausar).
- `@Star(0xM79f_0xN79f_0xo79f_0xP79f_0xQ79f_0xR79f)` - Un Lookup para la dirección que muestra si Mario tiene la Estrella. Mas sobre esto mas adelante.
- `@Powerup(0xh756)` - Un Lookup para la dirección que muestra si Mario es Pequeño, grande o cuenta con la habilidad de fuego.
- `Mario in` - Texto estático para unir los objetos format y lookup.
- `@Digit(0xh75f_v1)` - `Digit` es un objeto format definido como un valor. La dirección 0xh75f es Mundo menos 1 (porque cuenta con base 0, y este empieza a contar desde cero). `_v1` Significa + valor 1. `_v+1` también es correcto.
- `-` - Mas texto estático para separar el mundo y el nivel. como en el juego Mundo 1-1.
- `@Digit(0xh75c_v1)` - Otro uso del objeto `Digit` format . Esta vez se encuentra rastreando el Stage. Mundo 1-X.
- `@Swimming(0xh704)` - Un Lookup para la dirección que muestra si el jugador se encuentra nadando.
- `@Status(0xhe)` - Un Lookup para la dirección que muestra el estatus de Mario, como por ejemplo descendiendo de un tubo.
- `, 🚶:` - Mas texto estático. 🚶 es el símbolo para vidas.
- `@Digit(0xh75a_v1)` - Tercer uso del objeto `Digit` format. Esta vez checa la dirección de vidas del jugador.
- `, ` - Texto estático.
- `@Quest(0xh7fc)` Un lookup para ver si el jugador se encuentra en modo normal o en la 2da vuelta (modo dificil).
- ` Quest` - Texto estático.

### Tamaño de Direcciones

Para especificar el tamaño de la dirección que te encuentras utilizando, hay varios caracteres que se utilizan para esto. (se ignora si es mayúscula o minúscula)

- Una dirección de 16bit es el default y esta no cuenta con un carácter designado. En 0x10 la dirección es de dos bytes - 16 bits.
- El carácter para una dirección de 8bit es `h` (o `H`). En 0xh10 la dirección es un byte - 8 bits. `xxxx xxxx`
- El carácter para una dirección upper4 es `u` (o `U`). En 0xu10 la dirección es un nibble - 4 bits. `xxxx 0000`
- El carácter para una dirección lower4 es `l` (o `L`). En 0xl10 la dirección es un nibble - 4 bits. `0000 xxxx`
- El carácter para una dirección bit0 es `m` (o `M`). En 0xm10 la dirección es un bit, el bit mas bajo: `0000 000x`
- El carácter para una dirección bit1 es `n` (o `N`). En 0xn10 la dirección es un bit, el segundo bit: `0000 00x0`
- El carácter para una dirección bit2 es `o` (o `O`). En 0xo10 la dirección es un bit, el tercer bit: `0000 0x00`
- El carácter para una dirección bit3 es `p` (o `P`). En 0xp10 la dirección es un bit, el cuarto bit: `0000 x000`
- El carácter para una dirección bit4 es `q` (o `Q`). En 0xq10 la dirección es un bit, el quinto bit: `000x 0000`
- El carácter para una dirección bit5 es `r` (o `R`). En 0xr10 la dirección es un bit, el sexto bit: `00x0 0000`
- El carácter para una dirección bit6 es `s` (o `S`). En 0xs10 la dirección es un bit, el séptimo bit: `0x00 0000`
- El carácter para una dirección bit7 es `t` (o `T`). En 0xt10 la dirección es un bit, el bit mas alto: `x000 0000`
- El carácter para una dirección de 32bit es `x` (o `X`). En 0xx10 la dirección es de cuatro bytes y 32 bits.

Resumiendolo en una tabla:

| localización/tamaño | prefijo (las letras pueden ser en minúsculas) |  ejemplo   |
| :-----------------: | :-------------------------------------------: | :--------: |
|        bit0         |                     `0xM`                     | `0xM01234` |
|        bit1         |                     `0xN`                     | `0xN01234` |
|        bit2         |                     `0xO`                     | `0xO01234` |
|        bit3         |                     `0xP`                     | `0xP01234` |
|        bit4         |                     `0xQ`                     | `0xQ01234` |
|        bit5         |                     `0xR`                     | `0xR01234` |
|        bit6         |                     `0xS`                     | `0xS01234` |
|        bit7         |                     `0xT`                     | `0xT01234` |
|       Lower4        |                     `0xL`                     | `0xL01234` |
|       Upper4        |                     `0xU`                     | `0xU01234` |
|        8bit         |                     `0xH`                     | `0xH01234` |
|        16bit        |                     `0x`                      | `0x01234`  |
|        32bit        |                     `0xX`                     | `0xX01234` |

### Display con Strings Condicionales

```
Display:
?0x 000085=0?Pantalla de Titulo
?0xT00007c=1?Mapa Personalizado en @Zona(0xH00016c)
Jugando Batalla @Batalla(0x 00007c*0.2) en @Zona(0xH00016c)
```

El marcador `Display:` se sigue utilizando para indicar el principio del bloque de Display. Si la siguiente linea empieza con un signo de interrogación, se considera como un display con una string condicional. La parte de la linea que se encuentra entre los dos signos de interrogación es la clausula de la condición. Si la clausula de la condición se evalúa y esta es verdadera, entonces la siguiente parte de la linea se utiliza como el string del display. Si esta no se evalúa como verdadera, entonces se procede a la siguiente linea. Si esta empieza con un signo de interrogación, entonces el mismo proceso se repite. Si este no empieza con un signo de interrogación, la linea entera se utiliza como el string default para el display.

**NOTA**: Se requiere una string default en caso de que ninguna de tus strings condicionales sean verdaderas. Si solamente cuentas con strings condicionales, el script no va a hacer nada.

Observando este ejemplo, si el valor de 16-bit en $0085 es igual a 0, el string del display sera `Title Screen`. Si no, la siguiente linea es examinada. Si el 7mo bit de $007C es igual a 1, el string del display sera `Mapa Personalizado en @Zona(0xH00016c)`. Si no entonces, como linea final no cuenta con una clausula condicional esta es utilizada.

Strings de Display asociados con una clausula condicional soportan todo la misma sintaxis que el string de display predeterminado. En este ejemplo, puedes ver que el lookup `@Zona` se utiliza en los dos strings condicionales y en el string predeterminado.

La frase condicional soporta todos los asesores de direcciones previamente mencionados así como la lógica de los AND (\_) y OR (S). Nota: las clausulas OR aun requieren un grupo 'core', [así como en los logros](/es/developer-docs/alt-groups).

- `?0xH1234=32_0xH2345=0?ejemplo y`

  si el valor de 8-bit en $1234 es 32 _y_ el valor de 8-bit en $2345 is 0, muestra `ejemplo y`

- `?0xH1234=32S0xH2345=1S0xH2345=2?ejemplo o`

  si el valor de 8-bit en $1234 es 32 _y_ el valor de 8-bit en $2345 es 1 _o_ 2, muestra `ejemplo o`

- `?0xH1234=32_0xH5678=33S0xH2345=1S0xH2345=2?ejemplo y/o`

  si el valor de 8-bit en $1234 es 32 _y_ el valor de 8-bit en $5678 es 33 _y_ el valor de 8-bit en $2345 es 1 _o_ 2, muestra `ejemplo y/o`

## Código Binario programado en Decimal (BCD)

BCD es cuando cuando los valores son almacenados en una dirección del 0-9 (un dígito) o 0-99 (dos dígitos). ten en mente que la mayoría de las veces los valores son almacenados en hexadecimal, pero algunas veces los juegos los almacenan de esta manera y aquí esta el mejor método para trabajar con este tipo de valores en tu display.

BCD decodifica cada carácter hexadecimal como un dígito decimal. Si el inspector de memoria muestra un 86 (en hex), el resulta de BCD decodificando el valor seria un 86 (en decimal).

Para objectos con estos valores puedes utilizar le prefijo BCD, como aquí `b0xh1234`. Esto también funciona con [valores en tablas de clasificación](/es/developer-docs/leaderboards#interpretador-de-valores).
Ten en cuenta que también vas a necesitar especificar el tamaño de la dirección BCD en memoria. `b0x1234` lee un valor de 16-bit. `b0xh1234` lee un valor de 8-bit y `b0xX1234` lee un valor de 32-bit.
_NOTA_: Soporte para decodificacion BCD de 16-bit y 32-bit es una función para el kit de desarrollo 0.075.

Esto es usualmente usado para puntuaciones y tiempo, pero algunas veces también para otros tipos de valores.

## Limites

- Limite de 16,000 caracteres por script
- Limite de 100 caracteres para lo que se esta mostrando
- Caracteres Unicode son permitidos

## Detalles de la Sintaxis

- Las llaves para Lookups son en decimal por default y hex si agregas el prefijo `0x`. Esto significa `1` == `0x1`, `2` == `0x2`, `9` == `0x9`, `10` == `0xa`, `100` == `0x64`, etc.
- Los nombres para Lookup/Format son sensibles entre mayúsculas y minúsculas por lo que necesitas escribir exactamente igual el nombre para que se muestre correctamente en el string del display: `@test(0x1234)` el cual no va a encontrar "Format:Test"
- Un Lookup/Format no pueden contener espacios antes o después del nombre. `@test(0x1234)` no va a encontrar "Format:test " o "Format: test"
- Si tu Lookup/Format no puede ser encontrado, no se va a mostrar nada. `Esta es una prueba @test(0x1234).` va a salir como `Esto es una .` si `test` no puede ser encontrado.
- Se pueden agregar comentarios en cualquier parte del script. Una doble diagonal (`//`) indica que la parte restante de la linea va a ser ignorada cuando se procese el script. Nota: los comentarios también aplican para el tamaño máximo de caracteres del script.

## Tips y Trucos

- Los nombres de los Lookup pueden ser tan cortos como un solo carácter si necesitas ahorrarte algunos caracteres extras.
- Zeros subsecuentes pueden ser eliminados de las direcciones (`0xh0001` puede ser acortado a `0xh1`).
- Convertir todos tus valores de hex a decimal va tomar muchos menos caracteres.
- Caracteres Unicode no siempre "toman menos espacio" ellos usualmente toman hasta cuatro caracteres del sistema.
- Si un lookup no contiene ningún valor mapeados, va a resultar en un valor (sin espacio) en blanco. Puedes cambiar este comportamiento agregando una sola linea a los valores del lookup, '\*' a el valor que deseas.
- Cada `Lookup` o `Format` puede ser cargado múltiples veces con las mismas o diferentes direcciones. Puedes definir un solo `Format:Number FormatType=VALUE` en vez de definir valores individuales para las vidas, Puntuación, Nivel, etc.
- Poner espacios a tus lookups algunas veces antes o despues puede ayudarte a esconder ciertos lookups cuando estos no son requeridos, como lo hacen `@Pause`, `@Star`, `@Swimming`, y @Mode .

### Propiedades de los Valores

Cuando utilizamos objetos lookup y format `@object()` es posible combinar y hacer cálculos. Esto puede ser utilizado para mostrar una puntuación correctamente, tiempo del juego, etc. o hacen lookups avanzados.

**Ejemplo**
`@Puntuación(0x28*10_0x29*1000_0x26*100000) puntos`

Esto significa utiliza el lookup o Format `Puntuación`, y entrega la suma de:

- 0x28 10 veces, AGREGA
- 0x29 1000 veces, AGREGA
- 0x26 100000 veces

- `_` agregas las direcciones mutuamente.
- O también puedes agregar un valor estático `0x28_v10`. Esto agrega un 10 a tu total, así como el valor de `0x28` + 10 puede ser mostrado. También se puede hacer lo mismo pero restando `0x28_v-10.`
- Si lo que quieres es restar una dirección necesitas multiplicar el valor por -1. `0x29*-1`. `0x29` es ahora negativo.
- Si lo que quieres es hacer una división lo que necesitas es multiplicar por un numero quebrado. `0x26*.5`. `0x26` va a mostrar el valor 1/2 de `0x26`.
- Y así puedes crear un string con todo junto: `0x28*10_0x29*-1_0x26*.625_v-10`.
- También puedes agregar direcciones entre si para agregar a tus lookups de acuerdo a la suma de varias direcciones. Esto es utilizado en el ejemplo de @Star. Esta buscando la suma de los 6 bits mas bajos de la dirección 0xh79f. La manera en la que esta dirección trabaja es que mientras se encuentre un valor hay significa que Mario es invisible porque agarro una estrella y cuenta el valor hex en 0x23 (35 en decimal) a 0. 23 en binario es 0010 0011 significando que la suma máxima de estos bits seria 5 durante 0001 1111 cuando el contador llega al valor hex de 0x1f (31 en decimal).

## Símbolos Estándar Unicode

Sin ninguna duda puedes utilizar estos símbolos en rich presence.

▌▌=Pausa  
🔁=Continues  
⏰=Tiempo de la Partida/Reloj del Juego  
🔑=Llaves  
💣=Bombas  
❤️ o ❤=En un juego con corazones (ej. Zelda)  
💰=Dinero  
🚩=Nivel/Stage

Cuando te encuentres desarrollando Rich Presence tienes que hacegurarte que te estas comunicando de una manera completamente clara. Si no estas utilizando símbolos estandarizados tal vez tengan sentido para ti pero tal vez sea completamente confusos para otros. **Cuando utilices símbolos no estandarizados, checalo con otro usuario** o con alguna otra gente para ver si los símbolos que estas utilizando tienen sentido. Si no lo tienen, utiliza mejores símbolos, o utiliza texto o símbolos junto con texto.

Para unicode/emojis personalizados [ShapeCatcher](http://shapecatcher.com/) es un excelente recurso, puedes ponerte a dibujarlos y la AI va a buscar resultados similares. Simplemente ten cuidado de no utilizar unicode que sea _demasiado oscuro_, ya que no se va a mostrar correctamente en todos los sistemas.

Toma nota en la preferencia de la comunidad en cuanto a displays:
![RP community display preferences](docs/public/rp-community-display-preferences.png)

## Desarrollando Rich Presence

La herramienta de desarrollo actualmente no cuenta con editor de Rich Presence integrado, pero puedes hacer pruebas locales antes de guardar algo en el servidor. Una vez que hubieras empezado un juego y el Rich Presence actual a sido descargado del servidor, puedes llegar a encontrar en `RACache\Data\XXX-Rich.txt` donde XXX es el ID del juego.

El Monitor de Rich Presence (ejecutable desde el menu de RetroAchievments) lee este archivo y muestra el valor actual cada segundo mientras la ventana se encuentre abierta.

Si haces cambios al archivo `XXX-Rich.txt`, y vuelves a reseleccionar la opción de monitor del menu, este va a leer los nuevos cambios para aquí así puedas hacer pruebas inmediatamente sin tener que aplicar cambios al servidor. Continua haciendo cambios y vuelve a seleccionar la opción en el menu asta que el script trabaje como esperas que lo haga, una vez que hubieras terminado copia el contenido del archivo a la pagina del servidor para que estén los cambios disponibles para todos los demás jugadores.

**NOTA**: El archivo `XXX-Rich.txt` es sobre-escrito con la información actual del servidor cada vez que el juego es abierto. Mientras aun tengas el archivo abierto en un editor, siempre vas a poder guardar tus cambios a pesar de re-abrir el juego.
