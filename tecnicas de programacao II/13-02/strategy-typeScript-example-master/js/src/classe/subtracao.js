"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subtracao {
    calcular(valores) {
        let subtracao = valores[0];
        for (let index = 1; index < valores.length; index++) {
            subtracao = subtracao - valores[index];
        }
        return subtracao;
    }
}
exports.default = Subtracao;
