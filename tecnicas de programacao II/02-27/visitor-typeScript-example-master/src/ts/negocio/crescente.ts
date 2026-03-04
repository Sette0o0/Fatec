import Elemento from "../interfaces/elemento";
import Visitante from "../interfaces/visitante";
import CalculoTres from "./calculoTres";

export default class Crescente implements Visitante{
   visitar(elemento: Elemento): void {
       let calculo = elemento as CalculoTres
       let crescente = [calculo.n1, calculo.n2, calculo.n3].sort((a, b) => a - b)
       console.log(`Números em ordem crescente: ${crescente}`)
   } 
}