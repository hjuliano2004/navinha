import { nave } from "../main.js";

let efeitoY = null;
let efeitoX = null;
export function flutuacao (){

    let corpo = nave.getCorpo();

    efeitoY = setInterval(() => {
        for (let i = 0; i < corpo.length; i++) {
            for (let j = 0; j < corpo[i].length; j++) {
                corpo[i][j].y += Math.sin(Date.now() / 980) * 0.3;
                
            }
        }
    }, 1000 / 60);

        efeitoX = setInterval(() => {
        for (let i = 0; i < corpo.length; i++) {
            for (let j = 0; j < corpo[i].length; j++) {
                corpo[i][j].x += Math.cos(Date.now() / 530) * 0.5;
            }
        }
    }, 850 / 60);
}