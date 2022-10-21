const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

const description1 = document.getElementById("enterprise");
const description2 = document.getElementById("sms");
const description3 = document.getElementById("agencies");
const description4 = document.getElementById("institution");

//Accions
//TODO: Aconseguir que les constants estiguin fora de la funció i les pugui llegir igualment per no haver de repetirles 4 cops.


card1.addEventListener("click", showCard1)
card2.addEventListener("click", showCard2)
card3.addEventListener("click", showCard3)
card4.addEventListener("click", showCard4)


function showCard1() {
    const isCard2Closed = description2.classList.contains("inactive")
    const isCard3Closed = description3.classList.contains("inactive")
    const isCard4Closed = description4.classList.contains("inactive")

    const isCard2Selected = card2.classList.contains("my-cards-selected")
    const isCard3Selected = card3.classList.contains("my-cards-selected")
    const isCard4Selected = card4.classList.contains("my-cards-selected")
    
    if (!isCard2Closed ||!isCard3Closed || !isCard4Closed) {
        description2.classList.add("inactive")
        description3.classList.add("inactive")
        description4.classList.add("inactive")
    }

    if (!isCard2Selected || !isCard3Selected || !isCard4Selected) {
        card2.classList.remove("my-cards-selected")
        card3.classList.remove("my-cards-selected")
        card4.classList.remove("my-cards-selected")
    }

    description1.classList.toggle("inactive")
    card1.classList.toggle("my-cards-selected")

    if (isCard2Closed && isCard3Closed && isCard4Closed ) {
        description1.classList.remove("inactive")
    }
}

function showCard2() {
    const isCard1Closed = description1.classList.contains("inactive");
    const isCard3Closed = description3.classList.contains("inactive")
    const isCard4Closed = description4.classList.contains("inactive")

    const isCard1Selected = description1.classList.contains("my-cards-selected")
    const isCard3Selected = card3.classList.contains("my-cards-selected")
    const isCard4Selected = card4.classList.contains("my-cards-selected")

    if(!isCard1Closed || !isCard3Closed || !isCard4Closed ) {
        description1.classList.add("inactive");
        description3.classList.add("inactive")
        description4.classList.add("inactive")
    }

    if (!isCard1Selected || !isCard3Selected || !isCard4Selected) {
        card1.classList.remove("my-cards-selected")
        card3.classList.remove("my-cards-selected")
        card4.classList.remove("my-cards-selected")
    }

    description2.classList.toggle("inactive");
    card2.classList.toggle("my-cards-selected")

    if (isCard1Closed && isCard3Closed && isCard4Closed ) {
        description2.classList.remove("inactive")
    }

}

function showCard3() {
    const isCard1Closed = description1.classList.contains("inactive");
    const isCard2Closed = description2.classList.contains("inactive")
    const isCard4Closed = description4.classList.contains("inactive")

    const isCard1Selected = description1.classList.contains("my-cards-selected")
    const isCard2Selected = card2.classList.contains("my-cards-selected")
    const isCard4Selected = card4.classList.contains("my-cards-selected")

    if (!isCard1Closed || !isCard2Closed || !isCard4Closed) {
        description1.classList.add("inactive")
        description2.classList.add("inactive")
        description4.classList.add("inactive")
    }

    if (!isCard1Selected || !isCard2Selected || !isCard4Selected) {
        card1.classList.remove("my-cards-selected")
        card2.classList.remove("my-cards-selected")
        card4.classList.remove("my-cards-selected")
    }

    description3.classList.toggle("inactive");
    card3.classList.toggle("my-cards-selected")

    if (isCard1Closed && isCard2Closed && isCard4Closed ) {
        description3.classList.remove("inactive")
    }
}

function showCard4() {
    const isCard1Closed = description1.classList.contains("inactive");
    const isCard2Closed = description2.classList.contains("inactive")
    const isCard3Closed = description3.classList.contains("inactive")

    const isCard1Selected = description1.classList.contains("my-cards-selected")
    const isCard2Selected = card2.classList.contains("my-cards-selected")
    const isCard3Selected = card3.classList.contains("my-cards-selected")

        if (!isCard1Closed || !isCard2Closed || !isCard3Closed) {
            description1.classList.add("inactive")
            description2.classList.add("inactive")
            description3.classList.add("inactive")
        }

        if (!isCard1Selected || !isCard2Selected || !isCard3Selected) {
            card1.classList.remove("my-cards-selected")
            card2.classList.remove("my-cards-selected")
            card3.classList.remove("my-cards-selected")
        }
    description4.classList.toggle("inactive")
    card4.classList.toggle("my-cards-selected")

    if (isCard1Closed && isCard2Closed && isCard3Closed ) {
        description4.classList.remove("inactive")
    }
}
