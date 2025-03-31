money_hora = float(input("Digite o quanto você ganha por hora (R$): "))
horas_trabalhadas_mes = int(input("Coloque as horas trabalhadas no mês: "))

salario_bruto = money_hora * horas_trabalhadas_mes
ir = 0.11
inss = 0.08
sindicato = 0.05
salario_liquido = salario_bruto
salario_liquido -= salario_bruto * ir
salario_liquido -= salario_bruto * inss
salario_liquido -= salario_bruto * sindicato

print(f"Salário bruto R$ {salario_bruto:.2f}. Pago ao INSS R$ {salario_bruto*inss:.2f}, ao sindicato R$ {salario_bruto*sindicato:.2f} e ao imposto de renda R$ {salario_bruto*ir:.2f}. Salário líquido R$ {salario_liquido:.2f}.")