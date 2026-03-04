import Elemento from "../interfaces/elemento";
import Entrada from "../io/entrada";
import CalculoDois from "../negocio/calculoDois";
import CalculoTres from "../negocio/calculoTres";
import Crescente from "../negocio/crescente";
import Decrescente from "../negocio/decrescente";
import Divisao from "../negocio/divisao";
import Maior from "../negocio/maior";
import Menor from "../negocio/menor";
import Multiplicacao from "../negocio/multiplicacao";
import Soma from "../negocio/soma";
import Subtracao from "../negocio/subtracao";

console.log(`Bem-vindo(a) a melhor calculadora/processadora do mundo`)

let execucao = true

while (execucao) {
    console.log(`------------------------------`);
    console.log(`Opções para dois números: `);
    console.log(`1 - Somar`);
    console.log(`2 - Subtrair`);
    console.log(`3 - Multiplicar`);
    console.log(`4 - Dividir`);
    console.log(`------------------------------`);
    console.log(`Opções para três números: `);
    console.log(`5 - Mostrar o menor`);
    console.log(`6 - Mostrar o maior`);
    console.log(`7 - Todos em ordem crescente`);
    console.log(`8 - Todos em ordem decrescente`);
    console.log(`------------------------------`);
    console.log(`0 - Sair`);
    console.log(`------------------------------`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    if (opcao > 0 && opcao < 9) {
        let calculo: Elemento
        let numero1 = entrada.receberNumero(`Por favor, digite o primeiro numero `)
        let numero2 = entrada.receberNumero(`Por favor, digite o segundo numero `)
        if (opcao > 4 && opcao < 9){
            let numero3 = entrada.receberNumero(`Por favor, digite o terceiro numero `)
            calculo = new CalculoTres(numero1, numero2, numero3)
        } else {
            calculo = new CalculoDois(numero1, numero2)
        }
        switch (opcao) {
            case 1:
                calculo.aceitar(new Soma())
                break;
            case 2:
                calculo.aceitar(new Subtracao())
                break;
            case 3:
                calculo.aceitar(new Multiplicacao())
                break;
            case 4:
                calculo.aceitar(new Divisao())
                break;
            case 5:
                calculo.aceitar(new Menor())
                break;
            case 6:
                calculo.aceitar(new Maior())
                break;
            case 7:
                calculo.aceitar(new Crescente())
                break;
            case 8:
                calculo.aceitar(new Decrescente())
                break;
        }
    }else if(opcao == 0){
        execucao = false
        console.log(`Até mais!`);
        
    }else{
        console.log(`Operação não entendida :(`);
    }
}