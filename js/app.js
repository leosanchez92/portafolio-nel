/* ============================================================
   LÓGICA DEL PORTAFOLIO WIN98
   Editable a mano. Orden de carga: js/iconos.js → js/config.js
   → js/app.js (este archivo). Secciones numeradas más abajo.
   ============================================================ */
const CONFIG = window.CONFIG;

/* ============================================================
   2. ICONOS (SVG en estilo 32×32 de la época)
   ============================================================ */
const ICONOS = {
  carpeta:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><path class="marco" d="M2 7h10l3 3h15v17H2z" fill="#f7c948" stroke="#000"/><path class="marco" d="M4 12h26l-3 14H2z" fill="#ffe08a" stroke="#000"/></svg>`,
  pc:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect class="marco" x="3" y="4" width="26" height="19" fill="#c0c0c0" stroke="#000"/><rect x="6" y="7" width="20" height="13" fill="#008080"/><rect x="6" y="7" width="20" height="4" fill="#0a9d9d"/><rect class="marco" x="10" y="24" width="12" height="4" fill="#c0c0c0" stroke="#000"/><rect x="6" y="27" width="20" height="3" fill="#808080" stroke="#000"/></svg>`,
  usuario:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect class="marco" x="3" y="3" width="26" height="26" fill="#dfdfdf" stroke="#000"/><circle class="marco" cx="16" cy="13" r="5" fill="#f2c9a0" stroke="#000"/><path class="marco" d="M7 27c0-6 4-8 9-8s9 2 9 8z" fill="#1084d0" stroke="#000"/></svg>`,
  doc:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><path class="marco" d="M6 2h14l6 6v22H6z" fill="#fff" stroke="#000"/><path d="M20 2v6h6" fill="#dfdfdf" stroke="#000"/><rect x="9" y="13" width="14" height="1.5" fill="#1084d0"/><rect x="9" y="17" width="14" height="1.5" fill="#808080"/><rect x="9" y="21" width="10" height="1.5" fill="#808080"/></svg>`,
  texto:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><path class="marco" d="M6 2h14l6 6v22H6z" fill="#fff" stroke="#000"/><path d="M20 2v6h6" fill="#dfdfdf" stroke="#000"/><rect x="9" y="12" width="14" height="1.5" fill="#000"/><rect x="9" y="16" width="14" height="1.5" fill="#000"/><rect x="9" y="20" width="14" height="1.5" fill="#000"/><rect x="9" y="24" width="8" height="1.5" fill="#000"/></svg>`,
  mapa:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><path class="marco" d="M2 6l9-3 10 3 9-3v23l-9 3-10-3-9 3z" fill="#bfe3a5" stroke="#000"/><path d="M11 3v23M21 6v23" stroke="#000" fill="none"/><path d="M2 17l9-4 10 5 9-4" stroke="#4a90d9" stroke-width="2" fill="none"/><circle cx="16" cy="14" r="2.5" fill="#e8710a" stroke="#000"/></svg>`,
  globo:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><circle class="marco" cx="16" cy="16" r="13" fill="#4a90d9" stroke="#000"/><path d="M16 3c4 4 4 22 0 26M16 3c-4 4-4 22 0 26M3 16h26M5 9h22M5 23h22" stroke="#0a3d6b" fill="none" opacity=".7"/><path class="marco" d="M9 11l4 2-1 4 5 1 3-4 4 1" fill="none" stroke="#2d7a2d" stroke-width="2.5"/></svg>`,
  grafico:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect class="marco" x="3" y="3" width="26" height="26" fill="#fff" stroke="#000"/><rect x="7" y="17" width="4" height="9" fill="#1084d0"/><rect x="13" y="11" width="4" height="15" fill="#e8710a"/><rect x="19" y="14" width="4" height="12" fill="#2d7a2d"/><rect x="6" y="26" width="20" height="1.5" fill="#000"/></svg>`,
  terminal:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect class="marco" x="3" y="4" width="26" height="24" fill="#000080" stroke="#000"/><rect x="3" y="4" width="26" height="4" fill="#1084d0"/><path d="M7 14l4 3-4 3" stroke="#fff" stroke-width="2" fill="none"/><rect x="13" y="19" width="9" height="2" fill="#fff"/></svg>`,
  herramienta:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><path class="marco" d="M20 4a7 7 0 00-6 10L5 23l4 4 9-9a7 7 0 108-14l-4 4-3-3z" fill="#c0c0c0" stroke="#000"/><circle cx="9" cy="23" r="1.5" fill="#000"/></svg>`,
  pincel:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><path class="marco" d="M24 3l5 5-13 13-5-5z" fill="#e8710a" stroke="#000"/><path class="marco" d="M11 16l5 5-4 6-6 2 2-6z" fill="#f7c948" stroke="#000"/></svg>`,
  correo:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect class="marco" x="2" y="7" width="28" height="19" fill="#fff" stroke="#000"/><path d="M2 7l14 11L30 7" fill="none" stroke="#000"/><path d="M2 26l10-9M30 26l-10-9" fill="none" stroke="#808080"/></svg>`,
  papelera:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><path class="marco" d="M8 9h16l-2 20H10z" fill="#c0c0c0" stroke="#000"/><rect class="marco" x="6" y="5" width="20" height="4" fill="#dfdfdf" stroke="#000"/><path d="M13 13v12M16 13v12M19 13v12" stroke="#808080"/></svg>`,
  atras:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><path d="M11 5l-8 7 8 7v-4h9V9h-9z" fill="#2d7a2d" stroke="#000"/></svg>`,
  adelante:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><path d="M13 5l8 7-8 7v-4H4V9h9z" fill="#2d7a2d" stroke="#000"/></svg>`,
  arriba:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><path class="marco" d="M2 6h8l2 2h10v13H2z" fill="#f7c948" stroke="#000"/><path d="M12 19V11M8 14l4-4 4 4" stroke="#000" stroke-width="2" fill="none"/></svg>`,
  imprimir:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><rect x="6" y="2" width="12" height="6" fill="#fff" stroke="#000"/><rect x="3" y="8" width="18" height="8" fill="#c0c0c0" stroke="#000"/><rect x="6" y="14" width="12" height="8" fill="#fff" stroke="#000"/><rect x="16" y="10" width="3" height="2" fill="#2d7a2d"/></svg>`,
  cortar:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><path d="M7 2l5 10M17 2l-5 10" stroke="#404040" stroke-width="2" fill="none"/><circle cx="6" cy="17" r="3.5" fill="none" stroke="#000080" stroke-width="2"/><circle cx="18" cy="17" r="3.5" fill="none" stroke="#000080" stroke-width="2"/><path d="M12 12l-3.5 3M12 12l3.5 3" stroke="#404040" stroke-width="2" fill="none"/></svg>`,
  copiar:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><path d="M4 2h9l3 3v11H4z" fill="#fff" stroke="#000"/><path d="M8 8h9l3 3v11H8z" fill="#fff" stroke="#000"/><rect x="10" y="13" width="8" height="1.4" fill="#1084d0"/><rect x="10" y="16" width="8" height="1.4" fill="#1084d0"/><rect x="10" y="19" width="5" height="1.4" fill="#1084d0"/></svg>`,
  pegar:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><rect x="3" y="3" width="14" height="19" fill="#b07040" stroke="#000"/><rect x="7" y="1" width="6" height="4" fill="#c0c0c0" stroke="#000"/><path d="M10 8h11v14H10z" fill="#fff" stroke="#000"/><rect x="12" y="11" width="7" height="1.4" fill="#808080"/><rect x="12" y="14" width="7" height="1.4" fill="#808080"/><rect x="12" y="17" width="4" height="1.4" fill="#808080"/></svg>`,
  deshacer:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><path d="M5 8h11a5 5 0 0 1 0 10h-6" fill="none" stroke="#000080" stroke-width="2.5"/><path d="M9 3L4 8l5 5z" fill="#000080"/></svg>`,
  eliminar:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><path d="M5 4l14 16M19 4L5 20" stroke="#000" stroke-width="3" fill="none"/></svg>`,
  propiedades:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><path d="M5 1h10l4 4v14H5z" fill="#fff" stroke="#000"/><rect x="8" y="7" width="8" height="1.4" fill="#808080"/><rect x="8" y="10" width="8" height="1.4" fill="#808080"/><path d="M10 22v-6l2-2 2 2 3-1 2 3v4z" fill="#f2c9a0" stroke="#000"/></svg>`,
  vistas:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><rect x="2" y="3" width="20" height="18" fill="#fff" stroke="#000"/><rect x="2" y="3" width="20" height="4" fill="#000080"/><rect x="5" y="10" width="4" height="3" fill="#1084d0"/><rect x="5" y="15" width="4" height="3" fill="#1084d0"/><rect x="11" y="10" width="8" height="1.6" fill="#808080"/><rect x="11" y="15" width="8" height="1.6" fill="#808080"/></svg>`,
  inicio:`<svg viewBox="0 0 16 16" shape-rendering="crispEdges"><path d="M1 4l5-2v5L1 9z" fill="#e83030"/><path d="M7 2l7-2v6l-7 1z" fill="#2d9c2d"/><path d="M1 10l5-2v5l-5 2z" fill="#1084d0"/><path d="M7 8l7-1v7l-7 2z" fill="#f7c948"/></svg>`,
  buscar:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><circle cx="10" cy="10" r="6" fill="#cfe0f0" stroke="#000"/><path d="M15 15l6 6" stroke="#000" stroke-width="3"/></svg>`,
  ayuda:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><rect x="4" y="2" width="16" height="20" fill="#f7c948" stroke="#000"/><text x="12" y="17" font-size="14" font-weight="bold" text-anchor="middle" fill="#000" font-family="Verdana">?</text></svg>`,
  apagar:`<svg viewBox="0 0 24 24" shape-rendering="crispEdges"><circle cx="12" cy="13" r="8" fill="#e83030" stroke="#000"/><rect x="11" y="3" width="2.5" height="9" fill="#fff" stroke="#000"/></svg>`,
  aviso:`<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><circle cx="16" cy="16" r="14" fill="#1084d0" stroke="#000"/><text x="16" y="24" font-size="22" font-weight="bold" text-anchor="middle" fill="#fff" font-family="Verdana">?</text></svg>`
};
/* --- Enlaces externos: insignia de acceso directo y utilidades --- */
const BADGE = `<span class="atajo" title="Acceso directo"><svg viewBox="0 0 12 12" shape-rendering="crispEdges"><path d="M2 10L8 4M8 4H4M8 4v4" stroke="#000" stroke-width="1.6" fill="none"/></svg></span>`;

