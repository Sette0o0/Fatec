"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hipotenusa {
    calcular(valores) {
        let hipotenusa = Math.sqrt(Math.pow(valores[0], 2) + Math.pow(valores[1], 2));
        return hipotenusa;
    }
}
exports.default = Hipotenusa;
