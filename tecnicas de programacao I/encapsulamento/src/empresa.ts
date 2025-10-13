class Empresa{
    public nome: string
    readonly cnpj: string
    constructor (nome: string, cnpj: string){
        this.nome = nome
        this.cnpj = cnpj
    }

}