var estudiantes = [
  {
    nombre: "Elian",
    edad: 21,
    semestre: 8,
    carrera: "Sistemas",
  },
  {
    nombre: "Marcos",
    edad: 30,
    semestre: 4,
    carrera: "Sistemas",
  },
  {
    nombre: "Pedro",
    edad: 32,
    semestre: 1,
    carrera: "Sistemas",
  },
  {
    nombre: "Ramón",
    edad: 24,
    semestre: 7,
    carrera: "Sistemas",
  },
];

// for (var estudiante of estudiantes) {
//   console.log(estudiante.nombre);
// }

var persona = {
  nombre: "Martha",
  estudiante: {
    carrera: "Administración",
    semestre: 6,
    promedio: 8.5,
    materias: [
      "Cálculo I",
      "Administración de empresas",
      "Gesión de proyectos",
    ],
  },
  edad: 23,
};

var materias = persona.estudiante.materias;
for (var materia of materias) {
  console.log(materia);
}

var nuevoArray = materias.map((materia) => materia);

console.log(nuevoArray);
nuevoArray.push("Algebra");

console.log(nuevoArray);
console.log(materias);
