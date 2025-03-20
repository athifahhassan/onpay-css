<script>
  var slideIndex = 0;
  var slideInterval;

  function plusDivs(n, isManual = false) {
    if (isManual) resetAutoSlide();
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active-slide");
    }
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

  autoSlide(); // Start auto-sliding
