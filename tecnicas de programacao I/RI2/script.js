function Telefone(ddd, numero){
    this.ddd = ddd;
    this.numero = numero;

    this.getDDD = function() {
        return this.ddd;
    }
    this.getNumero = function() {
        return this.numero;
    }
    this.setDDD = function(ddd) {
        this.ddd = ddd;
    }
    this.setNumero = function(numero) {
        this.numero = numero;
    }
}

function Endereco(estado, cidade, rua, numeroCasa){
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numeroCasa = numeroCasa;

    this.getEndereco = function() {
        return `${this.rua}, ${this.numero} - ${this.cidade} - ${this.estado}`;
    }
    this.getEstado = function() {
        return this.estado;
    }
    this.getCidade = function() {
        return this.cidade;
    }
    this.getRua = function() {
        return this.rua;
    }
    this.getNumeroCasa = function() {
        return this.numeroCasa;
    }
    this.setEstado = function(estado) {
        this.estado = estado;
    }
    this.setCidade = function(cidade) {
        this.cidade = cidade;
    }
    this.setRua = function(rua) {
        this.rua = rua;
    }
    this.setNumeroCasa = function(numero) {
        this.numero = numeroCasa;
    }
}

function Cliente(nome, telefoneCelular, email, endereco){
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;


    this.getNomeUp = function() {
        return this.nome.toUpperCase();
    }
    this.getNome = function() {
        return this.nome;
    }
    this.getNomeLower = function() {
        return this.nome.toLowerCase();
    }
    this.getEmailUp = function() {
        return this.email.toUpperCase();
    }
    this.getEmail = function() {
        return this.email;
    }
    this.getEmailLower = function() {
        return this.email.toLowerCase();
    }

    this.setNome = function(nome) {
        this.nome = nome;
    }
    this.setEmail = function(email) {
        this.email = email;
    }

    this.descricao = `
-------------------------
Informaçoes do Cliente:
Nome: ${this.getNome()}
-------------------------
Telefone:
DDD: ${this.telefoneCelular.getDDD()}
Número: ${this.telefoneCelular.getNumero()}
-------------------------
Endereço:
Rua: ${this.endereco.getRua()}
Número: ${this.endereco.getNumeroCasa()}
Cidade: ${this.endereco.getCidade()}
Estado: ${this.endereco.getEstado()}
-------------------------`;
}

let telefone = new Telefone('11', '999999999');
let endereco = new Endereco('SP', 'São Paulo', 'Rua A', '123');
let cliente = new Cliente('João Silva', telefone, 'joao.silva.narutin@gmail.com', endereco);

console.log(cliente.descricao);

let cliente2 = new Cliente('Maria Souza', telefone, 'maria.souza.ino@gmail.com', endereco);

let cliente3 = new Cliente('Pedro Oliveira', telefone, 'pedro.oliveira.sasukezin@gmail.com', endereco);

let cliente4 = new Cliente('Ana Costa', telefone, 'ana.costa.hinatinha@gmail.com', endereco);


let clientes = [cliente, cliente2, cliente3, cliente4];

for (let i = 0; i < clientes.length; i++) {
    console.log(clientes[i].getNome());
}

console.log('------------------------')

let clientesOrdenados = [cliente, cliente2, cliente3, cliente4].sort((a, b) => a.getNomeLower().localeCompare(b.getNomeLower()));

for (let i = 0; i < clientesOrdenados.length; i++) {
    console.log(clientesOrdenados[i].getNome());
}
