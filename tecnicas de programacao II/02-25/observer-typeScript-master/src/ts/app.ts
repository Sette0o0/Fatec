import Observado from "./observado";
import Observador from "./observador";

let observado = new Observado('observado')
let noticia = new Observado('noticia')

let observador1 = new Observador('observador 1')
let observador2 = new Observador('observador 2')
let observador3 = new Observador('observador 3')
let observador4 = new Observador('observador 4')

let observador5 = new Observador('Sala maleico')

observado.incluirAssinante(observador1)
observado.incluirAssinante(observador2)
observado.incluirAssinante(observador3)
observado.incluirAssinante(observador4)

observado.incluirAssinante(observador5)

observado.inserirDados = ['dado 1',' dado 2']

observado.excluirAssinante(observador4)

observado.inserirDados = ['dados novos']

noticia.incluirAssinante(observador5)
noticia.incluirAssinante(observador2)
noticia.incluirAssinante(observador4)

noticia.inserirDados = ["Bolsonaro aceita proposta de lula"]

noticia.excluirAssinante(observador5)

noticia.inserirDados = ["Data de casamento marcado entre lula e bolsonaro"]