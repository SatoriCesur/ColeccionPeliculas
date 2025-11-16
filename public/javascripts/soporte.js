const botonEnviar = document.querySelector(".enviar");
const modalSolicitud = document.querySelector(".modal_solicitud");

botonEnviar?.addEventListener("click", (e) => {
    e.preventDefault();
    modalSolicitud.classList.add("activado");
    
});

document.addEventListener("click", (e) => {
    if (!modalSolicitud.contains(e.target) && e.target !== botonEnviar) {
        modalSolicitud.classList.remove("activado");
    }
});