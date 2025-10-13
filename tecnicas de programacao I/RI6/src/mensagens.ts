export default class Mensagens {

    public listarOpcoes = () => {
        console.log(`Aqui você pode:`)
        console.log(`Somar, Subtrair, Multiplicar, Dividir, Potenciar, Raizar ou Calcular as raízes de uma função do segundo grau (Func)\n`)
    }

    public comoUsar = () => {
        console.log(`Para usar digite os números e a opção de cálculo separados por espaço como: "1.5 2.5 Somar"`)
        console.log(`Caso seja uma função: "1 -5 6 Func" > "1x² -5x + 6"`)
        console.log(`O resultado será a soma dos números: 4`)
        console.log(`Para encerrar digite "Sair"\n`)
    }

    public boasVindas = () => {
        console.log('\nBem-vindo a calculadora polimórfica\n')
    }

}