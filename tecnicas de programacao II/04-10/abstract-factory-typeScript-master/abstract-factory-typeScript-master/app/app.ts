import FestaInfantil from "../fabricas/festaInfantil";
import FestaNoturna from "../fabricas/festaNoturna";

let fabrica = new FestaNoturna()

let alimento = fabrica.criarAlimentacao()
let musica = fabrica.criarMusica()

console.log(`Cardápio: ${alimento.obterDescricao()}`);
console.log(`Informações da trilha sonora: 
nome: ${musica.obterNome()}
autor: ${musica.obterAutor()}
duração: ${musica.obterTempoDuracao()}`);
