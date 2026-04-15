'use strict';


// assegno API url a variabile
const API_RANDOM_EMAIL = 'https://flynn.boolean.careers/exercises/api/random/mail';

// inserisco riferimento al dom dove voglio inserire la mia email
const divEmail = document.querySelector('.stampa-qui')



// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// per farlo devo farmi il fetch e rtestituire data
// poi da data devo stampare del json con proprieta' .json

//per iterarlo 10 volte devo inserirlo in un ciclo for

for ( let i = 0; i < 10; i++) {

fetch(API_RANDOM_EMAIL) // vado a cercare le API e restituisco una promessa (quest e'l promessa)
    .then ((risposta) => { // QUANDO la promessa si avvera, ALLORA
        return risposta.json() // mi salva e restituisce il valore risposta in formato json per la prossima promessa (appliciamo il metodo json)
    })
    .then ((jsonData) => { // QUANDO anche la promessa di trasformazione del dato sara mantenuta, ALLORA
        console.log(jsonData.response); // checkpoint se la chiamata e'andata
        const randomEmail = jsonData.response;
        divEmail.innerHTML += `<li>${randomEmail}</>`;
    });

};

 // async await   approfondire 









