let currentSlide = 0;
let slides = document.querySelectorAll(".slide");
let slideshow = document.getElementById("slideshow");

function openSlides() {
  slideshow.style.display = "block";
  showSlide(currentSlide);
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Swipe gesture untuk HP
let startX = 0;

slideshow.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slideshow.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    nextSlide(); // geser kiri → next
  } else if (endX - startX > 50) {
    prevSlide(); // geser kanan → prev
  }
});
