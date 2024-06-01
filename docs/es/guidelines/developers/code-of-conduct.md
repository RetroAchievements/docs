Este documento expone los derechos, responsabilidades y reglas para desarrolladores.

**Si tu no eres un desarrollador deberias checar [aqui, como me convierto en un desarrollador](/es/developer-docs/how-to-become-an-achievement-developer.html).**

**Checa tambien**: [Codigo de conducta del usuario](/es/guidelines/users/code-of-conduct.html).

## Reglas de Oro

1. Respeta a tu compañero desarrollador y comunica cualquier problema que tengas civilmente.
2. Haz espacio para otros desarrolladores puedan trabajar en juegos que ellos tambien quieren, en su propia manera.
3. Cualquiera puede convertirse en desarrollador si hace el suficiente esfuerzo.
4. Todos los sets de logros estan abiertos para mejoras.

## Resumen - Los Desarrolladores tienen que seguir lo siguientes puntos para estar en buenos terminos

- Cuando planees trabajar en un nuevo juego reservalo [anunciando el plan basico en el foro del juego](#announcing-your-plans-to-work-on-a-game) en un nuevo post.
- Solo anuncia nuevos planes cuando tu estes [libre de tickets](#handling-tickets). Sigue las [reglas de reservacion](#rules-on-reserving-games-for-development) tambien.
- Espera 3 dias despues que hubieras [posteado tus planes](#announcing-your-plans-to-work-on-a-game) para promober cualquiera de los logros a core.
- Manten tu trabajo libre de [conceptos-no bienvenidos](#unwelcome-concepts).
- Usa [codigo protectivo](#every-achievement-set-must-have) para prevenir cheating y exploits potenciales.
- Deja [notas de codigo](#code-notes) precisas para cada condicion de logro que utilices.
- Para revisiones de set, sigue la [politica de revision](/es/guidelines/content/achievement-set-revisions.html).
- [Resuelve tickets](#handling-tickets), y deja notas cada vez que lo hagas.
- **Una vez que publiques tu trabajo, estas dejando que la comunidad [reseñe y lo retrabaje a traves del tiempo](#achievementset-ownership).**

## Antes de empezar

### Estas libre de tickets?

Antes que trabajes en nuevos juegos tienes que resolver todos los tickets con los que cuentes. Una vez que estes libre tickets, entonces adelante.

### El juego esta presente en la base de datos?

#### No

Entonces pregunta para que sea agregado por medio de Discord **#help-me** o en nuestros foros para que algun desarrollador lo agregue por ti. Es esencial que tu [elijas el ROM(s) correcto para trabajar](/es/guidelines/content/working-with-the-right-rom.html). Si quieres trabajar en un hack, checa [logros para hacks de ROM](/es/guidelines/content/achievements-for-rom-hacks.html) doc first.

#### Si

Bien! adelante.

### El juego ya cuenta con un set de logros?

#### Yes

Si existe un set, no te rindas. Aun lo puede mejorar, agregando/removiendo/re-trabajando logros, o haz cambios a titulos e imagenes, etc. Sin embargo tendras que pasar por el [proceso de revision de tu set](/es/guidelines/content/achievement-set-revisions.html).

#### No

Busca delicadamente. Algunas veces hay multiples entradas en la base de datos para el mismo juego con diferente titulos. Una vez que este seguro, ahora necesitas checar si hay otro desarrollador trabajando en el juego.

**Nota:** Solo un set de logros es permitido por el mismo juego y consola. Para detalles mira [trabajando con el ROM correcto](/es/guidelines/content/working-with-the-right-rom.html).

### Hay otros desarrollor trabajando en el juego?

Para estar seguro que no hay otro desarrollador trabajando en ese juego, checa el foro oficial del juego (esa es la manera oficial de [reservar el juego en el que quieres trabajar](#rules-on-reserving-games-for-development)). Esto es necesario para evadir conflictos entre multiples desarrolladores trabajando en el mismo juego.

#### Si

Podria ser posible que el desarrollor hubiera dejado de trabajar en ellos. Se espera que el desarrollador renueve su reservacion cada dos meses. Mira en las etiquetas de tiempo para ver cuando el desarrollador postio su reservacion de desarrollo. Si el desarrollador no a clarificado o renovado su reservacion despues de que hubieran pasado dos meses puedes asumir que fue abandonado y asi postear tus planes de trabajo.

#### No

Perfecto! Adelante! El siguiente paso es anunciar tus planes para desarrollar logros para el juego.

## Anunciando tus planes para trabajar en un juego

Anunciar tus planes para el set de logros se hace en el foro oficial del juego del que tienes en mente crear el set.

Postear tus planes es tu manera de reservar oficialmente un juego, sin embargo hay algunas [reglas sobre el apartado sets](#rules-on-reserving-games-for-development) que tienes que tener en cuenta.

### Notas Importantes

- **No hay necesidad de que dejes un plan completo y detallado!** Simplemente una idea general de cuales son tus intenciones (tus planes son muy probables que cambien una vez que hubieras investigado la memoria del juego). Haz esto para que la comunidad pueda dejar recomendaciones y puede proveer retroalimentacion.

- Intenta estar abierto a recomendaciones. Si no estas de acuerdo con la retroalimentacion recivida, puedes continuar con tu concepto. Pero recuerda tener lo siguiente en mente:

  - Tienes que aderirte al [Reglamento de Diseño Basico de Logros](#basic-achievement-design-guidelines), de otra manera tu set no sera aprovado.
  - **Cuando tu publicas tu trabajo estas dejando a la comunidad para que sea reseñado y re-trabajado sobre el paso del tiempo.**

- Si alguien escogio un juego del cual tu estas interesado antes que tu, no te desesperes. Te animamos a solicitar una colaboración. Puedes publicar tu deseos de colaborar en el foro o mandar un mensaje al desarrollador para obtener permiso para que publique tus contribuciones. Tambien puedes esperar e ir por una [Revision de Set](/es/guidelines/content/achievement-set-revisions.html) after the set is published.

### Reglas para reservar juegos para desarrollo

Las siguientes reglas existen para saber facilmente quien esta trabajando en que, definir que es aceptable, prevenir que el desarrollo de juegos no se estanque, proteger a los desarrolladores de indebida presion social.

1. **La unica manera de reservar un juego es posteando tu plan en el foro oficial del juego en un nuevo post**.

   - No otros planes o listas posteadas en cualquier otro luegar son consideradas en esto.
   - Notas de codigo no reservan un juego (si agregaste notas pero no reservaste el juego en el foro, cualquier desarrollador es libre de trabajar en el).

2. Numero maximo de juegos reservados a la vez:

   - **Desarrollador Junior**: 1.
   - **Desarrollador**: 4.
   - **Desarrollador Veterano**: 8 (un Desarrollador Veterano es alguien que a sido un desarrollador por minimo 18 meses _y_ a publicado un minimo de 20 sets de logros).
   - _Nota:_ Trabajar en una revision aprovada o unirte con otro desarrollador en un esfuerzo cooperativo no cuenta para este total.

3. Solo reserva un juego para desarrollo cuando realmente ya vaz a empezar a trabajar en el. En otras palabras, no reserves juegos simplemenete para blockear otros usuarios en trabajar en ellos.

4. Puedes renovar tu reservacion cada dos meses (+/- 2 semanas) si no haz terminado tu set aun.

   - Para renovar tu reservacion, postealo en el foro oficial del juego.
   - No edites tus antiguas declaraciones, haz un nuevo post hablando del progreso actual.
   - Evita ignorar un set indefinidamente. Si parece que un desarrollador continua retrasando el desarrollo de un set con poco o sin progreso el staff puede intervenir.

5. No pidas, presiones o desalentes a nadie en trabajar en cualquier juego, en publico o en privado (claramente, asumiendo que la persona esta siguiendo todos los otros estandartes de este Codigo de Conducta).

6. Una vez que hubieras posteado tu plan, **espera un minimo de _72 hours_ antes de promover cualquier logro a Core**. Esto le da tiempo a la comunidad de renovar tu plan y dar retro-alimentacion. Este periodo de espera empieza despues que tu plan este presente y esta en su forma completa (o mayormente completa).

## Reglamento de Diseño Basico de Logros

### Conceptos No-Bienvenidos

Tu puedes (y deberias) se lo mas creativo que puedas, pero hay algunos conceptos que **NO** estan bienvenidos para logros, como:

- Requirir el uso de glitches (aceptable en [Sets Bonus](/es/guidelines/content/subsets.html)).
- Requieren dos jugadores.
- Requiere perfeccion por todo el juego (**talvez** aceptable in [Sets Bonus](/es/guidelines/content/subsets.html)).
- Morir (simplemente), o juega mal sin ningun proposito.
- Contenido no apropiado (NSFW) en la imagen o texto.
- Logros saltando frecuentemente con poco esfuerzo del jugador (incluyendo multiples logros por hacer la misma tarea, como vencer al jefe y otro por conseguir el item que dejo el jefe , etc.)
- Logros obtenibles con zero esfuerzo sin razon alguna (ejemplo: empieza el juego con x personaje, colecciona una moneda). Es acceptable si hay algo divertido/historico/interesante que quieres tocar.
- Se requiere grinding repetitivo y excesivo, asi como llega a level 99 en un RPG, sin razon alguna (**talvez** aceptable en [Sets Bonus](/es/guidelines/content/subsets.html)).
- Se basa completamente en suerte, especialmente cuando hay probabilidades realmente bajas. Sin embargo, para juegos que el factor aleatorio es un aspecto importante, podria ser apropiado.
- "Logros Secretos", cuando los jugadores no tiene indicacion de que es lo que tienen que hacer. Si quieres prevenir spoilers da minimo una pista en el titulo o descripcion. De otra manera los jugadores van a empezar a buscar en la web o van a moverle al editor de Logros/Inspector de Memoria, y en el proceso pueden incluso toparse con peores spoilers.

Con cada regla, hay un excepcion. Esta es especialmente verdad con conceptos no-bienvenidos. Todos los conceptos no-bienvenidos tienen un margen de aprovacion. cuando te encuentres en dudas puedes consultar con el equipo de administradores.

### Cada Set de logros TIENE que tener

**Proteccion** para situaciones donde los jugadores puedes conseguir logros sin esfuerzo, como:

- Modo Demo;
- Cheat codes en el juego;
- Archivos de guardado;
- Passwords.

**Tambien mira**: [Plantillas para logros](/es/developer-docs/achievement-templates.html) y [Ejemplos reales](/es/developer-docs/real-examples.html) para algunas tecnicas de proteccion bien conocidas.

### Cada Set de logros DEBERIA tener

- Minimo [Rich Presence](/es/developer-docs/rich-presence.html) basico;
- Medallas (Badges) para cada Logro;
- Todo la informacion del juego llena, e imagenes del juego subidas.

**Nota**: Rich Presence, Tablas de clasificacion, y paginas del juego imagenes/informacion solo pueden ser agregadas por verdaderos desarrolladores

### Recomendado pero no requerido por cada Set de logros

- Tablas de clasificacion para puntajes y retos de tiempo.
- Logros Perdidisos flageados, especialmente para RPGs y juegos largos.
  - Utiliza `[m]` al final del titulo del logro para flaggearlo como perdidiso.
- Una guia de logros. Guias pueden ser creadas y posteadas [aqui](https://github.com/RetroAchievements/guides/wiki).

### Herramientas para ayudarle a tener éxito

Tenemos un We have a [mapa](/es/developer-docs/set-development-roadmap.html) que puedes utilizar como guia para crear un buen set de logros.
Tambien tenemos una [guia de diseño de logros](/es/developer-docs/achievement-design.html) en como diseñar buenos logros, no el lado tecnico pero si el conceptual. Crear un set balanceado es uno de los aspectos mas dificiles de desarrollo, tenemos una [guia de balance de dificultad](/es/developer-docs/difficulty-scale-and-balance.html) que te podria ayudar en pensar como crear un set que fluya.

Es preferible y recomendado trabajar en un set a la vez. Pero si tienes mas, ten abiertas posibilidades para trabajar en equipo o incluso delegar la creacion de un set si otro desarrollador te contacta.

## Revisiones - Trabajando en Sets que ya cuentan con logros

Revisiones, si estas trabajando en un set que ya cuenta con logros tipicamente requiere aprovacion por la comunidad, presentando tu plan en el foro y en el canal de **#revision-voting** en Discord. No todos los cambios requieren aprovacion. Mira [Revisiones de Sets de Logros](/es/guidelines/content/achievement-set-revisions.html) para mas detalles.

## Notas de Codigo

Deja notas precisas para cada valor que utilizes en un logro. Esto te ayuda a ti y a otros de mantener el set libre de bugs.

Eres libre de agregar todos las notas que quieras en el juego sin incluso a ver declarado tus intenciones en trabajar en ese juego. Simplemente se cuidadoso en no borrar notas de codigo creadas por otros usuarios.

## Manejo de Tickets

**Despues que hubieras publicado tus logros preparate para reportes de bugs.**

Se supone que tienes que dejar tu trabajo libre de bugs con el manejo de tickets y resolviendolos. Responde a todos los tickets lo mas pronto posible. Mientras mas pronto mejor, porque el problema esta fuera de la mente del jugador y puedes utilizarlo como ayuda para resolver el problema tambien.

Mientras resuelves tickets, deja un pequeño resumen de lo que hiciste. Si tienes una indicacion o un reporte falso deja un mensaje cuales fueron tus conclusiones, y entonces cierra el ticket. **Cerrar/Resolver un ticket sin dejar ningun comentario es una actitud no-bienvenida.**

No declares tus planes de trabajar en un juego si cuentas con tickets abiertos.

Si tienes planeado resolver tickets o arreglar bugs en logros hechos por otro desarrollador, siempre es una buena practica intentar contactarlo si aun se encuentra activo antes de modificar su trabajo. **Un desarrollador inactivo es alguien que cuenta con 10 o mas tickets abiertos y tienen un minimo de dos meses de antiguedad** (puedes ver sus tickets abiertos desde el Ticket Manager).

Si el desarrollador esta activo, puedes simplemente hecharle una ayuda con la solucion.

Si el desarrollador esta inactivo puedes libremente resolverle sus tickets. Sin embargo solamente tienes permitido arreglar el logro con lo que dice en su descripcion; **no cambies la intencion de logro sin haber pasado por el proceso de revision**.

## Propiedad de los logros

**Cuando tu publicas tu trabajo tu se lo estas dando a la comunidad** para que sea reseñado y re-trabajado con el paso del tiempo - mira [Revisiones en un Set](/es/guidelines/content/achievement-set-revisions.html).

Aunque los logros publicados por un desarrollador no son propiedad de el, el aun es el encargado en terminos de arreglar y dar mantenimiento. Si otro jugador corrige el logro el es el nuevo encargado de ese logro.

## Retroalimentacion sobre el Codigo de Conducta del Desarrollador

A pesar de que el Codigo de Conducta del Desarrollador es el resultado de un intenso debate, no es un documento absoluto. Si tiene sugerencias para nuevas mejoras, contactanos en nuestro servidor de Discord o manda un mensaje a [RAdmin](https://retroachievements.org/user/RAdmin).
