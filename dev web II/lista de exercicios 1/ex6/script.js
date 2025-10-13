let num1 = parseFloat(prompt('Digite o primeiro número: '));
let operacao = prompt('Digite a operação (soma, subtração, multiplicação, divisão): ');
let num2 = parseFloat(prompt('Digite o segundo número: '));

let resultado;

if (operacao === 'soma') {
    resultado = num1 + num2;
}
else if (operacao === 'subtração') {
    resultado = num1 - num2;
}
else if (operacao === 'multiplicação') {
    
    resultado = num1 * num2;
}
else if (operacao === 'divisão') {
    if (num2 !== 0) {
        resultado = num1 / num2;
    }
    else {
        resultado = 'Erro: Divisão por zero não é permitida.';
    }
}
else {
    resultado = 'Erro: Operação inválida.';
}

document.querySelector('#result').innerHTML = `
    <p>O resultado é ${resultado}</p>
`;
