const parrafo = document.createElement('p');
const boton = document.createElement('button');

function numeroAzar() {
  parrafo.innerText = Math.floor(Math.random() * 100);
  document.body.appendChild(parrafo);
}

boton.innerText = 'Random';
boton.addEventListener('click', numeroAzar);
document.body.appendChild(boton);
