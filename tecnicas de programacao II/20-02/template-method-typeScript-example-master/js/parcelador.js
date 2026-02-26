"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parcelador {
    constructor(valor, quantidadeParcelas) {
        this.valor = valor;
        this.quantidadeParcelas = quantidadeParcelas;
    }
    ajustarParcelas(valor, parcelas) {
        let somaParcelas = 0;
        for (let i = 0; i < parcelas.length; i++) {
            somaParcelas = somaParcelas + parcelas[i];
        }
        if (somaParcelas < valor || somaParcelas > valor) {
            let diferenca = valor - somaParcelas;
            let arredonamento = Number(diferenca.toFixed(2));
            parcelas[0] = Number((parcelas[0] + arredonamento).toFixed(2));
        }
        return parcelas;
    }
    obterParcelas() {
        let parcela = this.valor / this.quantidadeParcelas;
        parcela = Number(parcela.toFixed(2));
        let parcelas = [];
        for (let i = 0; i < this.quantidadeParcelas; i++) {
            parcelas[i] = parcela;
        }
        return this.ajustarParcelas(this.valor, parcelas);
    }
}
exports.default = Parcelador;
