import { nave } from "../main.js";
import { horizontal } from "../fisica/movimentação.js";



/*function direita() {

    let corpo = nave.getCorpo();
    for (let i = 0; i < corpo.length; i++) {
        for (let j = 0; j < corpo[i].length; j++) {
            corpo[i][j].x += 15;
        }
    }
}*/

export function direita() {
   

    if (horizontal.execussao === null) { // só cria se não existir
         console.log("recebendo comando de movimentação para direita");
        horizontal.execussao = setInterval(() => {
            if (horizontal.valor < 100) {
                horizontal.valor += 0.5;
            }
        }, 1000 / 60);
    }
}


function esquerda() {
    let corpo = nave.getCorpo();
    for (let i = 0; i < corpo.length; i++) {
        for (let j = 0; j < corpo[i].length; j++) {
            corpo[i][j].x -= 15;
        }
    }
}

function cima() {
    let corpo = nave.getCorpo();
    for (let i = 0; i < corpo.length; i++) {
        for (let j = 0; j < corpo[i].length; j++) {
            corpo[i][j].y -= 15;
        }
    }
}

function baixo() {
    let corpo = nave.getCorpo();
    for (let i = 0; i < corpo.length; i++) {
        for (let j = 0; j < corpo[i].length; j++) {
            corpo[i][j].y += 15;
        }
    }
}

export let controle = {
    orizontal: function () {
        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    esquerda();
                    break;
                case "ArrowRight":
                    
                    
                    direita();

                    break;
            }
        })

        
    },

    vertical: function () {
        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    cima();
                    break;
                case "ArrowDown":
                    baixo();
                    break;
            }
        });
    },

    soltar: function (){
        window.addEventListener("keyup", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    clearInterval(vertical.execussao);
                    vertical.execussao = null;
                    break;
                case "ArrowDown":
                    clearInterval(vertical.execussao);
                    vertical.execussao = null;
                    break;
                case "ArrowLeft":
                    clearInterval(horizontal.execussao);
                    horizontal.execussao = null;
                    break;
                case "ArrowRight":
                    clearInterval(horizontal.execussao);
                    horizontal.execussao = null;
                    break;
            }
        });
    }   
};

