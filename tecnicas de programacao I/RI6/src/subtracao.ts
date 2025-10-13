import Calculo from "./calculo";

export default class Subtracao extends Calculo{
    public calcular(numeros: number[]): number{
        const [numero1, numero2] = numeros
        return numero1 - numero2
    }
}