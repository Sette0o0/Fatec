def invert_p(frase):
    nova = []
    pilha = frase.split()
    while pilha:
        nova.append(pilha[-1])
        pilha.pop()
    return ' '.join(nova)

print(invert_p('banana chocolate arroz cha'))