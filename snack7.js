// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    const id = setInterval(() => {
        console.log(messaggio);
    }, tempoAvvio);

    setTimeout(() => {
        clearInterval(id);
        console.log("Stop esecuzione.");
    }, tempoStop);
}

eseguiEferma("Ciao mondo!", 1000, 5000);