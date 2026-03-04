import Estrategia from "./estrategia";

export default class EstrategiaB implements Estrategia{
    processamento(): void {
        console.log(`Objeto do tipo estrategia B em execução`);
    }
}

