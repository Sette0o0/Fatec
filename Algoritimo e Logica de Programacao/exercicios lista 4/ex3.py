from random import sample
lista1 = sample(range(1, 101), 10)
lista2 = sample(range(1, 101), 10)

lista3 = []

for a in range(len(lista1)):
    lista3.append(lista1[a])
    lista3.append(lista2[a])

print(f"""Lista 1: {lista1}.
Lista 2: {lista2}.
Lista 3: {lista3}.""")