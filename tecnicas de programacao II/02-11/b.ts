class Produto {
    public nome: string
    public lote: string
    public fabricante: string
    public dataFabricante: string
    public preco: number
}

const calculadorPreco = (produto: Produto, taxa: number) => {
    return produto.preco * taxa
}

const descritor = (produto: Produto) => {
    return `Nome: ${produto.nome}\n${produto.lote}`
}