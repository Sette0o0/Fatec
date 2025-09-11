import Empresa from "./empresa"

export default class Descritor{
    public descrever(empresa: Empresa){
        let txt = `
Razão Social: ${empresa.razaoSocial}
Nome Fantasia: ${empresa.nomeFantasia}
cnpj: ${empresa.cnpj}
Endereço
Rua: ${empresa.endereco.rua}, Bairro: ${empresa.endereco.bairro}, Cidade: ${empresa.endereco.cidade}, Número: ${empresa.endereco.numero}

Funcionarios:
`
        empresa.funcionarios.forEach((func) => {
            txt += `Nome: ${func.nome}
Matricula: ${func.matricula}
CPF: ${func.cpf}
Rua: ${func.endereco.rua}, Bairro: ${func.endereco.bairro}, Cidade: ${func.endereco.cidade}, Número: ${func.endereco.numero}

`
        })
        console.log(txt)
    }
}