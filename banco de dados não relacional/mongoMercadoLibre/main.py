from usuario.crud import *

key = 0
sub = 0
while (str(key).upper() != 'S'):
    print("1-CRUD Usuário")
    print("2-CRUD Vendedor")
    print("3-CRUD Produto")
    key = input("Digite a opção desejada? (S para sair) ")

    if (key == '1'):
        print("Menu do Usuário")
        print("1-Create Usuário")
        print("2-Read Usuário")
        print("3-Update Usuário")
        print("4-Delete Usuário")
        sub = input("Digite a opção desejada? (V para voltar) ")
        if (sub == '1'):
            print("Create usuario")
            create_usuario()
            
        elif (sub == '2'):
            nome = input("Read usuário, deseja algum nome especifico? ")
            read_usuario(nome)
        
        elif (sub == '3'):
            nome = input("Update usuário, deseja algum nome especifico? ")
            update_usuario(nome)

        elif (sub == '4'):
            print("delete usuario")
            nome = input("Nome a ser deletado: ")
            sobrenome = input("Sobrenome a ser deletado: ")
            delete_usuario(nome, sobrenome)
            
    elif (key == '2'):
        print("Menu do Vendedor")        
    elif (key == '3'):
        print("Menu do Produto")        

print("Tchau Prof...")
