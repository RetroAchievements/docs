Resumiendo las cosas:

1. Inicia sesión en tu cuenta de github (o [crea una cuenta](https://github.com/join) si no cuentas con una).
2. Edita una pagina (o crea una nueva) en la [RAWiki](https://github.com/RetroAchievements/docs/wiki/). Tienes que utilizar el lenguaje de marcado Markdown (mas información mas abajo).
3. Tarde o temprano un moderador va a generar las paginas para [RADocs](https://docs.retroachievements.org).

## Markdown

Markdown es un lenguaje de marcado extremadamente ligero y fácil de aprender con una sintaxis de formateado de texto simple. Para contribuir en nuestro proyecto tienes que mínimo conocer los básicos de markdown. Aqui hay una buena pagina de referencia: [http://commonmark.org/help/](http://commonmark.org/help/), y [aquí puedes probar 10 minutos del tutorial](http://commonmark.org/help/tutorial/).

Ademas, esta wiki necesita ser escrita en cierto formato para que así se puedan convertir en las bonitas paginas estáticas de ya conoces. Esto es debido a que utilizamos [mkdocs](http://www.mkdocs.org/)) y este utiliza el markdown de python y github utiliza el markdown de github, entonces hay algunos pequeños problemas de formato que se tienen que tomar en cuenta.

### Encabezados

Los títulos (definidos por un `#`) necesitan seguir una progresión natural de la jerarquía del contenido de la pagina. Pero tu **NO PUEDES** dos encabezados de titulo (esos que tienen solamente un símbolo de `#`). De otra manera no se mostraran en la tabla de contenidos a la derecha de la pagina

Ej.

```
# Titulo
## Encabezado principal uno
### Sub Encabezado uno
### Sub Encabezado dos
## Encabezado Principal dos
```

etc.

### Enlaces

Los enlaces tienen que seguir la siguiente sintaxis

```
[Enlace](ruta del enlace)
```

**Nota**: Si este es un enlace a otra pagina de la wiki esto se hace con una ruta relativa:

```
[Tips y Trucos](/es/developer-docs/tips-and-tricks.html)
```

**NO** utilices el URL completo cuando estés linkeando a otra pagina de la wiki, como esto (**si, este es un ejemplo de lo que NO tienes que llegar a hacer**):

```
[Tips y Trucos](/es/developer-docs/tips-and-tricks.html)
```

### Imágenes

Enlaces para imágenes tienen que seguir la misma sintaxis que el ejemplo de abajo:

```
![Imagen](http://url/a.png)
```

**Nota:**: Si quieres llegar a almacenar imágenes para este proyecto de documentación, puedes publicarlas en [este tema de aquí](https://github.com/RetroAchievements/docs/issues/1) y utilizar el _hack de almacenamiento de imágenes de github_.

### Tablas

Una tabla simple se mira de esta manera:

```
Primer Encabezado     | Segundo Encabezado     | Tercer Encabezado
--------------------- | ---------------------- | ---------------------
Contenido de la Celda | Contenido de la Celda  | Contenido de la Celda
Contenido de la Celda | Contenido de la Celda  | Contenido de la Celda
Contenido de la Celda | Contenido de la Celda  | Contenido de la Celda
```

Y se debería de renderizar de esta manera:

| Primer Encabezado     | Segundo Encabezado    | Tercer Encabezado     |
| --------------------- | --------------------- | --------------------- |
| Contenido de la Celda | Contenido de la Celda | Contenido de la Celda |
| Contenido de la Celda | Contenido de la Celda | Contenido de la Celda |
| Contenido de la Celda | Contenido de la Celda | Contenido de la Celda |

Puedes especificar una formación en especifico por cada columna agregando dos puntos a las lineas del separador:

```
Primer Encabezado      | Segundo Encabezado       | Tercer Encabezado
:--------------------- | :----------------------: | ---------------------:
Contenido de la Celda  | Contenido de la Celda    | Contenido de la Celda
Contenido de la Celda  | Contenido de la Celda    | Contenido de la Celda
Contenido de la Celda  | Contenido de la Celda    | Contenido de la Celda
```

Resultado:

| Primer Encabezado     |  Segundo Encabezado   |     Tercer Encabezado |
| :-------------------- | :-------------------: | --------------------: |
| Contenido de la Celda | Contenido de la Celda | Contenido de la Celda |
| Contenido de la Celda | Contenido de la Celda | Contenido de la Celda |
| Contenido de la Celda | Contenido de la Celda | Contenido de la Celda |
