import Calculo from "./calculo";

export default class Bhaskara extends Calculo {
    public calcular(numeros: number[]): { x1?: number, x2?: number, mensagem?: string} {
        const [a, b, c] = numeros;
        const delta = b**2 - 4*a*c;

        if (delta < 0) {
            return { mensagem: "Delta negativo! Raízes complexas." };
        }

        const x1 = (-b + Math.sqrt(delta)) / (2*a);
        const x2 = (-b - Math.sqrt(delta)) / (2*a);
        return { x1, x2 };
    }
}