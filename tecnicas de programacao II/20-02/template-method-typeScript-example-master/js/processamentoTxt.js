"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processamento_1 = __importDefault(require("./processamento"));
class ProcessamentoTxt extends processamento_1.default {
    separarDados() {
        let dados = this.arquivo.split("\n");
        let nome = dados[0].split(' = ')[1];
        let valor = dados[1].split(' = ')[1];
        let desconto = dados[2].split(' = ')[1];
        let quantidadeParcelas = dados[3].split(' = ')[1];
        this.dadosSeparados = [nome, valor, desconto, quantidadeParcelas];
    }
}
exports.default = ProcessamentoTxt;
