function calcularFrete(){
    let rastreio = parseInt(document.querySelector('#rastreamento').value)
    let pecas = parseInt(document.querySelector('#pecas').value)
    let distancia = parseFloat(document.querySelector('#distancia').value)
    let regiao = document.querySelector('#regiao').value

    if (isNaN(pecas) || isNaN(distancia) || regiao === ''){
        alert('Preencha todos os campos corretamente.')
        return
    }

    let regioes = {
        'S': 1,
        'SE': 1.2,
        'CO': 1.3
    }

    let valorRastreio = 0
    if (rastreio){
        valorRastreio = 200
    }

    let valorPecas = 0
    if (pecas > 1000){
        valorPecas = 1000 * regioes[regiao]

        pecas -= 1000

        valorPecas += (pecas * regioes[regiao]) * (1 - (regioes[regiao] / 10))
    }
    else{
        valorPecas = pecas * regioes[regiao]
    }

    let valorDisel = 6

    let valorDistancia = distancia * valorDisel

    document.querySelector('#result').innerHTML = `
        <h2>Resumo do Frete</h2>
        <p>Taxa do Rastreamento: R$ ${valorRastreio.toFixed(2)}</p>
        <p>Valor do frete pelas Peças: R$ ${valorPecas.toFixed(2)}</p>
        <p>Valor do frete por quilômetro: R$ ${valorDistancia.toFixed(2)}</p>
        <h3>Total do Frete: R$ ${(valorPecas + valorDistancia + valorRastreio).toFixed(2)}</h3>
    `
}

document.querySelector('#confirmar').addEventListener('click', calcularFrete)