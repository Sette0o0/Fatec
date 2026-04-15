import Alimentacao from "../interfaces/alimentacao";
import Musica from "../interfaces/musica";

export default interface FabricaEvento{
    criarAlimentacao():Alimentacao
    criarMusica():Musica
}