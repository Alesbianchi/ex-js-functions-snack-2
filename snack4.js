// Crea un generatore di funzioni creaTimer

// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(ms) {
    return function () {
        setTimeout(() => {
            console.log("tempo scaduto");
        }, ms)
    };
}

const timer2Secondi = creaTimer(2000);
timer2Secondi();