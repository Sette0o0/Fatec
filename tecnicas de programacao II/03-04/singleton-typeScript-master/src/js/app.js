"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exemplo1_1 = __importDefault(require("./Exemplo1"));
const Exemplo2_1 = __importDefault(require("./Exemplo2"));
let obj1 = Exemplo1_1.default.obterInstancia();
let obj2 = Exemplo1_1.default.obterInstancia();
console.log(obj1 === obj2);
obj1 = Exemplo2_1.default.obterInstancia();
obj2 = Exemplo2_1.default.obterInstancia();
console.log(obj1 === obj2);
