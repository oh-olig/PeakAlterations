$(document).ready(function () {
    
    ////////////////////////////////////////////////////////////
    // A N I M A T I O N
    ////////////////////////////////////////////////////////////

    gsap.set($("footer img"), {filter: "grayscale(100%)", autoAlpha: 0.2});
    $("footer img").on({
        mouseenter:function() {
            gsap.to($(this), {filter: "none", autoAlpha: 1});
        }, mouseleave:function() {
            gsap.to($(this), {filter: "grayscale(100%)", autoAlpha: 0.2});
        }
    });
    
});