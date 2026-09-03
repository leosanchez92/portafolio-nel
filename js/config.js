/* ============================================================
   CONFIGURACIÓN DEL PORTAFOLIO — ARCHIVO EDITABLE
   ------------------------------------------------------------
   Acá vive la ESTRUCTURA: qué carpetas hay, qué ítems tiene
   cada una y qué descripción se muestra en el panel izquierdo.

   El TEXTO LARGO de cada documento vive en index.html,
   al final, dentro de <template data-doc="ID">.
   El ID del ítem y el del template tienen que coincidir.

   Campos de un ítem:
     id       → identificador único, se usa en la URL (#proyectos/nibi)
     nombre   → cómo se ve el archivo en el explorador
     icono    → clave del objeto ICONOS en js/app.js
     desc     → texto del panel Web View al seleccionarlo
     titulo   → título de la ventana al abrirlo
     oculto   → true para dejarlo como borrador, sin publicar
     repo     → URL del repositorio en GitHub  (opcional)
     demo     → URL de la herramienta en vivo  (opcional)
     sinEnlace → true para ocultar el botón "Copiar enlace" del documento
                 (documentos sin sentido de compartir por separado, como Bio
                 o Leeme.txt)

   Cualquier ítem con repo o demo se muestra como ACCESO DIRECTO:
   le aparece la flechita en la esquina del ícono, y en su ventana
   salen los botones "Ver en GitHub" y "Abrir herramienta".
   ============================================================ */

