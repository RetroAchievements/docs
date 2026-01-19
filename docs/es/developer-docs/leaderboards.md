Actualmente las Tablas de Clasificación pueden ser editadas por desarrolladores desde el sitio web. Es una interfaz bastante tosca y un trabajo algo complicado hacer que una tabla funcione de manera correcta. Así que en este documento vamos a intentar a entender como funciona.

## Visiones Generales

Asi es como se ve una lista de Tablas de Clasificación de un juego en el sitio web:

![leaderboard_list](/leaderboard-list.png)

En el centro puedes llegar a ver cada Tabla que a sido creada, y en la columna de la derecha puedes llegar a ver las **Notas de Código** del Juego. Las Notas están allí para ayudar en algunas de las condiciones que se encuentran aquí abajo.

Aquí hay una breve explicación de cada campo que se encuentra en una Tabla de Clasificacion:

- **Titulo**: El titulo de la tabla.
- **Descripción**: La descripción de la tabla.
- **Formato**: Puede llegar a ser `Puntuación`, `Tiempo (Frames)`, `Tiempo (Milisegundos)` o `Valor`. Se utiliza para distinguir que tipo de tabla es (vamos a ver mas sobre esto mas abajo).
- **"LowerIsBetter" checkbox**: cuando se encuentra activada, significa que el valor mas bajo es mejor. Es usualmente el caso para logros basados en tiempo.
- **Start**: condiciones para empezar la tabla, aka **STA**.
- **Cancel**: condiciones para cancelar la tabla, aka **CAN**.
- **Submit**: condiciones para subir una entrada a la tabla, aka **SUB**.
- **Value**: valor que quieres que se suba a la tabla, aka **VAL**.

**Nota**: Una tabla valida TIENE que tener todas estas cuatro condiciones.

Esos últimos 4 campos son realmente importantes y se tiene que tomar _MUCHO_ cuidado de acuerdo a los datos que vas a introducir en ellas. Es por eso que requieren una explicación a continuación:

La condición **STA** o **Start** son una serie de valores, como un logro, que tienen que llegar a ser verdad en orden para que la tabla empieza a buscar una entrada para la tabla. Una vez que **STA** es verdadero, el juego va a activar las otras tres constantemente.

Si la condición **Cancel** (**CAN**) es verdadera, entonces esta va a cancelar la tabla y no se va a subir la entrada a la misma.

Si la condición **Submit** (**SUB**) es verdadera, entonces la puntuación entrara en las tablas. NOTA: Cancel tiene mas prioridad que Submit. Si las dos se convierten verdaderas en el mismo frame, la puntuación no sera ingresada.

Finalmente, **Value** (**VAL**) es un caso especial, y va a ser tomado de la memoria utilizando la formula que se ingreso en la entrada de Value. Esta es la puntuación que se muestra cuando la Tabla esta activa, y el valor que es ingresado en las tablas si **SUB** es verdadero.

NOTA: Una vez que una tabla activa es cancelada o ingresada, esta no puede ser re-activada asta que la condición **Start** se convierta en falsa, y verdadera de nuevo. Esto previene a la tabla de ser re-activada inmediatamente que se ingreso un valor o se cancelo.

## Formato de Direcciones

Las direcciones de memoria para STA/CAN/SUB/VAL tienen el siguiente formato:

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

## Ejemplo

