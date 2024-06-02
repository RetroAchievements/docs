**Relacionado:** [Logros para hacks de ROM](/es/guidelines/content/achievements-for-rom-hacks.html), [Sets Bonus](/es/guidelines/content/subsets.html)

Solamente un set es permitido por juego y por consola. Esto es aplica en casos de existente revisiones oficiales (ex. Rev A), parches oficiales, no-oficiales, y otras regiones.

[Sets Bonus](/es/guidelines/content/subsets.html) son una excepción de esta esta regla, pero son considerado como una extensión del set estándar y estos siguen reglas diferentes sobre el tipo de logros que son permitidos.

## Selección de ROM

Casi cualquier juego cuenta con múltiples versiones del ROM , algunas veces asta docenas. Y algunas veces hay diferencias bastante mayores hasta el punto en el que, un ROM ni siquiera es compatible con los logros de otro ROM del mismo juego. Entonces, encontrar el mejor ROM para desarrollar logros es importante y tiene que hacerse cuidadosamente.

- **Seleccionando la Región**: Cuando sea posible escoge ROMs de `NTSC USA` no-intro, porque 60 FPS es una experiencia mucho mas fluida. Lanzamientos `PAL Europeos` corren a 50 FPS, y la mayoría de los casos tienen que ser evadidos. Lanzamientos `NTSC Japan` también corren a 60 FPS , pero solamente son la mejor opción si el juego fue exclusivamente
  lanzado en Japón. Utilizar como recurso la versión `PAL Europea` de un juego debería de ser el ultimo recurso (Juego exclusivamente de Europa solamente), y son tipicamente muy pocos juegos y bastante _únicos_ también, de toda la librería de la consola. El problema de PAL/NTSC no aplica a la emulación del GBA, que corre todas las versiones regionales a la misma cantidad de FPS.

- **No Mods**: No utilizes ROM con una pantalla de inicio modificada/personalizada como Mode7 o RisingSun porque arruinan completamente la RAM.

- **No Trainers**: No utilices un ROM que incluya soporte para cheats integrado. Estos son comúnmente referidos como `ROM trainers`, no son oficiales, y no son compatibles por Retro Achievements de ninguna manera.

## No-Intro

