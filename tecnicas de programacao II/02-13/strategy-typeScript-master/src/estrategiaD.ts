import Estrategia from "./estrategia";

export default class EstrategiaD implements Estrategia{
    processamento(): void {
        console.log("Objeto do tipo estrategia D em execução")
    }
}