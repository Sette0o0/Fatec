import Cliente from "../modelo/cliente";

export default class ListagemClientes{
    private clientes: Cliente[]
    constructor(clientes: Cliente[]) {
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}