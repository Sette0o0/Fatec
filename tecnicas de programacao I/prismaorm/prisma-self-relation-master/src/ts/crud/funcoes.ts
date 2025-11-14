import { Funcionario, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const cadastrarSupervisor = async (funcionario: Funcionario) => {

    let resultado = await prisma.funcionario.create({
        data: {
            nome: funcionario.nome,
            cargo: "Supervisor"
        },
        include: {
            subordinados: true
        }
    })

    console.log(`--------------------------------------`)
    console.log(`Supervisor cadastrado:`)
    console.log(`Nome: ${resultado.nome}, Cargo: ${resultado.cargo}`)
    if (resultado.subordinados.length > 0) {
        console.log(`Subordinados:`)
        resultado.subordinados.forEach(subordinado => {
            console.log(`Nome: ${subordinado.nome}, Cargo: ${subordinado.cargo}`)
        })
    }
    console.log(`--------------------------------------\n`)
}

const cadastrarSubordinado = async (funcionario: Funcionario) => {

    let resultado = await prisma.funcionario.create({
        data: {
            nome: funcionario.nome,
            cargo: "Subordinado"
        },
        include: {
            supervisor: true
        }
    })

    console.log(`--------------------------------------`)
    console.log(`Subordinado cadastrado:`)
    console.log(`Nome: ${resultado.nome}, Cargo: ${resultado.cargo}`)
    if (resultado.supervisor) {
        console.log(`Supervisor:`)
        console.log(`Nome: ${resultado.supervisor.nome}, Cargo: ${resultado.supervisor.cargo}`)
    }
    console.log(`--------------------------------------\n`)
}

const cadastrarSubordinadoSupervisor = async (funcionario: Funcionario, supervisorId) => {

    let resultado = await prisma.funcionario.create({
        data: {
            nome: funcionario.nome,
            cargo: "Subordinado",
            supervisor: {
                connect: {
                    id: supervisorId
                }
            }
        },
        include: {
            supervisor: true
        }
    })

    console.log(`--------------------------------------`)
    console.log(`Subordinado cadastrado:`)
    console.log(`Nome: ${resultado.nome}, Cargo: ${resultado.cargo}`)
    if (resultado.supervisor) {
        console.log(`Supervisor:`)
        console.log(`Nome: ${resultado.supervisor.nome}, Cargo: ${resultado.supervisor.cargo}`)
    }
    console.log(`--------------------------------------\n`)
}

const obterFuncionarioPorId = async (funcionarioId: number) => {
    let resultado = await prisma.funcionario.findUnique({
        where: {
            id: funcionarioId
        },
        include: {
            subordinados: true,
            supervisor: true
        }
    })

    if (resultado) {
        console.log(`--------------------------------------`)
        console.log(`Funcionario obtido:`)
        console.log(`Nome: ${resultado.nome}, Cargo: ${resultado.cargo}`)
        if (resultado.subordinados.length > 0) {
            console.log(`Subordinados obtidos:`)
            resultado.subordinados.forEach(subordinado => {
                console.log(`Nome: ${subordinado.nome}, Cargo: ${subordinado.cargo}`)
            })
        }
        console.log(`--------------------------------------\n`)
    } else {
        console.log(`--------------------------------------`)
        console.log(`Funcionario não encontrado`)
        console.log(`--------------------------------------\n`)
    }
}

const vincularSubordinadoSupervisor = async (subordinadoId: number, supervisorId: number) => {
    let resultado = await prisma.funcionario.update({
        where: {
            id: subordinadoId
        },
        data: {
            supervisorId: supervisorId
            /*supervisor:{
                connect:{
                    id: supervisorId
                }
            }*/
        },
        include: {
            supervisor: true
        }
    })

    if (resultado) {
        console.log(`--------------------------------------`)
        console.log(`Subordinado vinculado:`)
        console.log(`Nome: ${resultado.nome}, Cargo: ${resultado.cargo}`)
        if (resultado.supervisor) {
            console.log(`Supervisor vinculado:`)
            console.log(`Nome: ${resultado.supervisor.nome}, Cargo: ${resultado.supervisor.cargo}`)
        }
        console.log(`--------------------------------------\n`)
    }
}

const excluirSubordinadoPorId = async (subordinadoId: number) => {
    let resultado = await prisma.funcionario.delete({
        where: {
            id: subordinadoId
        },
        include: {
            supervisor: true
        }
    })

    if (resultado) {
        console.log(`--------------------------------------`)
        console.log(`Subordinado excluído:`)
        console.log(`Nome: ${resultado.nome}, Cargo: ${resultado.cargo}`)
        if (resultado.supervisor) {
            console.log(`Supervisor que estava vinculado:`)
            console.log(`Nome: ${resultado.supervisor.nome}, Cargo: ${resultado.supervisor.cargo}`)
        }
        console.log(`--------------------------------------\n`)
    }
}

export {
    cadastrarSupervisor,
    cadastrarSubordinado,
    obterFuncionarioPorId,
    vincularSubordinadoSupervisor,
    cadastrarSubordinadoSupervisor,
    excluirSubordinadoPorId
}