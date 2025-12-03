const bRegistro = document.querySelector(".boton-registro");
const contenedorRegistro = document.querySelector(".contenedor_registro");
const cerrar = document.querySelector(".cerrar");
const registro = document.querySelector(".registro");

const bAcceso = document.querySelector(".boton-acceso");
const contenedorAcceso = document.querySelector(".contenedor_acceso");
const cerrarAcceso = document.querySelector(".cerrar-acceso");
const acceso = document.querySelector(".acceso");

// --- MODAL REGISTRO ---
bRegistro?.addEventListener("click", () => {
  contenedorRegistro.classList.add("active");
});

cerrar?.addEventListener("click", () => {
  contenedorRegistro.classList.remove("active");
});

contenedorRegistro?.addEventListener("click", (e) => {
  if (!registro.contains(e.target)) {
    contenedorRegistro.classList.remove("active");
  }
});

// --- MODAL ACCESO ---
bAcceso?.addEventListener("click", () => {
  contenedorAcceso.classList.add("active");
});

cerrarAcceso?.addEventListener("click", () => {
  contenedorAcceso.classList.remove("active");
});

contenedorAcceso?.addEventListener("click", (e) => {
  if (!acceso.contains(e.target)) {
    contenedorAcceso.classList.remove("active");
  }
});

// Mostrar modal de acceso si hay error de login
if (typeof window !== 'undefined') {
  const loginError = document.querySelector('.login-error');
  if (loginError && contenedorAcceso) {
    contenedorAcceso.classList.add('active');
  }
}

// --- CAMBIAR PELICULAS ---
const peliculas = [
  "/images/superman_fondo.jpg",
  "images/7ed2fe4a-2799-499b-89e8-ab4f05eeb214_source-aspect-ratio_1600w_0.jpg",
  "images/personajes-jumanji-el-siguiente-nivel-4191.jpg",
  "/images/compose.webp",
];
let indicePelicula = 0;
const contenedor = document.querySelector(".contenedor1");
const botonSiguiente = document.querySelector(".icono");
botonSiguiente?.addEventListener("click", () => {
  indicePelicula = (indicePelicula + 1) % peliculas.length;
  contenedor.style.backgroundImage = `linear-gradient(0deg, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),url('${peliculas[indicePelicula]}')`;
  contenedor.style.backgroundSize = "cover";
  contenedor.style.backgroundPosition = "center";
  contenedor.style.backgroundRepeat = "no-repeat";
});

// --- MODAL DETALLES ---
const detallesBotones = document.querySelectorAll(".boton-detalles");
const modalDetalles = document.querySelector(".modal_detalles");
const cerrarDetalles = document.querySelector(".cerrar-detalles");

detallesBotones.forEach(boton => {
  boton.addEventListener("click", () => {
    modalDetalles.classList.add("detalles_activo");
  });
});

cerrarDetalles?.addEventListener("click", () => {
  modalDetalles.classList.remove("detalles_activo");
});

modalDetalles?.addEventListener("click", (e) => {
  if (e.target === !modalDetalles) {
    modalDetalles.classList.remove("detalles_activo");
  }
});