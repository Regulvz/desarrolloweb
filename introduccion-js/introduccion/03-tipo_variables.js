/**
 * Tipos de variables
 */

// number
var entero = 12; // 32-bit -2,147,483,648 al 2,147,483,648
var long = 919293949593; // 64-bit  -9,223,372,036,854,775,808
var flotante = 5.3; // 32 bit
var double = 2343254634323243.45; // 64 bit

console.log(typeof entero);
console.log(typeof long);
console.log(typeof flotante);
console.log(typeof double);

// boolean
var boleano1 = true;
var boleano2 = false;

console.log(typeof boleano1, typeof boleano2);

//NaN
var nan_ejemplo = 0 / 0;
console.log(nan_ejemplo);

var not_a_number = NaN;
console.log(typeof not_a_number);

// undefined
var notDefined;
console.log(typeof notDefined);

// string
var string1 = "1";
var string2 = "2";

console.log(typeof string1);
console.log(typeof string2);
console.log(string1 + string2);
