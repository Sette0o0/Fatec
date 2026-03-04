import Assinante from "../interfaces/assinante";
import publicador from "../interfaces/publicador";
import Empresa from "./empresa";

export default class Marketing implements Assinante {
    atualizar(publicador: publicador): void {
        let empresa = publicador as Empresa
        let clientes = empresa.obterClientes
        let cliente = clientes[clientes.length - 1]
        console.log(`O cliente ${cliente.nome} foi adicionado na base de dados da empresa`)
        console.log(`Iniciar o atendimento de vendas para o cliente ${cliente.nome}`)
    }
}