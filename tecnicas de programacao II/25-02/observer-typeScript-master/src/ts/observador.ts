import Assinante from "./assinante"
import Observado from "./observado"
import publicador from "./publicador"

export default class Observador implements Assinante {
    private nome: string

    constructor(nome: string) {
        this.nome = nome
    }
    atualizar(publicador: publicador): void {
        let objeto = publicador as Observado
        console.log(`-----------------------------------------------------------------------------------`)
        console.log(`Sou o observador ${this.nome} e recebi uma atualização do objeto ${objeto.obterNome}`)
        console.log(`Os dados modificados foram: ${objeto.obterDados}`)
    }
}

