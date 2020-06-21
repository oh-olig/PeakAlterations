////////////////////////////////////////////////////////////
// M O D A L
//////////////////////////////////////////////////////////// 

var modal = document.getElementById("img-modal");
var imgCol1 = document.getElementById("imgCol1");
var imgCol2 = document.getElementById("imgCol2");
var imgCol3 = document.getElementById("imgCol3");

var modalImg = document.getElementById("modalContent");
var captionText = document.getElementById("caption");
imgCol1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgCol2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgCol3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}