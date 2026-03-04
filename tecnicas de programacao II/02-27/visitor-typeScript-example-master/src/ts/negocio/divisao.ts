import Elemento from "../interfaces/elemento";
import Visitante from "../interfaces/visitante";
import CalculoDois from "./calculoDois";

export default class Divisao implements Visitante{
    visitar(elemento: Elemento): void {
        let calculo = elemento as CalculoDois
        if (calculo.n2 == 0){
            console.log(`Não é permitido divisão por 0 (Zero)`)
            return
        }
        let divisao = calculo.n1 / calculo.n2
        console.log(`Resultado da divisão: ${divisao}`)
    }
}