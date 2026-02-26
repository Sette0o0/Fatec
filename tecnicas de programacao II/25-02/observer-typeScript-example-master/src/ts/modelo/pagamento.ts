import Assinante from "../interfaces/assinante";
import Publicador from "../interfaces/publicador";
import Empresa from "./empresa";

export default class Pagamento implements Assinante {
    atualizar(publicador: Publicador): void {
        let empresa = publicador as Empresa
        let clientes = empresa.obterClientes
        let cliente = clientes[clientes.length - 1]
        console.log(`O pagamento do cliente ${cliente.nome} foi aprovado na base de dados da empresa`)
        console.log(`Iniciar o processo de envio para o cliente ${cliente.nome}`)
    }
}