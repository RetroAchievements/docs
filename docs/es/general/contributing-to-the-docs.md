---
title: Cómo contribuir a la documentación de RetroAchievements
description: Aprende cómo contribuir a la documentación de RetroAchievements con esta guía completa, incluyendo cómo hacer ediciones rápidas, contribuciones detalladas y mejores prácticas.
---

# Contribuir a la documentación

::: info Nota Importante

Nuestro objetivo es tener todas las versiones de la documentación reflejadas.
La documentación en inglés es la más completa y sirve como referencia principal.
Cualquier página nueva que no exista en las documentaciones de otros idiomas debe ser añadida primero en la documentación en inglés para garantizar la consistencia en todas las traducciones.
Si no tienes confianza en tu inglés, envía un mensaje privado a "[WritingTeam](https://retroachievements.org/messages/create?to=WritingTeam)" en el sitio de RetroAchievements.
Estarán encantados de ayudarte.

:::

**Todas las contribuciones a la documentación son bienvenidas.**

Agradecemos tu interés en contribuir. Ya seas nuevo en git o un desarrollador experimentado, estamos aquí para ayudarte. Aquí tienes cómo puedes ayudar a mejorar nuestra documentación:

## Ediciones rápidas

Si solamente deseas hacer una edición rápida a una página existente, sigue estos sencillos pasos:

1. **Editar esta página**: Visita cualquier página en el sitio de la documentación, desplázate hasta el final y haz clic en el enlace "Edit this page".
2. **Haz un "fork" del repositorio**: Haz clic en el botón "Fork this repository" (Bifurcar este repositorio). Esto creará tu propia copia de la documentación.
3. **Haz tus cambios**: Usa un editor de markdown para realizar y previsualizar tus cambios.
4. **Enviar cambios**: Haz clic en el botón "Commit changes" (guardar cambios). Escribe un título y una descripción para tus cambios, y envíalos.
5. **Crear Pull Request (PR)**: Haz clic en el botón "Create pull request" (Crear solicitud de incorporación de cambios). Escribe un título y una descripción para tu pull request y envíalo para su revisión.

## Contribuciones detalladas

Si deseas crear páginas nuevas, o trabajar en múltiples páginas, sigue estos pasos:

### 1. Haz un "fork" del repositorio

