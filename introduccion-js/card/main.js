import './style.css'
import { personas } from "./data";
import card from "./card";

const empresa = {
    titulo: 'manejo de sistemas agrarios',
    giro: 'agricultura',
}

document.body.appendChild(Header(empresa))
const main = document.createElement('main')
personas.forEach(personas => {
    main.appendChild(card(personas))
    
});
document.body.appendChild(main)