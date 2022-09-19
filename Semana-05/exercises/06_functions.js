// Funciones

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
// resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function sumSimple(num1, num2){
  return num1 + num2;
}
var resultA = sumSimple(3, 2);
console.log('Solution06_a:', resultA);

//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
//mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function sumWithNumberValidated(num1, num2){
  if(typeof num1 || typeof num2 != 'number'){
    alert('Error: At least one of the parameters is wrong.');
    return NaN
  } else {
  return num1 + num2;
  }
}
console.log('Solution06_b:', sumWithNumberValidated(4,'2.3'));

//c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número
//entero.

function validateInteger(number){
  return Number.isInteger(number)
}
console.log('Solution06_c:', validateInteger(1.5))

//d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que
// haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function sumWithIntegerValidated (num1, num2){
  if((typeof num1 || typeof num2) != 'number'){
    alert('Error: At least one of the parameters is wrong.');
    return NaN;
  } else if(!validateInteger(num1)||!validateInteger(num2)){
    alert('Numbers need to be integers');
    return Math.round(num1 + num2);
  } else {
    return (num1 + num2);
  } 
}
console.log('Solution06_d:', sumWithIntegerValidated(3.3, 6));

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
// que todo siga funcionando igual.

function validtation (num1, num2) {
  if((typeof num1 || typeof num2) != 'number'){
    alert('Error: At least one of the parameters is wrong.');
    return NaN;
  } else if(!validateInteger(num1)||!validateInteger(num2)){
    alert('Numbers need to be integers');
    return Math.round(num1 + num2);
  }
}
// function sumToValidate (num1, num2){
//   if (Number.isInteger(num1 && num2)){
//     return num1+num2;
//   } else {
//     return validtation(num1, num2);
//   }
// }
function sumToValidate(num1, num2){
  if(validtation(num1, num2) != (NaN || Math.round(num1 + num2))){
    return (num1 + num2)
  } else {
    return validtation(num1, num2)
  }
}
console.log('Solution06_e:', sumToValidate(1.6, 4));