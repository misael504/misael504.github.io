console.log("Bienvenidos a San Matías, El Paraíso");

// Función para mostrar u ocultar el menú flotante
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Cierra el menú si el usuario hace clic fuera de él
window.onclick = function(event) {
    var menu = document.getElementById("menu");
    var icon = document.querySelector(".menu-icon");
    
    if (event.target !== menu && event.target !== icon) {
        menu.classList.remove("active");
    }
};