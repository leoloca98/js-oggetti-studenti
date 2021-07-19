/*

Descrizione:
ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.F

*/

// #ES 1
//Definizione form
var studentDisplay = document.getElementById("student");
//creazione oggetto

var student = {
    nome: "Leonardo",
    cognome: "Locatelli",
    eta: 23,
}
for (var key in student) {
    var x = document.createElement("li");
    var y = document.createTextNode(student[key]);
    x.appendChild(y);
    studentDisplay.appendChild(x);
}

