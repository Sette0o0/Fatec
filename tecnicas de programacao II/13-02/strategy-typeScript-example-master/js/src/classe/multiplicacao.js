"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Multiplicacao {
    calcular(valores) {
        let soma = 1;
        valores.forEach(valor => {
            soma = soma * valor;
        });
        return soma;
    }
}
exports.default = Multiplicacao;
