import Pessoa from "./pessoa";

export default class MostrarDados{
    mostrarDados(pessoa: Pessoa){
        console.log(pessoa.dados())
    }
}