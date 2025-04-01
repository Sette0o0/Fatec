# Coding Dojo

# fizzbuzz
# Seja um inteiro positivo n, devolve 'Fizz' se ele for
# divisível por 3, 'Buzz' se for divisível por 5,
# 'FizzBuzz' se for divisível ao mesmo tempo por 3 e 5
# e o inteiro n em todos os outros casos
def fizzbuzz(n):
    n30 = n % 3 == 0
    n50 = n % 5 == 0
    if n30 and n50:
        return 'FizzBuzz'
    elif n30:
        return "Fizz"
    elif n50:
        return "Buzz"
    else:
        return n

# soma múltiplos de 3 ou 5
# soma todos os múltiplos de 3 ou 5 abaixo de um inteiro n
# soma(5) -> 3    soma(10) -> 23 = 3 + 5 + 6 + 9
# soma(20) -> 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18
def soma(n):
    soma = 0
    for numero in range(n):
        if numero % 3 == 0 or numero % 5 == 0:
            soma += numero
    return soma

# maiusculas
# seja a ordem GoogleOn, traduza uma palavra
# no idioma GoogleOn para nosso alfabeto em maiúsculas
ordem = 'zmbtshjpnwlrcxkqvdgf'
maius = 'ABCDEFGHIJKLMNOPQRST'


def maiusculas(palavra):
    traducao = ''
    for letra in palavra:
        traducao += maius[ordem.find(letra)]
    return traducao

# valor
# No GoogleOn palavras são números em base 20, onde
# cada letra é um dígito, e os dígitos são ordenados
# do menos significativo ao mais significativo, isto
# é ao contrário do usual, primeira posição é unidade
# segunda unidade se multiplica por 20, terceira por
# 400 e assim por diante, obtemos o valor do dígito
# pela posição da letra na ordem GoogleON, isto é,
# primeiro dígito vale zero, segundo vale 1, etc
# Transforme para o valor número uma palavra GoogleOn
def valor(p):
    soma = 0
    elevado = 0
    mult = 0
    for letra in p:
        pass

    return soma

# mágico
# use a função valor acima para pegar o valor númerico
# caso esse valor seja divisível por 42
# e além disso, ter todas as letras diferentes
# esse número é considerado mágico
# devolva True se é mágico e False caso contrário
# dica: use a função set para ver letras iguais
def mágico(p):
    return


# vogais_consecutivas
# Seja um texto, com maíusculas e minúsculas. Retorne a maior
# sequência de vogais. vogais_consecutivas('abacate') -> 1
# vogais_consecutivas('beautiful') -> 3
# vogais_consecutivas('xaaxeeexiixooooxuu') -> 4
# vogais_consecutivas('AaEeIiOoUu') -> 10
def vogais_consecutivas(texto):
    texto = texto.lower()
    consec = 0
    x = 0
    for letra in texto:
        if letra in 'aeiou':
            x += 1
        elif letra not in 'aeiou':
            x = 0
        if x > consec:
            consec = x
    return consec

# papagaio
# temos um papagaio que fala alto
# hora é um parâmetro entre 0 e 23
# temos problemas se o papagaio estiver falando
# antes da 7 ou depois das 20
def papagaio(falando, hora):
    if falando:
        if hora < 7 or hora > 20:
            return True
        else:
            return False
    else:
        return False

# apaga
# seja uma string s e um inteiro n
# retorna uma nova string sem a posição n
# apaga('kitten', 1) -> 'ktten'
# apaga('kitten', 4) -> 'kittn'
def apaga(s, n):
    resp = ''
    resp = f'{s[0:n]}{s[n+1:]}'
    return resp

# troca
# seja uma string s
# se s tiver tamanho <= 1 retorna ela mesma
# caso contrário troca a primeira e última letra
# troca('code') -> 'eodc'
# troca('a') -> 'a'
# troca('ab') -> 'ba'
def troca(s):
    return


# string_splosion
# string_splosion('Code') -> 'CCoCodCode'
# string_splosion('abc') -> 'aababc'
# string_splosion('ab') -> 'aab'
def string_splosion(s):
    return


# roda2
# rodar uma string s duas posições
# a string possui pelo menos 2 caracteres
# left2('Hello') -> 'lloHe'
# left2('Hi') -> 'Hi'
def roda2(s):
    return


# sum2 #
# Dada uma lista de inteiros de qualquer tamanho
# retorna a soma dos dois primeiros elementos
# se a lista tiver menos de dois elementos, soma o que for possível
def sum2(nums):
    return


