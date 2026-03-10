"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor() {
        this.clientes = [];
        this.assinantes = [];
    }
    set adicionarCliente(cliente) {
        this.clientes.push(cliente);
        this.notificar();
    }
    get obterClientes() {
        return this.clientes;
    }
    incluirAssinante(assinante) {
        this.assinantes.push(assinante);
    }
    excluirAssinante(assinante) {
        let indice = this.assinantes.indexOf(assinante);
        this.assinantes.splice(indice, 1);
    }
    notificar() {
        for (const assinante of this.assinantes) {
            assinante.atualizar(this);
        }
    }
    get obterAssinantes() {
        return this.assinantes;
    }
}
exports.default = Empresa;
