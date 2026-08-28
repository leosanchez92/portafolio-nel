# Portafolio — Nel

Portafolio y currículum de Nel, Especialista GIS y Cartógrafo (Región de
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

JavaScript, HTML y CSS puros. Sin frameworks, sin bundler, sin
dependencias externas — funciona directamente desde el disco (`file://`).

- `index.html` — estilos, lógica y el texto largo de cada documento.
- `config.js` — estructura: carpetas, ítems, descripciones, enlaces.
- `iconos.js` — íconos de Windows 98 en base64 (archivo generado).

## Créditos

- Íconos: [win98icons.alexmeub.com](https://win98icons.alexmeub.com/),
  extraídos del sistema operativo original de Microsoft.
- Referencia de UI: [1j01/os-gui](https://github.com/1j01/os-gui).

## Licencia

El código (`index.html`, `config.js` y la lógica del proyecto) está bajo
licencia MIT — ver [LICENSE](LICENSE).

Los íconos en mapa de bits (`iconos.js`) son originales de Microsoft,
extraídos del sistema operativo, y **no** están cubiertos por esa
licencia.
