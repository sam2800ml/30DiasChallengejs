//Existen 2 tipos de scope donde hay uno que tiene un alcance global y el otro local que solo funciona dentro de las funciones donde se llamen


const edad = 24;

function miFuncion() {
    var x = 10;
    console.log(x);
    console.log(edad)
}
miFuncion()
console.log(edad)

console.log(x)// genera un error ya que es un scope local donde solo funciona dentro de la funcion donde se llama