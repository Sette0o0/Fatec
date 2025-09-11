def fat(n):
    if n == 0 or n == 1: return 1
    return n * fat(n - 1)

print(fat(3))

'''
def fat(3):
    if 3 == 0 or 3 == 1: return 1
    return 3 * fat(2) # ao acordar 3 * 2 = 6

def fat(2):
    if 2 == 0 or 2 == 1: return 1
    return 2 * fat(1) # ao acordar 2 * 1 = 2

def fat(1):
    if 1 == 0 or 1 == 1: return 1
'''

def pot(x, n): #potencia de x elevado a n, sem usar **
    if n == 0: return 1
    return x * pot(x, n-1)

print(pot(2, 3)) # saida é 8

'''
def pot(2, 3):
    if 3 == 0:
    return 2 * pot(2, 2) # acorda 2 * 4 = 8

def pot(2, 2):
    if 2 == 0:
    return 2 * pot(2, 1) # acorda 2 * 2 = 4

def pot(2, 1):
    if 1 == 0:
    return 2 * pot(2, 0) # acorda 2 * 1 = 2

def pot(2, 0):
    if 0 == 0: return 1
'''

def inv(s):     # inv('abacate') = 'etacaba'
    if len(s) == 0: return ''
    return s[-1] + inv(s[:-1])

print('inv ', inv('abacate'))

def sd(n):      # sd(123) = 1 + 2 + 3 = 6
    if n >= 1 and n < 10: return n
    return n % 10 + sd(n//10)

print('sd ', sd(123))

def fib(n):     # fib(3) = 2
    if n == 1 or n == 2: return 1
    return fib(n-1) + fib(n-2)


print(f'fib {fib(3)}')
# fib(100) trava e demora muito ent tem solucão melhor
# importar a biblioteca functool cache

def mdc(a, b):      # mdc(21, 15) = 3
    if b == 0: return a
    return mdc(b, a%b)

print(mdc(21, 16))


def dec2bin(n):     # dec2bin(18) = '10010'
    if n == 0: return ''
    return dec2bin(n//2) + str(n%2)

print(dec2bin(18))
