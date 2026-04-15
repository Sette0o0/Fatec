import Alimentacao from "../interfaces/alimentacao";

export default class AlimentacaoFesta implements Alimentacao {
    private nome: string
    private descricao: string
    private recomendacao = `Recomenda-se para eventos diarios (matutinos, vespertinos ou noturnos) abertos.
    A melhor estação para este tipo de comida é o verão.`
    constructor(nome: string, descricao: string) {
        this.nome = nome
        this.descricao = descricao
    }
    public obterDescricao(): string {
        return `Nome: ${this.nome}
        ${this.descricao}
        Recomendação: ${this.recomendacao}`
    }

    public get obterNome(): string {
        return this.nome
    }
}