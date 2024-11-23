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