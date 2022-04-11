/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array 
in minuscolo e con l’iniziale maiuscola. */

const test = ["firsttest", "SecondTest", "THIRDTEST"];

function firstUpperCase(input_string) {

    let lower_string = input_string.toLowerCase();

    let final_string = lower_string.replace(lower_string[0], lower_string[0].toUpperCase());

    return final_string;

}

const modifiedArray = [];

test.forEach((element) => {

    let modifiedElement = firstUpperCase(element);

    modifiedArray.push(modifiedElement);

})

console.log(modifiedArray);