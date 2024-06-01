# Como convertirme en un Desarrollador de Logros

Este documento describe todos los pasos que cualquier aspirante a desarrollador de logros tiene que seguir antes de conseguir estatus de Desarrollador. Estos requisitos también son una lista para los Reseñadores de Código (desarrolladores que inspeccionan el código de nuevos desarrolladores).

**Cualquiera puede convertirse en un desarrollador en RetroAchievements si pone el suficiente esfuerzo.**

**Opcional pero _fuertemente_ recomendado**: únete a nuestro servidor de Discord y pregunta a un moderador darte el rol de `jr-dev`. Utiliza los canales #help-me y #devs cada vez que cuentes con alguna pregunta.

## Conocimiento requerido

Cada desarrollador tiene que mínimo conocer los conceptos básicos y técnicas mostradas en estos dos documentos:

1. [Empezando como un desarrollador de logros](Getting-Started-as-an-Achievement-Developer-es)
2. [Caracteristicas en la lógica de un logro](Achievement-Logic-Features-es)

Cualquier aspirante a desarrollador tiene que demostrar seguir y entender los siguientes conceptos:

- Búsqueda Básica en la RAM (que se te familiarice el [Inspector de Memoria](Memory-Inspector-Overview-es))
- [Notaciones Hexadecimales](Memory-Inspector-Overview-es#decimal-binary-and-hexadecimal-notations)
- [Valores Delta](Delta-Values-es)
- [Hit counts](Hit-Counts-es)
- [`PauseIf`](PauseIf-Flag-es)
- [`ResetIf`](ResetIf-Flag-es)
- [Alt Groups](Alt-Groups-es)
- Tamaño de la Memoria: [8-bit](Memory-Inspector-Overview-es#8-bit-mode) y [single bit](Memory-Inspector-Overview-es#single-bits)
- Comparadores en la logica de los Logros mas allá de `=`, por ejemplo `>`, `<`, `!=`
- [Añadir badges/medallas a un logro](How-to-contribute-if-you-are-not-a-developer-es#make-badges-for-achievements)
- [Crear descripciones certeras en los logros](Developers-Code-of-Conduct-es#Reglamento-de-Diseño-Basico-de-Logros)
- Añadir las [protecciones](Getting-Started-as-an-Achievement-Developer-es#important-tips) adecuadas
- Hacer un [set de logros estable](Getting-Started-as-an-Achievement-Developer-es#important-tips)

**Nota**: Tu no necesitas el dominio total de todos estos conceptos para tener un set publicado, pero si los necesitas para obtener un rol como desarrollador completo.

### Conceptos Avanzados

Aquí hay una lista de algunos conceptos/técnicas. **No son requisito para convertirte en un Desarrollador**, pero están en listadas aquí para mostrar al desarrollador jr. (jr-dev) las posibilidades de la lógica de los logros.

- Hit count como un temporizador (como en [este ejemplo](Using-Hit-Counts-as-a-Timer-es) y [este otro](Creating-a-Timer-with-ResetIf-Hits-based-on-the-Speed-of-the-Game-es))
- [ResetIf Checkpoints](Achievement-Templates-es#finish-level-n-without-dying-or-getting-hit-using-a-weapon-etc)
- [ResetIf con Hitcount](ResetIf-Flag-es#resetif-with-hit-counts)
- [PauseIf con Hitcount](PauseIf-Flag-es#pauseif-with-hit-counts)
- Las banderas [AddSource](AddSource-Flag-es) y [SubSource](SubSource-Flag-es)
- [Bandera AddHits](AddHits-Flag-es)
- [Incrementar contador (`Valor en Memoria > Valor Delta` Contador)](Using-Delta-Values-and-Hit-Counts-to-Detect-an-Increment-es)
- [Contador de Hits Delta, técnica de pausado](Achievement-Templates-es#check-for-a-specific-value-changing-to-another-specific-value-ten-times)
- [Little endianness](Memory-Inspector-Overview-es#endianness)
- Tamaño de Memoria: [Lower4, Upper4](Memory-Inspector-Overview-es#upper4-and-lower4), y [16-bit, 32-bit](Memory-Inspector-Overview-es#1632-bit-mode)
- [Rich Presence](Rich-Presence-es) dinámico
- [Tablas de Clasificación](Leaderboards-es)
- [Resets pausables](Achievement-Templates-es#conditional-resets)
- [Contador en el incremento de un SubSource](SubSource-Flag-es#using-subsource-to-count-increments)

Los [Ejemplos Reales](Real-Examples-es) y las [Plantillas de Logros](Achievement-Templates-es) son paginas útiles para ver como estas técnicas funcionan.

## Practicando

En orden para que se te conviertan familiares todas estas técnicas básicamente tienes que practicar. **Puedes utilizar cualquier juego para practicar**, incluso esos que ya cuentan con logros. Simplemente ten estas reglas en mente:

- **NO** borres/sobre-escribas cualquier Nota de Código existente.

- En esta fase de **practica**, mantén tu trabajo en local y **NO** subas ningún logro. Esto lo vas a hacer después cuando realmente encuentres un juego en el ya vallas a trabajar.

## Buscando un juego el cual trabajar

Sigue los [Reglamentos en el Código de Conducta del Desarrollador](Developers-Code-of-Conduct-es#working-on-empty-sets) para así encontrar un juego en el cual trabajar. Básicamente lo que primero necesitas es declarar tus planes de trabajo sobre el juego en el que quieras trabajar en el foro del mismo, y mientras vallas trabajando en el juegos añadir tus planes mas detallados en el mismo foro.

**Tip**: para tu primer set de logros es recomendable que escojas un juego que aun no tiene logros **y** que no es muy popular.

## Planeando tu Set de Logros

Una vez que encuentras un juego el cual trabajar necesitas planificar tu Set de Logros.

Ten en cuenta conocer lo suficientemente bien el juego para así hacer un buen set. Checa su pagina de GameFAQs o algo parecido, intenta aprender mas sobre el videojuego, sus secretos y detalles. Aquí hay una buena guía que te podría servir de ayuda con esto: [Mapa de Desarrollo del Set](Set-Development-Roadmap-es).

Postea tus planes en el foro oficial del juego, para que así la comunidad pueda dejar sugerencias y retroalimentacion. Esta actitud es requerida para todo tipo de desarrolladores y desarrolladores jr. (jr-dev).

**IMPORTANTE!: estate abierto en recibir retroalimentacion y sugerencias.**

**También mira**: [Diseño de Logros](Achievement-Design-es), es una guía extensiva en como diseñar buenos e interesantes logros. No sobre el lado técnico sino el conceptual.

## Publica tus logros en Unofficial para revisión

Despues de haber creado varios logros, promuebelos a Unofficial y después contacta a un @mod o aun @code-reviewer en nuestro servidor de Discord (si no utilizas Discord, manda un mensaje a [RAdmin](http://retroachievements.org/user/RAdmin)) y pregunta por alguien que pueda reseñar tu trabajo.

Otra vez, **es extremadamente importante que estés abierto a recibir critica constructiva y ayuda de parte de la comunidad en cualquier momento**.

## Estoy listo para conseguir estatus de Desarrollador?

Una vez que los Reseñadores de Código han inspeccionado el código de tus logros y conceptos, ellos y el administrador van a utilizar el ["Conocimiento Requerido" en la lista de requisitos de arriba](#Conocimiento-requerido) para determinar si estas listo. Si no estas completamente calificado para ser un desarrollador pero tu set esta completo y estable el set va a ser publicado. Puedes preguntar que conceptos aun necesitas para demostrar tu capacidad para obtener tu estatus como desarrollador.

Los méritos para que un desarrollador jr. (jr-dev) reciba un estatus de desarrollador dependen en:

- su habilidad en publicar trabajo que contengan el estándar del [Código de Conducta del Desarrollador](Developers-Code-of-Conduct-es);
- demostrar el [conocimiento requerido](#Conocimiento-requerido) y [conceptos avanzados](#advanced-techniques-es);
- la calidad y complejidad de su trabajo;
- el tiempo y pensamiento que puso en planificar y trabajar los logros;
- mostrando el deseo en utilizar el estatus como desarrollador con cuidado y responsabilidad;
- la medida en que los puntos anteriores reflejan sus capacidades como desarrollador.

## Código de Conducta del Desarrollador

Una vez que hubieras conseguido tu estatus como desarrollador, tu **TIENES** que adherirte a el [Código de Conducta del Desarrollador](Developers-Code-of-Conduct-es). Eso es extremadamente importante para crear un ambiente justo entre los Desarrolladores de Logros.
