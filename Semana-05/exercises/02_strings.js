//Strings

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
//(utilizar toUpperCase).

var notUpperCase = 'variable with uppercase string';
var withUpperCase = notUpperCase.toUpperCase();
console.log('Solution02_a:', withUpperCase);

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
//caracteres guardando el resultado en una nueva variable (utilizar substring).


var firstMainString = 'Hello World';
var firstSubString = firstMainString.substring(0, 5);
console.log('Solution02_b:', firstSubString);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
//caracteres guardando el resultado en una nueva variable (utilizar substring).

var secondMainString = 'Hello once again';
var secondSubString = secondMainString.substring(13);
console.log('Solution02_c:', secondSubString);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
//mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
//(utilizar substring, toUpperCase, toLowerCase y el operador +).

var unformattedString = 'goodbye now';
var formattedString = unformattedString.substring(0, 1).toUpperCase() + unformattedString.substring(1).toLowerCase();
console.log('Solution02_d:', formattedString);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var stringWithBlanks = 'goodbye once again';
var firstBlankSpace = stringWithBlanks.indexOf(' ');
console.log('Solution02_e:', firstBlankSpace);

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
// palabras en mayúscula y las demás letras en minúscula 
//(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var longWords = 'appreciate strawberry'
var spaceIndex = longWords.indexOf(' ')
var longWordsFormatted = (longWords.substring(0,1).toUpperCase() + longWords.substring(1, 10).toLowerCase()) + 
longWords.substring(10,11) + (longWords.substring(11, 12).toUpperCase() + longWords.substring(12).toLowerCase());
console.log('Solution02_f:', longWordsFormatted);