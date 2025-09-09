function pegarValor() {
    let data = document.getElementById('data').value.split('/');

    let dia = data[0];
    let mes = data[1];
    if(mes[0] == '0'){
        mes = data[1][1];
    }
    else{
        mes = data[1];
    }

    let ano = data[2];
    
    let meses = {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
        8: 'Agosto',
        9: 'Setembro',
        10: 'Outubro',
        11: 'Novembro',
        12: 'Dezembro'
    }

    document.querySelector('#result').innerHTML = `
        <h2>Data por Extenso</h2>
        <p>${dia} de ${meses[mes]} de ${ano}</p>
    `;
}

document.querySelector('#confirmar').addEventListener('click', pegarValor)
