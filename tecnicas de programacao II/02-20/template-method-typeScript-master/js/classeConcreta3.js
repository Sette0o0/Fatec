"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classeTemplate_1 = __importDefault(require("./classeTemplate"));
class ClasseConcreta3 extends classeTemplate_1.default {
    etapa3() {
        console.log("Execução da etapa 3. Implementação realizada pela ClasseConcreta 3");
    }
    etapa4() {
        console.log("Execução da etapa 4. Implementação realizada pela ClasseConcreta 3");
    }
}
exports.default = ClasseConcreta3;
