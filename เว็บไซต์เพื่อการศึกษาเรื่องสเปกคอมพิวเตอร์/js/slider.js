let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
}

function currentSlide(i) {
    showSlide(i);
}

showSlide (0);

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000);