import Assinante from "./assinante";
import Publicador from "./publicador";

export default class Observado implements Publicador {
    private nome: string
    private dados!: string[]
    private assinantes: Assinante[] = []
    constructor(nome: string){
        this.nome = nome
    }
    public get obterDados(){
        return this.dados
    }
    public get obterNome(){
        return this.nome
    }

    public set inserirDados(dados: string[]) {
        this.dados = dados
        this.notificar()
    }
    incluirAssinante(assinante: Assinante): void {
        this.assinantes.push(assinante)
    }
    excluirAssinante(assinante: Assinante): void {
        let indice = this.assinantes.indexOf(assinante)
        this.assinantes.splice(indice, 1)
    }
    notificar(): void {
        for (const assinante of this.assinantes) {
            assinante.atualizar(this)
        }
    }
}