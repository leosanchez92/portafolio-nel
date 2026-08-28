/* ============================================================
   CONFIGURACIÓN DEL PORTAFOLIO
   ------------------------------------------------------------
   Acá vive la ESTRUCTURA: qué carpetas hay, qué ítems tiene
   cada una y qué descripción se muestra en el panel izquierdo.

   El TEXTO LARGO de cada documento vive en index.html,
   al final, dentro de <template data-doc="ID">.
   El ID del ítem y el del template tienen que coincidir.

   Campos de un ítem:
     id       → identificador único, se usa en la URL (#proyectos/nibi)
     nombre   → cómo se ve el archivo en el explorador
     icono    → clave del objeto ICONOS en index.html
     desc     → texto del panel Web View al seleccionarlo
     titulo   → título de la ventana al abrirlo
     oculto   → true para dejarlo como borrador, sin publicar
     repo     → URL del repositorio en GitHub  (opcional)
     demo     → URL de la herramienta en vivo  (opcional)

   Cualquier ítem con repo o demo se muestra como ACCESO DIRECTO:
   le aparece la flechita en la esquina del ícono, y en su ventana
   salen los botones "Ver en GitHub" y "Abrir herramienta".
   ============================================================ */

window.CONFIG = {

  usuario: {
    nombre: "Nel",
    titulo: "Especialista GIS y Cartógrafo",
    lugar:  "Región de O'Higgins, Chile",
    email:  "tu.correo@ejemplo.cl",
    github: "github.com/tu-usuario",
    web:    "tu-sitio.cl"
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
          id: "perfil-profesional",
          nombre: "Perfil profesional.txt",
          icono: "texto",
          titulo: "Perfil profesional",
          desc: "Resumen de mi trayectoria: cartografía, análisis territorial y desarrollo de visores web."
        },
        {
          id: "curriculum",
          nombre: "Currículum.doc",
          icono: "doc",
          titulo: "Currículum vitae",
          desc: "CV completo en una página, listo para imprimir o guardar como PDF."
        },
        {
          id: "leeme",
          nombre: "Leeme.txt",
          icono: "texto",
          titulo: "Leeme.txt",
          desc: "Notas sobre este portafolio y cómo navegarlo."
        }
      ]
    },

    /* --------------------------------------------- PROYECTOS */
    {
      id: "proyectos",
      nombre: "Proyectos",
      icono: "carpeta",
      desc: "Herramientas, visores y piezas cartográficas. Cada archivo es un proyecto real, en producción o entregado.",
      items: [
        {
          id: "generador-censal",
          nombre: "Generador de visores censales",
          icono: "mapa",
          titulo: "Generador de visores censales",
          repo: "https://github.com/tu-usuario/generador-visores-censales",
          desc: "Herramienta que convierte un requerimiento de datos censales en un visor web autocontenido, sin escribir código."
        },
        {
          id: "ipc",
          nombre: "Visores de terreno IPC",
          icono: "mapa",
          titulo: "Sistema de visores de terreno IPC",
          desc: "Sistema de visores para las rutas de recolección del Índice de Precios al Consumidor."
        },
        {
          id: "pesca",
          nombre: "Storymap desembarque pesquero",
          icono: "grafico",
          titulo: "Storymap de desembarque pesquero",
          desc: "Narrativa cartográfica sobre desembarques en caletas y puntos de la costa de O'Higgins."
        },
        {
          id: "nibi",
          nombre: "Nibi — chatbot censal",
          icono: "terminal",
          titulo: "Nibi — chatbot de datos censales",
          repo: "https://github.com/tu-usuario/nibi",
          desc: "Asistente en R que consulta datos del Censo 2024 en lenguaje natural."
        },
        {
          id: "visor-municipal",
          nombre: "Visor territorial municipal",
          icono: "globo",
          titulo: "Visor territorial municipal",
          desc: "Plataforma de consulta territorial para municipios, en producción."
        },
        {
          id: "csv-kmz",
          nombre: "Conversor CSV a KMZ",
          icono: "herramienta",
          titulo: "Conversor CSV a KMZ",
          repo: "https://github.com/tu-usuario/csv-a-kmz",
          demo: "https://tu-usuario.github.io/csv-a-kmz/",
          desc: "Utilitario web que convierte planillas con coordenadas a KMZ, con reproyección incluida."
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