La mejor manera de empezar es hecharle un vistazo a una de las tablas ya existentes [https://retroachievements.org/leaderboardList.php](https://retroachievements.org/leaderboardList.php) y abrirla para ver como funciona. Vamos a utilizar la tabla de [Green Hill Act 1 (Sonic the Hedgehog)](https://retroachievements.org/leaderboardinfo.php?i=2) para este ejemplo. Entonces veamos como funciona:

![new_leaderboard2](/new-leaderboard2.png)

El **Titulo/Descripción** son algo obios.

El **Type** es "Time (Frames)". En Sonic cada 60 frames es un 1 segundo, entonces vamos a monitoriar los segundo utilizando frames.

La caja de **Lower Is Better** esta marcada, entonces aquel que consiga el tiempo mas corto sera el #1.

Ahora vamos a desglosar las partes mas importantes.

### Condiciones de Start

**STA**: `0xfe10=h0000_0xhf601=h0c_d0xhf601!=h0c_0xfff0=0`

- `0xfe10=h0000`: Si la dirección de 16-bit 0xfe10 en la RAM es equivalente a 0000 en hex,
- `_`: Y,
- `0xhf601=h0c`: Si la dirección de 8-bit 0xf601 en la RAM es equivalente a 0c en hex,
- `_`: Y,
- `d0xhf601!=h0c`: Si la misma dirección anterior (0xf601) NO es equivalente a 0c en hex,
- `_`: Y,
- `0xfff0=0` Si la dirección de 16-bit 0xfff0 en la RAM es equivalente a 0.

Esto puede parecer desalentador, porque no sabes que significan esta direcciones. Es por eso que las **Notas de Código** en la columna de la derecha son bastante útiles! Tu puedes llegar a ver como estas direcciones son mostradas en memoria. En nuestro ejemplo tenemos:

- `0xfe10` es el nivel, y se espera que sea `0` (el primer nivel).
- `0xf601` es una direccion en memoria de 8-bit, y utilizamos el prefijo `0xh` en vez de `0x`. `0xf601` es el modo de la pantalla. La segunda y terceras partes de las condiciones para empezar estan diciendo "el modo actual tiene que ser _ingame_ (`0c`), y el modo en el frame anterior NO tiene que ser _ingame_". **Nota**: ese prefijo `d` en la dirección representa delta, o "el valor en el frame anterior". **Sumándole a esto:** ejecuta STA si ACABAMOS de llegar a un nivel, (para empezar a checar el tiempo).
- Finalmente también esperamos que `0xfff0` sea equivalente a `0`, ya que esta dirección se utiliza para demo mode, y no queremos que la tabla se active cuando esta el modo demo activado!

**Tip**: el error mas común cuando creamos tablas de clasificación es olvidarnos de la `h` cuando tratamos de hacer referencia a un valor en memoria de 8-bit.

**Pro-tip:** **STA**, **CAN**, y **SUB** soportan toda la logica que se encuentra disponible en el [editor de logros](/es/orphaned/achievement-logic-features). La manera mas facil es asegurarte que escribiste todo correctamente es crear logros locales que capturen estos eventos, y entonces extraer los valores ingresados en el archivo "XXX-User.txt" asociado al juego en el cual te encuentras trabajando.

### Condiciones para Cancelar

**CAN**: `0xhfe13<d0xhfe13`

- 0xfe13 es el numero de vidas.

La condición de cancelación checa si el contador de VIDAS alguna vez se decrementa. Literalmente dice "Cancela si el valor ACTUAL en 0xfe13 es menor al valor ANTERIOR en 0xfe13". Queremos hacer esto porque puedes llegar al ultimo checkpoint, morir y resetear tu tiempo a 0:00. Y no queremos que se pueda hacer esto, ya que no es la manera correcta de completar el nivel. Así que si el jugador muere, se va a resetear el progreso de la tabla. Finalmente, si conectas dos condiciones de cancelación con una `s`, la tabla se va a cancelar si cualquiera de las condiciones es verdadera.

### Condiciones para Ingresar Entradas

**SUB**: `0xf7cc!=0_d0xf7cc=0`

- 0xf7cc es la bandera para terminar el nivel, esta no es interactiva.

La sección de submit checa si en el frame actual se encuentra la bandera de 'endlevel' como verdadera (o `!=0`, 'no es un cero'), y el frame anterior (delta) lo tiene como falso (o `=0`, 'cero'). Esto sugiere que el jugador a llegado al final del nivel.

**Tip**: puede llegar a ser útil observar como trabajan estos valores en memoria, y conocer que tipo de valor se utilizan en diferente circunstancias.

### Interpretador de Valores

También mira: [Código Binario Formateado en Decimal](/es/developer-docs/rich-presence#codigo-binario-formateado-en-decimal)

**VAL**: `0xhfe24*1_0xhfe25*60_0xhfe22*3600`

Finalmente, valor. Una vez que el jugador a llegado a la condición de inicio, se mostrara una notificación en pantalla, mostrando el progreso del jugador en tiempo real. Si es una una tabla sobre tiempo, va a ver un reloj, y si es una puntuación se mostrara simplemente el valor. Si ellos llegan a cumplir la condición de cancelación, se mostrara un mensaje diciendo que fallaron, y la notificación sera removida. Si ellos cumplen la condición de submit exitosamente, el valor actual se va a tomar y se va a subir una entrada, aparecerá una notificación informando al jugador sobre su posición en las tablas.

La condiciones en value son especiales en cierto aspectos. Es evaluada constantemente y se muestra en pantalla en tiempo real cuando una tabla esta activada. No trabaja como otras condiciones, interpreta las direcciones de la siguiente manera:

`dirección*modificador` (dirección veces modificador)

y usa al `_` operador guion bajo como 'mas'. El asterisco `*` significa 'multiplicar', entonces en el valor

`0xhfe24*1_0xhfe25*60_0xhfe22*3600`

representa:

8-bit 0xfe24 1 vez, MAS
8-bit 0xfe25 60 veces, MAS
8-bit 0xfe22 3600 veces

La razón de esto es que los valores de cada una de estas direcciones significan frames, segundos, y minutos respectivamente. Cuando agregamos estos valor juntos, obtenemos un total de frames que ingresamos a la base de datos.

Recuerdas que el campo de 'Formato' podía ya ser **Puntuación**, **Tiempo (Frames)**, **Tiempo (Milisegundos)** o **Valor**? **Tiempo (Frames)** es el mas común de todos, y representa 'frames'. **Time (Milisegundos)** espera un valor que pueda convertir en milisegundos (Super Mario Kart utiliza esto). Sin embargo para convertir un valor en frames a un formato que sea humanamente entendible tenemos que dividir el valor por 60 para conseguir una interpretación certera de los segundos, y un valor en milisegundos debería estar dividido por 100 para conseguir el numero de milisegundos. Esto se utiliza ya sea en el sitio web y en los programas para mostrar el valor apropiadamente, y es importante que se distinga ya que podemos estar seguros que estamos consiguiendo el valor mas acertado del emulador, utilizando el formato que sea necesario para capturar el tiempo.

También hay un símbolo que solamente funciona en este campo. Conecta dos valores condicionales con un `$` y esto va a provocar que solamente se utilice el valor con tenga el valor mas alto.

**NOTA**: **Tiempo (Milisegundos)** son actualmente centenas de segundo, no milésimas de segundo. por ejemplo: un valor de 6234 debería de ser 62.34 segundos, no 6.234 segundos.

**Tip**: el modificador usa valores decimales, entonces si por ejemplo quieres divir entre dos, puedes multiplicar por 0.5: `0xhfe24*0.5`

## Ayuda Futura

Desafortunadamente hay _MUCHAS_ maneras de llegar a hacer este proceso de la manera equivocada, entonces si llegas a tener algún problema siéntete libre de pedir ayuda en nuestro [Servidor de Discord](https://discord.gg/dq2E4hE).

Si quieres practicar, es bastante recomendable que crees tu tabla e intentes algo en un juego nuevo, en vez de utilizar una tabla ya existente.

Por favor ten en cuenta que estos archivos son arrastrados directamente a la partida de alguien cuando abra el juego, y un valor de memoria mal ingresado o un comando puede causar que el emulador se crashee, así que por favor testea el código de tu tabla!
