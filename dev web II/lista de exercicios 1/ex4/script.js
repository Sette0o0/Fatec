function calcularFrete(){
    let rastreio = document.querySelector('#rastreamento').value
    let pecas = document.querySelector('#pecas').value
    let distancia = document.querySelector('#distancia').value
    let regiao = document.querySelector('#regiao').value

    let sul = 1
    let sudeste = 1.2
    let centroOeste = 1.3

    let precoPeca = 0

    if (pecas > 1000){

    }
}

document.querySelector('#confirmar').addEventListener('click', calcularFrete)
