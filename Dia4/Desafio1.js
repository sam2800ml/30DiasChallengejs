/* 
En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.
Recibirás un array de objetos que incluirán las siguientes propiedades:

name: nombre del gatito.
followers: un array de números, donde cada uno representa los seguidores de cada red social.
Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. 
Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, 
manteniendo el orden en el que aparecen en el array de entrada.
*/

function findFamousCats(array) {
    let nombres = [];
    let maxSeguidores = 0; // Initialize maxSeguidores to a large value

    array.forEach(function (element) {
        let nuevosSeguidores = element.followers.reduce(function (a, b) {
            return a + b;
        }, 0);

        if (nuevosSeguidores > maxSeguidores) {
            maxSeguidores = nuevosSeguidores;
            nombres = [element.name]; // Reset nombres array with a new name
        } else if (nuevosSeguidores === maxSeguidores) {
            nombres.push(element.name);
        }
    }); return nombres;
}






const resultado = findFamousCats([
    {
        name: "Luna",
        followers: [500, 200, 300]
    },
    {
        name: "Michi",
        followers: [100, 300]
    },
])
console.log(findFamousCats([
    {
      name: "Mimi",
      followers: [320, 120, 70]
    },
    {
      name: "Milo",
      followers: [400, 300, 100, 200]
    },
    {
      name: "Gizmo",
      followers: [250, 750]
    }
  ]))

