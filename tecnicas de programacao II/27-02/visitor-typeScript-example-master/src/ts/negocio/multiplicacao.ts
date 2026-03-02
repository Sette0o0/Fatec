import Elemento from "../interfaces/elemento";
import Visitante from "../interfaces/visitante";
import CalculoDois from "./calculoDois";

export default class Multiplicacao implements Visitante{
    visitar(elemento: Elemento): void {
        let calculo = elemento as CalculoDois
        let mult = calculo.n1 * calculo.n2
        console.log(`Resultado da multiplicação: ${mult}`)
    }
}