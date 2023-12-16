// los objetos son un tipo de dato que permite almacenar la coleccion de pares claves

const miObjeto = {
	clave1: valor1, 
	clave2: valor2, 
	clave3: valor3
};
const curso = {
	nombre: "30 días de JS", 
	duración: "20 horas", 
	clases: 100,
	detalles: {
		tecnologias: ["js", "node", "web browser"],
		calificacion: 5,	
	},
	comentarios: ["¡Excelente curso!", "Javscript no es lo mismo que Java", "hola"]
};
console.log(curso.nombre); // "30 días de JS"

let carro = {
    marca: "Toyota",
    encender: function() {
      console.log("El carro ha sido encendido");
    }
  };
carro.encender(); // "El carro ha sido encendido"