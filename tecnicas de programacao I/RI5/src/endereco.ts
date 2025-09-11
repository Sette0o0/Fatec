export default class Endereco{
    public numero: number
    public rua: string
    public bairro: string
    public cidade: string

    constructor(numero: number, rua: string, bairro: string, cidade: string){
        this.numero = numero
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
    }
}