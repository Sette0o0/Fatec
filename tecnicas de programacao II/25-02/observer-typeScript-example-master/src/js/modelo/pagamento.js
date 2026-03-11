"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamento {
    atualizar(publicador) {
        let empresa = publicador;
        let clientes = empresa.obterClientes;
        let cliente = clientes[clientes.length - 1];
        console.log(`O pagamento do cliente ${cliente.nome} foi aprovado na base de dados da empresa`);
        console.log(`Iniciar o processo de envio para o cliente ${cliente.nome}`);
    }
}
exports.default = Pagamento;
