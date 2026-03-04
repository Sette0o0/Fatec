import elemento from "../interfaces/elemento";
import Visitante from "../interfaces/visitante";
import CalculoDois from "./calculoDois";

export default class Subtracao implements Visitante {
    visitar(elemento: elemento): void {
        let calculo = elemento as CalculoDois
        let subtracao = calculo.n1 - calculo.n2
        console.log(`Resultado da subtracao: ${subtracao}`);
    }
}