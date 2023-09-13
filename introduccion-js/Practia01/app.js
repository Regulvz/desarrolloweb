const subtitu = document.querySelector('#subtitle');
const cursos = document.querySelector('.cursos');
const parrafo = document.createElement('p');
const boton = document.createElement('button');
parrafo.innerText= 'Manga dolor fugiat comodo laboeris ed sint dollor ullamaco occate.'
document.body.appendChild(parrafo);
function numerAzar (){
    parrafo.innerText = Math.floor(Math.random() * 100);
    document.body.appendChild(parrafo);
}
subtitu.innerText = 'Nuevo titulo'
parrafo.innerText = numerAzar();
document.body.appendChild(parrafo)
boton.innerText= ('Random')
boton.addEventListener('click', numerAzar)
document.body.appendChild(boton)