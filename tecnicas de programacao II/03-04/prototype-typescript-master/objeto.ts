import Prototipo from "./prototipo"

class Objeto implements Prototipo {
    atributo1: any
    atributo2: any
    clonar() {
        let objeto = new Objeto()
        objeto.atributo1 = this.atributo1
        objeto.atributo2 = this.atributo2
        return objeto
    }
}
export default Objeto