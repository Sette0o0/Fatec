import { PrismaClient, Usuario } from "@prisma/client"

const prisma = new PrismaClient()

const cadastrarMentor = async (mentor: Usuario) => {

    let resultado = await prisma.usuario.create({
        data: {
            nome: mentor.nome,
            tipo: "MENTOR"
        }
    })

    console.log(`--------------------------------------`)
    console.log(`Mentor cadastrado:`)
    console.log(`Nome: ${resultado.nome}, Tipo: ${resultado.tipo}`)
    console.log(`--------------------------------------\n`)
}

const cadastrarMentoradoMentor = async (mentorado: Usuario, mentorId: number) => {

    let resultado = await prisma.usuario.create({
        data: {
            nome: mentorado.nome,
            tipo: "MENTORADO",
            mentor: {
                connect: {
                    id: mentorId
                }
            }
        },
        include: {
            mentor: true
        }
    })

    console.log(`--------------------------------------`)
    console.log(`Mentorado cadastrado:`)
    console.log(`Nome: ${resultado.nome}, Tipo: ${resultado.tipo}`)
    if (resultado.mentor) {
        console.log("Mentor vinculado:")
        console.log(`Nome: ${resultado.mentor.nome}, Tipo: ${resultado.mentor.tipo}`)
    }
    console.log(`--------------------------------------\n`)
}

const cadastrarMentoradoEMentor = async (mentorado: Usuario, mentor: Usuario) => {

    let resultado = await prisma.usuario.create({
        data: {
            nome: mentorado.nome,
            tipo: "MENTORADO",
            mentor: {
                create: {
                    nome: mentor.nome,
                    tipo: "MENTOR"
                }
            }
        },
        include: {
            mentor: true
        }
    })

    console.log(`--------------------------------------`)
    console.log(`Mentorado cadastrado:`)
    console.log(`Nome: ${resultado.nome}, Tipo: ${resultado.tipo}`)
    if (resultado.mentor) {
        console.log("Mentor vinculado:")
        console.log(`Nome: ${resultado.mentor.nome}, Tipo: ${resultado.mentor.tipo}`)
    }
    console.log(`--------------------------------------\n`)
}

const excluirMentor = async (mentorId: number) => {

    let resultado = await prisma.usuario.delete({
        where: {
            id: mentorId
        },
        include: {
            mentorado: true
        }
    })

    console.log(`--------------------------------------`)
    console.log(`Mentor excluído:`)
    console.log(`Nome: ${resultado.nome}, Tipo: ${resultado.tipo}`)
    if (resultado.mentorado) {
        console.log(`Mentorado associado:`)
        console.log(`Nome: ${resultado.mentorado.nome}, Tipo: ${resultado.mentorado.tipo}`)
    }
    console.log(`--------------------------------------\n`)
}

export {
    cadastrarMentor,
    cadastrarMentoradoMentor,
    cadastrarMentoradoEMentor,
    excluirMentor
}