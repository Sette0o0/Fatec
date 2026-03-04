"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exemplo1 {
    constructor() { }
    static obterInstancia() {
        if (!Exemplo1.instanciaUnica) {
            this.instanciaUnica = new Exemplo1();
        }
        return this.instanciaUnica;
    }
}
exports.default = Exemplo1;
