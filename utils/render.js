import { ctx, tamanho } from "../main.js";

export function render(posicao){//renderiaza 1 bloco numa posicao
    let x = posicao.x;
    let y = posicao.y;
    ctx.save();

    /*if(posicao.comida){
        ctx.filter = "blur(5px)";
    }else{
        ctx.filter = "none";
    }*/

    ctx.beginPath();
    ctx.fillStyle = posicao.cor;
    ctx.fillRect(x, y, tamanho, tamanho);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.restore();
}

export function renderList(list){//renderiza uma lista de blocos nas respectivas posições
    for(let i=0;i<list.length;i++){
        render(list[i]);
    }
}

export function renderList2D(list){//renderiza uma lista bidimensional de blocos  
    for(let i=0;i<list.length;i++){
        for(let j=0;j<list[i].length;j++){
            render(list[i][j]);
        }
    }
}   