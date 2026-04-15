import Alimentacao from "../interfaces/alimentacao";
import Musica from "../interfaces/musica";
import AlimentacaoFunk from "../modelos/alimentacaoFunk";
import MusicaFunk from "../modelos/musicaFunk";
import FabricaEvento from "./fabricaEvento";

export default class FestaNoturna implements FabricaEvento {
    criarAlimentacao(): Alimentacao {
        let alimentacao = new AlimentacaoFunk('Churrasco',
            'Churrasco é bom para.')
        return alimentacao
    }

    criarMusica(): Musica {
        let musica = new MusicaFunk("Nicolas Netooo", "Nicolas Neto", "9h", "2022")
        return musica
    }
}