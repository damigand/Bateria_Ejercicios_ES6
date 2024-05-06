// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
function findArrayIndex(array, text) {
   return array.indexOf(text);
}

//Ej array:
const mainCharacters = ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan'];

console.log(`index: ${findArrayIndex(mainCharacters, 'Leia')}`);
console.log(`index: ${findArrayIndex(mainCharacters, 'Rey')}`);
console.log(`index: ${findArrayIndex(mainCharacters, 'Chewbacca')}`);

const saludos = ['Hola', 'Buenas tardes', 'Buenos días', 'Hola buenas'];

console.log(`index: ${findArrayIndex(saludos, 'Buenos días')}`);
console.log(`index: ${findArrayIndex(saludos, 'Hola buenas')}`);
console.log(`index: ${findArrayIndex(saludos, 'Hola')}`);
