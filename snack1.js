// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(a, b) {
    return a + b;
}
console.log("Dichiarativa:", somma(3, 5));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const somma = function (a, b) {
    return a + b;
}
console.log("anonima:", somma(3, 3));


// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const somma = (a, b) => a + b;

console.log("arrowf:", somma(3, 3));