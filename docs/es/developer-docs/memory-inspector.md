Aqui un vistazo del **Inspector de Memoria** y sus caracteristicas. Esta herramienta se puede encontrar en la pestaña de "RetroAchievements" en cualquier emulador integrado con RA.

**Tambien mira**: [Tips en la Busqueda de Memoria](/es/developer-docs/tips-and-tricks#tips-en-la-búsqueda-de-memoria).

## Ventana del Inspector de Memoria

![memoryinspector-num](https://user-images.githubusercontent.com/8508804/38775140-304dbdf8-4051-11e8-9388-0061222f0bc3.png)

### 1. Reset to (Resetear en)

Haz click en uno de los botones para empezar una nueva pruba. Por lo general pruebas en 8-bit es lo mas apropiado.

### 2. Filter Values (Filtrar Valores)

Usualmente vas a filtrar ya sea en `=` (igual a) el ultimo valor conseguido o `!=` (diferente que) el ultimo valor conseguido. Si conoces el valor exacto que deseas buscar, puedes utilizar `Given Value`(Valor entregado), o si estas convencido que el valor tuvo que haber incrementado, puedes intentar `>` (mayor que) o `<` (menor que).

### 3. Filter! (Filtrar)

Cada vez que presiones este boton, estas filtrando los valores que no concuerdan en memoria entre el ultimo testeo y el de ahora.

### 4. Ventana de Resultados

![memoryinspector-filter jpg](https://user-images.githubusercontent.com/8508804/38765608-c43a724c-3f9b-11e8-8ae4-676cc273fb92.png)

Despues de haber filtrado los resultados miraras en la ventana exactamente que es lo que paso, cuantos valores has conseguido y cuantos estan fuera. Algunos puntos a tener en cuenta:

- Los resultados muestran cambios en los valores en tiempo real, asi puedes identificar mas facilmente las variables utiles.
- Los resultados en la busqueda estan resaltados dependiendo el criterio. Para valores que no cumplen el filtro de busqueda, van a estar resaltados en rojo. Puedes desactivar esto en la casilla de `Highlights` , si asi lo prefieres.
- Tambien puedes manualmente excluir cualquier variable seleccionada de la busqueda. Utiliza la tecla Ctrl o Shift para seleccionar multiples a la vez.
- **Historial de Resultados**: Te puedes mover hacia atras (`<<`) o hacia adelante (`>>`) por medio de las busquedas anteriores. Ten en cuenta que si empiezas una nueva busqueda (una `New 8-bit Test`), tu historial va a ser borrado.

### 5. Watching (Observando)

Cualquier valor que se encuentre aqui va a ser observado en el [Visor de Memoria](#6-visor-de-memoria) y se mostraran sus [notas de codigo](#7-notas-de-codigo) a la derecha. La direccion tiene que ser `0x` (Un cero, y despues una letra x), seguido de digitos hexadecimales.

### 6. Visor de Memoria

Cualquier variable que se este observando y las variables que tiene alrededor se muestran en esta ventana. Puedes ver mas informacion a continuacion, en la seccion de [Leyendo informacion en el Visor de Memoria](#leyendo-informacion-en-el-visor-de-memoria).

### 7. Notas de Codigo

Una vez que hubieras encontrado un valor en memoria del que quieras hacer una nota, serciorate que el valor este introducido en la caja que dice 'Watching' (Observando). Ahora puedes escribir una pequeña descripcion en la caja de texto, y hacer click en `Save Note` (Salvar Nota). Esto va a mandar el valor en memoria y su descripcion a la base de datos, para que puede ser compartida con todos los desarrolladores que trabajen con este juego.

Haz click en la fleca hacia abajo para ver cuales valores en memoria han sido encontrados hasta ahora, junto con su descripcion, la cual te dice para que sirve esa variable.

Intenta mantener tus descripciones limpias y simples, para que sean facil de entender. Para re-escribir una nota, seleccionala en la lista desglozable, actualiza la descripcion, y haz click en `Save Note` (Salvar Nota). Una ventana va a salir confirmando sobre-escribir la nota existente - checa si esta bien el cambio, y haz click en OK.

Si deseas remover una nota, seleccionala en el menu desglozable, y haz click en `Remove` (Remover).

### 8. Marcadores de Memoria

Cuando haces click en el boton `Open Memory Bookmarker` (Abrir Marcadores de Memoria) vas a ver esta ventana:

![memoryinspector-bookmark jpg](https://user-images.githubusercontent.com/8508804/38765606-c41abac4-3f9b-11e8-91a9-65a28a0dc05b.png)

Con esto, puedes ver multiples variables designadas al mismo tiempo en vez de estar moviendote por todo el Inspector.

Los marcadores pueden ser renombrados haciendo doble-click en su descripcion. Si haces doble click en la variable, te puedes mover directamente a ella en el Inspector de Memoria.

Valores agregados al marcador se van a mostrar en el inspector de memoria de color verde. Desde aqui tambien puedes Freezear (Congelar) cualquier marcador.

Esto es util para cosas como vida o consumibles. Congelar variables puede ser manipulado directamente desde el inspector. Ten en mente que, el congelamiento ocurre **1 frame despues del gameplay.** Esto significa que incluso cuando este congelada, el valor no va a cambiar al menos que pase un frame para que pueda congelarse la variable. Esto siempre se va a mostrar como amarillo.

## Leyendo informacion en el Visor de Memoria

### Notaciones Decimales, Binarias y Hexadecimales

Para trabajar bien con el Visor de Memoria, es importante entender minimo lo basico de los numeros binarios y hexadecimal. Aqui hay algunos recursos de informacion sobre este tema sin irnos a detalles muy extremos:

- https://es.wikipedia.org/wiki/Sistema_binario
- https://es.wikipedia.org/wiki/Sistema_hexadecimal

Los digitos utilizados en el **sistema binario** son `0` y `1`. Un _digito binario_ tambien es conocido como un **bit**. Ocho bits tambien se le conocen como un **byte**.

Los digitos utilizados en el **sistema hexadecimal** son `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `A`, `B`, `C`, `D`, `E` y `F`. La _notacion hexadecimal_ tambien se le conoce como **hex**.

La razon principal para estas 2 notaciones, mas alla del sistema decimal tradicional, son:

- Notacion Decimal es lo que los humanos entienden.
- Notacion Binaria es lo que las computadoras "entienden".
- Notacion Hexadecimal se puede llegar a ver como un punto medio entre la binaria y la decimal. Porque un solo digito hexadecimal representa 4 bits, entonces es una notacion mas corta y entendible con la que pueden trabajar los humanos y las computadoras tambien pueden "entender".

La siguiente table muestra las direntes notacion para sus valores equivalentes.

| Decimal | Hexadecimal | Binario |
| ------- | ----------- | ------- |
| `0`     | `0x0`       | `0000`  |
| `1`     | `0x1`       | `0001`  |
| `2`     | `0x2`       | `0010`  |
| `3`     | `0x3`       | `0011`  |
| `4`     | `0x4`       | `0100`  |
| `5`     | `0x5`       | `0101`  |
| `6`     | `0x6`       | `0110`  |
| `7`     | `0x7`       | `0111`  |
| `8`     | `0x8`       | `1000`  |
| `9`     | `0x9`       | `1001`  |
| `10`    | `0xA`       | `1010`  |
| `11`    | `0xB`       | `1011`  |
| `12`    | `0xC`       | `1100`  |
| `13`    | `0xD`       | `1101`  |
| `14`    | `0xE`       | `1110`  |
| `15`    | `0xF`       | `1111`  |

Mas datos sobre las diferentes notaciones:

- Para indicar que un valor esta escrito en hexadecimal, se utiliza el prefijo `0x`: `0x10 = 16`, `10 = 10`.
- Dos digitos hex representan 8 bits y tienen un rango entre `0` y `255`.
- Cuatro digitos hex representan 16 bits y tienen un rango entre `0` y `65535`.
- Ocho digitos hex representan 32 bits y tienen un rango entre `0`y `4294967295`.

### Modos en el visor de Memoria

La parte de hasta abajo del Inspector de Memoria es lo que llamamos visor de Memoria:

![memviewer](https://user-images.githubusercontent.com/8508804/52494138-59127400-2bb4-11e9-9a1f-6172bba6ee9f.png)

Puedes ver la informacion en el Visor de Memoria utilizando los modos 8, 16 y 32-bit.

#### Modo 8-bit

Por defecto, el Visor de Memoria muestra la informacion en modo de 8-bit. Esto muestra cada byte de memoria como un valor de dos-caracteres hexadecimales por separado. Cada byte tiene su propia direccion.

Dieciseis bytes son mostrados por linea. La direccion de un byte se puede determinar añadiendo la posicion de la fila (mostrada a la izquierda del vizor) a la posicion de la columna (mostrada arriba del visor). Usando la [imagen de arriba](#modos-en-el-visor-de-memoria) como un ejemplo, el cursor esta en `0x002a7` (`0x002a0` + `7`).

#### Modo 16/32-bit

Antes de que hables del modo de 16-bit mode y 32-bit, es importante saber sobre el endianness (extremidad):

> #### Endianness
>
> Se describe como Endianness el orden en el que una secuencia de bytes se encuentra almacenada en memoria de una computadora. Los dos tipos mas comunes son: **Big-Endian** (tambien conocido como BE) y **Little-Endian** (tambien conocido como LE).
>
> En el orden **Big-Endian** la "big end" (extremidad) de un numero (el valor mas significativo en secuencia) es almacenado primero (posicionado en la direccion mas pequeña). En la imagen de abajo puedes ver el numero `0x12345678` almacenado en la direccion `0x100` en el sistema big-endian. Ten en cuenta que el byte mas significativo `0x12` se encunetra en la direccion `0x100`:
>
> ![bigendian](https://user-images.githubusercontent.com/8508804/52626678-db43b680-2e9a-11e9-89e2-19d379359226.png)
>
> En el orden **Little-Endian** el "little end" (extremidad) de un numero (el valor menos significativo en secuencia) es almacenado primero (posicionado en la direccion mas grande). En la imagen de abajo puedes ver el numero `0x12345678` almacenado en la direccion `0x100` en orden little-endian. Ten en cuenta que el byte menos significativo `0x78` se encuentra en la direccion `0x100`:
>
> ![littleendian](https://user-images.githubusercontent.com/8508804/52626680-db43b680-2e9a-11e9-83f2-432fd46dc608.png)

Valores que necesitan mas de 8-bits (en otras palabras: mas grandes que 255) necesitan estar almacenado en multiples bytes. Inclusive, los sistemas emulados que utilizamos almacenan valores de multiples-bytes en orden little-endian.

En la [imagen del Visor de Memoria de arriba](#modos-en-el-visor-de-memoria) puedes ver que en la direccion `0x0002c0` tenemos el valor hexadecimal `ce` y en `0x0002c1` el valor es `39`. Cuando cambias el visor a modo de 16-bit, los valores `ce` y `39` se agrupan en `0x0002c0` y son mostrados como `39ce`. Esto pasa porque automaticamente agrupa cada dos bytes y los muestra como valos hexadecimales de 16-bit.

**NOTA**: Mientras que los valores de 16-bits se alinean generalmente a direcciones pares, este no siempre es el caso. De hecho hay un valor de 16-bit que no se muestra en `0x0002c1`. Ya que el valor en `0x0002c1` es `39` y el valor en `0x0002c2` es `29`, el valor de 16-bit value en la direccion `0x0002c1`es `0x2939`.

Similarmente en, el modo de 32-bit, los cuatro bytes de `0x0002c0` a `0x0002c3` se muestran como un solo valor de 32-bit `0x252939ce` en la direccion `0x0002c0`, pero tambien hay valores de 32-bit en `0x0002c1`, `0x0002c2`, and `0x0002c3`.

### Trabajando con tamaños inferiores a 8-bit

En addicion al 8-bit, 16-bit y 32-bit los tamaños descritos arriba, existen tamaños adicionales que pueden ser utilizados al momentos que estemos creando logros (en el editor de Logros (Achievement Editor)).

#### Single bits

En el visor de memoria cuando un valor de 8-bit es seleccionado vas a ver algo como la imagen de abajo (en la imagen: un byte con valor `6f` es seleccionado; los bits estan resaltados con un circulo naranja):

![bitfields](https://user-images.githubusercontent.com/8508804/52825269-39db8100-30a3-11e9-85b0-f2a2da109954.png)

Es muy comun almacenar informacion importante en un solo bit. Ya que un bit solo puede tener dos posibles valores (`1` o `0`), algunas veces se utiliza para significarn "si" o "no", "encendido" o "apagado", "tiene un item" o "no item", etc. Algunos juegos, especialmente aquellos que tienen espacio muy limitado en memoria, utilizan bit como botones bastante.

**Importante:** Puedes referirte a cada uno de esos bits indidualmente en el Editor de Logros (Achievement Editor).

Significados mas comunes de botones de bit en la memoria de un juego:

- tienes un item
- boton presionado (muy comun)
- area explorada
- secuencia del juego activated
- cheat activado
- modo demo activo

En el visor de memoria solo puedes ingresar valores hex, entonces es importante conocer la importancia entre valores con notacion hexadecimal y binaria. Puedes ver en la tabla de "[Notaciones Decimales, Binarias y Hexadecimales](#Notaciones-Decimales,-Binarias-y-Hexadecimales)" , pero lo usual es usar una calculadora (la calculadora default de MS Windows en modo programador puede hacer el trabajo)

#### Upper4 y Lower4

**Upper4** son los cuatro bits superiores de un byte (bit: 7, 6, 5, 4), mostrados como un solo caracter hexadecimal. **Lower4** son los cuatro bits inferiores de un byte (bit: 3, 2, 1, 0), mostrados como un solo caracter hexadecimal.

Observando el [diagrama de tamaño de memoria](#diagrama-de-tamaño-de-memoria) de abajo, un byte en la direccion `0x00a274` es seleccionado (valor `0x23`). El primer caracter, `2` es el valor Upper4. El segundo characterr `3` es el valor Lower4.

Ocasionalmente solo vas a estar interesado en trabajar con solo un digito hexadecimal. Utilizando el [diagrama de tamaño de memoria](#diagrama-de-tamaño-de-memoria) como un ejemplo, como una condicion de un logro donde `Upper4 0x00a274 = 0x2` seria verdadera. Una condicion donde`Lower4 0x00a274 = 0x3` seria verdadera.

### Diagrama de Tamaño de Memoria

![memsizes](/public/memsizes.png)
