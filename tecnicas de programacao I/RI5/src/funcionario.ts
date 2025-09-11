import Telefone from "./telefone";
import Endereco from "./endereco";

export default class Funcionario{
    public nome: string
    public matricula: string
    public cpf: string
    public endereco: Endereco
    public telefone: Telefone

    constructor(nome: string, matricula: string, cpf: string, endereco: Endereco, telefone: Telefone){
        this.nome = nome
        this.matricula = matricula
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
    }
}