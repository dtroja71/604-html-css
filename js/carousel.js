const images = [
    'img/baby-yoda.svg',
    'img/banana.svg',
    'img/girl.svg',
    'img/viking.svg',
];

let currentSlide = 0;

function showCurrentSlide() {
    const imageContainer = document.querySelector('.products-carousel .product-image');
    imageContainer.src = images[currentSlide];
}

function next() {
    currentSlide++;
    if (currentSlide > images.length - 1) currentSlide = 0;
    showCurrentSlide();
}

setInterval(next, 1000);

showCurrentSlide();

document.querySelector('.products-carousel .next').addEventListener('click', next)
document.querySelector("#products").classList.add('zebra-bg');