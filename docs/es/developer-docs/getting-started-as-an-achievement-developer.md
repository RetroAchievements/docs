**Bienvenido al mundo de Creacion de Logros!**

## Conceptos Basicos

Tecnicamente **un logro es un grupo de condiciones que tienen que ser cumplidas en un punto particular en un video juego**.

Cuando abres un juego en un emulador con las funciones de RetroAchievements, el emulador esta siempre checando si esas condiciones se cumplen en el punto exacto. Cuando todas las condiciones de un logro en particular son cumplidas, se dispara el logro y el emulador deja de checar las condiciones para ese logro.

El proceso de creación de un logro basicamente se divide en 3 pasos:

1. Encontar un lugar en la Memoria RAM del juego donde se almacene la informacion que buscas (ejemplos: nivel, barra de vida, tiempo, monedas, sacar un arma, obtener un item, etc.).

2. Crear las condiciones que tienen que ser cumplidas para que se dispare el logro.

3. Probar si tu logro funciona como es debido.

La mayoria de las veces vaz a tener que volver al punto 2 y 3 muchisimas veces para refinar la logica de tu logro.

En este documento vamos a ver como lograr los pasos de arriba.

Una vez que estes seguro que tu logro esta saltando con las condiciones que tu quieres, puedes subirlo al servidor. Vamos a ver mas sobre eso en un momento.

## Primeros Pasos

