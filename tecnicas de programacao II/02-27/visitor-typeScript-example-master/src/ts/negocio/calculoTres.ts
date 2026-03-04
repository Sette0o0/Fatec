import Elemento from "../interfaces/elemento";
import visitante from "../interfaces/visitante";

export default class CalculoTres implements Elemento {
    private numero1: number
    private numero2: number
    private numero3: number

    constructor(numero1: number, numero2: number, numero3: number) {
        this.numero1 = numero1
        this.numero2 = numero2
        this.numero3 = numero3
    }

    public get n1(){
        return this.numero1
    }

    public get n2(){
        return this.numero2
    }

    public get n3(){
        return this.numero3
    }

    aceitar(visitante: visitante): void {
        visitante.visitar(this)
    }
}