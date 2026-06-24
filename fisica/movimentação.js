import { nave } from "../main.js";

export let vertical = { valor: 0, execussao: null };
export let horizontal = { valor: 0, execussao: null };


function inercia() {
    // aplica atrito horizontal
    if (horizontal.valor > 0) {
        horizontal.valor -= 0.1; // reduz fixo
        if (horizontal.valor < 0) horizontal.valor = 0;
    } else if (horizontal.valor < 0) {
        horizontal.valor += 0.1;
        if (horizontal.valor > 0) horizontal.valor = 0;
    }

    // aplica atrito vertical
    if (vertical.valor > 0) {
        vertical.valor -= 0.1;
        if (vertical.valor < 0) vertical.valor = 0;
    } else if (vertical.valor < 0) {
        vertical.valor += 0.1;
        if (vertical.valor > 0) vertical.valor = 0;
    }
}


export function fisica() {

    let corpo = nave.getCorpo();

    console.log(horizontal.valor);

    setInterval(() => {

        //inercia();

        for (let i = 0; i < corpo.length; i++) {
            for (let j = 0; j < corpo[i].length; j++) {
                corpo[i][j].x += horizontal.valor;
                corpo[i][j].y += vertical.valor;
                
            }
        }

    }, 1000 / 60);

}