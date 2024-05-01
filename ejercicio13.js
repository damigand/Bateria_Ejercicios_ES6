// Usando la función anterior beneficiate de poder conocer el indice del array
// para crear una función llamada removeItem que pasandole un array y un texto
// como parametros (los mismos parametros que en el anterior ejercicio) llame a
// la función anteriormente creada findArrayIndex y obten el indice para
// posteriormente usar la función de javascript .splice() para eliminar el
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan
// correctamente.

//Función del ejercicio anterior.
function findArrayIndex(array, text) {
   for (const a of array) {
      if (a === text) {
         return array.indexOf(a);
      }
   }
}

function removeItem(array, text) {
   array.splice(findArrayIndex(array, text), 1);
   return array;
}

const mainCharacters = ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan'];

console.log(removeItem(mainCharacters, 'Luke'));
console.log(removeItem(mainCharacters, 'Han Solo'));
console.log(removeItem(mainCharacters, 'Anakin'));
