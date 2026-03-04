class Exemplo2 {
    private static instanciaUnica: Exemplo2 = new Exemplo2()
    private constructor() {}
    public static obterInstancia(): Exemplo2 {
        return this.instanciaUnica;
    }
}
export default Exemplo2