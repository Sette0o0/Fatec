import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Marketing from "../modelo/marketing";
import Pagamento from "../modelo/pagamento";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";

console.log(`Bem-vindo ao cadastro de clientes da empresa`)

let empresa = new Empresa()
let marketing = new Marketing()
let pagamento = new Pagamento()

empresa.incluirAssinante(marketing)
empresa.incluirAssinante(pagamento)

let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente()
            cadastro.cadastrar(empresa)
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.obterClientes)
            listagem.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}