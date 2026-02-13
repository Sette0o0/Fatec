import Estrategia from "./estrategia";

export default class Cliente {
    public set processarEstrategia(estrategia: Estrategia) {
        estrategia.processamento()
    }
}

