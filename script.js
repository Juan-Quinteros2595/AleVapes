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

// Funcionalidad del modal para la galería
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');

// Abrir el modal al hacer clic en una imagen
document.querySelectorAll('.gallery-grid img').forEach((img) => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modalImage.alt = img.alt;

        // Usar el atributo `data-description` para la descripción
        modalDescription.textContent = img.getAttribute('data-description');

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