var slideIndex = 0;
var slideInterval;

window.plusDivs = function (n, isManual = false) {
  if (isManual) resetAutoSlide();
  showDivs(slideIndex += n);
};

function showDivs(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function autoSlide() {
  plusDivs(1);
  slideInterval = setTimeout(autoSlide, 5000); // Auto-slide every 5s
}

function resetAutoSlide() {
  clearTimeout(slideInterval);
  slideInterval = setTimeout(autoSlide, 5000);
}

autoSlide(); // Start auto-sliding
