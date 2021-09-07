// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    "nome": ['Andrea'],
    "cognome": ['Rossi'],
    "eta": 26
};


// console.log(studenti['nome']);
// console.log(studenti['cognome']);
// console.log(studenti['eta']);

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// for (var key in studente){
//     console.log(studente[key]);
// }

// Creare un array di oggetti di studenti.
var studenti = 
    [
        {
            "nome": 'Giulia',
            "cognome": 'Verdi',
            "eta": 24,
        },
        {
            "nome": 'Serena',
            "cognome": 'Neri',
            "eta": 22,
        },
        {
            "nome": 'Francesca',
            "cognome": 'Bianchi',
            "eta": 28
        }
    ]

// Dare la possibilità all’utente, attraverso 3 prompt(), 
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

    var nuoviDati = {
        'nome': prompt("Inserisci un nome"),
        'cognome': prompt("Inserisci un cognome"),
        'eta': parseInt(prompt("Inserisci l'età"))
    }; 
    studenti.push(nuoviDati);


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
document.getElementById("listaStudenti");


for(var i = 0; i < studenti.length; i++){

    listaStudenti.innerHTML += `<li>
                                <h3>Nome: ${studenti[i]['nome']}</h3>
                                <h3>Cognome: ${studenti[i]['cognome']}</h3>
                                </li>`;
    console.log(studenti[i]);
}






