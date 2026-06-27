import { blindadoImg } from "../imgs/imagens.js";
import { ctx, tamanho } from "../main.js";

export let inimigos = [];
let modelos = [];


function Inimigo(tipo) {
    let corpo = geraInimigos(tipo);
    let vida = 100;

    let img = sprite(tipo);
    let largura = 0;
    let altura = 0;
    let type = tipo;

    return {
        getCorpo: () => { return corpo },
        setCorpo: (novo) => { corpo = novo },
        getVida: () => vida,
        setDano: (dano) => vida -= dano,
        setCura: (cura) => { vida += cura; if (vida > 100) vida = 100; },
        getCanhao: () => canhao,
        setCanhao: (novoCanhao) => canhao = novoCanhao,

        setImg: (imgNova) => { img = imgNova },
        getImg: () => { return img },

        setAltura: (nAltura) => { altura = nAltura },
        getAltura: () => { return altura },

        setLargura: (nLargura) => { largura = nLargura },
        getLargura: () => { return largura },
        getTipo: () => { return type }

    }
}


export function enemyFactory(tipo){
    let inim = Inimigo(tipo)

    console.log(inim)

    inimigos.push(inim);

    console.log(inimigos)

    return inim;
}


function sprite(tipo) {

    switch (tipo) {
        case 0:
            return blindadoImg();
            break;
    }

}

let blindado = [
    [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
]

modelos.push(blindado);

let distVertical = window.innerHeight / 2;
let distHorizontal = window.innerWidth / 2;

function geraInimigos(tipo) {

    let corpo = [];
    for (let i = 0; i < modelos[tipo].length; i++) {
        let posicao = [];
        for (let j = 0; j < modelos[tipo][i].length; j++) {

            if (modelos[tipo][i][j]) {
                posicao.push({ x: (j * tamanho) + distHorizontal, y: (i * tamanho) + distVertical });
            }
        }
        corpo.push(posicao);

    }
    return corpo;

}

/*export function rendInimigos (){
    for(let i=0;i<inimigos.length;i++){

        let naveImg = inimigos[i].getImg();
    ctx.drawImage(naveImg, inimigos[i].getCorpo()[0][0].x - (tamanho * 4.3), inimigos.getCorpo()[0][0].y, 145, 125);
    }
}*/

export function rendInimigos() {



    for (let i = 0; i < inimigos.length; i++) {
        let inim = inimigos[i];
        let img = inim.getImg()


        switch (inim.getTipo()) {
            case 0:
                ctx.drawImage(img, inim.getCorpo()[4][0].x - 3, inim.getCorpo()[0][0].y, 244, 125);
                break;

        }
    }

}