let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let timer;

// Function to show slides
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add("active");
    timer = setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Navigation Controls
function changeSlide(n) {
    clearTimeout(timer);
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
    timer = setTimeout(showSlides, 3000); // Restart auto-scroll
}

// Start slideshow on page load
window.onload = function() {
    showSlides();
};
