**Nota**: es mas comun que esta tecnica no sea requerida para juegos mas simples. A si que, no es obligatoria para desarrolladores jr. (jr-devs).

Un `AddSource` puede ser seleccionado en la columna de Bandera (Flag) en el Editor de Logros (Achievement Editor)

Cuando una condicion tiene la bandera de `Add Source`, el valor de esa variable es añadido al valor de la variable de la condicion de abajo, y la comparacion es hecha en la condicion que se encuentra abajo de la que si tiene la bandera de `Add Source`. Puede sonar un poco confuso, pero el ejemplo de aqui abajo va a aclarar como funciona:

![Add Source Example](https://user-images.githubusercontent.com/8508804/42702176-169aaf44-869f-11e8-979c-487a040e0145.png)

En este ejemplo el valor en `0x8010` va a ser agregado a el valor en `0x8020` y la comparacion es si la suma es mas grande que cero.

Si el valor en `0x8010` es `1` y el valor en `0x8020` is `2`, la comparacion seria `1 + 2 > 0`, o `3 > 0`.

**Nota**: Todo lo que este en los campos de comparacion (Cmp) en una condicion con una bandera de `Add Source` son ignorados.

Intentando resumir la explicacion con una imagen:

![Add Source Explained](https://user-images.githubusercontent.com/8508804/42702180-1712bca0-869f-11e8-9949-11021fa891bb.png)

**Nota**: puedes utilizar la bandera `Add Source` para sumar mas variables, como en el siguiente ejemplo:

![addsource1](https://user-images.githubusercontent.com/8508804/42702178-16c6d97a-869f-11e8-9c0d-84ef42ec4867.png)
