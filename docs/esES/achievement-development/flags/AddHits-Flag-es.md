**Nota**: es mas comun que esta tecnica no sea requerida para juegos mas simples. A si que, no es obligatoria para desarrolladores jr. (jr-devs).

La bandera de `AddHits` puede ser seleccionada en la columna de Bandera (Flag) en el Editor de Logros (Achievement Editor)

Cuando una condicion con la bandera de `AddHits` es verdadera, el contador de hits (hit count) de la siguiente condicion sin el `AddHits` es incrementada.

Si la siguiente condicion si el `AddHits` no tiene un numero de hits especificos (hit target), la condicion `AddHits` no tiene un efecto en el logro.

La condicion `AddHits` no tiene que ser verdadera para el logro se dispare, pero la siguiente condicion sin el `AddHits` si tiene que serlo, que es afectada por la condicion que si tiene el `AddHits`.
