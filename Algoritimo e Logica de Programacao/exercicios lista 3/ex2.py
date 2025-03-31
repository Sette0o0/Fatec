while True:
    nome = input("Digite seu nome de usuário: ")
    senha = input("Digite sua senha: ")
    if nome == senha:
        print("Erro: O nome de usuário e senha não podem ser iguais.")
    else:
        print("Nome e senha válidos.")
        break