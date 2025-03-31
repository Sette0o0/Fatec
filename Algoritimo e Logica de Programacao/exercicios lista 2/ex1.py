print("\nVerifica se as medidas informadas formam um triângulo.")
med1 = float(input("Primeira medida: "))
med2 = float(input("Segunda medida: "))
med3 = float(input("Terceira medida: "))
if med1 + med2 > med3 and med2 + med3 > med1 and med3 + med1 > med2:
    print(f"As medidas {med3}, {med2} e {med1} podem formar um triângulo.")
    if med1 == med2 == med3:
        print("O triângulo é equilátero.")
    elif med1 == med2 or med1 == med3 or med2 == med3:
        print("O triângulo é isósceles.")
    else:
        print("O triângulo é escaleno.")
else:
    print(f"As medidas {med3}, {med2} e {med1} não podem formar um triângulo.")