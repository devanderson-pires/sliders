const images = document.querySelectorAll('#slider img');

let tempoDaTransicao = 2000,
    indiceImg = 0,
    maxImg = images.length;

function trocaImg() {

    images[indiceImg].classList.remove('selecionada');
    
    indiceImg++
    
    if (indiceImg >= maxImg) indiceImg = 0;
    
    images[indiceImg].classList.add('selecionada');
};

function start() {

    setInterval(() => trocaImg(), tempoDaTransicao);
};

window.addEventListener('load', start);
