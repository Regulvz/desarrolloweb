let variable = false
console.log(typeof variable)
const arr= ['🍔','🌭','🥞']
//console.log(arr)
/*
for(let fruta in arr)
{
    console.log(arr[fruta])
}
/*
 regresa el indice del array
 */
/*
for (let fruta of arr)
{
    console.log(fruta)
}
/**regresa el contenido que hay en cada posicion del array */

/*
arr.map(fruta => {
    console.log(fruta)
})*/
/** Itera cada item del arreglo
 * [item][item][item][item][item][item]
 *  */

/**map va a iterar en cada item
 * map(item,index,arreglo)
*
//cada valor que se itera se mete en fruta, regresa un valor
*/

/*
let nuevoArr= arr.map(fruta => {
    return fruta
})
nuevoArr.push('🥨')
console.log(nuevoArr)
*/

/*
const calif = [10,8,6,4,7]
const probados = calif.filter(c => c >= 7 )
const edades = []
for (let i = 0; i < 1000; i++)
{
    const numeroAleatorio = Math.floor(Math.random()*(65-10+1)+10)
    edades.push(numeroAleatorio)
}
*/

/**Filter regresa los elementos del array que acepten una condicion
* en el callbac
* console.log(edades)
/**Que es el spreed operator */

/*
const menoresDe18 = edades.filter(edad => edad <= 18)
console.log(menoresDe18)*/
const arrNum = [1,2,3,4,5,6]

let newArrnum = arrNum.map(num =>
    {
        return newArrnum
    })
    newArrnum.push(7)
