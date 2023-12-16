//Arrays son un tipo de objeto que permite almacenar una coleccion de valores

let miArray = [32,42,52];
console.log(miArray)
miArray.push(62) //permite agragar un nuevo objeto
console.log(miArray)
miArray.pop()
console.log(miArray) // elimina el ultimo objeto del array

// Map permite aplicar aplicar una operacion a cada elemento del array

const numeros = [1,2,3,4,5,6];
console.log(numeros)
const cuadrado = numeros.map(function(numeros) {
    return numeros * 2;
})
console.log(cuadrado)

//reduce 

const sume = numeros.reduce(function(acumulador,numero){
    return acumulador + numero;
},0);
console.log(sume)


const array = [{
    name: "Perro",
    age : 3,
}, {
    name:"Michi",
    age: 8
}]