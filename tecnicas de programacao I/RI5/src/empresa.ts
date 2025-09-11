import Telefone from "./telefone";
import Endereco from "./endereco";
import Funcionario from "./funcionario";

export default class Empresa{
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public telefone: Telefone[]
    public funcionario: Funcionario[]

    constructor(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, telefone: Telefone[], funcionario: Funcionario[]){
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.endereco = endereco
        this.telefone = telefone
        this.funcionario = funcionario
    }
}