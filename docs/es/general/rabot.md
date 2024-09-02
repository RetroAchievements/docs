---
title: RABot
description: Aprende sobre RABot, el bot oficial de RetroAchievements en Discord, y explora los comandos útiles que ofrece.
---

# RABot, el bot de RA para Discord

RABot es el robot oficial de RetroAchievements en Discord. Por tanto, para interactuar con él, necesitas ser miembro del [servidor de Discord de RA](https://discord.gg/dq2E4hE).

RABot tiene muchos comandos geniales y útiles, y en esta página verás algunos ejemplos de cómo se pueden usar algunos de ellos.

RABot utiliza [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript), [Node.js](https://nodejs.org/es/), [discord.js](https://discord.js.org/) y [Commando](https://discord.js.org/#/docs/commando/master/general/welcome).

**Agradecimientos especiales**: al [bot Xiao de DragonFire](https://github.com/dragonfire535/xiao/), ya que ha sido una gran fuente de inspiración para muchos de los comandos geniales que tenemos en RABot, como [`!bulbapedia`](#bulbapedia), [`!manga`](#manga), [`!translate`](#translate), [`!define`](#define) y otros.

## Obtener ayuda

### `!help`

Este comando hace que RABot envíe un mensaje directo con la lista de comandos disponibles.

Si necesitas ayuda sobre un comando específico, usa `!help nombre_del_comando`.

### `!docs`

Proporciona enlaces a la documentación de RetroAchievements.

![docs](https://user-images.githubusercontent.com/8508804/51226593-1f44a980-1937-11e9-9a74-1727bebbaba7.png)

![docs1](https://user-images.githubusercontent.com/8508804/51226592-1eac1300-1937-11e9-9eca-3939866f58c4.png)

### `!rarch`

Proporciona información básica sobre RetroArch.

![rarch](https://user-images.githubusercontent.com/8508804/51226589-1eac1300-1937-11e9-8673-efe646139654.png)

### `!rules`

Muestra las reglas, o una en concreto.

![rules](https://user-images.githubusercontent.com/8508804/51226588-1e137c80-1937-11e9-83dc-65cc2c459e18.png)

### `!about`

Muestra información sobre el RABot.

![about](https://user-images.githubusercontent.com/8508804/51226587-1e137c80-1937-11e9-9063-85f23fc92fff.png)

### `!panic`

Qué hacer cuando el sitio está caído.

![panic](https://user-images.githubusercontent.com/8508804/51226585-1ce24f80-1937-11e9-995b-0c909c2b74f7.png)

## Crear encuestas

### `!poll`

Crea una encuesta simple. La gente puede votar añadiendo reacciones, pero también pueden votar con reacciones no listadas. Mira [`!tpoll`](#tpoll) si estás interesado en una encuesta más avanzada y seria.

![poll](https://user-images.githubusercontent.com/8508804/51226584-1ce24f80-1937-11e9-896e-4d4ec15c251d.png)

### `!tpoll`

Crear una encuesta cronometrada. En este tipo de encuesta, solo la primera reacción se considera un voto, y si la gente reacciona con una reacción no listada, entonces el voto se anula.

![tpoll](https://user-images.githubusercontent.com/8508804/51226583-1ce24f80-1937-11e9-875d-7508227f4ab2.png)

## Tratar con números

### `!hex`

Convierte un número no negativo de decimal (o binario) a hexadecimal (o viceversa).

![hex](https://user-images.githubusercontent.com/8508804/51226581-1c49b900-1937-11e9-9518-c82deb427e62.png)

### `!bin`

Convierte un número no negativo de decimal (o hexadecimal) a binario (o viceversa).

![bin](https://user-images.githubusercontent.com/8508804/51226582-1ce24f80-1937-11e9-9ad1-92f73dbeb2f0.png)

### `!calculator`

**Alias**: `!calc`

Evalúa la expresión matemática dada y responde con el resultado.

![calculator](https://user-images.githubusercontent.com/8508804/51320685-ca448880-1a47-11e9-85da-174bd8e2ae99.png)

## Obtener información/enlaces de RetroAchievements.org

### `!ragame`

**Alias**: `!game`

Busca un juego en RetroAchievements.org y muestra el enlace.

![ragame](https://user-images.githubusercontent.com/8508804/51226568-1a7ff580-1937-11e9-9eb7-c44d4093e9b9.png)

### `!tickets`

Devuelve el enlace de la página de tickets abiertos del nombre del juego dado.

![tickets](https://user-images.githubusercontent.com/8508804/51226578-1c49b900-1937-11e9-96eb-c4d7c451d43f.png)

### `!whatgame`

**Alias**: `!wg`

Responde con un juego aleatorio que tenga logros.

![whatgame](https://user-images.githubusercontent.com/8508804/51226560-18b63200-1937-11e9-992e-a5290c986a1c.png)

![whatgame1](https://user-images.githubusercontent.com/8508804/51226559-18b63200-1937-11e9-884d-7ee9d2d5ac3a.png)

### `!whatcheevo`

Responde con un logro aleatorio.

## Datos curiosos

### `!funfact`

Responde con un dato curioso sobre videojuegos retro.

**Nota**: puedes sugerir más entradas de datos curiosos [aquí](https://github.com/RetroAchievements/RABot/issues/2).

![funfact](https://user-images.githubusercontent.com/8508804/51226562-194ec880-1937-11e9-87e9-80b1a63f2c3a.png)

### `!memefact`

**Alias**: `!meme`

Responde con un dato curioso sobre RetroAchievements en forma de meme.

**Nota**: puedes sugerir más entradas de datos curiosos [aquí](https://github.com/RetroAchievements/RABot/issues/6), pero ten en cuenta estas 2 reglas simples **1)** no puedes sugerir tu propia cita; y **2)** al sugerir una cita, asegúrate de obtener la aprobación del autor y/o de la persona mencionada.

![memefact](https://user-images.githubusercontent.com/8508804/51226561-194ec880-1937-11e9-8e7a-4b65ffbc87f5.png)

## Obtener información relacionada con los videojuegos

### `!gamefaqs`

**Aliases**: `!gamefaq`, `!gfaq`

Busca un juego en GameFAQs y muestra el enlace.

![gamefaqs](https://user-images.githubusercontent.com/8508804/51226573-1b188c00-1937-11e9-998e-b39cb9b60bd4.png)

### `!longplay`

**Aliases**: `!lplay`, `!lp`

Busca un video de longplay en youtube y muestra el enlace.

![longplay](https://user-images.githubusercontent.com/8508804/51226571-1a7ff580-1937-11e9-8f54-50a7a9a7c645.png)

### `!vgmaps`

**Alias**: `!vgmap`

Busca en vgmaps.com el mapa de un videojuego.

![vgmaps](https://user-images.githubusercontent.com/8508804/51319802-35409000-1a45-11e9-8bfc-736b9247fde6.png)

### `!howlongtobeat`

**Alias**: `!hltb`

Busca un juego en howlongtobeat.com y muestra el enlace.

![howlongtobeat](https://user-images.githubusercontent.com/8508804/51226572-1b188c00-1937-11e9-85f9-ecbe6890246a.png)

## Miscelánea

### `!define`

**Aliases**: `!dictionary`, `!dict`

Define una palabra.

![define](https://user-images.githubusercontent.com/8508804/51226574-1b188c00-1937-11e9-97fc-1d926d7777d0.png)

### `!translate`

**Alias**: `!tr`

Traduce un texto a un idioma específico. **Gracias a <https://translate.yandex.com/>**

![translate](https://user-images.githubusercontent.com/8508804/51320293-81400480-1a46-11e9-9075-738ac91bd7e1.png)

![translate1](https://user-images.githubusercontent.com/8508804/51320291-81400480-1a46-11e9-9b9c-980262a8d276.png)

### `!urban`

Define una palabra, pero con Urban Dictionary.

![urban](https://user-images.githubusercontent.com/8508804/51226567-19e75f00-1937-11e9-96b6-373ac32da597.png)

### `!wikipedia`

**Alias**: `!wp`

Busca en Wikipedia tu consulta.

![wikipedia](https://user-images.githubusercontent.com/8508804/51226566-19e75f00-1937-11e9-8cd7-ca05ad9c045a.png)

### `!youtube`

**Alias**: `!yt`

Busca un video en youtube y muestra el primero que encuentre.

![youtube](https://user-images.githubusercontent.com/8508804/51226564-194ec880-1937-11e9-8435-c48c3c5552a7.png)

### `!bulbapedia`

Busca en Bulbapedia tu consulta.

![bulbapedia](https://user-images.githubusercontent.com/8508804/51226575-1bb12280-1937-11e9-8c31-58317efca4ce.png)

### `!movie`

Busca en TMDB tu consulta, obteniendo resultados de películas.

![movie](https://user-images.githubusercontent.com/8508804/51226570-1a7ff580-1937-11e9-8693-b570ce538593.png)

### `!manga`

Busca en AniList tu consulta, obteniendo resultados de manga.

![manga](https://user-images.githubusercontent.com/8508804/51226576-1bb12280-1937-11e9-9805-dc51c5e783bf.png)

### `!anime`

Busca en AniList tu consulta, obteniendo resultados de anime.

![anime](https://user-images.githubusercontent.com/8508804/51226577-1bb12280-1937-11e9-880a-8263330199bd.png)
