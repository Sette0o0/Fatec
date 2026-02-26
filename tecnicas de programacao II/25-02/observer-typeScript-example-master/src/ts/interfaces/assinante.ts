import Publicador from "./publicador";

export default interface Assinante {
    atualizar(publicador: Publicador): void
}

