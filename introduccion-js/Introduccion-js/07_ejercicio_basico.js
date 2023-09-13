//Crear un array con objetos en su interior y que se desplieguen en pantalla

var estudiantes = [
    {
        nombre: 'Brandon',
        carrera: 'Sistemas',
        semestre: '8',
        edad: 21
    },
    {
        nombre: 'Oscar',
        carrera: 'Sistemas',
        semestre: '8',
        edad: 23
    },
    {
        nombre: 'Brayan',
        carrera: 'Sistemas',
        semestre: '8',
        edad: 31
    },
    {
        nombre: 'Pedro',
        carrera: 'Sistemas',
        semestre: '8',
        edad: 24
    },
    {
        nombre: 'jorge',
        carrera: 'Sistemas',
        semestre: '8',
        edad: 25
    },
]
/*
console.log(estudiantes.nombre);*/
/*
 for (var estudiante of estudiantes){
    console.log(estudiante.nombre)
}

for (var estudiante in estudiantes){
    console.log(estudiantes[estudiante])
}*/

var persona = {
        nombre:'Juan',
        estudiante:{
            carrera:'Administracion',
            semestre: 6,
            promedio: 8.5,
            materias: [
                'calculo 1',
                'Administracion de empresas',
                'gestion de proyectos',
            ],
        },
        carrera:'Sistemas',
    }
var materias = persona.estudiante.materias
//console.log(persona.nombre)
/*
for (var materia in materias)
{
    console.log(`Materia de : ${materias[materia]}`)
}*/

var nuevoArray = materias.map((materia) => materia)

