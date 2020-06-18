////////////////////////////////////////////////////////////
// L I G H T B O X
//////////////////////////////////////////////////////////// 

// Open the Lightbox
function openLightbox() {
    document.getElementById("imgLightbox").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("imgLightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("imgSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotactive", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dotactive";
}