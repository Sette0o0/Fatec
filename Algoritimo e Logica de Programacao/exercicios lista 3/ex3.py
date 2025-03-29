a = 80000
crescA = 1 + (3/100)

b = 200000
crescB = 1 + (15/1000)

anos = 0

while a <= b:
    a *= crescA
    b *= crescB

    anos += 1

print(f'''O país A demorou {anos} anos para alcançar a população do país B.
População atual do país A = {a:.0f}.
População atual do país B = {b:.0f}''')