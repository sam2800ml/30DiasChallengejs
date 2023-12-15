//Los operadores son elementos de lenguaje que permiten realizar calculos y comparaciones

// Suma
console.log(1 + 2); // 3

// Resta
console.log(5 - 2); // 3

// Multiplicación
console.log(3 * 4); // 12

// División
console.log(10 / 2); // 5

// Módulo (devuelve el resto de una división)
console.log(10 % 3); // 1

//Operadores de comparacion, permiten comparar valores y nos devuelven true o false segun el resultado
console.log( 1 < 2 ); //true
console.log(1 > 2); // false

// diferencia entre "==" y  "===" el primero realiza comparacion de valor y el segundo tambien pero verifica el tipo de dato
console.log(1 == "1") // true
console.log(1 === "1") // false

//Operadores Logicos permiten realizar operaciones logicas AND(&&) OR(||) NOT(!)
let edad = 25;
let mayorEdad = edad >= 18;
// si ambos lados son true la funcion devuelve un true de resto es false
if(edad >= 18 && mayorEdad) {
    console.log("Es Mayor de Edad");
}else{
    console.log("No es Mayor de Edad");
}

// con el uso del OR si al menos una de las dos es verdadera devuelve un true
let edad2 = 25;
let tieneIdentificacion = true;

if (edad >= 18 || tieneIdentificacion) {
  console.log("Puedes entrar al bar");
} else {
  console.log("No tienes la edad o la identificación suficiente para entrar al bar");

}

// NOT es  operador logico que vuelve la expresion de true a false y de false a true
let esFinDeSemana = true;

if (!esFinDeSemana) {
  console.log("A trabajar");
} else {
  console.log("A disfrutar del fin de semana");
}