import { Nave } from "./models/nave.js";
import { controle} from "./utils/controle.js";
import { naveImg } from "./imgs/imagens.js";
import { espiral } from "./imgs/imagens.js";
import { flutuacao } from "./fisica/flutuacao.js";
import { fisica } from "./fisica/movimentação.js";
import { soltar } from "./utils/controle.js";
import { horizontal } from "./fisica/movimentação.js";

let canvas = document.getElementById("display");
let fundo =  document.getElementById("fundo");
export let ctx = canvas.getContext("2d");
export let ctxFundo = fundo.getContext("2d");
export let tamanho = 15;

export let nave = Nave();

export const asaDireita  = nave.getCorpo()[6][7];
export const asaEsquerda = nave.getCorpo()[6][0];
export const ponta       = nave.getCorpo()[0][0];

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctxFundo.fillRect(0, 0, fundo.width, fundo.height);

canvas.width = (window.innerWidth);
canvas.height = (window.innerHeight);

fundo.width = (window.innerWidth);
fundo.height = (window.innerHeight);

export let largura = canvas.width;
export let altura = canvas.height;



naveImg.onload = function() {
    let corpo = nave.getCorpo();
    ctx.drawImage(naveImg, corpo[0][0].x, corpo[0][0].y, 30, 30);
}

let imgFundo = espiral();

    imgFundo.onload = function(){
        ctxFundo.drawImage(imgFundo, 0, 0, largura, altura);
    }

    


nave.desenhar();
controle.orizontal();
controle.vertical();
soltar();





let loop = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    nave.desenhar();
    ctx.drawImage(naveImg, nave.getCorpo()[0][0].x - (tamanho * 4.3), nave.getCorpo()[0][0].y, 145, 125);
}, 1000 / 60);

flutuacao();
fisica();