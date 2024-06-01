En el Editor de Logros (Achievement Editor), el campo de hasta la derecha es el Contador de Golpes (Hit Count).
![image](https://user-images.githubusercontent.com/32706333/48969526-38774c80-efbd-11e8-98ec-9d6c16dba022.png)

Por default es Cero, que significa que la condicion tiene que ser verdadera para qeu el logro se dispare.

Si agregas un contador de golpes (hit count), por ejemplo 5, significa que la condicion tiene va a ser verdadera hasta que se cumplan esos fotogramas (frames), y no se necesitan volver a cumplir de nuevo en cualquier otro momento.

**PORFAVOR, NOTA**: si una condicion tiene cero hit count, y llega al numero requirido, esta condicion ya no esta siendo buscada. Sigue permaneciendo como verdadera, **ALMENOS** que tengas un [`ResetIf`](ResetIf-Flag), que discutiremos mas abajo.

Condiciones con [`ResetIf`](ResetIf-Flag-es) y [`PauseIf`](PauseIf-Flag-es) tambien pueden tener hits. Sigue los links para mas informacion.

En la seccion de [Ejemplos de Verdad](Real-Examples-es) hay dos buenos ejemplos:

- [Utilizando Hit Counts como un Contador](Using-Hit-Counts-as-a-Timer-es)
- [Utilizando Valores Delta y Hit Counts para detectar un Incremento](Using-Delta-Values-and-Hit-Counts-to-Detect-an-Increment-es)
- [Simple ejemplo de como evadir el abuso en Estados de Guardado (Load States)](Simple-Example-of-How-to-Avoid-Load-State-Abusing-es)
