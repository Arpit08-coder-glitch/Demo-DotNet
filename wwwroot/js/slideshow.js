document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const indicator = document.getElementById("slide-indicator");

    let currentIndex = 0;

    function showSlide(index) {
        // Wrap index around
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        currentIndex = index;

        // Hide all slides
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        // Show current
        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");

        // Update indicator text
        indicator.textContent = `${currentIndex + 1} / ${slides.length}`;
    }

    // Button events
    nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
    prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));

    // Dot click events
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => showSlide(idx));
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") showSlide(currentIndex + 1);
        if (e.key === "ArrowLeft") showSlide(currentIndex - 1);
    });

    // Init first slide
    showSlide(currentIndex);
});