Un `ResetIf` (ResetearSi) puede ser elegido en la columna de Bandera (Flag) en el Editor de Logros (Achievement Editor)

Si la condicion asociada es verdad, **todos los** [hit counts](/es/developer-docs/hit-counts) en el logro se van a resetear a 0. Esto incluye hit counts en otros grupos (mas sobre eso en [Alt Groups (Grupos Alternos)](/es/developer-docs/alt-groups) mas abajo).

El logro no se va a disparar si uno o mas condiciones `ResetIf` son verdaderas, incluse si no hay condiciones que necesitan hit counts (contadores de golpes).

Puedes encontrar muchos ejemplos de `ResetIf` en la [pagina de Ejemplos Reales](/es/developer-docs/real-examples).

## `ResetIf` con hit counts

Una condicion `ResetIf` con un contador de golpes (hit count) solo se va a cumplir cuando el numero de hits necesarios se cumpla.

**Nota**: Si otra condicion `ResetIf` se cumple, todas las condiciones, incluido el `ResetIf` con su hit count se van a reinisiar sus contadores de golpes (hit count) a 0.

Es muy comun utilizar una condicion con un hit count de 1 como proceso para empezar a hacer un logro, y utilizar un `ResetIf` para cancel el logro antes de la condicion se cumpla. Un ejemplo comun es un logro sin recivir daño: "Desde el principio de el (nivel/combate), resetear si sea recivido daño, que salte el logro al final de el (nivel/combate)". Cuando la condicion para empezar el nivel es verdadera, un hit count es capturado. Si aun sigue capturado cuando la condicion del final es verdadera, el logro va a saltar. Si la condicion del `ResetIf` se dispara, el hit count en la condicion de empezar se va a regresar a zero, lo cual hace la condicion falsa cuando quiera evaluar si ya se cumplio la condicion final, y el logro no va a saltar.
