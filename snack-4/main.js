/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

const people = [
    { name: "Gianni", surname: "Rossi", age: 18 },
    { name: "Luca", surname: "Verdi", age: 45 },
    { name: "Mario", surname: "Bianchi", age: 70 },
    { name: "Luisa", surname: "Negri", age: 11 },
    { name: "Giulia", surname: "Bruni", age: 90 },
]

const canDrive = [];

people.forEach(person => {

    let canDriveElement;

    if (person.age < 18) {

        canDriveElement = `${person.name} ${person.surname} NON può guidare`;

    } else {

        canDriveElement = `${person.name} ${person.surname} può guidare`;

    }

    canDrive.push(canDriveElement);

})

console.log(canDrive);