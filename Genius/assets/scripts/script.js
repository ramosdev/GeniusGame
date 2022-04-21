let order = [];
let clickedOrder = [];
let score = 0;

/* 
0 - verde
1 - vermelho
2 - amarelo
3 - azul
*/

const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for( let i in order) {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) +1 );
    }
}