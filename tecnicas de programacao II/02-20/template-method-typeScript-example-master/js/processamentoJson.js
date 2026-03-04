"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processamento_1 = __importDefault(require("./processamento"));
class ProcessamentoJson extends processamento_1.default {
    separarDados() {
        let dados = JSON.parse(this.arquivo);
        let nome = dados['nomeProduto'];
        let valor = dados['valorProduto'];
        let desconto = dados['valorDesconto'];
        let quantidadeParcelas = dados['quantidadeParcelas'];
        this.dadosSeparados = [nome, valor, desconto, quantidadeParcelas];
    }
}
exports.default = ProcessamentoJson;
