//ciclos sirevn para repetir un bloque de codigo varias veces dependiendo de la condicion especifica 

//ciclo for 
for (inicializacion; condicion; actualizacion) {
    //codigo a ejecutar
}

for (let i= 1; i <= 10; i++){
    console.log(i)
}

// for-in y for-of

const user = {
	name: "Pepito",
  age: 20,
  role: "JavaScript developer"
}
// recorre las propiedades de un objeto
for (const prop in user) {
	console.log(user[prop])
}

// "Pepito"
// 20
// "JavaScript developer"

const technologies = ["js", "html", "node", "php"]
// recorre las propiedades de una coleccion
for (const element of technologies) {
  console.log(element)
}

// "js"
// "html"
// "node"
// "php"

//while hace que se repita un codigo mientras que se cumple una condicion

while (condición) {
    // código a ejecutar
  }

  let i = 1;
while (i <= 10){
  console.log(i);
  i++;
}