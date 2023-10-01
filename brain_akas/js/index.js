document.addEventListener("DOMContentLoaded", function() {
    const dots = document.querySelectorAll(".carousel-dots span");
    const images = document.querySelectorAll(".carousel-item");

    let dotClicked = false;
    let currentIndex = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            dots.forEach(dot => dot.classList.remove("active-dot"));
            images.forEach(image => image.classList.remove("active-item"));

            dot.classList.add("active-dot");
            images[index].classList.add("active-item");

            dotClicked = true;
            currentIndex = index;
        });
    });

    const skipButton = document.querySelector(".btn");
    skipButton.addEventListener("click", function() {
        if (dotClicked) {
            images[currentIndex].classList.remove("active-item");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active-item");
            dots.forEach(dot => dot.classList.remove("active-dot"));
            dots[currentIndex].classList.add("active-dot");
        }
    });
});
