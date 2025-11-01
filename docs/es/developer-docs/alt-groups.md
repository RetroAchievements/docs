Un logro puede tener grupos agregados a el que permiten requisitos alternativos para que el logro se desbloquee. A esto se le conoce como _Alt Groups_, (Grupos Alternativos)

Cuando utilizamos _Alt groups_, para que se dispare un logro, todas las condiciones en _Core group_ TIENEN que ser verdaderas. Y así también todas las condiciones de CUALQUIER _Alt group_ tienen que ser verdaderas. En otras palabras, cada _Alt group_ utiliza la logica `OR`.

## Ejemplo

En este simple ejemplo para Contra (NES) el logro requiere, "En un Stage mira hacia arriba o agáchate." Veamos que hay en el _Core group_ y en los _Alt groups_:

![Alt Groups: Core](/public/alt-groups-core.png)
En el grupo core: `0x18 = 5`. Esto checa si el jugador se encuentra en un Stage.

![Alt Groups: Alt1](/public/alt-groups-alt1.png)
En `Alt 01`: `0xbc = 1`. Esto checa si el jugador esta viendo hacia arriba.

![Alt Groups: Alt2](/public/alt-groups-alt2.png)
En `Alt 02`: `0xbc = 2`. Esto checa si el jugador esta agachado.

Mientras el jugador se encuentre en un stage. El grupo core es verdadero. Si el jugador mira hacia arriba, Alt 01 es verdadero. Si el jugador se agacha, Alt 02 es verdadero. Si core + Alt 01 Ó Alt 02 es verdadero, este logro se dispararia.

## Datos sobre los Alt Groups

- Para añadir o remover _Alt groups_ haz click en el boton `+` o `-` en la parte inferior izquierda del editor de logros (achievement editor).  
  ![Alt Groups: Add or remove](/public/alt-groups-add.png)

- Si quieres simplemente checar **ESTE** `O` **ESO** puedes dejar el core group en blanco y añadir **ESTE** en `Alt 01`, y **ESO** en `Alt 02`.

- No importa cuantos `Alt groups` tenga un logro, si el grupo Core es verdadero, solo un Alt tiene que ser verdadero para que el logro se dispare.

- Cuando utilizamos un [ResetIf](#resetif-es) y [PauseIf](#pauseif-es), el PauseIf solo pausa el grupo en el que se encuentre, pero el ResetIf resetea los hit counts en todos los grupos e impide que el logro se dispare mientras el reset se encuentre activado.

## Utilizando Alt Groups para Resets Condicionales

**Avanzado:** Un _Alt group_ puede ser utilizado para crear una condición ResetIf que solo se activa por cierto tiempo.

Si tu creas un _Alt group_ que contenga una condición PauseIf y una condicion ResetIf, puedes utilizar la condición PauseIf para pausar la condición ResetIf sobre ciertas circunstancias y sin deshabilitar todo el logro.

- Un Reset afecta a todos los grupos, incluyendo el grupo core. El Pause solo pausara el _Alt group_ que contenga el PauseIf.
- Esta lógica puede ser aplicada a múltiples _Alt groups_ en el mismo logro para proteger varios Reset de ser disparados por separado.
- **Ten en cuenta** de tener mínimo un _Alt group_ que sea verdadero o el logro no se disparara. La manera mas facil de hacer esto es crear un alt group extra que tenga una condición que sea `Valor 1 = Valor 1`.
- **Cuidado**: Si tu condición Pause es falsa, y la condición Reset también es falsa, el grupo va a ser considerado como verdadero al menos que tengas otra condición falsa en el grupo. Cuando utilizamos un _Alt group_ para segregar un PauseIf, ten en cuenta de incluir siempre una condición que sea falsa como `Valor 1 = Valor 0`.
