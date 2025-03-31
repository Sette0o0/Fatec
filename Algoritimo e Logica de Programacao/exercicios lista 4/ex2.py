from random import sample
numeros = sample(range(1, 101), 20)

impar = []
par = []

for numero in numeros:
    if numero % 2 == 0: # par
        par.append(numero)
    else:
        impar.append(numero)

print(f"""Números: {numeros}.
pares: {par}.
Ímpares: {impar}.""")