def recorencia(z, n):
  cima = z
  baixo = 2
  soma = cima/baixo
  for x in range(1, n):
    cima = cima * -z
    baixo = baixo * (x + 2)
    soma += cima/baixo

  return soma

print(recorencia(2, 4500))