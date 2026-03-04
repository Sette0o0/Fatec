"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objeto_1 = __importDefault(require("./objeto"));
let obj1 = new objeto_1.default();
obj1.atributo1 = "arroz";
obj1.atributo2 = "feijão";
let clone1 = obj1.clonar();
console.log(clone1.atributo1);
console.log(obj1 === clone1);
