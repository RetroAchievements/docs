Un valor `Delta` es el valor del fotograma (frame) pasado. **Nota**: cuando utilizas `Delta` es implicito que te refieras a una direccion y no a un valor.

Ejemplos de como puede ser utilizado:

- Detectar si el nivel a sido incrementado: `nivel > nivel delta`. A lo que significas "el nivel actual es mas grande que el nivel encontrado en el fotograma pasado".
- Detectar daño: `salud < salud delta`. Que significa "la salud actual es mas pequeña la salud encontrada en el fotograma pasado". O simplemente puedes poner el antiguo valor del fotograma como un requisito. `salud delta = 1` que significa "el valor de salud tiene que ser 1 en el fotograma pasado para que salte el logro."

En la seccion de [Ejemplos Reales](/es/developer-docs/real-examples) hay algunos buenos ejemplos:

- [Utilizando Hit Counts como un Contador](/es/developer-docs/real-examples/using-hit-counts-as-a-timer)
- [Utilizando Valores Delta y Hit Counts para detectar un Incremento](/es/developer-docs/real-examples/using-delta-values-and-hit-counts-to-detect-an-increment)
