"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const cliente_1 = __importDefault(require("./cliente"));
const estrategiaA_1 = __importDefault(require("./estrategiaA"));
const estrategiaB_1 = __importDefault(require("./estrategiaB"));
const estrategiaC_1 = __importDefault(require("./estrategiaC"));
const estrategiaD_1 = __importDefault(require("./estrategiaD"));
console.log(`Padrão strategy (estratégia)`);
let prompt = (0, prompt_sync_1.default)();
let opcao;
let execucao = true;
let cliente = new cliente_1.default();
let estrategia;
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Estrategia A`);
    console.log(`2 - Estrategia B`);
    console.log(`3 - Estrategia C`);
    console.log(`4 - Estrategia D`);
    console.log(`0 - Sair`);
    opcao = prompt(`escolha uma das opções: `);
    switch (opcao) {
        case '1':
            estrategia = new estrategiaA_1.default();
            cliente.processarEstrategia = estrategia;
            break;
        case '2':
            estrategia = new estrategiaB_1.default();
            cliente.processarEstrategia = estrategia;
            break;
        case '3':
            estrategia = new estrategiaC_1.default();
            cliente.processarEstrategia = estrategia;
            break;
        case '4':
            estrategia = new estrategiaD_1.default();
            cliente.processarEstrategia = estrategia;
            break;
        case '0':
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
