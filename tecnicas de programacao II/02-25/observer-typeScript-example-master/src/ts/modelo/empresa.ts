import Assinante from "../interfaces/assinante"
import assinante from "../interfaces/assinante"
import Publicador from "../interfaces/publicador"
import Cliente from "./cliente"

export default class Empresa implements Publicador {
    private clientes: Cliente[] = []
    private assinantes: Assinante[] = []

    public set adicionarCliente(cliente: Cliente) {
        this.clientes.push(cliente)
        this.notificar()
    }
    public get obterClientes() {
        return this.clientes
    }
    incluirAssinante(assinante: assinante): void {
        this.assinantes.push(assinante)
    }
    excluirAssinante(assinante: assinante): void {
        let indice = this.assinantes.indexOf(assinante)
        this.assinantes.splice(indice, 1)
    }
    notificar(): void {
        for (const assinante of this.assinantes) {
            assinante.atualizar(this)
        }
    }
    public get obterAssinantes() {
        return this.assinantes
    }
}