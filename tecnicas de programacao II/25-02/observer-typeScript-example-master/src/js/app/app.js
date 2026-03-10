"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const marketing_1 = __importDefault(require("../modelo/marketing"));
const pagamento_1 = __importDefault(require("../modelo/pagamento"));
const cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
const listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
console.log(`Bem-vindo ao cadastro de clientes da empresa`);
let empresa = new empresa_1.default();
let marketing = new marketing_1.default();
let pagamento = new pagamento_1.default();
empresa.incluirAssinante(marketing);
empresa.incluirAssinante(pagamento);
let execucao = true;
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`0 - Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    switch (opcao) {
        case 1:
            let cadastro = new cadastroCliente_1.default();
            cadastro.cadastrar(empresa);
            break;
        case 2:
            let listagem = new listagemClientes_1.default(empresa.obterClientes);
            listagem.listar();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
