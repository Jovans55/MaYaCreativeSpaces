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
  let testimonials = document.getElementsByClassName("testimonial");
  console.log(testimonials);
  let dots = document.getElementsByClassName("column");
  if (n > testimonials.length) {slideIndex = 1}
  if (n < 1) {slideIndex = testimonials.length}
  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  testimonials[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}