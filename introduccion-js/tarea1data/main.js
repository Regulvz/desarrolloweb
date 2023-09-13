import './style.css'
import card from './card'
import { apiData } from './data'
import Header from './header'
const recursosh = {
  titulo: 'informacion de empleados',
  area:'Sistemas computacionales'
}
document.body.appendChild(Header(recursosh))
const main= document.createElement('main')
apiData.forEach(apiData => {
  main.appendChild(card(apiData))
})
document.body.appendChild(main)
/*
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/