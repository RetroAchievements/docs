---
title: Cómo funciona RA
description: Describe en términos simples cómo se crean y procesan los logros de RA por los emuladores. Dirigido a jugadores que puedan estar interesados en convertirse en desarrolladores.
---

# Cómo funciona RetroAchievements

RetroAchievements (RA) proporciona a los usuarios la capacidad de ganar logros en juegos retro de un conjunto de logros de RA.
Otorga logros comparando la memoria de un juego (de aquí en adelante denominada como RAM) con el código de logros escrito por un desarrollador de RA.
El código de logros, también conocido como lógica, son una lista de condiciones de memoria elegidas por el desarrollador.
Cuando todas son verdaderas a la vez, otorgarán un logro.

[[toc]]

## ¿Qué es un conjunto de logros?

Un conjunto de logros es la compilación de logros individuales y tablas de clasificación para un juego en particular.
Los logros consisten en lógica de logros, un título, una descripción, un valor en puntos y una insignia.
Además, un conjunto principal puede contener un script de estado de actividad que proporcione a los usuarios del sitio información sobre dónde se encuentran los jugadores activos en un juego.
Los conjuntos pueden tener tablas de clasificación que rastrean si los jugadores realizan bien ciertas cosas en un juego, así cómo de rápido superan etapas, cuántos puntos pueden ganar y muchas otras cosas.
Los usuarios de RA interactúan con todos estos componentes y subcomponentes.
Cada uno de ellos es una parte vital de la experiencia del jugador.

## ¿Qué es el código de logros y cómo se escribe?

