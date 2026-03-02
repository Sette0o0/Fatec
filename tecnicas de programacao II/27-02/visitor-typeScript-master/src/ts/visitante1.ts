
import ObjetoA from "./objetoA";
import ObjetoB from "./objetoB";
import ObjetoC from "./objetoC";
import Visitante from "./visitante";


export default class Visitante1 implements Visitante {
    visitarObjetoA(objeto: ObjetoA): void {
        console.log(`Visitante 1`);
        console.log(`Processando objeto do tipo A`);
    }
    visitarObjetoB(objeto: ObjetoB): void {
        console.log(`Visitante 1`);
        console.log(`Processando objeto do tipo B`);
    }
    visitarObjetoC(objeto: ObjetoC): void {
        console.log(`Visitante 1`);
        console.log(`Processando objeto do tipo C`);
    }
}