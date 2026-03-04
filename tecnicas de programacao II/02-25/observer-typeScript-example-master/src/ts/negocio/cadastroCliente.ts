import Assinante from "../interfaces/assinante";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Marketing from "../modelo/marketing";
import Pagamento from "../modelo/pagamento";

export default class CadastroCliente {
    private entrada: Entrada = new Entrada()
    public cadastrar(empresa: Empresa): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let cliente = new Cliente();
        cliente.nome = nome

        let rodando = true
        while (rodando) {
            console.log(`Opções:`);

            const assinantes: Assinante[] = empresa.obterAssinantes

            console.log("0 - Informar todos")

            console.log(`1 - Informar Marketing`)
            console.log(`2 - Informar Financeiro`)
        
            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
        
            switch (opcao) {
                case 0:
                    empresa.adicionarCliente = cliente
                    rodando = false
                    break;
                case 1:
                    const semMarketing = assinantes.filter(a => !(a instanceof Marketing))
                    semMarketing.forEach((assinante) => {
                        empresa.excluirAssinante(assinante)
                    })

                    empresa.adicionarCliente = cliente

                    semMarketing.forEach((assinante) => {
                        empresa.incluirAssinante(assinante)
                    })

                    rodando = false
                    break;
                case 2:
                    const semFinanceiro = assinantes.filter(a => !(a instanceof Pagamento))

                    semFinanceiro.forEach((assinante) => {
                        empresa.excluirAssinante(assinante)
                    })

                    empresa.adicionarCliente = cliente
                    
                    semFinanceiro.forEach((assinante) => {
                        empresa.incluirAssinante(assinante)
                    })

                    rodando = false
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }

        console.log(`\nCadastro concluído :)\n`);
    }
}