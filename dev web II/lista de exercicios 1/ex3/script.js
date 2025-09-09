function calcularMP(){
    const nota1 = parseFloat(document.querySelector('#pratica').value)
    const peso1 = 2

    const nota2 = parseFloat(document.querySelector('#prova').value)
    const peso2 = 5

    const nota3 = parseFloat(document.querySelector('#trabalho').value)
    const peso3 = 3

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        alert('Insira todas as notas.')
        return
    }

    const mediaP = ((nota1 * peso1)+(nota2 * peso2)+(nota3 * peso3))/(peso1 + peso2 + peso3)

    var classificacao

    if (mediaP <= 5){
        classificacao = 'F'
    }
    else if (mediaP <= 6){
        classificacao = 'E'
    }
    else if (mediaP <= 7){
        classificacao = 'D'
    }
    else if (mediaP <= 8){
        classificacao = 'C'
    }
    else if (mediaP <= 9){
        classificacao = 'B'
    }
    else if (mediaP <= 10){
        classificacao = 'A'
    }

    document.querySelector('#result').innerHTML = `A média do alune é ${mediaP} e a sua classificação é ${classificacao}.`
}
document.querySelector('#confirmar').addEventListener('click', calcularMP)