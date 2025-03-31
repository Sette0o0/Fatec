while True:
    nota = float(input("Insira uma nota de 0 a 10: "))
    if nota < 0 or nota > 10:
        print("A nota inserida não é válida. Para ser válida ela deve ser no mínimo 0 e no máximo 10.")
    else:
        print("Nota válida.")
        break