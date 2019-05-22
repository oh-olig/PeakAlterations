$(document).ready(function () {
    
    ////////////////////////////////////////////////////////////
    // A N I M A T I O N
    //////////////////////////////////////////////////////////// 
    
    // Footer Logos Tween
    TweenMax.set($("footer img"), {filter: "grayscale(100%)", autoAlpha: 0.2});
    $("footer img").on({
        mouseenter:function() {
            TweenMax.to($(this), 0.5, {filter: "none", autoAlpha: 1});
        }, mouseleave:function() {
            TweenMax.to($(this), 0.2, {filter: "grayscale(100%)", autoAlpha: 0.2});
        }
    }); 
    
    ////////////////////////////////////////////////////////////
    // S C R O L L   M A G I C
    ////////////////////////////////////////////////////////////  
    
    // Init Scroll Magic Controller
    var controller = new ScrollMagic.Controller();  
    
    // Animate Scroll
    controller.scrollTo(function (newpos) {
        newpos = newpos - 50;
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });
    
    // Bind Scroll Anchor Links
    $("ul.nav li a, a.navbar-brand img").on("click", function (e) {  
        
        // Navbar Inactive/Active Link
        $("ul.nav li").removeClass("active");
        $(this).parent().toggleClass("active");
        $(".navbar-collapse").removeClass("in");
        
        // Anchor Link ID
        var id = $(this).attr("href");
       
        if ($(id).length > 0) {
            e.preventDefault(); 
            
            // Trigger Scroll
            controller.scrollTo(id);
            
            // Update URL
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });

    ////////////////////////////////////////////////////////////
    // M O D A L
    //////////////////////////////////////////////////////////// 

    // Get the model
    var modal = document.getElementById("imgModal");

    // Get the images
    var imgJacket = document.getElementById("imgJacket");
    var imgCushions = document.getElementById("imgCushions");
    var imgBag = document.getElementById("imgBag");

    // Insert image inside the modal on click - use its "alt" text as a caption
    var modalImg = document.getElementById("modalContent");
    var captionText = document.getElementById("caption");
    imgJacket.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    imgCushions.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    imgBag.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    ////////////////////////////////////////////////////////////
    // J A W G   M A P
    //////////////////////////////////////////////////////////// 
    
    // Allow map scroll zoom after click
    $('.map-container').click(function () {
        $('.map-container iframe').css("pointer-events", "auto");
    });
    
    // Prevent map scroll zoom
    $( ".map-container" ).mouseleave(function() {
      $('.map-container iframe').css("pointer-events", "none");
    });
    
});

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
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}