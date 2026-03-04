"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exemplo2 {
    constructor() { }
    static obterInstancia() {
        return this.instanciaUnica;
    }
}
Exemplo2.instanciaUnica = new Exemplo2();
exports.default = Exemplo2;
