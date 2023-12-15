//Existen 3  maneras de poder declarar variables las cuales son: var, let y const 

// Variables que pueden cambiar son 
var edad = 30
let edad = 23

// Variables que no pueden cambiar
const edad = 24

// Las variables se pueden declarar excepto cosnt
var animales
let perros

// Inicializacion
animales = "Perros"
perros = "Tobby"

//Funciones 
//funcion que se va a reallizar
function Nombre(params) {
    //Codigo a realizar en la funcion
}
//Llamar a realizar la funcion
Nombre(params);

//Tambien puede devolver valores

function suma(a,b) {
    return (a + b)/a*b
}
let resultado = suma(2,4)
console.log(resultado)

//IIFE funcion que se autoejecuta despues de ser definida 

(function (params) {
    console.log("Hola mundo")  
})();

//Funcion expresion, se define como una expresion

let saludar = function name(params) {
    console.log("Hola te estoy saludando")
};
saludar();

//Arrow function es una forma concisa de poder escribir funciones en una sola linea

let saluda = () => console.log("Hola buenos dias");
saluda();

// Corchetes o llaves se utilizan para encapsular bloques de codigo
const carro = {
    color:"rojo",
    llantas:2,
    marca:"hiuyker"
}