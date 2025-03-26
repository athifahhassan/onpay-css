var slideIndex = 0;
var slideInterval;
var slides = document.getElementsByClassName("mySlides");

window.plusDivs = function (n, isManual = false) {
  if (isManual) resetAutoSlide();
  slideIndex += n;
  showDivs();
};

function showDivs() {
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }

  // Remove active class from all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide");
  }

  // Add active class to the current slide
  slides[slideIndex].classList.add("active-slide");
}

function autoSlide() {
  plusDivs(1);
  slideInterval = setTimeout(autoSlide, 5000); // Auto-slide every 5s
}

function resetAutoSlide() {
  clearTimeout(slideInterval);
  slideInterval = setTimeout(autoSlide, 5000);
}

// Initialize the first slide properly
showDivs();
autoSlide();
