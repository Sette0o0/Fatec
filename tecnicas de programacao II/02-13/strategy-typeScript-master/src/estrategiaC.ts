import Estrategia from "./estrategia";

export default class EstrategiaC implements Estrategia{
    processamento(): void {
        console.log("Objeto do tipo estrategia C em execução")
    }
}