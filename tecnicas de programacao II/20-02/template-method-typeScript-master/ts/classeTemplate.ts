export default abstract class ClasseTemplate {
    protected etapa1(): void {
        console.log('Etapa 1 do processemanto, executada para todos')
    }
    protected etapa2(): void {
        console.log('Etapa 2 do processemanto,executada para todos')
    }

    protected abstract etapa3(): void
    protected abstract etapa4(): void

    protected etapa5(): void {
        console.log('Etapa 5 do processemanto,executada para todos')
    }
    protected etapa6(): void {
        console.log('Etapa 6 do processemanto, executada para todos')
    }

    public templateMethod():void{
        this.etapa1();
        this.etapa2();
        this.etapa3();
        this.etapa4();
        this.etapa5();
        this.etapa6();
    }
}

