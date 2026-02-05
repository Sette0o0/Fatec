import { Funcionario } from "@prisma/client"
import {
    cadastrarSubordinado,
    cadastrarSubordinadoSupervisor,
    cadastrarSupervisor,
    excluirSubordinadoPorId,
    obterFuncionarioPorId,
    vincularSubordinadoSupervisor
} from "./crud/funcoes";

const supervisor: Funcionario = {
    id: 0,
    nome: "Frank Sinatra",
    cargo: "Supervisor",
    supervisorId: null
}

const subordinado1: Funcionario = {
    id: 0,
    nome: "Roberto Carlos",
    cargo: "Subordinado",
    supervisorId: null
}

const subordinado2: Funcionario = {
    id: 0,
    nome: "Michael Jackson",
    cargo: "Subordinado",
    supervisorId: null
}

const subordinado3: Funcionario = {
    id: 0,
    nome: "Jorge Ben Jor",
    cargo: "Subordinado",
    supervisorId: null
}

setTimeout(async () => { cadastrarSupervisor(supervisor) }, 50);
setTimeout(async () => { cadastrarSubordinado(subordinado1) }, 200);

setTimeout(async () => { obterFuncionarioPorId(1) }, 500);
setTimeout(async () => { obterFuncionarioPorId(2) }, 500);

setTimeout(async () => { vincularSubordinadoSupervisor(2, 1) }, 700);
setTimeout(async () => { cadastrarSubordinadoSupervisor(subordinado2, 1) }, 1000);
setTimeout(async () => { cadastrarSubordinadoSupervisor(subordinado3, 1) }, 1000);

setTimeout(async () => { excluirSubordinadoPorId(2) }, 1000);
