const random = function() {
    return Math.floor(Math.random() * 76) + 1;
}
const contenitore = document.getElementById("contenitore");
const numeri = []

const creazioneCelle = function () {
    for (let i = 0; i < 76; i++) {
        const divCelle = document.createElement("div");
        const pCelle = document.createElement("p");
        pCelle.textContent = i + 1;
        divCelle.appendChild(pCelle); 
        contenitore.appendChild(divCelle);
    }
};


const numeroEstratto = function() {
    const bottone = document.getElementById("estrazione");
    bottone.addEventListener("click", function(){
        const numeroCasuale = random();
        const celle = document.querySelectorAll("div > p")
        // servirebbe un foreach con un if annidato che associa il numero casuale alle celle e applichi la classe .selected, forse? (molto forse)
        if (numeroCasuale === celle) {
                
        }
    })
}

creazioneCelle()