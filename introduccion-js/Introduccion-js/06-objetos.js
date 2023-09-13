/**
 * Objetos: Se inicializan con llaves [], y son considerados como objetos
 *Sintaxis: key, value
 */
var objecto = {}
console.log(objecto)

var jorge = {
    nombre: 'JorgeAlberto',
    edad: 22,
    semestre: "8vo",
    materia: "Desarrollo Web I",
    carrera: "Sistemas"
}
//template String
console.log(`hola ${jorge.nombre} bienvenido al curso de programación ${jorge.materia} del semestre ${jorge.semestre}`)
