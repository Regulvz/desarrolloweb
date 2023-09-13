export default function CustomInput({idlabel, labelTitle,placeholderlabel}) {
    const div = document.createElement('div')
    div.className='group'
    div.innerHTML= `
    <label for='${idlabel}'>${labelTitle}</label>
    <input placeholder='${placeholderlabel}'id='${idlabel}'/>
    `
    return div
}