import Calculo from "./calculo";

export default class Radiciacao extends Calculo{
    public calcular(numeros: number[]): number {
        const [numero1, numero2] = numeros
        return numero1 ** (1/numero2)
    }
}