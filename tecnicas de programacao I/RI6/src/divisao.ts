import Calculo from "./calculo";

export default class Divisao extends Calculo{
    public calcular(numeros: number[]): number {
        const [numero1, numero2] = numeros
        if (numero2 == 0){
            console.log('Erro: Divisão por 0')
            return 0
        }
        else{
            return numero1 / numero2
        }
    }
}