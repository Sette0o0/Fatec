import Estrategia from "./estrategia";

export default class EstrategiaA implements Estrategia{
    processamento(): void {
        console.log(`Objeto do tipo estrategia A em execução`);
    }
}

