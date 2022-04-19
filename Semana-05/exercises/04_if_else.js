//If Else

//a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual
// que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var randomNumber = Math.random();
if (randomNumber>=0.5){
  alert('Greater than 0,5');
} else {
  alert('Lower than 0,5');
}
console.log('Solution04_a:', randomNumber)


//b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// “Bebe” si la edad es menor a 2 años;
// “Niño” si la edad es entre 2 y 12 años;
// “Adolescente” entre 13 y 19 años;
// “Joven” entre 20 y 30 años;
// “Adulto” entre 31 y 60 años;
// “Adulto mayor” entre 61 y 75 años;
// “Anciano” si es mayor a 75 años.

var age = Math.round(Math.random()*101);
if (age<2){
  alert('Baby');
} else if (age>=2 && age<=12){
  alert('Child');
} else if (age>=13 && age<=19){
  alert('Teenager');
} else if (age>=20 && age<=30){
  alert('Young Adult');
} else if (age>=31 && age<=60){
  alert('Adult');
} else if (age>=61 && age<=75){
  alert('Older Adult');
} else {
  alert('Elder');
}

console.log('Solution04_b:', age);