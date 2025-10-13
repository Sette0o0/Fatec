import * as readline from 'readline'
import Mensagens from './mensagens'

import Calculo from './calculo'

import Soma from './soma'
import Subtracao from './subtracao'
import Divisao from './divisao'
import Multiplicacao from './multiplicacao'
import Potenciacao from './potenciacao'
import Radiciacao from './radiciacao'
import Bhaskara from './bhaskara'

let mensagens = new Mensagens()

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
        let instrucoes = valor.split(' ')
        let num1 = Number(instrucoes[0])
        let num2 = Number(instrucoes[1])
        let num3 = Number(instrucoes[2])
        let operacao = instrucoes.pop()

        if (instrucoes.length == 1){
            operacao = instrucoes[0]
        }

        console.log(`Estas foram suas instruções: ${instrucoes}\n`)

        let calculo: Calculo
        switch (operacao){
            case 'Somar':
                calculo = new Soma()
                console.log(`O resultado da operação é: ${calculo.calcular([num1, num2])}\n`)
                break
            case 'Subtrair':
                calculo = new Subtracao()
                console.log(`O resultado da operação é: ${calculo.calcular([num1, num2])}\n`)
                break
            case 'Dividir':
                calculo = new Divisao()
                console.log(`O resultado da operação é: ${calculo.calcular([num1, num2])}\n`)
                break
            case 'Multiplicar':
                calculo = new Multiplicacao()
                console.log(`O resultado da operação é: ${calculo.calcular([num1, num2])}\n`)
                break
            case 'Potenciar':
                calculo = new Potenciacao()
                console.log(`O resultado da operação é: ${calculo.calcular([num1, num2])}\n`)
                break
            case 'Raizar':
                calculo = new Radiciacao()
                console.log(`O resultado da operação é: ${calculo.calcular([num1, num2])}\n`)
                break
            case 'Func':
                calculo = new Bhaskara()
                let resultado = calculo.calcular([num1, num2, num3])
                if (resultado.mensagem) {
                    console.log(resultado.mensagem, '\n');
                } else {
                    console.log(`O resultado da operação é: x1 = ${resultado.x1}, x2 = ${resultado.x2}\n`)
                }
                break
            case 'Sair':
                console.log(`Até uma próxima, falou...`)
                break
            default:
                console.log(`Operação não entendida :(\n`)
        }
        leitor.close()
        if (operacao != 'Sair'){
            mensagens.comoUsar()
            iniciar()
        }
    })
}
mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()