class Empresa{
    static telefone
    #cnpj;
    constructor(nomeSocial, nomeFantasia, cnpj){
        this.nomeSocial = nomeSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
    }

    get getCnpj(){
        return this.#cnpj;
    }

    #colocarMaiusculo(texto){
        return texto.toUpperCase();
    }
    mostrarDetalhes(){
        console.log(`Nome Social: ${this.#colocarMaiusculo(this.nomeSocial)} Nome Fantasia: ${this.#colocarMaiusculo(this.nomeFantasia)} CNPJ: ${this.#cnpj} Telefone: ${Empresa.telefone}`);
    }
}
Empresa.telefone = '(11) 4002-8922';

let emp = new Empresa('IFood Soluções em Tecnologia LTDA', 'IFood', '12.345.678/0001-90');
console.log(emp.nomeSocial);
console.log(emp.nomeFantasia);
console.log(emp.getCnpj);

emp.mostrarDetalhes();