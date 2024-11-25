En este ejemplo vas a aprender como crear un temporizador dentro del juego en base a la velocidad del framerate speed del juego.

Cada juego tiene una variable que esta constantemente aumentando, esta funciona como el motor de un carro, se esta constantemente moviendo sin importar lo que estés haciendo y empieza tan pronto como inicias el juego, el juego en si es tu carro y varios carros son mas rápidos que otros.

> Ten en cuenta que juegos PAL (50hz) tiene un framerate mas bajo a los juegos NTSC (60hz) y no son compatibles con este método. Es recomendable crear cada temporizador utilizando la versión NTSC del juego, a menos que la versión PAL sea la uncia versión existente y no exista un parche NTSC disponible.

## Variables (Addresses)

- `0x19`: Modo Demo: `01`=Activo, `00`=Inactivo
- `0x1a`: Motor del Juego (velocidad basada en el framerate)
- `0x25`: Juego Pausado: `01`=Si. `00`=No
- `0x2c`: Progresion del Juego: `03`=Antes que empiece el Stage, `04`=Stage iniciado, `08`=Stage terminado
- `0x30`: ID de Stage (en este ejemplo, Stage 1)

![](https://i.imgur.com/moghMLT.png)

Link al Logro: [Contra Speedrun](https://retroachievements.org/achievement/65443)

YouTube: [ResetIfHits Demo: Contra Stage 1 60 segundos Speedrun ](https://youtu.be/6PpdG04tM4s)

## Condiciones

1. Se activa el Hit del Logro cuando se entra al Stage (`03`solo aparece una vez por cada Stage).

2. Salta el Logro cuando un Stage a sido terminado.

3. Stage Actual (en este ejemplo, Stage 1).

4. Pausa el logro si el juego esta Pausado' (Pausa el Temporizador en el Logro).

5. Resetea el logro si se alcanzan `60` segundos (`3600` Hits). `1` segundo = `60Hits` (NTSC 60fps), `50Hits` PAL 50fps).

6. Resetea el logro si el `Modo Demo` esta activo.

7. Resetea el Temporizador del Logro cuando se entra a un nuevo Stage.
