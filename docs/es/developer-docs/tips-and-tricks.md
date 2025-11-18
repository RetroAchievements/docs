## Tips en la Búsqueda de Memoria

También mira: [Un vistazo al Inspector de Memoria](/es/developer-docs/memory-inspector).

- Empieza con la vista de 8-bit en el Visor de Memoria. Buscar pedazos grandes de memoria solo complica las cosas, pero haría un trabajo mas fácil para un desarrollador experimentado. Si tu estas empezando y no estas consciente de términos como **endianess** y **bit ordering** (o cuando los ojos están cansados), es mejor hacer observaciones usando la vista de 8-bit. Es simplemente mas fácil!

- **Desmarca la casilla "Show Decimal Values"** en el Editor de Logros (Achievement Editor) para así poder introducir los valores hex que encuentres en el Visor de Memoria (Memory Viewer). Es mejor que estar utilizando una calculadora de programador!

- Si encuentras una variable, también busca en los alrededores de la misma podrías encontrar muchas variables utiles.

- Puedes introducir valores en el Visor de Memoria para ver si afectan al juego.

- Incluso si algo esta visiblemente decrementando en el juego, como la vida, la memoria podría tener diferencias. Podría ser posible que este incluso incrementando, así que como es algo de lo que no estas del todo seguro, es preferible que utilices los filtros `!=` y `=`.

- Si tu absolutamente no puedes reducir los resultados de un filtro, puedes intentar adivinar algunos valores o mínimo como esta actuando ese valor (`>` o `<`). Por ejemplo, cero vida es usualmente `0`, Stage 1 es usualmente el valor `0`, Stage 2 es usualmente el valor `1` dependiendo el tipo de juego.

- **Vista de 16/32 bit**: Recuerda que cuando trabajas con variables de 16 o 32 bit las variables de la derecha son primero. Por Ejemplo: si en 8bit se mira de esta manera `AB CD WX YZ`, en 16 bit se convierte en `CDAB YZWX` y en 32 bit se convierte en `YZWXCDAB`. A esto se le llama "[ordenado de bits little endian](https://es.wikipedia.org/wiki/Little_endian)". Sin preocupaciones puedes ignorar esta platica geek, solamente recordando que las cosas se almacenan **al revés** en la vista de 16 bit y superiores.

- **Bit fields**: Utiliza single bits para cosas que solamente cambian en un bit. En el Inspector de Memoria (Memory Inspector), cuando una variable es seleccionada, vas a encontrar `Bits: 7 6 5 4 3 2 1 0` arriba de las variables. Y abajo de esos números va a ver ya sea un `0` o un `1`, así como `0 0 1 0 0 0 1 1` en la imagen de abajo. Si `bit5` tiene un `1` arriba de el, entonces `bit3=1` para esa variable. El uso de Single bit es muy común en un juego para items/eventos/desbloqueos/etc. Tal vez suene un poco confuso , pero es muy importante que lo entiendas. Algunos juegos con espacio en memoria muy limite usan los campos de bits (Bit fields) muchísimo! Es una técnica importante de aprender.

![memsizes](/public/mem-inspector-size-diagram.png)

## Tips en la Creación de Logros

