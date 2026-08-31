# Portafolio — Nel

Portafolio y currículum de Nel, Especialista GIS (Región de
O'Higgins, Chile), construido como una recreación del escritorio de
Windows 98. La pieza central es un explorador de carpetas con panel
**Web View**: un clic sobre un elemento muestra su descripción, doble clic
lo abre en una ventana.

> Captura de pantalla pendiente — se agrega en `docs/captura.png` cuando
> el contenido esté listo para publicar.

## Cómo verlo

Sin instalación ni servidor: se abre `index.html` con doble clic, o se
visita la versión publicada en GitHub Pages una vez esté activa.

## Stack

JavaScript, HTML y CSS puros, sin bundler ni paso de build — funciona
directamente desde el disco (`file://`). Las dependencias externas que se
usan (como recortes de [os-gui](https://github.com/1j01/os-gui)) están
vendorizadas dentro del repo, nunca por CDN.

- `index.html` — esqueleto y el texto largo de cada documento.
- `css/estilos.css` — todos los estilos.
- `js/app.js` — toda la lógica.
- `js/config.js` — estructura: carpetas, ítems, descripciones, contacto.
- `js/iconos.js` — íconos de Windows 98 en base64 (archivo generado).
- `img/vendor/` — gráficos de terceros, cada carpeta con su `ORIGEN.md`.

## Créditos

- Íconos: [win98icons.alexmeub.com](https://win98icons.alexmeub.com/),
  extraídos del sistema operativo original de Microsoft.
- Botones de la barra de título y sprites de scrollbar
  (`img/vendor/os-gui/` y data URIs en `css/estilos.css`): de
  [1j01/os-gui](https://github.com/1j01/os-gui) (MIT, © Isaiah Odhner).
- Gráficos del Web View y de la barra del explorador
  (`img/vendor/win98/`): originales de Windows 98, obtenidos vía
  [1j01/98](https://github.com/1j01/98).
- Wallpaper del escritorio (`img/escritorio/nubes.jpg`): foto de cielo
  nublado, no es el bitmap original de Windows.

## Licencia

El código (`index.html`, `css/`, `js/app.js`, `js/config.js` y la lógica
del proyecto) está bajo licencia MIT — ver [LICENSE](LICENSE).

Los íconos en mapa de bits (`js/iconos.js`) y los gráficos de
`img/vendor/win98/` son originales de Microsoft, extraídos del sistema
operativo, y **no** están cubiertos por esa licencia.
