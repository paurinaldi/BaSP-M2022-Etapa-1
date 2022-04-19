//Arrays

//a. Dado el siguiente array:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre',
//'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11(utilizar console.log).

var months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September',
'October', 'November', 'December']; 
console.log('Solution03_a:', months[4], months[10]);

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var monthsToAlphaOrder = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September',
'October', 'November', 'December']; 
monthsToAlphaOrder.sort();
console.log('Solution03_b:', monthsToAlphaOrder);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

var monthsToAdd = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September',
'October', 'November', 'December']; 
monthsToAdd.push('post December');
monthsToAdd.unshift('pre January');
console.log('Solution03_c:', monthsToAdd);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

var monthsToEliminate = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September',
'October', 'November', 'December']; 
monthsToEliminate.pop();
monthsToEliminate.shift();
console.log('Solution04_d:', monthsToEliminate);

//e. Invertir el orden del array (utilizar reverse).

var monthsToReverse = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September',
'October', 'November', 'December']; 
monthsToReverse.reverse()
console.log('Solution04_e:', monthsToReverse);

//f.Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var monthsToJoin = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September',
'October', 'November', 'December']; 
var monthsJoined = monthsToJoin.join('-');
console.log('Solution04_f:', monthsJoined);

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var monthsToSlice = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September',
'October', 'November', 'December'];
var monthsSliced = monthsToSlice.slice(4, 11)
console.log('Solution04_g:', monthsSliced);
