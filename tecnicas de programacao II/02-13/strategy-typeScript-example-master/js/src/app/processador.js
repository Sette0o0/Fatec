"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Processador {
    processar(calculo, entrada) {
        let numeros = entrada.obterEntradas();
        let resultado = calculo.calcular(numeros);
        return resultado;
    }
}
exports.default = Processador;
