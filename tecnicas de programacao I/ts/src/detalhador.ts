import Empresa from "./empresa";

export default class Detalhador {
    public detalharEmpresa(emp: Empresa) {
        console.log(`Nome: ${emp.getNome()}`)
    }
}