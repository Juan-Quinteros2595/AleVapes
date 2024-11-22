document.addEventListener('DOMContentLoaded', () => {
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0; // Índice inicial de la imagen activa
const totalImages = images.length;
const intervalTime = 4000; // Cambiar imagen cada 4 segundos

// Función para actualizar las transformaciones de las imágenes
function updateCarousel() {
    // Estilizar la imagen activa
    images[currentIndex].style.transform = `translateX(0) scale(1.2)`; // mas grande y centrada
    images[currentIndex].style.zIndex = 1;
    images[currentIndex].style.filter = 'none';
    images[currentIndex].style.opacity = 1;

    // Imágenes a la derecha de la activa
    let stt= 1; // comenzar en 1 para la primera imagen a la derecha
    for (let i = currentIndex + 1; i < totalImages; i++) {
        images[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        images[i].style.zIndex = -stt;
        images[i].style.filter = 'blur(5px)';
        images[i].style.opacity = stt > 2 ? 0 : 0.6;
        stt++;
    }

        // Imágenes a la izquierda de la activa
        stt = 1; // primera imagen a la izquierda
    for (let i = currentIndex - 1; i >= 0; i--) {
        stt++;
        images[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        images[i].style.zIndex = -stt;
        images[i].style.filter = 'blur(5px)';
        images[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
// Función para avanzar automáticamente a la siguiente imagen
function autoNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Incrementar y reiniciar si se llega al final
    updateCarousel();
}

// Inicializar el carrusel
updateCarousel();

// Iniciar el carrusel automático
setInterval(autoNextImage, intervalTime);
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
