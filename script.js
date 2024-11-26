let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .slide');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems; 
    }else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=> {next.click()}, 5000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(()=> {next.click()}, 5000);
}
dots.forEach((li, key) =>{
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

// Modal funcionalidad
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalModelo = document.getElementById('modal-modelo');
const modalDescription = document.getElementById('modal-description');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-modal');
const modalLink = document.getElementById('modal-link');

// Abrir el modal al hacer clic en una imagen
document.querySelectorAll('.gallery-grid img').forEach((img) => {
    img.addEventListener('click', () => {
        const modelo = img.getAttribute('data-modelo');
        modalImage.src = img.src;
        modalImage.alt = img.alt;

        // Actualizar modelo, descripción y mensaje
        modalModelo.textContent = modelo;
        modalDescription.textContent = img.getAttribute('data-description');
        modalMessage.textContent = `Mensaje sugerido: "Hola! Me interesa el modelo ${modelo}, ¿está disponible? ¿Podrías indicarme su precio? Gracias."`;

        // Configurar el enlace al chat de Instagram
        modalLink.href = `https://instagram.com/vapstudioo`;

        modal.classList.add('visible');
    });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('visible');
});


// Animaciones con GSAP
gsap.from("#hero h1", {
    opacity: 0,
    y: -50,
    duration: 1
});
gsap.from("#hero p", {
    opacity: 0,
    y: 50,
    delay: 0.3,
    duration: 1
});
gsap.from("#shop-now", {
    scale: 0.8,
    delay: 0.6,
    duration: 1
});

// Selección del botón y menú
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Evento para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('visible'); // Alternar clase visible
});



document.addEventListener("DOMContentLoaded", () => {
    // Inicializa el mapa centrado en La Plata
    const map = L.map("map", { scrollWheelZoom: false }).setView([-34.9205, -57.9536], 13);

    // Agrega capa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Define zona roja (La Plata) como un polígono inclinado
    const highCostZone = [
        [-34.9050, -57.9850], // Esquina superior izquierda
        [-34.9000, -57.9300], // Esquina superior derecha
        [-34.9500, -57.9300], // Esquina inferior derecha
        [-34.9500, -57.9850], // Esquina inferior izquierda
    ];

    // Define zona verde (Ringuelet) como un polígono inclinado
    const lowCostZone = [
        [-34.8800, -58.0200], // Esquina superior izquierda
        [-34.8800, -57.9700], // Esquina superior derecha
        [-34.9050, -57.9700], // Esquina inferior derecha
        [-34.9050, -58.0200], // Esquina inferior izquierda
    ];

    // Crea polígonos para las zonas
    const highCostPolygon = L.polygon(highCostZone, {
        color: "#ff0000",
        fillColor: "#ff0000",
        fillOpacity: 0.4,
    }).addTo(map);

    const lowCostPolygon = L.polygon(lowCostZone, {
        color: "#28a745",
        fillColor: "#28a745",
        fillOpacity: 0.4,
    }).addTo(map);

    // Eventos para mostrar información al hacer clic en cada zona
    highCostPolygon.on("click", (e) => {
        L.popup().setLatLng(e.latlng).setContent("Zona La Plata: Costo de envío $6000").openOn(map);
    });

    lowCostPolygon.on("click", (e) => {
        L.popup().setLatLng(e.latlng).setContent("Zona Ringuelet: Costo de envío $3500 - $4000").openOn(map);
    });

    // Ajusta la vista del mapa para mostrar ambas zonas
    map.fitBounds([...highCostZone, ...lowCostZone]);

    // Botón para desbloquear/lock scroll del mapa
    const unlockButton = document.getElementById("unlock-map");
    unlockButton.addEventListener("click", () => {
        const scrollEnabled = map.scrollWheelZoom.enabled();
        if (scrollEnabled) {
            map.scrollWheelZoom.disable();
            unlockButton.textContent = "Desbloquear Zoom";
        } else {
            map.scrollWheelZoom.enable();
            unlockButton.textContent = "Bloquear Zoom";
        }
    });
});