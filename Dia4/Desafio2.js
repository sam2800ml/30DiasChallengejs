/* 
En este desafío, deberás calcular el promedio general de una clase, 
así como el promedio individual de cada estudiante.

Para ello, se te proporcionará un array de objetos, 
cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

name: El nombre del estudiante
grades: Las notas de cada materia del estudiante
A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad 
classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.
*/


function getStudentAverage(students) {
    let total = 0;
    const curso = {   // Donde se almacenara el resultado
        promedio:0,
        estudiantes:[],
    }
    for (const estudiantes of students ){   //Itera entre cada uno en el arreglo
        let suma = estudiantes.grades.reduce((acumulador,valor) => acumulador+valor)  //Se obtiene la suma total del grado
        totalEstudiante = (suma/estudiantes.grades.length).toFixed(2) // Se obtiene el promedio de cada estudiante
        const Estudiantes= {  //Donde se almacenara el nombre y el promedio
            nombre : estudiantes.name,   //se almacena el nombre
            promedio : Number(totalEstudiante)  //se almacena el promedio 
        }
        curso.estudiantes.push(Estudiantes) // se hace el push mandando el lnombre y los estudiantes a la lista que creamos
        total += Number(totalEstudiante) // almacenamos la suma total de todos los estudiantes
    }
        curso.promedio = Number(total/students.length).toFixed(2) // se calcula el promedio global
        return curso
  }

console.log(getStudentAverage([
    {
      name: "Pedro",
      grades: [90, 87, 88, 90],
    },
    {
      name: "Jose",
      grades: [99, 71, 88, 96],
    },
    {
      name: "Maria",
      grades: [92, 81, 80, 96],
    },
  ]))