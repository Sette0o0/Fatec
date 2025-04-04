"""Questão C. Entre 1067 e 3627 (inclusive), quantos números são pares e também
divisíveis por 7?"""

count = 0
for a in range(1067, 3628):
    if a % 2 == 0 and a % 7 == 0:
        count += 1

print(count)