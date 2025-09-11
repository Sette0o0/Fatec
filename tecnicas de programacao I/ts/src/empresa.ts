export default class Empresa {
    private nome: string
    constructor(nome: string){
        this.nome = nome
    }
    public getNome(): string {
        return this.nome
    }
}