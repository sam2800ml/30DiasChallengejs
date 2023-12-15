/* En este desafío recibirás una serie de tipos de mascotas junto con su edad.

Dependiendo de estos 2 factores tendrás que construir la función llamada getPetExerciseInfo la cual retornará una cadena de texto 
con la información necesaria acerca de cuanto ejercicio necesita hacer cada tipo de mascota.

La función recibirá las siguientes mascotas:

perro
gato
ave
En caso de pasar una mascota la cual no sea de la lista deberá retornar "Tipo de mascota inválida"

Para cada tipo de mascota, la función retornará diferente información basada en la edad.

Perros
Si la edad es menor al año, deberá retornar "Los cachorros necesitan pequeñas y frecuentes sesiones de juego"
Si la edad es entre 1 y 7 años, deberá retornar "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
Si la edad es mayor a 7 años, deberá retornar "Los perros viejos necesitan caminatas más cortas"
gatos
Si la edad es menor al año, deberá retornar "Los gatitos necesitan frecuentes sesiones de juego"
Si la edad es entre 1 y 7 años, deberá retornar "Los gatos a esta edad necesitan jugar diariamente"
Si la edad es mayor a 7 años, deberá retornar "Los gatos viejos necesitan sesiones de juego más cortas"
aves
Si la edad es menor al año, deberá retornar "Las aves jóvenes necesitan mucho espacio para volar"
Si la edad es entre 1 y 7 años, deberá retornar "Las aves necesitan jugar diariamente y un lugar para volar"
Si la edad es mayor a 7 años, deberá retornar "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"*/

function getPetExerciseInfo(type, age) {
    if (type === "perro") {
        if (age < 1) {
            return console.log("Los cachorros necesitan pequeñas y frecuentes sesiones de juego")
        }else if ( age >= 1 && age <= 7){
            return console.log("Los perros a esta edad necesitan caminatas diarias y sesiones de juego")
        }else {
           return console.log("Los perros viejos necesitan caminatas más cortas")
        }
    } else if(type === "gato") {
        if (age < 1) {
            return console.log("Los gatitos necesitan frecuentes sesiones de juego")
        }else if ( age >= 1 && age <= 7){
            return console.log("Los gatos a esta edad necesitan jugar diariamente")
        }else {
            return console.log("Los gatos viejos necesitan sesiones de juego más cortas")
        }

    }else if(type === "aves"){
        if (age < 1) {
            return console.log("Las aves jóvenes necesitan mucho espacio para volar")
        }else if ( age >= 1 && age <= 7){
            return console.log("Las aves necesitan jugar diariamente y un lugar para volar")
        }else {
            return console.log("Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar")
        }
    }else {
        return console.log("Tipo de mascota invalida")
    }
  }
  
getPetExerciseInfo("perro",3)
getPetExerciseInfo("gato", 8)
getPetExerciseInfo("Mamut", 25)