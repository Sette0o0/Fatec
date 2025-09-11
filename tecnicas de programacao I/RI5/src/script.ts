import Descritor from "./descritorEmpresa";
import Empresa from "./empresa";
import Funcionario from "./funcionario";
import Endereco from "./endereco";
import Telefone from "./telefone";

let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo')
let telefone = new Telefone('11', '9-8827-7579')

let funcionario = new Funcionario('Viúva Negra', '123456789', '312.123.213-32', endereco, telefone)

let funcionarios = [funcionario]
let telefones = [telefone]

let empresa = new Empresa('abx', 'coisa', '123-321-321-442-21', endereco, telefones, funcionarios)

let descritor = new Descritor
descritor.descrever(empresa)