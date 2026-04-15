import tipoC from "../interfaces/tipoC";

export default class objetoC1 implements tipoC {
    public atributo2: string
    public atributo1: string

    dadoTipoC(): {texto: string} {
        return {texto: "dados tipo C1"}
    }
}