- Ve a la [página del repositorio](https://github.com/RetroAchievements/docs) y haz clic en el botón "fork" (bifurcar). ![fork button](/public/fork-button.png)
- Presiona "Create fork" (Crear bifurcación) en el formulario que aparece.

### 2. Apertura en VSCode

- Una vez que estés viendo tu "fork" (generalmente en `github.com/tu-usuario-aquí/docs`), presiona la tecla punto (".") en tu teclado para abrir VSCode en tu navegador.
- Usa el árbol de archivos de la izquierda para explorar la documentación, específicamente expandiendo la carpeta "docs".
- Usa el atajo Ctrl+P para buscar archivos, como el "README".

![buscando-el-readme](/public/readme-search.png)

### 3. Edita y previsualiza

- Abre la paleta de comandos con Ctrl+Shift+P (o F1 en Firefox), busca "markdown preview" (previsualizar markdown) y selecciona "Markdown: Open Preview to the Side".
- Usa la previsualización de markdown para ver tus cambios mientras los escribes.

![previsualizacion-de-markdown](/public/markdown-preview.png)

### 4. Crea una rama

- Haz clic en el nombre de la rama (generalmente `main`) en la esquina inferior izquierda del VSCode.
- Haz clic en "Create branch" (crear rama), nombra tu rama, presiona intro y luego haz clic en "Switch to Branch" (Cambiar de rama).

![rama-actual](/public/current-branch.png)

![cambiar-de-rama](/public/switch-to-branch.png)

### 5. Guardar y commit (confirmar)

- Usa Ctrl+S para guardar los archivos mientras trabajas.
- Haz clic en el icono de Source Control (control de versiones) a la izquierda, haz clic derecho en los archivos que has cambiado y haz clic en "Stage Changes" (Añadir cambios).
- Escribe un mensaje de commit, luego haz clic en el botón "Commit & Push" (confirmar y subir).

![confirmar-cambios](/public/commit-changes.png)

### 6. Crea un Pull Request (PR)

- Abre la paleta de comandos con Ctrl+Shift+P (o F1 en Firefox) y usa el comando "Create Pull Request" (Crear solicitud de incorporación de cambios).
- Completa el formulario con un título y una descripción, luego haz clic en "Create" (Crear).

![crear-pull-request](/public/create-pull-request.png)

![formulario-pr](/public/pr-form.png)

## Añadiendo nuevas páginas

Si deseas añadir una nueva página, necesitarás actualizar la configuración del `sidebar` en el [archivo es.ts](https://github.com/RetroAchievements/docs/blob/main/docs/.vitepress/config/en.ts). Así es como puedes conectar la navegación a las nuevas páginas.

Por ejemplo, si tu nuevo archivo markdown es _docs/general/my-file.md_, añade esto a `sidebarGeneral()`:

```js
{
    text: "Mi nueva página",
    link: "/general/my-file",
}
```

También es una buena práctica añadir esto a las configuraciones de los otros idiomas para mantenerlos sincronizados, incluso si está comentado:

```js
// {
//     text: "Mi nueva página",
//     link: "/general/my-file",
// }
```

## Ejecutando la documentación de forma local

Para ejecutar la documentación en tu ordenador:

1. [Descarga e instala Node.js v20](https://nodejs.org/en/download/prebuilt-installer).

2. Instala git. [Descargar e instalar Git](https://git-scm.com/download/win) si eres un usuario de Windows.

3. Abre un terminal y clona el repositorio:

```bash
git clone https://github.com/RetroAchievements/docs.git
```

4. Navega al repositorio clonado y ejecuta el servidor de desarrollo local:

```bash
cd docs
npm install
npm run dev
```

¡Eso es todo! Tu servidor local debería estar funcionando, permitiéndote previsualizar tus cambios.

## Markdown caveats

Markdown es un lenguaje de marcado ligero y extremadamente fácil de aprender con una sintaxis de formato de texto plano. Para contribuir en nuestro proyecto debes conocer al menos lo básico de markdown. Aquí tienes una buena referencia: [http://commonmark.org/help/](http://commonmark.org/help), y [aquí puedes probar un tutorial de 10 minutos](http://commonmark.org/help/tutorial/).

### Encabezados

Los encabezados (definidos por `#`) deben seguir una progresión natural de la jerarquía del contenido de la página.

```md
✅ BIEN

# Título

## Encabezado principal uno

### Subencabezado uno

### Subencabezado dos

## Encabezado principal dos
```

Cada página **debe** comenzar con un encabezado de título (`#`).

```md
🛑 MAL

## Encabezado principal uno

### Subencabezado uno

### Subencabezado dos

## Encabezado principal dos
```

No puedes tener dos encabezados de título (`#`).

```md
🛑 MUY MAL

# Título

# Título Dos

## Encabezado principal uno

### Subencabezado uno

### Subencabezado dos

## Encabezado principal dos
```

### Enlaces

Los enlaces internos deben seguir esta sintaxis:

```md
✅ BIEN

[Consejos y trucos](/developer-docs/tips-and-tricks)
```

No uses rutas absolutas al referenciar otra página en la documentación. VitePress detectará automáticamente y advertirá cuando los enlaces estén rotos, pero esta detección no se activa para rutas absolutas.

```md
🛑 MAL

[Consejos y trucos](/developer-docs/tips-and-tricks.html)
```

### Imágenes

Puedes añadir imágenes al proyecto colocándolas en el directorio _docs/public_.

Los enlaces a imágenes deben seguir esta sintaxis:

```md
✅ BIEN

![rama actual](/public/current-branch.png)
```

Intenta no referenciar imágenes en ningún sitio externo, incluido RetroAchievements. Es peligroso referenciar imágenes que no estén dentro de _docs/public_, ya que podrían romperse en cualquier momento.

```md
🛑 MAL

![Imagen](https://retroachievements.org/Badges/12345.png)
```

Siempre asegúrate de que tu texto dentro de corchetes sea accesible. Si la imagen se rompe por cualquier motivo, este texto es lo que verán los usuarios. Debe ser una descripción concisa de la imagen. Google castiga a las páginas que no tienen este texto y a veces las elimina por completo para que la gente no pueda encontrarlas. Esto es muy importante.

```md
🛑 MUY MAL

![](http://url/a.png)
```

### Tablas

Una tabla simple se ve así:

```md
| Primera cabecera   | Segunda cabecera   | Tercera cabecera   |
| ------------------ | ------------------ | ------------------ |
| Celda de contenido | Celda de contenido | Celda de contenido |
| Celda de contenido | Celda de contenido | Celda de contenido |
| Celda de contenido | Celda de contenido | Celda de contenido |
```

Debería renderizarse así:

| Primera cabecera   | Segunda cabecera   | Tercera cabecera   |
| ------------------ | ------------------ | ------------------ |
| Celda de contenido | Celda de contenido | Celda de contenido |
| Celda de contenido | Celda de contenido | Celda de contenido |
| Celda de contenido | Celda de contenido | Celda de contenido |

Puedes especificar la alineación para cada columna añadiendo dos puntos a las líneas de separación:

```md
| Primera cabecera | Segunda cabecera | Tercera cabecera |
| :--------------- | :--------------: | ---------------: |
| Izquierda        |      Centro      |          Derecha |
| Izquierda        |      Centro      |          Derecha |
| Izquierda        |      Centro      |          Derecha |
```

Resultados:

| Primera cabecera | Segunda cabecera | Tercera cabecera |
| :--------------- | :--------------: | ---------------: |
| Izquierda        |      Centro      |          Derecha |
| Izquierda        |      Centro      |          Derecha |
| Izquierda        |      Centro      |          Derecha |

## Componentes de VitePress

VitePress admite mucha funcionalidad adicional más allá del Markdown tradicional de GitHub. Todo se puede consultar [aquí](https://vitepress.dev/guide/markdown).

### Tabla de contenidos automática

**Entrada**

```md
[[toc]]
```

**Salida**

[[toc]]

### Contenedores de alerta

**Entrada**

```md
::: info
Esto es un cuadro de información.
:::

::: tip
Esto es un consejo.
:::

::: warning
Esto es una advertencia.
:::

::: danger
Esto es una advertencia de peligro.
:::

::: details
Esto es un bloque de detalles.
:::
```

**Salida**

::: info
Esto es un cuadro de información.
:::

::: tip
Esto es un consejo.
:::

::: warning
Esto es una advertencia.
:::

::: danger
Esto es una advertencia de peligro.
:::

::: details
Esto es un bloque de detalles.
:::
