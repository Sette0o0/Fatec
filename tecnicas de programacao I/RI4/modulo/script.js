class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){    
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

class Cliente{
    #cpf;
    constructor(nome, cpf, endereco){
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    get getNomeUp(){
        return this.nome.toUpperCase();
    }
    get getNomeLower(){
        return this.nome.toLowerCase();
    }

    get getCpf(){
        return this.#cpf;
    }

    get getTelefones() {
        let lista = [];
        for (let tel of this.telefones){
            lista.push(tel.ddd.toString() + tel.numero.toString());
        }
        return lista;
    }

    addTelefone = function(telefone){
        this.telefones.add(telefone);
    }
}

class Empresa{
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get getNomeSocialUp(){
        return this.nomeSocial.toUpperCase();
    }
    get getNomeSocialLower(){
        return this.nomeSocial.toLowerCase();
    }
    
    get getNomeFantasiaUp(){
        return this.nomeFantasia.toUpperCase();
    }
    get getNomeFantasiaLower(){
        return this.nomeFantasia.toLowerCase();
    }

    get getCnpj(){
        return this.#cnpj;
    }

    get getClientes() {
        let lista = [];
        for (let cli of this.clientes) {
            lista.push(cli.nome);
        }
        return lista;
    }

    get getTelefones() {
        let lista = [];
        for (let tel of this.telefones){
            lista.push(tel.ddd.toString() + tel.numero.toString());
        }
        return lista;
    }

    addCliente = function(cliente){
        this.clientes.add(cliente);
    }

    addTelefone = function(telefone){
        this.telefones.add(telefone);
    }

    detalhes(){
        let desc = `Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
-----------------------------------
`;
        for (let cli of this.clientes){
            let clidesc = `Nome: ${cli.nome}
Estado: ${cli.endereco.estado}, Cidade: ${cli.endereco.cidade}, Rua: ${cli.endereco.rua}, Nº: ${cli.endereco.numero}
`;
            for (let tel of cli.telefones){
                clidesc += `ddd: ${tel.ddd}, Numero: ${tel.numero}
`;
            }
            clidesc += '\n';

            desc += clidesc;
            clidesc = '';
        }
        

        return desc
    }
}

export {Telefone, Endereco, Cliente, Empresa};