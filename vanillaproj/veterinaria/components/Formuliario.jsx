import CustomInput from "./CustomInput"

export default function Formulario(){
    const form = document.createElement('form')
    const boton = document.createElement('button')
    const inputs=[
        {
            idlabel:'nombre', labelTitle:'Nombre Paciente', placeholderlabel:'Nombre Paciente'
        },
        {
            idlabel:'propietario', labelTitle:'Nombre Propietario', placeholderlabel:'Nombre Propietario'
        },
        {
            idlabel:'telefono', labelTitle:'Telefono', placeholderlabel:'Telefono del propietario'
        },
        {
            idlabel:'sintomas', labelTitle:'Sintomas', placeholderlabel:'Sintomas'
        }
    ];
    inputs.map((input) => { form.appendChild(CustomInput(input)) } )
    /*
    Se hace un mapeo para iterar todos los objetos dentro del array
    despues podemos ponerle input adentro de appendchild pero te regresara los objetos
    y nosotros necesitamos el componente, entonces por eso se utiliza el componente y le mandamos los 
    objetos uno por uno.
    */


    return form
}