También mira: [Conceptos No-Bievenidos](/es/guidelines/developers/code-of-conduct#conceptos-no-bienvenidos) y [Diseño de Logros](/es/developer-docs/achievement-design).

- **~~Nunca~~ Evita utilizar solo una condición lo mas que puedas**. Cuando utilizas solo una condición el logro es muy probable que salga en el momento equivocado. Este es el **error mas común de un desarrollador**.

- Si el juego tiene un **modo demo** (El CPU juega después que hubieras esperado un tiempo en la pantalla de titulo), percatate de buscar la variable para ello y agrega la condicion para que tus logros no salgan en modo demo. Tal vez necesites saber como se utiliza un [PauseIf](/es/orphaned/achievement-logic-features#pauseif) y [ResetIf](/es/orphaned/achievement-logic-features#resetif).

- **`PauseIf` cheat codes**: Si el juego tiene un cheat code para incrementar vidas, seleccionar stages, etc. Percatate de encontrar las variables para ello y agregar alguna especie de protección a tus logros.

- Si quieres crear un logro para **colecciona un ítem único y especifico** en el juego, agrega algunas condiciones para asegurarte que el jugador consiguió el ítem donde se supone que se tiene que conseguir, [como en este ejemplo de aquí](/es/developer-docs/achievement-templates#colecciona-un-item-en-un-nivel-en-especifico). De otra manera podría saltar utilizando un password, cargando un archivo de guardado, etc.

- **Condiciones Ó**: si necesitas condiciones Ó, vas a necesitar [Alt groups](/es/orphaned/achievement-logic-features#alt-groups).

- **Evita el exceso de Logros**. Si un juego tiene 100 levels, no hagas un logro por cada nivel. Haz cada 25 o parecido. Considera el tiempo en el que un jugador casual podría desbloquear esos logros. Si generalmente puedes desbloquear todos los logros de un set de progreso en medio hora y siendo un jugador casual, eso es diseño de puro relleno, y no es recomendable.

- **Se Creativo y Divertido**: Se lo mas creativo posible con tus logros. "Vence a X sin utilizar/hacer Y", "Vence a X en 5 segundos", "pásate el juego con solo 3 corazones". Ten en mente que incluso el jugador casual puede sacarse todos los logros si pone su mejor esfuerzo. No es divertido para un jugador casual si es demasiado difícil! (Mira: **Tips para Sets Bonus** mas abajo para retos de verdad!). Hay una pagina completa sobre [Diseño de Logros](/es/developer-docs/achievement-design) hay puedes conseguir buenas ideas para pensar en como hacer buenos logros.

- **Glitchless, por favor!**: No hagas logros donde requieras el uso de glitches. Glitches, en la mayoría de los casos, corrompen y destabilizan la RAM y memoria del juego. Para agregar básicamente rompen todo el set de logros. Por eso es, sabio agregar protección a esto para así detener a los jugadores de utilizarlos y conseguir los logros fácilmente.

- **Evita utilizar solamente texto y gráficas**: La mayoría de las veces, un logro que requiere que pase cierto evento especial puede estar atado a una event flag (usualmente un single bit or byte), o a un objeto recibido por el jugador. Es mucho mejor utilizar estos valores que utilizar el ID de texto que se muestra en la caja de texto, o, mucho peor, RAM de vídeo (memoria atada a los gráficos que se muestran en pantalla) ya que muchas veces son menos estables. Especialmente en versiones diferentes del juego, y son mas difíciles de trabajar.

- **Amamos el Arte**: Badges bonitos son badges que dan gusto conseguir! Tiene que representar visualmente el logro en si, o una pista de acuerdo a la ubicación en el juego para evadir secretos. Que estén a la par con el estilo de arte del juego funciona muy bien. Buscar en Google Imágenes "Sprite Sheets" es un tip muy útil para incluir arte del juego. Si eres un buen artista gráfico, sera tu tiempo de brillar actualizando badges! Puedes encontrar mas información en la [Pagina de Creación de Badges e Iconos](/es/guidelines/content/badge-and-icon-guidelines).

## Tips en tu estructura gramatical

- **No Símbolos**: No utilizas caracteres de acentos/especiales como la `é` en Pokemon, ya que actualmente rompen algunas cosas (como el feed). Cambien no son visibles en la búsqueda si no se introduce el carácter especial. Lo mismo para códigos universales de Emoji UTF-8. **Excepción Permitida**: [Scripts de Rich Presence](/es/developer-docs/rich-presence).

- **Cuida tu Ingles**: evita errores ortográficos. Como RetroAchievements es una comunidad internacional, utilizar el Ingles para las Notas de Código es una buena practica, ya que otro desarrollador puede utilizar tus notas en un futuro.

## Trucos

### Encontrando la variable para el Modo Demo

Un truco usual para empezar a filtrar valores para encontrar el Modo Demo es dejar que empieze y asi empezar a filtrar con `=` "Last Known Value" y presionar "Filter" suficiente veces, deteniéndote una vez que el demo hubiera terminado (ten cuidado de no filtrar después que se hubiera terminado el demo).

Ahora empieza el juego de manera normal y cuando tengas control del personaje cambie el filtro a `!=` y filtra _solo una vez_. Los valores que se filtraron son los que cambiaron desde el modo demo.

Ahora cambien el filtro de regreso a `=` y entonces inicia una secuencia de jugar-y-filtrar. Que significa juega un poco, muévete por el escenario, derrota algunos enemigos, y entonces filtra.

**Pro tip**: Es muy muy muy útil tener estados de guardado (savestates) en diferentes niveles del juego, ya que puedes hacer lo de jugar-y-filtrar en diferentes escenarios y hacer el filtrado mas efectivo.

Después de conseguir algunas variables como resultado, por lo general el valor de demo es igual a `1` (algunas veces también es `ff`). Si encuentras una dirección potencial editala a `0` y checa si eres capaz de mover al personaje. Si sí, BINGO!, esa es la variable que estabas buscando.

### Observador de Variables (Address Watcher)

Aquí un truco fácil utilizando un logro de prueba para observar si una variable tiene cambios, que es algo que tu vas a querer saber comúnmente.

![Dummy achievement example](/public/dummy-achievement-example.png)

**Condiciones Explicadas**

1. `Valor 1 = Valor 0`; Esto es para prevenir que el logros jamas sea verdadero, ya que el valor 0 nunca va a ser igual a 1.
2. `Valor 1 = Valor 1`; Para que funcione este truco el logro necesita hits para que se resetee. Cuando 1 = 1 hits serán agregados a la condición.
3. `ResetIf Mem 0x10 != Delta 0x10`; Esta es la variable que quieres observar. Cada vez que hay un cambio el logro se va a reiniciar.

- Por ultimo checa que las casillas de `Pause on Reset` y `Active` estén marcadas. Ahora vas a conseguir un pop-up y la emulación se va a pausar cada vez que la variable cambie.
