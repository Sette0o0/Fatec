"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const cliente_1 = __importDefault(require("../modelo/cliente"));
const marketing_1 = __importDefault(require("../modelo/marketing"));
const pagamento_1 = __importDefault(require("../modelo/pagamento"));
class CadastroCliente {
    constructor() {
        this.entrada = new entrada_1.default();
    }
    cadastrar(empresa) {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let cliente = new cliente_1.default();
        cliente.nome = nome;
        let rodando = true;
        while (rodando) {
            console.log(`Opções:`);
            const assinantes = empresa.obterAssinantes;
            console.log(assinantes);
            console.log("0 - Informar todos");
            console.log(`1 - Informar Marketing`);
            console.log(`2 - Informar Financeiro`);
            let entrada = new entrada_1.default();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
            switch (opcao) {
                case 0:
                    empresa.adicionarCliente = cliente;
                    rodando = false;
                    break;
                case 1:
                    const semMarketing = assinantes.filter(a => !(a instanceof marketing_1.default));
                    semMarketing.forEach((assinante) => {
                        empresa.excluirAssinante(assinante);
                    });
                    empresa.adicionarCliente = cliente;
                    semMarketing.forEach((assinante) => {
                        empresa.incluirAssinante(assinante);
                    });
                    rodando = false;
                    break;
                case 2:
                    const semFinanceiro = assinantes.filter(a => !(a instanceof pagamento_1.default));
                    semFinanceiro.forEach((assinante) => {
                        empresa.excluirAssinante(assinante);
                    });
                    empresa.adicionarCliente = cliente;
                    semFinanceiro.forEach((assinante) => {
                        empresa.incluirAssinante(assinante);
                    });
                    rodando = false;
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
        }
        console.log(`\nCadastro concluído :)\n`);
    }
}
exports.default = CadastroCliente;
