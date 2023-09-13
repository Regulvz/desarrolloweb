const botonCambio = document.createElement('button')
const texttitle = document.createElement('h1')
const cajaText = document.createElement('input')
const pesos= document.getElementById('Pesoss')
const dollar= document.createElement('p')
/*function cambioDollares(e){
    e.preventDefault();
    const tasaCambio = 0.060;
    const pesosValor = parseFloat(cajaText.value);
    const dolares = pesosValor * tasaCambio;
    dollar.innerText ='$ '+ dolares + 'Dolares'
}*/
dollar.innerText = `$ 0 `+ ' Dolares'
console.log(pesos)
botonCambio.innerText = '$$$ Cambio'
texttitle.innerText = 'Tipo de Cambio Pesos a Dollares' 
/*botonCambio.addEventListener('click',cambioDollares)*/
document.body.appendChild(texttitle)
document.body.appendChild(cajaText)
document.body.appendChild(botonCambio)
document.body.appendChild(dollar)
/**
 * o TAMBIEN
 * 
 */
botonCambio.addEventListener('click', e => {
    e.preventDefault();
    const tasaCambio = 0.060;
    const pesosValor = parseFloat(cajaText.value);
    const dolares = pesosValor * tasaCambio;
    dollar.innerText ='$ '+ dolares + 'Dolares'
})