"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processamentoTxt_1 = __importDefault(require("./processamentoTxt"));
let processamento = new processamentoTxt_1.default('./dados.txt');
processamento.fazerProcessamento();
