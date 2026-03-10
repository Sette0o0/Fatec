"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Marketing {
    atualizar(publicador) {
        let empresa = publicador;
        let clientes = empresa.obterClientes;
        let cliente = clientes[clientes.length - 1];
        console.log(`O cliente ${cliente.nome} foi adicionado na base de dados da empresa`);
        console.log(`Iniciar o atendimento de vendas para o cliente ${cliente.nome}`);
    }
}
exports.default = Marketing;
