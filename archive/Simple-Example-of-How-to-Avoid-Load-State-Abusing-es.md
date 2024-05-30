(Editado ya que en el dll version 0.73 esto es usualmente incorrecto)

En este ejemplo el juego es [Zooming Secretary (NES)](http://retroachievements.org/Game/4650), y el logro es [Great Job! - Now you can take a rest](http://retroachievements.org/Achievement/55102), por pasar el juego.

En este queremos que el jugador hubiera pasado por todos los niveles y haber pasado el juego en orden para que salte el logro. Si el jugador utiliza un save state para ir directamente al ultimo mundo y terminarlo, el logro no va a salir.

**Variables (Addresses)**

- `0x06e9`: ID de Nivel. De 0 a 8 y 8 significa "juego terminado".

![greatjob-zoomingsecretary](https://user-images.githubusercontent.com/8508804/33465179-6fe458ac-d62d-11e7-8e9a-7be17c73a7a8.png)

**Condiciones**

1. Estar en el "nivel de juego terminado".
2. El nivel fue incrementado 8 veces.
3. Resetear el contador si el nivel decrementa.

Como este juego tiene 8 niveles, el valor en la variable del ID de Nivel tiene que ser incrementado 8 veces para pasar el juego. De esta manera el jugador no puede simplemente empezar el juego, cargar un estado de guardado e ir directamente al nivel final y pasar el juego. El/ella necesita pasar por todos los niveles.

El `ResetIf` se encuentra solo para evitar casos en el que el jugador este cargando estados de guardado y yendo hacia adelante y atrás por todos los niveles intentando que el contador llegue a 8. Si el/ella a cargar un estado yendo a un nivel mas bajo, el contador de hits pasara a cero.
