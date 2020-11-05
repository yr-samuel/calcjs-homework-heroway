let botaoLimpar = document.getElementById('botao-limpar');
let botaoIgual = document.getElementById('botao-igual');
let visor = document.getElementById('visor');

document.querySelectorAll('.botao-func').forEach(btnFunc => {
    btnFunc.addEventListener('click', () => {
        visor.innerHTML += ` ${btnFunc.innerHTML} `;
    });
});

botaoIgual.addEventListener('click', () => {
    visor.innerText = eval(visor.innerText); 

    if(!visor.innerText){
        visor.innerText = "No div by 0";
    }
});

document.querySelectorAll('.botao').forEach(botao => {
    botao.addEventListener('click', () => {
        if(visor.innerHTML == 'No div by 0'){
            visor.innerHTML = "";
        }
        visor.innerHTML = visor.innerHTML + botao.innerHTML;
    });
});

botaoLimpar.addEventListener('click', () => {
    visor.innerHTML = "";
})





