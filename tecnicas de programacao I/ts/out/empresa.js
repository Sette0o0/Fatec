"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(nome) {
        this.nome = nome;
    }
    Empresa.prototype.getNome = function () {
        return this.nome;
    };
    return Empresa;
}());
exports.default = Empresa;
