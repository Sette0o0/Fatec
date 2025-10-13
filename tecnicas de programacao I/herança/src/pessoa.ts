export default abstract class Pessoa{
    protected nome: string

    constructor(nome: string){
        this.nome = nome
    }

    qualquer(){
        return 'Algo'
    }

    abstract dados(): string
}
