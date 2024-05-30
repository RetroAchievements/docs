En este ejemplo veras como evitar el problema de que un contador se incremente dos veces en el mismo frame combinando un [SubSource](SubSource-Flag-es) y [AddHits](AddHits-Flag-es).

En la libreria del Game Boy Advance hay un plataformero Navideño conocido como [Santa Claus Jr. Advance](http://retroachievements.org/Game/7152). Hay algunos logros de coleccionar varios dulces en cada uno de los Stages Bonus.

Esos logros se suponen que tendrian que ser algo simple, como esto:

| ID  | Special? | Memory   | Cmp | Type  | Mem/Val  | Hits |
| --- | -------- | -------- | --- | ----- | -------- | ---- |
| 1   |          | 0xDULCES | !=  | Delta | 0xDULCES | (N)  |
| 2   | ResetIf  | 0xSTAGE  | !=  | Value | 0xBONUS  |

Esto se traduciría "checa si el contador de dulces cambio `N` veces en el stage bonus".

**Nota**: estamos utilizando `0xDULCES != Delta 0xDULCES` (utilizando `!=`, y no `>`) porque cuando el jugador cuenta con 99 dulces y colecciona uno mas el contador se va a cero.

Sin embargo, hay un aspecto en este juego (y muchos otros) donde si el jugador colecciona 2 dulces a la vez el contador va a aumentar por 2 en el mismo frame. Cuando pasa el contador de hits es aumentado por uno mientras que el contador de dulces aumento en dos. Esto, obviamente, arruina la lógica que utilizamos arriba.

En manera que podamos evitar este problema tenemos que utilizar la técnica de [utilizar `SubSource` para contar incrementos específicos](SubSource-Flag-es#utilizando-subsource-para-contar-incrementos-especificos) combinado con una
[`AddHits` flag](AddHits-Flag-es).

Echemos un vistazo a la lógica del logro y así poder ver la explicación:

**Variables (Addresses)**

- `0x80dc`: Contador de Dulces.
- `0x809c`: ID de Stage.

Así que ahora la estructura de logro seria de esta manera:

![](https://i.imgur.com/ufPTDF3.png)

**Condiciones**

1. Junto con la condición 2, es un truco para ver si `0xDULCES - Delta 0xDULCES = 2`. En otras palabras, el contador de dulces fue incrementado por dos.

2. Utilizando a la vez con la condición 1 (como se explica arriba) y 3. Como se explica en [su respectiva pagina](AddHits-Flag-es), cuando la condición de `AddHits` es verdadera, el hit counter en la siguiente condición es incrementado. Entonces , en nuestro ejemplo de aquí, cuando condición 2 es verdadera, el hitcounter en condición 3 es incrementado.

3. Contador cuando el contador de dulces cambia.

4. Resetear contador si no se encuentra en un Stage Bonus.

Todas esta condiciones se pueden traducir como "mientras estés en un stage bonus, salta el logro si el contador de dulces cambia 99 veces, y si el contador de dulces es incrementado por 2 en el mismo frame, añade un cambio extra al contador de dulces."
