"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class TresNumeros {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    obterEntradas() {
        let numero1 = this.prompt(`Por favor, insira o numero 1: `);
        let numero2 = this.prompt(`Por favor, insira o numero 2: `);
        let numero3 = this.prompt(`Por favor, insira o numero 3: `);
        let numeros = [
            Number.parseFloat(numero1),
            Number.parseFloat(numero2),
            Number.parseFloat(numero3)
        ];
        return numeros;
    }
}
exports.default = TresNumeros;
