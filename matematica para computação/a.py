def recorrencia(z, n):
    termo = z / 2
    soma = termo
    for k in range(1, n):
        termo = termo * (-z) / (k + 2)
        soma += termo
    return soma

print(recorrencia(2, 50000))
