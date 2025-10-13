import Pessoa from "./pessoa";

export default class Aluno extends Pessoa{
    private matricula: string
    constructor(nome: string, matricula: string){
        super(nome)
        this.matricula = matricula
    }

    pegarMatricula(){
        return `Matricula: ${this.matricula}`
    }

    dados(): string{
        return `Nome: ${this.nome} Matricula ${this.matricula} Qq: ${this.qualquer()}`
    }
}