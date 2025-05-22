area = float(input("Tamanho da área (m²): "))

litros = area / 3
latas = int(litros // 18)
if litros % 18:
    latas += 1

print(f"O total de latas necessárias será {latas} e custará R$ {latas * 80}.")
