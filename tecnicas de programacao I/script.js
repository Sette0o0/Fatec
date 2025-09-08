// let idade = 80
// let nome = 'Steve Rogers'
// let capitao = {nome: 'Steve Rogers', idade: 80}
// console.log('Nome do personagem: ' + capitao.nome + ', Idade: ' + capitao.idade)

// function calcularPotencia(base, expoente) {
//     return base ** expoente
// }
// let resultado = calcularPotencia(2, 3)
// console.log('Resultado da potência: ' + resultado)

// let calcularPotencia = new Function('base, expoente', 'return base ** expoente')
// let resultado = calcularPotencia(2, 3)
// console.log('Resultado da potência: ' + resultado)

// const personagem = {
//     apelido: 'Capitão América',
//     nome: 'Steve Rogers',
//     habilidades: ['Força', 'Velocidade', 'Resistência'],
//     apresentar: function() {
//         return `Olá, eu sou ${this.apelido}, também conhecido como ${this.nome}. Tenho habilidades como: ${this.habilidades.join(', ')}.`;
//     }
// }
// console.log(personagem.apresentar())

// var soma = function(a, b) {
//     return a + b;
// }
// console.log('Resultado da soma: ' + soma(5, 3))

// var soma = (a, b) => {
//     return a + b;
// }

// let estrutura = new Map();
// estrutura.set(1, '123');
// estrutura.set('função', function() {
//     return 'Função dentro de Map';
// });
// console.log(estrutura.get(1));
// console.log(estrutura.get('função')());

// let estrutura2 = new Map();
// estrutura2.set('chave1', 'valor1');
// estrutura2.set('chave2', 'valor2');
// console.log('tamanho da estrutura: ' + estrutura2.size);
// console.log(estrutura2.keys());
// console.log(estrutura2.values());

// let estrutura3 = new Set()
// estrutura3.add(1)
// estrutura3.add(function() {
//     return 'Função dentro de Set'
// })
// estrutura3.add(1)
// console.log(estrutura3)
// console.log(estrutura3.size)

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lista2 = []
lista2.push(1)
lista2.push(2)
lista2.push(3)
lista2.push(4)
lista2.push(5)
lista2.push(6)
lista2.push(7)
lista2.push(8)
lista2.push(9)
lista2.push(10)
console.log(lista2[4])