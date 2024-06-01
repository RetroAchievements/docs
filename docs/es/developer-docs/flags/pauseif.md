Un `PauseIf` (PausarSi) puede ser seleccionado en la columna de Bandera (Flag) en el Editor de Logros (Achievement Editor)

Mientras sea verdadero, el `PauseIf` pausa la actividad de todas las condiciones **en el mismo grupo**. _No_ pausa condiciones en otros grupos (mas sobre [Grupos Alternos (Alt Groups)](/es/developer-docs/alt-groups.html) abajo).

**Nota**: ten en menta que _todas las condiciones_ en la oracion anterior incluye condiciones `ResetIf`! En otras palabras **Un `ResetIf` no va a funcionar si un `PauseIf` esta activo**.

Un `PauseIf` es usualmente para prevenir hit counts en una situacion especifica (como pausar el juego). Tambien se utiliza cuando quieres mantener los contadores de hits (hit counts) capturados anteriormente, pero no se quiere incrementar o reseatear mientras este sucediendo algo.

## `PauseIf` con hit counts

Una condicion `PauseIf` con un contador de hits (hit count) especifico solo se va a disparar cuando el numero de hits se cumplan. Una vez que el contador de hits (Hit Counts) se cumpla, el grupo se **mantiene pausado asta que un `ResetIf`en _otro_ grupo sea verdadera** o hasta que se reinicie el juego. Un `PauseIf` sin un contador de hits (Hit Count) se va a terminar de pausar cuando la condicion ya no sea verdadera.
