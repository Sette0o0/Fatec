"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const doisnumeros_1 = __importDefault(require("../classe/doisnumeros"));
const hipotenusa_1 = __importDefault(require("../classe/hipotenusa"));
const soma_1 = __importDefault(require("../classe/soma"));
const subtracao_1 = __importDefault(require("../classe/subtracao"));
const processador_1 = __importDefault(require("./processador"));
const multiplicacao_1 = __importDefault(require("../classe/multiplicacao"));
const divisao_1 = __importDefault(require("../classe/divisao"));
console.log(`Bem vindo a calculadora "estratégica"`);
let prompt = (0, prompt_sync_1.default)();
let execucao = true;
let processador = new processador_1.default();
while (execucao) {
    console.log(`Por favor, escolha um dos cálculos:`);
    console.log(`1 - soma`);
    console.log(`2 - subtração`);
    console.log(`3 - multiplicação`);
    console.log(`4 - divisão`);
    console.log(`5 - hipotenusa`);
    console.log(`0 - sair`);
    let opcao = prompt(`Qual opção você deseja: `);
    let resultado = undefined;
    switch (opcao) {
        case '1':
            resultado = processador.processar(new soma_1.default(), new doisnumeros_1.default());
            console.log(`Resultado: ${resultado}`);
            break;
        case '2':
            resultado = processador.processar(new subtracao_1.default(), new doisnumeros_1.default());
            console.log(`Resultado: ${resultado}`);
            break;
        case '3':
            resultado = processador.processar(new multiplicacao_1.default(), new doisnumeros_1.default());
            console.log(`Resultado: ${resultado}`);
            break;
        case '4':
            resultado = processador.processar(new divisao_1.default(), new doisnumeros_1.default());
            console.log(`Resultado: ${resultado}`);
            break;
        case '5':
            resultado = processador.processar(new hipotenusa_1.default(), new doisnumeros_1.default());
            console.log(`Resultado: ${resultado}`);
            break;
        case '0':
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
