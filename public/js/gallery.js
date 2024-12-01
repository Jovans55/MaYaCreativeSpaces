let slideIndexSingle = 1;
let slideIndexTown = 1;
let slideIndexCondo = 1;
showSlidesSingle(slideIndexSingle);
showSlidesTown(slideIndexTown);
showSlidesCondo(slideIndexCondo);

function plusSlidesSingle(n) {
    showSlidesSingle(slideIndexSingle += n);
}

function plusSlidesTown(n) {
    showSlidesTown(slideIndexTown += n);
}

function plusSlidesCondo(n) {
    showSlidesCondo(slideIndexCondo += n);
}

function currentSlideSingle(n) {
    showSlidesSingle(slideIndexSingle = n);
}

function currentSlideTown(n) {
    showSlidesTown(slideIndexTown = n);
}

function currentSlideCondo(n) {
    showSlidesCondo(slideIndexCondo = n);
}

function showSlidesSingle(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesSingle");
  let dots = document.getElementsByClassName("columnSingle");
  let captionText = document.getElementById("captionSingle");
  if (n > slides.length) {slideIndexSingle = 1}
  if (n < 1) {slideIndexSingle = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndexSingle-1].style.display = "block";
  dots[slideIndexSingle-1].className += " active";

  let imgElement = slides[n - 1].querySelector("img");
  
  captionText.innerHTML = imgElement.alt;
}

function showSlidesTown(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesTown");
    let dots = document.getElementsByClassName("columnTown");
    let captionText = document.getElementById("captionTown");
    if (n > slides.length) {slideIndexTown = 1}
    if (n < 1) {slideIndexTown = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndexTown-1].style.display = "block";
    dots[slideIndexTown-1].className += " active";
  
    let imgElement = slides[n - 1].querySelector("img");
    
    captionText.innerHTML = imgElement.alt;
}

  function showSlidesCondo(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesCondo");
    let dots = document.getElementsByClassName("columnCondo");
    let captionText = document.getElementById("captionCondo");
    if (n > slides.length) {slideIndexCondo = 1}
    if (n < 1) {slideIndexCondo = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndexCondo-1].style.display = "block";
    dots[slideIndexCondo-1].className += " active";
  
    let imgElement = slides[n - 1].querySelector("img");
    
    captionText.innerHTML = imgElement.alt;
}