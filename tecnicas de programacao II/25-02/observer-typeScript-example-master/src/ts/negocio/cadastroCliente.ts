import Assinante from "../interfaces/assinante";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";

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

            console.log("0 - Informar todos")  // -1
            // for (let i = 1; i > assinantes.length; i++){
            //     console.log(`${i} - ${assinantes[i - 1]}`)
            // }
            for (const assinante of assinantes){
                console.log(`${assinantes.indexOf(assinante) + 1} - ${assinante}`)
            }
        
            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            opcao--
        
            switch (opcao) {
                case 1:
                    empresa.adicionarCliente = cliente
                    break;
                case 2:
                    empresa.adicionarCliente = cliente
                    break;
                case 3:
                    empresa.adicionarCliente = cliente
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }

        console.log(`\nCadastro concluído :)\n`);
    }
}