////////////////////////////////////////////////////////////
// J A W G   M A P
//////////////////////////////////////////////////////////// 

$('.map-container').click(function () {
    $('.map-container iframe').css("pointer-events", "auto");
});

$( ".map-container" ).mouseleave(function() {
    $('.map-container iframe').css("pointer-events", "none");
});