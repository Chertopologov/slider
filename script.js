let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slidesText = document.getElementsByClassName("slider-content");
  let dots = document.getElementsByClassName("slider-dots");
  if (n > slidesText.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slidesText.length}
  for (i = 0; i < slidesText.length; i++) {
    slidesText[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesText[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
