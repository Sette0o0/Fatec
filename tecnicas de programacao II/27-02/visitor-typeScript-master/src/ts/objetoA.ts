import Elemento from "./elemento";
import visitante from "./visitante";

export default class ObjetoA implements Elemento{
    aceitar(visitante: visitante): void {
        visitante.visitarObjetoA(this)
    }
}

