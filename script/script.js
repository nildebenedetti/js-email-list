'use strict';


// assegno API url a variabile
const API_RANDOM_EMAIL = 'https://flynn.boolean.careers/exercises/api/random/mail';

// inserisco riferimento al dom dove voglio inserire la mia email
const ulEmail = document.querySelector('.stampa-qui')
// inserisco il riferimento al dom per il bottone
const btnRefresh = document.querySelector('.btn-refresh');

/*========== FUNCTIONS ======================================*/

// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// per farlo devo farmi il fetch e rtestituire data
// poi da data devo stampare del json con proprieta' .json
// visto che si puo ottimizzare io metto tutto il mio bel pezzettone in una funzione e poi invoco quella

function pullTenEmails() {
    //per iterarlo 10 volte devo inserirlo in un ciclo for

    for (let i = 0; i < 10; i++) {

        fetch(API_RANDOM_EMAIL) // vado a cercare le API e restituisco una promessa (quest e'l promessa)
            .then((risposta) => { // QUANDO la promessa si avvera, ALLORA
                return risposta.json() // mi salva e restituisce il valore risposta in formato json per la prossima promessa (appliciamo il metodo json)
            })
            .then((jsonData) => { // QUANDO anche la promessa di trasformazione del dato sara mantenuta, ALLORA
                const randomEmail = jsonData.response;
                ulEmail.innerHTML += `<li>${randomEmail}</>`; // stampo in inner html un <li> con la mail
            });

    };
};

// init la mia funzione event handler

function btnClickRefreshHandler() { 
    console.log('click!!!!!'); // faccio vedere che i click sono registrati
    ulEmail.innerHTML = ''; // [piallo inner html
    //provvedo con nuovo pull di email
    pullTenEmails();
};

/*===========================================================*/

// invocazione funzione per pullare 10 random mails

pullTenEmails();

// aggiungo adventlistener al btn

btnRefresh.addEventListener('click', btnClickRefreshHandler); 




// async await   approfondire 









