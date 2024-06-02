# Contribuyendo a la Documentación

::: info Nota Importante

Nuestro objetivo es tener todas las versiones de la documentación reflejadas. La documentación en inglés es la más completa y sirve como referencia principal. Cualquier nueva página que no exista en las documentaciones de otros idiomas debe ser añadida primero en la documentación en inglés para garantizar la consistencia en todas las traducciones. Si no tienes confianza en tu inglés, envía un mensaje privado a "[WritingTeam](https://retroachievements.org/messages/create?to=WritingTeam)" en el sitio de RetroAchievements. Estarán encantados de ayudarte.

:::

**Todas las contribuciones a la documentación son bienvenidas.**

Agradecemos tu interés en contribuir. Ya seas nuevo en Git o un desarrollador experimentado, estamos aquí para ayudarte. Aquí tienes cómo puedes mejorar nuestra documentación:

## Ediciones Rápidas

Si solo quieres hacer una edición rápida en una página existente, sigue estos sencillos pasos:

1. **Editar Esta Página**: Visita cualquier página en el sitio de la documentación, desplázate hasta el final y haz clic en el enlace "Edit this page".
2. **Bifurca el Repositorio**: Haz clic en el botón "Fork this repository". Esto creará tu propia copia de la documentación.
3. **Haz Tus Cambios**: Usa el editor de Markdown en la pantalla para realizar y previsualizar tus cambios.
4. **Enviar Cambios**: Haz clic en el botón "Commit changes". Escribe un título y una descripción para tus cambios, luego envíalos.
5. **Crear Pull Request**: Haz clic en el botón "Create pull request". Escribe un título y una descripción para tu pull request y envíalo para su revisión.

## Contribuciones Detalladas

Si deseas crear nuevas páginas o trabajar en múltiples páginas, sigue estos pasos:

### 1. Bifurca el Repositorio

- Ve a la [página del repositorio](https://github.com/RetroAchievements/docs) y haz clic en el botón "Fork". ![fork button](/public/fork-button.png)
- Presiona "Create fork" en el formulario que aparece.

### 2. Abre en VSCode

- Una vez que estés viendo tu fork (generalmente en `github.com/tu-usuario-aquí/docs`), presiona la tecla punto (".") en tu teclado para abrir VSCode en tu navegador.
- Usa el árbol de archivos a la izquierda para explorar la documentación, específicamente expandiendo la carpeta "docs".
- Usa el atajo Ctrl+P para buscar archivos, como "README".

![readme search](/public/readme-search.png)

### 3. Edita y Previsualiza

- Abre la paleta de comandos con Ctrl+Shift+P (o F1 en Firefox), busca "markdown preview" y selecciona "Markdown: Open Preview to the Side".
- Usa la previsualización de Markdown para ver tus cambios mientras los escribes.

![markdown preview](/public/markdown-preview.png)

### 4. Crea una Rama

- Haz clic en el nombre de la rama (generalmente `main`) en la esquina inferior izquierda de VSCode.
- Haz clic en "Create branch", nombra tu rama, presiona Enter y luego haz clic en "Switch to Branch".

![current branch](/public/current-branch.png)

![switch to branch](/public/switch-to-branch.png)

### 5. Guarda y Confirma

- Usa Ctrl+S para guardar los archivos mientras trabajas.
- Haz clic en el ícono de Control de Fuente a la izquierda, haz clic derecho en los archivos que has cambiado y haz clic en "Stage Changes".
- Escribe un mensaje de commit, luego haz clic en el botón "Commit & Push".

![commit changes](/public/commit-changes.png)

### 6. Crea Pull Request

- Abre la paleta de comandos con Ctrl+Shift+P (o F1 en Firefox) y usa el comando "Create Pull Request".
- Completa el formulario con un título y una descripción, luego haz clic en "Create".

![create pull request](/public/create-pull-request.png)

![pr form](/public/pr-form.png)

## Agregando Nuevas Páginas

Si deseas agregar una nueva página, necesitarás actualizar la configuración del `sidebar` en el archivo [es.ts](https://github.com/RetroAchievements/docs/blob/main/docs/.vitepress/config/en.ts). Así es como puedes conectar la navegación a las nuevas páginas.

Por ejemplo, si tu nuevo archivo Markdown es _docs/general/my-file.md_, añade esto a `sidebarGeneral()`:

```js
{
    text: "Mi Nueva Página",
    link: "/general/my-file",
}
```

También es una buena práctica añadir esto a las configuraciones de los otros idiomas para mantenerlos sincronizados, incluso si está comentado:

```js
// {
//     text: "My New Page",
//     link: "/general/my-file",
// }
```

## Ejecutando el Sitio de Documentación Localmente

Para ejecutar el sitio de documentación en tu computadora:

1. [Descarga e instala Node.js v20](https://nodejs.org/en/download/prebuilt-installer).

2. Instala Git. [Descarga e instala Git](https://git-scm.com/download/win) si eres un usuario de Windows.

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
