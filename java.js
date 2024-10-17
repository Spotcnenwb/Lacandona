// Mostrar más detalles
function showMore() {
    const extraInfo = document.getElementById("extraInfo");
    extraInfo.classList.toggle("animate");
    if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
        extraInfo.style.display = "block";
        setTimeout(() => {
            extraInfo.style.opacity = 1;
        }, 10);
    } else {
        extraInfo.style.opacity = 0;
        setTimeout(() => {
            extraInfo.style.display = "none";
        }, 1000);
    }
}

// Slider de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function prevSlide() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
}

showSlide(currentSlide); // Mostrar la primera diapositiva al cargar