ROMs de [No-Intro](http://www.no-intro.org/) son el tipo de ROMs preferidos a ser linkeados a la base de datos de RA, y son los que deberías de utilizar para hacer tu set cuando sea esto posible. Ellos filtran malos dumps, hacks, fakes, overdumps, underdumps, etc. y solo muestra los ROMs que son mas fieles al cartucho original. ROMs de No-Intro ROMs pueden ser identificados de la siguiente manera:

**Nombre del Juego (Región) (Lenguajes Disponibles si es que aplica) (Revisión Actual si es que aplica)**
_**Ejemplo:** Diddy Kong Racing (USA) (En,Fr) (Rev A)_

GoodTools **_Nombre del Juego (Región) [!]_**, aunque también algunos de los ROMs **_Nombre del Juego (Región) (Grupo de Rom Dumpers)_** son de una era mas temprana y tal vez sean iguales a la base de datos de No-Intro pero no es algo garantizado.

Puedes verificar [aquí](https://datomatic.no-intro.org/) que el checksum de tu ROM concuerda con el que se encuentra en la base de datos de No-Intro. Desafortunadamente algunos emuladores de RA no calculan correctamente el checksum (como el de NES) así que tal vez necesites encontrar tu checksum desde [otra fuente](http://www.onlinemd5.com/).

## Parches de Traducción

(también mira: [Póliza de Localización de ROM](#póliza-de-localización-de-rom) mas abajo)

Ingles es el lenguaje primario de RetroAchievements. Los parches de traducción son algunas veces aplicados por los desarrolladores a títulos que no se encuentran en ingles. En estos casos instrucciones de como parchear el ROM se van a encontrar en el foro del juego. Proveer un parche de traducción a un titulo existente permite que el juego sea mas accesible a otros usuarios. Tu tienes que inspeccionar profundamente la memoria para ver si el parche es completamente compatible con el set de logros y así mandarlo como aprobación para que lo cheque un desarrollador y así lo pueda postear en el foro del juego.

Algunas veces los parches de traducción pueden llegar a diferir críticamente del MD5 del desarrollador encontrando así diferencias en la memoria original. Antes de linkear estos parches checa con el desarrollador original del juego o haz pruebas profundas en memoria para asegurarte que es completamente compatible. Puedes agregar parches de traducción que te hubieras encontrado en linea mientras todos los logros funcionen de manera correcta y no hagan al juego mas o menos dificil.

## Póliza de Localización de ROM

Como Ingles es el lenguaje principal de la comunidad, ROMs en Ingles son preferidos. Cuando escojas que ROM deseas para construir logros entre todas las versiones regionales disponibles tu tienes que darle prioridad a los **ROMs No-Intro Americanos para consolas que no son portátiles** y **ROMs Europeos para consolas portátiles**.

Damos la bienvenida y nos gustaría seguir mejorando nuestro soporte para todas las versiones regionales, especialmente Japones (ya que la mayoría de nuestra librería de juegos fueron creados en Japón). Aparte, algunos usuarios simplemente prefieren versión regional en especifico de un juego y es al final de cuentas es mucho mejor incluir un soporte amplio para que cada buen ROM este linkeado a una buena entrada y así se le den los logros apropiados.

Cuando miramos en como juegos con diferentes versiones regionales son manejados nuestro estándar es **una entrada por juego y por consola**. Lo ideal seria que si alguien carga la versión Americana o Japonesa de Donkey Kong, Pac-Man o Contra, la gente consiga los mismos logros para la misma entrada. Pero hay algunas situaciones donde es mejor para nuestra librería y jugadores separar las versiones regionales en sus propia entradas únicas. Si la comunidad tiene la razón en creer que es mejor que una entrada se parta en dos, esto puede ser revisado y aprobado por el equipo de desarrolladores después de un votación y discusión.

### Diferencias de Localización

El tipo de cambios hechos durante una localización (mas comúnmente de Japones a Ingles) pueden varear bruscamente. Cualquiera de los siguientes cambios pueden ser resultados de una localización:

- Poquito o realmente ningún gran cambio;
- Passwords remplazan el sistema de guardado;
- Corrección de Bugs;
- Ligeras o traducciones extensas;
- Ligeros o cambios cosméticos extensivos incluyendo estos, elementos considerados como ofensivos censurados, cambios en sfx, o assets licenciados cambiados a genéricos, o personajes desconocidos convertidos en personajes de Nintendo (ej. Tetris Attack, Super Mario Bros. 2);
- Stages agregados, modificados o removidos;
- Físicas y mecánicas del juego modificadas;
- Modos de Juego, niveles de dificultad y opciones del juego modificadas o removidas;
- Cheats o modo debug agregado o removido;
- El juego fue rebalanceado haciéndolo mas fácil o mas dificil, algunas veces significativamente;
- Dos juegos fueron combinados en uno;
- y mucho mas.

Debido a estas variantes y para evitar llenar la base de datos de entradas duplicadas innecesarias nuestra meta es minimizar el numero de sets separados. Para que un set sea separado necesita razones suficientes; nos tomamos bastante cuidado cuando tenemos que aprobar este tipo de casos.

### Separando una entrada regional

#### 1. Obtener aprobación por medio del canal de Discord **#revision-voting** es requerido.

La aprobación sigue el mismo método de votaciones como cuando se va a trabajar una revisión, como postear tu plan en el foro del juego y en el canal de Discord de **#revision-voting**; permitiendo tiempo para discutirlo y esperar las 72 horas para que la mayoría pueda votar en las votaciones.

Recuerda que la meta de reducir la duplicación de entradas; solo se permite que un set se separe cuando es realmente comprensible.

El desarrollador que intente separar un set tiene que tener un fuerte motivo por el que el set merezca una nueva entrada y porque no es posible crear la experiencia que se desea con solamente una entrada.

Los Desarrolladores que busquen partir un set tienen que venir con el acto de buena fe. Los Sets tienen que ser partidos por el bien de nuestra librería de juegos y la comunidad y no por una manera egoísta de re-hacer un set o buscar puntos de desarrollador gratis.

#### 2. Tal vez _podría_ ser aceptable separar un set si

1. Cuenta con **grandes cambios estéticos** a el punto donde puede ser confundido como un juego completamente nuevo.
2. Cuenta con **grandes cambios de balance** como cambios significativos en la dificultad.
3. Cuenta con **grandes cambios de contenido** como nuevos modos de juego, stages bastante modificados, nuevas abilidades, etc.
4. Cuenta con **grandes cambios en las mecánicas**.

Ejemplos de juegos que califican:

- **Esperando ejemplos de precedentes**

#### 3. Es _probablemente no aceptable_ partir un set cuando

1. El gameplay, balance, contenido del juego o mecánicas están mayormente intactas.
2. Varias de las versiones examinadas (como Rev A) son de la misma region.
3. Una versión es ligeramente mas fácil/dificil que la otra.
4. El único cambio es una traducción o cambio un nombre.
5. Cambios cosméticos menores o moderados.
6. Cheats o modo debug fueron agregados o removidos.

Considerando todo esto, aun depende de la consideración de los desarrolladores.

Ejemplos de juegos que (probablemente) no califican:

- Super Mario Bros. (NES); el lanzamiento J y US es el mismo archivo.
- Earthbound, Chrono Trigger, Bionic Commando (NES); las (principales) diferencias son ligeramente cosméticas, traducciones y censura.
- Rockman/Mega Man (NES); la diferencia principal siendo algunos cambios en los sfx y un nuevo titulo y pantalla de titulo.
- The Legend of Zelda (NES), A Link to the Past (SNES); mas alla de la traduccion, la diferencia principal en la versión Americana es de que varios bugs fueron corregidos.
- Contra (NES); la version de Famicom tiene fondos animados, mas imágenes, modo de selección de stages, etc. La versión E (Europea) tiene un nuevo nombre Probotector y los sprites de personajes y enemigos fueron cambiados por robots.

#### 4. Después de que un set fue aprobado para ser partido

No es aceptable simplemente duplicar los sets en dos entradas diferentes. Sets separados tienen que tratarse como una nueva entrada y no un un sub-set (donde los sets Bonus son sub-sets). Estos tienen que tener un sentimiento diferente, retos que hablen de las funciones únicas del juego que causaron que este se separara en su propia entrada en primer lugar.
