const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // get current class
    const current = document.querySelector(".current");
    // Remove current class
    current.classList.remove("current");

    // Check for next Slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add("current");
    } else {
        // Add current to start
        slides[0].classList.add("current");
    }
};

const prevSlide = () => {
    // get current class
    const current = document.querySelector(".current");
    // Remove current class
    current.classList.remove("current");

    // Check for prev Slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add("current");
    } else {
        // Add current to start
        slides[slides.length - 1].classList.add("current");
    }
};

// Buttons events
next.addEventListener("click", () => {
    nextSlide();
    if (auto) {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener("click", () => {
    prevSlide();
    if (auto) {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    sliderInterval = setInterval(nextSlide, intervalTime);
}
