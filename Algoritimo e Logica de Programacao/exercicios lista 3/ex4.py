x = int(input("Digite um número inteiro: "))

a, b = 1, 1
count = 0

while count < x - 1:
    a, b = b + a, a
    count += 1

print(b)