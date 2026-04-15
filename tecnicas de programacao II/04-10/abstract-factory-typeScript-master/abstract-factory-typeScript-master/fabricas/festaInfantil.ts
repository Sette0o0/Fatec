import Alimentacao from "../interfaces/alimentacao"
import Musica from "../interfaces/musica"
import AlimentacaoCountry from "../modelos/alimentacaoCountry"
import AlimentacaoFesta from "../modelos/alimentacaoFesta"
import MusicaClassica from "../modelos/musicaClassica"
import FabricaEvento from "./fabricaEvento"

export default class FestaInfantil implements FabricaEvento {
    criarAlimentacao(): Alimentacao {
        let alimentacao = new AlimentacaoFesta('Carne louca',
            'Não é à toa que carne louca é um clássico para receber os amigos: além de deliciosa, é o tipo de receita que fica ainda melhor se preparada com antecedência. Perfeita para um ambiente alegre, como festas de aniversários.')
        return alimentacao
    }
    criarMusica(): Musica {
        let musica = new MusicaClassica('Xuxa só para baixinhos vol. 1000', 'Xuxa', '6h', '2002')
        return musica
    }

}