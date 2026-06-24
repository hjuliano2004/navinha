import { ctx, tamanho } from "../main.js";
import { renderList, renderList2D } from "../utils/render.js";


export function Nave() {
    let corpo = geraNave();
    let vida = 100;
    let canhao = {tipo: "laser", dano: 10, tempo: 500};




   /* function posicao(valor) {
        for (let i = 0; i < corpo.length; i++) {
            corpo[i].x = valor.x;
            corpo[i].y = valor.y;
        }
    }*/

    return {
        getCorpo: function(){   return corpo},
        setCorpo: (novoCorpo) => corpo = novoCorpo,
        getCor: () => cor,
        setCor: (novaCor) => cor = novaCor,
        getVida: () => vida,
        setDano: (dano) => vida -= dano,
        setCura: (cura) => { vida += cura; if (vida > 100) vida = 100; }, 
        getCanhao: () => canhao,
        setCanhao: (novoCanhao) => canhao = novoCanhao,
        desenhar: function () {
            renderList2D(corpo);
        }
    }
}

function geraCanhao(tipo, dano, tempo) {
    return {tipo: tipo, dano: dano, tempo: tempo};
}

let modelo = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 1]
];

let distVertical =(window.innerHeight / 8) * 5;
let distHorizontal = (window.innerWidth / 2) - (modelo[0].length * 30) / 2;

function geraNave() {

    let corpo = [];
    for (let i = 0; i < modelo.length; i++) {
        let posicao = [];
        for (let j = 0; j < modelo[i].length; j++) {
            
            if (modelo[i][j] == 1) {
                posicao.push({ x: (j * tamanho) + distHorizontal, y: (i * tamanho) + distVertical});
            }
        }
        corpo.push(posicao);

    }
    return corpo;

}