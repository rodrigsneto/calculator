document.getElementById('screen').innerHTML = 0;

let valorPrimeiro = 0;
let novoValor = false;
let operador = "";

function operacao(op) {
    operador = op;
    valorPrimeiro = document.getElementById('screen').innerHTML;
    novoValor = true;
}

function limpar() {
    document.getElementById('screen').innerHTML = 0;
    document.querySelector('#screen');
};

function digito(x) {
    let screenValue = document.getElementById('screen').innerHTML;
    let digitoValue = x;
    if (screenValue == '0' || novoValor == true) {
        document.getElementById('screen').innerHTML = digitoValue;
        novoValor = false;
    } else {
        document.getElementById('screen').innerHTML += digitoValue;
    };
};

function calcular() {
    let n1 = parseInt(valorPrimeiro);
    let n2 = parseInt(document.getElementById('screen').innerHTML);

    switch (operador) {
        case 'som':
            result = n1 + n2;
            break;
        case 'sub':
            result = n1 - n2;
        break;
        case 'div':
            result = n1 / n2;
        break;
        case 'mult':
            result = n1 * n2;
        break;
    }

    document.getElementById('screen').innerHTML = result;
    novoValor = true;
}
function digitou(e) {
    console.log(e);
    tecla = e.key;
    
    switch (tecla) {
        case '0':
            digito(0);
        break;
        case '1':
            digito(1);
        break;
        case '2':
            digito(2);
        break;
        case '3':
            digito(3);
        break;
        case '4':
            digito(4);
        break;
        case '5':
            digito(5);
        break;
        case '6':
            digito(6);
        break;
        case '7':
            digito(7);
        break;
        case '8':
            digito(8);
        break;
        case '9':
            digito(9);
        break;
        case '+':
            operacao('som');
        break;
        case '-':
            operacao('sub');
        break;
        case '/':
            operacao('div');
        break;
        case '*':
            operacao('mult');
        break;
        case '=':
            calcular();
        break;
        case 'Enter':
            calcular();
        break;
    }
}
