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

    var nome = (prompt('Inserisci il tuo nome:'));

    while (!isNaN(nome)) {
    nome = prompt('Inserisci correttamente il nome:') 
    }
    console.log(nome);

    var cognome = (prompt('Inserisci il tuo cognome:'));

    while (!isNaN(cognome)) {
    cognome = prompt('Inserisci correttamente il cognome:') 
    }
    console.log(cognome);

    var eta = parseInt(prompt('Inserisci la tua età:'));

    while (isNaN(eta)) {
    eta = prompt('Il dato inserito non è un numero. Riprova:') 
    }
    console.log(eta);

    var nuoviDati = {
        'nome': nome,
        'cognome': cognome,
        'eta': eta
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






