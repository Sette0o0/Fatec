"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListagemClientes {
    constructor(clientes) {
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemClientes;
