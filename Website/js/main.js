$(document).ready(function () {

    ////////////////////////////////////////////////////////////
    // P A G E   N A V I G A T I O N
    ////////////////////////////////////////////////////////////

    $("#modal").load("common/modal.html");
    
    ////////////////////////////////////////////////////////////
    // A N I M A T I O N
    //////////////////////////////////////////////////////////// 

    TweenMax.set($("footer img"), {filter: "grayscale(100%)", autoAlpha: 0.2});
    $("footer img").on({
        mouseenter:function() {
            TweenMax.to($(this), 0.5, {filter: "none", autoAlpha: 1});
        }, mouseleave:function() {
            TweenMax.to($(this), 0.2, {filter: "grayscale(100%)", autoAlpha: 0.2});
        }
    });
    
});