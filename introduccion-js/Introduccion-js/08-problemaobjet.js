var account = {
    pin: 1234,
    amount: 0,
    owner: 'Patricio Estrella',
    deposits: [],
};

console.log[account]
//Hacer depositos
account.deposits.push(100)
account.deposits.push(400)
account.deposits.push(2000)
//Retiros
account.deposits.push(-300)
account.deposits.push(-1000)
//conocer el saldo de account
var copiaDepositos = account.deposits.map(money => money)
/**
 * La funcion callbackfn acepta hasta 3 parametros 
 * el metodo map llama a la funcion callback una vez por cada elemento del arreglo. 
 * En este caso el arreglo es deposits
 */
/**
 * 
 */
console.log(account.deposits)
console.log(account.deposits.map(money => money))
var total = copiaDepositos.reduce((suma, money) => suma + money)
console.log(`El amigo tiene : $${total} Pesos en su cuenta de banco`)

const per = new per();
console.log(per)
/**
 * Primero se ejecuta una funcion y despues regresa un valor (callback)
 */
/**
 * Function saludar(){
 *  console.log('hola');
 * } 
 * */
/**
 * Investigar los tipos de variable en javascript
 * var : Es el tipo de variable general ()
 * tipo de datos basicos:
 * number
 * string
 * boolean
 * undefined
 * null
 * NaN
 * 
 * /No se necesita definir el tipo de dato en comparacion: El valor le asigna el tipo de variable
 * ¿Que significa tipado fuerte?: 
 * ejemplo:
 * Int edad; 
 * Significa que no le puedes poner un tipo de dato diferente al espicificado
 */
/**
 * otro tipo de forma de declarar varibles son
 * (IMPORTANTE)INVESTIGAR
 * const y let
 * const: (CONSTANTE: Variable que no muta de valor nativo- por ejemplo de string a numero)
 * Que es la mutacion en los objetos: Consta de cambiar el objeto de forma interna, por 
 * ejemplo: objeto con nombre, se le cambia el nombre dentro del objeto.
 * el valor de const sera constante durante toda la corrida del programa.
 * (Solo se pueden cambiar los objetos)
 * ¿De que sirve declarar un objeto const, si de cualquier forma se puede modificar?:
 * Const obj = await fecth('url');
 * 
 * 
 * ¿Cual es la diferencia entre let y var?
 * 
 */