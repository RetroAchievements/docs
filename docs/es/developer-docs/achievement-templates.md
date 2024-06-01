## **PRECAUCIÓN: CADA JUEGO ES DIFERENTE!**

Aquí encontraras varios ejemplos de varios logros típicos. Puedes utilizarlo como una inspiración para crear tu propio logro. Pero ten en mente lo siguiente:

**CADA JUEGO ES DIFERENTE! La memoria tiene un comportamiento diferente de juego en juego.**

A si que **NO** tomes estas plantillas como una regla. Simplemente son para motivos educativos.

En estos ejemplos utilizamos la siguiente definición, **0xNIVEL** es el valor en memoria que representa el ID del Nivel; **0xVIDA** es el valor utilizado para la vida de nuestro personaje; **0xTIEMPO** para el tiempo, **0xITEM** por obtener un item, etc...

## Coleccionando un Item N veces

Abra situaciones en las que quieras otorgar un logro por coleccionar un item (como una moneda o anillo) N numero de veces. Vas a necesitar encontrar el valor en memoria responsable en contar cuantas veces tienes un item. Una vez que tengas la variable, esta lógica usualmente hace el trabajo:

| ID  | Special? | Memory     | Cmp | Type  | Mem/Val    | Hits |
| --- | -------- | ---------- | --- | ----- | ---------- | ---- |
| 1   |          | 0xCONTADOR | >   | Delta | 0xCONTADOR | (N)  |

Pero es mas probable que quieras ser mas especifico, por ejemplo "obtén el item N veces sin morir". Entonces tendrías que utilizar otra condición con un `ResetIf`, de la siguiente manera:

| ID  | Special? | Memory     | Cmp | Type  | Mem/Val    | Hits |
| --- | -------- | ---------- | --- | ----- | ---------- | ---- |
| 1   |          | 0xCONTADOR | >   | Delta | 0xCONTADOR | (N)  |
| 2   | ResetIf  | 0xVIDAS    | <   | Delta | 0xVIDAS    |

La condición del `ResetIf` podría ser "mientras estés en el nivel X", "sin utilizar una bomba", etc.

## Termina el Nivel N

En este ejemplo queremos otorgar el logro cuando el jugador termino el nivel `N` y pasa al nivel `N+1`.

| ID  | Special? | Memory  | Cmp | Type  | Mem/Val | Hits |
| --- | -------- | ------- | --- | ----- | ------- | ---- |
| 1   |          | 0xNIVEL | =   | Value | N       | (1)  |
| 2   |          | 0xNIVEL | =   | Value | N+1     |
| 3   |          | 0xNIVEL | >   | Delta | 0xNIVEL |
| 4   | ResetIf  | 0xNIVEL | =   | Value | TITULO  |

**Requisitos**

- 1: En el nivel `N` mínimo una vez
- 2: Actualmente en el nivel `N+1`
- 3: El nivel a incrementado
- 4: Resetea el contador de hit cuando se vuelva a la pantalla de titulo

El valor **0xTITULO** significa "en la pantalla de titulo del juego". Tu necesitas poner un `ResetIf` en la pantalla de titulo para evitar que se dispare en el momento equivocado.

Aqui hay un ejemplo de una situacion de un juego en el que podria hacer que el logro se dispare en el momento equivocado si no estuviera el ResetIf:

1. Empieza el juego y llega al nivel 2 (esto hace que el contador valla a 1)
2. Obtiene un game over mientras estaba en el nivel 2
3. Vuelve a la pantalla de titulo
4. Utiliza una contraseña para llegar al nivel 3

Si no utilizamos el ResetIf tendríamos estas condiciones:

1. Hit nivel 2: VERDADERO
2. Nivel actual = nivel 3: VERDADERO
3. Nivel incrementado (de pantalla de titulo/passwords a nivel 3): VERDADERO

Y seria lo suficiente para que el logro se dispare (en un momento equivocado). Por eso estamos utilizando el ResetIf en este ejemplo.

## Termina el Nivel N antes de que el tiempo llegue a T

En este ejemplo vamos a considerar un juego en el que el tiempo decrementa (ej.: Super Mario Bros). Adapta el logro de acuerdo al comportamiento del tiempo de tu juego.

Queremos premiar el logro si el jugador termina el nivel `N` mientras el tiempo es mayor que `T`.

| ID  | Special? | Memory   | Cmp | Type  | Mem/Val | Hits |
| --- | -------- | -------- | --- | ----- | ------- | ---- |
| 1   |          | 0xNIVEL  | =   | Value | N       | (1)  |
| 2   |          | 0xNIVEL  | =   | Value | N+1     |
| 3   |          | 0xNIVEL  | >   | Delta | 0xNIVEL |
| 4   | ResetIf  | 0xNIVEL  | =   | Value | TITULO  |
| 5   |          | 0xTIEMPO | >=  | Value | T       |

**Requisitos**

