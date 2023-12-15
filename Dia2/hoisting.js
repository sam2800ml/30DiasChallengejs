//Hoisting es un comportamiento en que las varibales y funciones son movidas al comienzo, 
//esto hace que las funciones sean utilizadas antes de haber sido declaradas

console.log(x);
var x = 10;

// javascript lo entiende asi 

var x; //undefined
console.log(x); 
x=5;

//coercion es el proceso donde intenta convertir automaticamente un valor de un tipo a otro
console.log(1 == "1") //true