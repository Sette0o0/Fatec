let faixaEtaria = () => {
    let idade = parseInt(document.querySelector("#idade").value);
    
    let faixa = "";

    if (idade < 15){
        faixa = "Criança";
    }
    else if (idade < 30){
        faixa = "Jovem";
    }
    else if (idade < 60){
        faixa = "Adulto";
    }
    else {
        faixa = "Idoso";
    }

    document.querySelector('#result').innerHTML = `A faixa etária é: ${faixa}`;
};

document.querySelector('#confirmar').addEventListener('click', faixaEtaria);