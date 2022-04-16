//Arrays

//a. Dado el siguiente array:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre',
//'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11(utilizar console.log).

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre',
'Octubre', 'Noviembre', 'Diciembre']; 
console.log('Solution03_a:', months[4], months[10]);

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var monthsToAlphaOrder = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre',
'Octubre', 'Noviembre', 'Diciembre']; 
monthsToAlphaOrder.sort();
console.log('Solution03_b:', monthsToAlphaOrder);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

var monthsToAdd = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre',
'Octubre', 'Noviembre', 'Diciembre']; 
monthsToAdd.push('post Diciembre');
monthsToAdd.unshift('pre Enero');
console.log('Solution03_c:', monthsToAdd);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

var monthsToEliminate = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre',
'Octubre', 'Noviembre', 'Diciembre']; 
monthsToEliminate.pop();
monthsToEliminate.shift();
console.log('Solution04_d:', monthsToEliminate);

//e. Invertir el orden del array (utilizar reverse).

var monthsToReverse = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre',
'Octubre', 'Noviembre', 'Diciembre']; 
monthsToReverse.reverse()
console.log('Solution04_e', monthsToReverse);

//f.Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var monthsToJoin = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre',
'Octubre', 'Noviembre', 'Diciembre']; 
var monthsJoined = monthsToJoin.join('-');
console.log('Solution04_f:', monthsJoined);

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var monthsToSlice = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];
var monthsSliced = monthsToSlice.slice(4, 11)
console.log('Solution04_g:', monthsSliced);
