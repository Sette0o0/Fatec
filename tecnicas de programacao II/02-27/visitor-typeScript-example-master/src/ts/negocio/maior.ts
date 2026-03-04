import Elemento from "../interfaces/elemento";
import Visitante from "../interfaces/visitante";
import CalculoTres from "./calculoTres";

export default class Maior implements Visitante{
    visitar(elemento: Elemento): void {
        let calculo = elemento as CalculoTres
        let maior = Math.max(calculo.n1, calculo.n2, calculo.n3)
        console.log(`O maior deles é: ${maior}`)
    }
}