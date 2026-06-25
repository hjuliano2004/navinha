import { altura, asaDireita, asaEsquerda, largura, nave, ponta } from "../main.js";
import { velMaxima } from "../utils/controle.js";

export let vertical = { valor: 0, execussao: null };
export let horizontal = { valor: 0, execussao: null };

const atrito = 5;


function inercia() {

  if (horizontal.valor > 0) {
    horizontal.valor -= (horizontal.valor / 100) * atrito;
  }

  if (horizontal.valor < 0) {
    horizontal.valor -= (horizontal.valor / 100) * atrito;
  }

    if (vertical.valor > 0) {
    vertical.valor -= (vertical.valor / 100) * atrito;
  }

  if (vertical.valor < 0) {
    vertical.valor -= (vertical.valor / 100) * atrito;
  }
   
}



export function fisica() {

    let corpo = nave.getCorpo();

    setInterval(() => {


        inercia();
        colisaoLimites();

        for (let i = 0; i < corpo.length; i++) {
            for (let j = 0; j < corpo[i].length; j++) {
                corpo[i][j].x += horizontal.valor;
                corpo[i][j].y += vertical.valor;
                
            }
        }

    }, 1000 / 60);

}

function colisaoLimites(){

        if(asaDireita.x + horizontal.valor >= largura + 50) {
            horizontal.valor = -velMaxima / 2;
        }


        if(asaEsquerda.x + horizontal.valor <= 0 - 50){
            horizontal.valor = velMaxima / 2;
        }

        if(ponta.y + vertical.valor <= 0 - 50){
            vertical.valor = velMaxima / 2;
        }

        if((ponta.y + vertical.valor) + 100 >= altura + 50){
            vertical.valor = -velMaxima / 2;
        }
}