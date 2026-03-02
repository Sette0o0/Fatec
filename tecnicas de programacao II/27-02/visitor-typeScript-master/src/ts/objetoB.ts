import Elemento from "./elemento";
import visitante from "./visitante";

export default class ObjetoB implements Elemento{
    aceitar(visitante: visitante): void {
        visitante.visitarObjetoB(this)
    }
}