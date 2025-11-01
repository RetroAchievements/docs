**Nota**: es mas comun que esta tecnica no sea requerida para juegos mas simples. A si que, no es obligatoria para desarrolladores jr. (jr-devs).

El `SubSource` puede ser seleccionado en la columba de Bandera (Flag) en el Editor de Logros (Achievement Editor)

Funciona similarmente a `AddSource`, pero una bandera `SubSource` convierte el valor en memoria en un valor negativo.

**Nota 1**: `SubSource` **NO** es una bandera de subtraccion. Solo convierte el valor en negativo.

**Nota 2**: La ultima linea (sin el `AddSource` o `SubSource`) aun se **agrega** a la comparativa final (Es una condicion que se tiene que cumplir).

Utlizando este [ejemplo de uso de un `AddSource`](/es/developer-docs/flags/addsource), si lo remplazamos con un `SubSource` y con los mismos valores (`valor(0x8010) = 1` and `valor(0x8020) = 2`), la comparacion seria `-1 + 2 > 0`, o `1 > 0`.

## Utilizando SubSource para Contar Incrementos Especificos

`SubSource` tambien puede ser utilizado para rastrear incrementos especificos en una variable. La condicion que se muestra abajo dice que el actual valor en la variable `0x0080dc` menos el valor en el antiguo fotograma (Delta Frame) en la misma direccion deberia de ser igual a `2`. Efectivamente, esto significa que la condicion es verdadera cualquier vez que el valor en `0x0080dc` se incremente exactamente sobre dos.

![subsource](/public/subsource.png)

## Buscando un resultado negativo

Si el resultado en tu operacion con `SubSource` es un numero negativo, es posible buscarlo. A si es como se representan los numeros negativos:

- `-1` es `0xFFFFFFFF`
- `-2` es `0xFFFFFFFE`
- `-3` es `0xFFFFFFFD`
- `-4` es `0xFFFFFFFC`
- `-5` es `0xFFFFFFFB`
- `-6` es `0xFFFFFFFA`
- `-7` es `0xFFFFFFF9`
- y asi sucesivamente...

A si que, vamos a decir que quieres buscar si el `valor(0x8010) = 1` menos el `valor(0x8020) = 2` es igual a `-1`. Asi es como le harias:

![`SubSource` negative numbers](/public/subsource-negative-numbers.png)

Esto significa `-2 + 1 = -1`, que es verdad.

**Avanzado**: tambien es posible utilizar directamente numeros negativos en la columna de la izquierda con tus operaciones Sub/`AddSource`. Para hacerlo, recuerda cambiar el Tipo (Type) de `Mem` a `Value`, y utilizar los valores explicados arriba, como `0xFFFFFFE5` para `-27`, y `0xFFFFFFE3` para `-29`, por ejemplo:

![`SubSource` negative numbers 2](/public/subsource-negative-numbers2.png)

Esto significa `-2 + (-27) = -29`, que es `-2 - 27 = -29`, el cual es cierto.

De todos modos ten cuidado, si utilizas numeros negativos en una bandera con `SubSource`, va a resultar en un doble negativo, convirtiendo los numeros de nuevo a positivos. Hecha un vistazo:

![`SubSource` negative numbers 3](/public/subsource-negative-numbers3.png)

Esto significa `- (-2) + (-27) = -29`, que es `2 - 27 = -29`, que es `-25 = -29`, el cual es falso.
