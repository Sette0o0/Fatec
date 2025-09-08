// let obj1 = {
//     nome: 'Chuazineguer'
// }

// let obj2 = obj1

// obj2.nome = 'Joelma'

// console.log(obj1.nome);
// console.log(obj2.nome);

// let fprimitiva = (valor) => {
//     return valor += 100;
// }

// let valor = 50;

// console.log(`Valor: ${fprimitiva(valor)}`);
// console.log(`Valor: ${valor}`);

// let freferencia = (objeto) => {
//     objeto.valor += 100;
//     return objeto;
// }

// let fprimitiva = (valor) => {
//     return valor += 100;
// }

// let objeto = { valor: 50 };


// console.log(`Valor: ${fprimitiva(objeto.valor)}`);
// console.log(`Valor: ${objeto.valor}`);
// console.log(`Valor: ${freferencia(objeto).valor}`);

// const empresa = {
//     nome: 'IFood',
//     get pegarNome() {
//         return this.nome.toUpperCase();
//     }
// };

// empresa.razaoSocial = 'IFood Soluções em Tecnologia LTDA';
// console.log(empresa.razaoSocial);

// empresa.telefone = {ddd: "11", numero: "40028922"};

// console.log(empresa.telefone.ddd);
// console.log(empresa.telefone.numero);
// console.log(empresa);

// console.log(empresa.pegarNome);

// empresa.pegarNome = 'tentando alterar um getter';

// console.log(empresa.pegarNome);

function Empresa (nome, cnpj) {
    this.nome = nome;
    this.cnpj = cnpj;
    this.getNome = function() {
        return this.nome.toUpperCase();
    }
}
let obj = new Empresa('IFood', '12.345.678/0001-99');
let obj2 = new Empresa('Uber Eats', '98.765.432/0001-11');
let obj3 = new Empresa('Rappi', '11.222.333/0001-44');


console.log(obj, obj2, obj3);