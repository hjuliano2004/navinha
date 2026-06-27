import { ctx, nave, velocidade } from "../main.js";

let lista = [];

export let atirador = {
    disparador: null,
    cadencia: 250
} 

export function laser(){//x=vertical y=orizontal

    let projetil ={
        x: nave.getCorpo()[0][0].x,
        y: nave.getCorpo()[0][0].y,
        cump: 1,
        cor: "red"
    }

    lista.push(projetil);
}

export function rendLista(){

    for(let i=0;i<lista.length;i++){

    ctx.beginPath();
    ctx.moveTo(lista[i].x + 10, lista[i].y);//a linha inicia aqui
    ctx.lineTo(lista[i].x + 10, lista[i].y + lista[i].cump);//a linha termina aqui
    ctx.strokeStyle = lista[i].cor;
    ctx.lineWidth = "5";
    ctx.stroke();

    }

}

export function moveLaser(){
    
    setInterval(()=>{

        for(let i=0;i<lista.length;i++){
            lista[i].y -= 8;
            if(lista[i].cump < 50){
                lista[i].cump  +=5;
            }
            if(lista[i].y < -100){
                lista.splice(i, 1);
            }
        }

    }, 1000 / 120);
}
