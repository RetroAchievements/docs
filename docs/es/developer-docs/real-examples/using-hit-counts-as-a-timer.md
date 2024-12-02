En este ejemplo vas a ver como los hit counts pueden ser utilizados como temporizador y recompensar un logro si la condición es verdadera por 10 segundos.

Veamos como en [Super Hang-On (Mega Drive)](http://retroachievements.org/Game/16) el logro [Speed Freak - Manten un minimo de 300kph por 10 segundos](http://retroachievements.org/Achievement/71) se ve en la ventana del Editor de Logros (Achievement Editor):

**Variables (Addresses)**

- `0x0055a`: es la velocidad.
- `0x0c757`: es 0x00 cuando el juego no se encuentra pausado.

![Logro de velocidad de Super Hang-On usando temporizador](/public/super-hang-on-timer-achievement-editor.png)

En este logro, queremos que una condición sea verdadera 600 veces consecutivamente. La razón de esto es que el Sega Genesis procesa fijamente 60 frames de lógica por segundo (mínimo NTSC?). Y también estamos buscando que la "velocidad sea sobre 300". Y aparte que el jugador mantenga la velocidad sin pausar el juego.

**Condiciones**

1. velocidad del jugador sea sobre 300 por 600 frames (o que hubieran pasado 10 segundos).

2. resetear el hit counter si la velocidad es inferior a 300.

3. resetear el hit counter si el jugador pausa el juego.
