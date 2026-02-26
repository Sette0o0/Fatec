import Assinante from "./assinante";

export default interface Publicador {
    incluirAssinante(assinante: Assinante): void
    excluirAssinante(assinante: Assinante): void
    notificar(): void
}

