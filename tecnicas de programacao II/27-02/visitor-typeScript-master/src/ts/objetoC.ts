import Elemento from "./elemento";
import visitante from "./visitante";

export default class ObjetoC implements Elemento{
    aceitar(visitante: visitante): void {
        visitante.visitarObjetoC(this)
    }
}