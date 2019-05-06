const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
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
    // setTimeout(() => current.classList.remove("current"));
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
    // setTimeout(() => current.classList.remove("current"));
};

// Buttons events
next.addEventListener("click", () => {
    nextSlide();
});

prev.addEventListener("click", () => {
    prevSlide();
});