El código de logros de RA es un lenguaje de texto personalizado que es interpretado por los emuladores que soportan RA.
Si eres un desarrollador de emuladores interesado en soportar RA, [consulta nuestra guía de integración de emuladores](https://github.com/RetroAchievements/rcheevos/wiki/rc_client-integration) para más detalles sobre cómo se hace esto.
El código utilizado para RA es escrito por desarrolladores con una o dos herramientas de desarrollo de logros.
Los desarrolladores pueden usar la herramienta que prefieran.
El editor de logros en el kit de herramientas RAIntegration no requiere conocimientos previos de codificación. Por otro lado, [RATools](/developer-docs/ratools.html) es un ejecutable independiente diseñado para desarrolladores que encuentran más cómodo escribir en un lenguaje de scripting para desarrollar su conjunto de logros.
Tanto el editor de logros como RATools producen un código similar que se utiliza para todos los logros, tablas de clasificación y estados de actividad.

### ¿Cómo se procesa el código de logros?

La RAM es donde un juego almacena su memoria en un momento dado.
Cuando es procesada por una consola o emulador, la RAM puede ser utilizada para reconocer lo que está sucediendo dentro del juego.
Los juegos se procesan en una serie de cuadros, generalmente 60, 50, 30 o 25 por segundo dependiendo de la consola y el formato.
RA procesa toda la lógica de logros no ganados en un conjunto por cada cuadro.
Debido a esto, los desarrolladores pueden crear lógica de tal manera que cuando todas sus condiciones sean verdaderas simultáneamente, identifiquen algo único y preciso que esté sucediendo en un juego y otorguen un logro, activen una tabla de clasificación y proporcionen estados de actividad precisa.
Es trabajo del desarrollador de logros entender lo suficiente de la RAM de un juego para poder construir esta lógica.

Entender cómo funciona la RAM que un desarrollador pretende usar en su lógica es esencial para crear un conjunto estable que otorgue logros, envíe puntuaciones a las tablas de clasificación y muestre Presencia Rica con precisión solo como se pretende. Los desarrolladores de RA usan herramientas de emuladores para desarrolladores para inspeccionar la RAM de un juego y determinar qué direcciones son responsables de las cosas que pretenden usar para la lógica. Los desarrolladores tienen muchas formas de definir con precisión exactamente qué condiciones de memoria deben ser verdaderas para construir la lógica, incluyendo retener el conocimiento de que algo ocurrió previamente en la memoria, pero que puede que ya no sea verdadero.

### Ejemplo de código y procesamiento de logros

Pongamos un ejemplo simple, para otorgar un logro por obtener el martillo en Zelda II:
The Adventure of Link, un desarrollador necesitaría averiguar qué direcciones de memoria dentro del juego están asociadas con algunas cosas únicas sobre obtener el martillo.
Hay muchas maneras de hacer esto.
Una forma en la que un desarrollador podría abordar este logro es encontrar las direcciones para el ID de la habitación para asegurarse de que el jugador está en ella con el martillo.
Tal vez sirva también un ID de área para asegurarse de que el jugador está en la sección correcta del juego y, por último, una dirección que indique si el jugador realmente obtuvo el martillo.
La razón por la que un ID de una habitación y un ID de área son importantes es porque cuando un jugador carga un archivo guardado que ha recogido el martillo, la memoria indicaría que la posesión del martillo pasa de falso a verdadero, pero este no es el momento en que se debe otorgar el logro.
Las condiciones del ID de la habitación y del ID de área asegurarían que un jugador realmente esté obteniendo el martillo en el juego y no solo cargando un archivo guardado que ya lo posee.
Un logro sólido podría otorgarse cuando lo siguiente sea verdadero simultáneamente:

```
// ID de la habitación = habitación en la que está el martillo
Room ID = room the hammer is in
// ID de área = área del juego en la que está el martillo
Area ID = area of game the hammer is in
// La posesión del martillo cambia de no poseído a poseído
Possession of hammer changes from not possessed to possessed
```

Aquí está cómo se vería este logro en el editor de logros

![how-ra-works-example](/public/how-ra-works-example.png)

En este ejemplo, la dirección 0x0561 es el ID de la habitación y su valor es 0x15 cuando el jugador está en la habitación con el martillo, la dirección 0x076e es el ID de área y su valor es 0x02 cuando está en Death Mountain donde se encuentra el martillo y el Bit0 de la dirección 0x078b indica si el jugador tiene el martillo.
Este bit cambia de 0 a 1 cuando el jugador adquiere el martillo, por lo que el logro se verifica en un cuadro donde este bit es mayor que en el cuadro anterior, que es precisamente cuando se obtiene el martillo, ya que los bits solo pueden ser 1 o 0.
Si las tres condiciones son verdaderas en el mismo cuadro, se otorga el logro.
Esto solo puede suceder cuando el jugador obtiene el martillo mientras está en la habitación del martillo en Death Mountain, no en otro momento como al cargar un archivo guardado.

Se compara la RAM del juego que se está jugando con la lógica del logro en cada cuadro para verificar si todas las condiciones son verdaderas. Para este logro de ejemplo, todas las condiciones solo pueden ser verdaderas en el mismo cuadro cuando un jugador está en la habitación y área donde se obtiene el martillo y el jugador obtiene el martillo. Cuando eso sucede, todas las condiciones definidas en la lógica serán simultáneamente verdaderas y el logro se otorgará inmediatamente.

## Código de tablas de clasificación y actividad precisa

Las tablas de clasificación funcionan de manera muy similar a los logros en términos de lógica, pero necesitan una lista de condiciones para indicar cuándo activar la tabla, cuándo cancelarla y cuándo y qué valor enviar a la tabla de clasificación. Crear una tabla de clasificación es esencialmente como crear algunos logros  que se procesarán secuencialmente.

El código de actividad precisa es muy similar al código de logros y tablas de clasificación, pero se escribe de manera ligeramente diferente debido a la forma en que es manejado por el sitio.
La actividad precisa se escribe y se envía a RA como un script, en lugar de una cadena de código como los logros y las tablas de clasificación. Se utiliza la misma sintaxis que los logros y las tablas de clasificación, pero tiene algunas características adicionales como macros personalizadas que pueden ser utilizadas.

## Conclusiones

La clave para escribir un código sólido es primero entender qué puede ser usado en la RAM para reconocer un evento particular del juego para el cual un desarrollador pretende otorgar un logro, usar para una tabla de clasificación o actividad precisa.
Los siguientes pasos son encontrar las direcciones de memoria necesarias y sus valores para reconocer cuándo ocurre el evento y construir la lógica para crear una lista de condiciones que solo serán simultáneamente verdaderas en el cuadro previsto.
