_Tema Avanzado para Desarrolladores_

## ¿Que es un Set Bonus?

¿Se te ocurren algunos verdaderos retos para retar al jugador mas masoquista mientras diseñas un set? O tal vez ¿algunos extras que no están incluidos en el set core? ¿Tuviste muchas solicitudes de algo que no encajaba del todo en el set core? RetroAchievements da la bienvenida y motiva todos esos retos y diversión, pero como siempre nos gusta hacerlo de una manera organizada. Puntos Bonus para sets populares es una grandiosa idea!

## ¿Que debería de incluir en un Set Bonus?

Sets diseñados para probar la maestría en un juego y proveer nuevos y divertidos retos. Siempre deberías seguir el estandarte de "¿Es esto realmente diferente?" cuando te encuentres haciendo Sets Bonus.

- **Extras Divertidos**: Algunas veces un juego simplemente necesita mas diversión! ¿Tienes cosas que no se ajustarían muy bien en un set core? Un Set Bonus es un buen lugar para ellos.

- **Muy retadores**: Si generalmente se a escuchado que un logro es **demasiado dificil** para el jugador casual, este es un candidato principal para un Set Bonus. Ten en cuenta que también necesitas limitar la dificultad de un modo que un humano puede obtenerlo. La mayoría de los jugadores expertos aun no son calidad speed-runners.

- **Super Secretos o Secciones de Grindeo**: Estos usualmente frustran al jugador casual asta el final. Pero un jugador de un Set Bonus va a disfrutar el reto. Ejemplos: "Consigue que todos los personajes llegan hasta el máximo nivel", "Máxima Fuerzo, Máxima Defensa, Magia en todos los jugadores", "Pégale al objeto X numero de veces", "Gana # Mini-Juegos", "Consigue X items raros".

## ¿Como creo un Set Bonus?

Tu obviamente deberías [comentar la idea primero](Achievements-for-ROM-hacks-es#consultacion) . Es tu trabajo y una regla que se tiene que cumplir.

Actualmente, crear un set Bonus no es fácil. Tienes que básicamente aplicar un hack que no destruya el ROM a una copia de la ROM original y lanzar el parche IPS que incluye las diferencias para que la gente lo pueda disfrutar. Parchear un ROM con el parcheador IPS es relativamente fácil. Un jugador que disfrute de muchos ROM hacks para probar retos adicionales a de estar bastante acostumbrado. Sin embargo es algo que tienes que aceptar para lanzar tu Set Bonus, crear un parche no-destructivo.

Algunas veces un [administrador](http://retroachievements.org/user/RAdmin) (así como [Salsa](http://retroachievements.org/user/Salsa), que es la cabecilla del proyecto de los Sets Bonus y del creado de parches) puede ser capaz de guiarte por la dirección correcta. Si tu solamente desarrollas logros, adentrarte en la creación del parche puede llegar a ser algo complicado y confuso.

Si tu eres un programador o un artista y ya estas consiente del uso apropiado de las herramientas de hacking, los pasos se encuentras mas abajo para como generar un parche IPS cosmetico. Recuerda seguir los **lineamientos!**

**NOTA**

Este meto cambiara cuando los Sets Bonus sea una función integrada de RetroAchievements. Mientras tanto puede proveer parches IPS mientras esta función aun es agregada.

### **Paso 1** - Obtén el juego original

El primer paso para diseñar un Set Bonus es conseguir el ROM original del juego. Recuerda que nosotros no podemos proveer un método descarga para eso. ¿Ya tienes tu Dumpeador/Extractor de ROMs a la mano?

### **Paso 2** - Crea una copia del ROM original

Este es el archivo que vas a utilizar para editar para convertirlo en el ROM para tu set Bonus

### **Paso 3** - Agarra un editor hexadecimal o una herramienta de modificación de sprites (sprite-hacking tool).

Puedes saltarte este paso si es que ya cuentas con uno. Algunos juegos ya cuenta con herramientas de hackeo especializadas. Algunas de ellas se encuentran aquí disponibles en github, y también hay bastantes de ellas en ROMHacking.net, que esto aria tu trabajo aun mas fácil. Vas a necesitar un editor mas genérico si el juego no cuenta con una herramienta. La edición tiene que ser lo suficiente para que se puede crear un nuevo MD5sum para el archivo del ROM. Herramientas para editar tu ROM pueden ser encontradas en la [Pagina de Utilidades de ROMHacking.net's](http://www.romhacking.net/utilities/).

Aquí hay algunas búsquedas que te podrían resultar útiles:

- Sprite Hacking tools - [ROMHacking.net Filtered Search](http://www.romhacking.net/?page=utilities&category=10&platform=25&game=&author=&os=&level=&perpage=20&title=&desc=&utilsearch=Go)
- Texto y Editores Hex - [ROMHacking.net Filtered Search](http://www.romhacking.net/?page=utilities&category=13&platform=&game=&author=&os=&level=&perpage=20&title=&desc=&utilsearch=Go)

### **Paso 4** - Siguiendo las Reglas y Editando!

Por favor échale a la sesión de [Parches Cosméticos para Sets Bonus](Achievements-for-ROM-hacks-es#parches-para-sets-bonus) de los lineamientos del Linkeado de ROMs para mas información.

**ESTE PASO REQUIERE PEDIR APROBACIÓN ANTES DE SEGUIR AVANZANDO**

Es algo **integro** que solicites una aprobación antes de agregar/linkear cualquier cosa a RetroAchievements. Es tu trabajo y es parte del **Código de Conducta del Desarrollador de RetroAchievements**.

### **Paso 5** - Agrega el MD5 al nuevo Set Bonus

Después de recibir la aprobación, carga tu ROM parcheado en un Emulador de RA, y sigue las instrucciones de como linkear tu nuevo Set Bonus a tu ROM en el sitio web. Si tu juego produce un MD5 igual al de otro juego, procura hacer mas modificaciones al ROM para que este genere un MD5 nuevo otra vez y lo cargue como un juego nuevo.

### **Paso 6** - Modifica la pagina de detalles del set

Navega por tu perfil de usuario y procede a la nueva pagina de tu juego que debería de aparecer ahora. Puedes editar los detalles del juego, capturas de pantalla, e información desde el panel de **Dev Options** en la nueva pagina del set.

**PREGÚNTALE A UN [ADMINISTRADOR](http://retroachievements.org/user/RAdmin) PARA QUE RESEÑE TU TRABAJO DESPUÉS QUE HUBIERAS COMPLETADO ESTE PASO**

### **Paso 7** - Crea logros para el set, anúncialo y lánzalo.

Ahora ya puedes empezar a desarrollar logros para tu Set Bonus. Cuando termines, anuncia tu set e incluye tu parche IPS en el tema del foro después de a ver pasado los logros a Core. Actualmente los miembros necesitan aplicar tu parche al juego original así como lo hiciste en tus pruebas para que ellos puedan jugar tu Set Bonus. **No esta permitido lanzar el ROM parcheado en si. Tu tienes que SOLAMENTE lanzar el Parche IPS para cumplir con los lineamientos del sitio de no compartir públicamente material con derechos de autor/copyright en RetroAchievements).**
