# Portafolio Windows 98

Portafolio y currículum de Nel con la interfaz del escritorio de Windows 98.
La pieza central es el explorador de carpetas con el panel **Web View** a la
izquierda: un clic sobre un elemento muestra su descripción, doble clic lo abre
en una ventana.

## Archivos

Cada archivo declara su nivel en su cabecera: **editable** (se modifica a
mano), **generado** (lo produce una herramienta; se regenera, no se edita) o
**vendor** (de terceros; se vuelve a descargar, nunca se retoca — cada
carpeta vendor tiene un `ORIGEN.md` que dice de dónde salió).

| Archivo | Qué contiene | Nivel |
|---|---|---|
| `index.html` | Esqueleto y el texto largo de cada documento (templates) | Editable |
| `css/estilos.css` | Todo el CSS, con banderas de sección | Editable |
| `js/app.js` | Toda la lógica, en secciones numeradas | Editable |
| `js/config.js` | Estructura: carpetas, ítems, descripciones, contacto | Editable (el de uso diario) |
| `js/iconos.js` | 22 íconos de Win98 en base64, dos tamaños cada uno | Generado |
| `img/vendor/os-gui/` | Botones de barra de título (MIT) | Vendor |
| `img/vendor/win98/` | Nubes, línea y tiras de íconos del explorador | Vendor |

Los datos de contacto viven SOLO en `js/config.js` (`CONFIG.usuario`): los
`<span data-usuario="…">` de los templates se rellenan solos al abrir cada
documento. Nunca escribir un correo o usuario de GitHub directo en un
template.

Los templates de `index.html` van entre los marcadores
`<!-- CONTENIDO:inicio -->` y `<!-- CONTENIDO:fin -->`: esa es la zona que
el futuro `herramientas/construir.js` podrá regenerar de forma determinista.

## Restricciones duras

Estas no se negocian. Son la razón de ser del proyecto.

