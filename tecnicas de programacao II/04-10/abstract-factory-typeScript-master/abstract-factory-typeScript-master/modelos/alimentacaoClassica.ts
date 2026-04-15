import Alimentacao from "../interfaces/alimentacao";

export default class AlimentacaoClassica implements Alimentacao {
    private nome: string
    private descricao: string
    private recomendacao = `Recomenda-se para eventos noturnos abertos ou fechados.
    A melhor estação para este tipo de comida é o inverno.`
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