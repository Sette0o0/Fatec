print("Digite dois números para ver o mdc deles.")
maior = int(input("Maior número: "))
menor = int(input("Menor número: "))
a = maior
b = menor
while b != 0:
    a, b = b, a % b

print(f'''O mdc de {maior} e {menor} é {a}.''')