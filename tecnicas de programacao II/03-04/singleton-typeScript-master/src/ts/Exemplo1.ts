class Exemplo1 {
    private static instanciaUnica: Exemplo1
    private constructor() {}
    public static obterInstancia(): Exemplo1 {
        if (!Exemplo1.instanciaUnica) {
            this.instanciaUnica = new Exemplo1()
        }
        return this.instanciaUnica;
    }
}
export default Exemplo1