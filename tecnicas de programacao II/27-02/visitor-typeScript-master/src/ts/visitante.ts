import ObjetoA from "./objetoA"
import ObjetoB from "./objetoB"
import ObjetoC from "./objetoC"

export default interface Visitante {
    visitarObjetoA(objeto: ObjetoA): void
    visitarObjetoB(objeto: ObjetoB): void
    visitarObjetoC(objeto: ObjetoC): void
}