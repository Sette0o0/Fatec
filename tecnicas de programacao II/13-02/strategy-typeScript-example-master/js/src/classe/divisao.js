"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Divisao {
    calcular(valores) {
        let divisao = valores[0];
        for (let index = 1; index < valores.length; index++) {
            divisao = divisao / valores[index];
        }
        return divisao;
    }
}
exports.default = Divisao;
