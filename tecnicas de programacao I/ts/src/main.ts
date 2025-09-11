// import Empresa from "./empresa";
// import Detalhador from "./detalhador";

// let emp = new Empresa("Ota")

// let dtl = new Detalhador

// dtl.detalharEmpresa(emp)

let mensagem = (informacao: string | number): string => {
    if (typeof informacao === 'string'){
        return `informação recebida: ${informacao.toUpperCase()}`
    }
    else{
        return `informação recebida: ${informacao}`
    }
}

// console.log(mensagem("Olá"))
// console.log(mensagem(123))

type Telefone = {
    ddd:string
    numero:string
}

// let mensagem = (informacao: Telefone): string => {
//     return `ddd: ${informacao.ddd} numero: ${informacao.numero}`
// }


let cel: Telefone = {
    ddd: '12',
    numero: '988277579'
}

console.log(mensagem(1234))