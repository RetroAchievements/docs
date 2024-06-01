Tomemos a [Streets of Rage 2 (Mega Drive)](http://retroachievements.org/Game/3)
como ejemplo, y al logro [Steel Grip - Derrota a 10 enemigos sin tirar tu arma](http://retroachievements.org/Achievement/55). Este se basa en cuatro condiciones:

**Variables (Addresses)**

- `0xef33`: sujetando un arma
- `0xef37`: tipo de arma
- `0xef4e`: numero de KOs (jugador 1)

![steelgrip-example](https://user-images.githubusercontent.com/8508804/33313210-32f5451e-d411-11e7-8042-2b9007a5cffb.png)

**Condiciones**

1. el jugador esta sujetando un arma. Requerimos que esto sea verdad, una vez. Esto no es realmente necesario, pero es util para mostrar progresión. Necesitamos que el jugador sujete un arma, mínimo una vez.

2. numero de KOs que el jugador a hecho. Es de 16-bit (esto significa que el valor puede ser mayor a 255), y utilizando un delta y los símbolos 'mayor que (greater than)', estamos diciendo que necesitamos que el numero de KOs sea mayor que el valor anterior, y necesitamos que esto pase 10 únicas veces. Cada vez que el valor actual sea mas grande que el valor anterior, el hit count va a subir por uno. El siguiente frame, el valor 'delta' tiene que incrementarse para ser el mismo que el valor actual, esto asegura que después de cada baja, el contador de KO se va a subir a uno, y el hit count va a subir a uno. **LIMITACIÓN**: si el numero de KOs sube sobre dos en el mismo frame, el hit count solo va a subir por uno. Es una pequeña desventaja que pasa mas común de lo que aparenta...

3. Se resetea todo el progreso, si el **tipo de arma** es diferente al ultimo tipo de arma conocido.

4. Se resetea **todo** el progreso, si el jugador no se encuentra cargando un arma.
