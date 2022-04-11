/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione 
(benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const cars = [{
        marca: "marca 1",
        modello: "modello 1",
        alimentazione: "benzina"
    },
    {
        marca: "marca 2",
        modello: "modello 2",
        alimentazione: "benzina"
    },
    {
        marca: "marca 3",
        modello: "modello 3",
        alimentazione: "benzina"
    },
    {
        marca: "marca 4",
        modello: "modello 4",
        alimentazione: "diesel"
    },
    {
        marca: "marca 5",
        modello: "modello 5",
        alimentazione: "diesel"
    },
    {
        marca: "marca 6",
        modello: "modello 6",
        alimentazione: "gpl"
    },
    {
        marca: "marca 7",
        modello: "modello 7",
        alimentazione: "gpl"
    },
    {
        marca: "marca 8",
        modello: "modello 8",
        alimentazione: "elettrico"
    },
    {
        marca: "marca 9",
        modello: "modello 9",
        alimentazione: "elettrico"
    },
    {
        marca: "marca 10",
        modello: "modello 10",
        alimentazione: "metano"
    },

];

console.log(cars);

const auto_benzina = [];
const auto_diesel = [];
const auto_others = [];

cars.forEach((car) => {

    switch (car.alimentazione) {
        case "benzina":
            auto_benzina.push(car);
            break;

        case "diesel":
            auto_diesel.push(car);
            break;

        default:
            auto_others.push(car);
            break;
    }

});

console.log(auto_benzina);
console.log(auto_diesel);
console.log(auto_others);