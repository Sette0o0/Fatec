var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());
var CalculadorPreco = /** @class */ (function () {
    function CalculadorPreco() {
    }
    return CalculadorPreco;
}());
var CalculadorPrecoDescontoDinheiro = /** @class */ (function (_super) {
    __extends(CalculadorPrecoDescontoDinheiro, _super);
    function CalculadorPrecoDescontoDinheiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculadorPrecoDescontoDinheiro.prototype.calcularPreco = function (valor) {
        return this.produto.preco - valor;
    };
    return CalculadorPrecoDescontoDinheiro;
}(CalculadorPreco));
var CalculadorPrecoDescontoPorcentagem = /** @class */ (function (_super) {
    __extends(CalculadorPrecoDescontoPorcentagem, _super);
    function CalculadorPrecoDescontoPorcentagem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculadorPrecoDescontoPorcentagem.prototype.calcularPreco = function (desconto) {
        var preco = this.produto.preco;
        return preco - (preco * (desconto / 100));
    };
    return CalculadorPrecoDescontoPorcentagem;
}(CalculadorPreco));
