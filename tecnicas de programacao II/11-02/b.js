var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());
var calculadorPreco = function (produto, taxa) {
    return produto.preco * taxa;
};
var descritor = function (produto) {
    return "Nome: ".concat(produto.nome, "\n").concat(produto.lote);
};
