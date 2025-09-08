class Empresa{
    nome
    razaoSocial
    constructor(nome, razaoSocial){
        this.nome = nome
        this.razaoSocial = razaoSocial
    }

    descricao(){
        return `Nome: ${this.nome} \nRazão Social: ${this.razaoSocial}`
    }

    get obterNome(){
        return this.nome
    }

    get obterRazaoSocial(){
        return this.razaoSocial
    }

    set mudarNome(novoNome){
        if (novoNome.length < 3){
            console.log('Nome muito curto')
            return
        }
        this.nome = novoNome
    }

    set mudarRazaoSocial(novaRazaoSocial){
        this.razaoSocial = novaRazaoSocial
    }
}

let empresa = new Empresa('Mercado Online', 'ABC LTDA')
let empresa2 = new Empresa('Loja Virtual', 'XYZ EIRELI')

console.log(empresa2.descricao())

console.log(empresa.obterNome)

empresa.mudarNome = 'Loja'

console.log(empresa.obterNome)

class PessoaGeral{
    constructor(nome){
        this.nome = nome
    }

    get getNome(){
        return this.nome
    }

    set setNome(novoNome){
        this.nome = novoNome
    }

    get detalhe(){
        return `Nome: ${this.nome}`
    }
}

let pessoaG = new PessoaGeral('João')
console.log(pessoaG.getNome)

class PessoaJuridica extends PessoaGeral{
    constructor(nome, cnpj){
        super(nome)
        this.cnpj = cnpj
    }

    get getCnpj(){
        return this.cnpj
    }

    set setCnpj(novoCnpj){
        this.cnpj = novoCnpj
    }

    get detalhe(){
        return `${super.detalhe} \nCNPJ: ${this.cnpj}`
    }
}

let pessoaJ = new PessoaJuridica('Empresa X', '12.345.678/0001-99')
// console.log(pessoaJ.getNome)
// console.log(pessoaJ.getCnpj)
console.log(pessoaJ.detalhe)

pessoaJ.setNome = 'Empresa Y'
pessoaJ.setCnpj = '98.765.432/0001-11'

console.log(pessoaJ.detalhe)

class Veiculo{
    nome
    ano
    cor
    constructor(nome, ano, cor){
        this.nome = nome
        this.ano = ano
        this.cor = cor
    }

    get getNome(){
        return this.nome
    }

    get getAno(){
        return this.ano
    }

    get getCor(){
        return this.cor
    }

    set setNome(novoNome){
        this.nome = novoNome
    }
    
    set setAno(novoAno){
        this.ano = novoAno
    }

    set setCor(novaCor){
        this.cor = novaCor
    }
}

class VTerrestre extends Veiculo{
    ambienteDeLocomocao
    constructor(nome, ano, cor, ambienteDeLocomocao){
        super(nome, ano, cor)
        this.ambienteDeLocomocao = ambienteDeLocomocao
    }

    get getAmbienteDeLocomocao(){
        return this.ambienteDeLocomocao
    }

    set setAmbienteDeLocomocao(novoAmbiente){
        this.ambienteDeLocomocao = novoAmbiente
    }

    descricao(){
        return `Nome: ${this.nome} \nAno: ${this.ano} \nCor: ${this.cor} \nAmbiente de Locomoção: ${this.ambienteDeLocomocao}`
    }
}

let veiculo1 = new VTerrestre('Carro', 2020, 'Vermelho', 'Terrestre')
console.log(veiculo1.descricao())