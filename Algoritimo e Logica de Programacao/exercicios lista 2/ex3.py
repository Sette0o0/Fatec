from math import ceil
peso_peixes = float(input("Peso dos peixes (kg): "))

taxa_multa = 4
peso_max = 50
multa = 0
excesso = 0

if peso_peixes > peso_max: # Vai ter q pagar multa
    excesso = peso_peixes - peso_max
    multa = taxa_multa * (excesso // 1 + (1 if (excesso % 1) > 0 else 0))
    print(f"O peso passa do máximo estabelecido pelo regulamento que é de {peso_max} kg, a multa é de R$ {taxa_multa:.2f} por quilo excedente,\no excesso foi de {excesso:.2f} kg, logo o valor a ser pago será de R$ {multa:.2f}.")

else:
    print(f"Não teve excesso (excesso = {excesso}), logo nenhuma multa deverá ser paga (multa = {multa}).")