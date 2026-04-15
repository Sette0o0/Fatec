import Musica from "../interfaces/musica";
import { GeneroMusical } from "./generoMusical";

export default class MusicaCountry implements Musica {
    private nome: string
    private autor: string
    private tempoDuracao: string
    private genero: GeneroMusical.Country;
    private anoLancamento: string;

    constructor(nome: string, autor: string, tempoDuracao: string, anoLancamento: string) {
        this.nome = nome
        this.autor = autor
        this.tempoDuracao = tempoDuracao
        this.anoLancamento = anoLancamento
    }

    public obterTempoDuracao(): string {
        return this.tempoDuracao
    }
    public obterNome(): string {
        return this.nome
    }
    public obterAutor(): string {
        return this.autor
    }
    public get obterGenero(): GeneroMusical {
        return this.genero;
    }
    public get obterAnoLancamento(): string {
        return this.anoLancamento;
    }
}