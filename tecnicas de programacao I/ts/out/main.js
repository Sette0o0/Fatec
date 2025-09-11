"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var empresa_1 = __importDefault(require("./empresa"));
var detalhador_1 = __importDefault(require("./detalhador"));
var emp = new empresa_1.default("Ota");
var dtl = new detalhador_1.default;
dtl.detalharEmpresa(emp);
