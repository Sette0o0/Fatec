import MostrarDados from './mostradorDados'
import Aluno from './aluno'
import Professor from './professor'

let msd = new MostrarDados()

// let ps = new Pessoa(`Joelma`)
let al = new Aluno(`Pedro`, `MI6-#123`)
let pr = new Professor(`Masanori`, false)

msd.mostrarDados(al)
msd.mostrarDados(pr)