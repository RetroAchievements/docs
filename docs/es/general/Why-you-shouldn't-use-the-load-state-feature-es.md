**Nota**: actualmente el problema descrito solamente sucede en RetroArch.

## Hardcore/Softcore

Algunos usuarios les gusta utilizar la función de guardar/cargar estado para salvar su progreso en un juego. Puede que ya lo sepas pero, esta función no esta permitida cuando se juega en modo hardcore. Pero algunos usuarios no son jugadores hardcore y prefiero mantener el modo hardcore desactivado (vamos a llamar a este modo como softcore).

Algunas veces algunos usuarios [reportan](FAQ-es#no-obtuve-este-logro-o-lo-obtuve-en-un-momento-equivocado) que un logro no se desbloqueo, y cuando se les pregunta dicen que estaban jugando en softcore.

Una cosa que tienes que tener en cuenta es:

---

**Si utilizas la función de cargar estado espera tener problemas con los logros cuando no se disparan cuando se suponia que se tenían que disparar.**

---

Ahora vamos a intentar explicar para aquellos que no están muy familiarizados con los detalles sobre el desarrollo de logro y por que este tipo de problema ocurre.

## Concepto Básico detrás de un logro

**Técnicamente un logro es un grupo de condiciones que tienen que ser cumplidas en un frame en particular dentro del vídeo juego.**

Cuando abres un juego en un emulador con la función de RetroAchievements integrada, el emulador esta siempre revisando si las condiciones son cumplidas en el frame actual. Cuando todas las condiciones en el ese logro en particular son cumplidas, el logro es otorgado y el emulador deja de revisar si las condiciones para ese logro.

Ejemplos de condiciones:

- la barra de vida esta llena
- la barra de vida se bajo
- se tienen 9 vidas
- actualmente estas en el stage 3
- en la pantalla de titulo del juego
- se esta empezando una boss fight
- el juego esta pausado

El problema con softcore es que cuando cargas un estado de guardado puedes arruinar la lógica detrás del logro.

## Ejemplos

### Ejemplo 1: Completa el juego sin utilizar passwords

Imagínate un juego con 5 stages y con la función de password.

Tal vez las condiciones para que el logro "Completa el juego sin utilizar passwords" salte son (en un logro de verdad por lo general hay mas condiciones, pero para esta explicación vamos a considerar solamente estas):

- estar en stage 1 (y memoriza este evento como algo que paso)
- estar en stage 2 (memorizatelo)
- estar en stage 3 (memorizatelo)
- estar en stage 4 (memorizatelo)
- estar en stage 5 (memorizatelo)
- completa el stage 5

Entonces para conseguir este logro lo que necesitas es estar en todos los niveles al menos alguna vez y completar el juego.

Cuando estas en el stage 1, el emulador lo recuerda, y lo mismo para todos los demás stages. Y cuando terminas el stage 5 (completa el juego) obtienes el logro.

Ahora imagínate este escenario:

- un jugador softcore empezó el juego y jugo los stages 1, 2 y 3
- el necesitaba dejar de jugar cuando se encontraba en el stage 4 y entonces guardo un estado para continuar después
- cerro el emulador
- después el podía jugar de nuevo, empezó el juego y cargo el estado que había guardado
- jugo los stages 4, 5 y completo el juego

En este escenario el logro no saldría.

Después de cerrar el emulador el "olvida" lo que paso en los stages 1, 2 y 3. Cuando corres el emulador/juego de nuevo y cargas el estado en el stage 4, el emulador no va a detectar que pasaste por lo stages anteriores. Entonces el logro no se va a desbloquear.

### Ejemplo 2: Derrota al jefe X sin recibir daño

Lo mas probable es que la condiciones que tienen que ser cumplidas para que este logro salte son:

1. entra al cuarto del jefe (y memoriza este evento como algo que paso).
2. si se toma daño, olvida que se entro al cuarto del jefe.
3. derrota al jefe.

En otras palabras: para obtener este logro el emulador tiene que "saber" que entraste al cuarto del jefe, que no obtuviste ningún daño, y que venciste al jefe.

El detalle importante en el que tenemos que prestar atención es: cuando recibes algún daño, el emulador "olvida" que entraste al cuarto del jefe. Entonces incluso si cargaste un estado en algún punto en el que aun no recibías daño pero ya estabas dentro del cuarto del jefe, el emulador no va a detectar cuando entras por primera vez al cuarto. Y el logro no va a saltar.

## Ultimas Palabras

Cuando [reportes logros rotos](FAQ-es#no-obtuve-este-logro-o-lo-obtuve-en-un-momento-equivocado) da la mayor cantidad de detalles que sean posibles, **y no olvides si estabas o no jugando en hardcore**.

Si quieres solicitar que un administrador te otorgue un logro manualmente cuando este no se disparo, ten en cuenta proveer pruebas. Especialmente para logros como en los ejemplos de arriba (no recibir daño, no passwords, no muertes, etc).
