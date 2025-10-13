import Pessoa from "./pessoa"

export default class Professor extends Pessoa{
    private raiva: boolean
    constructor(nome: string, raiva: boolean){
        super(nome)
        this.raiva = raiva
    }

    dados(){
        return `Nome: ${this.nome} Raiva: ${this.raiva}`
    }
}