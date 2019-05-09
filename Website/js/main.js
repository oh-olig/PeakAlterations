$(document).ready(function () {
    
    ////////////////////////////////////////////////////////////
    // A N I M A T I O N
    //////////////////////////////////////////////////////////// 
    
    // Footer Logos Tween
    TweenMax.set($("footer svg"), {filter: "grayscale(100%)", autoAlpha: 0.2});
    $("footer svg").on({
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
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });
    
    // Bind Scroll Anchor Links
    $("ul.nav li a, a.navbar-brand img").on("click", function (e) {  
        
        // Navbar Inactive/Active Link
        $("ul.nav li").removeClass("active");
        $(this).parent().toggleClass("active"); 
        
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
    
});