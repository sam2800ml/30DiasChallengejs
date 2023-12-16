/*
En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, 
la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima,
 debes devolver el primer palíndromo encontrado en la lista.
*/

function firstLargestPalindrome(words) {
    let largest = null;
    words.forEach(word => {
        let wordReverse = word.split("").reverse().join("").toLowerCase(); // la palabra la separa despues le da la vuelta la junta y la coloca en lowercase

        if (word.toLowerCase() === wordReverse) { // la condicion verifica si el wordreverse es igual a la palabra inicial
            if (largest == null || word.length > largest.length) { // si es verdadero, la palabra se alacena en largest
                largest = word;
            }
        }
    });

    return largest;
}
