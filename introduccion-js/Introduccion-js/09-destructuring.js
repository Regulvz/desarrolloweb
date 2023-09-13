/**
 * Como desestructurar
 */
///////////////////////
/**Ejemplo */
const restaurant = {
    name: 'Betos pizza',
    location: 'Lerida',
    categories: ['italian','Mexicana','Vegetarian','Asiatic'],
    starterMenu: ['Finger_Cheese', 'Nuggets', 'Garlic Bread', 'Boneless'],
    mainMenu: ['Pizza','Pasta','Beverages'],
    /**
     * Ordenar es una funcion que tiene como parametros de entrara los menus 
     * de entrada y el menu principal.
     */
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    oppeningHours: {
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 9,
            close: 23,  
        },
        sun: {
            open: 10,
            close: 15,
        },
    },
    orderDelivery: function ({time, dir, mainIndex, starterIndex}){
        console.log(`Order Received: ${this.mainMenu[mainIndex]} and
                    ${this.starterMenu[starterIndex]}
                    will be deliveried to ${dir} at ${time}`);
    }
};
/*
// Dos variables para las primeras 2 categoria
let [primary, secundary] = restaurant.categories;
console.log(primary, secundary);
primary=20;
console.log(primary, secundary);

const temp = primary;
primary = secundary;
console.log(primary);
[primary, secundary] = [secundary, primary];
console.log(primary, secundary);*//*const [starter,main] = restaurant.order(2,1)
//ahora lo metemos a la pagina
const order = document.createElement('p');
order.innerHTML= `Tu pedido contiene ${starter.toUpperCase()} y ${main.toUpperCase()}`;
document.body.appendChild(order);*/
//Destructoring obj
/**
 * Un objeto se pueden cambiar el nombre de las propiedades
 * por ejemplo name es una propiedad de nuestro objeto restaurante y le cambiamos 
 * el nombre a restaurantNAme para poder utilizarlo, openinghours lo cambiamos a 
 * labordays y categoria a tags, y para decirle que de donde saque las 
 * propiedades despues de las llaves y de los cambios de las propiedades
 * le decimos = restaurant, porqeu queremos que saque las propiedades de 
 * nuestro objeto restaurante
 */
const {
    name: restaurantName,
    oppeningHours: laborDays,
    categories: tags,
} = restaurant;
/*
Entonces nosotros podemos utilizar el nuevo nombre 
para las propiedades y los podemos utilzar
por ejemplo restaurantName= Beto's Pizza
laborDays me despliega un objeto que me dice que abren
viernes, sabado y domingo.
y tags me despliega un objeto que contiene
las categorias*/
/*
console.log(restaurantName);
console.log(laborDays);
console.log(tags);*/
/**Como no existe ninguna propiedad llamada menu en el console log se desplegara un arreglo vacio
 * pero como si existe starterMenu si podremos obtener un arreglo con informacion del restaurante...
 * 
 * En este caso le cambiamos el nombre a la segunda propiedad para utilizarla de
*
const {Menu = [], starterMenu: starter = []} = restaurant;
console.log(Menu, starter)
*/
const {
    fri: {open, close},
}= laborDays;
console.log(`abierto: ${open} cierre: ${close}`)

restaurant.orderDelivery({
    time: '13:40',
    dir: 'Benito Ave',
    mainIndex: 2,
    starterIndex: 0,

})

