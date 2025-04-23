// Crea un contatore automatico con setInterval

//     Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
    return function () {
        let contatore = 0;
        setInterval(() => {
            contatore++;
            console.log("contatore", contatore);

        }, intervallo)
    };
}

const avviaContatore = creaContatoreAutomatico(2000);
avviaContatore();