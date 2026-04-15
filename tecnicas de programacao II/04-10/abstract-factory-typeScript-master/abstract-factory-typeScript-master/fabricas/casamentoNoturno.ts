import Alimentacao from "../interfaces/alimentacao"
import Musica from "../interfaces/musica"
import AlimentacaoClassica from "../modelos/alimentacaoClassica"
import MusicaClassica from "../modelos/musicaClassica"
import FabricaEvento from "./fabricaEvento"

export default class CasamentoNoturno implements FabricaEvento {
    criarAlimentacao(): Alimentacao {
        let alimentacao = new AlimentacaoClassica('Risoto de Shitake e Shimeji',
            'Nada como um bom risoto com vinho para uma noite especial! O Risoto de Shitake e Shimeji cai bem para fazer um jantar especial e é uma excelente opção vegetariana. Perfeito para eventos como casamentos e festas de aniversário mais formais.')
        return alimentacao
    }
    criarMusica(): Musica {
        let musica = new MusicaClassica('Sucesso de chopin', 'Associação Filarmonica Joseense', '6h', '1999')
        return musica
    }

}