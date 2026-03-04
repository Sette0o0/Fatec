class Produto {
    public nome: string
    public lote: string
    public fabricante: string
    public dataFabricante: string
    public preco: number
}

abstract class CalculadorPreco {
    public produto: Produto
    public abstract calcularPreco(taxa: number): number
}

class CalculadorPrecoDescontoDinheiro extends CalculadorPreco {
    public calcularPreco(valor: number): number {
        return this.produto.preco - valor
    }
}

class CalculadorPrecoDescontoPorcentagem extends CalculadorPreco {
    public calcularPreco(desconto: number): number {
        let preco = this.produto.preco
        return preco - (preco * (desconto / 100))
    }
}