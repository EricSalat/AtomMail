var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");

var description1 = document.getElementById("enterprise");
var description2 = document.getElementById("sms");

//Accions
// card1.addEventListener("click", function() {
    
//     description2.classList.toggle("d-none");
// });

card2.addEventListener("click", function() {
    description1.classList.toggle("d-none");
    description2.classList.toggle("d-none");
    // description1.style.display = "none";
    // description2.style.display = "flex";
    console.log("Está funcionando");
});
