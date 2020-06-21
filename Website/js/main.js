$(document).ready(function () {

    ////////////////////////////////////////////////////////////
    // P A G E   N A V I G A T I O N
    ////////////////////////////////////////////////////////////

    $("#content").load("content/home.html");

    $("ul.nav li a, a.navbar-brand").on("click", function (e) {  

        $("ul.nav li").removeClass("active");
        $(this).parent().toggleClass("active");
        $(".navbar-collapse").removeClass("in");

        var id = $(this).attr("id");

        $("#content").load(id);
        window.scroll(0, 0);
    });
    
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