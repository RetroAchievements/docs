Estas son algunas severas herramientas y opciones disponibles para el desarrollador. Saber como utilizarlas apropiadamente mejorara la calidad en tus sets. Estas herramientas/opciones pueden ser utilizadas en el Editor de Logros (Achievement Editor):

![achievement_editor](https://user-images.githubusercontent.com/8508804/33130013-0eb07d96-cf79-11e7-8f73-6d737dfe5e16.png)

Para mas ayuda relacionada con esto, nuestro [servidor de Discord](https://discord.gg/dq2E4hE) esta siempre abierto para ayuda.

Aqui hay una lista de funciones disponibles:

- <a name="hit-counts"></a>[Hit Counts](/es/developer-docs/hit-counts) (contador de golpes)

- <a name="delta-values"></a>[Valores Delta](/es/developer-docs/delta-values)

- <a name="resetif"></a>[Bandera `ResetIf`](/es/developer-docs/flags/resetif)

  - <a name="resetif-with-hit-counts"></a>[`ResetIf` con hit counts](/es/developer-docs/flags/resetif#resetif-with-hit-counts) (contador de golpes)

- <a name="pauseif"></a>[Bandera `PauseIf`](/es/developer-docs/flags/pauseif)

  - <a name="pauseif-with-hit-counts"></a>[`PauseIf` con hit counts](/es/developer-docs/flags/pauseif#pauseif-with-hit-counts) (contador de golpes)

- <a name="addsource"></a>[Bandera `AddSource`](/es/developer-docs/flags/addsource)

- <a name="subsource"></a>[Bandera `SubSource`](/es/developer-docs/flags/subsource)

  - <a name="checking-for-a-negative-result"></a>[Buscando un resultado negativo](/es/developer-docs/flags/subsource#checking-for-a-negative-result)

- <a name="addhits"></a>[Bandera `AddHits`](/es/developer-docs/flags/addhits-subhits)

- **Combinando Banderas**: Un `ResetIf` y `PauseIf` pueden ser aplicados al numero que sea de condiciones `AddHits`, `AddSource`, y `SubSource`. Volviendo al [ejemplo del `AddSource`](/es/developer-docs/flags/addsource) de arriba, si un `ResetIf` se aplicara a la condicion 2, el logro se reiniciaría porque `1 + 2 > 0`.

- <a name="alt-groups"></a>[Alt Groups](/es/developer-docs/alt-groups) (Grupos Alternos)

- <a name="minimum-required-versions"></a>[Versiones Minimas para Funciones de Logica](/es/developer-docs/minimum-required-versions-for-logic-features)
