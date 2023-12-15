//Numeros tambien se puede usar notacion cientifica
const Pi = 3.1416;
const numeroGrande = 1e6;

//Strings son cadenas de textos
const  nombre= "Santiago";
const Apellido = "Aristizabal";

//Se pueden concatenar de la siguiente manera
console.log("Hola me llamo" + nombre + "" + Apellido)

console.log(`Hola me llamo ${nombre} ${Apellido}`)

//Existen metodos para poder hacer el manejo de las strings

console.log(nombre.length) // 8
console.log(nombre.toUpperCase()) // SANTIAGO
console.log(nombre.toLowerCase()) // santiago
console.log(nombre.substring(0, 5)) // Santi

//Objetos permiten almacenar un conjunto de pares clave-valor

const persona = {
    nombre:"Laura",
    apellido:"PT",
    edad:22,
        Gustos : {
            color:"rosado",
            serie:"friends",
            animales:"perros",
        }
};

//Para acceder las propiedades de un objeto 
console.log(persona.nombre) // Laura
console.log(persona.Gustos.color) // rosado

//Booleanos representan un valor si es verdadero o falso

let cursoCompletado = true
let cursoFinish = false

// typeof ayuda a poder conocer el tipo de los datos

typeof 30 //number
typeof true //boolean

