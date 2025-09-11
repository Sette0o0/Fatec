"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Detalhador = /** @class */ (function () {
    function Detalhador() {
    }
    Detalhador.prototype.detalharEmpresa = function (emp) {
        console.log("Nome: ".concat(emp.getNome()));
    };
    return Detalhador;
}());
exports.default = Detalhador;
