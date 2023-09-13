export default function card(
    {
        nombre,
        carrera,
        semestre,
        image: {uri, description},
})
const card=document.createElement('div');
card.className = 'card';
card.innerHTML= `
        <img src='${image_url}' alt=${description} class='card-avatar/>
        <div class= card-info>
            <p class='card-info_title'>${carrera}</p>
            <p class='card-info_subtitle'>${nombre}</p>
            <p class='card-info_grade'>${semestre}</p>
        </div>
        `;
        return card;