Antes que nada necesitas estar seguro que tienes un emulador de RA de la [pagina de descargas de RetroAchievements](http://retroachievements.org/download.php) y tambien haberte [creado una cuenta](http://retroachievements.org/createaccount.php) para poder iniciar seccion en el emulador.

En esta guia vamos a utilizar RAGens como demostracion, y el juego [Sonic the Hedgehog](http://retroachievements.org/Game/1). Estamos utilizando RAGens pero lo mismo aplica para cualquier otro emulador.

Para empezar abre el ejecutable de RAGens, e inicia seccion cuando salga la venta de inicio. Siguiente, ve a File -> Open y selecciona el ROM del que quieres trabajar los logros.

## Inspector de Memoria

Ahora deberias tener en tu ventana principal corriendo Sonic. Hay otras 3 ventanas que vamos a estar utilizando, que se pueden encontrar sobre la pestaña de **RetroAchievements** en el menu. Vamos a trabajar con el **Inspector de Memoria** primero:

![memoryinspector](https://user-images.githubusercontent.com/8508804/38775207-485b706e-4053-11e8-9a94-842e7fd838e1.png)

El inspector de memoria se puede utilizar para encontrar variables en la RAM que podamos utilizar. Esencialmente estas en una caseria de tesoros por encontrar los lugares en memoria - esta ventana te ayudara a examinar y filtrar la RAM del juego que se encuentra corriendo.

**NOTA: Si deseas un video paso por paso explicando como encontra valores en la memoria, [este viejo video](https://www.youtube.com/watch?v=8nYb_5cgQHY) puede llegar a ser util**.

**Tambien mira**: [Un vistaso al Inspector de Memoria](/es/developer-docs/memory-inspector.html) y [Tips en la busqueda de Memoria](/es/developer-docs/tips-and-tricks.html#memory-digging-tips).

Para empezar o reiniciar una prueba, haz click en **New 8-bit Test** en la parte casi superior del medio.

Para manter las cosas simple, vamos a empezar a buscar el valor en memoria que guarda el numero de anillos que hemos recolectado. Nuestros pasos son los siguientes:

1. Carga el ROM y empieza una nueva partida.

2. Resetea la ventana de memoria: Haz click en **New 8-bit Test**.

3. Regresa al juego y cambia el numero de anillos en la memoria. Por ejemplo, colecciona un anillo

4. En la ventana de memoria, ahora vamos a filtrar los valores que son 'mas grandes que los antiguos valores' (simbolo `>`). Seleccionamos esto y, entonces hacemos click en **Filter**.

Cuando ya estes haciendo esto por una 3ra y 4ta vez, el numero de posibilidades o 'candidatos' va a ir disminuyendo. Vamos a seguir haciendo esto asta que lleguemos a un numero muy pequeño (el mas pequeño que sea posible), puede llegar a tomar entre 4-5 intentos. Ahora podemos hacer click en la ventana de resultados, y monitoriar los valores en memoria, hasta abajo en el visor de memoria. Continua en el juego y deberias de ver como los valores en la memoria cambian cada vez que coleccionas anillos. Si no es asi, o si algo no se ve bien, intenta otro valor. Con el primer Sonic the Hedgehog, el valor en memoria para el numero de anillos deberia de ser `0xfe20`.

- **Nota 1**: Utilizando estados de guardados (save states)(F5 para salvar un estado, F8 para cargar un estado, F6-F7 para cambiar que estados utilizar), puedes brincar entre estados de guardado permitiendo esto alterar la RAM, y utilizarlo para filtrar malos candidatos. Puedes buscar resultados que permanescan iguales (Es decir si es que sabes que un valor no tuvo que haber cambiado, utiliza `=`), o para valores que son diferentes (utiliza 'no igual', simbolo `!=`).

- **Nota 2**: Afortunadamente no hay una garantia de un juego a otro para saber como los desarrolladores almacenaban la informacion (4-bit, 8-bit, 16-bit, decimales con codigo binario, negativo/invertido. Por ejemplo utilizando 0xff/0xffff para representar 'fijo', o algo completamente aleatorio), pero eventualmente deberias de encontrarte con varios buenos valores. Nota si estas batallando en encontrar buenos valores, postea en el [Foro de Ayuda de RetroAchievements.org](http://retroachievements.org/viewforum.php?f=15), o en el [Servidor de Discord de RetroAchievements](https://discord.gg/dq2E4hE). Hay bastante gente que estaria dispuesta en ayudarte con mucho gusto!!

- **Tip**: Si te gusta experimentar con la memoria, intenta ingresar valores directamente en el visor de la RAM. Esto puede causar efectos devastadores en un juego, o podria hacer exactamente lo que deseas que pase, (o inclusive nada!) De todos modos podria ser util, ver si ingresas un valor y paso el resultado que esperas. Utilizalo con cuidado!

Cuando encuentres un valor del que te sientes feliz con el, puedes escriber una pequeña nota de lo que es haciendo click en **Save Note**, esto lo va a guardar en la base de datos, y va a ser automaticamente cargado la siguiente vez que cargues el visor de memoria para ese juego, donde sea que te encuentres! Nota despues que haces click en 'Save Note', la nota va a ser automaticamente guardada en la base de datos y compartida, la cual todos los desarrolladores tendran acceso a ella. Todos van a descargar esa nota cuando carguen su ROM. Si intentas sobre-escribir una nota, te va a salir una ventana de confirmacion antes de guardarla.

Puedes encontrar mas utiles [Tips en Busqueda de Memoria aqui](/es/developer-docs/tips-and-tricks.html#Tips-en-Busqueda-de-Memoria).

## Sets de Logros

Ok asi que el valor en memoria para el numero de anillos se encuentra almacenado en `0xfe20` - nota para un no-programador, estamos manejando numeros en el [sistema numerico Hexadecimal](https://es.wikipedia.org/wiki/Sistema_hexadecimal) que puede llegar a ser desalentador, pero no te preocupes, esencialmente simplemente son numeros y letras en vez de solo numeros, y no olvides `0x` al principio para mostrar que es un valor en memoria en hexadecimal. Hemos encontrado un valor en el que estamos interesado y lo hemos guardado con **Save Note**. Ahora queremos crear un nuevo logro.

Ve a la pestaña de **RetroAchievements** en el menu de tu emulador, escoje **Achievement Sets** y vas a ver esta ventana:

![achievement_sets](https://user-images.githubusercontent.com/8508804/43732267-8be35738-9987-11e8-9203-c5cae1221562.png)

Aqui agrupamos todos los logros disponibles en tres sets:

1. Logros Core (los principales, set publico de logros),

2. Unofficial/User Achievements (publicos, pero no otorgan puntos: para revision),

3. Local Achievements (personales, en tu PC).

En la venta de Logros, haz click en **Local Achievements** (superior izquierda), luego en **Add New Achievement** (superior derecha). Esto va añadir una entrada vacia en la lista del centro. Haz doble click en ella: si aun no esta abierta, esto deberia de abrir la ventana del **Achievement Editor** (editor de logros).

## Editor de Logros

A si es como se ve:

![achievement_editor](https://user-images.githubusercontent.com/8508804/33130013-0eb07d96-cf79-11e7-8f73-6d737dfe5e16.png)

Esta es la ventana final en la que vamos a poner toda la informacion junta. La mayoria de los campos de arriba se explican solos, ejemplo: Titulo, Descripcion, Puntos. La principal seria la parte de 'Requisitos'

Vamos a decir que queremos agregar un logro por coleccionar cierto numero de anillos. Vamos a decir 15 por simplicidad. Despues de llenar los campos de arriba y a ver seleccionado un icono apropiado (en este ejemplo estamos utilizando la medalla del trofeo dorado (00136), pero tu puedes subir una nueva), ocupamos llenar los requisitos. Tenemos un requisito, **ese numero de anillos tiene que ser minimo 15**. El siguiente click seria en **Add New Requirement**.

Clickear este boton va a agregar algunos valores por default a la lista de requisitos. Los valores por defaults simplemente se percatan que algo relativamente sensible se agrego a la lista. Por ahora, ignorando el campo 'Special?'. Cuando clickeamos en crear, el valor default en memoria va a ser el ultimo valor que dejaste en la ventana de memoria.

Lo siguiente seria cambiar estos valores a los siguientes:

- **Size**: `16-bit`
- **Memory**: `0xfe20`
- **Cmp**: `>=` - esta es la comparacion que vamos a hacer. Podemos tener cualquier comparacion aqui, pero es sencible que tengas un "mayor que e igual a". Esto es importante porque si tenemos 10 anillos y despues obtenemos 10 anillos de una caja de 10 anillos vamos a tener 20, y vamos a perder el logro ya que tendriamos que tener _exactamente_ 15 anillos.
- **Type**: `Value` - estamos comparando este valor en memoria con un valor fijo: 15
- **Size**: `Empty` - Esto es solamente relevante cuando estemos comparando valor en memoria con otro valor en memoria
- **Mem/Val**: `15` - el numero de anillos requirido: el valor del que estamos comparando la memoria
- **Hit Count**: `0` - ignora esto por ahora, es util cuando necesitas que algo paso un cierto numero de veces

Con esto establecido, no necesitamos ninguna otra condicion que agregar, asi que podemos regresar a **Achievements Dialog** (Ventana de Logros). Para estar seguros, tenemos que guardar nuestro progreso presionando **Save Local**! Esto guarda todo localmente para asegurar que no perdamos ningun progreso.

- **Nota**: usualmente un logro tiene mas de un requisito para evadir que salte en un momento equivocado (por ejemplo: jugando en modo demo). En este ejemplo estamos utilizando solamente un requisito para simplificar la explicacion. Mira mas [Tips en la Creacion de Logros aqui](/es/developer-docs/tips-and-tricks.html#Tips-en-la-Creacion-de-Logros).

## Probando el logro

Ahora podemos 'activar' este logro localmente presionando en **Activate** a mano derecha de la ventana. Esto va a empezar a monitoriar estos valores en memoria y va a entregar el logro una vez que todas las condiciones se hubieran cumplido de manera verdadera. Ahora podemos avanzar y probar si este logro sirve!

![testing_achievements](https://user-images.githubusercontent.com/8508804/32601362-83dcb788-c529-11e7-8df9-b79038408909.png)

Si presionamos `Esc` mientras jugamos, vas a ver como se miraria el logro desde la interfaz de RetroAchievements!

![testing_achievements2](https://user-images.githubusercontent.com/8508804/32601363-83fced8c-c529-11e7-885f-97d64b0384e5.png)

A pesar de que el logro funciono bien en nuestras pruebas, un logro con una logica como esa no esta listo para ser oficialmente lanzado. Primero que nada: tiene una sola condicion: "anillos coleccionados >= 15". El problema es que ese mismo valor es el mismo que se utiliza para almacenar el numero de anillos cuando el juego corre en "modo demo" (Cuando la computadora juega el juego automaticamente cuando duras mucho tiempo en la pantalla de titulo). A si que, si Sonic colecciona 15 anillos en modo demo el logro tambien saldria, que es algo que no queremos.

Checa los tips en la siguiente seccion de abajo para conocer como mejorar la logica de tu logro y hacerlo aceptable para que sea oficialmente lanzado.

## Tips Importantes

Aqui estan algunos tips que tienes que tener en mente cuando te encuentres creando logros:

- **~~Nunca~~ Evade hacer logros con una sola condicion lo mas que puedas**. De otra manera es muy probable que el logro se dispare en una parte no deseada. Este es el **error mas comun por un desarrollador**

- Si el juego tiene un **modo demo** (El CPU juega despues que esperas un tiempo en la pantalla de titulo), percatate de [encontrar el valor para eso](/es/developer-docs/tips-and-tricks.html#finding-the-address-for-demo-mode) y agrega una condicion para que tus logros no se disparen en modo demo. Tambien necesitas saber como utilizar [PauseIf](/es/orphaned/achievement-logic-features.html#pauseif) y [ResetIf](/es/orphaned/achievement-logic-features.html#resetif).

- **[PauseIf](/es/orphaned/achievement-logic-features.html#pauseif) cheat codes**: Si el juego tiene un cheat para aumentar vidas, seleccionar niveles, etc. Percatate de encontrar el valor para eso y agregar algo de proteccion en tus logros. OK, talvez no es un tema muy sencillo, pero es algo que tienes que tener en cuenta cuando estes creando un set oficial de logros.

- **Evita crear logros de simplemente llegar a un nivel.** Esto puede ser conseguido por medio de un password o un cheat. Mejor haz logros por terminar un nivel, [como en la plantilla de aqui](/es/developer-docs/achievement-templates.html#finish-level-n). Tambie, **no hagas logros por simplemente empezar un juego o "empieza el juego con X personaje"**.

- Si quieres crear un logro por conseguir un item especifico y unico, agrega algunas condiciones para estar seguro que el jugador obtuvo el item donde se suponia que se tenga que obtener, [como en esta plantilla de aqui](/es/developer-docs/achievement-templates.html#collect-an-item-in-a-specific-level). De otra manera el logro podra ser conseguible utilizando un codigo o cargando una partida de cargado.

- **Evita hacer muchos logros sobre simples cosas que necesitan casi cero esfuerzo**. Ejemplos de que **NO** tienes que hacer: obten una moneda o un hongo en Super Mario Bros.

- Ten encuenta los [conceptos no-bienvenidos en el diseño de logros](/es/guidelines/developers/code-of-conduct.html#unwelcome-concepts).

- **Se creativo con tus logros**. Esos que abarcan caracteristicas y detalles unicos son los mas bienvenidos. Los jugadores aman cuando un pequeño detalle de un juego que aman es apoyado por un logro. Leer un Walkthrough en [GameFAQs](https://gamefaqs.gamespot.com/) te puede dar un poco de inspiracion tambien.

- Intentar pasar la mayor cantidad de tiempo posible con el juego, especialmente si es la primera vez que desarrollas logros. Toma mas tiempo conocer el juego por dentro, trabajar con la memoria funciona ya que es la mejor fuente de ideas para logros unicos.

Puedes encontrar mas en la [pagina de Tips y Trucos](/es/developer-docs/tips-and-tricks.html).

## Siguientes pasos

Ahora que ya sabes como utilizar el Inspector de Memoria, y el Editor de Logros. Llego la hora de que aprendas nuevas tecnicas y practiques:

- En orden que refines la logica de tus logros, puedes ver con que funciones cuentas en la pagina de [Funciones en la Logica de los Logros](/es/orphaned/achievement-logic-features.html).

- Puedes aprender viendo logros existentes que otros desarrolladores han hecho con una explicacion extra en la pagina de [Ejemplos Reales](/es/developer-docs/real-examples.html).

- Tambien puedes ver algunos ejemplos genericos en la pagina de [Plantillas para Logros](/es/developer-docs/achievement-templates.html).

- Una vez que hubieras aprendido todas las tecnicas basicas, si quieres obtener el estatus de Desarrollador tienes que seguir los pasos explicados aqui: [Como convertirme en un desarrollador de logros](/es/developer-docs/how-to-become-an-achievement-developer.html).

Que te diviertas!
