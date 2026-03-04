"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Objeto {
    clonar() {
        let objeto = new Objeto();
        objeto.atributo1 = this.atributo1;
        objeto.atributo2 = this.atributo2;
        return objeto;
    }
}
exports.default = Objeto;
