//number
//string
//boolean
//arrays
//objetos

// const frutas = ["🍎", "🍒", "🍉", "🍇", "🥝"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//}

// for (let fruta in arr) {
//   console.log(arr[fruta]);
// }

// for (let fruta of arr) {
//   console.log(fruta);
// }

// let nuevoArr = frutas.map((fruta) => {
//   return fruta;
// });

// nuevoArr.push("🥦");

// console.log(frutas);
// console.log(nuevoArr);

const calif = [10, 8, 6, 4, 7];

const edades = [];

for (let i = 0; i < 1000; i++) {
  const numeroAleatorio = Math.floor(Math.random() * (65 - 10 + 1)) + 10;
  edades.push(numeroAleatorio);
}

console.log(edades);

const pediatricos = edades.filter((edad) => edad < 18);
console.log(pediatricos);
