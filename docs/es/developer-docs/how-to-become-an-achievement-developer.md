---
title: Cómo convertirse en desarrollador de logros
description: Una guía paso a paso sobre cómo convertirse en un desarrollador de RetroAchievements, incluyendo el conocimiento requerido, planificación y mejores prácticas.
---

# Cómo convertirse en un desarrollador de logros

Este documento describe todos los pasos que cualquier aspirante a desarrollador de logros debe seguir antes de conseguir el estatus de Desarrollador.
Estos requisitos también son una lista de verificación para los revisores de código (desarrolladores que inspeccionan el código de los nuevos desarrolladores).

**Cualquiera puede convertirse en un desarrollador en RetroAchievements si pone el suficiente esfuerzo.**

**Altamente recomendado**: únete a nuestro servidor de Discord para que puedas ponerte en contacto con otros desarrolladores de logros que pueden mostrarte el camino y ayudarte. Si ya sabes en qué juego quieres trabajar, adelante y pide el rol de `Jr-Dev` en el foro `#role-request` creando una publicación etiquetada como `Jr-Dev`, publicando tu plan de set para el juego (puedes usar una de estas [plantillas (EN)](https://docs.google.com/spreadsheets/d/1VC2phJ9AUcZK5Ll4bVuMpJXED8QdM_nw8OdSAuLc3bI/edit)), y mencionando a `@QA-Maintainer` (Asegúrate de verificar tu cuenta siguiendo las instrucciones en `#welcome` si aún no lo has hecho). Esto te da acceso al canal `#jr-devs`, donde puedes hablar con revisores de código y hacer cualquier pregunta relacionada con el desarrollo.

## Encontrar un juego en el que trabajar

[//]: # "TODO: Review the anchor"

Sigue las [directrices del código de conducta del desarrollador](/es/guidelines/developers/code-of-conduct#working-on-empty-sets) para encontrar un juego.
Asegúrate de que el juego cumpla con las [reglas y restricciones (EN)](/developer-docs/jr-dev-rules#rules-and-restrictions) antes de trabajar en logros.
Para reclamar un juego, debe tener un tema en el foro.
Si no tiene uno, puedes pedir a un revisor de código que cree uno en el `#jr-devs-requests` en nuestro servidor de Discord.
Siéntete libre de declarar tus intenciones de trabajar en el juego en el tema, y publicar actualizaciones a medida que avanzas.

**Consejo**: para tu primer set de logros se recomienda elegir un juego que aún no tenga logros **y** que no sea muy popular.

## Planeando tu set de logros

Una vez que encuentres un juego en el que trabajar, necesitas planificar tu set de logros.

Asegúrate de conocer lo suficiente sobre el juego para hacer un buen set. Consulta GameFAQs o algo similar, intenta aprender más acerca de él, sus secretos y detalles.
Aquí tienes una buena guía que te puede ayudar con esto:
[plan de desarrollo del set (EN)](/es/developer-docs/set-development-roadmap).

Es recomendable que publiques tus planes en el tema oficial del juego, para que la comunidad pueda dejar sugerencias y comentarios.

**¡IMPORTANTE!: estate abierto a recibir comentarios y sugerencias.**

**Ver también**: [Diseño de logros](/es/developer-docs/achievement-design), es una extensa guía sobre cómo diseñar logros buenos e interesantes. No se trata del lado técnico, sino del conceptual.

## Conocimiento requerido

Cada desarrollador debe conocer al menos los conceptos y técnicas básicas mostradas en estos dos documentos:

1. [Comenzando como desarrollador de logros](/es/developer-docs/getting-started-as-an-achievement-developer)
2. [Características de la lógica de logros](/es/orphaned/achievement-logic-features)

Cualquier aspirante a desarrollador debe demostrar que comprende los siguientes conceptos:

[//]: # "TODO: Review the anchors"

- Búsqueda básica en la RAM (familiarízate con el [inspector de memoria](/es/developer-docs/memory-inspector))
- [Notación hexadecimal](/es/developer-docs/memory-inspector#decimal-binary-and-hexadecimal-notations)
- [Valores delta](/es/developer-docs/delta-values)
- [Contadores](/es/developer-docs/hit-counts)
- [`PauseIf`](/es/developer-docs/flags/pauseif)
- [`ResetIf`](/es/developer-docs/flags/resetif)
- [Agrupado alt](/es/developer-docs/alt-groups)
- Tamaños de memoria: [8 bits](/es/developer-docs/memory-inspector#8-bit-mode) y [un solo bit](/es/developer-docs/memory-inspector#single-bits)
- Comparaciones de lógica de los logros además de `=`, como `>`, `<`, `!=`
- [Agregar insignias a un logro](/es/general/ways-to-contribute)
- [Crear descripciones precisas para logros](/es/guidelines/developers/code-of-conduct#basic-achievement-design-guidelines)
- Agregar [protecciones](/es/developer-docs/getting-started-as-an-achievement-developer#important-tips) apropiadas
- Hacer un [set de logros estable](/es/developer-docs/getting-started-as-an-achievement-developer#important-tips)

**Nota**: No necesitas dominar todos estos conceptos para que se publique un set, pero sí los necesitas para tener el rol completo de desarrollador.

### Conceptos avanzados

Aquí hay una lista de algunos conceptos/técnicas avanzadas.
No son necesarios para convertirse en desarrollador\*\*, pero están listados aquí para que el jr-dev conozca las posibilidades de la lógica de los logros.

[//]: # "TODO: Review the anchors"

- Contador como temporizador (como en [este ejemplo](/es/developer-docs/real-examples/using-hit-counts-as-a-timer) y [este otro](/es/developer-docs/real-examples/creating-a-timer-with-reset-if-hits-based-on-the-speed-of-the-game))
- [Puntos de control ResetIf](/es/developer-docs/achievement-templates#finish-level-n-without-dying-or-getting-hit-using-a-weapon-etc)
- [ResetIf con contadores](/es/developer-docs/flags/resetif#resetif-with-hit-counts)
- [PauseIf con contadores](/es/developer-docs/flags/pauseif#pauseif-with-hit-counts)
- Banderas [AddSource](/es/developer-docs/flags/addsource) y [SubSource](/es/developer-docs/flags/subsource)
- Banderas [AddHits y SubHits](/es/developer-docs/flags/addhits-subhits)
- [Incrementar contador (Contador `Mem > Delta`)](/es/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)
- [Contador de aciertos delta, técnica de pausa](/es/developer-docs/achievement-templates#check-for-a-specific-value-changing-to-another-specific-value-ten-times)
- [Poca endianidad](/es/developer-docs/memory-inspector#endianness)
- Tamaño de memoria: [Lower4, Upper4](/es/developer-docs/memory-inspector#upper4-and-lower4), y [16 bits, 32 bits](/es/developer-docs/memory-inspector#1632-bit-mode)
- [Estado de la actividad](/es/developer-docs/rich-presence) dinámica
- [Tablas de clasificación](/es/developer-docs/leaderboards)
- [Reinicios pausables](/es/developer-docs/achievement-templates#conditional-resets)
- Contador de incrementos [SubSource](/es/developer-docs/flags/subsource#using-subsource-to-count-increments)

Las páginas de [ejemplos reales](/es/developer-docs/real-examples) y [plantillas de logros](/es/developer-docs/achievement-templates) son recursos útiles para ver cómo funcionan esas técnicas.

## Notas de código

Los desarrolladores junior pueden crear y eliminar notas de código que hayan creado, pero no pueden eliminar ni editar ninguna nota hecha por otros.
Los desarrolladores PUEDEN editar y eliminar notas de otros usuarios, y estos cambios se producen para todo el sitio.

## Practicando

Para familiarizarte con estas técnicas, debes practicar. **Puedes usar cualquier juego para practicar**, incluso aquellos que ya tienen logros. Solo ten en cuenta estas reglas:

- **NO** borres/sobrescribas ninguna nota de código existente.

- En esta fase de **práctica**, mantén tu trabajo en local y **NO** subas ningún logro. Lo harás más tarde cuando encuentres un juego en el que realmente vayas a trabajar.

## Revise su trabajo

Después de haber creado varios logros, súbelos a Unofficial y luego crea una publicación en `#jr-devs-requests` en nuestro servidor de Discord (si no usas Discord, envía un mensaje a [RAdmin](http://retroachievements.org/user/RAdmin)) y pide que alguien revise tu trabajo.

**NO** pidas a otro desarrollador que promueva tus logros a Core sin una revisión adecuada.

De nuevo, **es extremadamente importante que estés abierto a recibir críticas constructivas y consejos útiles de la comunidad en cualquier momento**.

## ¿Estoy listo para obtener el estatus de desarrollador?

Una vez que los revisores de código hayan inspeccionado el código y los conceptos de tus logros, ellos y el administrador utilizarán la ["lista de conocimientos requeridos" mencionada anteriormente](#conocimiento-requerido) para determinar si estás listo.
Si aún no estás completamente cualificado para ser desarrollador, pero tu conjunto está completo y estable, el conjunto será publicado.
Luego puedes preguntar qué conceptos necesitas demostrar todavía para obtener el estatus de desarrollador.

Para hacer que un desarrollador junior (jr-dev) tenga el mérito de recibir el estatus de desarrollador depende de:

- su capacidad para publicar trabajos que cumplan con los estándares del [código de conducta del desarrollador](/es/guidelines/developers/code-of-conduct);
- la demostración de [conocimientos requeridos](#conocimiento-requerido) y [conceptos avanzados](#conceptos-avanzados);
- la calidad y complejidad de su trabajo;
- el tiempo y reflexión que dedicó a planificar y trabajar en los logros;
- mostrando la voluntad de usar el estatus de desarrollador con cuidado y responsabilidad;
- en qué medida los puntos anteriores reflejan sus capacidades como desarrollador.

## Código de conducta del desarrollador

Una vez que obtengas tu estatus de Desarrollador, **DEBES** adherirte al [código de conducta del desarrollador](/es/guidelines/developers/code-of-conduct).
Es extremadamente importante para crear un ambiente justo entre los desarrolladores de logros.
