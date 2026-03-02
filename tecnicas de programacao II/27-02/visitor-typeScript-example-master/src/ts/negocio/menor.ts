import Elemento from "../interfaces/elemento";
import Visitante from "../interfaces/visitante";
import CalculoTres from "./calculoTres";

export default class Menor implements Visitante{
    visitar(elemento: Elemento): void {
        let calculo = elemento as CalculoTres
        let menor = Math.min(calculo.n1, calculo.n2, calculo.n3)
        console.log(`O menor deles é: ${menor}`)
    }
}