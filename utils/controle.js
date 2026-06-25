import { nave } from "../main.js";
import { horizontal } from "../fisica/movimentação.js";
import { vertical } from "../fisica/movimentação.js";

const aceleracao = 1;
export const velMaxima = 20;

export function direita() {
   

    if (horizontal.execussao === null) { // só cria se não existir

        horizontal.execussao = setInterval(() => {
            if (horizontal.valor < velMaxima) {
                horizontal.valor += aceleracao;
            }
        }, 1000 / 60);
    }
}

export function esquerda() {
   

    if (horizontal.execussao === null) { // só cria se não existir

        horizontal.execussao = setInterval(() => {
            if (horizontal.valor > -velMaxima) {
                horizontal.valor -= aceleracao;
            }
        }, 1000 / 60);
    }
}

export function cima() {
   

    if (vertical.execussao === null) { // só cria se não existir

        vertical.execussao = setInterval(() => {
            if (vertical.valor > -velMaxima) {
                vertical.valor -= aceleracao;
            }
        }, 1000 / 60);
    }
}

export function baixo() {
   

    if (vertical.execussao === null) { // só cria se não existir

        vertical.execussao = setInterval(() => {
            if (vertical.valor < velMaxima) {
                vertical.valor += aceleracao;
            }
        }, 1000 / 60);
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
 
};

export function soltar(){
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