function pegarValor() {
    let codigo = parseInt(document.getElementById('codigo').value)
    let horasTrabalhadas = parseInt(document.getElementById('horasTrabalhadas').value)
    let turno = document.getElementById('turno').value.toUpperCase()
    let categoria = document.getElementById('categoria').value.toUpperCase()
    let salarioMinimo = parseFloat(document.getElementById('salarioMinimo').value)

    let valorHora

    if(categoria === 'F'){
        if (turno === 'M') {
            valorHora = salarioMinimo * 0.01;
        }
        else if (turno === 'V') {
            valorHora = salarioMinimo * 0.01;
        }
        else if (turno === 'N') {
            valorHora = salarioMinimo * 0.02;
        }
    } 
    else if (categoria === 'G') {
        if (turno === 'M') {
            valorHora = salarioMinimo * 0.04;
        }
        else if (turno === 'V') {
            valorHora = salarioMinimo * 0.04;
        }
        else if (turno === 'N') {
            valorHora = salarioMinimo * 0.06; //Não da pra ver na tabela ent deduzi que é 6%
        }
    }

    let salarioInicial = horasTrabalhadas * valorHora

    let auxAlimentacao

    if (salarioInicial <= 300) {
        auxAlimentacao = salarioInicial * 0.20;
    }
    else if (salarioInicial <= 600) {
        auxAlimentacao = salarioInicial * 0.15;
    }
    else {
        auxAlimentacao = salarioInicial * 0.05;
    }

    const salarioFinal = salarioInicial + auxAlimentacao;

    document.querySelector('#result').innerHTML = `
        <h2>Resumo do Salário</h2>
        <p>Código do Funcionário: ${codigo}</p>
        <p>Horas Trabalhadas: ${horasTrabalhadas}</p>
        <p>Valor da Hora Trabalhada: R$ ${valorHora.toFixed(2)}</p>
        <p>Salário Inicial: R$ ${salarioInicial.toFixed(2)}</p>
        <p>Auxílio Alimentação: R$ ${auxAlimentacao.toFixed(2)}</p>
        <h3>Salário Final: R$ ${salarioFinal.toFixed(2)}</h3>
    `;
}

document.querySelector('#confirmar').addEventListener('click', pegarValor)
