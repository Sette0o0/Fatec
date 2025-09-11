from random import sample

#Seja uma lista de inteiros, mostre apenas os números pares usando list comprehension.
lista = range(1, 21)
print([x for x in lista if x % 2 == 0])

#Crie uma lista com os quadrados de todos os números pares de 1 a 20 usando list comprehension.
print([x ** 2 for x in lista if x % 2 == 0])

#Dada uma lista de palavras, ordene-a pelo tamanho das palavras em ordem crescente, utilizando sorted() com a cláusula key=.
listaPalavra = ['Rafael', 'Rebeca', 'Enzo', 'Rubim', 'Lazaro', "Moura"]
print(sorted(listaPalavra, key=len))
"""listaPalavra.sort(key=len, reverse=True)
print(listaPalavra)"""

#Dada uma lista de palavras, ordene-a pelo número de vogais presentes em cada palavra.
def countVowels(nome):
    x = 0
    for letra in nome:
        if letra.lower() in 'aeiou':
            x += 1
    return x
print(sorted(listaPalavra, key=countVowels))

#Dada uma lista de palavras, ordene-a pelo último caractere de cada palavra.
def getLastter(nome):
    return nome[-1]
print(sorted(listaPalavra, key=getLastter))

#Dada uma string, utilize list comprehension para criar uma nova string onde os caracteres aparecem alternando entre maiúsculas e minúsculas.
texto = 'Xapadao da Silva Lima'
cobrinha = ''.join([letra.upper() if x % 2 == 0 else letra.lower() for x, letra in enumerate(texto)])
print(cobrinha)

#Dada uma lista de strings contendo números misturados com letras (por exemplo, "a3b", "z12y", "c1x"), ordene a lista com base no número contido na string.
lettum = 'ab1g hg48ht 12nt puty5 why23not'.split()
def getNums(text):
    num = ''
    for letra in text:
        if letra.isdigit():
            num += letra
    return int(num)
print(sorted(lettum, key=getNums))

#Crie um dicionário que mapeia os números de 1 a 10 para seus respectivos quadrados, usando dict comprehension.
print({x: x ** 2 for x in range(1, 11)})

#Dada uma string, crie um dicionário onde as chaves são os caracteres e os valores são a contagem de vezes que cada caractere aparece.
texto = "Pega a catapa".lower()
print({letra: texto.count(letra) for letra in texto if letra != ' '})

#Dado um dicionário qualquer, crie um novo dicionário onde as chaves e os valores estejam invertidos.
dici = {'rafa': "sette", "ana": 'rubim', 'enzo': 'pau'}
print({x2: x1 for x1, x2 in dici.items()})

#Dado um dicionário de números, crie um novo dicionário contendo apenas os pares chave-valor onde o valor seja maior que um determinado número.
dici = {'rafa': 8, "ana": 7, 'enzo': 5}
print({x1: x2 for x1,x2 in dici.items() if x2 > 6})

#Dado um dicionário, ordene-o pelos valores e retorne uma lista de tuplas ordenadas.
dici = {'rafa': 8, "ana": 7, 'enzo': 5}
print(sorted(dici, key=lambda x:dici[x]))
print({nome: dici[nome] for nome in sorted(dici, key=lambda x: dici[x])})

#Dado um dicionário onde as chaves são palavras, ordene-o com base no comprimento das chaves.
dici = {'rafael': 8, "ana": 7, 'enzo': 5}
print({nome: dici[nome] for nome in sorted(dici, key=len)})

#Dada uma frase, crie um dicionário onde as chaves são palavras e os valores são a contagem de vezes que cada palavra aparece.
texto = "soraka bate na cara na cara da outra soraka cara".split()
print({palavra: texto.count(palavra) for palavra in texto})

#Dado um dicionário onde os valores são números, crie um novo dicionário onde cada valor seja a raiz quadrada do original.
dici = {'rafael': 25, "ana": 16, 'enzo': 4}
print({nome: dici[nome] ** 0.5 for nome in dici})

#Dada uma lista de palavras, crie um dicionário onde as chaves sejam as primeiras letras e os valores sejam listas das palavras correspondentes.
lista = 'batata cachorro lixo zabuza botsuana tintura tinturaria tauba'.split()
print({letra: [palavra for palavra in lista if palavra[0] == letra] for letra in sorted(set([x[0] for x in lista]))})

#Dado um dicionário de números, ordene-o pelos valores em ordem decrescente e retorne uma lista de tuplas ordenadas.
dici = {1: 13, 2: 11, 3: 14, 4: 12}
print({chave: dici[chave] for chave in sorted(dici, key=lambda x: int(dici[x]))})