window.CONFIG = {

  usuario: {
    nombre: "Nel",
    titulo: "Geógrafo especialista en SIG",
    lugar:  "Rancagua, Región de O'Higgins, Chile",
    email:  "nelsonsanchez.al@gmail.com",
    github: "github.com/leosanchez92",
    web:    "leosanchez92.github.io/portafolio-nel"
  },

  carpetas: [

    /* ---------------------------------------------- SOBRE MÍ */
    {
      id: "perfil",
      nombre: "Sobre mí",
      icono: "usuario",
      desc: "Quién soy, qué hago y cómo trabajo. Parte por acá si es tu primera visita.",
      items: [
        {
          id: "bio",
          nombre: "Bio.txt",
          icono: "texto",
          titulo: "Bio",
          sinEnlace: true,
          desc: "Resumen breve de quién soy y qué hago, con las palabras clave del perfil."
        },
        {
          id: "trayectoria",
          nombre: "Trayectoria profesional.doc",
          icono: "doc",
          titulo: "Trayectoria profesional",
          sinEnlace: true,
          desc: "Experiencia laboral y competencias técnicas, en una página, lista para imprimir o guardar como PDF."
        },
        {
          id: "leeme",
          nombre: "Leeme.txt",
          icono: "texto",
          titulo: "Leeme.txt",
          sinEnlace: true,
          desc: "Notas sobre este portafolio y cómo navegarlo."
        }
      ]
    },

    /* --------------------------------------------- PROYECTOS */
    {
      id: "proyectos",
      nombre: "Proyectos",
      icono: "carpeta",
      desc: "Visores territoriales entregados y proyectos en curso.",
      items: [
        {
          id: "visor-nueva-imperial",
          nombre: "Visor Territorial Nueva Imperial",
          icono: "mapa",
          titulo: "Visor Territorial Nueva Imperial",
          repo: "https://github.com/leosanchez92/VISOR_V1",
          demo: "http://mapas.nuevaimperial.cl",
          desc: "Visor territorial con localidades, sedes rurales, límite comunal, juntas de vecinos y Plan Regulador Comunal, para la Municipalidad de Nueva Imperial."
        },
        {
          id: "visor-nacimiento",
          nombre: "Visor Territorial Nacimiento",
          icono: "mapa",
          titulo: "Visor Territorial Nacimiento",
          repo: "https://github.com/leosanchez92/VISOR_V1_NACIMIENTO",
          demo: "https://www.intranetnacimiento.cl/VisorComunal/index.html",
          desc: "Visor territorial con Plan Regulador Comunal, construido para la Municipalidad de Nacimiento."
        },
        {
          id: "noventas",
          nombre: "noventas",
          icono: "terminal",
          titulo: "noventas",
          repo: "https://github.com/leosanchez92/noventas",
          desc: "Juego. En curso."
        }
      ]
    },

    /* -------------------------------------------- HABILIDADES */
    {
      id: "habilidades",
      nombre: "Habilidades",
      icono: "herramienta",
      desc: "Herramientas y lenguajes con los que trabajo a diario, agrupados por dominio.",
      items: [
        {
          id: "sig",
          nombre: "Sistemas de información geográfica",
          icono: "globo",
          titulo: "Sistemas de información geográfica",
          desc: "QGIS, PyQGIS, análisis vectorial y raster, sistemas de referencia, cartografía de producción."
        },
        {
          id: "datos",
          nombre: "Análisis de datos",
          icono: "grafico",
          titulo: "Análisis de datos",
          desc: "R para procesamiento, análisis y visualización de datos territoriales a gran escala."
        },
        {
          id: "web",
          nombre: "Desarrollo web",
          icono: "terminal",
          titulo: "Desarrollo web",
          desc: "HTML, CSS, JavaScript y MapLibre GL JS, con foco en herramientas que funcionan sin servidor."
        },
        {
          id: "cartografia",
          nombre: "Cartografía y diseño",
          icono: "pincel",
          titulo: "Cartografía y diseño",
          desc: "Diseño cartográfico institucional, sistemas visuales y narrativa espacial."
        }
      ]
    },

    /* -------------------------------------------------- CÓDIGO */
    {
      id: "codigo",
      nombre: "Código",
      icono: "terminal",
      desc: "Selección de repositorios en GitHub: el código tal cual, sin el envoltorio narrativo de la carpeta Proyectos.",
      items: [
        {
          id: "codigo-chatbot-censo",
          nombre: "chatbot-censo",
          icono: "terminal",
          titulo: "chatbot-censo",
          repo: "https://github.com/leosanchez92/chatbot-censo",
          desc: "Chatbot en R (Nibi) que responde preguntas en lenguaje natural sobre el Censo 2024 de O'Higgins, vía tool calling con un LLM. En construcción (~40%)."
        },
        {
          id: "codigo-extract-wikimapia",
          nombre: "extract-wikimapia",
          icono: "terminal",
          titulo: "extract-wikimapia",
          repo: "https://github.com/leosanchez92/extract-wikimapia",
          desc: "Visor web autocontenido que consulta la API de Wikimapia y muestra los lugares registrados por comuna de la Región de O'Higgins, cruzados con los límites de OpenStreetMap."
        },
        {
          id: "codigo-generador-html",
          nombre: "generador-html",
          icono: "terminal",
          titulo: "generador-html",
          repo: "https://github.com/leosanchez92/generador-html",
          desc: "Generador de visores interactivos de manzanas censales: un solo HTML que recibe un GeoJSON y produce otro HTML autocontenido con indicadores y mapa coroplético."
        },
        {
          id: "codigo-kmz-auto",
          nombre: "kmz-auto",
          icono: "terminal",
          titulo: "kmz-auto",
          repo: "https://github.com/leosanchez92/kmz-auto",
          desc: "Script en R que exporta Unidades Primarias de Muestreo (UPM) a archivos KML para Google Earth, con etiquetas y tabla emergente por unidad. Proyecto de 2022."
        },
        {
          id: "codigo-visor-censo-manzanas",
          nombre: "visor-censo-manzanas",
          icono: "terminal",
          titulo: "visor-censo-manzanas",
          repo: "https://github.com/leosanchez92/visor-censo-manzanas",
          desc: "Mapa coroplético interactivo por manzana para cualquier variable del Censo 2024: cambia el nombre de una columna del GeoPackage y obtienes un mapa nuevo, sin tocar código."
        }
      ]
    },

    /* ----------------------------------------------- CONTACTO */
    {
      id: "contacto",
      nombre: "Contacto",
      icono: "correo",
      desc: "Dónde encontrarme y en qué tipo de proyectos me interesa participar.",
      items: [
        {
          id: "escribeme",
          nombre: "Escríbeme.eml",
          icono: "correo",
          titulo: "Contacto",
          desc: "Datos de contacto directo y disponibilidad para proyectos."
        }
      ]
    }

    /* ---- Para agregar una carpeta nueva, copia un bloque
            completo de acá arriba y cámbiale el id. ---- */
  ]
};
