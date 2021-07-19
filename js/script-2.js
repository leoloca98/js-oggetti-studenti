/*

ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo
oggetto studente inserendo nell’ordine: nome, cognome e età.

*/
//FORM
studentiDisplay = document.getElementById("student");
var x;
var y;

//*Creazione di array di oggenti di studenti
var studenti = [
    {
        nome: "Leonardo",
        cognome: "Locatelli",
        eta: "23",
    },
    {
        nome: "Pasquale",
        cognome: "Raso",
        eta: "38",
    },
    {
        nome: "Giorgio",
        cognome: "Andrei",
        eta: "19",
    }
]

//*Stampare ogni proprietà dei singoli studenti
for (i = 0; i < studenti.length; i++) {
    console.log(studenti[i]);
}

var userNameChoice = prompt("Inserire nome:");
var userLastnameChoice = prompt("Inserire cognome:");
var userAgeChoice = prompt("Inserire età:");

var newStudent = {
    nome: userNameChoice,
    cognome: userLastnameChoice,
    eta: userAgeChoice,
}

studenti.push(newStudent);
console.table(studenti);


