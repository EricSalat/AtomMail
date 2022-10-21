var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");

var description1 = document.getElementById("enterprise");
var description2 = document.getElementById("sms");
var description3 = document.getElementById("agencies");
var description4 = document.getElementById("institution");

//Accions
// TODO: card1.addEventListener("mouseover", funcion)
//TODO: Aconseguir que les constants estiguin fora de la funció i les pugui llegir igualment per no haver de repetirles 4 cops.
//TODO: Aconseguir que quan cliqui una card, es mantingui el color negre mitjançant una classe // o jugant amb focus o active.
//TODO: Afegir condició que sempre quedi 1 card activa i que no es pugui desapareixer tote si quedar buit => if totes estan active, mantenir la descripció actual.

card1.addEventListener("click", showCard1)
card2.addEventListener("click", showCard2)
card3.addEventListener("click", showCard3)
card4.addEventListener("click", showCard4)


function showCard1() {
    // const isCard1Closed = description1.classList.contains("inactive")
    const isCard2Closed = description2.classList.contains("inactive")
    const isCard3Closed = description3.classList.contains("inactive")
    const isCard4Closed = description4.classList.contains("inactive")
    
    if (!isCard2Closed ||!isCard3Closed || !isCard4Closed) {
        description2.classList.add("inactive")
        description3.classList.add("inactive")
        description4.classList.add("inactive")
    }

    description1.classList.toggle("inactive")
}

function showCard2() {
    const isCard1Closed = description1.classList.contains("inactive");
    // const isCard2Closed = description2.classList.contains("inactive")
    const isCard3Closed = description3.classList.contains("inactive")
    const isCard4Closed = description4.classList.contains("inactive")

    if(!isCard1Closed || !isCard3Closed || !isCard4Closed ) {
        description1.classList.add("inactive");
        description3.classList.add("inactive")
        description4.classList.add("inactive")
    }
    description2.classList.toggle("inactive");

}

function showCard3() {
    const isCard1Closed = description1.classList.contains("inactive");
    const isCard2Closed = description2.classList.contains("inactive")
    //const isCard3Closed = description3.classList.contains("inactive")
    const isCard4Closed = description4.classList.contains("inactive")

    if (!isCard1Closed || !isCard2Closed || !isCard4Closed) {
        description2.classList.add("inactive")
        description3.classList.add("inactive")
        description4.classList.add("inactive")
    }
    description3.classList.toggle("inactive");
}

function showCard4() {
    const isCard1Closed = description1.classList.contains("inactive");
    const isCard2Closed = description2.classList.contains("inactive")
    const isCard3Closed = description3.classList.contains("inactive")
    // const isCard4Closed = description4.classList.contains("inactive")

        if (!isCard1Closed || !isCard2Closed || !isCard3Closed) {
            description1.classList.add("inactive")
            description2.classList.add("inactive")
            description3.classList.add("inactive")
        }
    description4.classList.toggle("inactive")
}
