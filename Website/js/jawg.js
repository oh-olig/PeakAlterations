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