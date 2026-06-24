import { Nave } from "./models/nave.js";
import { controle} from "./utils/controle.js";
import { naveImg } from "./imgs/imagens.js";
import { flutuacao } from "./fisica/flutuacao.js";
import { fisica } from "./fisica/movimentação.js";

let canvas = document.getElementById("display");
export let ctx = canvas.getContext("2d");
export let tamanho = 15;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.width = (window.innerWidth) - window.innerWidth / 20;// / 4) * 3;
canvas.height = (window.innerHeight) - window.innerHeight / 13;// / 5) * 4;

console.log(`Canvas width: ${canvas.width}`);
console.log(`Canvas height: ${canvas.height}`);

export let nave = Nave();

naveImg.onload = function() {
    let corpo = nave.getCorpo();
    ctx.drawImage(naveImg, corpo[0][0].x, corpo[0][0].y, 30, 30);
}

nave.desenhar();
controle.orizontal();
controle.vertical();
let loop = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    nave.desenhar();
    ctx.drawImage(naveImg, nave.getCorpo()[0][0].x - (tamanho * 4.3), nave.getCorpo()[0][0].y, 145, 125);
}, 1000 / 60);

flutuacao();
fisica();


    console.log(nave.getCorpo());

