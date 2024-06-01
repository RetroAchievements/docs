# Como convertirme en un Desarrollador de Logros

Este documento describe todos los pasos que cualquier aspirante a desarrollador de logros tiene que seguir antes de conseguir estatus de Desarrollador. Estos requisitos también son una lista para los Reseñadores de Código (desarrolladores que inspeccionan el código de nuevos desarrolladores).

**Cualquiera puede convertirse en un desarrollador en RetroAchievements si pone el suficiente esfuerzo.**

**Opcional pero _fuertemente_ recomendado**: únete a nuestro servidor de Discord y pregunta a un moderador darte el rol de `jr-dev`. Utiliza los canales #help-me y #devs cada vez que cuentes con alguna pregunta.

## Conocimiento requerido

Cada desarrollador tiene que mínimo conocer los conceptos básicos y técnicas mostradas en estos dos documentos:

1. [Empezando como un desarrollador de logros](/es/developer-docs/getting-started-as-an-achievement-developer.html)
2. [Caracteristicas en la lógica de un logro](/es/orphaned/achievement-logic-features.html)

Cualquier aspirante a desarrollador tiene que demostrar seguir y entender los siguientes conceptos:

- Búsqueda Básica en la RAM (que se te familiarice el [Inspector de Memoria](/es/developer-docs/memory-inspector.html))
- [Notaciones Hexadecimales](/es/developer-docs/memory-inspector.html#decimal-binary-and-hexadecimal-notations)
- [Valores Delta](/es/developer-docs/delta-values.html)
- [Hit counts](/es/developer-docs/hit-counts.html)
- [`PauseIf`](/es/developer-docs/flags/pauseif.html)
- [`ResetIf`](/es/developer-docs/flags/resetif.html)
- [Alt Groups](/es/developer-docs/alt-groups.html)
- Tamaño de la Memoria: [8-bit](/es/developer-docs/memory-inspector.html#8-bit-mode) y [single bit](/es/developer-docs/memory-inspector.html#single-bits)
- Comparadores en la logica de los Logros mas allá de `=`, por ejemplo `>`, `<`, `!=`
- [Añadir badges/medallas a un logro](/es/general/ways-to-contribute.html#make-badges-for-achievements)
- [Crear descripciones certeras en los logros](/es/guidelines/developers/code-of-conduct.html#Reglamento-de-Diseño-Basico-de-Logros)
- Añadir las [protecciones](/es/developer-docs/getting-started-as-an-achievement-developer.html#important-tips) adecuadas
- Hacer un [set de logros estable](/es/developer-docs/getting-started-as-an-achievement-developer.html#important-tips)

**Nota**: Tu no necesitas el dominio total de todos estos conceptos para tener un set publicado, pero si los necesitas para obtener un rol como desarrollador completo.

### Conceptos Avanzados

Aquí hay una lista de algunos conceptos/técnicas. **No son requisito para convertirte en un Desarrollador**, pero están en listadas aquí para mostrar al desarrollador jr. (jr-dev) las posibilidades de la lógica de los logros.

- Hit count como un temporizador (como en [este ejemplo](/es/developer-docs/real-examples/using-hit-counts-as-a-timer.html) y [este otro](/es/developer-docs/real-examples/creating-a-timer-with-reset-if-hits-based-on-the-speed-of-the-game.html))
- [ResetIf Checkpoints](/es/developer-docs/achievement-templates.html#finish-level-n-without-dying-or-getting-hit-using-a-weapon-etc)
- [ResetIf con Hitcount](/es/developer-docs/flags/resetif.html#resetif-with-hit-counts)
- [PauseIf con Hitcount](/es/developer-docs/flags/pauseif.html#pauseif-with-hit-counts)
- Las banderas [AddSource](/es/developer-docs/flags/addsource.html) y [SubSource](/es/developer-docs/flags/subsource.html)
- [Bandera AddHits](/es/developer-docs/flags/addhits-subhits.html)
- [Incrementar contador (`Valor en Memoria > Valor Delta` Contador)](/es/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment.html)
- [Contador de Hits Delta, técnica de pausado](/es/developer-docs/achievement-templates.html#check-for-a-specific-value-changing-to-another-specific-value-ten-times)
- [Little endianness](/es/developer-docs/memory-inspector.html#endianness)
- Tamaño de Memoria: [Lower4, Upper4](/es/developer-docs/memory-inspector.html#upper4-and-lower4), y [16-bit, 32-bit](/es/developer-docs/memory-inspector.html#1632-bit-mode)
- [Rich Presence](/es/developer-docs/rich-presence.html) dinámico
- [Tablas de Clasificación](/es/developer-docs/leaderboards.html)
- [Resets pausables](/es/developer-docs/achievement-templates.html#conditional-resets)
- [Contador en el incremento de un SubSource](/es/developer-docs/flags/subsource.html#using-subsource-to-count-increments)

Los [Ejemplos Reales](/es/developer-docs/real-examples.html) y las [Plantillas de Logros](/es/developer-docs/achievement-templates.html) son paginas útiles para ver como estas técnicas funcionan.

## Practicando

En orden para que se te conviertan familiares todas estas técnicas básicamente tienes que practicar. **Puedes utilizar cualquier juego para practicar**, incluso esos que ya cuentan con logros. Simplemente ten estas reglas en mente:

- **NO** borres/sobre-escribas cualquier Nota de Código existente.

- En esta fase de **practica**, mantén tu trabajo en local y **NO** subas ningún logro. Esto lo vas a hacer después cuando realmente encuentres un juego en el ya vallas a trabajar.

## Buscando un juego el cual trabajar

Sigue los [Reglamentos en el Código de Conducta del Desarrollador](/es/guidelines/developers/code-of-conduct.html#working-on-empty-sets) para así encontrar un juego en el cual trabajar. Básicamente lo que primero necesitas es declarar tus planes de trabajo sobre el juego en el que quieras trabajar en el foro del mismo, y mientras vallas trabajando en el juegos añadir tus planes mas detallados en el mismo foro.

**Tip**: para tu primer set de logros es recomendable que escojas un juego que aun no tiene logros **y** que no es muy popular.

## Planeando tu Set de Logros

Una vez que encuentras un juego el cual trabajar necesitas planificar tu Set de Logros.

Ten en cuenta conocer lo suficientemente bien el juego para así hacer un buen set. Checa su pagina de GameFAQs o algo parecido, intenta aprender mas sobre el videojuego, sus secretos y detalles. Aquí hay una buena guía que te podría servir de ayuda con esto: [Mapa de Desarrollo del Set](/es/developer-docs/set-development-roadmap.html).

Postea tus planes en el foro oficial del juego, para que así la comunidad pueda dejar sugerencias y retroalimentacion. Esta actitud es requerida para todo tipo de desarrolladores y desarrolladores jr. (jr-dev).

**IMPORTANTE!: estate abierto en recibir retroalimentacion y sugerencias.**

**También mira**: [Diseño de Logros](/es/developer-docs/achievement-design.html), es una guía extensiva en como diseñar buenos e interesantes logros. No sobre el lado técnico sino el conceptual.

## Publica tus logros en Unofficial para revisión

Despues de haber creado varios logros, promuebelos a Unofficial y después contacta a un @mod o aun @code-reviewer en nuestro servidor de Discord (si no utilizas Discord, manda un mensaje a [RAdmin](http://retroachievements.org/user/RAdmin)) y pregunta por alguien que pueda reseñar tu trabajo.

Otra vez, **es extremadamente importante que estés abierto a recibir critica constructiva y ayuda de parte de la comunidad en cualquier momento**.

## Estoy listo para conseguir estatus de Desarrollador?

Una vez que los Reseñadores de Código han inspeccionado el código de tus logros y conceptos, ellos y el administrador van a utilizar el ["Conocimiento Requerido" en la lista de requisitos de arriba](#Conocimiento-requerido) para determinar si estas listo. Si no estas completamente calificado para ser un desarrollador pero tu set esta completo y estable el set va a ser publicado. Puedes preguntar que conceptos aun necesitas para demostrar tu capacidad para obtener tu estatus como desarrollador.

Los méritos para que un desarrollador jr. (jr-dev) reciba un estatus de desarrollador dependen en:

- su habilidad en publicar trabajo que contengan el estándar del [Código de Conducta del Desarrollador](/es/guidelines/developers/code-of-conduct.html);
- demostrar el [conocimiento requerido](#Conocimiento-requerido) y [conceptos avanzados](#advanced-techniques-es);
- la calidad y complejidad de su trabajo;
- el tiempo y pensamiento que puso en planificar y trabajar los logros;
- mostrando el deseo en utilizar el estatus como desarrollador con cuidado y responsabilidad;
- la medida en que los puntos anteriores reflejan sus capacidades como desarrollador.

## Código de Conducta del Desarrollador

Una vez que hubieras conseguido tu estatus como desarrollador, tu **TIENES** que adherirte a el [Código de Conducta del Desarrollador](/es/guidelines/developers/code-of-conduct.html). Eso es extremadamente importante para crear un ambiente justo entre los Desarrolladores de Logros.
