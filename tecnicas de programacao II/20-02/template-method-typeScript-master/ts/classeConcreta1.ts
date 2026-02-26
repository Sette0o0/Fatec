import ClasseTemplate from "./classeTemplate"

export default class ClasseConcreta1 extends ClasseTemplate{
    protected etapa3(): void {
        console.log('Execução da etapa 3. Implementação realizada pela ClasseConcreta 1')
    }
    protected etapa4(): void {
        console.log('Execução da etapa 4. Implementação realizada pela ClasseConcreta 1')
    }
}

