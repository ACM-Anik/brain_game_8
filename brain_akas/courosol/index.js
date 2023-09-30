document.addEventListener("DOMContentLoaded", function() {
  const dots = document.querySelectorAll(".carousel-dots span");
  const images = document.querySelectorAll(".carousel-item");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
      dots.forEach(dot => dot.classList.remove("active-dot"));
      images.forEach(image => image.classList.remove("active-item"));

      dot.classList.add("active-dot");
      images[index].classList.add("active-item");
    });
  });
});