Los Requisitos 1-4 son los mismos que la plantilla [Termina el Nivel N](#termina-el-nivel-n).

- 5: el contador es mas grande que `T`.

**Ten en cuenta que mas allá de saber como funciona el contador en tu juego también necesitas saber como se maneja en la memoria del juego.**

## Termina el Nivel N sin Morir (o sin que te peguen, usar un arma, etc.)

| ID  | Special? | Memory     | Cmp | Type  | Mem/Val     | Hits |
| --- | -------- | ---------- | --- | ----- | ----------- | ---- |
| 1   |          | 0xNIVEL    | =   | Value | N           | (1)  |
| 2   |          | 0xNIVEL    | =   | Value | N+1         |
| 3   |          | 0xNIVEL    | >   | Delta | 0xNIVEL     |
| 4   | ResetIf  | 0xNIVEL    | =   | Value | TITULO      |
| 5   |          | 0xPANTALLA | =   | Value | NVL_N_INTRO | (1)  |
| 6   | ResetIf  | 0xVIDA     | <   | Delta | 0xVIDA      |

**Requisitos**

Los Requisitos 1-4 son los mismos que los de la plantilla [Termina el Nivel N](#termina-el-nivel-n).

- 5: un checkpoint para representar el punto donde el jugador se supone que empieza el reto sin perder una vida. Si el nivel tiene una pantalla de intro por nivel, este puede ser un buen checkpoint.
- 6: se resetea el hit count si la vida se decrementa.

El requisito 6 también puede ser utilizado para resetear el si se utiliza un arma, se recibe daño, o cualquier otra cosa que NO quieras que el jugador haga.

## Termina el Nivel N con un Item

| ID  | Special? | Memory  | Cmp | Type  | Mem/Val   | Hits |
| --- | -------- | ------- | --- | ----- | --------- | ---- |
| 1   |          | 0xNIVEL | =   | Value | N         | (1)  |
| 2   |          | 0xNIVEL | =   | Value | N+1       |
| 3   |          | 0xNIVEL | >   | Delta | 0xNIVEL   |
| 4   | ResetIf  | 0xNIVEL | =   | Value | TITULO    |
| 5   |          | 0xITEM  | =   | Value | VERDADERO |

**Requisitos**

Los Requisitos 1-4 son los mismos que los de la plantilla [Termina el Nivel N](#termina-el-nivel-n).

- 5: el jugador tiene un item

## Colecciona un item en un nivel en especifico

Esta plantilla es para salvados de batería o protección contra passwords para items. Evita premiar "obten x item" cargando cuando el jugador ya cuenta con ese item. Checa que el item se obtenga en nivel/habitacion donde se supone que tenga que ser obtenido, y solo lo premia cuando se hace de esa manera.

| ID  | Special? | Memory  | Cmp | Type  | Mem/Val                   | Hits |
| --- | -------- | ------- | --- | ----- | ------------------------- | ---- |
| 1   |          | 0xITEM  | =   | Value | FALSO                     | (1)  |
| 2   |          | 0xITEM  | =   | Value | VERDADERO                 |
| 3   | ResetIf  | 0xNIVEL | !=  | Value | nivel donde se colecciona |

**Requisitos**

- 1: No tener el item cuando se entra al nivel en el que se obtiene, el hit es un checkpoint asi que 1&2 pueden ser verdaderos al mismo tiempo.
- 2: Tener el item
- 3: Resetea el hit counter si se esta en un nivel diferente del cual se obtiene el item

Los Requisitos 1 y 3 juntos significan "llego al ID de nivel/habitacion sin el item".

Incluso si el jugador carga un estado de guardado y va al nivel requerido el no seria capaz de añadir hits a la condición 1, ya que no se pueden conseguir solamente por gameplay normal.

No necesita ser necesariamente un ID de nivel/habitación. Hay otros método para enfrentar este problema, por ejemplo ejemplo un valor en memoria único que solo ocurre cuando lo coleccionas. Etc.

## Colecciona 100% en algo

Esta es proteccion limitada de salvado de bateria /proteccion de password cuando el jugador coleccione 100% de algo como pasar cada stage en Super Mario world, u obtener 100% en el porcentaje de coleccionables en Super Metroid. Es necesario que el jugador no pueda simplemente cargar un save con 100% y obtener el logro de a gratis. (Como siempre hay otras maneras de enfrentar este problema también.)

| ID  | Special? | Type  | Memory                   | Cmp | Type  | Mem/Val                                       | Hits |
| --- | -------- | ----- | ------------------------ | --- | ----- | --------------------------------------------- | ---- |
| 1   |          | Delta | 0xPorcentajeColeccionado | <   | Value | valor 100%                                    |
| 2   |          | Mem   | 0xPorcentajeColeccionado | =   | Value | valor 100%                                    |
| 3   | PauseIf  | Mem   | 0xEstadoJugador          | !=  | Value | Modo especifico/punto donde % es incrementado |

Usar la variable y el valor indicado en la condición 3 es especialmente importante. Necesitas encontrar una variable que represente un momento único en el juego cuando este porcentaje aumenta. Tu no quieres que el logro salte cuando el jugador cargue su archivo de guardado, que quiere decir que el logro tiene que ser pausado en ese momento.

**Ejemplo**: En Super Mario World este cambio pasa cuando el jugador observa el mapa del mundo después de a ver completado un stage.

**Nota:** Este comportamiento es similar y el resultado a [Colecciona un item en un nivel en especifico](#colecciona-un-item-en-un-nivel-en-especifico).

## Evitando el Problema de que un Contador se Incremente Dos Veces en el Mismo Frame

En [Coleccionando un item N veces](#coleccionando-un-item-n-veces) estamos contando que tantas veces este contador aumenta. Pero en algunos juegos hay algunas situaciones en el que el contador aumenta al doble en el mismo frame, y el hit counter se incremente solo por uno. Este comportamiento, obviamente, arruina nuestra lógica. Vamos a ver una manera para evitar este problema.

La técnica utilizada aquí se baza en otras dos:

- [Utilizando SubSource para Contar Incrementos Especificos](/es/developer-docs/flags/subsource#utilizando-subsource-para-contar-incrementos-especificos.html)
- [Bandera `AddHits`](/es/developer-docs/flags/addhits-subhits.html)

Aquí esta el truco:

| ID  | Special?  | Type  | Memory     | Cmp | Type  | Mem/Val    | Hits |
| --- | --------- | ----- | ---------- | --- | ----- | ---------- | ---- |
| 1   | SubSource | Delta | 0xCONTADOR |     |       |            |
| 2   | AddHits   | Mem   | 0xCONTADOR | =   | Value | 0x02       |
| 3   |           | Mem   | 0xCONTADOR | >   | Delta | 0xCONTADOR | (N)  |
| 4   | ResetIf   | Mem   | 0xVIDAS    | <   | Delta | 0xVIDAS    |

Podría verse un poco confuso a primera vista, pero talvez utilizando un ejemplo de verdad pueda ser todo mas claro. Checa [Evitar el Problema de que un Contador se Incremente Dos Veces en el Mismo Frame](/es/developer-docs/real-examples/circumvent-the-problem-of-a-counter-incrementing-twice-in-the-same-frame.html).

## Checar el cambio de un valor especifico a otro valor especifico diez veces

En este ejemplo queremos detectar que un valor cambie de `V1` a `V2` diez veces:

| ID  | Special? | Type  | Memory    | Cmp | Type  | Mem/Val   | Hits |
| --- | -------- | ----- | --------- | --- | ----- | --------- | ---- |
| 1   |          | Delta | 0xADDRESS | =   | Value | 0xV1      | (10) |
| 2   |          | Mem   | 0xADDRESS | =   | Value | 0xV2      | (10) |
| 3   | PauseIf  | Mem   | 0xADDRESS | =   | Delta | 0xADDRESS |

**Requisitos**

- 1: Si el valor en `0xADDRESS` en el frame anterior es `0xV1`, aumenta el hitcount (hasta 10).
- 2: Si el valor en `0xADDRESS` es igual a `0xV1`, aumenta el hitcount (hasta 10).
- 3: No aumente los hitcounts en 1 y 2 si cambian en `0xADDRESS`.

## Resets Condicionales

Resets Condicionales se pueden utilizar para muchas cosas.

Digamos que quieres tener un reset si el jugador entra a cierta zona X e Y del nivel:

**CORE**

- En el Core ira cualquier condiciones que necesites para que el logro sea verdadero. Tambien puede contener un Reset
  con comportamiento normal.

**ALT1**

| ID  | Special? | Type | Memory     | Cmp | Type  | Mem/Val      |
| --- | -------- | ---- | ---------- | --- | ----- | ------------ |
| 1   | ResetIf  | Mem  | 0xNIVEL    | =   | Value | NIVELID      |
| 2   | PauseIf  | Mem  | 0xX-COORDS | >   | Value | RESET-X-ZONE |
| 3   | PauseIf  | Mem  | 0xX-COORDS | <   | Value | RESET-X-ZONE |
| 4   | PauseIf  | Mem  | 0xY-COORDS | >   | Value | RESET-Y-ZONE |
| 5   | PauseIf  | Mem  | 0xY-COORDS | <   | Value | RESET-Y-ZONE |

- El reset solo va a pasar si todas las condiciones Pauseif no son verdaderas.
- El pause es local en el alt pero el reset resetea todo el logro.

**ALT2**

| ID  | Special? | Type | Memory | Cmp | Type | Mem/Val |
| --- | -------- | ---- | ------ | --- | ---- | ------- |
| 1   |          | Mem  | 0x1    | =   | Mem  | 0x1     |

- Cualquier condición que sea verdadera. (para satisfacer el comportamiento de un alt teniendo una condición que siempre es verdadera es necesaria)

- **Nota:** Puedes utilizar múltiples resets condicionales, cada uno en su propio alt group para tener un control mas grande del comportamiento de los reseteos.
