/**
 * Objetos, se inician con { }, y para javaScript son
 * objetos
 * Sintaxis: key, value
 */

var objeto = {};
console.log(objeto);

var oscar = {
  nombre: "Oscar Martínez",
  edad: 31,
  genero: "Masculino",
  carrera: "Sistemas",
  semestre: "Octavo",
};

//Concatenación básica
console.log(
  "Hola " + oscar.nombre + " bienvenido al curso del semestre " + oscar.semestre
);

//Template string
console.log(
  `
  Hola ${oscar.nombre}, 
  bienvenido al curso del semestre ${oscar.semestre},
  espero te lo pases genial aprendiendo a programar.
  `
);