function abrirEnlace(url){
  if(!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
}

function filaEnlaces(it){
  const enlaces = [];
  if(it.repo) enlaces.push(["repo","Ver el código", it.repo]);
  if(it.demo) enlaces.push(["web","Abrir la herramienta", it.demo]);
  if(!enlaces.length) return "";
  return `<div class="pw-enlaces">` + enlaces.map(([k,txt,u]) =>
    `<a href="${u}" target="_blank" rel="noopener noreferrer">${ico(k,"p")}${txt}</a>`
  ).join("") + `</div>`;
}

const ico = (k, tam) => {
  const png = window.ICONOS_PNG && window.ICONOS_PNG[k];
  if(png) return `<img class="ico" src="${png[tam === "p" ? "p" : "g"]}" alt="">`;
  return ICONOS[k] || ICONOS.doc;
};

/* Toque simple selecciona, toque doble abre: dblclick no es fiable en
   pantallas táctiles, así que se detecta a mano por tiempo entre toques.
   Un movimiento de más de 10 px entre inicio y fin se trata como scroll,
   no como toque, para no robarle el gesto a los paneles con overflow. */
function alTocar(el, seleccionar, abrir){
  let ultimo = 0, x0 = 0, y0 = 0, movido = false;
  el.addEventListener("touchstart", e => {
    const t = e.touches[0];
    x0 = t.clientX; y0 = t.clientY; movido = false;
  }, {passive:true});
  el.addEventListener("touchmove", e => {
    const t = e.touches[0];
    if(Math.abs(t.clientX - x0) > 10 || Math.abs(t.clientY - y0) > 10) movido = true;
  }, {passive:true});
  el.addEventListener("touchend", e => {
    if(movido) return;
    e.preventDefault();
    const ahora = Date.now();
    if(ahora - ultimo < 400){
      ultimo = 0;
      abrir();
    }else{
      ultimo = ahora;
      seleccionar();
      el.focus();
    }
  }, {passive:false});
}

/* ============================================================
   3. GESTOR DE VENTANAS
   ============================================================ */
let z = 100, idVentana = 0;
const ventanas = new Map();

// Bajo 700 px las ventanas flotantes son un estorbo: abren maximizadas y
// sin arrastre. Mismo umbral que el media query "Responsive" del CSS: se
// consulta con matchMedia, no con innerWidth, para que quede atado al mismo
// breakpoint que ya define el CSS.
function tamMovil(){ return window.matchMedia("(max-width:700px)").matches; }

function ventanaMaximizada(w){
  Object.assign(w.style, {left:"0px", top:"0px", width:"100%", height:"calc(100% - 28px)"});
}

function crearVentana({titulo, icono, ancho, alto, x, y, contenido, clase=""}){
  const id = "v" + (++idVentana);
  const w = document.createElement("div");
  w.className = "ventana " + clase;
  w.id = id;
  if(tamMovil()){
    ventanaMaximizada(w);
  }else{
    const maxA = Math.min(ancho, window.innerWidth - 20);
    const maxH = Math.min(alto, window.innerHeight - 60);
    w.style.width = maxA + "px";
    w.style.height = maxH + "px";
    w.style.left = (x ?? Math.max(8, (window.innerWidth - maxA)/2 + (idVentana%5)*16)) + "px";
    w.style.top  = (y ?? Math.max(8, (window.innerHeight - 28 - maxH)/2 + (idVentana%5)*16)) + "px";
  }
  w.style.zIndex = ++z;

  w.innerHTML = `
    <div class="barra-titulo">
      ${ico(icono, "p")}
      <div class="tit">${titulo}</div>
      <button class="btn-tit" data-a="min" title="Minimizar"><img src="img/vendor/os-gui/botones/minimizar.png" alt=""></button>
      <button class="btn-tit" data-a="max" title="Maximizar"><img src="img/vendor/os-gui/botones/maximizar.png" alt=""></button>
      <button class="btn-tit cerrar" data-a="cerrar" title="Cerrar"><img src="img/vendor/os-gui/botones/cerrar.png" alt=""></button>
    </div>`;
  w.appendChild(contenido);
  document.body.appendChild(w);

  ventanas.set(id, {el:w, titulo, icono, minimizada:false, restaurar:null});
  arrastrable(w);
  w.addEventListener("mousedown", () => enfocar(id));
  w.querySelector('[data-a="cerrar"]').onclick = e => {e.stopPropagation(); cerrar(id);};
  w.querySelector('[data-a="min"]').onclick   = e => {e.stopPropagation(); minimizar(id);};
  w.querySelector('[data-a="max"]').onclick   = e => {e.stopPropagation(); maximizar(id);};
  w.querySelector(".barra-titulo").addEventListener("dblclick", () => maximizar(id));

  enfocar(id);
  pintarTareas();
  return {id, el:w};
}

function enfocar(id){
  const v = ventanas.get(id); if(!v) return;
  v.el.style.zIndex = ++z;
  if(v.minimizada){ v.minimizada = false; v.el.style.display = "flex"; }
  ventanas.forEach((o,k)=> o.el.classList.toggle("inactiva", k !== id));
  pintarTareas();
}
function cerrar(id){
  const v = ventanas.get(id); if(!v) return;
  v.el.remove(); ventanas.delete(id); pintarTareas();
}
function minimizar(id){
  const v = ventanas.get(id); if(!v) return;
  v.minimizada = true; v.el.style.display = "none";
  v.el.classList.add("inactiva"); pintarTareas();
}
function maximizar(id){
  if(tamMovil()) return; // en móvil las ventanas quedan siempre maximizadas
  const v = ventanas.get(id); if(!v) return;
  const img = v.el.querySelector('[data-a="max"] img');
  if(v.restaurar){
    Object.assign(v.el.style, v.restaurar); v.restaurar = null;
    if(img) img.src = "img/vendor/os-gui/botones/maximizar.png";
  }else{
    v.restaurar = {left:v.el.style.left, top:v.el.style.top, width:v.el.style.width, height:v.el.style.height};
    Object.assign(v.el.style, {left:"0px", top:"0px", width:"100%", height:"calc(100% - 28px)"});
    if(img) img.src = "img/vendor/os-gui/botones/restaurar.png";
  }
}
function arrastrable(w){
  const barra = w.querySelector(".barra-titulo");
  const iniciar = (px,py) => {
    if(tamMovil()) return; // sin arrastre en móvil, las ventanas van maximizadas
    const r = w.getBoundingClientRect();
    const dx = px - r.left, dy = py - r.top;
    const mover = (mx,my) => {
      w.style.left = Math.min(Math.max(-r.width+60, mx-dx), window.innerWidth-60) + "px";
      w.style.top  = Math.min(Math.max(0, my-dy), window.innerHeight-56) + "px";
    };
    const mm = e => mover(e.clientX, e.clientY);
    const mt = e => { e.preventDefault(); mover(e.touches[0].clientX, e.touches[0].clientY); };
    const fin = () => {
      document.removeEventListener("mousemove", mm); document.removeEventListener("mouseup", fin);
      document.removeEventListener("touchmove", mt); document.removeEventListener("touchend", fin);
    };
    document.addEventListener("mousemove", mm); document.addEventListener("mouseup", fin);
    document.addEventListener("touchmove", mt, {passive:false}); document.addEventListener("touchend", fin);
  };
  barra.addEventListener("mousedown", e => { if(e.target.closest(".btn-tit")) return; iniciar(e.clientX, e.clientY); });
  barra.addEventListener("touchstart", e => { if(e.target.closest(".btn-tit")) return; iniciar(e.touches[0].clientX, e.touches[0].clientY); }, {passive:true});
}

function pintarTareas(){
  const cont = document.getElementById("tareas");
  cont.innerHTML = "";
  ventanas.forEach((v,id) => {
    const b = document.createElement("button");
    const activa = !v.minimizada && !v.el.classList.contains("inactiva");
    b.className = "tarea out" + (activa ? " activa presionado" : "");
    b.innerHTML = ico(v.icono, "p") + `<span>${v.titulo}</span>`;
    b.onclick = () => { activa ? minimizar(id) : enfocar(id); };
    cont.appendChild(b);
  });
}

/* ============================================================
   4. EXPLORADOR
   ============================================================ */
function abrirExplorador(idCarpeta = null){
  const cuerpo = document.createElement("div");
  cuerpo.style.cssText = "display:flex;flex-direction:column;flex:1;min-height:0";
  // Flecha de combo/menú de Win98: pixelada 7×4, escalonada, en currentColor
  // (negra habilitada; gris con sombra blanca — relieve — deshabilitada).
  const flechita = `<svg viewBox="0 0 7 4" shape-rendering="crispEdges" fill="currentColor"><rect x="0" y="0" width="7" height="1"/><rect x="1" y="1" width="5" height="1"/><rect x="2" y="2" width="3" height="1"/><rect x="3" y="3" width="1" height="1"/></svg>`;
  // celdas de la tira original browse-ui (20 px cada una); índices según 98.js
  const tico = n => `<span class="tico" style="background-position:${-20*n}px 0"></span>`;
  cuerpo.innerHTML = `
    <div class="menus">
      <div class="gripper"></div>
      <span class="mn"><u>A</u>rchivo</span><span class="mn"><u>E</u>dición</span><span class="mn"><u>V</u>er</span>
      <span class="mn"><u>I</u>r a</span><span class="mn">Fa<u>v</u>oritos</span><span class="mn"><u>H</u>erramientas</span><span class="mn">A<u>y</u>uda</span>
    </div>
    <div class="herramientas banda-sep">
      <div class="gripper"></div>
      <button class="bh" data-n="atras" disabled>${tico(0)}<span class="rotulo">Atrás</span></button>
      <button class="bh bh-menu" data-n="atras-m" disabled>${flechita}</button>
      <button class="bh" data-n="adelante" disabled>${tico(1)}<span class="rotulo">Adelante</span></button>
      <button class="bh bh-menu" data-n="adelante-m" disabled>${flechita}</button>
      <button class="bh" data-n="arriba" disabled>${tico(44)}<span class="rotulo">Arriba</span></button>
      <div class="separador"></div>
      <button class="bh" data-gen="Cortar">${tico(21)}<span class="rotulo">Cortar</span></button>
      <button class="bh" data-gen="Copiar">${tico(22)}<span class="rotulo">Copiar</span></button>
      <button class="bh" data-gen="Pegar">${tico(23)}<span class="rotulo">Pegar</span></button>
      <div class="separador"></div>
      <button class="bh" data-gen="Deshacer">${tico(24)}<span class="rotulo">Deshacer</span></button>
      <button class="bh" data-gen="Eliminar">${tico(26)}<span class="rotulo">Eliminar</span></button>
      <button class="bh" data-gen="Propiedades">${tico(31)}<span class="rotulo">Propiedades</span></button>
      <div class="separador"></div>
      <button class="bh" data-n="vistas">${tico(38)}<span class="rotulo">Vistas</span></button>
      <button class="bh bh-menu" data-n="vistas">${flechita}</button>
    </div>
    <div class="direccion banda-sep">
      <div class="gripper"></div>
      <span>Direcci&oacute;n</span>
      <div class="campo in">${ico("carpeta","p")}<span class="ruta">C:\\Portafolio</span>
        <button class="btn-desplegable out" disabled title="Direcciones recientes">
          ${flechita}
        </button>
      </div>
    </div>
    <div class="cuerpo in">
      <div class="panel-web">
        <span class="pw-ico"></span>
        <div class="pw-titulo"></div>
        <div class="pw-linea"></div>
        <div class="pw-cont"></div>
      </div>
      <div class="panel-iconos"></div>
    </div>
    <div class="estado">
      <div class="e1">0 objeto(s)</div>
      <div class="e2">${ico("pc","p")}<span>Mi PC</span></div>
    </div>`;

  const {id, el} = crearVentana({
    titulo:"Portafolio", icono:"carpeta",
    ancho:720, alto:470, contenido:cuerpo
  });

  const estado = { historial:[null], pos:0 };
  const q = s => el.querySelector(s);

  function render(){
    const carp = estado.historial[estado.pos];
    const datos = carp ? CONFIG.carpetas.find(c => c.id === carp) : null;
    const lista = (datos ? datos.items : CONFIG.carpetas).filter(x => !x.oculto);
    fijarHash(datos ? "#" + datos.id : "");

    q(".ruta").textContent = "C:\\Portafolio" + (datos ? "\\" + datos.nombre : "");
    el.querySelector(".tit").textContent = datos ? datos.nombre : "Portafolio";
    ventanas.get(id).titulo = datos ? datos.nombre : "Portafolio";
    q(".e1").textContent = lista.length + " objeto(s)";
    q('[data-n="atras"]').disabled = estado.pos === 0;
    q('[data-n="atras-m"]').disabled = estado.pos === 0;
    q('[data-n="adelante"]').disabled = estado.pos === estado.historial.length - 1;
    q('[data-n="adelante-m"]').disabled = estado.pos === estado.historial.length - 1;
    q('[data-n="arriba"]').disabled = !carp;

    // panel web por defecto
    infoCarpeta(datos);

    const cont = q(".panel-iconos");
    cont.innerHTML = "";
    lista.forEach((it, i) => {
      const d = document.createElement("div");
      d.className = "item";
      d.tabIndex = 0;
      const esAtajo = !!(it.repo || it.demo);
      d.innerHTML = `<span class="marco-ico">${ico(it.icono)}${esAtajo ? BADGE : ""}</span>`
                  + `<div class="etq">${it.nombre}</div>`;
      const seleccionar = () => {
        cont.querySelectorAll(".item").forEach(x => x.classList.remove("sel"));
        d.classList.add("sel");
        infoItem(it, datos, !carp);
      };
      const abrir = () => {
        if(!carp) navegar(it.id);
        else abrirDocumento(it, carp);
      };
      d.onclick = seleccionar;
      d.ondblclick = abrir;
      d.onkeydown = e => { if(e.key === "Enter") abrir(); if(e.key === " "){e.preventDefault(); seleccionar();} };
      alTocar(d, seleccionar, abrir);
      cont.appendChild(d);
    });
    pintarTareas();
  }

  function infoCarpeta(datos){
    q(".pw-ico").innerHTML = ico(datos ? (datos.icono || "carpeta") : "carpeta");
    q(".pw-titulo").textContent = datos ? datos.nombre : "Portafolio";
    q(".pw-cont").innerHTML = datos
      ? `<div class="pw-desc">${datos.desc}</div>
         <div class="pw-hint" style="margin-top:12px">Seleccione un elemento para ver su descripción.</div>`
      : `<div class="pw-desc"><b>${CONFIG.usuario.nombre}</b> — ${CONFIG.usuario.titulo}<br>${CONFIG.usuario.lugar}</div>
         <div class="pw-hint" style="margin-top:12px">Seleccione un elemento para ver su descripción.</div>`;
  }

  function infoItem(it, datos, esCarpeta){
    q(".pw-titulo").textContent = datos ? datos.nombre : "Portafolio";
    q(".pw-cont").innerHTML = `
      <div class="pw-nombre">${it.nombre}</div>
      <div class="pw-desc">${it.desc}</div>
      <div class="pw-meta">
        <b>Tipo:</b> ${esCarpeta ? "Carpeta de archivos" : (it.repo || it.demo) ? "Acceso directo" : "Documento"}<br>
        <b>${esCarpeta ? "Contiene" : "Acción"}:</b> ${esCarpeta ? it.items.length + " elemento(s)" : "Doble clic para abrir"}
      </div>
      ${filaEnlaces(it)}`;
  }

  function navegar(idc){
    estado.historial = estado.historial.slice(0, estado.pos + 1);
    estado.historial.push(idc);
    estado.pos++;
    render();
  }

  q('[data-n="atras"]').onclick = () => { if(estado.pos > 0){ estado.pos--; render(); } };
  q('[data-n="adelante"]').onclick = () => { if(estado.pos < estado.historial.length-1){ estado.pos++; render(); } };
  q('[data-n="arriba"]').onclick = () => navegar(null);
  el.querySelectorAll('[data-gen]').forEach(b => b.onclick = () =>
    dialogo(b.dataset.gen, "Esta función no está disponible: los archivos del portafolio son de solo lectura.", ["Aceptar"]));
  el.querySelectorAll('[data-n="vistas"]').forEach(b => b.onclick = () =>
    dialogo("Vistas", "Iconos grandes es la única vista disponible por ahora.", ["Aceptar"]));
  q(".panel-iconos").onclick = e => {
    if(e.target.closest(".item")) return;
    e.currentTarget.querySelectorAll(".item").forEach(x => x.classList.remove("sel"));
    infoCarpeta(estado.historial[estado.pos] ? CONFIG.carpetas.find(c=>c.id===estado.historial[estado.pos]) : null);
  };

  if(idCarpeta){ estado.historial.push(idCarpeta); estado.pos = 1; }
  render();

  // permite que el enrutador cambie de carpeta en una ventana ya abierta
  ventanas.get(id).irACarpeta = idc => {
    if(estado.historial[estado.pos] === idc) return;
    navegar(idc);
  };
  return id;
}

/* ============================================================
   5. DOCUMENTOS
   ============================================================ */
function abrirDocumento(it, idCarpeta){
  const plantilla = document.querySelector(`template[data-doc="${it.id}"]`);

  const cuerpo = document.createElement("div");
  cuerpo.style.cssText = "display:flex;flex-direction:column;flex:1;min-height:0";
  cuerpo.innerHTML = `
    <div class="menus">
      <span class="mn"><u>A</u>rchivo</span><span class="mn"><u>E</u>dición</span><span class="mn"><u>V</u>er</span><span class="mn">A<u>y</u>uda</span>
    </div>
    <div class="herramientas banda-sep">
      <div class="gripper"></div>
      <button class="bh" data-n="imprimir">${ico("imprimir")}<span class="rotulo">Imprimir</span></button>
      ${it.sinEnlace ? "" : `<button class="bh" data-n="enlace">${ico("globo")}<span class="rotulo">Copiar enlace</span></button>`}
      ${it.repo ? `<div class="separador"></div><button class="bh" data-n="repo">${ico("repo")}<span class="rotulo">Ver en GitHub</span></button>` : ""}
      ${it.demo ? `<button class="bh" data-n="demo">${ico("web")}<span class="rotulo">Abrir herramienta</span></button>` : ""}
    </div>
    <div class="doc"></div>`;

  const doc = cuerpo.querySelector(".doc");
  if(plantilla){
    doc.appendChild(plantilla.content.cloneNode(true));
    // Fuente única de verdad: los <span data-usuario="…"> de los templates
    // se rellenan desde CONFIG.usuario, así el contacto se edita solo en
    // js/config.js y nunca en dos lugares a la vez.
    doc.querySelectorAll("[data-usuario]").forEach(s => {
      const v = CONFIG.usuario[s.dataset.usuario];
      if(v) s.textContent = v;
    });
  }else{
    doc.innerHTML = `<h1>Documento no encontrado</h1>
      <p>Falta el bloque <b>&lt;template data-doc="${it.id}"&gt;</b> en index.html.
      Agrégalo al final del archivo, junto a los demás documentos.</p>`;
  }

  const {el} = crearVentana({
    titulo: it.titulo || it.nombre, icono: it.icono,
    ancho:600, alto:480, contenido:cuerpo
  });

  if(idCarpeta) fijarHash(`#${idCarpeta}/${it.id}`);
  el.querySelector('[data-n="imprimir"]').onclick = () => window.print();
  el.querySelector('[data-n="repo"]')?.addEventListener("click", () => abrirEnlace(it.repo));
  el.querySelector('[data-n="demo"]')?.addEventListener("click", () => abrirEnlace(it.demo));
  el.querySelector('[data-n="enlace"]')?.addEventListener("click", () => {
    const url = location.href.split("#")[0] + `#${idCarpeta || ""}/${it.id}`;
    navigator.clipboard?.writeText(url).then(
      () => dialogo("Copiar enlace", "Enlace copiado al portapapeles:<br><br><b>" + url.split("/").pop() + "</b>", ["Aceptar"]),
      () => dialogo("Copiar enlace", "No se pudo copiar automáticamente. La dirección es:<br><br><b>" + url + "</b>", ["Aceptar"])
    );
  });
}

/* ============================================================
   5b. ENRUTADOR POR HASH  (#carpeta  ·  #carpeta/documento)
   ============================================================ */
let hashPropio = false;

function fijarHash(h){
  if(location.hash === h) return;
  hashPropio = true;
  history.replaceState(null, "", h || location.pathname + location.search);
  setTimeout(() => { hashPropio = false; }, 0);
}

function leerHash(){
  const partes = decodeURIComponent(location.hash.replace(/^#/, "")).split("/");
  const carp = CONFIG.carpetas.find(c => c.id === partes[0]);
  if(!carp) return null;
  const item = partes[1] ? carp.items.find(i => i.id === partes[1]) : null;
  return {carp, item};
}

function aplicarHash(){
  const r = leerHash();
  if(!r) return false;
  // reutiliza un explorador abierto si lo hay
  let expl = null;
  ventanas.forEach(v => { if(v.irACarpeta && !expl) expl = v; });
  if(expl) expl.irACarpeta(r.carp.id);
  else abrirExplorador(r.carp.id);
  if(r.item) abrirDocumento(r.item, r.carp.id);
  return true;
}

window.addEventListener("hashchange", () => { if(!hashPropio) aplicarHash(); });

/* ============================================================
   6. DIÁLOGOS
   ============================================================ */
function dialogo(titulo, texto, botones, alElegir){
  const capa = document.getElementById("capa");
  capa.classList.add("visible");
  capa.innerHTML = `
    <div class="dialogo ventana" style="z-index:${++z}">
      <div class="barra-titulo">
        <div class="tit">${titulo}</div>
        <button class="btn-tit cerrar" data-r=""><img src="img/vendor/os-gui/botones/cerrar.png" alt=""></button>
      </div>
      <div class="dlg-cuerpo">${ico("aviso")}<div style="line-height:1.6;padding-top:4px">${texto}</div></div>
      <div class="dlg-btns">${botones.map(b=>`<button class="out" data-r="${b}">${b}</button>`).join("")}</div>
    </div>`;
  capa.querySelectorAll("[data-r]").forEach(b => {
    b.onclick = () => { capa.classList.remove("visible"); capa.innerHTML=""; alElegir && alElegir(b.dataset.r); };
  });
  const d = capa.querySelector(".dialogo");
  d.style.left = Math.max(8, (window.innerWidth - d.offsetWidth) / 2) + "px";
  d.style.top  = Math.max(8, window.innerHeight * .38 - d.offsetHeight / 2) + "px";
  arrastrable(d);
}

/* ============================================================
   7. ESCRITORIO, MENÚ INICIO Y RELOJ
   ============================================================ */
function pintarEscritorio(){
  const d = document.getElementById("escritorio");
  const iconos = [
    {n:"Mi Portafolio", i:"pc", a:()=>abrirExplorador()},
    ...CONFIG.carpetas.map(c => ({n:c.nombre, i:c.icono, a:()=>abrirExplorador(c.id)})),
    {n:"GitHub", i:"repo", atajo:true, a:()=>abrirEnlace("https://" + CONFIG.usuario.github)},
    {n:"Papelera de reciclaje", i:"papelera", a:()=>dialogo("Papelera de reciclaje","La papelera está vacía. Los proyectos fallidos se archivan como aprendizajes.",["Aceptar"])}
  ];
  iconos.forEach(it => {
    const e = document.createElement("div");
    e.className = "icono-escritorio";
    e.tabIndex = 0;
    e.innerHTML = `<span class="marco-ico">${ico(it.i)}${it.atajo ? BADGE : ""}</span><span class="etq">${it.n}</span>`;
    const seleccionar = () => {
      d.querySelectorAll(".icono-escritorio").forEach(x=>x.classList.remove("activo"));
      e.classList.add("activo");
    };
    e.onclick = seleccionar;
    e.ondblclick = it.a;
    e.onkeydown = ev => { if(ev.key === "Enter") it.a(); };
    alTocar(e, seleccionar, it.a);
    d.appendChild(e);
  });
  d.onclick = e => { if(e.target === d) d.querySelectorAll(".icono-escritorio").forEach(x=>x.classList.remove("activo")); };
}

function pintarMenuInicio(){
  const l = document.getElementById("mi-lista");
  const items = [
    {n:"Programas", i:"carpeta", flecha:true, a:()=>abrirExplorador("proyectos")},
    {n:"Documentos", i:"doc", flecha:true, a:()=>abrirExplorador("perfil")},
    {n:"Habilidades", i:"herramienta", a:()=>abrirExplorador("habilidades")},
    {n:"Código", i:"terminal", a:()=>abrirExplorador("codigo")},
    {sep:true},
    {n:"Buscar", i:"buscar", a:()=>dialogo("Buscar","Usa el explorador para recorrer las carpetas del portafolio.",["Aceptar"])},
    {n:"Ayuda", i:"ayuda", a:()=>abrirExplorador("perfil")},
    {sep:true},
    {n:"Contactar...", i:"correo", a:()=>abrirExplorador("contacto")},
    {n:"Ir a GitHub", i:"repo", a:()=>abrirEnlace("https://" + CONFIG.usuario.github)},
    {n:"Apagar...", i:"apagar", a:()=>dialogo(
      "Cerrar Windows",
      "¿Qué quieres hacer?",
      ["Apagar","Reiniciar","Cancelar"],
      r => { if(r==="Apagar") apagar(); if(r==="Reiniciar") reiniciar(); }
    )}
  ];
  items.forEach(it => {
    if(it.sep){ const s = document.createElement("div"); s.className="mi-sep"; l.appendChild(s); return; }
    const b = document.createElement("button");
    b.className = "mi-item";
    b.style.cssText = "background:none;border:none;text-align:left;width:100%";
    b.innerHTML = ico(it.i) + `<span>${it.n}</span>` + (it.flecha ? `<span class="flecha">▶</span>` : "");
    b.onclick = () => { cerrarInicio(); it.a(); };
    l.appendChild(b);
  });
}

const btnInicio = document.getElementById("inicio");
const menuInicio = document.getElementById("menu-inicio");
btnInicio.innerHTML = ico("inicio","p") + "<span>Inicio</span>";
btnInicio.onclick = e => {
  e.stopPropagation();
  const abierto = menuInicio.classList.toggle("abierto");
  btnInicio.classList.toggle("presionado", abierto);
};
function cerrarInicio(){ menuInicio.classList.remove("abierto"); btnInicio.classList.remove("presionado"); }
document.addEventListener("click", e => { if(!menuInicio.contains(e.target) && e.target !== btnInicio) cerrarInicio(); });

function apagar(){
  const p = document.getElementById("apagado");
  p.classList.add("visible");
  p.onclick = () => p.classList.remove("visible");
}

function reloj(){
  const d = new Date();
  const h = d.getHours(), m = String(d.getMinutes()).padStart(2,"0");
  const ap = h < 12 ? "a.m." : "p.m.";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  document.getElementById("reloj").textContent = `${h12}:${m} ${ap}`;
}

/* ============================================================
   8. SECUENCIA DE ARRANQUE
   ============================================================ */
let omitirBoot = false;

function pausa(ms){
  return new Promise(res => {
    if(omitirBoot) return res();
    const t = setTimeout(() => { clearInterval(chk); res(); }, ms);
    const chk = setInterval(() => {
      if(omitirBoot){ clearTimeout(t); clearInterval(chk); res(); }
    }, 30);
  });
}

async function arrancar(){
  const capa   = document.getElementById("arranque");
  const bios   = document.getElementById("bios");
  const pie    = document.getElementById("pie-bios");
  const splash = document.getElementById("splash");
  const hint   = document.getElementById("omitir");

  omitirBoot = false;
  capa.style.display = "flex";
  splash.classList.remove("visible");
  bios.style.display = "block";
  pie.style.display = "block";
  hint.style.display = "block";
  bios.querySelectorAll("div").forEach(d => d.remove());
  pie.textContent = "";

  const saltar = () => { omitirBoot = true; };
  document.addEventListener("keydown", saltar, {once:true});
  capa.addEventListener("click", saltar, {once:true});

  const linea = (txt, clase="") => {
    const d = document.createElement("div");
    d.className = clase;
    d.innerHTML = txt;
    bios.appendChild(d);
    return d;
  };

  // ---- POST del BIOS ----
  linea('<span class="marca">Award Modular BIOS v4.51PG</span>');
  linea('Copyright (C) 1984-98, Award Software, Inc.');
  linea('&nbsp;');
  await pausa(500);

  linea('<span class="marca">PORTAFOLIO BIOS (2026) — EDICIÓN CARTOGRÁFICA</span>');
  linea('&nbsp;');
  await pausa(400);

  linea('Procesador principal : Pentium II MMX 350 MHz');
  await pausa(260);

  const mem = linea('Prueba de memoria :        0K');
  const total = 65536;
  const paso = 4096;
  for(let k = paso; k <= total; k += paso){
    if(omitirBoot) break;
    mem.innerHTML = `Prueba de memoria : ${String(k).padStart(8," ")}K`;
    await pausa(55);
  }
  mem.innerHTML = `Prueba de memoria : ${String(total).padStart(8," ")}K <span class="ok">OK</span>`;
  await pausa(350);
  linea('&nbsp;');

  const dispositivos = [
    ['Detectando IDE maestro primario   ', 'DISCO-GIS 40GB'],
    ['Detectando IDE esclavo primario   ', 'Ninguno'],
    ['Detectando IDE maestro secundario ', 'CD-ROM 24X'],
    ['Detectando coprocesador QGIS      ', 'OK'],
    ['Verificando proyecciones          ', 'EPSG cargado']
  ];
  for(const [etq, val] of dispositivos){
    if(omitirBoot) break;
    const d = linea(etq + '... ');
    await pausa(230);
    d.innerHTML = etq + '... <span class="ok">' + val + '</span>';
    await pausa(120);
  }

  await pausa(400);
  if(!omitirBoot){
    linea('&nbsp;');
    linea('Iniciando Nel 98... <span class="cursor"></span>');
    pie.textContent = "Presiona SUPR para entrar a SETUP  ·  29/07/2026";
    await pausa(1100);
  }

  // ---- Pantalla de carga ----
  bios.style.display = "none";
  pie.style.display = "none";
  hint.style.display = "none";
  splash.classList.add("visible");
  await pausa(omitirBoot ? 700 : 2400);

  // ---- Escritorio ----
  capa.style.display = "none";
  splash.classList.remove("visible");
  if(!ventanas.size && !aplicarHash()) abrirExplorador();
}

function reiniciar(){
  ventanas.forEach((v,id) => cerrar(id));
  document.getElementById("apagado").classList.remove("visible");
  arrancar();
}

/* ============================================================
   9. INICIALIZACIÓN
   ============================================================ */
pintarEscritorio();
pintarMenuInicio();
reloj(); setInterval(reloj, 15000);
document.addEventListener("contextmenu", e => e.preventDefault());

// Si el ancho cruza el umbral móvil (redimensión de ventana o giro de
// pantalla) con ventanas ya abiertas, se maximizan igual que las nuevas.
window.addEventListener("resize", () => {
  if(!tamMovil()) return;
  ventanas.forEach(v => ventanaMaximizada(v.el));
});

// Truco conocido: sin un listener de touchstart, Safari en iOS no aplica
// :active al tocar, y los botones parecen no responder al tacto.
document.addEventListener("touchstart", () => {}, {passive:true});

if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  if(!aplicarHash()) abrirExplorador();
}else{
  arrancar();
}
