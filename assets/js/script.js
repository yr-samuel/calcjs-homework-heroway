let valores = [];
let firstValue = 0;
let signal = "";
let resultado = 0;
let botaoLimpar = document.getElementById('botao-limpar');
let botaoIgual = document.getElementById('botao-igual');
let visor = document.getElementById('visor');
let botaoMais = document.getElementById('botao-mais');
let botaoMenos = document.getElementById('botao-menos');
let botaoVezes = document.getElementById('botao-vezes');
let botaoDiv = document.getElementById('botao-div');

botaoMais.addEventListener('click', () => {
    signal = botaoMais.innerText;
    firstValue = parseInt(visor.innerHTML)
    valores.push(firstValue);
    visor.innerHTML += " + ";
    visor.innerHTML = "";
    firstValue = 0;
});

botaoMenos.addEventListener('click', () => {
    signal = botaoMenos.innerText;
    firstValue = parseInt(visor.innerHTML)
    valores.push(firstValue);
    visor.innerHTML = "";
    firstValue = 0;
});

botaoVezes.addEventListener('click', () => {
    signal = botaoVezes.innerText;
    firstValue = parseInt(visor.innerHTML)
    valores.push(firstValue);
    visor.innerHTML = "";
    firstValue = 0;
});

botaoDiv.addEventListener('click', () => {
    signal = botaoDiv.innerText;
    firstValue = parseInt(visor.innerHTML)
    valores.push(firstValue);
    visor.innerHTML = "";
    firstValue = 0;
});


botaoIgual.addEventListener('click', () => {
    switch(signal){
        case '+':
            firstValue = parseInt(visor.innerHTML)
            valores.push(firstValue);
            console.log(valores);
            resultado = valores[0] + valores[1];
            visor.innerText = resultado;     
            break;
        
        case '-':
            firstValue = parseInt(visor.innerHTML)
            valores.push(firstValue);
            console.log(valores);
            resultado = valores[0] - valores[1];
            visor.innerText = resultado;     
            break;

        case '×':
            firstValue = parseInt(visor.innerHTML)
            valores.push(firstValue);
            console.log(valores);
            resultado = valores[0] * valores[1];
            visor.innerText = resultado;     
            break;

        case '÷':
            firstValue = parseInt(visor.innerHTML)
            if(firstValue == 0){
                visor.innerText = "";
                alert('Impossível fazer essa conta');
                valores = [];
                break;
                
            }else{
                valores.push(firstValue);
                console.log(valores);
                resultado = valores[0] / valores[1];
                visor.innerText = resultado;     
             }
             break;
    }
});


document.querySelectorAll('.botao').forEach(botao => {
    botao.addEventListener('click', () => {
        
        visor.innerHTML = visor.innerHTML + botao.innerHTML;
    });
});

botaoLimpar.addEventListener('click', () => {
    visor.innerHTML = "";
    resultado = "";
    firstValue = "";
    valores=[];
    console.clear();

})





