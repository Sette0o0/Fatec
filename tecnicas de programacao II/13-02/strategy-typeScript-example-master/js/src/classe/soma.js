"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Soma {
    calcular(valores) {
        let soma = 0;
        valores.forEach(valor => {
            soma = soma + valor;
        });
        return soma;
    }
}
exports.default = Soma;