# G. date_fashion
# você e sua namorada(o) vão a um restaurante
# eu e par são as notas das suas roupas de 0 a 10
# quanto maior a nota mais chique vocês estão vestidos
# o resultado é se vocês conseguiram uma mesa no restaurante:
# 0=não 1=talvez e 2=sim
# se a nota da roupa de um dos dois for menor ou igual a 2
# vocês não terão direito à uma mesa (0)
# se as notas são maiores, então caso um dos dois esteja
# bem chique (nota >= 8) então a resposta é sim (2)
# caso contrário a resposta é talvez (1)
# date_fashion(5, 10) -> 2
# date_fashion(5, 2) -> 0
# date_fashion(5, 5) -> 1
def date_fashion(eu, par):
    return


# H. squirrel_play
# os esquilos na FATEC brincam quando a temperatura está entre 60 e 90
# graus Fahreneit (são estrangeiros e o termômetro é diferente rs)
# caso seja verão, então a temperatura superior é 100 no lugar de 90
# retorne True caso os esquilos brinquem
# squirrel_play(70, False) -> True
# squirrel_play(95, False) -> False
# squirrel_play(95, True) -> True
def squirrel_play(temp, is_summer):
    return


# I. pego_correndo
# você foi pego correndo
# o resultado será:
# sem multa = 0
# multa média = 1
# multa grave = 2
# velocidade <= 60 sem multa
# velocidade entre 61 e 80 multa média
# velocidade maior que 81 multa grave (cidade do interior)
# caso seja seu aniversário a velocidade pode ser 5 km/h maior em todos os casos
# pego_correndo(60, False) -> 0
# pego_correndo(65, False) -> 1
# pego_correndo(65, True) -> 0
def pego_correndo(speed, is_birthday):
    return


# J. alarm_clock #
# day: 0=domingo, 1=segunda, 2=terça, ..., 6=sábado
# vacation = True caso você esteja de férias
# o retorno é uma string que diz quando o despertador tocará
# dias da semana '07:00'
# finais de semana '10:00'
# a menos que você esteja de férias, neste caso:
# dias da semana '10:00'
# finais de semana 'off'
# alarm_clock(1, False) -> '7:00'
# alarm_clock(5, False) -> '7:00'
# alarm_clock(0, False) -> '10:00'
def alarm_clock(day, vacation):
    return


# primo
# verifique se um inteiro positivo n é primo
# isto é somente divisível por 1 e por ele mesmo
# primo(5) -> True   primo(42) -> False
# primo (5501) -> True  primo(104693) -> True
def primo(n):
    return


# Provided simple test() function used in main() to print
# what each function returns vs. what it's supposed to return.
def test(obtido, esperado):
    if obtido == esperado:
        prefixo = ' Parabéns!'
    else:
        prefixo = ' Ainda não'
    print('%s obtido: %s esperado: %s'
          % (prefixo, repr(obtido), repr(esperado)))


