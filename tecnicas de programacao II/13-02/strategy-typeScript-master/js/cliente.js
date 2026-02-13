"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    set processarEstrategia(estrategia) {
        estrategia.processamento();
    }
}
exports.default = Cliente;
