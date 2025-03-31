from random import sample
numeros = sample(range(1, 101), 10)

print(numeros)

menor = numeros[0]
maior = numeros[0]

for a in numeros:
    if a < menor:
        menor = a

    if a > maior:
        maior = a

print(f"Maior {maior}. Menor {menor}.")