def main():
    print('fizzbuzz')
    test(fizzbuzz(1), 1)
    test(fizzbuzz(2), 2)
    test(fizzbuzz(3), 'Fizz')
    test(fizzbuzz(4), 4)
    test(fizzbuzz(5), 'Buzz')
    test(fizzbuzz(6), 'Fizz')
    test(fizzbuzz(7), 7)
    test(fizzbuzz(15), 'FizzBuzz')
    test(fizzbuzz(30), 'FizzBuzz')
    print()

    print('soma')
    test(soma(1), 0)
    test(soma(5), 3)
    test(soma(10), 23)
    test(soma(20), 78)
    print()


    print('maiusculas')
    test(maiusculas('zzrr'), 'AALL')
    test(maiusculas('zmnc'), 'ABIM')
    print()

    print('valor')
    test(valor('zmbzmb'), 6560820)
    test(valor('jplzc'), 1924146)
    print()

    print('mágico')
    test(mágico('zmbzmb'), False)
    test(mágico('jplzc'), True)
    print()

    print('vogais_consecutivas')
    test(vogais_consecutivas('xxxx'), 0)
    test(vogais_consecutivas('abacate'), 1)
    test(vogais_consecutivas('beautiful'), 3)
    test(vogais_consecutivas('xaaxeeexiixooooxuu'), 4)
    test(vogais_consecutivas('AaEeIiOoUu'), 10)

    print()
    print('Papagaio')
    test(papagaio(True, 6), True)
    test(papagaio(True, 7), False)
    test(papagaio(False, 6), False)
    test(papagaio(True, 21), True)
    test(papagaio(False, 21), False)
    test(papagaio(True, 23), True)
    test(papagaio(True, 20), False)

    print()
    print('Apaga')
    test(apaga('kitten', 1), 'ktten')
    test(apaga('aaaaaa', 3), 'aaaaa')
    test(apaga('kitten', 0), 'itten')
    test(apaga('kitten', 4), 'kittn')
    test(apaga('Hi', 0), 'i')
    test(apaga('Hi', 1), 'H')
    test(apaga('code', 0), 'ode')
    test(apaga('code', 1), 'cde')
    test(apaga('code', 2), 'coe')
    test(apaga('code', 3), 'cod')
    test(apaga('chocolate', 8), 'chocolat')

    print()
    print('Troca letras')
    test(troca('code'), 'eodc')
    test(troca('a'), 'a')
    test(troca('ab'), 'ba')
    test(troca('abc'), 'cba')
    test(troca(''), '')
    test(troca('Chocolate'), 'ehocolatC')
    test(troca('nythoP'), 'Python')
    test(troca('hello'), 'oellh')

    print()
    print('String Explosion')
    test(string_splosion('Code'), 'CCoCodCode')
    test(string_splosion('abc'), 'aababc')
    test(string_splosion('ab'), 'aab')
    test(string_splosion('x'), 'x')
    test(string_splosion('fade'), 'ffafadfade')
    test(string_splosion('There'), 'TThTheTherThere')
    test(string_splosion('Kitten'), 'KKiKitKittKitteKitten')
    test(string_splosion('Bye'), 'BByBye')
    test(string_splosion('Good'), 'GGoGooGood')
    test(string_splosion('Bad'), 'BBaBad')

    print()
    print('Roda 2')
    test(roda2('Hello'), 'lloHe')
    test(roda2('python'), 'thonpy')
    test(roda2('Hi'), 'Hi')
    test(roda2('code'), 'deco')
    test(roda2('cat'), 'tca')
    test(roda2('12345'), '34512')
    test(roda2('Chocolate'), 'ocolateCh')
    test(roda2('bricks'), 'icksbr')

    print()
    print('sum2')
    test(sum2([1, 2, 3]), 3)
    test(sum2([1, 1]), 2)
    test(sum2([1, 1, 1, 1]), 2)
    test(sum2([1, 2]), 3)
    test(sum2([1]), 1)
    test(sum2([]), 0)
    test(sum2([4, 5, 6]), 9)
    test(sum2([4]), 4)

    print()
    print('date fashion')
    test(date_fashion(5, 10), 2)
    test(date_fashion(5, 2), 0)
    test(date_fashion(5, 5), 1)
    test(date_fashion(3, 3), 1)
    test(date_fashion(10, 2), 0)
    test(date_fashion(2, 9), 0)
    test(date_fashion(9, 9), 2)
    test(date_fashion(10, 5), 2)
    test(date_fashion(2, 2), 0)
    test(date_fashion(3, 7), 1)
    test(date_fashion(2, 7), 0)
    test(date_fashion(6, 2), 0)

    print()
    print('squirrel_play')
    test(squirrel_play(70, False), True)
    test(squirrel_play(95, False), False)
    test(squirrel_play(95, True), True)
    test(squirrel_play(90, False), True)
    test(squirrel_play(90, True), True)
    test(squirrel_play(50, False), False)
    test(squirrel_play(50, True), False)
    test(squirrel_play(100, False), False)
    test(squirrel_play(100, True), True)
    test(squirrel_play(105, True), False)
    test(squirrel_play(59, False), False)
    test(squirrel_play(59, True), False)
    test(squirrel_play(60, False), True)

    print()
    print('Pego correndo')
    test(pego_correndo(60, False), 0)
    test(pego_correndo(65, False), 1)
    test(pego_correndo(65, True), 0)
    test(pego_correndo(80, False), 1)
    test(pego_correndo(85, False), 2)
    test(pego_correndo(85, True), 1)
    test(pego_correndo(70, False), 1)
    test(pego_correndo(75, False), 1)
    test(pego_correndo(75, True), 1)
    test(pego_correndo(40, False), 0)
    test(pego_correndo(40, True), 0)
    test(pego_correndo(90, False), 2)

    print()
    print('Alarm Clock')
    test(alarm_clock(1, False), '7:00')
    test(alarm_clock(5, False), '7:00')
    test(alarm_clock(0, False), '10:00')
    test(alarm_clock(6, False), '10:00')
    test(alarm_clock(0, True), 'off')
    test(alarm_clock(6, True), 'off')
    test(alarm_clock(1, True), '10:00')
    test(alarm_clock(3, True), '10:00')
    test(alarm_clock(5, True), '10:00')
    print()

    print('Primo')
    test(primo(5), True)
    test(primo(42), False)
    test(primo(5501), True)
    test(primo(104693), True)
    print()

if __name__ == '__main__':
    main()
