let calcularIMC = () => {
    let nome = document.querySelector("#nome").value;
    let altura = parseInt(document.querySelector("#altura").value);
    let peso = parseFloat(document.querySelector("#peso").value);

    console.log(nome, altura, peso);

    altura = altura / 100;

    let imc = peso / (altura * altura);

    var classificacao = "";

    if (imc < 16) {
        classificacao = "Baixo peso muito grave";
    }
    else if (imc < 17) {
        classificacao = "Baixo peso grave";
    }
    else if (imc < 18.5) {
        classificacao = "Baixo peso";
    }
    else if (imc < 25) {
        classificacao = "Peso normal";
    }
    else if (imc < 30) {
        classificacao = "Sobrepeso";
    }
    else if (imc < 35) {
        classificacao = "Obesidade grau I";
    }
    else if (imc < 40) {
        classificacao = "Obesidade grau II";
    }
    else {
        classificacao = "Obesidade grau III";
    }
    document.querySelector('#result').innerHTML = `${nome} possui índice de massa corporal igual a ${imc} , sendo classificado como: ${classificacao}`;
}

document.querySelector('#calculateBtn').addEventListener('click', calcularIMC);