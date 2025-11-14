import { Usuario } from "@prisma/client";
import { cadastrarMentor, cadastrarMentoradoEMentor, cadastrarMentoradoMentor, excluirMentor } from "./crud/funcoes";

const mentor1: Usuario = {
    id: 0,
    nome: "Aristóteles",
    tipo: "MENTOR",
    mentorId: null
}

const mentor2: Usuario = {
    id: 0,
    nome: "Friedrich Nietzsche",
    tipo: "MENTOR",
    mentorId: null
}

const mentorado1: Usuario = {
    id: 0,
    nome: "Platão",
    tipo: "MENTORADO",
    mentorId: null
}

const mentorado2: Usuario = {
    id: 0,
    nome: "Sócrates",
    tipo: "MENTORADO",
    mentorId: null
}

setTimeout(async () => { cadastrarMentor(mentor1) }, 10);

setTimeout(async () => { cadastrarMentoradoMentor(mentorado1, 1) }, 200);
setTimeout(async () => { cadastrarMentoradoEMentor(mentorado2, mentor2) }, 200);

setTimeout(async () => { excluirMentor(1) }, 1000);