- **Funciona abriendo el archivo desde el disco** (`file://`), sin servidor.
- **Sin herramientas de compilación.** Nada de npm, bundlers ni pasos de build.
- **Dependencias externas y frameworks: sí, pero vendorizados y sin build.**
  Se pueden usar librerías como [os-gui](https://github.com/1j01/os-gui), o un
  framework (Vue, Alpine, Preact, etc.), siempre que corran con `<script src>`
  plano —su build ya hecho, sin paso de compilación propio— y que sus archivos
  (CSS, JS, sprites) se descarguen y vivan dentro del repo. **Nada de CDN:** el
  portafolio tiene que seguir funcionando sin internet, abriendo el archivo
  desde el disco.
- **Nada de `fetch()` ni módulos ES.** CORS los bloquea en `file://`. Por eso la
  configuración se carga con `<script src>` clásico, que sí funciona.
- **Nada de `localStorage` ni `sessionStorage`.**
- El orden de carga importa: `js/iconos.js`, después `js/config.js`,
  después `js/app.js`.

## Cómo agregar contenido

### Un proyecto nuevo

1. En `js/config.js`, agregar un ítem al arreglo `items` de la carpeta que
   corresponda. Campos: `id`, `nombre`, `icono`, `titulo`, `desc`, y los
   opcionales `repo`, `demo`, `oculto`.
2. En `index.html`, al final, agregar el bloque
   `<template data-doc="ID">` con el mismo `id`. Es HTML normal.

Si falta el template, el documento se abre igual y avisa cuál falta. No hay
falla silenciosa.

### Una carpeta nueva

Copiar un bloque completo de `carpetas` en `js/config.js` y cambiarle el `id`.
Aparece sola en el escritorio, en el explorador y en el menú Inicio.

### Un ícono nuevo

`js/iconos.js` es generado, no se edita a mano. Cada entrada tiene `g` (32 px,
escritorio y explorador) y `p` (16 px, barras). Si una clave no existe ahí, la
función `ico()` cae automáticamente al SVG dibujado a mano del objeto `ICONOS`
en `js/app.js`. **Ese respaldo no se puede romper:** si se borra
`js/iconos.js`, el portafolio tiene que seguir funcionando completo.

## Cómo está organizado el código

`js/app.js` tiene el JavaScript numerado por secciones:

1. Íconos SVG de respaldo, utilidades de enlaces y la función `ico()`
2. Gestor de ventanas: crear, enfocar, minimizar, maximizar, arrastrar
3. Explorador: navegación, panel Web View, historial de Atrás y Adelante
4. Documentos: clona el `<template>` correspondiente
5. Enrutador por hash
6. Diálogos modales
7. Escritorio, menú Inicio y reloj
8. Secuencia de arranque
9. Inicialización

### Enrutador

`#proyectos` abre la carpeta, `#proyectos/nibi` abre el documento. La dirección
se actualiza sola al navegar. La bandera `hashPropio` distingue los cambios que
hace la aplicación de los que hace el usuario, para no entrar en bucle.

### Secuencia de arranque

POST de BIOS con test de memoria, después la pantalla de carga, después el
escritorio. Cualquier tecla o clic la omite. Si el sistema tiene reducción de
movimiento activada, se salta completa. `Inicio → Apagar → Reiniciar` la repite.

## Convenciones visuales

Cambiarlas rompe la ilusión, que es lo único que este proyecto tiene que lograr.

- Paleta en variables CSS: `--gris #c0c0c0`, `--navy #000080`, `--teal #008080`,
  `--gris-osc #808080`, `--gris-claro #dfdfdf`.
- Relieves con las clases `.out` (saliente) e `.in` (hundido). No inventar
  sombras nuevas: se usan esas dos.
- Tipografía de 11 px, `MS Sans Serif` con Tahoma de respaldo. Los títulos
  grandes usan Verdana, que es lo que usaba el Web View real.
- Los íconos llevan `image-rendering: pixelated`. Nunca escalar un ícono de
  16 px hacia arriba: existe la versión de 32 px para eso.
- Sin animaciones fuera de época. Sin sombras difuminadas, sin esquinas
  redondeadas, sin transiciones suaves.

## Cómo probar

Abrir `index.html` con doble clic. Si funciona así, funciona en todas
partes. Probar siempre desde el disco, nunca solo con servidor local: un
servidor esconde justamente los errores que este proyecto tiene que evitar.

Revisar después de cada cambio: que el arranque corra completo, que Atrás y
Adelante mantengan el historial, que los enlaces `#carpeta/documento` abran
directo, y que borrando `js/iconos.js` siga andando todo.

Probar también en pantalla angosta, no solo achicando la ventana del navegador:
las herramientas de desarrollo con emulación táctil activada revelan los
problemas de interacción que el mouse esconde.

## Comportamiento responsivo

El portafolio tiene que funcionar en celular. Buena parte de quien reciba el
enlace lo va a abrir desde el teléfono, y un currículum que no se puede leer ahí
no cumple su función.

Hay una tensión real que conviene tener presente: el escritorio de Windows 98 es
una metáfora pensada para mouse y pantalla grande. Ventanas arrastrables, doble
clic y menús con hover no existen en táctil. La solución no es reproducir el
escritorio en miniatura, sino conservar la identidad visual y adaptar la
interacción.

### Qué se conserva y qué se adapta

- **La barra de tareas se queda siempre.** Es el ancla de toda la metáfora. Si
  desaparece, deja de leerse como Windows.
- **Bajo 700 px las ventanas abren maximizadas** y sin arrastre. En pantalla
  chica una ventana flotante es un estorbo, no un guiño.
- **El panel Web View pasa arriba**, sobre la grilla de íconos, en vez de quedar
  a la izquierda. La descripción sigue siendo el corazón del proyecto.
- **El doble clic no existe en táctil.** El primer toque selecciona y muestra la
  descripción; el segundo toque sobre el mismo elemento lo abre. Se replica el
  comportamiento sin depender de la velocidad del gesto.
- **Nada puede depender solo de hover.** El menú Inicio y la barra de menús
  necesitan responder al toque.

### Reglas concretas

- Ancho mínimo objetivo: **360 px**. Probar en 360, 768 y 1280.
- Áreas táctiles de al menos 32 px. Los botones de la barra de título son de
  16×14 px por fidelidad, así que en táctil hay que ampliar su zona activa sin
  cambiar su tamaño visual.
- Los rótulos de la barra de herramientas se ocultan y quedan solo los íconos.
- Los íconos del escritorio se acomodan en grilla, nunca en columna única.
- El arranque de BIOS baja a 11 px y la pantalla de carga achica el logo.
- Nunca desactivar el zoom del navegador ni fijar `user-scalable=no`.

### Estado

Implementado hasta ahora: apilado del panel Web View, grilla de íconos más
angosta, rótulos ocultos en la barra de herramientas y ajuste del arranque.
Falta lo que depende de la interacción táctil: ventanas maximizadas por
defecto, el segundo toque para abrir y las áreas activas ampliadas.

## Estructura de carpetas

La separación de archivos ya está hecha (CSS, lógica y configuración viven
en sus propios archivos). Lo que sigue pendiente de esta estructura es
`contenido/` con su `herramientas/construir.js`, y las capturas en
`img/proyectos/`.

Lo que la hace posible: desde `file://` solo están bloqueados `fetch()` y los
módulos ES. `<link rel="stylesheet">`, `<script src>` e `<img src>` cargan sin
problema. O sea que el proyecto se puede partir en varios archivos sin tocar
ninguna restricción dura.

```
index.html                esqueleto y contenido inyectado
css/estilos.css
js/app.js
js/config.js
js/iconos.js              generado
contenido/
  proyectos/*.md
  bitacora/*.md
img/
  proyectos/              capturas de los visores
  escritorio/             fondos y texturas
herramientas/construir.js script de autoría, no de ejecución
docs/captura.png
README.md
LICENSE
```

### Entradas en markdown

Los `.md` no se pueden leer en tiempo de ejecución, así que se convierten antes.
`herramientas/construir.js` recorre `contenido/`, transforma cada archivo a HTML
y lo inserta en `index.html` como `<template data-doc="ID">`.

La distinción importa y no contradice las restricciones duras: es una
herramienta **de autoría**, no una dependencia de ejecución. Nadie necesita Node
para ver el portafolio, igual que `js/iconos.js` ya es un archivo generado. Lo que
se publica sigue abriéndose con doble clic.

Si el blog resulta ser ocasional y no justifica el script, la alternativa es
seguir escribiendo directamente en bloques `<template>`. Decisión de volumen,
no de arquitectura.

### Vista Detalles

El explorador real tenía tres vistas: Iconos grandes, Lista y Detalles. Falta
implementar la última, con columnas Nombre, Tamaño, Tipo y Modificado, y orden
al hacer clic en el encabezado.

Es la interfaz correcta para un listado de entradas de blog y sale casi gratis
sobre la estructura de datos que ya existe. De todo lo pendiente, es lo que más
rinde por esfuerzo.

### Campo `fecha`

Agregar `fecha` como campo opcional de cada ítem en `js/config.js`. El panel Web
View lo muestra como "Modificado:", igual que el original. Sirve para ordenar la
bitácora y para que se note qué proyectos siguen vivos.

### Bitácora

Carpeta nueva en `js/config.js`, con ícono de Bloc de notas y entradas nombradas
como archivos de la época: `2026-08-27 Reproyectar sin sufrir.txt`.

### Imágenes

Las capturas van en `img/` como archivos, no en base64: una sola captura pesa
más que los 22 íconos juntos. La consecuencia es que el portafolio deja de
poder enviarse por correo como archivo suelto. Con Pages publicado eso deja de
importar, pero es una renuncia consciente, no un descuido.

## Publicación en GitHub Pages

El archivo principal se llama `index.html`, no `portafolio.html`. GitHub Pages
sirve el `index.html` de la raíz, así que la URL queda limpia y los enlaces por
hash siguen funcionando igual.

Como todo es estático y autocontenido, Pages no necesita configuración: se
activa apuntando a la rama principal y la raíz del repositorio. No hay paso de
build ni acción que agregar.

### Estructura del repositorio

```
index.html          esqueleto + templates de contenido
css/estilos.css     estilos
js/app.js           lógica
js/config.js        estructura del portafolio (editable)
js/iconos.js        íconos en base64 (generado)
img/                gráficos propios y vendorizados
docs/captura.png    captura para el README
README.md
LICENSE
```

### README y About

El repositorio necesita su propio `README.md`, con el mismo molde que los demás
proyectos de Nel. Este tiene una ventaja: la captura de pantalla explica el
proyecto mejor que cualquier párrafo, así que va arriba de todo.

Campos del About, que suelen quedar vacíos y son lo que aparece en las
búsquedas:

- **Description:** una línea de menos de 120 caracteres.
- **Topics:** `windows-98`, `portfolio`, `gis`, `vanilla-js`, `retro-ui`,
  `chile`.
- **Website:** la URL de Pages una vez publicado.

### Licencia

El código es de Nel y va con licencia MIT. Los íconos en mapa de bits no lo
son: provienen del sistema operativo y son de Microsoft. Ambas cosas se
declaran por separado en el README, en una línea cada una. No mezclarlas bajo
una sola licencia.

## Estado actual

Funcionando: escritorio, ventanas arrastrables, menú Inicio, arranque,
enrutador, accesos directos a repositorios, y el explorador replicando el de
Windows 98 real: Web View con los gráficos originales (nubes `wvleft`, línea
`wvline`), barra de herramientas estándar con la tira `browse-ui` (gris en
reposo, color al pasar el mouse), scrollbars clásicos de os-gui, bandas rebar
con agarraderas, combobox de dirección con la flecha pixelada de 7×4 y barra
de estado con Mi PC. Los menús superiores son decorativos por decisión: los
botones sin función muestran un diálogo de época.

Pendiente:

- Reemplazar los textos de ejemplo: contacto, formación académica y los
  `tu-usuario` de los enlaces a GitHub.
- Agregar capturas de los proyectos. Hoy el portafolio es solo texto y esa es
  su mayor debilidad.
- Implementar la vista Detalles del explorador.
- Completar el comportamiento táctil: ventanas maximizadas bajo 700 px,
  segundo toque para abrir y áreas activas ampliadas.
- Publicar en GitHub Pages y completar el campo `demo` correspondiente.

Resuelto: la barra de herramientas del explorador ya no usa SVG dibujado a
mano; usa la tira original `browse-ui` vendorizada (ver la nota de recursos).

## Idioma y tono

Todo en español latinoamericano, sin voseo ni acento argentino. Los textos de
la interfaz imitan los del sistema real: "Seleccione un elemento para ver su
descripción", "0 objeto(s)", "Ahora puede apagar el equipo con seguridad".

## Nota sobre los íconos

Los mapas de bits provienen de la colección de win98icons.alexmeub.com y son
originales de Microsoft extraídos del sistema operativo. Para un portafolio
personal es práctica habitual. Para uso institucional o comercial, conviene
volver a los SVG dibujados a mano, que son originales y no tienen ese problema.
El respaldo existe justamente para que ese cambio sea borrar un archivo.

La misma consideración aplica a `img/vendor/win98/`: las nubes del Web View
(`wvleft`), la línea del título (`wvline`) y las tiras de íconos de la barra
del explorador (`barra-explorador` y su versión gris) son los gráficos
originales de Windows 98 (C:\WINDOWS\WEB y la interfaz del explorador),
obtenidos del repositorio 1j01/98 y convertidos a PNG. Son de Microsoft, igual
que los íconos. En `img/vendor/os-gui/` están los botones de barra de título
de os-gui (MIT); los sprites de scrollbar de os-gui van incrustados en el CSS
de index.html como data URI, con su atribución en el comentario.

## Qué no hacer

- No meter bundlers ni pasos de build (npm, Vite, Webpack). Frameworks y
  dependencias externas sí están permitidos, pero corriendo con `<script src>`
  plano y vendorizados dentro del repo — nunca por CDN. El valor del proyecto
  es que se abre con doble clic, sin internet y sin instalar nada.
- No pasar la configuración a JSON externo: obliga a levantar servidor.
- No romper el respaldo de íconos SVG.
- No modernizar la estética. Cada decisión visual está tomada para parecerse a
  un sistema de 1998, no para verse bien según criterios de hoy.
