// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studenti = {
    "nome": ['Andrea'],
    "cognome": ['Rossi'],
    "eta": ['26'],
};


// console.log(studenti['nome']);
// console.log(studenti['cognome']);
// console.log(studenti['eta']);

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studenti){
    console.log(studenti[key]);
}


// Creare un array di oggetti di studenti.


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.