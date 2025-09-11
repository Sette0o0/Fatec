#1
def maior_menor_q (lista, limite):
    menores = [num for num in lista if num < limite]

    if len(menores) == 0:
        return None

    maior = menores[0]
    for num in menores:
        if maior < num:
            maior = num

    return maior

#7
def zigzag (texto):
    return ''.join([letra.upper() if index % 2 == 0 else letra for index, letra in enumerate(texto)])

print(zigzag('Minha panela cobra Muito Carããão'))

