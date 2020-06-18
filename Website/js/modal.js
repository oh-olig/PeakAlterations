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