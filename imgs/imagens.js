export let naveImg = new Image();
naveImg.src = "./imgs/nave.png";

export function espiral(){
    let img = new Image();
    img.src = "./imgs/fundo.png";

    return img;
}

export function blindadoImg(){
    let img = new Image();
    img.src = "./imgs/blindado.png";

    img.onload = function(){}

    return img;
}