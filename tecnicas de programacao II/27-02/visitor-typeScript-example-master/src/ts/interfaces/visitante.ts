import Elemento from "./elemento";

export default interface Visitante {
    visitar(elemento: Elemento): void
}

