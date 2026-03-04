"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const parcelador_1 = __importDefault(require("./parcelador"));
class Processamento {
    constructor(nomeArquivo) {
        this.nomeArquivo = nomeArquivo;
    }
    abriArquivo() {
        let diretorioExecucao = path_1.default.basename(__dirname);
        let caminhoAbsoluto = __dirname;
        let diretorioArquivos = caminhoAbsoluto.replace(diretorioExecucao, 'arquivos');
        let caminhoArquivo = path_1.default.join(diretorioArquivos, this.nomeArquivo);
        this.arquivo = (0, fs_1.readFileSync)(caminhoArquivo, 'ascii');
    }
    processarDados() {
        console.log(`Produto: ${this.dadosSeparados[0]}`);
        console.log(`Valor: ${this.dadosSeparados[1]}`);
        console.log(`Desconto: ${this.dadosSeparados[2]}`);
        console.log(`Parcelamento: ${this.dadosSeparados[3]}`);
        let valor = Number(this.dadosSeparados[1]);
        let desconto = Number(this.dadosSeparados[2]);
        valor = Number((valor - desconto).toFixed(2));
        console.log(`Valor com desconto: ${valor}`);
        let quantidadeParcelas = Number(this.dadosSeparados[3]);
        let parcelador = new parcelador_1.default(valor, quantidadeParcelas);
        let parcelas = parcelador.obterParcelas();
        console.log(`Valores das parcelas: ${parcelas}`);
    }
    fazerProcessamento() {
        this.abriArquivo();
        this.separarDados();
        this.processarDados();
    }
}
exports.default = Processamento;
