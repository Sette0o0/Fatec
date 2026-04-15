import alimentacao from "../interfaces/alimentacao";
import musica from "../interfaces/musica";
import AlimentacaoCountry from "../modelos/alimentacaoCountry";
import MusicaCountry from "../modelos/musicaCountry";
import FabricaEvento from "./fabricaEvento";

export default class FeiraAgropecuaria implements FabricaEvento {
    criarAlimentacao(): alimentacao {
        let alimentacao = new AlimentacaoCountry('Galinhada',
        'Galinhada é um prato culinário típico da culinária brasileira, mais especificamente dos estados de São Paulo, Minas Gerais e Goiás. De origem bandeirante, consiste em arroz cozido e frango em pedaços cozido. O tempero é composto de açafrão, vinagrete, e tutu de feijão.')
        return alimentacao
    }
    criarMusica(): musica {
        let musica = new MusicaCountry('Sucesso de Chitãozinho & Xororó','Chitãozinho & Xororó','12h','1986')
        return musica
    }

}